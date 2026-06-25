import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  metadataBase: new URL("https://impliedai.org"),
  title: "ImpliedAI | AI-Powered M&A Premium Intelligence",
  description:
    "AI-powered M&A premium intelligence, Overpay Index scoring, premium prediction, and transaction research for institutional finance teams.",
  keywords: [
    "ImpliedAI",
    "M&A premium intelligence",
    "Overpay Index",
    "acquisition premium analysis",
    "transaction intelligence",
    "M&A research software"
  ],
  openGraph: {
    title: "ImpliedAI | AI-Powered M&A Premium Intelligence",
    description:
      "Estimate warranted acquisition premiums, identify overpayment risk, and turn precedent transaction data into institutional research signals.",
    url: "https://impliedai.org",
    siteName: "ImpliedAI",
    images: [
      {
        url: "/impliedai-logo.png",
        width: 800,
        height: 800,
        alt: "ImpliedAI"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "ImpliedAI | AI-Powered M&A Premium Intelligence",
    description:
      "AI-powered acquisition premium analysis and transaction intelligence for institutional M&A research.",
    images: ["/impliedai-logo.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <div className="noise min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 terminal-grid opacity-60" />
          <SiteHeader />
          <main className="relative z-10">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
