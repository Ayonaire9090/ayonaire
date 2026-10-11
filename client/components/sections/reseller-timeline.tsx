import React from "react";
import { AppTimeline } from "./app-timeline";

const steps = [
  {
    title: "Apply to become a partner",
    description:
      "Take a few minutes to review the Ayonaire learning model and teaching approach, so you're sure our mission and style align with yours.",
  },
  {
    title: "Get your unique referral link and marketing toolkit",
    description:
      "Share your details and experience by completing a short form to apply as an instructor or coach.",
  },
  {
    title: "Promote to your audience or network",
    description:
      "Our team will meet with you for a short chat to learn more about your skills, experience, and teaching passion.",
  },
  {
    title: "Earn commissions for every successful enrollment",
    description:
      "Once you're selected, we'll guide you through an onboarding call to introduce you to our systems, structure, and teaching tools.",
  },
];
export const ResellerTimeline = () => {
  return (
    <AppTimeline
      title="How It Works"
      description="Becoming an Ayonaire Partner is simple"
      steps={steps}
    />
  );
};
