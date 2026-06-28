"use client";

import * as React from "react";
import { InstructorMessageBubble } from "./instructor-message-bubble";
import type { Message } from "../_data/mock-messages";
import { ChevronDown } from "lucide-react";

interface InstructorMessageListProps {
  messages: Message[];
  isGroup?: boolean;
}

export const InstructorMessageList = ({
  messages,
  isGroup = false,
}: InstructorMessageListProps) => {
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = React.useState(false);

  // Auto-scroll to bottom on mount
  React.useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "instant" });
  }, [messages]);

  // Show/hide scroll-to-bottom button
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
              prevMessage && prevMessage.senderId === message.senderId;

            return (
              <InstructorMessageBubble
                key={message.id}
                message={message}
                isGroup={isGroup}
                showAvatar={!sameSenderAsPrev}
                showName={!sameSenderAsPrev}
              />
            );
          })}
          <div ref={bottomRef} />
        </div>
      </div>

      {/* Scroll to bottom FAB */}
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
