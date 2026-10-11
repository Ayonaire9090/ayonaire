"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentHomeSidebarContent } from "../_components/student-home-sidebar-content";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import { useCreateSupportTicketMutation } from "@/hooks/api/use-support";

const CATEGORY_OPTIONS = [
  { label: "Technical Issue", value: "technical" },
  { label: "Billing & Payments", value: "billing" },
  { label: "Course Content", value: "course-content" },
  { label: "Account", value: "account" },
  { label: "Other", value: "other" },
];

const PRIORITY_OPTIONS = [
  { label: "Low", value: "low" },
  { label: "Medium", value: "medium" },
  { label: "High", value: "high" },
];

export default function StudentSupportPage() {
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("technical");
  const [priority, setPriority] = useState("medium");
  const [submitted, setSubmitted] = useState(false);

  const createTicket = useCreateSupportTicketMutation();

  const handleSubmit = () => {
    if (!subject.trim() || !message.trim()) {
      toast.error("Please fill in a subject and message.");
      return;
    }
    createTicket.mutate(
      { subject: subject.trim(), message: message.trim(), category, priority },
      {
        onSuccess: () => {
          toast.success("Support ticket submitted");
          setSubject("");
          setMessage("");
          setCategory("technical");
          setPriority("medium");
          setSubmitted(true);
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to submit ticket");
        },
      },
    );
  };

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <div className="px-4">
          <DashboardHeader
            title="Contact Support"
            subTitle="Open a ticket and our team will get back to you."
          />
        </div>

        <div className="flex flex-1 flex-col p-4 lg:p-6 pb-24 md:pb-6">
          <div className="w-full max-w-2xl mx-auto bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-5">
            {submitted && (
              <div className="flex items-center gap-3 bg-[#E9F7EF] text-[#10B981] px-4 py-3 rounded-xl text-[14px] font-medium">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                Your ticket has been submitted. We&apos;ll respond by email soon.
              </div>
            )}

            <AppInput
              label="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Briefly describe your issue"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-gray-700">Category</label>
                <AppSelect
                  value={category}
                  onChange={setCategory}
                  options={CATEGORY_OPTIONS}
                  className="h-12! bg-white border-gray-200"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-medium text-gray-700">Priority</label>
                <AppSelect
                  value={priority}
                  onChange={setPriority}
                  options={PRIORITY_OPTIONS}
                  className="h-12! bg-white border-gray-200"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-[14px] font-medium text-gray-700">Message</label>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Describe your issue in detail..."
                className="min-h-[160px] resize-none"
              />
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleSubmit}
                disabled={createTicket.isPending}
                className="h-11 px-8 bg-[#F97316] hover:bg-[#EA580C] text-white rounded-lg shadow-none disabled:opacity-60"
              >
                {createTicket.isPending ? "Submitting..." : "Submit Ticket"}
              </Button>
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
