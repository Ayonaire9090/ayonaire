"use client";

import { Smile } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const EMOJIS = [
  "\u{1F600}", "\u{1F602}", "\u{1F605}", "\u{1F60A}", "\u{1F60D}", "\u{1F618}", "\u{1F60E}", "\u{1F914}",
  "\u{1F622}", "\u{1F62D}", "\u{1F621}", "\u{1F631}", "\u{1F973}", "\u{1F64C}", "\u{1F44F}", "\u{1F44D}",
  "\u{1F44E}", "\u{1F64F}", "\u{1F4AA}", "\u{1F91D}", "\u{270C}\u{FE0F}", "\u{1F44B}", "\u{1F525}", "\u{1F4AF}",
  "\u{1F389}", "\u{2728}", "\u{2B50}", "\u{2764}\u{FE0F}", "\u{1F9E1}", "\u{1F49B}", "\u{1F49A}", "\u{1F499}",
  "\u{1F49C}", "\u{1F90D}", "\u{1F494}", "\u{2705}", "\u{274C}", "\u{26A0}\u{FE0F}", "\u{2753}", "\u{2757}",
  "\u{1F4CC}", "\u{1F4CE}", "\u{1F4F7}", "\u{1F3AC}", "\u{1F393}", "\u{1F4DA}", "\u{1F4A1}", "\u{1F680}",
];

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  triggerClassName?: string;
}

export const EmojiPicker = ({ onSelect, triggerClassName }: EmojiPickerProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={
            triggerClassName ??
            "shrink-0 p-1.5 text-gray-900 hover:text-primary transition-colors"
          }
          aria-label="Emoji"
        >
          <Smile className="w-5 h-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        side="top"
        className="w-64 rounded-xl border-gray-100 p-2 shadow-lg"
      >
        <div className="grid max-h-48 grid-cols-8 gap-1 overflow-y-auto">
          {EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => onSelect(emoji)}
              className="rounded-md p-1.5 text-lg leading-none transition-colors hover:bg-gray-100"
            >
              {emoji}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
