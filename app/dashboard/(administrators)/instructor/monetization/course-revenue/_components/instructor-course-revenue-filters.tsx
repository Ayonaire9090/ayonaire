import {
  DashboardDataFilters,
  FilterDefinition,
} from "@/components/dashboard/dashboard-data-filters";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const revenueFilters: FilterDefinition[] = [
  {
    placeholder: "Filter by Category",
    options: [
      { label: "Development", value: "development" },
      { label: "Design", value: "design" },
      { label: "Business", value: "business" },
      { label: "Marketing", value: "marketing" },
    ],
  },
  {
    placeholder: "Filter by Date Range",
    options: [
      { label: "Today", value: "today" },
      { label: "This Week", value: "this_week" },
      { label: "This Month", value: "this_month" },
      { label: "This Year", value: "this_year" },
      { label: "All Time", value: "all_time" },
    ],
  },
];

export const InstructorCourseRevenueFilters = () => {
  return (
    <div className="flex justify-between items-center gap-3 overflow-x-auto hide-scrollbar">
      <DashboardDataFilters filters={revenueFilters} />
      <Button
        variant="outline"
        className={`py-3! flex items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-primary shadow-sm 
                text-white focus:outline-0! shadow-0!`}
      >
        <p className="text-sm flex items-center gap-2">
          <Filter />
          Apply Filters
        </p>
      </Button>
    </div>
  );
};
