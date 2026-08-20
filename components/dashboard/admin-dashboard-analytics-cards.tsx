"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  BookOpen,
  GraduationCap,
  Users2,
  Users,
  Banknote,
  Wallet,
  FileClock,
  Landmark,
} from "lucide-react";
import { useGetPaymentAnalytics, useGetAllPayments } from "@/hooks/api/use-payments";
import { useGetAdminUsers } from "@/hooks/api/use-admin";
import { useGetAllInstructorProfiles } from "@/hooks/api/use-instructor";
import { useGetCourses } from "@/hooks/api/use-courses";
import { StatCard, computeTrendFromSeries } from "@/components/dashboard/stat-card";

const formatNairaKpi = (amount: number) => {
  if (amount >= 1_000_000) return `NGN ${(amount / 1_000_000).toFixed(2)}M`;
  if (amount >= 1_000) return `NGN ${(amount / 1_000).toFixed(1)}K`;
  return `NGN ${amount.toLocaleString()}`;
};

export const AdminDashboardAnalyticsCards = () => {
  const { data: paymentAnalyticsData } = useGetPaymentAnalytics();
  const { data: paymentsData } = useGetAllPayments({ limit: 200 });
  const { data: usersData } = useGetAdminUsers();
  const { data: instructorData } = useGetAllInstructorProfiles();
  const { data: coursesData } = useGetCourses({ limit: 1 });

  const analytics = paymentAnalyticsData?.data;
  const payments = paymentsData?.data?.data ?? [];
  const users = usersData?.users ?? [];
  const instructors = instructorData?.data ?? [];

  const activeStudents = users.filter(
    (u) => (u.role === "student" || u.role === "user") && u.status === "active",
  ).length;
  const instructorUsers = instructors.filter(
    (i) => i.applicationStatus?.toLowerCase() === "approved",
  ).length;
  const pendingPayments = payments.filter((p) => p.status === "pending").length;
  const pendingApplications = instructors.filter(
    (i) => i.applicationStatus?.toLowerCase() === "pending",
  ).length;

  // Only Total Revenue / Platform Fees have a real previous-period source
  // (monthlyRevenue). Every other metric here is a point-in-time count with
  // no historical snapshot to diff against, so it gets no trend pill rather
  // than a guessed one.
  const revenueChange = computeTrendFromSeries(
    analytics?.monthlyRevenue,
    (e) => e.revenue,
    (e) => e.year * 12 + e.month,
  );

  const BasicAnalytics = [
    {
      heading: "Total Users",
      title: (usersData?.count ?? users.length).toLocaleString(),
      icon: Users2,
      iconBg: "bg-[#3B82F6]",
      change: null,
    },
    {
      heading: "Active Students",
      title: activeStudents.toLocaleString(),
      icon: GraduationCap,
      iconBg: "bg-[#24A164]",
      change: null,
    },
    {
      heading: "Instructors",
      title: instructorUsers.toLocaleString(),
      icon: Users,
      iconBg: "bg-[#8B5CF6]",
      change: null,
    },
    {
      heading: "Total Courses",
      title: (coursesData?.pagination?.total ?? 0).toLocaleString(),
      icon: BookOpen,
      iconBg: "bg-[#F59E0B]",
      change: null,
    },
    {
      heading: "Total Revenue",
      title: formatNairaKpi(analytics?.totalRevenue ?? 0),
      icon: Banknote,
      iconBg: "bg-[#24A164]",
      change: revenueChange,
    },
    {
      heading: "Pending Payments",
      title: pendingPayments.toLocaleString(),
      icon: Wallet,
      iconBg: "bg-[#F86432]",
      change: null,
    },
    {
      heading: "Pending Apps",
      title: pendingApplications.toLocaleString(),
      icon: FileClock,
      iconBg: "bg-[#E5383B]",
      change: null,
    },
    {
      heading: "Platform Fees",
      title: formatNairaKpi(analytics?.platformFees ?? 0),
      icon: Landmark,
      iconBg: "bg-[#1E3A8A]",
      // Fees are a fixed percentage of revenue, so their period-over-period
      // % change is mathematically the same as revenue's.
      change: revenueChange,
    },
  ];

  return (
    <>
      {/* ── Mobile / Tablet: Embla carousel with peeking ── */}
      <div className="lg:hidden">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-3">
            {BasicAnalytics.map((analytic, index) => (
              <CarouselItem
                key={index}
                // mobile: ~75% → 1 card + peek of 2nd
                // tablet (sm/md): ~31% → 3 cards + peek of 4th
                className="pl-3 basis-[75%] sm:basis-[31%] md:basis-[31%]"
              >
                <StatCard
                  label={analytic.heading}
                  value={analytic.title}
                  icon={analytic.icon}
                  iconBg={analytic.iconBg}
                  trend={analytic.change}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ── Desktop: 4-column grid (unchanged) ── */}
      <div className="hidden lg:grid grid-cols-4 gap-3">
        {BasicAnalytics.map((analytic, index) => (
          <StatCard
            key={index}
            label={analytic.heading}
            value={analytic.title}
            icon={analytic.icon}
            iconBg={analytic.iconBg}
            trend={analytic.change}
          />
        ))}
      </div>
    </>
  );
};
