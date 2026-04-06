"use client";

import React, { useState } from "react";
import { Search } from "lucide-react";
import { AppMegaModal } from "@/components/modals/app-mega-modal";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { AppCheck } from "@/components/ui/app-check";
import { AppToggle } from "@/components/ui/app-toggle";
import { Button } from "@/components/ui/button";
import { courses } from "@/constants";

export function AddUserModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"manual" | "bulk">("manual");

  // Form States
  const [role, setRole] = useState("student");
  const [status, setStatus] = useState("active");
  const [accessDuration, setAccessDuration] = useState("1y");
  const [cohort, setCohort] = useState<string>("");
  const [courseSearchQuery, setCourseSearchQuery] = useState("");

  return (
    <AppMegaModal
      isOpen={isOpen}
      onClose={onClose}
      title="Add New User"
      subtitle="Create a new student or invite users to the platform"
      headerContent={
        <div className="inline-flex items-center bg-white p-1 rounded-xl shadow-sm overflow-x-auto w-full md:w-auto">
          <button
            onClick={() => setActiveTab("manual")}
            className={`flex-1 md:flex-none whitespace-nowrap px-2 md:px-4 py-2 rounded-lg text-[14px] md:text-[15px] transition-colors font-medium ${
              activeTab === "manual"
                ? "bg-[#FFEBE6] text-black"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Manual Add
          </button>
          <button
            onClick={() => setActiveTab("bulk")}
            className={`flex-1 md:flex-none whitespace-nowrap px-2 md:px-4 py-2 rounded-lg text-[14px] md:text-[15px] transition-colors font-medium ${
              activeTab === "bulk"
                ? "bg-[#FFEBE6] text-black"
                : "text-gray-500 hover:text-gray-900"
            }`}
          >
            Automatic / Bulk Add
          </button>
        </div>
      }
      footerContent={
        <div className="grid grid-cols-2 md:flex items-center justify-end gap-2 md:gap-4">
          <Button
            variant="outline"
            onClick={onClose}
            className="md:w-auto px-8 h-12 rounded-xl text-[15px] font-medium border-gray-200"
          >
            Cancel
          </Button>
          <Button className="md:w-auto px-8 h-12 rounded-xl text-[15px] font-medium bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white border-transparent">
            <span className="text-xl mr-1 font-light">+</span> Add User
          </Button>
        </div>
      }
    >
      {activeTab === "manual" ? (
        <div className="flex flex-col gap-8 md:gap-10">
          <section className="flex flex-col gap-4 md:gap-5">
            <h3 className="text-[17px] font-semibold text-gray-900">
              Basic Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AppInput
                label={
                  <>
                    Full Name <span className="text-red-500">*</span>
                  </>
                }
                placeholder="Enter full name"
              />
              <AppInput
                label={
                  <>
                    Email Address <span className="text-red-500">*</span>
                  </>
                }
                placeholder="Enter email address"
              />
              <AppInput
                label={
                  <>
                    Phone Number{" "}
                    <span className="text-gray-400 font-normal">
                      (optional)
                    </span>
                  </>
                }
                placeholder="+2345324646477"
              />
              <AppInput
                label={
                  <>
                    User ID{" "}
                    <span className="text-gray-400 font-normal">
                      (auto-generated)
                    </span>
                  </>
                }
                value="STU-1823"
                readOnly
                className="bg-white text-gray-400"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4 md:gap-5">
            <h3 className="text-[17px] font-semibold text-gray-900">
              Role & Access
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
              <AppSelect
                label="Role"
                options={[
                  {
                    label: "Student",
                    value: "student",
                    description: "Access to enrolled courses",
                  },
                  { label: "Instructor", value: "instructor" },
                ]}
                value={role}
                onChange={setRole}
                className="col-span-2 md:col-span-1"
              />
              <AppSelect
                label="Status"
                options={[
                  { label: "Active", value: "active" },
                  { label: "Suspended", value: "suspended" },
                ]}
                value={status}
                onChange={setStatus}
                className="col-span-1"
              />
              <AppSelect
                label="Access duration"
                options={[
                  { label: "1 Year", value: "1y" },
                  { label: "Lifetime", value: "lifetime" },
                ]}
                value={accessDuration}
                onChange={setAccessDuration}
                className="col-span-1"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4 relative py-4">
            <div className="flex items-center gap-2 md:gap-4 w-full">
              <h3 className="text-[17px] w-[200px] md:w-full font-semibold text-gray-900">
                Assign Courses
              </h3>
              <AppInput
                Icon={<Search className="size-[18px]" />}
                placeholder="Search courses..."
                className="max-w-full md:max-w-sm rounded-[24px] bg-white h-11"
                value={courseSearchQuery}
                onChange={(e) => setCourseSearchQuery(e.target.value)}
              />
            </div>

            <div className="bg-white p-2 md:p-4 rounded-xl border border-gray-100 flex flex-col md:grid md:grid-cols-2 gap-2 md:gap-4 max-h-[170px] md:max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300">
              {courses
                .flatMap((c) => c.courses)
                .filter((course) =>
                  course.title
                    .toLowerCase()
                    .includes(courseSearchQuery.toLowerCase()),
                )
                .map((course) => (
                  <AppCheck
                    key={course.slug}
                    label={
                      <span className="text-gray-500 font-normal">
                        {course.title}
                      </span>
                    }
                    containerClassName="p-3.5 bg-[#F6F6F6] rounded-xl items-center"
                    className="size-5 shrink-0 border-2 border-gray-700 rounded-[4px]"
                  />
                ))}
            </div>
          </section>

          <section className="flex flex-col gap-4 md:gap-5">
            <h3 className="text-[17px] font-semibold text-gray-900">
              Cohort / Group{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AppSelect
                placeholder="Select Cohort"
                options={[{ label: "Cohort A", value: "a" }]}
                value={cohort}
                onChange={setCohort}
              />
              <AppToggle
                label="Send enrollment notification"
                description="Notify user about course assignments"
                containerClassName="bg-white p-4 rounded-xl border border-gray-100 h-full min-h-[72px]"
              />
            </div>
          </section>

          <section className="flex flex-col gap-4 md:gap-5">
            <h3 className="text-[17px] font-semibold text-gray-900">
              Login & Notifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AppCheck
                label="Send login invite via email"
                description="User will receive an email to set up their account"
                containerClassName="bg-white p-4 rounded-xl border border-gray-100 items-start"
              />
              <AppCheck
                label="Require email verification"
                description="User must verify email before accessing the platform"
                containerClassName="bg-white p-4 rounded-xl border border-gray-100 items-start"
              />
              <AppToggle
                label="Force password reset on first login"
                description="User must create a new password on first sign in"
                containerClassName="bg-white p-4 rounded-xl border border-gray-100 md:col-span-1"
              />
            </div>
          </section>
        </div>
      ) : (
        <div className="py-20 text-center text-gray-500">
          Bulk add functionality coming soon... I'll provide content for this
          later.
        </div>
      )}
    </AppMegaModal>
  );
}
