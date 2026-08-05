"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreVertical } from "lucide-react";
import type { MessageRecord } from "@/lib/api/endpoints/messages";
import { format } from "date-fns";
import Image from "next/image";

interface InstructorMessageBubbleProps {
  message: MessageRecord;
  currentUserId?: string;
  showAvatar?: boolean;
  showName?: boolean;
}

export const InstructorMessageBubble = ({
  message,
  currentUserId,
  showAvatar = true,
  showName = true,
}: InstructorMessageBubbleProps) => {
  const isOutgoing = message.senderId.id === currentUserId;
  const timestamp = message.createdAt
    ? format(new Date(message.createdAt), "h:mm a")
    : "";

  // Outgoing message (right-aligned)
  if (isOutgoing) {
    return (
      <div className="flex flex-col items-end gap-1 group max-w-[95%] lg:max-w-[85%] ml-auto">
        <div className="flex items-center gap-1 mb-1">
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
            {message.text}
          </p>

          {message.media && (
            <div className="relative w-36 h-24 rounded-lg overflow-hidden bg-gray-100 mt-2 ml-auto">
              <Image
                src={message.media.url}
                alt="attachment"
                fill
                className="object-cover"
              />
            </div>
          )}

          {message.file && (
            <a
              href={message.file.url}
              target="_blank"
              rel="noreferrer"
              className="mt-2 block text-xs text-primary underline"
            >
              View attached file
            </a>
          )}

          <p className="text-[11px] text-gray-400 text-right mt-2">
            {timestamp}
          </p>
        </div>
      </div>
    );
  }

  // Incoming message (left-aligned)
  return (
    <div className="flex items-start gap-2.5 group max-w-[95%] lg:max-w-[85%] bg-white rounded-xl p-2">
      {showAvatar ? (
        <Avatar className="w-8 h-8 shrink-0 mt-1">
          <AvatarImage src={message.senderId.profile?.url} />
          <AvatarFallback className="text-xs">
            {message.senderId.name[0]}
          </AvatarFallback>
        </Avatar>
      ) : (
        <div className="w-8 shrink-0" />
      )}

      <div className="flex-1 min-w-0">
        {showName && (
          <div className="flex items-center gap-2 mb-1">
            <span className="text-sm font-medium text-gray-900">
              {message.senderId.name}
            </span>
            <span className="text-[11px] text-gray-400">{timestamp}</span>
          </div>
        )}

        <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
          {message.text}
        </p>

        {!showName && (
          <p className="text-[11px] text-gray-400 mt-1">{timestamp}</p>
        )}

        {message.media && (
          <div className="relative w-36 h-24 rounded-lg overflow-hidden bg-gray-100 mt-2">
            <Image
              src={message.media.url}
              alt="attachment"
              fill
              className="object-cover"
            />
          </div>
        )}

        {message.file && (
          <a
            href={message.file.url}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-xs text-primary underline"
          >
            View attached file
          </a>
        )}
      </div>

      <div className="flex items-center gap-0.5 mt-1 shrink-0">
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
