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
  onEdit?: (message: Message, text: string) => Promise<void>;
  onPin?: (message: Message) => void;
  currentUserId?: string;
  onLoadOlder?: () => void;
  loadingOlder?: boolean;
  onThread?: (message: Message) => void;
}

export const StudentMessageList = ({
  messages,
  isGroup = false,
  onReact,
  onReply,
  onDelete,
  onEdit,
  onPin,
  currentUserId,
  onLoadOlder,
  loadingOlder,
  onThread,
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
        className="flex-1 overflow-y-auto bg-background px-3 py-5 md:px-5"
      >
        <div className="mx-auto flex w-full max-w-[920px] flex-col gap-0.5">
          {onLoadOlder && <button type="button" disabled={loadingOlder} onClick={onLoadOlder} className="mx-auto my-2 rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground hover:bg-accent disabled:opacity-50">{loadingOlder ? "Loading earlier messages…" : "Load earlier messages"}</button>}
          {messages.length === 0 && <div className="mx-auto mt-20 max-w-sm rounded-2xl border border-border bg-muted/20 p-6 text-center"><p className="text-sm font-semibold text-foreground">Start the conversation</p><p className="mt-2 text-sm leading-6 text-muted-foreground">Share a question or say hello to your chatroom.</p></div>}
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
                  <div className="my-5 flex items-center gap-3 text-xs font-medium text-muted-foreground">
                    <div className="flex-1 border-t border-border/80" />
                    <span className="rounded-full border border-border bg-card px-3 py-1">{dateLabel}</span>
                    <div className="flex-1 border-t border-border/80" />
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
                  onEdit={message.id.startsWith("optimistic-") ? undefined : onEdit}
                  onPin={message.id.startsWith("optimistic-") ? undefined : onPin}
                  currentUserId={currentUserId}
                  onThread={message.id.startsWith("optimistic-") ? undefined : onThread}
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
          className="absolute bottom-6 right-6 z-10 flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground shadow-md transition-all hover:text-foreground hover:shadow-lg"
          aria-label="Scroll to bottom"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
