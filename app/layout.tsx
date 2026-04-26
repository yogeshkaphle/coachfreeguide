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
    default: "Free Checklist for Nepali Fitness Coaches | Yogesh Kaphle",
    template: "%s | Yogesh Kaphle",
  },
  description:
    "Download the free checklist for fitness coaches in Nepal and find out where your page is losing serious clients before they even reach out.",
  openGraph: {
    title: "You Post Every Day. So Why Aren't Clients Coming?",
    description:
      "Free checklist for Nepali fitness coaches to find the gaps that stop content from turning into paying clients.",
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
    title: "You Post Every Day. So Why Aren't Clients Coming?",
    description:
      "Free checklist for Nepali fitness coaches to see what is blocking clients from reaching out.",
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
