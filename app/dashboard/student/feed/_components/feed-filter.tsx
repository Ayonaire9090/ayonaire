"use client";

import { useState } from "react";
import { ListFilter, X, Check } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { FEED_TAG_OPTIONS } from "./feed-tags";

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
        <button type="button" aria-label={selectedTag ? "Filter posts, filter active" : "Filter posts"} className="relative grid size-9 place-items-center rounded-full border border-border bg-card text-muted-foreground transition hover:bg-muted hover:text-foreground"><ListFilter className="size-4" />{selectedTag && <span className="absolute right-1 top-1 size-1.5 rounded-full bg-primary" />}</button>
      </SheetTrigger>

      <SheetContent
        side="right"
        hideCloseButton
        className="w-[85%] rounded-tl-3xl rounded-bl-3xl sm:max-w-md p-0 flex flex-col bg-white"
      >
        <SheetTitle className="sr-only">Filter posts by topic</SheetTitle>
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
              {FEED_TAG_OPTIONS.map(({ value, label, icon: Icon }) => {
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
              onClick={() => { setPendingTag(undefined); onApply(undefined); }}
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
