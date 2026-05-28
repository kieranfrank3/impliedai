import Image from "next/image";
import Link from "next/link";
import { BarMatrix, Sparkline } from "@/components/charts";
import { Eyebrow, SectionShell } from "@/components/section";
import { TerminalPanel } from "@/components/terminal-panel";
import { featuredDeals, platformMetrics } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-10">
          <div className="mb-8 flex items-center gap-4">
            <Image src="/impliedai-logo.png" alt="ImpliedAI logo" width={72} height={72} className="rounded-sm" priority />
            <div>
              <p className="text-xs uppercase tracking-[0.34em] text-signal">AI-powered M&A research</p>
              <p className="mt-2 text-sm text-white/42">Independent premium intelligence platform</p>
            </div>
          </div>
          <h1 className="font-display text-6xl font-semibold leading-[0.92] tracking-tight text-balance md:text-8xl">
            AI-Powered M&A Premium Intelligence
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/62">
            ImpliedAI uses machine learning-driven transaction analysis to estimate warranted acquisition premiums,
            identify potential overpayment, and turn precedent M&A data into institutional research signals.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/overpay-index" className="rounded-md bg-signal px-5 py-3 text-center text-sm font-bold text-white shadow-glow transition hover:bg-cyanline hover:text-ink">
              View Overpay Index
            </Link>
            <Link href="/methodology" className="rounded-md border border-white/14 px-5 py-3 text-center text-sm font-bold text-white/76 transition hover:border-signal/55 hover:text-white">
              Read methodology
            </Link>
          </div>
        </div>
        <TerminalPanel />
      </section>

      <SectionShell className="border-y hairline py-0">
        <div className="grid divide-y divide-white/10 md:grid-cols-4 md:divide-x md:divide-y-0">
          {platformMetrics.map((metric) => (
            <div key={metric.label} className="py-8 md:px-8">
              <p className="text-3xl font-semibold text-cyanline">{metric.value}</p>
              <p className="mt-2 text-sm text-white/44">{metric.label}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      <SectionShell>
        <Eyebrow>Platform modules</Eyebrow>
        <div className="grid gap-5 lg:grid-cols-3">
          <FeatureCard
            title="Overpay Index"
            copy="A proprietary 0-100 premium scoring model comparing predicted fair premium against the announced deal premium."
          />
          <FeatureCard
            title="Premium Predictor"
            copy="Simulated fair-premium outputs using sector, growth, buyer type, process intensity, market cycle, and strategic fit."
          />
          <FeatureCard
            title="Transaction Intelligence"
            copy="Deal cards, driver tags, confidence scores, and historical precedent context for fast acquisition research."
          />
        </div>
      </SectionShell>

      <SectionShell className="pt-4">
        <div className="glass grid overflow-hidden rounded-lg lg:grid-cols-[0.9fr_1.1fr]">
          <div className="border-b hairline p-8 lg:border-b-0 lg:border-r">
            <Eyebrow>Featured signal</Eyebrow>
            <h2 className="font-display text-4xl font-semibold">Microsoft → Activision</h2>
            <p className="mt-5 text-white/58">
              The simulated model flags a meaningful spread between fair premium and announced premium, driven by
              strategic scarcity, category control, regulatory friction, and platform synergy expectations.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              <Mini label="Fair Premium" value="31%" />
              <Mini label="Actual Premium" value="48%" />
              <Mini label="Overpay Delta" value="+17%" />
            </div>
          </div>
          <div className="p-8">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-white/48">Overpay Index movement</p>
              <p className="text-sm font-semibold text-cyanline">OPI 82 / 100</p>
            </div>
            <div className="h-56"><Sparkline values={[18, 24, 31, 29, 42, 48, 53, 59, 64, 71, 77, 82]} height={190} /></div>
            <BarMatrix />
          </div>
        </div>
      </SectionShell>

      <SectionShell>
        <Eyebrow>Recent mock outputs</Eyebrow>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {featuredDeals.slice(0, 6).map((deal) => (
            <div key={`${deal.acquirer}-${deal.target}`} className="glass rounded-lg p-5">
              <p className="text-sm text-white/38">{deal.value} · {deal.sector}</p>
              <h3 className="mt-3 text-lg font-semibold">{deal.acquirer} <span className="text-signal">→</span> {deal.target}</h3>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-white/44">Overpay Index</span>
                <span className="text-2xl font-semibold text-cyanline">{deal.overpayIndex}</span>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

function FeatureCard({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="glass rounded-lg p-7">
      <div className="mb-8 h-1 w-14 rounded-full bg-gradient-to-r from-signal to-cyanline shadow-glow" />
      <h3 className="font-display text-3xl font-semibold">{title}</h3>
      <p className="mt-4 leading-7 text-white/56">{copy}</p>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-cyanline">{value}</p>
    </div>
  );
}
