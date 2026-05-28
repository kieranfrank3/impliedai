import { BarMatrix, Sparkline } from "@/components/charts";
import { PageIntro, SectionShell, Eyebrow } from "@/components/section";

export default function PlatformPage() {
  return (
    <>
      <PageIntro
        eyebrow="Platform overview"
        title="Transaction research software for acquisition premium intelligence."
        copy="ImpliedAI is designed as an institutional research layer for M&A teams: ingest a deal, structure the strategic and financial variables, predict a warranted premium, and surface where the market price looks aggressive."
      />
      <SectionShell className="grid gap-6 pt-6 lg:grid-cols-3">
        <PlatformBlock title="Deal Input" copy="Capture acquirer, target, transaction value, unaffected price, sector, buyer type, consideration mix, and strategic rationale." />
        <PlatformBlock title="Premium Engine" copy="Simulated machine-learning outputs estimate fair premium bands and compare the announced price against historical precedent behavior." />
        <PlatformBlock title="Research Console" copy="Generate Overpay Index scores, driver tags, comparable deal context, and a concise transaction verdict for diligence workflows." />
      </SectionShell>
      <SectionShell className="pt-2">
        <div className="glass grid overflow-hidden rounded-lg lg:grid-cols-[1fr_1fr]">
          <div className="border-b hairline p-8 lg:border-b-0 lg:border-r">
            <Eyebrow>Analyst workflow</Eyebrow>
            <h2 className="font-display text-4xl font-semibold">From announcement to premium verdict.</h2>
            <div className="mt-8 space-y-5">
              {["Normalize transaction terms", "Map strategic variables", "Benchmark fair premium", "Score overpay risk", "Export investment committee view"].map((step, index) => (
                <div key={step} className="flex gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded border border-signal/35 bg-signal/10 text-sm font-semibold text-cyanline">
                    {index + 1}
                  </span>
                  <p className="pt-1 text-white/62">{step}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="p-8">
            <p className="mb-4 text-sm text-white/42">Premium model signal density</p>
            <div className="h-56"><Sparkline values={[21, 27, 35, 33, 48, 46, 62, 58, 73, 69, 78, 86]} height={190} /></div>
            <BarMatrix />
          </div>
        </div>
      </SectionShell>
    </>
  );
}

function PlatformBlock({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="glass rounded-lg p-7">
      <h2 className="font-display text-3xl font-semibold">{title}</h2>
      <p className="mt-4 leading-7 text-white/56">{copy}</p>
    </div>
  );
}
