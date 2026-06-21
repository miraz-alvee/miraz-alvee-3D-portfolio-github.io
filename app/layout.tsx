import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import type { PropsWithChildren } from "react";

import { links, siteConfig, siteUrl } from "@/config";

import { ThemeProvider } from "./provider";


const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: links.ownerName,
  url: siteUrl,
  email: `mailto:${links.ownerEmail}`,
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Nest.js, and TypeScript.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "Bangladesh",
  },
  sameAs: [links.github, links.twitter, links.linkedin],
  knowsAbout: [
    "React",
    "Next.js",
    "Nest.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ],
};

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
