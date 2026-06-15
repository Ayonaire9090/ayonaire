import type { Metadata } from "next";
import "./globals.css";
import { satoshi, spectralSC } from "./fonts";
import { GoogleTagManager } from "@next/third-parties/google";
import { Toaster } from "sonner";
import QueryProvider from "@/providers/query-provider";

export const metadata: Metadata = {
  title: "Ayonaire - Build a Future-Proof Career in Tech",
  description:
    "Future-proof your career with Ayonaire's cutting-edge tech training. Learn AI, Machine Learning, Full-Stack Development, and emerging technologies through real-world projects that land you your dream tech job.",
  keywords:
    "tech training, bootcamp, AI engineering, data science, software engineering, online learning, career transformation",
  authors: [{ name: "Ayonaire" }],
  creator: "Ayonaire",
  publisher: "Ayonaire",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com",
  ),
  openGraph: {
    title: "Ayonaire - Build a Future-Proof Career in Tech",
    description:
      "Future-proof your career with Ayonaire's cutting-edge tech training. Learn AI, Machine Learning, Full-Stack Development, and emerging technologies through real-world projects that land you your dream tech job.",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://ayonaire.com",
    siteName: "Ayonaire",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Ayonaire - Build a Future-Proof Career in Tech",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayonaire - Build a Future-Proof Career in Tech",
    description:
      "Future-proof your career with Ayonaire's cutting-edge tech training. Learn AI, Machine Learning, Full-Stack Development, and emerging technologies through real-world projects that land you your dream tech job.",
    site: "@ayonaire",
    creator: "@ayonaire",
    images: {
      url: "/opengraph-image.png",
      alt: "Ayonaire - Build a Future-Proof Career in Tech",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
  },
  alternates: {
    canonical: "https://ayonaire.com/",
  },
};

export function generateViewport() {
  return {
    themeColor: "#FF6B35",
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  };
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${satoshi.variable} ${spectralSC.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <div className="root">
          <QueryProvider>{children}</QueryProvider>
        </div>
        {/* Toast */}
        <Toaster richColors position="bottom-right" />
      </body>
      {process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && (
        <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID!} />
      )}
    </html>
  );
}
