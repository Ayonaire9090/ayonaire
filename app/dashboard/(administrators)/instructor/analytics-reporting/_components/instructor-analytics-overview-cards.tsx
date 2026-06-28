import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  BookOpen,
  Star,
  CircleHelp,
  BarChart,
  LucideIcon,
} from "lucide-react";

interface CardData {
  title: string;
  value: string;
  badge: string;
  badgeColor: string;
  icon: LucideIcon;
  iconColor: string;
}

const cards: CardData[] = [
  {
    title: "Total Students",
    value: "12,450",
    badge: "+12%",
    badgeColor: "text-green-600 bg-green-100 hover:bg-green-100/80",
    icon: GraduationCap,
    iconColor: "text-orange-500",
  },
  {
    title: "Active Courses",
    value: "42",
    badge: "+0%",
    badgeColor: "text-blue-500 bg-blue-100 hover:bg-blue-100/80",
    icon: BookOpen,
    iconColor: "text-blue-500",
  },
  {
    title: "Completion Rate",
    value: "78.5%",
    badge: "-2%",
    badgeColor: "text-red-500 bg-red-100 hover:bg-red-100/80",
    icon: Star,
    iconColor: "text-red-500",
  },
  {
    title: "Avg. Quiz Score",
    value: "84/100",
    badge: "+5%",
    badgeColor: "text-orange-500 bg-orange-100 hover:bg-orange-100/80",
    icon: CircleHelp,
    iconColor: "text-orange-500",
  },
  {
    title: "Revenue",
    value: "$124k",
    badge: "+18%",
    badgeColor: "text-purple-500 bg-purple-100 hover:bg-purple-100/80",
    icon: BarChart,
    iconColor: "text-purple-500",
  },
];

export const InstructorAnalyticsOverviewCards = () => {
  return (
    <div className="flex w-full overflow-x-auto hide-scrollbar gap-4 pb-2">
      {cards.map((card, index) => (
        <InstructorAnalyticsOverviewCard key={index} {...card} />
      ))}
    </div>
  );
};

const InstructorAnalyticsOverviewCard = ({
  title,
  value,
  badge,
  badgeColor,
  icon: Icon,
  iconColor,
}: CardData) => {
  return (
    <div className="bg-white p-4 lg:p-5 rounded-xl flex flex-col min-w-[200px] shrink-0 flex-1 border border-gray-100">
      <div className="flex justify-between items-center gap-4">
        <h3 className="text-gray-500 text-sm font-medium whitespace-nowrap">
          {title}
        </h3>
        <Icon className={`size-5 ${iconColor}`} />
      </div>

      <div className="pt-4 flex flex-col items-start gap-2 mt-auto">
        <div className="font-bold text-2xl text-gray-900">{value}</div>
        <Badge
          variant="secondary"
          className={`rounded-full px-2 py-0.5 text-xs font-medium border-transparent ${badgeColor}`}
        >
          {badge}
        </Badge>
      </div>
    </div>
  );
};
