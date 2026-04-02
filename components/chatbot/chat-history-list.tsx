"use client";

import React from "react";
import { X, MessageSquare, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatSession } from "./use-chat-logic";

interface ChatHistoryListProps {
  sessions: ChatSession[];
  currentSessionId: string;
  onSelectSession: (id: string) => void;
  onDeleteSession: (id: string, e: React.MouseEvent) => void;
}

export function ChatHistoryList({
  sessions,
  currentSessionId,
  onSelectSession,
  onDeleteSession,
}: ChatHistoryListProps) {
  // Format date relative (Today, Yesterday, Date)
  const formatDate = (date: Date) => {
    const now = new Date();
    const isToday =
      date.getDate() === now.getDate() &&
      date.getMonth() === now.getMonth() &&
      date.getFullYear() === now.getFullYear();

    if (isToday) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
    }

    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  if (sessions.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-8 text-center text-gray-500">
        <MessageSquare className="w-12 h-12 mb-3 text-gray-300" />
        <p className="font-medium">No chat history yet</p>
        <p className="text-sm">Start a conversation to see it here</p>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50/50">
      <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-2">
        Recent Chats
      </h3>
      {sessions.map((session) => (
        <div
          key={session.id}
          onClick={() => onSelectSession(session.id)}
          className={cn(
            "group relative flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all border",
            session.id === currentSessionId
              ? "bg-white border-primary/20 shadow-sm"
              : "bg-white/50 border-transparent hover:bg-white hover:border-gray-200"
          )}
        >
          <div
            className={cn(
              "w-10 h-10 rounded-full flex items-center justify-center shrink-0",
              session.id === currentSessionId
                ? "bg-primary/10 text-primary"
                : "bg-gray-100 text-gray-400"
            )}
          >
            <MessageSquare className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-0.5">
              <span className="font-medium text-sm text-gray-900 truncate">
                {session.preview || "Empty Chat"}
              </span>
              <span className="text-[10px] text-gray-400 shrink-0">
                {formatDate(session.updatedAt)}
              </span>
            </div>
            <p className="text-xs text-gray-500 truncate pr-6">
              {session.messages.length > 0
                ? `${session.messages.length} messages`
                : "No messages"}
            </p>
          </div>

          <button
            onClick={(e) => onDeleteSession(session.id, e)}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg opacity-0 group-hover:opacity-100 transition-all"
            aria-label="Delete chat"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
