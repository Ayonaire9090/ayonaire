import {
  ChartNoAxesCombined,
  CircleDollarSign,
  LucideIcon,
  TrendingUp,
  Users2,
} from "lucide-react";
import { AppCourseMostDemandCard } from "../app-course-most-demand-card";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";

// Default icons for course demands (in order)
const defaultIcons: LucideIcon[] = [
  TrendingUp,
  Users2,
  CircleDollarSign,
  ChartNoAxesCombined,
];

interface CourseDemandItem {
  title: string;
  description: string;
}

interface CourseMostDemandProps {
  courseTitle: string;
  demands?: CourseDemandItem[];
}

const defaultCourseDemands: CourseDemandItem[] = [
  {
    title: "Explosive Market Growth",
    description:
      "The global AI industry is projected to exceed $500 billion by 2027, creating new opportunities across nearly every sector.",
  },
  {
    title: "Hiring Is Accelerating Worldwide",
    description:
      "Top companies in the U.S., Europe, and Africa are hiring AI professionals at record pace to power innovation and automation.",
  },
  {
    title: "High Earning Potential",
    description:
      "AI Engineer salaries range from $80,000 to over $200,000 per year globally, with experienced professionals in Africa earning $1,000–$5,000/month remotely.",
  },
  {
    title: "A Future-Proof Career Path",
    description:
      "As governments and Fortune 500 companies invest heavily in AI, the shortage of skilled talent makes now the best time to enter the field.",
  },
];

export const CourseMostDemand = ({
  courseTitle = "",
  demands = defaultCourseDemands,
}: CourseMostDemandProps) => {
  return (
    <section className="section-spacing">
      <div className="flex flex-col justify-center items-center gap-3 px-4">
        <AppSectionButton title="Most Demand" />
        <AppHeading
          title={`Why is ${courseTitle} One of the Most In-Demand Careers Right Now`}
          headingLevel="h2"
          className="text-center w-full lg:max-w-2xl text-[27px] lg:text-[40px] leading-tight! pt-4"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 py-8">
        {demands.map((demand, index) => (
          <AppCourseMostDemandCard
            key={index}
            icon={defaultIcons[index % defaultIcons.length]}
            title={demand.title}
            description={demand.description}
          />
        ))}
      </div>
    </section>
  );
};
