"use client";

import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import {
  BookOpen,
  GraduationCap,
  LucideIcon,
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
  const instructorUsers = users.filter((u) => u.role === "instructor").length;
  const pendingPayments = payments.filter((p) => p.status === "pending").length;
  const pendingApplications = instructors.filter(
    (i) => i.applicationStatus === "pending",
  ).length;

  const BasicAnalytics = [
    {
      heading: "Total Users",
      title: (usersData?.count ?? users.length).toLocaleString(),
      icon: Users2,
    },
    {
      heading: "Active Students",
      title: activeStudents.toLocaleString(),
      icon: GraduationCap,
    },
    {
      heading: "Instructors",
      title: instructorUsers.toLocaleString(),
      icon: Users,
    },
    {
      heading: "Total Courses",
      title: (coursesData?.pagination?.total ?? 0).toLocaleString(),
      icon: BookOpen,
    },
    {
      heading: "Total Revenue",
      title: `NGN ${(analytics?.totalRevenue ?? 0).toLocaleString()}`,
      icon: Banknote,
    },
    {
      heading: "Pending Payments",
      title: pendingPayments.toLocaleString(),
      icon: Wallet,
    },
    {
      heading: "Pending Apps",
      title: pendingApplications.toLocaleString(),
      icon: FileClock,
    },
    {
      heading: "Platform Fees",
      title: `NGN ${(analytics?.platformFees ?? 0).toLocaleString()}`,
      icon: Landmark,
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
                <AdminDashboardSectionFeatureCard
                  heading={analytic.heading}
                  title={analytic.title}
                  icon={analytic.icon}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* ── Desktop: 4-column grid (unchanged) ── */}
      <div className="hidden lg:grid grid-cols-4 gap-4">
        {BasicAnalytics.map((analytic, index) => (
          <AdminDashboardSectionFeatureCard
            key={index}
            heading={analytic.heading}
            title={analytic.title}
            icon={analytic.icon}
          />
        ))}
      </div>
    </>
  );
};

interface AdminDashboardAnalyticsCardProps {
  heading: string;
  title: string;
  icon: LucideIcon;
  rate?: string;
  description?: string;
}

export const AdminDashboardSectionFeatureCard = ({
  heading,
  title,
  icon: Icon,
  rate,
  description,
}: AdminDashboardAnalyticsCardProps) => {
  return (
    <div className="rounded-[16px]! px-4 py-5 space-y-3 bg-white h-full">
      <div>
        <p className="flex justify-between items-center text-sm text-gray-500 pb-2">
          {heading}
          <Icon className="size-10 text-[#F86432] bg-white rounded-lg p-2" />
        </p>
        <p className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {title}
        </p>
      </div>
      {(rate || description) && (
        <div className="flex items-start gap-1.5 text-sm pt-0!">
          {rate && (
            <Badge
              variant="outline"
              className="text-[#F86432] border-0! border-none! bg-[#F86432]/10 rounded-full!"
            >
              {rate}
            </Badge>
          )}
          {description && <div className="text-muted-foreground">{description}</div>}
        </div>
      )}
    </div>
  );
};
