import { PageIntro, SectionShell, Eyebrow } from "@/components/section";
import { methodologyFactors } from "@/lib/data";

export default function MethodologyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Methodology"
        title="Premium prediction built around how bankers actually frame deals."
        copy="The current product shell uses simulated outputs, but the methodology is designed for a real transaction dataset: train on historical public M&A, engineer strategic and financial variables, and estimate the premium that comparable deals would imply."
      />
      <SectionShell className="grid gap-6 pt-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-lg p-8">
          <Eyebrow>Model concept</Eyebrow>
          <h2 className="font-display text-4xl font-semibold">The Overpay Index</h2>
          <p className="mt-5 leading-8 text-white/58">
            Most M&A analysis asks whether a transaction made strategic sense. ImpliedAI asks a sharper question:
            given everything observable about the transaction, what premium should the acquirer have paid? The
            Overpay Index converts the gap between predicted fair premium and actual premium into a 0-100 score.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {methodologyFactors.map((factor) => (
            <div key={factor} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <p className="text-sm font-semibold text-white/78">{factor}</p>
            </div>
          ))}
        </div>
      </SectionShell>
      <SectionShell className="pt-2">
        <div className="grid gap-5 md:grid-cols-4">
          <MethodStep number="01" title="Historical training data" copy="Build a clean public M&A dataset with deal terms, unaffected prices, premiums, sector tags, and market conditions." />
          <MethodStep number="02" title="Feature engineering" copy="Translate deal narratives into variables: strategic fit, scarcity, buyer type, process intensity, target quality, and financing environment." />
          <MethodStep number="03" title="Premium prediction" copy="Use gradient boosting or similar supervised models to estimate warranted premium ranges from historical patterns." />
          <MethodStep number="04" title="Overpay classification" copy="Compare actual premium to predicted fair premium and classify the transaction as fair, stretched, or materially overpaid." />
        </div>
      </SectionShell>
      <SectionShell className="pt-2">
        <div className="glass rounded-lg p-8">
          <Eyebrow>Important note</Eyebrow>
          <p className="max-w-4xl text-lg leading-8 text-white/64">
            The current website intentionally uses fake data first. That is the right order: prove the product,
            workflow, research framing, and institutional aesthetic before investing in SEC scraping, data licensing,
            Python pipelines, and production machine learning.
          </p>
        </div>
      </SectionShell>
    </>
  );
}

function MethodStep({ number, title, copy }: { number: string; title: string; copy: string }) {
  return (
    <div className="glass rounded-lg p-6">
      <p className="text-sm font-semibold text-signal">{number}</p>
      <h2 className="mt-5 text-xl font-semibold">{title}</h2>
      <p className="mt-3 leading-7 text-white/52">{copy}</p>
    </div>
  );
}
