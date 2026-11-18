"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiClient } from "@/lib/api/client";
import { queryKeys } from "@/lib/api/query-keys";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Clock, Calendar, MoreVertical, Loader2 } from "lucide-react";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  useCreateLearningReminderMutation,
  useDeleteLearningReminderMutation,
  useLearningReminders,
} from "@/hooks/api/use-course-interactions";
import type { LearningReminder } from "@/lib/api/endpoints/course-interactions";

interface CourseLearningToolsProps {
  courseId?: string;
  courseTitle?: string;
}

type ReminderFrequency = LearningReminder["frequency"];
type CalendarProvider = LearningReminder["calendarProvider"];

function downloadCalendarReminder(reminder: Pick<LearningReminder, "name" | "time" | "frequency">) {
  const [hours, minutes] = reminder.time.split(":").map(Number);
  const start = new Date();
  start.setHours(hours, minutes, 0, 0);
  if (start.getTime() <= Date.now()) start.setDate(start.getDate() + 1);
  const end = new Date(start.getTime() + 30 * 60 * 1000);
  const stamp = (date: Date) => `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}T${String(date.getHours()).padStart(2, "0")}${String(date.getMinutes()).padStart(2, "0")}00`;
  const title = (reminder.name || "Learning reminder").replace(/[\\,;\n\r]/g, " ");
  const recurrence = reminder.frequency === "Once" ? "" : `RRULE:FREQ=${reminder.frequency === "Daily" ? "DAILY" : "WEEKLY"}\r\n`;
  const content = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Ayonaire//Learning//EN\r\nBEGIN:VEVENT\r\nUID:${crypto.randomUUID()}@ayonaire\r\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}\r\nDTSTART:${stamp(start)}\r\nDTEND:${stamp(end)}\r\nSUMMARY:${title}\r\n${recurrence}BEGIN:VALARM\r\nTRIGGER:-PT0M\r\nACTION:DISPLAY\r\nDESCRIPTION:Learning reminder\r\nEND:VALARM\r\nEND:VEVENT\r\nEND:VCALENDAR\r\n`;
  const url = URL.createObjectURL(new Blob([content], { type: "text/calendar;charset=utf-8" }));
  const link = document.createElement("a"); link.href = url; link.download = "learning-reminder.ics"; link.click(); URL.revokeObjectURL(url);
}

export const CourseLearningTools = ({
  courseId = "",
  courseTitle = "This course",
}: CourseLearningToolsProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data, isLoading, isError } = useLearningReminders(courseId);
  const deleteReminder = useDeleteLearningReminderMutation(courseId);
  const queryClient = useQueryClient();
  const activateReminder = useMutation({
    mutationFn: (id: string) => apiClient(`/api/v1/course-interactions/${courseId}/reminders/${id}/activate`, { method: "POST", requireAuth: true, body: JSON.stringify({ timezone: Intl.DateTimeFormat().resolvedOptions().timeZone }) }),
    onSuccess: () => { queryClient.invalidateQueries({ queryKey: queryKeys.courseInteractions.reminders(courseId) }); toast.success("Email reminders activated"); },
    onError: (error) => toast.error(error instanceof Error ? error.message : "Could not activate reminder"),
  });

  const reminders = data?.data?.reminders ?? [];

  const handleDelete = (reminderId: string) => {
    deleteReminder.mutate(reminderId, {
      onSuccess: () => toast.success("Learning reminder deleted"),
      onError: (error) =>
        toast.error(error instanceof Error ? error.message : "Failed to delete reminder"),
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto pt-4 pb-20 flex flex-col gap-6">
      <div className="flex items-center justify-between gap-4 px-4 md:px-0">
        <h2 className="text-2xl font-semibold text-gray-900">
          Learning reminders
        </h2>
        <Button
          className="bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-5 h-10 text-sm font-medium shadow-none"
          onClick={() => setIsModalOpen(true)}
          disabled={!courseId}
        >
          Add Reminder
        </Button>
      </div>

      <div className="flex flex-col gap-6 lg:p-6 lg:bg-white lg:rounded-3xl md:px-0 w-full">
        <div className="bg-[#FFF5F2] rounded-xl p-6 md:p-8 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Build a steady learning habit
          </h3>
          <p className="text-gray-500 text-base">
            Set a reminder for this course and keep your schedule visible while
            you work through the lessons.
          </p>
          <p className="text-gray-500 text-sm">Course: {courseTitle}</p>
          <p className="text-gray-500 text-sm">Reminders are emailed to your account. You can also download a calendar event.</p>
          {data?.data && !data.data.deliveryAvailable && <p role="alert" className="text-sm text-amber-700">Email delivery is not configured on this server. Your reminder will be saved and delivered when email is configured and the worker is running.</p>}
        </div>

        {isLoading ? (
          <div className="flex items-center justify-center py-12">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="py-12 text-center text-[15px] text-red-500">
            Failed to load learning reminders.
          </div>
        ) : reminders.length === 0 ? (
          <div className="py-12 text-center text-[15px] text-gray-400">
            No learning reminders have been set for this course.
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {reminders.map((reminder) => (
              <div
                key={reminder._id}
                className="flex items-center justify-between gap-4 rounded-xl border border-gray-100 bg-white p-4"
              >
                <div className="min-w-0">
                  <p className="truncate text-[15px] font-semibold text-gray-900">
                    {reminder.name || courseTitle}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-4 text-gray-600">
                    <span className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-gray-900" />
                      {reminder.time}
                    </span>
                    <span className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-gray-900" />
                      {reminder.frequency}
                    </span>
                    <span className="flex items-center gap-2 text-sm capitalize">
                      {reminder.calendarProvider === "google" && <FcGoogle />}
                      {reminder.calendarProvider === "apple" && <FaApple />}
                      {reminder.calendarProvider}
                    </span>
                  </div>
                  {!reminder.timezone ? <div className="mt-2 text-sm text-amber-700">This older reminder needs a time zone. <button className="underline" disabled={activateReminder.isPending} onClick={() => activateReminder.mutate(reminder._id)}>Activate using this device&apos;s time zone</button></div> : <p className="mt-2 text-sm text-gray-500">{reminder.timezone} · {reminder.nextDeliveryAt ? `Next email: ${new Date(reminder.nextDeliveryAt).toLocaleString()}` : reminder.lastSentAt ? "Completed" : "Delivery unavailable"}{reminder.lastError ? ` · ${reminder.lastError}` : ""}</p>}
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2 hover:bg-gray-100 rounded-full transition">
                      <MoreVertical className="w-5 h-5 text-gray-700" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-[140px]">
                    <DropdownMenuItem onClick={() => downloadCalendarReminder(reminder)}>Download calendar event</DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={() => handleDelete(reminder._id)}
                      className="text-red-500 focus:text-red-500"
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ))}
          </div>
        )}
      </div>

      <LearningRemindersModal
        courseId={courseId}
        courseTitle={courseTitle}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

const LearningRemindersModal = ({
  courseId,
  courseTitle,
  isOpen,
  onClose,
}: {
  courseId: string;
  courseTitle: string;
  isOpen: boolean;
  onClose: () => void;
}) => {
  const createReminder = useCreateLearningReminderMutation(courseId);
  const [name, setName] = useState("");
  const [frequency, setFrequency] = useState<ReminderFrequency>("Daily");
  const [time, setTime] = useState("09:00");
  const [calendarProvider, setCalendarProvider] =
    useState<CalendarProvider>("none");

  const handleSave = () => {
    createReminder.mutate(
      {
        name: name.trim() || courseTitle,
        frequency,
        time,
        calendarProvider,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      },
      {
        onSuccess: () => {
          toast.success("Learning reminder saved");
          if (calendarProvider !== "none") downloadCalendarReminder({ name: name.trim() || courseTitle, frequency, time });
          setName("");
          setFrequency("Daily");
          setTime("09:00");
          setCalendarProvider("none");
          onClose();
        },
        onError: (error) =>
          toast.error(error instanceof Error ? error.message : "Failed to save reminder"),
      },
    );
  };

  return (
    <AppSimpleModal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-2xl! p-4 lg:p-6"
      title="Learning reminder"
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Label className="text-base font-medium text-gray-900">Name</Label>
          <Input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder={courseTitle}
            className="py-6 rounded-xl border-gray-200"
          />
        </div>

        <div className="flex flex-col gap-3">
          <Label className="text-base font-medium text-gray-900">Frequency</Label>
          <div className="grid grid-cols-3 gap-3">
            {(["Daily", "Weekly", "Once"] as const).map((freq) => (
              <Button
                key={freq}
                type="button"
                variant="outline"
                className={`py-6 rounded-xl text-base shadow-none ${
                  frequency === freq
                    ? "border-[#F86432] text-[#F86432] bg-[#F86432]/5"
                    : "border-gray-200 text-gray-500 hover:text-gray-900"
                }`}
                onClick={() => setFrequency(freq)}
              >
                {freq}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label className="text-base font-medium text-gray-900">Time</Label>
            <Input
              type="time"
              value={time}
              onChange={(event) => setTime(event.target.value)}
              className="py-6 rounded-xl border-gray-200"
            />
            <span className="text-xs text-gray-500">Time zone: {Intl.DateTimeFormat().resolvedOptions().timeZone}</span>
          </div>

          <div className="flex flex-col gap-2">
            <Label className="text-base font-medium text-gray-900">
              Calendar
            </Label>
            <div className="grid grid-cols-3 gap-2">
              {(["none", "google", "apple"] as const).map((provider) => (
                <Button
                  key={provider}
                  type="button"
                  variant="outline"
                  className={`h-12 rounded-xl capitalize shadow-none ${
                    calendarProvider === provider
                      ? "border-[#F86432] text-[#F86432] bg-[#F86432]/5"
                      : "border-gray-200 text-gray-500 hover:text-gray-900"
                  }`}
                  onClick={() => setCalendarProvider(provider)}
                >
                  {provider === "google" && <FcGoogle className="mr-1.5" />}
                  {provider === "apple" && <FaApple className="mr-1.5" />}
                  {provider}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-end gap-3 pt-2">
          <Button
            variant="outline"
            className="border-gray-200 text-gray-600 rounded-lg px-8 h-11 text-base font-medium shadow-none w-full md:w-auto"
            onClick={onClose}
          >
            Cancel
          </Button>
          <Button
            className="bg-[#F86432] hover:bg-[#F86432]/90 text-white rounded-lg px-8 h-11 text-base font-medium shadow-none w-full md:w-auto"
            onClick={handleSave}
            disabled={!time || createReminder.isPending}
          >
            {createReminder.isPending && (
              <Loader2 className="mr-2 size-4 animate-spin" />
            )}
            Save Reminder
          </Button>
        </div>
      </div>
    </AppSimpleModal>
  );
};
