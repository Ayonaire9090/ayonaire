"use client";

import { Smile } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// A small curated set, not a full emoji library - good enough for message
// reactions/flavor without pulling in a heavy dependency.
const EMOJIS = [
  "😀", "😂", "😅", "😊", "😍", "😘", "😎", "🤔",
  "😢", "😭", "😡", "😱", "🥳", "🙌", "👏", "👍",
  "👎", "🙏", "💪", "🤝", "✌️", "👋", "🔥", "💯",
  "🎉", "✨", "⭐", "❤️", "🧡", "💛", "💚", "💙",
  "💜", "🤍", "💔", "✅", "❌", "⚠️", "❓", "❗",
  "📌", "📎", "📷", "🎬", "🎓", "📚", "💡", "🚀",
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
        className="w-64 p-2 rounded-xl border-gray-100 shadow-lg"
      >
        <div className="grid grid-cols-8 gap-1 max-h-48 overflow-y-auto">
          {EMOJIS.map((emoji) => (
            <button
              key={emoji}
              type="button"
              onClick={() => onSelect(emoji)}
              className="text-lg leading-none p-1.5 rounded-md hover:bg-gray-100 transition-colors"
            >
              {emoji}
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};
