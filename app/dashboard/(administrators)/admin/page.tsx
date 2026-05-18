import { AdminDashboardAnalyticsCards } from "@/components/dashboard/admin-dashboard-analytics-cards";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { AdminDashbordEnrolmentAnalytics } from "@/components/dashboard/admin-dashboard-enrolment-analytics";
import { AdminDashboardRevenueAnalytics } from "@/components/dashboard/admin-dashboard-revenue-analytics";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { AdminDashboardPendingActionCard } from "@/components/dashboard/admin-dashboard-pending-action-card";
import { AdminDashboardSystemHealthCard } from "@/components/dashboard/admin-dashboard-system-health-card";
import { AdminDashboardOrderInfoCard } from "@/components/dashboard/admin-dashboard-order-info-card";
import { AdminDashboardEnrolmentInfoCard } from "@/components/dashboard/admin-dashboard-enrolment-info-card";
import { Plus } from "lucide-react";
import { AdminDashboardSystemActivityLogs } from "@/components/dashboard/admin-dashboard-system-activity-logs";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";

export default function AdminDashboardPage() {
  return (
    <>
      <DashboardHeader
        title={
          <>
            Welcome Back, Admin <span className="wave">👋</span>
          </>
        }
        subTitle="Monitor platform activity and manage operations efficiently"
      />

      <div className="py-3 md:py-6">
        <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
          <DashboardSearch />
          <AdminDashboardButton title="Upload Live Class" icon={Plus} />
        </div>
        <AdminDashboardAnalyticsCards />

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-4 py-6">
          <AdminDashboardRevenueAnalytics />
          <AdminDashbordEnrolmentAnalytics />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-6">
          <AdminDashboardPendingActionCard />
          <AdminDashboardSystemHealthCard />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-4 py-6">
          <AdminDashboardOrderInfoCard />
          <AdminDashboardEnrolmentInfoCard />
        </div>
        <AdminDashboardSystemActivityLogs />
      </div>
    </>
  );
}
