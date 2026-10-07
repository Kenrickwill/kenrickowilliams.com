import type { Metadata } from "next";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kenrick Williams — Security Engineer & Automation Builder",
  description:
    "Kenrick Williams is a platform security engineer and entrepreneur who builds secure systems and enterprise automation.",
  metadataBase: new URL("https://www.kenrickowilliams.com"),
  openGraph: {
    type: "website",
    url: "https://www.kenrickowilliams.com",
    title: "Kenrick Williams — Security Engineer & Automation Builder",
    description:
      "Security engineering, enterprise automation, and practical systems built for scale.",
    siteName: "Kenrick Williams",
    images: [
      { url: "/kenrick.jpg", width: 1086, height: 1448, alt: "Kenrick Williams" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kenrick Williams — Security Engineer & Automation Builder",
    description:
      "Security engineering, enterprise automation, and practical systems built for scale.",
    images: ["/kenrick.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
