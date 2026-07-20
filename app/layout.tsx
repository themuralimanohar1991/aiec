import type { Metadata, Viewport } from "next";
import { Spectral, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/motion/SmoothScrollProvider";
import { ScrollHeader } from "@/components/layout/ScrollHeader";
import { Footer } from "@/components/layout/Footer";

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

/**
 * Canonical origin for absolute URLs (OG tags, canonicals). Set
 * NEXT_PUBLIC_SITE_URL in Vercel when the site moves to its real domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://aienergycouncil.vercel.app";

export const metadata: Metadata = {
  // Inner pages set `title` and it renders as "About | AI Energy Council";
  // the home page uses `default`.
  title: {
    default: "AI Energy Council",
    template: "%s | AI Energy Council",
  },
  description:
    "Houston's first peer-governed executive community for AI in energy operations. Invitation-only, closed-door, Chatham House rules. Powered by Kissflow.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    siteName: "AI Energy Council",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#14163A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spectral.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <body>
        <SmoothScrollProvider>
          <ScrollHeader />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
