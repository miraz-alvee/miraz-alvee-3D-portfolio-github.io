import type { Metadata } from "next";

// Production custom domain (connected via DNS in Vercel). NEXT_PUBLIC_SITE_URL
// overrides it if ever set; otherwise this is used.
export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirazalvee.com"
).replace(/\/$/, "");

export const links = {
  sourceCode: "https://github.com/miraz-alvee/miraz-alvee-3D-portfolio-github.io",
  ownerName: "Miraz Alvee",
  ownerEmail: "mirazalvee98@gmail.com",
  github: "https://github.com/miraz-alvee",
  twitter: "https://twitter.com/miraz_alvee",
  twitterHandle: "@miraz_alvee",
  linkedin: "https://www.linkedin.com/in/miraz-alvee/",
} as const;

const description =
  "Portfolio of Miraz Alvee, Full Stack Developer specializing in React, Next.js, Nest.js, and TypeScript.";

export const siteConfig: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${links.ownerName} | Software Engineer`,
    template: `%s | ${links.ownerName}`,
  },
  description,
  applicationName: `${links.ownerName} Portfolio`,
  category: "technology",
  creator: links.ownerName,
  publisher: links.ownerName,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: `${links.ownerName} | Software Engineer`,
    title: `${links.ownerName} | Software Engineer`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${links.ownerName} | Software Engineer`,
    description,
    creator: links.twitterHandle,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  keywords: [
    "Miraz Alvee",
    "Miraz Or Rashid Alvee",
    "Full Stack Developer",
    "Software Engineer Bangladesh",
    "reactjs",
    "nextjs",
    "vercel",
    "react",
    "aceternity",
    "aceternity-ui",
    "shadcn",
    "shadcn-ui",
    "radix-ui",
    "cn",
    "clsx",
    "modern-portfolio",
    "portfolio",
    "3d-portfolio",
    "animated-portfolio",
    "nextjs-portfolio",
    "react-portfolio",
    "react-three-fiber",
    "three.js",
    "animated-website",
    "framer",
    "framer-motion",
    "three",
    "react-icons",
    "lucide-react",
    "next-themes",
    "postcss",
    "prettier",
    "react-dom",
    "tailwindcss",
    "tailwindcss-animate",
    "ui/ux",
    "js",
    "javascript",
    "typescript",
    "eslint",
    "html",
    "css",
  ] as Array<string>,
  authors: [
    {
      name: links.ownerName,
      url: links.github,
    },
  ],
};
