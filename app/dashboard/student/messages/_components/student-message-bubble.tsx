"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MessageCircle, Reply, MoreVertical, SmilePlus } from "lucide-react";
import { toast } from "sonner";
import type { Message } from "../_data/mock-messages";
import Image from "next/image";

interface StudentMessageBubbleProps {
  message: Message;
  isGroup?: boolean;
  showAvatar?: boolean;
  showName?: boolean;
}

export const StudentMessageBubble = ({
  message,
  isGroup = false,
  showAvatar = true,
  showName = true,
}: StudentMessageBubbleProps) => {
  // In group/channel view every message renders as a standard labeled row
  // (Slack-style), including the current user's own messages. The
  // right-aligned bubble treatment is reserved for 1:1 DMs.
  const isOutgoing = !isGroup && message.senderId === "me";
  const isSystem = message.type === "system";

  // System message (centered info)
  if (isSystem) {
    return (
      <div className="flex flex-col items-center justify-center py-8 gap-3">
        <Image
          src="/assets/logos/full-logo-dark.svg"
          width={120}
          height={40}
          alt="Ayonaire"
        />
        <p className="text-sm font-medium text-gray-900">Ayobami Awosanya</p>
        <p className="text-xs text-gray-500">Data Science And Ge...+2</p>
        <p className="text-xs text-gray-400">{message.timestamp}</p>
      </div>
    );
  }

  // Outgoing message (right-aligned)
  if (isOutgoing) {
    return (
      <div className="flex flex-col items-end gap-1 group max-w-[95%] lg:max-w-[85%] ml-auto">
        {/* Action buttons */}
        <div className="flex items-center gap-1 mb-1">
          <button
            className="p-1 rounded-md hover:bg-gray-100 text-gray-400"
            aria-label="Reply"
          >
            <Reply className="w-4 h-4" />
          </button>
          <button
            className="p-1 rounded-md hover:bg-gray-100 text-gray-400"
            aria-label="More options"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl rounded-br-md px-4 py-3 max-w-full">
          <p className="text-sm font-semibold text-gray-900 mb-1">You</p>
          <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
            {message.content}
          </p>

          {/* Image attachments */}
          {message.images && message.images.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap justify-end">
              {message.images.map((img, i) => (
                <div
                  key={i}
                  className="relative w-36 h-24 rounded-lg overflow-hidden bg-gray-100"
                >
                  <Image
                    src={img}
                    alt="attachment"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Video attachment */}
          {message.video && (
            <div className="mt-2 rounded-lg overflow-hidden bg-black flex justify-center w-64 max-w-full ml-auto">
              <video controls className="max-h-48 w-full object-contain">
                <source src={message.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          )}
          <p className="text-[11px] text-gray-400 text-right mt-2">
            {message.timestamp}
          </p>
        </div>
      </div>
    );
  }

  // Standard row (left-aligned): every group message, and incoming DMs.
  return (
    <div className="flex items-start gap-3 group w-full bg-white rounded-lg px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      {/* Avatar */}
      {showAvatar ? (
        <Avatar className="w-10 h-10 shrink-0 mt-1">
          <AvatarImage src={message.senderAvatar} />
          <AvatarFallback className="text-xs">
            {message.senderName[0]}
          </AvatarFallback>
        </Avatar>
      ) : (
        <div className="w-10 shrink-0" />
      )}

      <div className="flex-1 min-w-0">
        {/* Sender name + timestamp */}
        {showName && (
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[13px] font-semibold text-gray-950">
              {message.senderName}
            </span>
            <span className="text-[11px] font-medium text-[#F15D23]">
              Class 25
            </span>
            <span className="text-[11px] text-gray-400">
              {message.timestamp}
            </span>
          </div>
        )}

        {/* Reply preview */}
        {message.replyTo && (
          <div className="border-l-2 border-[#F15D23] bg-[#FFF3EF] rounded-r-sm px-3 py-2 mt-3">
            <div className="flex items-center gap-1.5 mb-0.5">
              <Reply className="w-3.5 h-3.5 text-[#F15D23]" />
              <span className="text-xs font-medium text-[#F15D23]">Reply</span>
              <span className="text-xs font-medium text-gray-800 truncate">
                {message.replyTo.senderName}
              </span>
            </div>
            <p className="text-xs text-gray-500 line-clamp-2">
              {message.replyTo.content}
            </p>
          </div>
        )}

        {/* Message body */}
        <p className="text-[13px] text-gray-900 whitespace-pre-wrap leading-relaxed">
          {message.content}
        </p>

        {/* Timestamp for messages without name shown */}
        {!showName && (
          <p className="text-[11px] text-gray-400 mt-1">{message.timestamp}</p>
        )}

        {/* Image attachments */}
        {message.images && message.images.length > 0 && (
          <div className="flex gap-2 mt-2 flex-wrap">
            {message.images.map((img, i) => (
              <div
                key={i}
                className="relative w-36 h-24 rounded-lg overflow-hidden bg-gray-100"
              >
                <Image
                  src={img}
                  alt="attachment"
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        )}

        {/* Video attachment */}
        {message.video && (
          <div className="mt-2 rounded-lg overflow-hidden bg-black flex justify-center w-64 max-w-full">
            <video controls className="max-h-48 w-full object-contain">
              <source src={message.video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 mt-1 shrink-0 text-gray-900">
        <span className="text-[11px] font-semibold">57</span>
        <button
          className="rounded-md text-gray-700 hover:text-gray-950"
          aria-label="Reply"
          onClick={() =>
            toast.info("Threaded replies aren't available yet - coming in a future update.")
          }
        >
          <MessageCircle className="w-4 h-4" />
        </button>
        <button
          className="rounded-md text-gray-700 hover:text-gray-950"
          aria-label="React"
          onClick={() =>
            toast.info("Reactions aren't available yet — coming in a future update.")
          }
        >
          <SmilePlus className="w-4 h-4" />
        </button>
        <button
          className="rounded-md text-gray-700 hover:text-gray-950"
          aria-label="More options"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
