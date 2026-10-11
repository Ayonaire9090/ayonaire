"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

/**
 * Represents a single selectable option in the filter dropdown.
 */
export interface FilterOption {
  label: string;
  value: string;
}

/**
 * Configuration for a single filter dropdown.
 */
export interface FilterDefinition {
  /** The placeholder text shown when no option is selected */
  placeholder: string;
  /** Array of selectable options for this filter */
  options: FilterOption[];
  /** Optional callback fired when the selected value changes */
  onValueChange?: (value: string) => void;
  /** Controlled value of the filter */
  value?: string;
  /** Default uncontrolled value of the filter */
  defaultValue?: string;
  /** Optional custom width or other class names for the trigger */
  triggerClassName?: string;
}

/**
 * Props for the DashboardDataFilters component.
 */
export interface DashboardDataFiltersProps {
  /** Array of filter definitions to render */
  filters: FilterDefinition[];
  /** Optional additional CSS classes for the container */
  className?: string;
}

/**
 * A highly reusable and flexible component for rendering multiple data filters as dropdowns.
 * It renders an array of filters using the Select component.
 * 
 * @example
 * ```tsx
 * const filters = [
 *   {
 *     placeholder: "Filter by Courses",
 *     options: [{ label: "Course 1", value: "course1" }],
 *     onValueChange: (val) => console.log(val)
 *   }
 * ];
 * 
 * <DashboardDataFilters filters={filters} />
 * ```
 */
export const DashboardDataFilters = ({ filters = [], className }: DashboardDataFiltersProps) => {
  return (
    <div className={cn("flex items-center w-full overflow-x-auto hide-scrollbar gap-3", className)}>
      {filters.map((filter, index) => (
        <Select 
          key={index} 
          onValueChange={filter.onValueChange} 
          value={filter.value} 
          defaultValue={filter.defaultValue}
        >
          <SelectTrigger 
            className={cn(
              "w-[180px] bg-white rounded-xl shadow-none! border-none! shrink-0", 
              filter.triggerClassName
            )}
          >
            <SelectValue placeholder={filter.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {filter.options.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};
