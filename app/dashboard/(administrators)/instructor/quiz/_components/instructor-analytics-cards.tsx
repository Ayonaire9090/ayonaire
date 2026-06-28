import { LucideIcon, FileText, UserPlus, Clock } from "lucide-react";

const InstructorAnalytics = [
  {
    title: "Total Questions",
    subTitle: "1,248",
    icon: FileText,
    iconBackground: "bg-[#F3E8FF] text-[#A855F7]",
  },
  {
    title: "Avg. Completion Rate",
    subTitle: "94.2%",
    icon: UserPlus,
    iconBackground: "bg-[#E0F2FE] text-[#38BDF8]",
  },
  {
    title: "Avg. Time Taken",
    subTitle: "24m 15s",
    icon: Clock,
    iconBackground: "bg-[#FFEDD5] text-[#FB923C]",
  },
];

export const InstructorAnalyticsCards = () => {
  return (
    <div className="flex items-center gap-4 md:gap-6 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4">
      {InstructorAnalytics.map((item, index) => (
        <InstructorAnalyticsCard
          key={index}
          title={item.title}
          subTitle={item.subTitle}
          icon={item.icon}
          iconBackground={item.iconBackground}
          className="flex-1 min-w-[280px]"
        />
      ))}
    </div>
  );
};

interface InstructorAnalyticsCardProps {
  title?: string;
  subTitle?: string;
  icon?: LucideIcon;
  iconBackground?: string;
  className?: string;
}

const InstructorAnalyticsCard = ({
  title,
  subTitle,
  icon: Icon,
  iconBackground,
  className,
}: InstructorAnalyticsCardProps) => {
  return (
    <div
      className={`flex justify-start items-center bg-white rounded-xl p-6 ${className}`}
    >
      <div className="flex items-center gap-5">
        <div
          className={`flex items-center justify-center w-[52px] h-[52px] rounded-[14px] ${iconBackground}`}
        >
          {Icon && <Icon className="size-[26px] stroke-[1.5]" />}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-gray-500 text-[15px] font-medium leading-none">
            {title}
          </p>
          <p className="text-gray-900 text-[26px] font-bold leading-none">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};
