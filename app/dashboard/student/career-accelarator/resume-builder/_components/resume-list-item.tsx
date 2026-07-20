import { FileText, Pencil, Trash2 } from "lucide-react";

export interface ResumeItem {
  id: string;
  title: string;
  template: string;
  lastModified: string;
  status: "Draft" | "Complete";
  content?: string;
}

export function ResumeListItem({
  resume,
  onEdit,
  onDelete,
}: {
  resume: ResumeItem;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  return (
    <div className="flex items-center gap-3 bg-[#F1F2F4] rounded-xl p-4">
      <div className="flex items-center justify-center size-10 rounded-xl bg-[#F86432]/10 text-[#F86432] shrink-0">
        <FileText className="size-5" />
      </div>
      <div className="flex-1 min-w-0">
        <button
          onClick={() => onEdit(resume.id)}
          className="flex items-center gap-1.5 font-semibold text-gray-900 hover:text-[#F86432] transition-colors"
        >
          {resume.title}
          <Pencil className="size-3.5 text-[#24A164]" />
        </button>
        <p className="text-sm text-gray-500 mt-0.5 truncate">
          {resume.template} &bull; Last modified {resume.lastModified}
        </p>
      </div>
      <span className="hidden sm:inline-flex items-center rounded-full bg-[#FFF1D6] text-[#B5710A] text-xs font-medium px-3 py-1 shrink-0">
        {resume.status}
      </span>
      <button
        onClick={() => onEdit(resume.id)}
        aria-label="Edit resume"
        className="flex items-center justify-center size-9 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 shrink-0"
      >
        <Pencil className="size-4" />
      </button>
      <button
        onClick={() => onDelete(resume.id)}
        aria-label="Delete resume"
        className="flex items-center justify-center size-9 rounded-lg bg-red-50 text-red-500 hover:bg-red-100 shrink-0"
      >
        <Trash2 className="size-4" />
      </button>
    </div>
  );
}
