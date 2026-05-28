import { Deal } from "@/lib/data";
import { ScoreDial } from "@/components/charts";

export function DealCard({ deal }: { deal: Deal }) {
  const severe = deal.overpayIndex >= 85;
  return (
    <article className="glass rounded-lg p-5 transition duration-300 hover:-translate-y-1 hover:border-signal/45">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs uppercase tracking-[0.24em] text-white/35">{deal.sector}</p>
          <h3 className="mt-3 text-xl font-semibold">
            {deal.acquirer} <span className="text-signal">→</span> {deal.target}
          </h3>
          <p className="mt-2 text-sm text-white/42">
            {deal.value} transaction · {deal.announced}
          </p>
        </div>
        <div className="rounded-full border border-signal/35 bg-signal/10 px-3 py-1 text-sm font-semibold text-cyanline">
          {deal.verdict}
        </div>
      </div>

      <div className="mt-7 grid gap-6 md:grid-cols-[8rem_1fr]">
        <ScoreDial score={deal.overpayIndex} />
        <div className="space-y-4">
          <MetricRow label="Fair Premium" value={`${deal.fairPremium}%`} />
          <MetricRow label="Actual Premium" value={`${deal.actualPremium}%`} />
          <MetricRow label="Overpay Delta" value={`${deal.delta >= 0 ? "+" : ""}${deal.delta}%`} signal={severe} />
          <MetricRow label="Model Confidence" value={`${deal.confidence}%`} />
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {deal.drivers.map((driver) => (
          <span key={driver} className="rounded border border-white/10 bg-white/[0.035] px-2.5 py-1 text-xs text-white/52">
            {driver}
          </span>
        ))}
      </div>
    </article>
  );
}

function MetricRow({ label, value, signal = false }: { label: string; value: string; signal?: boolean }) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="text-white/42">{label}</span>
        <span className={signal ? "font-semibold text-cyanline" : "font-semibold text-white/82"}>{value}</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
        <div className="h-full rounded-full bg-gradient-to-r from-signal to-cyanline" style={{ width: value.includes("+") ? "74%" : "58%" }} />
      </div>
    </div>
  );
}
