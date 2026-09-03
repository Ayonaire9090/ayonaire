"use client";

import * as React from "react";
import { InstructorMessageBubble } from "./instructor-message-bubble";
import type { MessageRecord } from "@/lib/api/endpoints/messages";
import { ChevronDown } from "lucide-react";
import { format, isToday, isYesterday } from "date-fns";

interface InstructorMessageListProps {
  messages: MessageRecord[];
  currentUserId?: string;
  onDelete?: (messageId: string) => void;
}

function dayDividerLabel(date: Date): string {
  if (isToday(date)) return "Today";
  if (isYesterday(date)) return "Yesterday";
  return format(date, "MMMM d, yyyy");
}

export const InstructorMessageList = ({
  messages,
  currentUserId,
  onDelete,
}: InstructorMessageListProps) => {
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = React.useState(false);

  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const distFromBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight;
      setShowScrollBtn(distFromBottom > 200);
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToBottom = () => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex-1 min-h-0 relative flex flex-col">
      <div
        ref={containerRef}
        className="flex-1 overflow-y-auto px-4 md:px-6 py-4"
      >
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {messages.map((message, index) => {
            const prevMessage = index > 0 ? messages[index - 1] : null;
            const sameSenderAsPrev =
              prevMessage && prevMessage.senderId.id === message.senderId.id;
            const dateLabel = dayDividerLabel(new Date(message.createdAt));
            const prevDateLabel = prevMessage
              ? dayDividerLabel(new Date(prevMessage.createdAt))
              : null;
            const showDayDivider = prevDateLabel !== dateLabel;

            return (
              <React.Fragment key={message.id}>
                {showDayDivider && (
                  <div className="flex items-center gap-3 text-xs font-medium text-gray-400">
                    <div className="flex-1 h-px bg-gray-100" />
                    {dateLabel}
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                )}
                <InstructorMessageBubble
                  message={message}
                  currentUserId={currentUserId}
                  showAvatar={!sameSenderAsPrev || showDayDivider}
                  showName={!sameSenderAsPrev || showDayDivider}
                  onDelete={onDelete}
                />
              </React.Fragment>
            );
          })}
          <div ref={bottomRef} />
        </div>
      </div>

      {showScrollBtn && (
        <button
          onClick={scrollToBottom}
          className="absolute bottom-6 right-6 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center text-gray-500 hover:text-gray-900 hover:shadow-lg transition-all z-10"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};