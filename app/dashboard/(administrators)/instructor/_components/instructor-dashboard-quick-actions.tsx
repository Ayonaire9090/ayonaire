"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  BookOpen,
  LucideIcon,
  NotebookText,
  LayoutGrid,
  Megaphone,
} from "lucide-react";

const BasicQuickActions = [
  {
    title: "Create Course",
    icon: BookOpen,
    iconColor: "#F86432",
  },
  {
    title: "Create Assignment",
    icon: NotebookText,
    iconColor: "#A855F7",
  },
  {
    title: "Create Quiz",
    icon: LayoutGrid,
    iconColor: "#A855F7",
  },
  {
    title: "Send Announcement",
    icon: Megaphone,
    iconColor: "#10B981",
  },
];

export const InstructorDashboardQuickActions = () => {
  return (
    <div className="py-4 md:py-8 space-y-3">
      <h2 className="text-xl md:text-2xl font-bold">Quick Actions</h2>
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
            {BasicQuickActions.map((action, index) => (
              <CarouselItem
                key={index}
                // mobile: ~75% → 1 card + peek of 2nd
                // tablet (sm/md): ~31% → 3 cards + peek of 4th
                className="pl-3 basis-[75%] sm:basis-[31%] md:basis-[31%]"
              >
                <InstructorDashboardSectionFeatureCard
                  title={action.title}
                  icon={action.icon}
                  iconColor={action.iconColor}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ── Desktop: 4-column grid (unchanged) ── */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {BasicQuickActions.map((action, index) => (
          <InstructorDashboardSectionFeatureCard
            key={index}
            title={action.title}
            icon={action.icon}
            iconColor={action.iconColor}
          />
        ))}
      </div>
    </div>
  );
};

interface InstructorDashboardAnalyticsCardProps {
  title: string;
  icon: LucideIcon;
  iconColor: string;
}

export const InstructorDashboardSectionFeatureCard = ({
  title,
  icon: Icon,
  iconColor,
}: InstructorDashboardAnalyticsCardProps) => {
  return (
    <div
      className={`rounded-[10px]! px-4 py-5 space-y-3 bg-white h-[130px] flex justify-center items-center cursor-pointer scale-100 hover:scale-105 transition-all transform group`}
    >
      <div className="flex items-center gap-2">
        <Icon
          className={`size-10 text-[${iconColor}] bg-[${iconColor}]/10 rounded-md p-2`}
        />
        <p
          className={`text-xl text-gray-500 group-hover:text-black font-medium  tabular-nums @[250px]/card:text-3xl`}
        >
          {title}
        </p>
      </div>
    </div>
  );
};
