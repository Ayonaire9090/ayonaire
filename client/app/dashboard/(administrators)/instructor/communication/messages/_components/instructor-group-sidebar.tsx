"use client";

import { useState } from "react";
import { format } from "date-fns";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ChevronDown, FileText, ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import type { RoomRecord } from "@/lib/api/endpoints/rooms";
import type { MessageRecord } from "@/lib/api/endpoints/messages";

function attachmentName(url: string, fallback: string) {
  try {
    const name = decodeURIComponent(new URL(url).pathname.split("/").pop() ?? "");
    return name || fallback;
  } catch {
    return fallback;
  }
}

function roomAttachments(messages: MessageRecord[]) {
  return messages.flatMap((message) => {
    const sentAt = format(new Date(message.createdAt), "MMM d, yyyy, h:mm a");
    const items = [];
    if (message.media) {
      items.push({
        id: `${message.id}-media`,
        name: attachmentName(message.media.url, "Image attachment"),
        url: message.media.url,
        date: sentAt,
        type: "media" as const,
      });
    }
    if (message.file) {
      items.push({
        id: `${message.id}-file`,
        name: attachmentName(message.file.url, "File attachment"),
        url: message.file.url,
        date: sentAt,
        type: "file" as const,
      });
    }
    return items;
  });
}

export const InstructorGroupSidebar = ({
  room,
  messages = [],
}: {
  room: RoomRecord;
  messages?: MessageRecord[];
}) => {
  const [attachmentsOpen, setAttachmentsOpen] = useState(true);
  const [membersOpen, setMembersOpen] = useState(true);
  const title = room.name ?? "Untitled Group";
  const attachments = roomAttachments(messages);

  return (
    <div className="p-5 md:p-6 bg-white min-h-full flex flex-col h-full w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-[17px] font-semibold text-gray-900">Activity</h2>
      </div>

      {/* Profile */}
      <div className="flex flex-col items-center mb-8">
        <Avatar className="size-20 mb-3 border-2 border-white shadow-sm">
          <AvatarImage src={room.profile?.url} alt={title} />
          <AvatarFallback className="bg-orange-100 text-orange-600 font-bold text-xl">
            {title.slice(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <h3 className="text-[16px] font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 font-medium">
          {room.participants.length} member
          {room.participants.length === 1 ? "" : "s"}
        </p>
      </div>

      {/* Attachments */}
      <div className="mb-6">
        <button
          onClick={() => setAttachmentsOpen(!attachmentsOpen)}
          className="flex items-center justify-between w-full py-2 mb-2 group"
        >
          <span className="text-[15px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
            Attachments
          </span>
          <ChevronDown
            className={cn(
              "size-5 text-gray-400 transition-transform duration-200",
              attachmentsOpen && "rotate-180",
            )}
          />
        </button>

        {attachmentsOpen && (
          <div className="flex flex-col gap-4 mt-2">
            {attachments.length === 0 ? (
              <p className="text-[13px] text-gray-400">
                Files shared in this room will appear here.
              </p>
            ) : (
              attachments.map((file) => (
              <a
                key={file.id}
                href={file.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 group cursor-pointer"
              >
                <div
                  className={cn(
                    "size-10 rounded-full flex items-center justify-center shrink-0 bg-[#2d2d3f]",
                  )}
                >
                  {file.type === "media" ? (
                    <ImageIcon className="size-5 text-white" />
                  ) : (
                    <FileText className="size-5 text-white" />
                  )}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-[14px] font-medium text-gray-900 truncate group-hover:text-primary transition-colors">
                    {file.name}
                  </span>
                  <span className="text-[12px] text-gray-400">
                    {file.date}
                  </span>
                </div>
              </a>
              ))
            )}
          </div>
        )}
      </div>

      {/* Members */}
      <div>
        <button
          onClick={() => setMembersOpen(!membersOpen)}
          className="flex items-center justify-between w-full py-2 mb-2 group"
        >
          <span className="text-[15px] font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
            Members
          </span>
          <ChevronDown
            className={cn(
              "size-5 text-gray-400 transition-transform duration-200",
              membersOpen && "rotate-180",
            )}
          />
        </button>

        {membersOpen && (
          <div className="flex flex-col gap-1 mt-2">
            {room.participants.map((member) => (
              <div
                key={member.id}
                className="flex items-center gap-3 py-2 px-1 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer"
              >
                <Avatar className="size-10 shrink-0 border border-gray-100">
                  <AvatarImage src={member.profile?.url} alt={member.name} />
                  <AvatarFallback className="text-sm font-medium bg-gray-100">
                    {member.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <span className="text-[14px] font-medium text-gray-900">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
