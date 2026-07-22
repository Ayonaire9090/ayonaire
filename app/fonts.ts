import localFont from "next/font/local";
import { Spectral_SC, Bai_Jamjuree } from "next/font/google";

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

export const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bai-jamjuree",
  display: "swap",
});




export const agile = localFont({
  src: './fonts/agile/agile.ttf', 
  variable: '--font-agile',
});

export const adineue = localFont({
  src: './fonts/adeninue/adineue-pro-regular.otf',
  variable: '--font-adineue',
});

export const exo = localFont({
  src:"./fonts/exo/Exo-Bold.ttf",
  variable:"--font-exo"
})
