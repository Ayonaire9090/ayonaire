import { format, isToday, isYesterday } from "date-fns";
import { RoomRecord } from "@/lib/api/endpoints/rooms";
import { MessageRecord } from "@/lib/api/endpoints/messages";
import type { Conversation, Message } from "./mock-messages";

const DEFAULT_AVATAR = "/assets/icons/user-solid.svg";
const DEFAULT_GROUP_AVATAR = "/assets/logos/logo-dark.png";

export function mapRoomToConversation(
  room: RoomRecord,
  currentUserId?: string,
): Conversation {
  const otherParticipant = !room.isGroup
    ? room.participants.find((p) => p.id !== currentUserId)
    : undefined;

  const title = room.isGroup
    ? room.name || "Group"
    : otherParticipant?.name ?? "Unknown User";

  const avatar = room.isGroup
    ? room.profile?.url || DEFAULT_GROUP_AVATAR
    : otherParticipant?.profile?.url || DEFAULT_AVATAR;

  return {
    id: room.id,
    type: room.isGroup ? "group" : "individual",
    title,
    subtitle: room.description,
    avatar,
    course: room.isGroup ? room.description : undefined,
    // No presence-tracking backend exists yet, so online/lastSeen are
    // intentionally left unset rather than guessed.
    online: false,
    lastSeen: undefined,
    messages: [],
  };
}

function dayDividerLabel(date: Date): string {
  if (isToday(date)) return "Today";
  if (isYesterday(date)) return "Yesterday";
  return format(date, "MMMM d, yyyy");
}

export function mapMessageRecordToMessage(
  message: MessageRecord,
  currentUserId?: string,
): Message {
  const isMine = message.senderId.id === currentUserId;
  const createdAt = new Date(message.createdAt);

  let type: Message["type"] = "text";
  if (message.media) type = "image";
  else if (message.file) type = "file";

  return {
    id: message.id,
    senderId: isMine ? "me" : message.senderId.id,
    senderName: message.senderId.name,
    senderAvatar: message.senderId.profile?.url || DEFAULT_AVATAR,
    content: message.text,
    type,
    timestamp: format(createdAt, "h:mm a"),
    dateLabel: dayDividerLabel(createdAt),
    // No read-receipt tracking exists on the backend yet - every real
    // message reports "sent" rather than a guessed delivered/seen state.
    status: "sent",
    reactions: (message.reactions ?? []).map((reaction) => ({
      emoji: reaction.emoji,
      count: reaction.count,
      reactedByMe: reaction.users.some((user) => user.id === currentUserId),
    })),
    images: message.media ? [message.media.url] : undefined,
    file: message.file
      ? { name: "Attachment", size: "", url: message.file.url }
      : undefined,
  };
}

export function lastMessagePreview(room: RoomRecord): string {
  if (!room.lastMessage) return "No messages yet";
  if (room.lastMessage.text) return room.lastMessage.text;
  if (room.lastMessage.hasMedia) return "Photo";
  if (room.lastMessage.hasFile) return "Attachment";
  return "";
}

export function lastMessageTimestamp(room: RoomRecord): string {
  if (!room.lastMessage) return "";
  return format(new Date(room.lastMessage.createdAt), "h:mm a");
}
