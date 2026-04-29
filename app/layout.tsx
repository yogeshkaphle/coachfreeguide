import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://coachfreeguide.yogeshkaphle.com"),
  title: {
    default: "The 5-Step Coach System | Yogesh Kaphle",
    template: "%s | Yogesh Kaphle",
  },
  description:
    "From viewer to paying client — the free system for Nepali fitness coaches. Video, mind map, and worksheet. No fluff.",
  openGraph: {
    title: "The 5-Step Coach System | Yogesh Kaphle",
    description:
      "From viewer to paying client — the free system for Nepali fitness coaches. Video, mind map, and worksheet. No fluff.",
    url: "https://coachfreeguide.yogeshkaphle.com",
    siteName: "Yogesh Kaphle",
    images: [
      {
        url: "/hero-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Yogesh Kaphle",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "The 5-Step Coach System | Yogesh Kaphle",
    description:
      "From viewer to paying client — the free system for Nepali fitness coaches. Video, mind map, and worksheet. No fluff.",
    images: ["/hero-image.jpg"],
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
      className={`${cormorant.variable} ${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
