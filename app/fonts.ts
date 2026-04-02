import localFont from "next/font/local";
import { Spectral_SC } from "next/font/google";

export const satoshi = localFont({
  src: [
    {
      path: "./fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-satoshi",
  display: "swap",
});

export const melodrama = localFont({
  src: [
    {
      path: "./fonts/melodrama/Melodrama-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/melodrama/Melodrama-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/melodrama/Melodrama-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-melodrama",
  display: "swap",
});

export const spectralSC = Spectral_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spectral-sc",
  display: "swap",
});
