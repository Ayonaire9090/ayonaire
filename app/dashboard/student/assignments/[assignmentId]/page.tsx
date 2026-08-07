"use client";

import { useMemo, useRef, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { SidebarInset } from "@/components/ui/sidebar";
import { ChevronRight, FileText, X, CheckCircle2 } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  useGetAssignmentById,
  useGetAssignmentSubmissions,
  useSubmitAssignmentMutation,
} from "@/hooks/api/use-assignments";
import { useAuthStore } from "@/store/auth.store";
import { toast } from "sonner";

export default function StudentAssignmentDetailPage() {
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const router = useRouter();
  const user = useAuthStore((s) => s.user);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const { data: assignmentRes, isLoading: isLoadingAssignment } = useGetAssignmentById(assignmentId);
  const { data: submissionsRes, isLoading: isLoadingSubmissions } = useGetAssignmentSubmissions(assignmentId);
  const submitAssignment = useSubmitAssignmentMutation();

  const [text, setText] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const assignment = assignmentRes?.data;

  const mySubmission = useMemo(() => {
    const submissions = submissionsRes?.data ?? [];
    return submissions.find((s) => s.student?._id === user?._id) ?? null;
  }, [submissionsRes, user]);

  const handleSubmit = () => {
    if (!text.trim() && !file) {
      toast.error("Add some text or attach a file before submitting.");
      return;
    }
    submitAssignment.mutate(
      { assignmentId, payload: { text: text.trim() || undefined, file: file ?? undefined } },
      {
        onSuccess: () => {
          toast.success("Assignment submitted successfully");
          setText("");
          setFile(null);
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to submit assignment");
        },
      }
    );
  };

  const isLoading = isLoadingAssignment || isLoadingSubmissions;

  if (isLoading) {
    return (
      <>
        <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6]">
          <div className="flex flex-1 items-center justify-center p-10 text-gray-500">
            Loading assignment...
          </div>
        </SidebarInset>
      </>
    );
  }

  if (!assignment) {
    return (
      <>
        <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6]">
          <div className="flex flex-1 items-center justify-center p-10 text-gray-500">
            Assignment not found.
          </div>
        </SidebarInset>
      </>
    );
  }

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <div className="px-4">
          <DashboardHeader
            title={assignment.title}
            subTitle={
              <div className="flex items-center gap-2 flex-wrap">
                <span className="flex items-center gap-1 text-gray-500">
                  Dashboard <ChevronRight className="size-3" />
                </span>
                <span className="flex items-center gap-1 text-gray-500">
                  Assessments <ChevronRight className="size-3" />
                </span>
                <span className="text-gray-500">{assignment.title}</span>
              </div>
            }
          />
        </div>

        <div className="flex flex-1 flex-col lg:p-6 pb-24 md:pb-6">
          <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto">
            {/* Assignment Info */}
            <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                  <span className="text-[13px] text-gray-500">Course</span>
                  <span className="font-semibold text-gray-900 text-[15px]">
                    {assignment.course?.title ?? "—"}
                  </span>
                </div>
                <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                  <span className="text-[13px] text-gray-500">Points</span>
                  <span className="font-semibold text-gray-900 text-[15px]">
                    {assignment.totalPoints ?? "—"}
                  </span>
                </div>
                <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                  <span className="text-[13px] text-gray-500">Due Date</span>
                  <span className="font-semibold text-gray-900 text-[15px]">
                    {assignment.dueDate ? new Date(assignment.dueDate).toLocaleDateString() : "—"}
                  </span>
                </div>
                <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                  <span className="text-[13px] text-gray-500">Type</span>
                  <span className="font-semibold text-gray-900 text-[15px] capitalize">
                    {assignment.assignmentType || "—"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-gray-900 text-[16px]">Description</h3>
                <p className="text-gray-600 text-[14px] leading-relaxed whitespace-pre-wrap">
                  {assignment.description}
                </p>
              </div>
            </div>

            {/* Submission Area */}
            {mySubmission ? (
              <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                  <h3 className="font-semibold text-gray-900 text-[16px]">
                    Submitted
                  </h3>
                </div>
                {mySubmission.text && (
                  <p className="text-gray-600 text-[14px] whitespace-pre-wrap">{mySubmission.text}</p>
                )}
                {mySubmission.file && (
                  <a
                    href={mySubmission.file.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#F97316] text-[14px] font-medium hover:underline w-fit"
                  >
                    <FileText className="w-4 h-4" /> {mySubmission.file.name || "View attachment"}
                  </a>
                )}
                <div className="flex items-center gap-6 pt-4 border-t border-gray-100">
                  <div className="flex flex-col">
                    <span className="text-[13px] text-gray-500">Status</span>
                    <span className="font-medium text-gray-900 text-[14px] capitalize">{mySubmission.status}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[13px] text-gray-500">Grade</span>
                    <span className="font-medium text-gray-900 text-[14px]">
                      {typeof mySubmission.grade === "number"
                        ? `${mySubmission.grade} / ${assignment.totalPoints ?? "-"}`
                        : "Pending evaluation"}
                    </span>
                  </div>
                </div>
                {mySubmission.feedback && (
                  <div className="flex flex-col gap-1 bg-[#F6F6F6] p-4 rounded-xl">
                    <span className="text-[13px] text-gray-500">Instructor Feedback</span>
                    <span className="text-gray-900 text-[14px]">{mySubmission.feedback}</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="bg-white p-6 md:p-8 rounded-[20px] border border-gray-100 flex flex-col gap-4">
                <h3 className="font-semibold text-gray-900 text-[16px]">Your Submission</h3>
                <Textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Write your answer here..."
                  className="min-h-[160px] resize-none"
                />

                <div>
                  {file ? (
                    <div className="flex items-center gap-2 bg-[#F6F6F6] rounded-full px-4 py-2 w-fit">
                      <FileText className="w-4 h-4 text-gray-600" />
                      <span className="text-[13px] text-gray-700 truncate max-w-[200px]">{file.name}</span>
                      <button onClick={() => setFile(null)} className="text-gray-500 hover:text-gray-700">
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      className="text-[14px]"
                    >
                      Attach File
                    </Button>
                  )}
                  <input
                    ref={fileInputRef}
                    type="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] ?? null)}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    disabled={submitAssignment.isPending}
                    className="px-8 py-3 bg-[#F97316] text-white rounded-[10px] font-medium text-[14px] hover:bg-[#EA580C] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitAssignment.isPending ? "Submitting..." : "Submit Assignment"}
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={() => router.push("/dashboard/student/quiz")}
              className="text-gray-600 hover:text-gray-900 text-[14px] font-medium self-start"
            >
              ← Back to Assessments
            </button>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
