import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";

export const FilterLogs = () => {
  return (
    <div className="bg-white rounded-lg p-4 lg:p-6">
      <h1 className="font-semibold text-xl md:text-2xl">Filter Logs</h1>
      <div className="grid grid-cols-2 gap-3 py-3">
        <AppSelect
          label="Cohort"
          placeholder="Assignment reminder"
          options={[{ label: "Assignment reminder", value: "ch1" }]}
          className="bg-[#FBFBFB]"
        />
        <AppSelect
          label="Course"
          placeholder="Assignment reminder"
          options={[{ label: "Assignment reminder", value: "ch1" }]}
          className="bg-[#FBFBFB]"
        />
      </div>
      <AppSelect
        label="Status"
        placeholder="draft"
        options={[
          { label: "draft", value: "draft" },
          { label: "sent", value: "sent" },
          { label: "failed", value: "failed" },
        ]}
        className="bg-[#FBFBFB]"
      />
      <div className="grid grid-cols-2 gap-3 md:flex justify-start pt-3">
        <Button
          variant="outline"
          className="h-[40px] w-full md:w-auto rounded-lg px-4 md:px-16 text-gray-700 border-gray-200 font-medium text-[15px]"
        >
          Reset
        </Button>
        <Button className="h-[40px] w-full md:w-auto rounded-lg px-4 md:px-16 bg-primary hover:bg-[#e04a1f] text-white font-medium text-[15px]">
          Apply Filters
        </Button>
      </div>
    </div>
  );
};
