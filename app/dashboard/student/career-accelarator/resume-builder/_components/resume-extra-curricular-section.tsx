"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ArrowDown, ArrowUp, Plus, Sparkles, Trash2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export interface ExtraCurricularEntry {
  id: string;
  role: string;
  organization: string;
  startDate: string;
  endDate: string;
  verificationLink: string;
  description: string;
  collapsed: boolean;
}

const newEntry = (): ExtraCurricularEntry => ({
  id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
  role: "",
  organization: "",
  startDate: "",
  endDate: "",
  verificationLink: "",
  description: "",
  collapsed: false,
});

type TextField = Exclude<keyof ExtraCurricularEntry, "id" | "collapsed" | "description">;

const fields: { name: TextField; label: string; placeholder: string }[] = [
  { name: "role", label: "Position/Role", placeholder: "Volunteer Coordinator" },
  { name: "organization", label: "Organization", placeholder: "Red Cross Society" },
  { name: "startDate", label: "Start Date", placeholder: "January 2022" },
  { name: "endDate", label: "End Date", placeholder: "Present" },
];

export function ResumeExtraCurricularSection({
  entries,
  onChange,
  instruction,
  onInstructionChange,
}: {
  entries: ExtraCurricularEntry[];
  onChange: (entries: ExtraCurricularEntry[]) => void;
  instruction: string;
  onInstructionChange: (value: string) => void;
}) {
  const [draft, setDraft] = useState("");

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

  const updateField = (id: string, name: keyof ExtraCurricularEntry, value: string) =>
    onChange(entries.map((e) => (e.id === id ? { ...e, [name]: value } : e)));

  const addFromDraft = () => {
    const entry = newEntry();
    entry.role = draft.trim();
    onChange([...entries, entry]);
    setDraft("");
  };

  const handleEnhance = () => {
    // No backend endpoint yet accepts a structured activity entry for AI
    // enhancement — the existing career endpoints only generate free text.
    toast.error("AI enhancement for Extra-Curricular Activities isn't available yet — no backend endpoint accepts structured activity data.");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-900">Extra-Curricular Activities</h2>

      {entries.length === 0 ? (
        <>
          <div className="relative">
            <Plus className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input
              value={draft}
              onChange={(e) => setDraft(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  addFromDraft();
                }
              }}
              placeholder="Extra-Curricular Activities"
              className="pl-11"
            />
          </div>
          <p className="text-sm text-gray-400">
            No Extra-Curricular Activities added yet. Click the button above to add one.
          </p>
        </>
      ) : (
        <div className="flex items-center gap-2">
          <button
            onClick={() => onChange([...entries, newEntry()])}
            aria-label="Add activity"
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
      )}

      {entries.map((entry, index) => (
        <div key={entry.id} className="rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between bg-[#FDEEEC] px-4 py-3">
            <p className="font-semibold text-gray-900">Activity {index + 1}</p>
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
                <label className="text-sm font-medium text-gray-900">
                  Verification Link <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <Input
                  value={entry.verificationLink}
                  onChange={(e) => updateField(entry.id, "verificationLink", e.target.value)}
                  placeholder="https://www.linkedin.com/in/johndoe"
                  className="mt-1.5"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-900">Description</label>
                <Textarea
                  value={entry.description}
                  onChange={(e) => updateField(entry.id, "description", e.target.value)}
                  placeholder="Describe your role and impact in this activity"
                  className="mt-1.5"
                />
              </div>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Input placeholder="Add specification / instruction for AI" className="flex-1" />
                <Button onClick={handleEnhance} className="bg-[#F86432] hover:bg-[#F86432]/90 text-white gap-2 shrink-0">
                  <Sparkles className="size-4" />
                  Enhance
                </Button>
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
    </div>
  );
}

export { newEntry as newExtraCurricularEntry };
