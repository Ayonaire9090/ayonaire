import { Suspense } from "react";
import { Metadata } from "next";
import { generateSEO } from "@/lib/seo";
import ThankYouClient from "./thank-you-client";

export const metadata: Metadata = generateSEO({
  title: "Thank You - Welcome to Ayonaire Community",
  description:
    "Congratulations! You've successfully joined the Ayonaire waitlist. Check your email for confirmation and next steps to get started.",
  keywords:
    "thank you, confirmation, welcome, Ayonaire community, waitlist confirmation",
  canonical: "/thank-you",
  noIndex: true,
});

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <ThankYouClient />
    </Suspense>
  );
}