"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Reply, MoreVertical, SmilePlus } from "lucide-react";
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
    <div className="flex items-start gap-2.5 group max-w-[95%] lg:max-w-[85%] bg-white rounded-xl p-2">
      {/* Avatar */}
      {showAvatar ? (
        <Avatar className="w-8 h-8 shrink-0 mt-1">
          <AvatarImage src={message.senderAvatar} />
          <AvatarFallback className="text-xs">
            {message.senderName[0]}
          </AvatarFallback>
        </Avatar>
      ) : (
        <div className="w-8 shrink-0" />
      )}

      <div className="flex-1 min-w-0">
        {/* Sender name + timestamp */}
        {showName && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-gray-900">
              {message.senderName}
            </span>
            <span className="text-[11px] text-gray-400">
              {message.timestamp}
            </span>
          </div>
        )}

        {/* Reply preview */}
        {message.replyTo && (
          <div className="border-l-2 border-[#F15D23] bg-[#FFF5F2] rounded-r-lg px-3 py-2 mb-2">
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
        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
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
      <div className="flex items-center gap-0.5 mt-1 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          className="p-1 rounded-md hover:bg-gray-100 text-gray-900"
          aria-label="React"
          onClick={() =>
            toast.info("Reactions aren't available yet — coming in a future update.")
          }
        >
          <SmilePlus className="w-4 h-4" />
        </button>
        <button
          className="p-1 rounded-md hover:bg-gray-100 text-gray-900"
          aria-label="More options"
        >
          <MoreVertical className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
