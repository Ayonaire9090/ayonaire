"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DollarSign, Users2, Wallet } from "lucide-react";
import { PaymentAnalyticsCard } from "./payment-analytics-card";

const BasicAnalytics = [
  {
    heading: "Total Revenue",
    title: "$42,320",
    icon: DollarSign,
    rate: "+15%",
    description: "from last month",
  },
  {
    heading: "Instructor Payouts",
    title: "$14,120",
    icon: Users2,
    rate: "",
    description: "January, 2024",
  },
  {
    heading: "Platform Fees",
    title: "$28,200",
    icon: Wallet,
    rate: "",
    description: "this month",
  },
];

export const PaymentAnalytics = () => {
  return (
    <>
      {/* ── Mobile / Tablet: Embla carousel with peeking ── */}
      <div className="lg:hidden">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {BasicAnalytics.map((analytic, index) => (
              <CarouselItem
                key={index}
                // mobile: ~75% → 1 card + peek of 2nd
                // tablet (sm/md): ~31% → 3  + peek of 4th
                className="pl-3 basis-[75%] sm:basis-[31%] md:basis-[31%]"
              >
                <PaymentAnalyticsCard
                  heading={analytic.heading}
                  title={analytic.title}
                  icon={analytic.icon}
                  rate={analytic.rate}
                  description={analytic.description}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ── Desktop: 3-column grid (unchanged) ── */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {BasicAnalytics.map((analytic, index) => (
          <PaymentAnalyticsCard
            key={index}
            heading={analytic.heading}
            title={analytic.title}
            icon={analytic.icon}
            rate={analytic.rate}
            description={analytic.description}
          />
        ))}
      </div>
    </>
  );
};
