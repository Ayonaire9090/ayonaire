"use client";

import React, { useRef, useState } from "react";
import { Mail, FileText, Link2, AlertCircle, Upload, X } from "lucide-react";
import { AppSelect } from "@/components/ui/app-select";
import { AppCheck } from "@/components/ui/app-check";
import { AppToggle } from "@/components/ui/app-toggle";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useGetCourses } from "@/hooks/api/use-courses";

const bulkOptions = [
  {
    id: "email",
    title: "Invite by Email",
    description: "Send invitations to multiple email addresses",
    icon: Mail,
  },
  {
    id: "csv",
    title: "Upload CSV",
    description: "Bulk import users from a spreadsheet",
    icon: FileText,
  },
  {
    id: "link",
    title: "Invite Link",
    description: "Generate a shareable registration link",
    icon: Link2,
  },
] as const;

export interface BulkAddFormProps {
  bulkOption: "email" | "csv" | "link";
  onBulkOptionChange: (option: "email" | "csv" | "link") => void;
  emailsText: string;
  onEmailsTextChange: (text: string) => void;
  courseId: string;
  onCourseIdChange: (courseId: string) => void;
  csvFile: File | null;
  onCsvFileChange: (file: File | null) => void;
}

export function BulkAddForm({
  bulkOption,
  onBulkOptionChange,
  emailsText,
  onEmailsTextChange,
  courseId,
  onCourseIdChange,
  csvFile,
  onCsvFileChange,
}: BulkAddFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data: coursesData } = useGetCourses();
  const courseOptions = [
    { label: "Select All Courses", value: "all" },
    ...(coursesData?.courses ?? []).map((course) => ({
      label: course.title,
      value: course._id,
    })),
  ];

  // Role/status/expiry fields below have no corresponding field on
  // InviteUsersPayload (only emails/cohortId/courseId are accepted), so
  // they're left as local, unwired UI state until the backend supports them.
  const [bulkRole, setBulkRole] = useState("student");
  const [bulkDefaultRole, setBulkDefaultRole] = useState("student");
  const [bulkDefaultStatus, setBulkDefaultStatus] = useState("active");

  const [inviteRole, setInviteRole] = useState("student");
  const [inviteExpiry, setInviteExpiry] = useState("7d");
  const [inviteMaxUsers, setInviteMaxUsers] = useState("100");

  const handleFileSelected = (file: File | null) => {
    if (file && !file.name.toLowerCase().endsWith(".csv")) return;
    onCsvFileChange(file);
  };

  return (
    <div className="flex flex-col gap-8 md:gap-10 py-4">
      {/* Mobile Peaking Carousel */}
      <div className="lg:hidden w-full overflow-hidden">
        <Carousel
          opts={{
            align: "start",
            dragFree: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {bulkOptions.map((opt) => {
              const Icon = opt.icon;
              const isSelected = bulkOption === opt.id;
              return (
                <CarouselItem
                  key={opt.id}
                  className="pl-4 basis-[80%] sm:basis-[45%]"
                  onClick={() => onBulkOptionChange(opt.id)}
                >
                  <div
                    className={`p-5 rounded-2xl border cursor-pointer transition-all bg-white flex flex-col gap-3 h-full ${
                      isSelected
                        ? "border-[#FF7A59] ring-1 ring-[#FF7A59]/10"
                        : "border-gray-100"
                    }`}
                  >
                    <div className="flex items-center">
                      <div
                        className={`p-2 rounded-lg ${
                          isSelected
                            ? "bg-[#FF7A59]/10 text-[#FF7A59]"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">
                        {opt.title}
                      </h4>
                      <p className="text-sm text-gray-500 leading-snug">
                        {opt.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {bulkOptions.map((opt) => {
          const Icon = opt.icon;
          const isSelected = bulkOption === opt.id;
          return (
            <div
              key={opt.id}
              onClick={() => onBulkOptionChange(opt.id)}
              className={`p-5 rounded-2xl border-2 cursor-pointer transition-all bg-white flex flex-col gap-3 ${
                isSelected
                  ? "border-[#FF7A59] ring-4 ring-[#FF7A59]/10"
                  : "border-transparent"
              }`}
            >
              <div className="flex items-center">
                <div
                  className={`p-2 rounded-lg ${
                    isSelected
                      ? "bg-[#FF7A59]/10 text-[#FF7A59]"
                      : "bg-gray-100 text-gray-500"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {opt.title}
                </h4>
                <p className="text-sm text-gray-500 leading-snug">
                  {opt.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Form Sections depending on bulk Option */}
      {bulkOption === "email" && (
        <div className="flex flex-col gap-5">
          {/* Email Addresses */}
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-semibold text-gray-900 block lg:hidden">
              Phone Number (optional)
            </label>
            <label className="text-[15px] font-semibold text-gray-900 hidden lg:block">
              Email Addresses
            </label>
            <textarea
              value={emailsText}
              onChange={(e) => onEmailsTextChange(e.target.value)}
              placeholder="Enter email addresses separated by commas or new lines...e.g., john@example.com, jane@example.com"
              className="w-full min-h-[120px] p-4 rounded-xl text-[15px] bg-white border-transparent hover:border-gray-200 resize-y placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-[#FF7A59]/30 outline-none"
            />
          </div>

          {/* Role and Course */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <AppSelect
              label="Role (applies to all)"
              options={[
                { label: "Student", value: "student" },
                { label: "Instructor", value: "instructor" },
              ]}
              value={bulkRole}
              onChange={setBulkRole}
            />
            <AppSelect
              label="Course Assignment (optional)"
              options={courseOptions}
              value={courseId}
              onChange={onCourseIdChange}
            />
          </div>

          {/* Send invite check */}
          <div className="py-2">
            <AppCheck
              label="Send invite email immediately"
              description="Users will receive an invitation as soon as you submit"
              containerClassName="bg-white p-4 rounded-xl border border-gray-100 items-start"
            />
          </div>
        </div>
      )}

      {bulkOption === "csv" && (
        <div className="flex flex-col gap-5">
          {/* Drag and Drop Area */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            className="hidden"
            onChange={(e) => handleFileSelected(e.target.files?.[0] ?? null)}
          />
          <div
            onClick={() => fileInputRef.current?.click()}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              handleFileSelected(e.dataTransfer.files?.[0] ?? null);
            }}
            className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center py-12 px-4 bg-white text-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <div className="bg-[#F6F6F6] p-3 rounded-xl mb-4">
              <Upload className="w-6 h-6 text-gray-900" />
            </div>
            <h4 className="text-[17px] font-semibold text-gray-900 mb-1">
              Drag & drop your CSV file here
            </h4>
            <p className="text-[15px] text-gray-500 mb-3">
              or click to browse from your computer
            </p>
            <p className="text-sm text-gray-400">Supported format: .csv</p>
          </div>

          {csvFile && (
            <div className="flex items-center justify-between gap-3 bg-[#F6F6F6] rounded-xl px-4 py-3">
              <div className="flex items-center gap-2 min-w-0">
                <FileText className="w-4 h-4 text-gray-500 shrink-0" />
                <span className="text-[14px] text-gray-700 truncate">
                  {csvFile.name}
                </span>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onCsvFileChange(null);
                  if (fileInputRef.current) fileInputRef.current.value = "";
                }}
                className="text-gray-400 hover:text-gray-600 shrink-0"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Template Download Box */}
          <div className="bg-[#F86432]/10 border border-[#F86432] rounded-2xl p-5 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <h4 className="font-semibold text-gray-900 text-[16px]">
                Need a template?
              </h4>
              <p className="text-[14px] text-gray-600">
                Download our CSV template to get started
              </p>
            </div>
            <Button
              variant="outline"
              className="border-[#FF7A59] text-[#FF7A59] hover:bg-[#FF7A59]/10 hover:text-[#FF7A59] bg-transparent rounded-xl h-11 w-full md:w-auto px-6 font-medium"
            >
              Download
            </Button>
          </div>
        </div>
      )}

      {bulkOption === "link" && (
        <div className="flex flex-col gap-5">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="col-span-2 md:col-span-1">
              <AppSelect
                label="Role"
                options={[
                  { label: "Student", value: "student" },
                  { label: "Instructor", value: "instructor" },
                ]}
                value={inviteRole}
                onChange={setInviteRole}
              />
            </div>
            <div className="col-span-1">
              <AppSelect
                label="Expiry Date"
                options={[
                  { label: "7 days", value: "7d" },
                  { label: "14 days", value: "14d" },
                  { label: "30 days", value: "30d" },
                  { label: "Never", value: "never" },
                ]}
                value={inviteExpiry}
                onChange={setInviteExpiry}
              />
            </div>
            <div className="col-span-1">
              <AppSelect
                label="Max Users"
                options={[
                  { label: "10", value: "10" },
                  { label: "100", value: "100" },
                  { label: "500", value: "500" },
                  { label: "Unlimited", value: "unlimited" },
                ]}
                value={inviteMaxUsers}
                onChange={setInviteMaxUsers}
              />
            </div>
          </div>

          <div className="border-2 border-dashed border-gray-200 rounded-2xl flex flex-col items-center justify-center py-12 px-4 bg-white text-center">
            <div className="bg-[#F6F6F6] p-3 rounded-xl mb-4">
              <Link2 className="w-6 h-6 text-gray-900" />
            </div>
            <p className="text-[15px] text-gray-500 mb-6">
              Configure your settings above and generate an invite link
            </p>
            <Button className="bg-[#FF7A59] hover:bg-[#FF7A59]/90 text-white rounded-xl h-11 px-8 font-medium">
              Generate Invite Link
            </Button>
          </div>
        </div>
      )}

      {/* Bulk Settings Section */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col space-y-1">
          <h3 className="text-[17px] font-semibold text-gray-900 md:hidden">
            Cohort / Group (optional)
          </h3>
          <h3 className="text-[17px] font-semibold text-gray-900 hidden md:block">
            Bulk Settings
          </h3>
          <p className="text-gray-500 text-sm">
            Configure default options for all imported users
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <AppSelect
            label="Default Role"
            options={[
              { label: "Student", value: "student" },
              { label: "Instructor", value: "instructor" },
            ]}
            value={bulkDefaultRole}
            onChange={setBulkDefaultRole}
          />
          <AppSelect
            label="Default Account Status"
            options={[
              { label: "Active", value: "active" },
              { label: "Suspended", value: "suspended" },
            ]}
            value={bulkDefaultStatus}
            onChange={setBulkDefaultStatus}
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
          <AppToggle
            label="Send notification emails"
            description="Users will receive account setup instructions"
            containerClassName="bg-white p-4 rounded-xl border border-gray-100 h-full min-h-[72px]"
          />
          <AppToggle
            label="Require email verification"
            description="Users must verify email before accessing platform"
            containerClassName="bg-white p-4 rounded-xl border border-gray-100 h-full min-h-[72px]"
          />
        </div>

        <div className="bg-[#FFFBEB] border border-[#FFD220] rounded-xl p-4 py-6 flex gap-3 items-center">
          <AlertCircle className="w-5 h-5 text-[#FFD220] shrink-0" />
          <p className="text-[14px] text-black/40">
            Users will receive an email to set up their account.
          </p>
        </div>
      </div>
    </div>
  );
}
