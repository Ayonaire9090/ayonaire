import {
  History,
  Filter,
  CheckCircle2,
  KeyRound,
  ShieldAlert,
  LucideIcon,
} from "lucide-react";

interface ActivityLog {
  icon: LucideIcon;
  iconColor: string;
  iconBorderColor: string;
  message: React.ReactNode;
  timestamp: string;
}

const activityLogs: ActivityLog[] = [
  {
    icon: CheckCircle2,
    iconColor: "text-emerald-500",
    iconBorderColor: "border-emerald-200",
    message: (
      <>
        <span className="font-semibold">Admin Ayo</span> verified manual payment
        for <span className="text-primary font-medium">John D</span>
      </>
    ),
    timestamp: "14:22:10",
  },
  {
    icon: KeyRound,
    iconColor: "text-emerald-500",
    iconBorderColor: "border-emerald-200",
    message: (
      <>
        Access granted to <span className="font-semibold">Mary S</span> for Data
        Analytics module
      </>
    ),
    timestamp: "13:45:01",
  },
  {
    icon: ShieldAlert,
    iconColor: "text-amber-500",
    iconBorderColor: "border-amber-200",
    message: (
      <>
        <span className="font-semibold">System</span> detected 3 failed login
        attempts from IP: 192.168.1.102
      </>
    ),
    timestamp: "12:30:44",
  },
];

export const AdminDashboardSystemActivityLogs = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden p-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <History className="size-5 text-primary" />
          <h3 className="text-lg font-semibold text-gray-900">
            System Activity Feed (Audit Log)
          </h3>
        </div>
        <button className="flex items-center gap-1.5 text-xs font-semibold text-gray-900 border border-gray-200 rounded-md px-2 py-1 bg-[#F5F5F5] hover:bg-[#ececec] transition-colors">
          <Filter className="size-2" />
          Filter Logs
        </button>
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
            <div className="flex-1 pb-6">
              <div className="w-full flex-1 flex flex-col items-start gap-2 bg-[#F5F5F5] p-3 rounded-lg">
                <div className="flex justify-between items-center w-full">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {log.message}
                  </p>
                  <span className="text-xs text-gray-400 shrink-0 ml-4 tabular-nums">
                    {log.timestamp}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
