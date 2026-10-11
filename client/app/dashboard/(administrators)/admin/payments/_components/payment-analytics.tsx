"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { DollarSign, Users2, Wallet } from "lucide-react";
import { PaymentAnalyticsCard } from "./payment-analytics-card";
import { useGetPaymentAnalytics } from "@/hooks/api/use-payments";

export const PaymentAnalytics = () => {
  const { data } = useGetPaymentAnalytics();
  const analytics = data?.data;

  const BasicAnalytics = [
    {
      heading: "Total Revenue",
      title: `NGN ${(analytics?.totalRevenue ?? 0).toLocaleString()}`,
      icon: DollarSign,
      rate: "",
      description: "",
    },
    {
      heading: "Instructor Payouts",
      title: `NGN ${(analytics?.instructorPayouts ?? 0).toLocaleString()}`,
      icon: Users2,
      rate: "",
      description: "",
    },
    {
      heading: "Platform Fees",
      title: `NGN ${(analytics?.platformFees ?? 0).toLocaleString()}`,
      icon: Wallet,
      rate: analytics ? `${analytics.platformFeePercent}%` : "",
      description: "",
    },
  ];

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
