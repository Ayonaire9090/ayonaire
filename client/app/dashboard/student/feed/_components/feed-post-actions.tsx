import { Eye, Copy } from "lucide-react";
import React from "react";

export interface PostOption {
  label: string;
  icon?: React.ReactNode;
  onClick?: () => void;
}

interface FeedPostActionsProps {
  options?: PostOption[];
  onReport?: () => void;
}

export const FeedPostActions = ({
  options,
  onReport,
}: FeedPostActionsProps) => {
  const defaultOptions: PostOption[] = [
    { label: "View post", icon: <Eye size={18} strokeWidth={2} /> },
    { label: "Copy link", icon: <Copy size={18} strokeWidth={2} /> },
    { label: "Copy Caption", icon: <Copy size={18} strokeWidth={2} /> },
  ];

  const displayOptions = options || defaultOptions;

  return (
    <div className="flex flex-col bg-[#F6F6F6] rounded-2xl border border-gray-200/80 shadow-sm overflow-hidden w-full max-w-48">
      <div className="flex flex-col py-1.5">
        {displayOptions.map((option, index) => (
          <button
            key={index}
            onClick={option.onClick}
            className="flex items-center gap-3 px-4 py-2.5 hover:bg-gray-200/60 transition-colors text-gray-900 font-medium text-[15px] w-full text-left cursor-pointer"
          >
            {option.icon && (
              <span className="text-gray-900">{option.icon}</span>
            )}
            <span>{option.label}</span>
          </button>
        ))}
      </div>

      <div className="h-px bg-gray-300/70 mx-3" />

      <button
        onClick={onReport}
        className="w-full text-center text-[#ff4d4d] font-medium text-[15px] py-3.5 hover:bg-gray-200/60 transition-colors cursor-pointer"
      >
        Report post
      </button>
    </div>
  );
};
