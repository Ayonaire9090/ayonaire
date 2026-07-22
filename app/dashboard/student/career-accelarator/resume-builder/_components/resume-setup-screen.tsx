"use client";

import { useState } from "react";
import { BarChart3, LayoutGrid, Search, Target } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Template, templates } from "./resume-templates-data";

const roleOptions = ["Data Analyst", "Business Analyst", "AI Engineer", "Frontend Developer"];

const focusOptions: { id: ResumeFocus; title: string; description: string }[] = [
  {
    id: "fresher",
    title: "Fresher Focused",
    description: "Highlight your academic projects, certifications, and technical skills.",
  },
  {
    id: "experience",
    title: "Experience Focused",
    description: "Focus on your career milestones and detailed work history.",
  },
  {
    id: "balanced",
    title: "Balanced",
    description: "Equal weight to skills and experience for mid-level professionals.",
  },
];

export type ResumeFocus = "fresher" | "experience" | "balanced";

export function ResumeSetupScreen({
  targetRole,
  onTargetRoleChange,
  focus,
  onFocusChange,
  template,
  onTemplateChange,
  onContinue,
}: {
  targetRole: string;
  onTargetRoleChange: (value: string) => void;
  focus: ResumeFocus;
  onFocusChange: (value: ResumeFocus) => void;
  template: Template;
  onTemplateChange: (value: Template) => void;
  onContinue: () => void;
}) {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-white lg:rounded-3xl rounded-2xl p-4 lg:p-8 flex flex-col gap-10">
      <div>
        <div className="flex items-center gap-2 mb-4">
          <Target className="size-5 text-[#F86432]" />
          <h2 className="text-lg font-semibold text-gray-900">Target Role Selection</h2>
        </div>
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-400" />
          <Input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              onTargetRoleChange(e.target.value);
            }}
            placeholder="Select or search job role"
            className="pl-11 h-12"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {roleOptions.map((role) => (
            <button
              key={role}
              onClick={() => {
                setSearch(role);
                onTargetRoleChange(role);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium border transition-colors",
                targetRole === role
                  ? "bg-[#F86432]/10 border-[#F86432] text-[#F86432]"
                  : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50",
              )}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <BarChart3 className="size-5 text-[#F86432]" />
          <h2 className="text-lg font-semibold text-gray-900">Resume Focus</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {focusOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => onFocusChange(option.id)}
              className={cn(
                "text-left rounded-2xl border p-5 transition-colors",
                focus === option.id
                  ? "bg-[#FDEEEC] border-[#F86432]"
                  : "bg-white border-gray-200 hover:bg-gray-50",
              )}
            >
              <p className="font-semibold text-gray-900">{option.title}</p>
              <p className="text-sm text-gray-500 mt-1">{option.description}</p>
            </button>
          ))}
        </div>
      </div>

      <div>
        <div className="flex items-center gap-2 mb-4">
          <LayoutGrid className="size-5 text-[#F86432]" />
          <h2 className="text-lg font-semibold text-gray-900">Template Selection</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {templates.map((t) => (
            <button
              key={t.id}
              onClick={() => onTemplateChange(t.id)}
              className={cn(
                "text-left rounded-2xl overflow-hidden border transition-colors",
                template === t.id ? "border-[#F86432]" : "border-gray-200 hover:border-gray-300",
              )}
            >
              <div
                className={cn(
                  "h-40 flex items-center justify-center relative",
                  t.previewClassName,
                )}
              >
                <span
                  className={cn(
                    "absolute top-3 right-3 size-4 rounded-full border-2",
                    template === t.id
                      ? "bg-[#F86432] border-[#F86432]"
                      : "bg-white border-gray-300",
                  )}
                />
                <span className="text-sm font-medium text-white/90">{t.label}</span>
              </div>
              <p className="text-sm font-medium text-gray-700 text-center py-2">{t.label}</p>
            </button>
          ))}
        </div>
      </div>

      <Button
        onClick={onContinue}
        className="self-start bg-[#F86432] hover:bg-[#F86432]/90 text-white px-8"
      >
        Continue
      </Button>
    </div>
  );
}
