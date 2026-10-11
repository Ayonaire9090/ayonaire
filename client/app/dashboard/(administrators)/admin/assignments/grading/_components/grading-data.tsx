"use client";

import { useState } from "react";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2 } from "lucide-react";
import { AllSubmissionRecord } from "@/lib/api/endpoints/assignments";
import { useGradeSubmissionMutation } from "@/hooks/api/use-assignments";

export type GradingStatus = "Draft" | "Final";

export interface GradingData {
  id: string;
  student: {
    name: string;
  };
  course: string;
  assignment: string;
  submission: string;
  score: number | string;
  grade: string;
  feedback: string;
  status: GradingStatus;
}

function scoreToLetter(score?: number): string {
  if (score === undefined) return "-";
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

export function mapSubmissionToGradingData(record: AllSubmissionRecord): GradingData {
  return {
    id: record._id,
    student: { name: record.student?.name ?? "Unknown" },
    course: record.course?.title ?? "-",
    assignment: record.assignment?.title ?? "-",
    submission: record.file ? "File" : record.text ? "Text" : "-",
    score: record.grade ?? "-",
    grade: scoreToLetter(record.grade),
    feedback: record.feedback ?? "-",
    status: record.status === "graded" ? "Final" : "Draft",
  };
}

export const GradingStatusBadge = ({ status }: { status: GradingStatus }) => {
  if (status === "Final") {
    return (
      <span className="inline-flex items-center justify-center rounded-full bg-[#E6F6EC] px-3 py-0.5 text-[12px] font-medium text-[#24A164]">
        Final
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center rounded-full bg-[#E8F1FF] px-3 py-0.5 text-[12px] font-medium text-[#1E73E8]">
      Draft
    </span>
  );
};

export const GradingActions = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");
  const gradeSubmission = useGradeSubmissionMutation();

  const handleSubmit = () => {
    const gradeNum = Number(grade);
    if (!grade || Number.isNaN(gradeNum)) {
      toast.error("Enter a numeric grade");
      return;
    }
    gradeSubmission.mutate(
      { submissionId: id, payload: { grade: gradeNum, feedback: feedback || undefined } },
      {
        onSuccess: () => {
          toast.success("Submission graded");
          setOpen(false);
        },
        onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to grade submission"),
      },
    );
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" size="sm" className="h-8 text-[13px] gap-1.5">
          <CheckCircle2 className="size-3.5" />
          Grade
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 flex flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700">Grade (0-100)</label>
          <Input
            type="number"
            min={0}
            max={100}
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            placeholder="e.g. 85"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-gray-700">Feedback</label>
          <textarea
            className="w-full min-h-[80px] p-2.5 text-[14px] rounded-lg border border-gray-200 outline-none resize-none"
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Optional feedback for the student"
          />
        </div>
        <Button
          onClick={handleSubmit}
          disabled={gradeSubmission.isPending}
          className="h-9 bg-primary hover:bg-primary/90 text-white"
        >
          {gradeSubmission.isPending && <Loader2 className="size-4 animate-spin mr-2" />}
          Submit Grade
        </Button>
      </PopoverContent>
    </Popover>
  );
};
