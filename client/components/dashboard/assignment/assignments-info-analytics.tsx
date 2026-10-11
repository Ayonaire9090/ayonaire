import {
  AssignmentsInfoAnalyticsCard,
  AssignmentsInfoAnalyticsCardProps,
} from "./assignments-info-analytics-card";

const STATS_MOCK_DATA = [
  {
    heading: "Total Assigments",
    title: "8",
    rate: "+2 vs yesterday ↑",
  },
  {
    heading: "Drafts",
    title: "1",
    rate: "steady →",
  },
  {
    heading: "Published",
    title: "4",
    rate: "-4% ↓",
  },
  {
    heading: "Closed",
    title: "2",
    rate: "+1% ↑",
  },
  {
    heading: "Archived",
    title: "1",
    rate: "+1% ↑",
  },
];

interface AssignmentsInfoAnalyticsProps {
  data?: AssignmentsInfoAnalyticsCardProps[];
}
export const AssignmentsInfoAnalytics = ({
  data = STATS_MOCK_DATA,
}: AssignmentsInfoAnalyticsProps) => {
  return (
    <div className="flex overflow-x-auto gap-4 w-full -mt-2 hide-scrollbar">
      {data?.map((stat, i) => (
        <AssignmentsInfoAnalyticsCard key={i} {...stat} />
      ))}
    </div>
  );
};
