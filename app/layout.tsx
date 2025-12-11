import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The 6-7 Oracle | Ancient Wisdom for Gen Alpha",
  description: "Ask the mystical 6-7 Oracle any question and receive wisdom in the chaotic language of Gen Alpha. Dictionary.com's 2025 Word of the Year brought to life.",
  keywords: ["6-7", "six seven", "oracle", "gen alpha", "meme", "2025", "brain rot", "slang"],
  openGraph: {
    title: "The 6-7 Oracle",
    description: "Ancient wisdom meets Gen Alpha chaos. Ask the oracle anything.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 6-7 Oracle",
    description: "Ancient wisdom meets Gen Alpha chaos. Ask the oracle anything.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mystical-bg`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
