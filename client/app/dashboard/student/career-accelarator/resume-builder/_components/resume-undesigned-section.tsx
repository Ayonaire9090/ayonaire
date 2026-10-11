"use client";

import { toast } from "sonner";
import { Plus } from "lucide-react";
import { Input } from "@/components/ui/input";

export function ResumeUndesignedSection({
  title,
  instruction,
  onInstructionChange,
}: {
  title: string;
  instruction: string;
  onInstructionChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>

      <div className="flex items-center gap-2">
        <button
          onClick={() => toast.error(`The ${title} form isn't designed yet.`)}
          aria-label={`Add ${title}`}
          className="shrink-0 flex items-center justify-center size-10 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50"
        >
          <Plus className="size-4" />
        </button>
        <Input
          value={instruction}
          onChange={(e) => onInstructionChange(e.target.value)}
          placeholder="Add specification / instruction for AI"
          className="flex-1"
        />
      </div>

      <p className="text-sm text-gray-400">
        No {title} added yet. Click the button above to add one.
      </p>
    </div>
  );
}
