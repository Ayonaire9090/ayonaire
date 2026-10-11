"use client";

import React from "react";
import { X, Clock, Plus, ChevronLeft } from "lucide-react";
import { chatHeaderText } from "@/constants/chatbot";

interface ChatHeaderProps {
  onClose: () => void;
  onNewChat: () => void;
  onToggleHistory: () => void;
  showHistory: boolean;
}

export function ChatHeader({
  onClose,
  onNewChat,
  onToggleHistory,
  showHistory,
}: ChatHeaderProps) {
  return (
    <div className="flex flex-col gap-3 px-4 py-4 bg-linear-to-r from-[#F97A1F] to-[#F67219] text-white rounded-t-none md:rounded-t-2xl shadow-sm z-10 relative">
      {/* Top Row: Title and Close */}
      <div className="flex items-center justify-between w-full">
        <h3 className="text-base font-medium tracking-wide">
          {showHistory ? "History" : chatHeaderText}
        </h3>
        <button
          onClick={onClose}
          className="w-7 h-7 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          aria-label="Close chat"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Bottom Row: Actions (Left Aligned) */}
      <div className="flex items-center gap-3">
        {showHistory ? (
          <button
            onClick={onToggleHistory}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            Back to Chat
          </button>
        ) : (
          <>
            <button
              onClick={onToggleHistory}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium"
              title="View Previous Chats"
            >
              <Clock className="w-3.5 h-3.5" />
              History
            </button>
            <button
              onClick={onNewChat}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs font-medium"
              title="Start New Chat"
            >
              <Plus className="w-3.5 h-3.5" />
              New Chat
            </button>
          </>
        )}
      </div>
    </div>
  );
}
