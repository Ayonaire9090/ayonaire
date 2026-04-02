"use client";

import React from "react";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";
import { AppHalfBorderCard } from "../app-half-border-card";
import { Clock, DollarSign, Gift, Heart, Megaphone } from "lucide-react";

const reasonsToPartner = [
  {
    icon: DollarSign,
    title: "High Earning Potential",
    description:
      "Earn a commission on every sale you refer. The more you sell, the more you make—no caps, no limits.",
  },
  {
    icon: Heart,
    title: "Impact-Driven Work",
    description:
      "Be a part of someone's transformation story. Help individuals upskill, switch careers, and unlock new opportunities.",
  },
  {
    icon: Gift,
    title: "Access to Premium Products",
    description:
      "Get exclusive access to our high- converting, expert-led courses in tech, marketing, and business.",
  },
  {
    icon: Megaphone,
    title: "Ready-Made Market Tools",
    description:
      "We provide you with everything you need—from banners, captions, videos, templates, and tips to help you promote with ease.",
  },
  {
    icon: Clock,
    title: "Flexible, Remote & Yours to Own",
    description:
      "You decide how and when to sell—no experience needed. Whether you're a student, professional, or entrepreneur, this fits right in.",
  },
];

export const ResellerWhyBecomePartner = () => {
  return (
    <AppSection variant="white">
      <div className="flex flex-col justify-center items-center">
        <AppHeading
          headingLevel="h2"
          title="Why Become a Reseller Partner?"
          className="text-center text-[35px] lg:text-[44px] leading-tight!"
        />
      </div>

      {/* Team Members Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {reasonsToPartner.map((reason, index) => (
          <AppHalfBorderCard
            key={index}
            icon={reason.icon}
            title={reason.title}
            description={reason.description}
            containerClassName="shadow-glow-blur rounded-xl"
            iconClassName="bg-[#FFE8D9] p-2 rounded-md"
            titleClassName="font-bold"
          />
        ))}
      </div>
    </AppSection>
  );
};
