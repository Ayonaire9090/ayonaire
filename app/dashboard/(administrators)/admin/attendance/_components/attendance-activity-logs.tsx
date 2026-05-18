import { History, CheckCircle2, LucideIcon } from "lucide-react";

interface ActivityLog {
  icon: LucideIcon;
  iconColor: string;
  iconBorderColor: string;
  message: React.ReactNode;
}

const activityLogs: ActivityLog[] = [
  {
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBorderColor: "border-emerald-200",
    message: (
      <>
        <span className="font-medium">
          Check our documentation for advanced reporting features.
        </span>
      </>
    ),
  },
];

export const AttendanceActivityLogs = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden p-4 lg:p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5 gap-3">
        <div className="flex items-center gap-2">
          <History className="size-5 text-primary shrink-0" />
          <h3 className="text-base lg:text-lg font-semibold text-gray-900">
            System Activity Feed (Audit Log)
          </h3>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {activityLogs.map((log, index) => (
          <div key={index} className="flex items-start gap-4 relative">
            {/* Timeline line */}
            {index < activityLogs.length - 1 && (
              <div className="absolute left-[17px] top-[38px] w-0.5 h-[calc(100%-10px)] bg-blue-100" />
            )}

            {/* Icon */}
            <div
              className={`relative z-10 flex items-center justify-center size-[36px] rounded-full border-2 ${log.iconBorderColor} bg-white shrink-0`}
            >
              <log.icon className={`size-4 ${log.iconColor}`} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="w-full flex-1 flex flex-col items-start gap-2 bg-[#F5F5F5] p-3 rounded-lg">
                <div className="flex justify-between items-center w-full">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {log.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
