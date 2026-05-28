import { PageIntro, SectionShell } from "@/components/section";
import { featuredDeals } from "@/lib/data";

export default function HistoricalDealsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Historical deal explorer"
        title="Browse premium patterns across precedent transactions."
        copy="This mock explorer shows the kind of historical transaction surface ImpliedAI can grow into: searchable deal data, fair-premium estimates, model drivers, and overpay classifications."
      />
      <SectionShell className="pt-6">
        <div className="glass overflow-hidden rounded-lg">
          <div className="grid grid-cols-12 border-b hairline px-5 py-4 text-xs uppercase tracking-[0.2em] text-white/34">
            <div className="col-span-4">Transaction</div>
            <div className="col-span-2 hidden md:block">Sector</div>
            <div className="col-span-2">Premiums</div>
            <div className="col-span-2">OPI</div>
            <div className="col-span-2">Verdict</div>
          </div>
          {featuredDeals.map((deal) => (
            <div key={`${deal.acquirer}-${deal.target}`} className="grid grid-cols-12 items-center border-b border-white/[0.07] px-5 py-5 last:border-b-0">
              <div className="col-span-4">
                <p className="font-semibold">{deal.acquirer} <span className="text-signal">→</span> {deal.target}</p>
                <p className="mt-1 text-sm text-white/38">{deal.value} · {deal.announced}</p>
              </div>
              <div className="col-span-2 hidden text-sm text-white/48 md:block">{deal.sector}</div>
              <div className="col-span-2 text-sm text-white/62">
                <p>Fair {deal.fairPremium}%</p>
                <p>Actual {deal.actualPremium}%</p>
              </div>
              <div className="col-span-2 text-2xl font-semibold text-cyanline">{deal.overpayIndex}</div>
              <div className="col-span-2 text-sm text-white/62">{deal.verdict}</div>
            </div>
          ))}
        </div>
      </SectionShell>
    </>
  );
}
