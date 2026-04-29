import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

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

export const mockGradingData: GradingData[] = [
  {
    id: "1",
    student: { name: "Sarah Ahmed" },
    course: "Algebra",
    assignment: "Homework 1",
    submission: "PDF",
    score: 90,
    grade: "A",
    feedback: "Well done, excellent.",
    status: "Final",
  },
  {
    id: "2",
    student: { name: "Ali Hassan" },
    course: "Algebra",
    assignment: "Homework 1",
    submission: "-",
    score: "-",
    grade: "-",
    feedback: "-",
    status: "Draft",
  },
  {
    id: "3",
    student: { name: "Fatima Khan" },
    course: "Algebra",
    assignment: "Homework 1",
    submission: "PDF",
    score: 75,
    grade: "B",
    feedback: "Submit on time next time.",
    status: "Final",
  },
  {
    id: "4",
    student: { name: "Omar Siddiqui" },
    course: "Algebra",
    assignment: "Homework 1",
    submission: "PDF",
    score: 80,
    grade: "B",
    feedback: "Good",
    status: "Final",
  },
  {
    id: "5",
    student: { name: "Sarah Ahmed" },
    course: "Algebra",
    assignment: "Homework 1",
    submission: "PDF",
    score: 60,
    grade: "C",
    feedback: "Submit on time next time.",
    status: "Final",
  },
];

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
  return (
    <Button variant="ghost" size="icon" className="size-6 text-gray-500 hover:text-black">
      <MoreHorizontal className="size-4" />
    </Button>
  );
};
