import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Dance to Rise Foundation",
    template: "%s | Dance to Rise Foundation",
  },
  description:
    "Dance to Rise Foundation supports talented young Ballroom and Latin-American DanceSport athletes from disadvantaged backgrounds in South Africa — so they can compete, grow, and rise.",
  keywords: [
    "Dance to Rise Foundation",
    "DanceSport",
    "Ballroom dancing",
    "Latin American dance",
    "South Africa",
    "youth athletes",
    "non-profit",
    "bursary",
    "scholarship",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.dancetorise.org.za"),
  openGraph: {
    type: "website",
    siteName: "Dance to Rise Foundation",
    title: "Dance to Rise Foundation",
    description:
      "Supporting talented young Ballroom and Latin-American DanceSport athletes from disadvantaged backgrounds in South Africa.",
    images: [{ url: "/logo.png", width: 800, height: 600, alt: "Dance to Rise Foundation" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dance to Rise Foundation",
    description:
      "Supporting talented young Ballroom and Latin-American DanceSport athletes from disadvantaged backgrounds in South Africa.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
