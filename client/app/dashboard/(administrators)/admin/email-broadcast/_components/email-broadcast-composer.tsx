"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useGetCohorts } from "@/hooks/api/use-cohorts";
import { useSendEmailBroadcastMutation } from "@/hooks/api/use-notifications";

const RECIPIENT_OPTIONS = [
  { label: "All Users", value: "all" },
  { label: "Students", value: "student" },
  { label: "Instructors", value: "instructor" },
];

export const EmailBroadcastComposer = () => {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [recipientType, setRecipientType] = useState("all");
  const [courseId, setCourseId] = useState("");
  const [cohortId, setCohortId] = useState("");

  const { data: coursesData } = useGetCourses({ limit: 100 });
  const { data: cohortsData } = useGetCohorts(courseId || undefined);
  const sendBroadcast = useSendEmailBroadcastMutation();

  const courseOptions = useMemo(
    () => (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id })),
    [coursesData],
  );
  const cohortOptions = useMemo(
    () => (cohortsData?.cohorts ?? []).map((c) => ({ label: c.name, value: c._id })),
    [cohortsData],
  );

  const handleSend = () => {
    if (!subject.trim() || !message.trim()) {
      toast.error("Add a subject and message before sending.");
      return;
    }

    sendBroadcast.mutate(
      {
        name: subject,
        message,
        recipientType,
        course: courseId || undefined,
        cohort: cohortId || undefined,
      },
      {
        onSuccess: () => {
          toast.success("Email broadcast sent");
          setSubject("");
          setMessage("");
          setRecipientType("all");
          setCourseId("");
          setCohortId("");
        },
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to send broadcast"),
      },
    );
  };

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-gray-900">Compose Broadcast</h2>
        <p className="text-sm text-gray-500 mt-1">
          Send a one-off email to students, instructors, or everyone on the platform.
        </p>
      </div>

      <AppInput
        label="Subject"
        placeholder="e.g. Platform maintenance this weekend"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        className="bg-[#FBFBFB]"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <AppSelect
          label="Recipients"
          options={RECIPIENT_OPTIONS}
          value={recipientType}
          onChange={setRecipientType}
          className="bg-[#FBFBFB]"
        />
        <AppSelect
          label="Course (optional)"
          placeholder="Any course"
          options={courseOptions}
          value={courseId}
          onChange={setCourseId}
          className="bg-[#FBFBFB]"
        />
        <AppSelect
          label="Cohort (optional)"
          placeholder={courseId ? "Select a cohort" : "Select a course first"}
          options={cohortOptions}
          value={cohortId}
          onChange={setCohortId}
          className="bg-[#FBFBFB]"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label className="text-[15px] font-semibold text-gray-900">Message</label>
        <Textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write your email content..."
          className="min-h-[160px] bg-[#FBFBFB] rounded-xl border-transparent"
        />
      </div>

      <div className="flex justify-end">
        <Button
          onClick={handleSend}
          disabled={sendBroadcast.isPending}
          className="h-[46px] px-10 rounded-xl bg-primary hover:bg-[#e04a1f] text-white font-medium"
        >
          {sendBroadcast.isPending ? "Sending..." : "Send Broadcast"}
        </Button>
      </div>
    </div>
  );
};
