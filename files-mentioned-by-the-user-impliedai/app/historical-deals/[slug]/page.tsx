import Link from "next/link";
import { notFound } from "next/navigation";
import { ScoreDial, Sparkline } from "@/components/charts";
import { Eyebrow, SectionShell } from "@/components/section";
import { featuredDeals, getDealBySlug } from "@/lib/data";

type DealDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return featuredDeals.map((deal) => ({
    slug: deal.slug
  }));
}

export async function generateMetadata({ params }: DealDetailPageProps) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    return {
      title: "Deal not found | ImpliedAI"
    };
  }

  return {
    title: `${deal.acquirer} / ${deal.target} | ImpliedAI`,
    description: `Illustrative Overpay Index analysis for ${deal.acquirer}'s acquisition of ${deal.target}.`
  };
}

export default async function DealDetailPage({ params }: DealDetailPageProps) {
  const { slug } = await params;
  const deal = getDealBySlug(slug);

  if (!deal) {
    notFound();
  }

  const premiumPath = [
    Math.max(8, deal.fairPremium - 14),
    Math.max(10, deal.fairPremium - 8),
    deal.fairPremium,
    Math.round((deal.fairPremium + deal.actualPremium) / 2),
    deal.actualPremium,
    Math.min(92, deal.actualPremium + Math.max(6, deal.delta / 2))
  ];

  return (
    <>
      <SectionShell className="pb-8 pt-16">
        <Link href="/historical-deals" className="text-sm font-semibold text-cyanline hover:text-white">
          ← Back to historical deals
        </Link>
        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-end">
          <div>
            <Eyebrow>Deal analysis</Eyebrow>
            <h1 className="max-w-5xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
              {deal.acquirer} <span className="text-signal">→</span> {deal.target}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/60">{deal.thesis}</p>
          </div>
          <div className="glass flex flex-col items-center rounded-lg p-6">
            <ScoreDial score={deal.overpayIndex} />
            <p className="mt-4 text-center text-sm font-semibold text-cyanline">{deal.verdict}</p>
          </div>
        </div>
      </SectionShell>

      <SectionShell className="grid gap-5 pt-2 md:grid-cols-4">
        <Metric label="Deal value" value={deal.value} />
        <Metric label="Announced" value={deal.announcedDate} />
        <Metric label="Buyer type" value={deal.buyerType} />
        <Metric label="Consideration" value={deal.consideration} />
      </SectionShell>

      <SectionShell className="grid gap-6 pt-2 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="glass rounded-lg p-8">
          <Eyebrow>Premium bridge</Eyebrow>
          <div className="space-y-6">
            <PremiumRow label="Predicted fair premium" value={deal.fairPremium} />
            <PremiumRow label="Actual premium" value={deal.actualPremium} />
            <PremiumRow label="Overpay delta" value={deal.delta} showSign />
            <PremiumRow label="Model confidence" value={deal.confidence} />
          </div>
        </div>
        <div className="glass rounded-lg p-8">
          <div className="mb-4 flex items-center justify-between">
            <Eyebrow>Premium signal</Eyebrow>
            <span className="text-sm font-semibold text-cyanline">OPI {deal.overpayIndex} / 100</span>
          </div>
          <div className="h-64">
            <Sparkline values={premiumPath} height={210} />
          </div>
        </div>
      </SectionShell>

      <SectionShell className="grid gap-6 pt-2 lg:grid-cols-[1fr_0.8fr]">
        <div className="glass rounded-lg p-8">
          <Eyebrow>Model readout</Eyebrow>
          <h2 className="font-display text-4xl font-semibold">Why ImpliedAI flags this deal</h2>
          <p className="mt-5 leading-8 text-white/60">{deal.modelCommentary}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {deal.drivers.map((driver) => (
              <span key={driver} className="rounded border border-white/10 bg-white/[0.035] px-3 py-1.5 text-sm text-white/58">
                {driver}
              </span>
            ))}
          </div>
        </div>

        <div className="glass rounded-lg p-8">
          <Eyebrow>Comparable transactions</Eyebrow>
          <div className="space-y-4">
            {deal.comparableDeals.map((comparable) => (
              <div key={comparable} className="rounded border border-white/10 bg-white/[0.035] p-4">
                <p className="font-semibold">{comparable}</p>
                <p className="mt-1 text-sm text-white/42">Selected precedent for strategic fit and premium context</p>
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell className="pt-2">
        <div className="rounded-lg border border-signal/25 bg-signal/[0.055] p-6">
          <p className="text-sm leading-7 text-white/58">
            Research preview note: this page uses illustrative model outputs to demonstrate the product workflow.
            It is not investment advice and should not be treated as a final valuation opinion.
          </p>
        </div>
      </SectionShell>
    </>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-white/35">{label}</p>
      <p className="mt-2 text-xl font-semibold text-white/86">{value}</p>
    </div>
  );
}

function PremiumRow({
  label,
  value,
  showSign = false
}: {
  label: string;
  value: number;
  showSign?: boolean;
}) {
  const display = `${showSign && value >= 0 ? "+" : ""}${value}%`;
  const width = Math.max(8, Math.min(96, Math.abs(value)));

  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm">
        <span className="text-white/48">{label}</span>
        <span className="font-semibold text-cyanline">{display}</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/[0.07]">
        <div className="h-full rounded-full bg-gradient-to-r from-signal to-cyanline" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
}
