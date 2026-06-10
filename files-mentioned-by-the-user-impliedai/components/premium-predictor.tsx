"use client";

import { useMemo, useState } from "react";
import {
  BuyerType,
  DealSize,
  PremiumPredictorInput,
  RegulatoryRisk,
  RevenueGrowth,
  Sector,
  StrategicFit,
  calculateOPI
} from "@/lib/calculate-opi";
import { ScoreDial } from "@/components/charts";
import { Eyebrow } from "@/components/section";

const sectors: Sector[] = ["Software", "Healthcare", "Industrials", "Consumer", "Financials", "Energy"];
const buyerTypes: BuyerType[] = ["Strategic", "Private Equity", "Sponsor-backed", "Founder-led"];
const dealSizes: DealSize[] = ["Under $1B", "$1B-$10B", "$10B-$50B", "$50B+"];
const revenueGrowthOptions: RevenueGrowth[] = ["Low", "Medium", "High"];
const strategicFitOptions: StrategicFit[] = ["Low", "Medium", "High"];
const regulatoryRiskOptions: RegulatoryRisk[] = ["Low", "Medium", "High"];

export function PremiumPredictor() {
  const [input, setInput] = useState<PremiumPredictorInput>({
    sector: "Software",
    buyerType: "Strategic",
    dealSize: "$10B-$50B",
    revenueGrowth: "High",
    strategicFit: "High",
    regulatoryRisk: "Medium",
    actualPremium: 48
  });

  const result = useMemo(() => calculateOPI(input), [input]);

  function updateInput<Key extends keyof PremiumPredictorInput>(key: Key, value: PremiumPredictorInput[Key]) {
    setInput((current) => ({
      ...current,
      [key]: value
    }));
  }

  return (
    <section className="glass overflow-hidden rounded-lg">
      <div className="border-b hairline px-6 py-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Eyebrow>Premium Predictor</Eyebrow>
            <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
              ImpliedAI Premium Predictor V1
            </h2>
            <p className="mt-4 max-w-3xl leading-7 text-white/56">
              Enter deal characteristics to estimate a fair acquisition premium, compare it against the actual
              premium, and generate an Overpay Index score.
            </p>
          </div>
          <div className="rounded-full border border-signal/35 bg-signal/10 px-4 py-2 text-sm font-semibold text-cyanline">
            Live preview model
          </div>
        </div>
      </div>

      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="border-b hairline p-6 lg:border-b-0 lg:border-r">
          <div className="grid gap-4 sm:grid-cols-2">
            <SelectField label="Sector" value={input.sector} options={sectors} onChange={(value) => updateInput("sector", value as Sector)} />
            <SelectField label="Buyer Type" value={input.buyerType} options={buyerTypes} onChange={(value) => updateInput("buyerType", value as BuyerType)} />
            <SelectField label="Deal Size" value={input.dealSize} options={dealSizes} onChange={(value) => updateInput("dealSize", value as DealSize)} />
            <SelectField label="Revenue Growth" value={input.revenueGrowth} options={revenueGrowthOptions} onChange={(value) => updateInput("revenueGrowth", value as RevenueGrowth)} />
            <SelectField label="Strategic Fit" value={input.strategicFit} options={strategicFitOptions} onChange={(value) => updateInput("strategicFit", value as StrategicFit)} />
            <SelectField label="Regulatory Risk" value={input.regulatoryRisk} options={regulatoryRiskOptions} onChange={(value) => updateInput("regulatoryRisk", value as RegulatoryRisk)} />
          </div>

          <label className="mt-5 block">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/38">Actual Premium (%)</span>
            <input
              type="number"
              min="0"
              max="150"
              value={input.actualPremium}
              onChange={(event) => updateInput("actualPremium", Number(event.target.value))}
              className="mt-2 w-full rounded-md border border-white/10 bg-black/36 px-4 py-3 text-lg font-semibold text-white outline-none transition placeholder:text-white/30 focus:border-signal/60"
            />
          </label>

          <div className="mt-6 rounded-lg border border-white/10 bg-white/[0.03] p-4">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/36">Factor adjustments</p>
            <div className="mt-4 grid gap-2">
              <AdjustmentRow label="Base Premium" value={result.basePremium} />
              {result.adjustments.map((adjustment) => (
                <AdjustmentRow key={adjustment.label} label={adjustment.label} value={adjustment.value} />
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <OutputCard label="Predicted Fair Premium" value={`${result.fairPremium}%`} />
            <OutputCard label="Actual Premium" value={`${result.actualPremium}%`} />
            <OutputCard label="Premium Spread" value={`${result.spread >= 0 ? "+" : ""}${result.spread}%`} />
            <div className="rounded-lg border border-signal/25 bg-signal/[0.06] p-5">
              <p className="text-xs uppercase tracking-[0.22em] text-white/42">Verdict</p>
              <p className="mt-3 text-xl font-semibold text-cyanline">{result.verdict}</p>
            </div>
          </div>

          <div className="mt-7 grid gap-6 lg:grid-cols-[9rem_1fr] lg:items-center">
            <div className="flex justify-center">
              <ScoreDial score={result.overpayIndex} />
            </div>
            <div>
              <div className="mb-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.22em] text-white/36">Overpay Index Score</p>
                  <p className="mt-2 text-5xl font-semibold text-cyanline">{result.overpayIndex}</p>
                </div>
                <span className="rounded-full border border-signal/35 bg-signal/10 px-4 py-2 text-sm font-semibold text-cyanline">
                  {result.verdict}
                </span>
              </div>
              <PremiumComparison fairPremium={result.fairPremium} actualPremium={result.actualPremium} spread={result.spread} />
            </div>
          </div>

          <div className="mt-7 rounded-lg border border-white/10 bg-black/24 p-5">
            <p className="text-sm leading-7 text-white/56">
              Formula: fair premium starts at 20%, adds factor adjustments, then compares actual premium against
              fair premium. OPI = 50 + spread x 2, capped between 0 and 100.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function SelectField({
  label,
  value,
  options,
  onChange
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <label className="block">
      <span className="text-xs font-bold uppercase tracking-[0.22em] text-white/38">{label}</span>
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="mt-2 w-full appearance-none rounded-md border border-white/10 bg-black/36 px-4 py-3 text-sm font-semibold text-white outline-none transition focus:border-signal/60"
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink text-white">
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function OutputCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-white/36">{label}</p>
      <p className="mt-3 text-3xl font-semibold text-cyanline">{value}</p>
    </div>
  );
}

function AdjustmentRow({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex items-center justify-between gap-4 text-sm">
      <span className="text-white/50">{label}</span>
      <span className={value < 0 ? "font-semibold text-white/70" : "font-semibold text-cyanline"}>
        {value >= 0 ? "+" : ""}
        {value}%
      </span>
    </div>
  );
}

function PremiumComparison({
  fairPremium,
  actualPremium,
  spread
}: {
  fairPremium: number;
  actualPremium: number;
  spread: number;
}) {
  const max = Math.max(60, fairPremium, actualPremium);
  const fairPosition = (fairPremium / max) * 100;
  const actualPosition = (actualPremium / max) * 100;
  const spreadStart = Math.min(fairPosition, actualPosition);
  const spreadWidth = Math.abs(actualPosition - fairPosition);

  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-5 flex items-center justify-between gap-4 text-sm">
        <span className="text-white/42">Premium comparison</span>
        <span className="shrink-0 font-semibold text-cyanline">
          Spread {spread >= 0 ? "+" : ""}
          {spread}%
        </span>
      </div>
      <div className="mb-6 grid gap-3 sm:grid-cols-2">
        <ComparisonValue label="Fair Premium" value={`${fairPremium}%`} tone="fair" />
        <ComparisonValue label="Actual Premium" value={`${actualPremium}%`} tone="actual" />
      </div>
      <div className="relative h-10">
        <div className="absolute left-0 right-0 top-7 h-2 rounded-full bg-white/[0.08]" />
        <div
          className="absolute top-7 h-2 rounded-full bg-gradient-to-r from-signal/45 to-cyanline"
          style={{ left: `${spreadStart}%`, width: `${Math.max(2, spreadWidth)}%` }}
        />
        <Marker position={fairPosition} tone="fair" />
        <Marker position={actualPosition} tone="actual" />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-white/34">
        <span>0%</span>
        <span>{max}%</span>
      </div>
    </div>
  );
}

function ComparisonValue({
  label,
  value,
  tone
}: {
  label: string;
  value: string;
  tone: "fair" | "actual";
}) {
  return (
    <div className="rounded-md border border-white/10 bg-black/24 p-3">
      <p className="text-[0.65rem] uppercase tracking-[0.18em] text-white/34">{label}</p>
      <p className={tone === "actual" ? "mt-1 text-2xl font-semibold text-cyanline" : "mt-1 text-2xl font-semibold text-white/84"}>
        {value}
      </p>
    </div>
  );
}

function Marker({
  position,
  tone
}: {
  position: number;
  tone: "fair" | "actual";
}) {
  return (
    <div className="absolute top-5 -translate-x-1/2" style={{ left: `${position}%` }} aria-hidden="true">
      <div
        className={
          tone === "fair"
            ? "h-6 w-1 rounded-full border border-white/50 bg-white/70 shadow-[0_0_14px_rgba(255,255,255,0.16)]"
            : "h-6 w-1 rounded-full border border-cyanline bg-cyanline shadow-glow"
        }
      />
    </div>
  );
}
