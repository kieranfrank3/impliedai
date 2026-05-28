import Image from "next/image";
import Link from "next/link";

const nav = [
  { href: "/platform", label: "Platform" },
  { href: "/overpay-index", label: "Overpay Index" },
  { href: "/historical-deals", label: "Deals" },
  { href: "/methodology", label: "Methodology" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b hairline bg-ink/78 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="ImpliedAI home">
          <Image
            src="/impliedai-logo.png"
            alt="ImpliedAI"
            width={48}
            height={48}
            className="h-10 w-10 rounded-sm object-cover"
            priority
          />
          <div className="leading-none">
            <div className="font-display text-2xl font-semibold tracking-tight">
              Implied<span className="text-signal">AI</span>
            </div>
            <div className="mt-1 text-[0.62rem] uppercase tracking-[0.34em] text-white/38">
              M&A Premium Intelligence
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/54 md:flex">
          {nav.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-md border border-signal/55 px-4 py-2 text-sm font-semibold text-cyanline shadow-glow transition hover:border-cyanline hover:bg-signal/10"
        >
          Request access
        </Link>
      </div>
    </header>
  );
}
