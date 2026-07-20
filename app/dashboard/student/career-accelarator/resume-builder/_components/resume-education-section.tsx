"use client";

import { toast } from "sonner";
import { ArrowDown, ArrowUp, Plus, Sparkles, Trash2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export interface EducationEntry {
  id: string;
  institution: string;
  location: string;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  gpa: string;
  additionalDetails: string;
  collapsed: boolean;
}

const newEntry = (): EducationEntry => ({
  id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
  institution: "",
  location: "",
  degree: "",
  fieldOfStudy: "",
  startDate: "",
  endDate: "",
  gpa: "",
  additionalDetails: "",
  collapsed: false,
});

type EducationTextField = Exclude<keyof EducationEntry, "id" | "collapsed">;

const fields: { name: EducationTextField; label: string; placeholder: string }[] = [
  { name: "institution", label: "Institution Name", placeholder: "University of Lagos" },
  { name: "location", label: "Location", placeholder: "City, Country" },
  { name: "degree", label: "Degree", placeholder: "Bachelor of Science" },
  { name: "fieldOfStudy", label: "Field of Study", placeholder: "Computer Science" },
  { name: "startDate", label: "Start Date", placeholder: "2018" },
  { name: "endDate", label: "End Date", placeholder: "2022" },
  { name: "gpa", label: "GPA", placeholder: "3.8" },
];

export function ResumeEducationSection({
  entries,
  onChange,
  instruction,
  onInstructionChange,
}: {
  entries: EducationEntry[];
  onChange: (entries: EducationEntry[]) => void;
  instruction: string;
  onInstructionChange: (value: string) => void;
}) {
  const move = (index: number, direction: -1 | 1) => {
    const target = index + direction;
    if (target < 0 || target >= entries.length) return;
    const next = [...entries];
    [next[index], next[target]] = [next[target], next[index]];
    onChange(next);
  };

  const remove = (id: string) => onChange(entries.filter((e) => e.id !== id));

  const toggleCollapsed = (id: string) =>
    onChange(entries.map((e) => (e.id === id ? { ...e, collapsed: !e.collapsed } : e)));

  const updateField = (id: string, name: keyof EducationEntry, value: string) =>
    onChange(entries.map((e) => (e.id === id ? { ...e, [name]: value } : e)));

  const handleEnhance = () => {
    // No backend endpoint yet accepts structured education entries for AI
    // enhancement — the existing career endpoints only generate free text.
    toast.error("AI enhancement for Education isn't available yet — no backend endpoint accepts structured education data.");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-900">Education</h2>

      <div className="flex items-center gap-2">
        <button
          onClick={() => onChange([...entries, newEntry()])}
          aria-label="Add education"
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

      {entries.length === 0 && (
        <p className="text-sm text-gray-400">
          No Education added yet. Click the button above to add one.
        </p>
      )}

      {entries.map((entry, index) => (
        <div key={entry.id} className="rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between bg-[#FDEEEC] px-4 py-3">
            <p className="font-semibold text-gray-900">Education {index + 1}</p>
            <div className="flex items-center gap-3">
              <button
                onClick={() => toggleCollapsed(entry.id)}
                aria-label="Collapse"
                className="text-gray-500 hover:text-gray-900"
              >
                <X className="size-4" />
              </button>
              <button
                onClick={() => remove(entry.id)}
                aria-label="Delete"
                className="text-gray-500 hover:text-red-500"
              >
                <Trash2 className="size-4" />
              </button>
            </div>
          </div>

          {!entry.collapsed && (
            <div className="p-4 flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {fields.map((field) => (
                  <div key={field.name}>
                    <label className="text-sm font-medium text-gray-900">{field.label}</label>
                    <Input
                      value={entry[field.name]}
                      onChange={(e) => updateField(entry.id, field.name, e.target.value)}
                      placeholder={field.placeholder}
                      className="mt-1.5"
                    />
                  </div>
                ))}
              </div>
              <div>
                <label className="text-sm font-medium text-gray-900">Additional Details</label>
                <Input
                  value={entry.additionalDetails}
                  onChange={(e) => updateField(entry.id, "additionalDetails", e.target.value)}
                  placeholder="Relevant coursework or achievements"
                  className="mt-1.5"
                />
              </div>

              <div className="flex items-center gap-1 self-end bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => move(index, -1)}
                  disabled={index === 0}
                  aria-label="Move up"
                  className="size-7 flex items-center justify-center rounded hover:bg-white text-gray-600 disabled:opacity-30"
                >
                  <ArrowUp className="size-4" />
                </button>
                <button
                  onClick={() => move(index, 1)}
                  disabled={index === entries.length - 1}
                  aria-label="Move down"
                  className="size-7 flex items-center justify-center rounded hover:bg-white text-gray-600 disabled:opacity-30"
                >
                  <ArrowDown className="size-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      <Button
        onClick={handleEnhance}
        className="bg-[#F86432] hover:bg-[#F86432]/90 text-white gap-2 self-start"
      >
        <Sparkles className="size-4" />
        Enhance
      </Button>
    </div>
  );
}

export { newEntry as newEducationEntry };
