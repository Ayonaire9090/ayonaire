import { apiClient } from "../client";
import { ApiResponse } from "../types";
import type { MessageRecord } from "./messages";

export interface RoomParticipant {
  id: string;
  name: string;
  profile?: { url: string; publicId: string } | null;
}

export interface RoomLastMessage {
  text?: string;
  senderId: string;
  hasMedia: boolean;
  hasFile: boolean;
  createdAt: string;
}

export interface RoomEvent { id: string; title: string; startsAt: string; endsAt: string; meetingUrl?: string; createdBy: string }

export interface RoomRecord {
  id: string;
  name?: string;
  description?: string;
  isGroup: boolean;
  course?: string;
  announcementOnly?: boolean;
  profile?: { url: string; publicId: string };
  roomCreator: string;
  participants: RoomParticipant[];
  createdAt: string;
  updatedAt: string;
  lastMessage: RoomLastMessage | null;
  unreadCount?: number;
  muted?: boolean;
  pinned?: boolean;
}

export const roomsApi = {
  pinnedMessages: (roomId: string) => apiClient<ApiResponse<MessageRecord[]>>(`/api/v1/room/${roomId}/pins`, { method: "GET", requireAuth: true }),
  thread: (roomId: string, messageId: string) => apiClient<ApiResponse<{ root: MessageRecord; replies: MessageRecord[] }>>(`/api/v1/room/${roomId}/threads/${messageId}`, { method: "GET", requireAuth: true }),
  events: (roomId: string) => apiClient<ApiResponse<RoomEvent[]>>(`/api/v1/room/${roomId}/events`, { method: "GET", requireAuth: true }),
  createEvent: (roomId: string, input: { title: string; startsAt: string; endsAt: string; meetingUrl?: string }) => apiClient<ApiResponse<{ id: string }>>(`/api/v1/room/${roomId}/events`, { method: "POST", body: JSON.stringify(input), requireAuth: true }),
  deleteEvent: (roomId: string, eventId: string) => apiClient<ApiResponse<{ id: string }>>(`/api/v1/room/${roomId}/events/${eventId}`, { method: "DELETE", requireAuth: true }),
  markRead: (roomId: string) => apiClient<ApiResponse<{ roomId: string; through: string }>>(`/api/v1/room/${roomId}/read`, { method: "POST", requireAuth: true }),
  setPreference: (roomId: string, preference: "muted" | "pinned", enabled: boolean) => apiClient<ApiResponse<{ roomId: string; enabled: boolean }>>(`/api/v1/room/${roomId}/preferences/${preference}`, { method: "PUT", body: JSON.stringify({ enabled }), requireAuth: true }),
  setAnnouncementMode: (roomId: string, enabled: boolean) => apiClient<ApiResponse<{ roomId: string; enabled: boolean }>>(`/api/v1/room/${roomId}/announcement-mode`, { method: "PUT", body: JSON.stringify({ enabled }), requireAuth: true }),
  assignedInstructors: () => apiClient<ApiResponse<{ courseId: string; courseTitle: string; instructor: RoomParticipant }[]>>("/api/v1/room/instructors", { method: "GET", requireAuth: true }),
  instructorStudents: () => apiClient<ApiResponse<RoomParticipant[]>>("/api/v1/room/instructor/students", { method: "GET", requireAuth: true }),
  messageInstructor: (courseId: string) => apiClient<ApiResponse<RoomRecord>>(`/api/v1/room/course/${encodeURIComponent(courseId)}/instructor`, { method: "POST", requireAuth: true }),
  list: () =>
    apiClient<ApiResponse<RoomRecord[]>>("/api/v1/room", {
      method: "GET",
      requireAuth: true,
    }),

  createGroup: (formData: FormData) =>
    apiClient<ApiResponse<RoomRecord>>("/api/v1/room", {
      method: "POST",
      body: formData,
      requireAuth: true,
    }),

  createDM: (otherUserId: string) =>
    apiClient<ApiResponse<RoomRecord>>("/api/v1/room/dm", {
      method: "POST",
      body: JSON.stringify({ otherUserId }),
      requireAuth: true,
    }),

  createCourseRoom: (courseId: string) =>
    apiClient<ApiResponse<RoomRecord>>(`/api/v1/room/course/${courseId}`, {
      method: "POST",
      requireAuth: true,
    }),
};
