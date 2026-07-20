"use client";

import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { SubmissionRecord, mapSubmissionRecord } from "./assignments-submissions-data";
import { MoreVertical, FileText } from "lucide-react";
import { useGetAllSubmissions } from "@/hooks/api/use-assignments";

// Status Badge Generator
const StatusBadge = ({ status }: { status: string }) => {
  const getStyles = () => {
    switch (status) {
      case "Graded":
      case "Submitted":
        return "bg-[#E6F6EC] text-[#24A164]";
      case "Pending":
      case "Late":
        return "bg-[#FFF4E5] text-[#FF9E2A]";
      case "Critical":
        return "bg-[#FEECEB] text-[#F34141]";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-[13px] font-medium ${getStyles()}`}
    >
      {status}
    </span>
  );
};

const columns: ColumnDef<SubmissionRecord>[] = [
  {
    key: "studentName",
    header: "Student Name",
    cell: (item) => (
      <span className="font-medium text-gray-900">{item.studentName}</span>
    ),
  },
  {
    key: "studentId",
    header: "Student ID",
    cell: (item) => (
      <span className="text-gray-500">{item.studentId}</span>
    ),
  },
  {
    key: "cohort",
    header: "Class",
    cell: (item) => (
      <span className="text-gray-600">{item.cohort}</span>
    ),
  },
  {
    key: "submissionStatus",
    header: "Submission Status",
    cell: (item) => <StatusBadge status={item.submissionStatus} />,
  },
  {
    key: "submittedOn",
    header: "Submitted On",
    cell: (item) => (
      <span className="text-gray-600 whitespace-nowrap">{item.submittedOn}</span>
    ),
  },
  {
    key: "fileLink",
    header: "File/Link",
    cell: () => (
      <button className="text-[#24A164] hover:bg-[#E6F6EC] p-1.5 rounded-md transition-colors border border-transparent hover:border-[#24A164]/20">
        <FileText className="size-5" />
      </button>
    ),
  },
  {
    key: "gradeStatus",
    header: "Grade Status",
    cell: (item) => <StatusBadge status={item.gradeStatus} />,
  },
  {
    key: "score",
    header: "Score",
    cell: (item) => (
      <span className="font-semibold text-gray-900">{item.score}</span>
    ),
  },
  {
    key: "actions",
    header: "Actions",
    cell: () => (
      <button className="text-gray-400 hover:text-gray-600 transition-colors">
        <MoreVertical className="size-5" />
      </button>
    ),
  },
];

export const AssignmentsSubmissionsTable = () => {
  const { data } = useGetAllSubmissions();
  const submissions = (data?.submissions ?? []).map(mapSubmissionRecord);

  return (
    <div className="w-full">
      <DataTable
        columns={columns}
        data={submissions}
        keyExtractor={(item) => item.id}
      />
    </div>
  );
};
