"use client";

import * as React from "react";
import Image from "next/image";
import { Info, MoreVertical, Reply, SmilePlus, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Message } from "../_data/mock-messages";
import { EmojiPicker } from "./emoji-picker";
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

interface StudentMessageBubbleProps {
  message: Message;
  isGroup?: boolean;
  showAvatar?: boolean;
  showName?: boolean;
  onReact?: (messageId: string, emoji: string) => void;
  onReply?: (message: Message) => void;
  onDelete?: (message: Message) => void;
}

function MessageActions({
  message,
  onDelete,
}: {
  message: Message;
  onDelete?: (message: Message) => void;
}) {
  const [infoOpen, setInfoOpen] = React.useState(false);
  const isOwnMessage = message.senderId === "me";
  const attachmentType = message.images?.length
    ? "Image"
    : message.video
      ? "Video"
      : message.file
        ? "File"
        : "None";

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className="rounded-md p-1 text-gray-500 hover:bg-gray-100 hover:text-gray-950"
            aria-label="More options"
          >
            <MoreVertical className="h-4 w-4" />
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
              onClick={() => onDelete(message)}
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
              <span className="text-right font-medium text-gray-900">{message.senderName}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Sent</span>
              <span className="text-right font-medium text-gray-900">{message.dateLabel ?? "Today"}, {message.timestamp}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Attachment</span>
              <span className="text-right font-medium text-gray-900">{attachmentType}</span>
            </div>
            <div className="flex justify-between gap-4">
              <span className="text-gray-500">Status</span>
              <span className="text-right font-medium capitalize text-gray-900">{message.status}</span>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
function ReactionChips({
  message,
  onReact,
}: {
  message: Message;
  onReact?: (messageId: string, emoji: string) => void;
}) {
  if (!message.reactions?.length) return null;

  return (
    <div className="mt-3 flex flex-wrap gap-1.5">
      {message.reactions.map((reaction) => (
        <button
          key={reaction.emoji}
          onClick={() => onReact?.(message.id, reaction.emoji)}
          className={`rounded-full border px-2 py-0.5 text-xs font-medium transition-colors ${
            reaction.reactedByMe
              ? "border-[#F15D23]/30 bg-[#FFF3EF] text-[#F15D23]"
              : "border-gray-200 bg-gray-50 text-gray-700 hover:bg-gray-100"
          }`}
        >
          {reaction.emoji} {reaction.count}
        </button>
      ))}
    </div>
  );
}

function MessageAttachments({ message }: { message: Message }) {
  return (
    <>
      {message.images && message.images.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {message.images.map((img, i) => (
            <div
              key={i}
              className="relative h-24 w-36 overflow-hidden rounded-lg bg-gray-100"
            >
              <Image src={img} alt="attachment" fill className="object-cover" />
            </div>
          ))}
        </div>
      )}

      {message.video && (
        <div className="mt-2 flex w-64 max-w-full justify-center overflow-hidden rounded-lg bg-black">
          <video controls className="max-h-48 w-full object-contain">
            <source src={message.video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {message.file && (
        <a
          href={message.file.url}
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-flex rounded-lg border border-gray-100 bg-gray-50 px-3 py-2 text-xs font-medium text-gray-700 hover:bg-gray-100"
        >
          {message.file.name}
        </a>
      )}
    </>
  );
}

export const StudentMessageBubble = ({
  message,
  isGroup = false,
  showAvatar = true,
  showName = true,
  onReact,
  onReply,
  onDelete,
}: StudentMessageBubbleProps) => {
  const isOutgoing = !isGroup && message.senderId === "me";
  const isSystem = message.type === "system";
  const reactionTotal =
    message.reactions?.reduce((sum, reaction) => sum + reaction.count, 0) ?? 0;

  if (isSystem) {
    return (
      <div className="flex flex-col items-center justify-center gap-3 py-8">
        <Image
          src="/assets/logos/full-logo-dark.svg"
          width={120}
          height={40}
          alt="Ayonaire"
        />
        <p className="text-sm font-medium text-gray-900">Ayonaire Academy</p>
        <p className="text-xs text-gray-400">{message.timestamp}</p>
      </div>
    );
  }

  if (isOutgoing) {
    return (
      <div className="group ml-auto flex max-w-[95%] flex-col items-end gap-1 lg:max-w-[85%]">
        <div className="mb-1 flex items-center gap-1">
          <button
            className="rounded-md p-1 text-gray-400 hover:bg-gray-100"
            aria-label="Reply"
            onClick={() => onReply?.(message)}
          >
            <Reply className="h-4 w-4" />
          </button>
          <MessageActions message={message} onDelete={onDelete} />
        </div>

        <div className="max-w-full rounded-2xl rounded-br-md border border-gray-100 bg-white px-4 py-3">
          <p className="mb-1 text-sm font-semibold text-gray-900">You</p>
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-gray-600">
            {message.content}
          </p>
          <MessageAttachments message={message} />
          <ReactionChips message={message} onReact={onReact} />
          <p className="mt-2 text-right text-[11px] text-gray-400">
            {message.timestamp}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="group flex w-full items-start gap-3 rounded-lg bg-white px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.03)]">
      {showAvatar ? (
        <Avatar className="mt-1 h-10 w-10 shrink-0">
          <AvatarImage src={message.senderAvatar} />
          <AvatarFallback className="text-xs">
            {message.senderName[0]}
          </AvatarFallback>
        </Avatar>
      ) : (
        <div className="w-10 shrink-0" />
      )}

      <div className="min-w-0 flex-1">
        {showName && (
          <div className="mb-2 flex items-center gap-2">
            <span className="text-[13px] font-semibold text-gray-950">
              {message.senderName}
            </span>
            <span className="text-[11px] text-gray-400">
              {message.timestamp}
            </span>
          </div>
        )}

        <p className="whitespace-pre-wrap text-[13px] leading-relaxed text-gray-900">
          {message.content}
        </p>

        {message.replyTo && (
          <div className="mt-3 rounded-r-sm border-l-2 border-[#F15D23] bg-[#FFF3EF] px-3 py-2">
            <div className="mb-0.5 flex items-center gap-1.5">
              <Reply className="h-3.5 w-3.5 text-[#F15D23]" />
              <span className="text-xs font-medium text-[#F15D23]">Reply</span>
              <span className="truncate text-xs font-medium text-gray-800">
                {message.replyTo.senderName}
              </span>
            </div>
            <p className="line-clamp-2 text-xs text-gray-500">
              {message.replyTo.content}
            </p>
          </div>
        )}

        {!showName && (
          <p className="mt-1 text-[11px] text-gray-400">{message.timestamp}</p>
        )}

        <MessageAttachments message={message} />
        <ReactionChips message={message} onReact={onReact} />
      </div>

      <div className="mt-1 flex shrink-0 items-center gap-2 text-gray-900">
        <span className="text-[11px] font-semibold">{reactionTotal}</span>
        <button
          className="rounded-md text-gray-700 hover:text-gray-950"
          aria-label="Reply"
          onClick={() => onReply?.(message)}
        >
          <Reply className="h-4 w-4" />
        </button>
        {onReact ? (
          <EmojiPicker
            onSelect={(emoji) => onReact(message.id, emoji)}
            triggerClassName="rounded-md text-gray-700 hover:text-gray-950"
          />
        ) : (
          <SmilePlus className="h-4 w-4" />
        )}
        <MessageActions message={message} onDelete={onDelete} />
      </div>
    </div>
  );
};
