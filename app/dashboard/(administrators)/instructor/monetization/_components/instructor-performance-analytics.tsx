"use client";

import React from "react";
import {
  ArrowUpRight,
  ArrowDownRight,
  Minus,
  MessageSquare,
} from "lucide-react";

export const InstructorPerformanceAnalytics = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-6">
      <InstructorCoursePerformance />
      <InstructorCourseRecentEnrollments />
    </div>
  );
};

const InstructorCoursePerformance = () => {
  const courses = [
    { name: "Data Science", revenue: "₦50k", students: "1,240", trend: "up" },
    { name: "Data Science", revenue: "₦30k", students: "850", trend: "flat" },
    { name: "Data Science", revenue: "₦70k", students: "1,100", trend: "down" },
  ];

  return (
    <div className="flex flex-col gap-6">
      <div className="bg-white rounded-[16px] p-6 border border-gray-100/50 flex-1">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-gray-900">
            Course Performance
          </h3>
          <button className="text-[15px] font-semibold text-[#FF7A59] hover:underline">
            View All
          </button>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#F6F6F6] text-gray-900 text-[15px] font-bold">
                <th className="py-4 px-4 rounded-l-xl">Course Name</th>
                <th className="py-4 px-4">Revenue</th>
                <th className="py-4 px-4">Students</th>
                <th className="py-4 px-4 rounded-r-xl">Trend</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {courses.map((course, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-4 px-4 font-semibold text-gray-900 text-[15px]">
                    {course.name}
                  </td>
                  <td className="py-4 px-4 font-bold text-gray-900 text-[15px]">
                    {course.revenue}
                  </td>
                  <td className="py-4 px-4 text-gray-500 font-medium text-[15px]">
                    {course.students}
                  </td>
                  <td className="py-4 px-4">
                    {course.trend === "up" && (
                      <span className="inline-flex items-center justify-center size-8 bg-emerald-50 rounded-lg text-emerald-600">
                        <ArrowUpRight className="size-5" />
                      </span>
                    )}
                    {course.trend === "down" && (
                      <span className="inline-flex items-center justify-center size-8 bg-red-50 rounded-lg text-red-500">
                        <ArrowDownRight className="size-5" />
                      </span>
                    )}
                    {course.trend === "flat" && (
                      <span className="text-gray-400 font-medium text-lg pl-3">
                        <Minus className="size-4" />
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Support tickets card */}
      {/* <div className="bg-[#FFEBE6]/50 border border-[#FF7A59]/10 rounded-[16px] p-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="size-12 rounded-xl bg-[#FF7A59]/10 flex items-center justify-center text-[#FF7A59]">
            <MessageSquare className="size-6" />
          </div>
          <div>
            <h4 className="text-gray-900 font-bold text-[15px]">
              Open Support Tickets
            </h4>
            <p className="text-gray-500 text-sm mt-0.5">
              Average response time: 14m
            </p>
          </div>
        </div>
        <span className="text-3xl font-extrabold text-[#FF7A59] pr-2">3</span>
      </div> */}
    </div>
  );
};

const InstructorCourseRecentEnrollments = () => {
  const coupons = [
    {
      code: "EARLYBIRD50",
      discount: "50% off",
      uses: "145 uses",
      colorClass: "text-[#10B981]",
      bgClass: "bg-emerald-50/50",
      dotClass: "bg-[#10B981]",
    },
    {
      code: "SPRING2024",
      discount: "20% off",
      uses: "82 uses",
      colorClass: "text-[#F97316]",
      bgClass: "bg-orange-50/50",
      dotClass: "bg-[#10B981]",
    },
    {
      code: "WELCOME10",
      discount: "10% off",
      uses: "312 uses",
      colorClass: "text-[#2563EB]",
      bgClass: "bg-blue-50/50",
      dotClass: "bg-[#10B981]",
    },
    {
      code: "EXPIRED_SALE",
      discount: "75% off",
      uses: "45 uses",
      colorClass: "text-[#A855F7]",
      bgClass: "bg-purple-50/50",
      dotClass: "bg-[#10B981]",
    },
  ];

  return (
    <div className="bg-white rounded-[16px] p-6 border border-gray-100/50">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-gray-900">Recent Enrollments</h3>
        <button className="text-[15px] font-semibold text-[#FF7A59] hover:underline">
          View All
        </button>
      </div>

      {/* Coupon Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {coupons.map((coupon) => (
          <div
            key={coupon.code}
            className="relative border border-gray-100 rounded-[12px] p-5 bg-[#F6F6F6] flex flex-col gap-2.5 transition-all hover:shadow-sm"
          >
            {/* Top row: Badge and Dot */}
            <div className="flex items-center justify-between w-full">
              <span className="px-2.5 py-1 text-xs font-semibold text-gray-500 bg-gray-100 rounded-md">
                {coupon.code}
              </span>
              <span className={`size-2.5 rounded-full ${coupon.dotClass}`} />
            </div>

            {/* Discount */}
            <span className={`text-2xl font-extrabold ${coupon.colorClass}`}>
              {coupon.discount}
            </span>

            {/* Uses */}
            <span className="text-gray-400 text-xs font-semibold">
              {coupon.uses}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
