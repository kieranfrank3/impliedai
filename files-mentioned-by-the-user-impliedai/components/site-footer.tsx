import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t hairline bg-black/44">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="font-display text-xl font-semibold">
            Implied<span className="text-signal">AI</span>
          </Link>
          <p className="mt-2 text-xs uppercase tracking-[0.32em] text-white/34">
            M&A Premium Intelligence
          </p>
        </div>
        <div className="flex flex-wrap gap-x-7 gap-y-3 text-sm text-white/46">
          <Link href="/platform" className="hover:text-white">Platform</Link>
          <Link href="/methodology" className="hover:text-white">Methodology</Link>
          <Link href="/historical-deals" className="hover:text-white">Historical Deals</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
        <div className="text-sm text-white/40 md:text-right">
          <a className="text-signal hover:text-cyanline" href="mailto:impliedaiservices@gmail.com">
            impliedaiservices@gmail.com
          </a>
          <p className="mt-2">Independent research platform. impliedpremium.com</p>
        </div>
      </div>
    </footer>
  );
}
