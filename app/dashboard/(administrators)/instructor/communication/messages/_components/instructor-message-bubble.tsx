"use client";

import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Info, MoreVertical, Trash2 } from "lucide-react";
import type { MessageRecord } from "@/lib/api/endpoints/messages";
import { format } from "date-fns";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface InstructorMessageBubbleProps {
  message: MessageRecord;
  currentUserId?: string;
  showAvatar?: boolean;
  showName?: boolean;
  onDelete?: (messageId: string) => void;
}

function MessageActions({
  message,
  isOwnMessage,
  onDelete,
}: {
  message: MessageRecord;
  isOwnMessage: boolean;
  onDelete?: (messageId: string) => void;
}) {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const createdAt = message.createdAt ? new Date(message.createdAt) : null;
  const attachmentType = message.media ? "Image" : message.file ? "File" : "None";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="p-1 rounded-md hover:bg-gray-100 text-gray-700 hover:text-gray-950"
            aria-label="More options"
          >
            <MoreVertical className="w-4 h-4" />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align={isOwnMessage ? "end" : "start"} className="w-44">
          <DropdownMenuItem onClick={() => setInfoOpen(true)}>
            <Info className="mr-2 h-4 w-4" />
            Message info
          </DropdownMenuItem>
          {isOwnMessage && onDelete && (
            <DropdownMenuItem
              className="text-red-600 focus:text-red-600"
              onClick={() => onDelete(message.id)}
            >
              <Trash2 className="mr-2 h-4 w-4" />
              Delete message
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={infoOpen} onOpenChange={setInfoOpen}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Message info</DialogTitle>
          </DialogHeader>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Sender</span>
              <span className="text-right font-medium text-gray-900">
                {isOwnMessage ? "You" : message.senderId.name}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Sent</span>
              <span className="text-right font-medium text-gray-900">
                {createdAt ? format(createdAt, "MMMM d, yyyy, h:mm a") : "Unknown"}
              </span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Attachment</span>
              <span className="text-right font-medium text-gray-900">{attachmentType}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

function MessageAttachments({ message, isOutgoing }: { message: MessageRecord; isOutgoing: boolean }) {
  return (
    <>
      {message.media && (
        <div className={`relative w-36 h-24 rounded-lg overflow-hidden bg-gray-100 mt-2 ${isOutgoing ? "ml-auto" : ""}`}>
          <Image src={message.media.url} alt="attachment" fill className="object-cover" />
        </div>
      )}

      {message.file && (
        <a
          href={message.file.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
        >
          Attachment
        </a>
      )}
    </>
  );
}

export const InstructorMessageBubble = ({
  message,
  currentUserId,
  showAvatar = true,
  showName = true,
  onDelete,
}: InstructorMessageBubbleProps) => {
  const isOutgoing = message.senderId.id === currentUserId;
  const timestamp = message.createdAt
    ? format(new Date(message.createdAt), "h:mm a")
    : "";

  if (isOutgoing) {
    return (
      <div className="flex flex-col items-end gap-1 group max-w-[95%] lg:max-w-[85%] ml-auto">
        <div className="flex items-center gap-1 mb-1">
          <MessageActions message={message} isOwnMessage={isOutgoing} onDelete={onDelete} />
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl rounded-br-md px-4 py-3 max-w-full">
          <p className="text-sm font-semibold text-gray-900 mb-1">You</p>
          {message.text && (
            <p className="text-sm text-gray-600 whitespace-pre-wrap leading-relaxed">
              {message.text}
            </p>
          )}
          <MessageAttachments message={message} isOutgoing={isOutgoing} />
          <p className="text-[11px] text-gray-400 text-right mt-2">{timestamp}</p>
        </div>
      </div>
    );
  }

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

        {message.text && (
          <p className="text-sm text-gray-700 whitespace-pre-wrap leading-relaxed">
            {message.text}
          </p>
        )}

        {!showName && (
          <p className="text-[11px] text-gray-400 mt-1">{timestamp}</p>
        )}

        <MessageAttachments message={message} isOutgoing={isOutgoing} />
      </div>

      <div className="flex items-center gap-0.5 mt-1 shrink-0">
        <MessageActions message={message} isOwnMessage={isOutgoing} onDelete={onDelete} />
      </div>
    </div>
  );
};