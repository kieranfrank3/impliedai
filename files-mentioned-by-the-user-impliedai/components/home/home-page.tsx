"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  LineChart,
  LockKeyhole,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { BarMatrix, Sparkline } from "@/components/charts";
import { featuredDeals, platformMetrics } from "@/lib/data";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 }
};

const modules = [
  {
    icon: BarChart3,
    title: "Overpay Index",
    copy: "A 0-100 acquisition premium signal comparing predicted fair premium against the announced premium."
  },
  {
    icon: BrainCircuit,
    title: "Premium Predictor",
    copy: "A transparent preview model that converts deal characteristics into fair-premium expectations."
  },
  {
    icon: Search,
    title: "Transaction Intelligence",
    copy: "Deal drivers, comparable transactions, verdicts, and research-ready premium context in one interface."
  }
];

const workflow = [
  "Normalize announced transaction terms",
  "Map sector, buyer type, growth, risk, and fit",
  "Estimate fair premium range",
  "Compare actual premium against model output",
  "Generate Overpay Index and research verdict"
];

export function HomePage() {
  return (
    <>
      <Hero />
      <MetricStrip />
      <PlatformModules />
      <WorkflowSection />
      <SignalSection />
      <ResearchUniverse />
      <ConversionSection />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-signal/60 to-transparent" />
      <div className="absolute left-1/2 top-10 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-signal/10 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-16 sm:px-8 lg:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
          className="mx-auto max-w-5xl text-center"
        >
          <motion.div variants={fadeUp} transition={{ duration: 0.55 }} className="mb-7 flex justify-center">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 shadow-insetline backdrop-blur-xl">
              <span className="flex h-2 w-2 rounded-full bg-cyanline shadow-glow" />
              <span className="text-xs font-bold uppercase tracking-[0.24em] text-cyanline">
                Institutional M&A premium intelligence
              </span>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} transition={{ duration: 0.6 }} className="mb-7 flex justify-center">
            <Image
              src="/impliedai-logo.png"
              alt="ImpliedAI logo"
              width={88}
              height={88}
              className="h-20 w-20 rounded-md border border-white/10 object-cover shadow-glow"
              priority
            />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.68 }}
            className="mx-auto max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-8xl"
          >
            AI-powered M&A premium intelligence.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.68 }}
            className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/62 md:text-xl"
          >
            ImpliedAI estimates warranted acquisition premiums, identifies overpayment risk, and turns precedent
            transaction data into clean institutional research signals.
          </motion.p>

          <motion.div variants={fadeUp} transition={{ duration: 0.68 }} className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/overpay-index"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-cyanline hover:text-ink"
            >
              Launch Overpay Index
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/methodology"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/14 bg-white/[0.025] px-5 py-3 text-sm font-bold text-white/78 transition hover:border-signal/55 hover:text-white"
            >
              Review methodology
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.24, ease: "easeOut" }}
          className="mx-auto mt-14 max-w-6xl"
        >
          <HeroDashboard />
        </motion.div>
      </div>
    </section>
  );
}

function HeroDashboard() {
  const liveDeals = featuredDeals.slice(0, 4);

  return (
    <div className="relative rounded-xl border border-signal/20 bg-[linear-gradient(145deg,rgba(8,13,20,0.94),rgba(3,6,10,0.84))] shadow-[0_40px_120px_rgba(0,0,0,0.44)] backdrop-blur-2xl">
      <div className="absolute -inset-px rounded-xl bg-gradient-to-r from-signal/0 via-signal/30 to-cyanline/0 opacity-50 blur-sm" />
      <div className="relative overflow-hidden rounded-xl">
        <div className="flex flex-col gap-4 border-b hairline px-5 py-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md border border-signal/25 bg-signal/10">
              <LineChart className="h-4 w-4 text-cyanline" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/38">Premium intelligence console</p>
              <p className="mt-1 text-sm text-white/62">Preview model · illustrative transaction universe</p>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-white/52">
            <StatusPill icon={ShieldCheck} label="Research Preview" />
            <StatusPill icon={LockKeyhole} label="Independent" />
          </div>
        </div>

        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="border-b hairline p-5 lg:border-b-0 lg:border-r">
            <div className="grid gap-3 sm:grid-cols-3">
              <ConsoleMetric label="Fair Premium" value="31%" />
              <ConsoleMetric label="Actual Premium" value="48%" signal />
              <ConsoleMetric label="OPI Score" value="82" signal />
            </div>

            <div className="mt-6 rounded-lg border border-white/10 bg-black/22 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm text-white/48">Premium spread signal</p>
                <p className="text-sm font-semibold text-cyanline">+17% delta</p>
              </div>
              <div className="h-44">
                <Sparkline values={[18, 24, 31, 29, 42, 48, 53, 59, 64, 71, 77, 82]} height={150} />
              </div>
            </div>
          </div>

          <div className="p-5">
            <div className="grid gap-5 xl:grid-cols-[1fr_0.92fr]">
              <div className="rounded-lg border border-white/10 bg-white/[0.025] p-4">
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-sm text-white/48">Driver intensity</p>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyanline">Live</p>
                </div>
                <BarMatrix />
              </div>
              <div className="space-y-3">
                {liveDeals.map((deal) => (
                  <Link
                    key={deal.slug}
                    href={`/historical-deals/${deal.slug}`}
                    className="block rounded-lg border border-white/10 bg-white/[0.025] p-4 transition hover:border-signal/35 hover:bg-signal/[0.055]"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-semibold text-white/88">
                          {deal.acquirer} <span className="text-signal">→</span> {deal.target}
                        </p>
                        <p className="mt-1 text-xs text-white/36">
                          {deal.value} · {deal.actualPremium}% actual premium
                        </p>
                      </div>
                      <span className="rounded-full border border-signal/35 bg-signal/10 px-3 py-1 text-sm font-semibold text-cyanline">
                        {deal.overpayIndex}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MetricStrip() {
  return (
    <section className="border-y hairline bg-black/20">
      <div className="mx-auto grid max-w-7xl divide-y divide-white/10 px-5 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0">
        {platformMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="py-8 md:px-8"
          >
            <p className="text-3xl font-semibold text-cyanline md:text-4xl">{metric.value}</p>
            <p className="mt-2 text-sm text-white/46">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function PlatformModules() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-signal">Platform architecture</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Built like a research desk, not a landing page.
          </h2>
        </div>
        <p className="max-w-md leading-7 text-white/54">
          Every module is designed to support a sharper acquisition-premium question: what should the buyer have paid?
        </p>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {modules.map((module, index) => {
          const Icon = module.icon;
          return (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              className="group rounded-xl border border-white/10 bg-[linear-gradient(145deg,rgba(13,19,28,0.74),rgba(5,8,13,0.64))] p-7 shadow-insetline transition hover:-translate-y-1 hover:border-signal/35"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg border border-signal/30 bg-signal/10 text-cyanline shadow-glow">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-3xl font-semibold">{module.title}</h3>
              <p className="mt-4 leading-7 text-white/56">{module.copy}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function WorkflowSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-signal">Research workflow</p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight md:text-5xl">
            From deal announcement to premium verdict.
          </h2>
          <p className="mt-5 leading-8 text-white/56">
            ImpliedAI is built around the way transaction teams actually think: terms first, drivers second,
            premium justification third.
          </p>
        </div>
        <div className="rounded-xl border border-white/10 bg-white/[0.025] p-4">
          {workflow.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              className="grid gap-4 border-b border-white/[0.07] p-5 last:border-b-0 md:grid-cols-[4rem_1fr_auto] md:items-center"
            >
              <span className="font-mono text-sm font-semibold text-cyanline">0{index + 1}</span>
              <p className="text-lg font-semibold text-white/82">{step}</p>
              <ArrowRight className="hidden h-4 w-4 text-white/28 md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SignalSection() {
  const deal = featuredDeals[0];

  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="grid overflow-hidden rounded-xl border border-signal/18 bg-[linear-gradient(145deg,rgba(8,13,20,0.92),rgba(3,6,10,0.84))] lg:grid-cols-[0.85fr_1.15fr]">
        <div className="border-b hairline p-8 lg:border-b-0 lg:border-r">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-signal">Featured signal</p>
          <h2 className="mt-4 font-display text-4xl font-semibold md:text-5xl">
            Microsoft <span className="text-signal">→</span> Activision
          </h2>
          <p className="mt-5 leading-8 text-white/58">{deal.modelCommentary}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            <Mini label="Fair Premium" value={`${deal.fairPremium}%`} />
            <Mini label="Actual Premium" value={`${deal.actualPremium}%`} />
            <Mini label="Overpay Delta" value={`+${deal.delta}%`} />
          </div>
          <Link
            href={`/historical-deals/${deal.slug}`}
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-cyanline transition hover:text-white"
          >
            Open deal analysis <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="p-8">
          <div className="mb-5 flex items-center justify-between">
            <p className="text-sm text-white/48">Overpay Index movement</p>
            <p className="text-sm font-semibold text-cyanline">OPI {deal.overpayIndex} / 100</p>
          </div>
          <div className="h-64">
            <Sparkline values={[18, 24, 31, 29, 42, 48, 53, 59, 64, 71, 77, 82]} height={210} />
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {deal.drivers.map((driver) => (
              <div key={driver} className="rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <CheckCircle2 className="mb-3 h-4 w-4 text-cyanline" />
                <p className="text-sm font-semibold text-white/76">{driver}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ResearchUniverse() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-signal">Research universe</p>
          <h2 className="mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
            Premium signals across recognizable transactions.
          </h2>
        </div>
        <Link
          href="/historical-deals"
          className="inline-flex items-center gap-2 text-sm font-bold text-cyanline transition hover:text-white"
        >
          Browse all deals <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {featuredDeals.slice(0, 6).map((deal, index) => (
          <motion.div
            key={deal.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <Link
              href={`/historical-deals/${deal.slug}`}
              className="block h-full rounded-xl border border-white/10 bg-white/[0.03] p-5 transition hover:-translate-y-1 hover:border-signal/35 hover:bg-signal/[0.045]"
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <p className="text-sm text-white/38">{deal.value} · {deal.sector}</p>
                <span className="rounded-full border border-signal/35 bg-signal/10 px-3 py-1 text-xs font-bold text-cyanline">
                  OPI {deal.overpayIndex}
                </span>
              </div>
              <h3 className="text-xl font-semibold">
                {deal.acquirer} <span className="text-signal">→</span> {deal.target}
              </h3>
              <p className="mt-4 line-clamp-3 text-sm leading-6 text-white/48">{deal.thesis}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ConversionSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
      <div className="relative overflow-hidden rounded-xl border border-signal/20 bg-[radial-gradient(circle_at_20%_0%,rgba(74,155,234,0.18),transparent_30rem),linear-gradient(145deg,rgba(10,16,24,0.95),rgba(3,5,8,0.92))] p-8 md:p-12">
        <div className="absolute right-8 top-8 hidden h-24 w-24 rounded-full border border-signal/25 bg-signal/5 md:block" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyanline">
              <Sparkles className="h-3.5 w-3.5" />
              Research preview
            </div>
            <h2 className="max-w-3xl font-display text-4xl font-semibold leading-tight md:text-6xl">
              Turn acquisition premiums into a structured research signal.
            </h2>
            <p className="mt-5 max-w-2xl leading-8 text-white/58">
              Request access to the preview, test the Overpay Index, and help shape the next layer of ImpliedAI’s
              transaction intelligence platform.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-signal px-5 py-3 text-sm font-bold text-white shadow-glow transition hover:bg-cyanline hover:text-ink"
            >
              Request access <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/overpay-index"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/14 px-5 py-3 text-sm font-bold text-white/76 transition hover:border-signal/55 hover:text-white"
            >
              Try predictor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatusPill({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-3 py-1.5">
      <Icon className="h-3.5 w-3.5 text-cyanline" />
      {label}
    </span>
  );
}

function ConsoleMetric({ label, value, signal = false }: { label: string; value: string; signal?: boolean }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <p className="text-[0.65rem] uppercase tracking-[0.22em] text-white/35">{label}</p>
      <p className={signal ? "mt-2 text-3xl font-semibold text-cyanline" : "mt-2 text-3xl font-semibold text-white/86"}>
        {value}
      </p>
    </div>
  );
}

function Mini({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.035] p-4">
      <p className="text-xs uppercase tracking-[0.2em] text-white/35">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-cyanline">{value}</p>
    </div>
  );
}
