import Link from "next/link";
import { PageIntro, SectionShell, Eyebrow } from "@/components/section";

export default function ContactPage() {
  return (
    <>
      <PageIntro
        eyebrow="Contact"
        title="Request access to the ImpliedAI research preview."
        copy="ImpliedAI is currently a product prototype for AI-powered M&A premium intelligence. Reach out for feedback, early access, or collaboration around the transaction dataset and model build."
      />
      <SectionShell className="grid gap-6 pt-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="glass rounded-lg p-8">
          <Eyebrow>Direct email</Eyebrow>
          <h2 className="font-display text-4xl font-semibold">impliedaiservices@gmail.com</h2>
          <p className="mt-5 leading-8 text-white/56">
            Best for investor-style feedback, M&A research conversations, dataset suggestions, and early access.
          </p>
          <Link
            href="mailto:impliedaiservices@gmail.com"
            className="mt-8 inline-flex rounded-md bg-signal px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-cyanline hover:text-ink"
          >
            Email ImpliedAI
          </Link>
        </div>
        <form className="glass rounded-lg p-8">
          <Eyebrow>Preview request</Eyebrow>
          <div className="grid gap-4">
            <input className="rounded-md border border-white/10 bg-black/36 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal/60" placeholder="Name" />
            <input className="rounded-md border border-white/10 bg-black/36 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal/60" placeholder="Work email" />
            <input className="rounded-md border border-white/10 bg-black/36 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal/60" placeholder="Firm / school / role" />
            <textarea className="min-h-32 rounded-md border border-white/10 bg-black/36 px-4 py-3 text-white outline-none transition placeholder:text-white/30 focus:border-signal/60" placeholder="What would you want ImpliedAI to analyze?" />
            <button className="rounded-md border border-signal/55 px-5 py-3 text-sm font-bold text-cyanline transition hover:bg-signal/12" type="button">
              Submit preview request
            </button>
          </div>
        </form>
      </SectionShell>
    </>
  );
}
