"use client";

import * as React from "react";
import { StudentMessageBubble } from "./student-message-bubble";
import type { Message } from "../_data/mock-messages";
import { ChevronDown } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

interface StudentMessageListProps {
  messages: Message[];
  isGroup?: boolean;
  onReact?: (messageId: string, emoji: string) => void;
  onReply?: (message: Message) => void;
  onDelete?: (message: Message) => void;
}

export const StudentMessageList = ({
  messages,
  isGroup = false,
  onReact,
  onReply,
  onDelete,
}: StudentMessageListProps) => {
  const bottomRef = React.useRef<HTMLDivElement>(null);
  const containerRef = React.useRef<HTMLDivElement>(null);
  const [showScrollBtn, setShowScrollBtn] = React.useState(false);
  const reducedMotion = useReducedMotion();

  const wasNearBottom = React.useRef(true);
  const initialized = React.useRef(false);
  const lastMessageId = React.useRef<string | undefined>(undefined);
  React.useEffect(() => {
    const last = messages[messages.length - 1];
    const newOwnMessage = last?.senderId === "me" && last.id !== lastMessageId.current;
    if (!initialized.current || wasNearBottom.current || newOwnMessage) {
      bottomRef.current?.scrollIntoView({ behavior: "instant" });
    }
    lastMessageId.current = last?.id;
    initialized.current = true;
  }, [messages]);

  // Show/hide scroll-to-bottom button
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const distFromBottom =
        container.scrollHeight - container.scrollTop - container.clientHeight;
      setShowScrollBtn(distFromBottom > 200);
      wasNearBottom.current = distFromBottom < 120;
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
        className="flex-1 overflow-y-auto px-3 md:px-6 py-6"
      >
        <div className="flex flex-col gap-4 w-full max-w-[920px] mx-auto">
          {messages.length === 0 && <div className="mx-auto mt-20 max-w-sm rounded-2xl border border-[#ece6df] bg-white p-6 text-center"><p className="text-sm font-semibold text-[#302925]">Start the conversation</p><p className="mt-2 text-sm leading-6 text-[#9a9087]">Share a question or say hello to your chatroom.</p></div>}
          {messages.map((message, index) => {
            const prevMessage = index > 0 ? messages[index - 1] : null;
            const sameSenderAsPrev =
              prevMessage && prevMessage.senderId === message.senderId;
            const dateLabel = message.dateLabel ?? "Today";
            const showDayDivider =
              !prevMessage || (prevMessage.dateLabel ?? "Today") !== dateLabel;

            return (
              <React.Fragment key={message.id}>
                {showDayDivider && (
                  <div className="flex items-center gap-3 text-xs font-medium text-gray-400">
                    <div className="flex-1 h-px bg-gray-100" />
                    {dateLabel}
                    <div className="flex-1 h-px bg-gray-100" />
                  </div>
                )}
                <motion.div initial={reducedMotion ? false : { opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.18 }}><StudentMessageBubble
                  message={message}
                  isGroup={isGroup}
                  showAvatar={!sameSenderAsPrev || showDayDivider}
                  showName={!sameSenderAsPrev || showDayDivider}
                  onReact={message.id.startsWith("optimistic-") ? undefined : onReact}
                  onReply={message.id.startsWith("optimistic-") ? undefined : onReply}
                  onDelete={message.id.startsWith("optimistic-") ? undefined : onDelete}
                /></motion.div>
              </React.Fragment>
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
