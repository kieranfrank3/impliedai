import { cn } from "@/lib/utils";

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-signal">
      {children}
    </div>
  );
}

export function SectionShell({
  children,
  className = ""
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <section className={cn("mx-auto max-w-7xl px-5 py-20 sm:px-8", className)}>{children}</section>;
}

export function PageIntro({
  eyebrow,
  title,
  copy
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <SectionShell className="pb-10 pt-16">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1 className="max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-tight text-balance md:text-7xl">
        {title}
      </h1>
      <p className="mt-7 max-w-3xl text-lg leading-8 text-white/58">{copy}</p>
    </SectionShell>
  );
}
