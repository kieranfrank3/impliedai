import { DealCard } from "@/components/deal-card";
import { PageIntro, SectionShell, Eyebrow } from "@/components/section";
import { TerminalPanel } from "@/components/terminal-panel";
import { featuredDeals } from "@/lib/data";

export default function OverpayIndexPage() {
  return (
    <>
      <PageIntro
        eyebrow="Overpay Index dashboard"
        title="A 0-100 score for whether the premium looks warranted."
        copy="The Overpay Index compares simulated fair premium output with the actual acquisition premium, then weights the spread by strategic fit, target quality, market cycle, competitive dynamics, and integration risk."
      />
      <SectionShell className="pt-6">
        <TerminalPanel />
      </SectionShell>
      <SectionShell className="pt-2">
        <Eyebrow>Deal scores</Eyebrow>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredDeals.map((deal) => (
            <DealCard key={`${deal.acquirer}-${deal.target}`} deal={deal} />
          ))}
        </div>
      </SectionShell>
    </>
  );
}
