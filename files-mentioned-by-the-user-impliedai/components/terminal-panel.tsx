import { BarMatrix, Sparkline } from "@/components/charts";
import { featuredDeals } from "@/lib/data";

export function TerminalPanel() {
  return (
    <div className="glass animate-float overflow-hidden rounded-lg">
      <div className="flex items-center justify-between border-b hairline px-5 py-4">
        <div>
          <p className="text-xs uppercase tracking-[0.26em] text-white/34">Live Premium Monitor</p>
          <p className="mt-1 text-sm text-white/68">Recent deals · Overpay Index</p>
        </div>
        <span className="rounded-full bg-signal/12 px-3 py-1 text-xs font-semibold text-cyanline">LIVE</span>
      </div>
      <div className="grid gap-0 lg:grid-cols-[1fr_0.82fr]">
        <div className="border-b hairline p-5 lg:border-b-0 lg:border-r">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <p className="text-sm text-white/42">Premium dispersion</p>
              <p className="mt-1 text-3xl font-semibold">+17.8%</p>
            </div>
            <p className="text-right text-sm text-cyanline">above fair premium<br />median</p>
          </div>
          <div className="h-40">
            <Sparkline />
          </div>
          <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
            <MiniStat label="Avg OPI" value="71" />
            <MiniStat label="Signal" value="High" />
            <MiniStat label="Universe" value="Mock" />
          </div>
        </div>
        <div className="p-5">
          <BarMatrix />
          <div className="mt-5 space-y-4">
            {featuredDeals.slice(0, 4).map((deal) => (
              <div key={`${deal.acquirer}-${deal.target}`} className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white/88">
                    {deal.acquirer} <span className="text-signal">→</span> {deal.target}
                  </p>
                  <p className="text-xs text-white/35">
                    {deal.value} · {deal.actualPremium}% actual premium
                  </p>
                </div>
                <div className="rounded-full border border-signal/35 bg-signal/12 px-3 py-1 text-sm font-semibold text-cyanline">
                  OPI {deal.overpayIndex}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-white/10 bg-white/[0.035] p-3">
      <p className="text-xs uppercase tracking-[0.2em] text-white/32">{label}</p>
      <p className="mt-1 text-lg font-semibold">{value}</p>
    </div>
  );
}
