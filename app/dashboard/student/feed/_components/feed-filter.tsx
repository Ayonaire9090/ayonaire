"use client";

import { useState } from "react";
import { ListFilter, X, Shield, Sparkles, Database, Check } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";

const TAG_OPTIONS = [
  { value: "cyberSecurity", label: "Cyber Security", icon: Shield },
  { value: "ai-engineering", label: "AI Engineering", icon: Sparkles },
  { value: "data_science", label: "Data Science", icon: Database },
];

interface FeedFilterProps {
  selectedTag?: string;
  onApply: (tag?: string) => void;
}

export const FeedFilter = ({ selectedTag, onApply }: FeedFilterProps) => {
  const [pendingTag, setPendingTag] = useState<string | undefined>(selectedTag);

  return (
    <Sheet
      onOpenChange={(open) => {
        if (open) setPendingTag(selectedTag);
      }}
    >
      <SheetTrigger asChild>
        <div className="flex justify-between items-center p-2 lg:p-0">
          <h2 className="font-semibold text-gray-900 text-lg">Feed</h2>
          <div className="relative bg-white rounded-full p-2 cursor-pointer transition-colors hover:bg-gray-50">
            <ListFilter className="w-4 h-4 lg:w-5 lg:h-5 text-gray-900" />
            {selectedTag && (
              <span className="absolute top-0 right-0 w-2 h-2 rounded-full bg-[#F86432]" />
            )}
          </div>
        </div>
      </SheetTrigger>

      <SheetContent
        side="right"
        hideCloseButton
        className="w-[85%] rounded-tl-3xl rounded-bl-3xl sm:max-w-md p-0 flex flex-col bg-white"
      >
        {/* Custom Header */}
        <div className="flex items-center gap-4 p-6 pb-2 border-b border-transparent">
          <SheetClose className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
            <X className="w-4 h-4 text-gray-900" />
          </SheetClose>
          <h2 className="text-xl font-semibold text-gray-950">
            Filter posts by
          </h2>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
          {/* Tags */}
          <div className="flex flex-col gap-3 pt-2">
            <label className="text-base font-medium text-gray-900">Tags</label>
            <div className="flex flex-col gap-3">
              {TAG_OPTIONS.map(({ value, label, icon: Icon }) => {
                const isSelected = pendingTag === value;
                return (
                  <button
                    key={value}
                    type="button"
                    onClick={() =>
                      setPendingTag(isSelected ? undefined : value)
                    }
                    className={`flex items-center justify-between gap-3 w-full p-4 rounded-xl border transition-all text-left ${
                      isSelected
                        ? "border-[#F86432] bg-orange-50/50"
                        : "border-gray-100 hover:border-orange-200 hover:bg-orange-50/50"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon
                        className={`w-5 h-5 ${isSelected ? "text-[#F86432]" : "text-gray-500"}`}
                      />
                      <span
                        className={`font-medium ${isSelected ? "text-gray-900" : "text-gray-600"}`}
                      >
                        {label}
                      </span>
                    </span>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[#F86432]" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 pt-4 mt-auto flex gap-3">
          <SheetClose asChild>
            <button
              onClick={() => setPendingTag(undefined)}
              className="flex-1 py-3.5 px-4 rounded-xl bg-[#F3F4F6] hover:bg-gray-200 text-gray-600 font-medium transition-colors"
            >
              Reset
            </button>
          </SheetClose>
          <SheetClose asChild>
            <button
              onClick={() => onApply(pendingTag)}
              className="flex-1 py-3.5 px-4 rounded-xl bg-[#F86432] hover:bg-[#e05626] text-white font-medium transition-colors"
            >
              Apply Filter
            </button>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};
