import { Bell, ChevronRight } from "lucide-react";

const alerts = [
  {
    message: "3 sessions missing attendance logs",
    colorClasses: "bg-[#FFEBEB] text-[#F05A5A]", // Soft red
  },
  {
    message: "4 records waiting for approval",
    colorClasses: "bg-[#FFF4D4] text-[#F5B041]", // Soft yellow/orange
  },
  {
    message: "Low attendance detected in Cohort B",
    colorClasses: "bg-[#EDF2FE] text-[#6384F9]", // Soft blue
  },
];

export const AttendanceLiveAlerts = () => {
  return (
    <div className="bg-white rounded-xl mb-4 lg:mb-6 p-4 lg:p-6 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6 py-2 w-full mt-2">
      {/* Header */}
      <div className="flex items-center gap-2 shrink-0">
        <Bell className="size-[22px] text-[#F86432]" strokeWidth={2.5} />
        <span className="font-bold text-gray-900 text-[18px]">
          Live Alerts:
        </span>
      </div>

      {/* Alert Pills */}
      <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`flex items-center gap-1.5 rounded-full px-5 py-2.5 text-[14.5px] font-medium cursor-pointer hover:opacity-80 transition-opacity ${alert.colorClasses}`}
          >
            {alert.message}{" "}
            <ChevronRight className="size-4" strokeWidth={2.5} />
          </div>
        ))}
      </div>
    </div>
  );
};
