import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { CookieConsent } from "@/components/layout/cookie-consent";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://powerfit-ten.vercel.app"),
  title: {
    default: "PowerFit — Elite Fitness",
    template: "%s | PowerFit",
  },
  description:
    "Not a gym. A standard. Elite coaching, brutal training, real results. By application only.",
  openGraph: {
    title: "PowerFit — Elite Fitness",
    description:
      "Not a gym. A standard. Elite coaching, brutal training, real results.",
    url: "https://powerfit-ten.vercel.app",
    siteName: "PowerFit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerFit — Elite Fitness",
    description:
      "Not a gym. A standard. Elite coaching, brutal training, real results.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
