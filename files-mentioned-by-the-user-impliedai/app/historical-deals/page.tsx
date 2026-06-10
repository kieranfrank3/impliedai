import Link from "next/link";
import { PageIntro, SectionShell } from "@/components/section";
import { featuredDeals } from "@/lib/data";

export default function HistoricalDealsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Historical deal explorer"
        title="Browse premium patterns across precedent transactions."
        copy="Explore an illustrative transaction universe with fair-premium estimates, actual premiums, model drivers, and Overpay Index classifications."
      />
      <SectionShell className="pt-6">
        <div className="mb-5 grid gap-3 md:grid-cols-4">
          <SummaryCard label="Transactions" value={featuredDeals.length.toString()} />
          <SummaryCard label="Avg actual premium" value="39%" />
          <SummaryCard label="Avg fair premium" value="29%" />
          <SummaryCard label="High-risk deals" value="7" />
        </div>

        <div className="glass overflow-hidden rounded-lg">
          <div className="hidden grid-cols-12 border-b hairline px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/34 lg:grid">
            <div className="col-span-3">Transaction</div>
            <div className="col-span-2">Sector</div>
            <div className="col-span-1">Buyer</div>
            <div className="col-span-2">Premium</div>
            <div className="col-span-1">Delta</div>
            <div className="col-span-1">OPI</div>
            <div className="col-span-2">Verdict</div>
          </div>

          {featuredDeals.map((deal) => (
            <Link
              key={deal.slug}
              href={`/historical-deals/${deal.slug}`}
              className="grid gap-4 border-b border-white/[0.07] px-5 py-5 transition last:border-b-0 hover:bg-signal/[0.055] lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-3">
                <p className="font-semibold">
                  {deal.acquirer} <span className="text-signal">→</span> {deal.target}
                </p>
                <p className="mt-1 text-sm text-white/38">
                  {deal.value} · {deal.announcedDate}
                </p>
              </div>
              <div className="text-sm text-white/54 lg:col-span-2">{deal.sector}</div>
              <div className="text-sm text-white/54 lg:col-span-1">{deal.buyerType}</div>
              <div className="text-sm text-white/66 lg:col-span-2">
                <p>Fair {deal.fairPremium}%</p>
                <p>Actual {deal.actualPremium}%</p>
              </div>
              <div className="text-sm font-semibold text-cyanline lg:col-span-1">
                {deal.delta >= 0 ? "+" : ""}
                {deal.delta}%
              </div>
              <div className="text-2xl font-semibold text-cyanline lg:col-span-1">{deal.overpayIndex}</div>
              <div className="lg:col-span-2">
                <span className="rounded-full border border-signal/35 bg-signal/10 px-3 py-1 text-sm font-semibold text-cyanline">
                  {deal.verdict}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </SectionShell>
    </>
  );
}

function SummaryCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
      <p className="text-xs uppercase tracking-[0.22em] text-white/35">{label}</p>
      <p className="mt-2 text-3xl font-semibold text-cyanline">{value}</p>
    </div>
  );
}
