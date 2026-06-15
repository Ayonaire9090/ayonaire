import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface UploadLessonPayload {
  title: string;
  module: string;
  course: string;
  order: number;
  duration: number;
  isPublished?: boolean;
  isFreePreview?: boolean;
  isLocked?: boolean;
}

export interface UploadLessonVideoPayload {
  lesson: string;
  videos: string[];
}

export interface UpdateLastLessonPayload {
  courseId: string;
  lessonId: string;
}

export const lessonsApi = {
  upload: (payload: UploadLessonPayload) =>
    apiClient<ApiResponse>("/api/v1/lesson/upload", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  uploadVideo: (payload: UploadLessonVideoPayload) =>
    apiClient<ApiResponse>("/api/v1/lesson/upload-video", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  markCompleted: (lessonId: string) =>
    apiClient<ApiResponse>("/api/v1/lesson/mark-lesson-as-completed", {
      method: "POST",
      body: JSON.stringify({ lessonId }),
      requireAuth: true,
    }),

  updateLastLesson: (payload: UpdateLastLessonPayload) =>
    apiClient<ApiResponse>("/api/v1/lesson/update-last-lesson", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  resumeLastLesson: (courseId: string) =>
    apiClient<ApiResponse>(`/api/v1/lesson/resume-last-lesson?courseId=${courseId}`, {
      method: "GET",
      requireAuth: true,
    }),

  viewContent: (lessonId: string) =>
    apiClient<ApiResponse>(`/api/v1/lesson/view-lesson-content?lessonId=${lessonId}`, {
      method: "GET",
      requireAuth: true,
    }),
};
