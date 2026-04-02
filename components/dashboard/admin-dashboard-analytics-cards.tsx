import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  GraduationCap,
  LucideIcon,
  Users2,
  Users,
  Banknote,
  Wallet,
  FileClock,
  Landmark,
} from "lucide-react";

const BasicAnalytics = [
  {
    heading: "Total Users",
    title: "10,213",
    icon: Users2,
    rate: "+12%",
    description: "from last month",
  },
  {
    heading: "Active Students",
    title: "1,212",
    icon: GraduationCap,
    rate: "-2.5%",
    description: "from last month",
  },
  {
    heading: "Instructors",
    title: "3",
    icon: Users,
    rate: "-2.5%",
    description: "from last month",
  },
  {
    heading: "Total Courses",
    title: "421",
    icon: BookOpen,
    rate: "+4.5%",
    description: "from last month",
  },
  {
    heading: "Revenue Today",
    title: "₦120,000",
    icon: Banknote,
    rate: "+4.5%",
    description: "from last month",
  },
  {
    heading: "Pending Pay",
    title: "34",
    icon: Wallet,
    rate: "+4.5%",
    description: "from last month",
  },
  {
    heading: "Pending Apps",
    title: "12",
    icon: FileClock,
    rate: "+4.5%",
    description: "from last month",
  },
  {
    heading: "Total Revenue",
    title: "12",
    icon: Landmark,
    rate: "+4.5%",
    description: "from last month",
  },
];

export const AdminDashboardAnalyticsCards = () => {
  return (
    <div className="grid grid-cols-1 gap-4 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      {BasicAnalytics.map((analytic, index) => (
        <AdminDashboardSectionFeatureCard
          key={index}
          heading={analytic.heading}
          title={analytic.title}
          icon={analytic.icon}
          rate={analytic.rate}
          description={analytic.description}
        />
      ))}
    </div>
  );
};

interface AdminDashboardAnalyticsCardsProps {
  heading: string;
  title: string;
  icon: LucideIcon;
  rate: string;
  description: string;
}

export const AdminDashboardSectionFeatureCard = ({
  heading,
  title,
  icon: Icon,
  rate,
  description,
}: AdminDashboardAnalyticsCardsProps) => {
  return (
    <div className="rounded-[16px]! px-4 py-5 space-y-3 bg-white shadow-sm">
      <div>
        <p className="flex justify-between items-center text-sm text-gray-500 pb-2">
          {heading}
          <Icon className="size-10 text-primary bg-white rounded-lg p-2" />
        </p>
        <p className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {title}
        </p>
      </div>
      <div className="flex items-start gap-1.5 text-sm pt-0!">
        <Badge
          variant="outline"
          className="text-primary border-0! border-none! bg-[#F86432]/10 rounded-full!"
        >
          {rate}
        </Badge>
        <div className="text-muted-foreground">{description}</div>
      </div>
    </div>
  );
};
