import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { AnimatedBackground } from "@/components/ui/animated-background";
import { SmoothScroll } from "@/components/ui/smooth-scroll";
import { PageIntro } from "@/components/ui/page-intro";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ispirtoproperty.com.au"),
  title: {
    default:
      "Ispirto Property Advisory | Buyers Agent & Advocate Sydney",
    template: "%s | Ispirto Property Advisory",
  },
  description:
    "Ispirto Property Advisory is a Sydney-based buyers agent and property advocate for home buyers and investors Australia-wide. We research, negotiate and secure the right property at the right price.",
  keywords: [
    "buyers agent Sydney",
    "buyers advocate Sydney",
    "property advisory",
    "buyers agent Australia",
    "off-market properties",
    "property investment advisory",
    "auction bidding service",
    "first home buyer agent",
  ],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Ispirto Property Advisory",
    title: "Ispirto Property Advisory | Buyers Agent & Advocate Sydney",
    description:
      "Your strategic partner in property. We research, advocate and negotiate on behalf of home buyers and investors across Australia.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${cormorant.variable} ${dmSans.variable}`}
    >
      <body className="min-h-screen antialiased">
        <PageIntro />
        <SmoothScroll />
        <AnimatedBackground />
        <Header />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
