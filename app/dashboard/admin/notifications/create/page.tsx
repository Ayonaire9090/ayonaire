"use client";

import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import {
  Check,
  ChevronDown,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Code,
  Eraser,
  List,
  ListOrdered,
  LinkIcon,
  ImageIcon,
  Quote,
  Minus,
  AlignLeft,
} from "lucide-react";
import { useState } from "react";
import { LiveSummaryBanner } from "./_components/live-summary-banner";

function SelectableOption({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`min-w-[120px] flex-1 h-12 px-4 rounded-xl border text-left text-[15px] transition-colors focus:outline-none ${
        selected
          ? "border-primary bg-primary/5 text-primary font-medium"
          : "border-gray-100/60 bg-[#FBFBFB] text-gray-400 hover:border-gray-200"
      }`}
    >
      {label}
    </button>
  );
}

export default function CreateNotificationPage() {
  const [type, setType] = useState("");
  const [recipientType, setRecipientType] = useState("");
  const [sendOption, setSendOption] = useState("");

  return (
    <div className="w-full">
      <DashboardHeader
        title="Create Notification"
        subTitle="Manage how and when your users stay informed"
      />

      <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
        <DashboardSearch />
        <AdminDashboardButton title="Mark all as read" icon={Check} />
      </div>

      <div className="w-full flex flex-col gap-8 pb-20 p-4 rounded-2xl bg-white">
        {/* Basic Information */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Basic Information
          </h2>

          <AppInput
            label="Notification Name"
            placeholder="Assignment reminder"
            className="bg-[#FBFBFB]"
          />

          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-semibold text-gray-900">
              Type
            </label>
            <div className="flex flex-wrap gap-4">
              <SelectableOption
                label="Email"
                selected={type === "Email"}
                onClick={() => setType("Email")}
              />
              <SelectableOption
                label="Reminder"
                selected={type === "Reminder"}
                onClick={() => setType("Reminder")}
              />
              <SelectableOption
                label="Both"
                selected={type === "Both"}
                onClick={() => setType("Both")}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-semibold text-gray-900">
              Recipient Type
            </label>
            <div className="flex flex-wrap gap-4">
              <SelectableOption
                label="All Users"
                selected={recipientType === "All Users"}
                onClick={() => setRecipientType("All Users")}
              />
              <SelectableOption
                label="Students"
                selected={recipientType === "Students"}
                onClick={() => setRecipientType("Students")}
              />
              <SelectableOption
                label="Instructors"
                selected={recipientType === "Instructors"}
                onClick={() => setRecipientType("Instructors")}
              />
              <SelectableOption
                label="Specific Users"
                selected={recipientType === "Specific Users"}
                onClick={() => setRecipientType("Specific Users")}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppSelect
              label="Select Course"
              placeholder="Assignment reminder"
              options={[{ label: "Assignment reminder", value: "c1" }]}
              className="bg-[#FBFBFB]"
            />
            <AppSelect
              label="Cohort"
              placeholder="Assignment reminder"
              options={[{ label: "Assignment reminder", value: "ch1" }]}
              className="bg-[#FBFBFB]"
            />
          </div>
        </section>

        {/* Message Editor Simulation */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[17px] font-semibold text-gray-900">
            Message Editor
          </h2>

          <div className="border border-gray-100 rounded-xl bg-white overflow-hidden flex flex-col">
            {/* Toolbar */}
            <div className="border-b border-gray-100 py-3 px-4 flex flex-wrap gap-4 items-center text-gray-500 bg-white">
              <div className="flex items-center gap-1 text-[13px] font-medium cursor-pointer hover:bg-gray-50 p-1 rounded">
                Normal text <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
              </div>

              <div className="flex items-center gap-1 text-[13px] font-medium cursor-pointer hover:bg-gray-50 p-1 rounded">
                <AlignLeft className="w-4 h-4" />{" "}
                <ChevronDown className="w-4 h-4 opacity-50" />
              </div>

              <div className="flex items-center gap-1 text-[13px] font-medium cursor-pointer hover:bg-gray-50 p-1 rounded">
                <div className="w-4 h-4 bg-gray-900 rounded-sm" />{" "}
                <ChevronDown className="w-4 h-4 opacity-50" />
              </div>

              <div className="flex items-center gap-3 ml-2">
                <Bold className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Italic className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Underline className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Strikethrough className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Code className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Eraser className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />

                <div className="w-px h-4 bg-gray-200 mx-1" />

                <List className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <ListOrdered className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <LinkIcon className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <ImageIcon className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Code className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Quote className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
                <Minus className="w-[15px] h-[15px] cursor-pointer hover:text-gray-900" />
              </div>
            </div>
            <textarea
              className="w-full h-[180px] p-5 resize-none focus:outline-none placeholder:text-gray-400 text-[15px] text-gray-600 font-medium"
              placeholder="Describe of assignment"
            ></textarea>
          </div>

          <div className="flex justify-end mt-1">
            <Button
              variant="secondary"
              className="bg-gray-50/80 hover:bg-gray-100 text-gray-700 rounded-xl px-6 border-gray-200 border shadow-none font-medium text-[14px]"
            >
              + Add File
            </Button>
          </div>
        </section>

        {/* Send Option */}
        <section className="flex flex-col gap-6 mt-1">
          <h2 className="text-[17px] font-semibold text-gray-900">
            Send Option
          </h2>

          <div className="flex flex-wrap gap-4">
            <SelectableOption
              label="Send Now"
              selected={sendOption === "Send Now"}
              onClick={() => setSendOption("Send Now")}
            />
            <SelectableOption
              label="Schedule Later"
              selected={sendOption === "Schedule Later"}
              onClick={() => setSendOption("Schedule Later")}
            />
            <SelectableOption
              label="Recurring"
              selected={sendOption === "Recurring"}
              onClick={() => setSendOption("Recurring")}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AppSelect
              label="Date"
              placeholder="Assignment reminder"
              options={[{ label: "Assignment reminder", value: "today" }]}
              className="bg-[#FBFBFB]"
            />
            <AppSelect
              label="Time"
              placeholder="Assignment reminder"
              options={[{ label: "Assignment reminder", value: "now" }]}
              className="bg-[#FBFBFB]"
            />
          </div>

          <AppSelect
            label="Status"
            placeholder="draft"
            options={[
              { label: "draft", value: "draft" },
              { label: "published", value: "published" },
            ]}
            value="draft"
            className="bg-[#FBFBFB]"
          />
        </section>

        {/* Live Summary */}
        <LiveSummaryBanner />

        {/* Action Buttons */}
        <div className="grid grid-cols-3 md:flex justify-start md:justify-end flex-wrap items-center gap-4 mt-2">
          <Button
            variant="outline"
            className="h-[46px] rounded-xl px-4 md:px-10 border-gray-200 bg-gray-50/80 hover:bg-gray-100 w-full md:w-auto text-gray-700 font-medium"
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            className="h-[46px] rounded-xl px-4 md:px-10 border-gray-200 bg-gray-50/80 hover:bg-gray-100 w-full md:w-auto text-gray-700 font-medium"
          >
            Save draft
          </Button>
          <Button className="h-[46px] w-full md:w-auto rounded-xl px-4 md:px-16 bg-primary hover:bg-[#e04a1f] text-white font-medium text-[15px]">
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
