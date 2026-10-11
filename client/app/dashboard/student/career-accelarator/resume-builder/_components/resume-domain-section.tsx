"use client";

import { useState } from "react";
import { ArrowDown, ArrowUp, Plus, Trash2, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export interface DomainEntry {
  id: string;
  value: string;
  collapsed: boolean;
}

const newEntry = (value = ""): DomainEntry => ({
  id: typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
  value,
  collapsed: false,
});

export function ResumeDomainSection({
  entries,
  onChange,
  instruction,
  onInstructionChange,
}: {
  entries: DomainEntry[];
  onChange: (entries: DomainEntry[]) => void;
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

  const updateValue = (id: string, value: string) =>
    onChange(entries.map((e) => (e.id === id ? { ...e, value } : e)));

  const addFromDraft = () => {
    onChange([...entries, newEntry(draft.trim())]);
    setDraft("");
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-900">Domain/functional areas</h2>

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
              placeholder="add domain/functional areas"
              className="pl-11"
            />
          </div>
          <button
            onClick={addFromDraft}
            className="self-start text-sm text-gray-400 hover:text-gray-600 transition-colors"
          >
            add domain/functional areas
          </button>
        </>
      ) : (
        <div className="relative">
          <Plus className="absolute left-4 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
          <Input
            value={instruction}
            onChange={(e) => onInstructionChange(e.target.value)}
            placeholder="Add specification / instruction for AI"
            className="pl-11"
          />
        </div>
      )}

      {entries.map((entry, index) => (
        <div key={entry.id} className="rounded-2xl border border-gray-100 overflow-hidden">
          <div className="flex items-center justify-between bg-[#FDEEEC] px-4 py-3">
            <p className="font-semibold text-gray-900">
              Domain/functional areas {index + 1}
            </p>
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
            <div className="flex items-start gap-3 p-4">
              <div className="flex-1">
                <label className="text-sm font-medium text-gray-900">Domain</label>
                <Textarea
                  value={entry.value}
                  onChange={(e) => updateValue(entry.id, e.target.value)}
                  placeholder="SaaS Products, Mobile & Web Applications, EdTech Platforms, Real Estate Systems, Health & Wellness Apps"
                  className="mt-1.5"
                />
              </div>
              <div className="flex flex-col gap-1 bg-gray-100 rounded-lg p-1 shrink-0">
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
                <button
                  onClick={() => remove(entry.id)}
                  aria-label="Delete"
                  className="size-7 flex items-center justify-center rounded hover:bg-white text-red-500"
                >
                  <Trash2 className="size-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {entries.length > 0 && (
        <button
          onClick={() => onChange([...entries, newEntry()])}
          className="self-start inline-flex items-center gap-2 text-sm font-medium text-[#F86432] hover:underline"
        >
          <Plus className="size-4" />
          Add domain
        </button>
      )}
    </div>
  );
}

export { newEntry as newDomainEntry };
