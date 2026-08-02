"use client";

import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DashboardSearch } from "@/components/dashboard/dashboard-search";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import {
  Bold,
  ChevronDown,
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
import { useMemo, useState } from "react";
import { LiveSummaryBanner } from "./_components/live-summary-banner";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetCohorts } from "@/hooks/api/use-cohorts";
import {
  useCreateNotificationMutation,
  useSendNotificationMutation,
} from "@/hooks/api/use-notifications";
import { CreateNotificationPayload } from "@/lib/api/endpoints/notifications";

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

const RECIPIENT_TYPE_MAP: Record<string, string> = {
  "All Users": "all",
  Students: "student",
  Instructors: "instructor",
  "Specific Users": "specific",
};

const TYPE_MAP: Record<string, string> = {
  Email: "email",
  Reminder: "reminder",
  Both: "both",
};

export default function CreateNotificationPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("Reminder");
  const [recipientType, setRecipientType] = useState("All Users");
  const [courseId, setCourseId] = useState("");
  const [cohortId, setCohortId] = useState("");
  const [sendOption, setSendOption] = useState("Send Now");
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  const { data: coursesData } = useGetCourses({ limit: 100 });
  const { data: cohortsData } = useGetCohorts(courseId || undefined);

  const courseOptions = useMemo(
    () =>
      (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id })),
    [coursesData],
  );
  const cohortOptions = useMemo(
    () =>
      (cohortsData?.cohorts ?? []).map((c) => ({ label: c.name, value: c._id })),
    [cohortsData],
  );

  const createNotification = useCreateNotificationMutation();
  const sendNotification = useSendNotificationMutation();

  const buildPayload = (status: string): CreateNotificationPayload => {
    const scheduledAt =
      sendOption === "Schedule Later" && scheduleDate
        ? new Date(`${scheduleDate}T${scheduleTime || "00:00"}`).toISOString()
        : undefined;

    return {
      name,
      message,
      type: TYPE_MAP[type] ?? "reminder",
      recipientType: RECIPIENT_TYPE_MAP[recipientType] ?? "all",
      course: courseId || undefined,
      cohort: cohortId || undefined,
      sendOption:
        sendOption === "Recurring"
          ? "recurring"
          : sendOption === "Schedule Later"
            ? "schedule"
            : "now",
      isRecurringTemplate: sendOption === "Recurring",
      scheduledAt,
      status,
    };
  };

  const handleCancel = () => {
    router.push("/dashboard/admin/notifications");
  };

  const handleSaveDraft = () => {
    if (!name.trim()) {
      toast.error("Give your notification a name first.");
      return;
    }
    createNotification.mutate(buildPayload("draft"), {
      onSuccess: () => {
        toast.success("Notification saved as draft");
        router.push("/dashboard/admin/notifications");
      },
      onError: (err) =>
        toast.error(err instanceof Error ? err.message : "Failed to save draft"),
    });
  };

  const handleSend = () => {
    if (!name.trim() || !message.trim()) {
      toast.error("Add a name and message before sending.");
      return;
    }

    const status = sendOption === "Schedule Later" ? "scheduled" : "draft";

    createNotification.mutate(buildPayload(status), {
      onSuccess: (res) => {
        const created = res?.data;
        if (sendOption === "Send Now" && created?._id) {
          sendNotification.mutate(created._id, {
            onSuccess: () => {
              toast.success("Notification sent");
              router.push("/dashboard/admin/notifications");
            },
            onError: (err) =>
              toast.error(
                err instanceof Error ? err.message : "Notification created but failed to send",
              ),
          });
        } else {
          toast.success(
            sendOption === "Schedule Later"
              ? "Notification scheduled"
              : "Notification created",
          );
          router.push("/dashboard/admin/notifications");
        }
      },
      onError: (err) =>
        toast.error(err instanceof Error ? err.message : "Failed to create notification"),
    });
  };

  const isSubmitting = createNotification.isPending || sendNotification.isPending;

  return (
    <div className="w-full">
      <DashboardHeader
        title="Create Notification"
        subTitle="Manage how and when your users stay informed"
      />

      <div className="flex justify-between items-center gap-4 flex-wrap pb-6">
        <DashboardSearch />
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
            value={name}
            onChange={(e) => setName(e.target.value)}
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
              placeholder="Any course"
              options={courseOptions}
              value={courseId}
              onChange={setCourseId}
              className="bg-[#FBFBFB]"
            />
            <AppSelect
              label="Cohort"
              placeholder={courseId ? "Select a cohort" : "Select a course first"}
              options={cohortOptions}
              value={cohortId}
              onChange={setCohortId}
              className="bg-[#FBFBFB]"
            />
          </div>
        </section>

        {/* Message Editor */}
        <section className="flex flex-col gap-4">
          <h2 className="text-[17px] font-semibold text-gray-900">
            Message Editor
          </h2>

          <div className="border border-gray-100 rounded-xl bg-white overflow-hidden flex flex-col">
            {/* Toolbar (formatting isn't wired to the plain-text message yet) */}
            <div className="border-b border-gray-100 py-3 px-4 flex flex-wrap gap-4 items-center text-gray-300 bg-white">
              <div className="flex items-center gap-1 text-[13px] font-medium">
                Normal text <ChevronDown className="w-4 h-4 ml-1 opacity-50" />
              </div>
              <div className="flex items-center gap-1 text-[13px] font-medium">
                <AlignLeft className="w-4 h-4" />{" "}
                <ChevronDown className="w-4 h-4 opacity-50" />
              </div>
              <div className="flex items-center gap-3 ml-2">
                <Bold className="w-[15px] h-[15px]" />
                <Italic className="w-[15px] h-[15px]" />
                <Underline className="w-[15px] h-[15px]" />
                <Strikethrough className="w-[15px] h-[15px]" />
                <Code className="w-[15px] h-[15px]" />
                <Eraser className="w-[15px] h-[15px]" />
                <div className="w-px h-4 bg-gray-200 mx-1" />
                <List className="w-[15px] h-[15px]" />
                <ListOrdered className="w-[15px] h-[15px]" />
                <LinkIcon className="w-[15px] h-[15px]" />
                <ImageIcon className="w-[15px] h-[15px]" />
                <Quote className="w-[15px] h-[15px]" />
                <Minus className="w-[15px] h-[15px]" />
              </div>
            </div>
            <textarea
              className="w-full h-[180px] p-5 resize-none focus:outline-none placeholder:text-gray-400 text-[15px] text-gray-600 font-medium"
              placeholder="Describe of assignment"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
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

          {sendOption === "Schedule Later" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AppInput
                label="Date"
                type="date"
                className="bg-[#FBFBFB]"
                value={scheduleDate}
                onChange={(e) => setScheduleDate(e.target.value)}
              />
              <AppInput
                label="Time"
                type="time"
                className="bg-[#FBFBFB]"
                value={scheduleTime}
                onChange={(e) => setScheduleTime(e.target.value)}
              />
            </div>
          )}
        </section>

        {/* Live Summary */}
        <LiveSummaryBanner
          recipientType={recipientType}
          sendOption={sendOption}
          status={sendOption === "Schedule Later" ? "Scheduled" : "Draft"}
        />

        {/* Action Buttons */}
        <div className="grid grid-cols-3 md:flex justify-start md:justify-end flex-wrap items-center gap-4 mt-2">
          <Button
            variant="outline"
            onClick={handleCancel}
            disabled={isSubmitting}
            className="h-[46px] rounded-xl px-4 md:px-10 border-gray-200 bg-gray-50/80 hover:bg-gray-100 w-full md:w-auto text-gray-700 font-medium"
          >
            Cancel
          </Button>
          <Button
            variant="outline"
            onClick={handleSaveDraft}
            disabled={isSubmitting}
            className="h-[46px] rounded-xl px-4 md:px-10 border-gray-200 bg-gray-50/80 hover:bg-gray-100 w-full md:w-auto text-gray-700 font-medium"
          >
            Save draft
          </Button>
          <Button
            onClick={handleSend}
            disabled={isSubmitting}
            className="h-[46px] w-full md:w-auto rounded-xl px-4 md:px-16 bg-primary hover:bg-[#e04a1f] text-white font-medium text-[15px]"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </Button>
        </div>
      </div>
    </div>
  );
}
