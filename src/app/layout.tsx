import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { CookieConsent } from "@/components/layout/cookie-consent";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://powerfit.vercel.app"),
  title: { default: "PowerFit — Transform Your Body, Transform Your Life", template: "%s | PowerFit" },
  description:
    "World-class gym with expert trainers, premium equipment, and a community that pushes you to your best. Join 500+ members today.",
  openGraph: {
    title: "PowerFit — Transform Your Body, Transform Your Life",
    description:
      "World-class gym with expert trainers, premium equipment, and a community that pushes you to your best.",
    url: "https://powerfit.vercel.app",
    siteName: "PowerFit",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerFit",
    description:
      "World-class gym with expert trainers, premium equipment, and a community that pushes you to your best.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-[100dvh] flex flex-col">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
