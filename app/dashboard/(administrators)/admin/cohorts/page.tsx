"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { useGetCohorts } from "@/hooks/api/use-cohorts";
import { CreateCohortModal } from "./_components/create-cohort-modal";
import { AssignCohortModal } from "./_components/assign-cohort-modal";

export default function AdminCohortsPage() {
  const { data, isLoading, isError } = useGetCohorts();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [assigning, setAssigning] = useState<{ cohortId: string; mode: "student" | "instructor" } | null>(null);

  const cohorts = data?.cohorts ?? [];

  return (
    <div className="flex flex-col gap-0 pb-4">
      <div className="flex items-center justify-between px-4 lg:px-0 flex-wrap gap-4">
        <DashboardHeader
          title="Cohorts"
          subTitle="Group students and instructors by course intake."
        />
        <AdminDashboardButton title="Create Cohort" icon={Plus} onClick={() => setIsCreateOpen(true)} />
      </div>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading ? (
          <div className="col-span-full flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="col-span-full flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load cohorts. Please try again.
          </div>
        ) : cohorts.length === 0 ? (
          <div className="col-span-full flex items-center justify-center py-16 text-[15px] text-gray-500">
            No cohorts created yet.
          </div>
        ) : (
          cohorts.map((cohort) => {
            const courseTitle = typeof cohort.course === "object" ? cohort.course.title : "Uncategorized";
            return (
              <div
                key={cohort._id}
                className="bg-white p-5 rounded-2xl border border-gray-100 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-semibold text-gray-900 text-[16px]">{cohort.name}</h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-medium ${
                      cohort.isActive === false
                        ? "bg-gray-100 text-gray-600"
                        : "bg-[#E6F6EC] text-[#24A164]"
                    }`}
                  >
                    {cohort.isActive === false ? "Inactive" : "Active"}
                  </span>
                </div>
                <p className="text-gray-500 text-[13px]">{courseTitle}</p>
                {cohort.description && (
                  <p className="text-gray-600 text-[13.5px] line-clamp-2">{cohort.description}</p>
                )}
                <div className="flex items-center gap-3 mt-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => setAssigning({ cohortId: cohort._id, mode: "student" })}
                    className="text-[13px] font-medium text-[#F06B30] hover:underline"
                  >
                    Assign Student
                  </button>
                  <button
                    onClick={() => setAssigning({ cohortId: cohort._id, mode: "instructor" })}
                    className="text-[13px] font-medium text-[#F06B30] hover:underline"
                  >
                    Assign Instructor
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>

      <CreateCohortModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
      <AssignCohortModal
        cohortId={assigning?.cohortId ?? null}
        mode={assigning?.mode ?? "student"}
        onClose={() => setAssigning(null)}
      />
    </div>
  );
}
