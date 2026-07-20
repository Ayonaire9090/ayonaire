import { Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export function ResumeSummarySection({
  targetRole,
  onTargetRoleChange,
  summary,
  onSummaryChange,
  instruction,
  onInstructionChange,
  onEnhance,
  isEnhancing,
}: {
  targetRole: string;
  onTargetRoleChange: (value: string) => void;
  summary: string;
  onSummaryChange: (value: string) => void;
  instruction: string;
  onInstructionChange: (value: string) => void;
  onEnhance: () => void;
  isEnhancing: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-900">Summary</h2>

      <div className="flex items-center gap-3 bg-[#FDEEEC] rounded-xl p-3">
        <div className="flex items-center justify-center size-8 rounded-lg bg-white text-[#F86432] shrink-0">
          <Sparkles className="size-4" />
        </div>
        <p className="text-sm text-gray-700">
          Add experience, education, or projects for more accurate AI suggestions
        </p>
      </div>

      <div>
        <Label htmlFor="targetRole">
          Target Role <span className="text-red-500 ml-0.5">*</span>
          <span className="text-gray-400 font-normal ml-1">(used to tailor your summary)</span>
        </Label>
        <Input
          id="targetRole"
          value={targetRole}
          onChange={(e) => onTargetRoleChange(e.target.value)}
          placeholder="e.g. AI Engineer"
          className="mt-1.5"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-900">Professional Summary</label>
        <Textarea
          value={summary}
          onChange={(e) => onSummaryChange(e.target.value)}
          placeholder="Brief summary for your skill..."
          className="mt-1.5 min-h-[140px]"
        />
      </div>

      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
        <div className="relative flex-1">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">+</span>
          <Input
            value={instruction}
            onChange={(e) => onInstructionChange(e.target.value)}
            placeholder="Add specification / instruction for AI"
            className="pl-9"
          />
        </div>
        <Button
          onClick={onEnhance}
          disabled={isEnhancing}
          className="bg-[#F86432] hover:bg-[#F86432]/90 text-white gap-2 shrink-0"
        >
          <Sparkles className="size-4" />
          {isEnhancing ? "Enhancing..." : "Enhance"}
        </Button>
      </div>
    </div>
  );
}
