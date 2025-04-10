import "./globals.css";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const syne = Syne({
  subsets: ["latin"],
  display: "block",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Rezki Suryana — Frontend Engineer",
  description:
    "Frontend Engineer and Web Designer, currently at Monster Group. Focused on interfaces and experiences, working remotely from Bogor, Indonesia.",
  generator: "Next.js",
  applicationName: "Rezki Suryana",
  keywords: [
    "freelance",
    "developer",
    "freelance developer",
    "frontend",
    "react",
    "frontend developer",
    "frontend engineer",
    "creative",
    "creative developer",
    "creative engineer",
    "tech",
    "nigeria",
    "software",
    "software developer",
    "portfolio",
    "frontend developer portfolio",
    "creative developer portfolio",
  ],
  colorScheme: "dark",
  openGraph: {
    title: "Rezki Suryana — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Monster Group. Focused on interfaces and experiences, working remotely from Bogor, Indonesia.",
    url: "https://rezkisuryana.vercel.app/",
    siteName: "www.rezkisuryana.vercel.app",
    images: [
      {
        url: "../public/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Rezki Suryana — Frontend Engineer",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rezki Suryana — Frontend Engineer",
    description:
      "Frontend Engineer and Web Designer, currently at Monster Group. Focused on interfaces and experiences, working remotely from Bogor, Indonesia.",
    creator: "victorwill__",
    creatorId: "1243720976552144897",
    images: [
      "../public/thumbnail.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${syne.className} scroll-smooth scrollbar-thin scrollbar-track-[#0E1016] scrollbar-thumb-[#212531]`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
