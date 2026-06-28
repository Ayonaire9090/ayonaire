"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  BookOpen,
  GraduationCap,
  LucideIcon,
  Star,
  NotebookPen,
} from "lucide-react";

const BasicAnalytics: InstructorDashboardAnalyticsCardProps[] = [
  {
    heading: "Total Courses",
    title: "12",
    icon: BookOpen,
    rate: "+12%",
    description: "from last month",
  },
  {
    heading: "Total Students",
    title: "1,284",
    icon: GraduationCap,
    rate: "+15%",
    description: "from last term",
  },
  {
    heading: "Assignments Pending",
    title: "28",
    icon: NotebookPen,
    rate: "!",
    description: "Requires attention",
  },
  {
    heading: "Average Rating",
    title: "4.8",
    icon: Star,
    rate: "+0.1%",
    description: "Higher than avg",
  },
];

interface InstructorDashboardAnalyticsCardsProps {
  analytics?: typeof BasicAnalytics;
  columns?:
    | "grid-cols-1"
    | "grid-cols-2"
    | "grid-cols-3"
    | "grid-cols-4"
    | "grid-cols-5"
    | "grid-cols-6";
}
export const InstructorDashboardAnalyticsCards = ({
  analytics = BasicAnalytics,
  columns = "grid-cols-4",
}: InstructorDashboardAnalyticsCardsProps) => {
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
            {analytics.map((analytic, index) => (
              <CarouselItem
                key={index}
                // mobile: ~75% → 1 card + peek of 2nd
                // tablet (sm/md): ~31% → 3 cards + peek of 4th
                className="pl-3 basis-[75%] sm:basis-[31%] md:basis-[31%]"
              >
                <InstructorDashboardSectionFeatureCard
                  heading={analytic.heading}
                  title={analytic.title}
                  icon={analytic.icon}
                  rate={analytic.rate}
                  description={analytic.description}
                  iconBackground={analytic.iconBackground}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ── Desktop: 4-column grid (unchanged) ── */}
      <div className={`hidden lg:grid ${columns} gap-4`}>
        {analytics.map((analytic, index) => (
          <InstructorDashboardSectionFeatureCard
            key={index}
            heading={analytic.heading}
            title={analytic.title}
            icon={analytic.icon}
            rate={analytic.rate}
            description={analytic.description}
            iconBackground={analytic.iconBackground}
          />
        ))}
      </div>
    </>
  );
};

export interface InstructorDashboardAnalyticsCardProps {
  heading: string;
  title: string;
  icon: LucideIcon;
  iconBackground?: boolean;
  rate?: string;
  description?: string;
}

export const InstructorDashboardSectionFeatureCard = ({
  heading,
  title,
  icon: Icon,
  iconBackground = false,
  rate,
  description,
}: InstructorDashboardAnalyticsCardProps) => {
  return (
    <div className="rounded-[16px]! px-4 py-5 space-y-3 bg-white h-full">
      <div>
        <p className="flex justify-between items-center text-sm text-gray-500 pb-2">
          {heading}
          {iconBackground ? (
            <Icon className="size-10 text-[#F86432] bg-[#F86432]/10 rounded-lg p-2" />
          ) : (
            <Icon className="size-10 text-[#F86432] rounded-lg p-2" />
          )}
        </p>
        <p className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {title}
        </p>
      </div>
      {rate && description && (
        <div className="flex items-start gap-1.5 text-sm pt-0!">
          <Badge
            variant="outline"
            className="text-[#F86432] border-0! border-none! bg-[#F86432]/10 rounded-full!"
          >
            {rate}
          </Badge>
          <div className="text-muted-foreground">{description}</div>
        </div>
      )}
    </div>
  );
};
