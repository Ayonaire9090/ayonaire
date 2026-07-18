import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface ResumeLessonInfo {
  lessonId: string | null;
}

export interface LessonVideo {
  title: string;
  url: string;
  publicId: string;
  duration: number;
}

export interface LessonMaterial {
  name: string;
  url: string;
  publicId: string;
}

export interface LessonWithProgress {
  _id: string;
  title: string;
  module: string;
  course: string;
  order: number;
  duration?: number;
  isPublished: boolean;
  isFreePreview: boolean;
  isLocked: boolean;
  videos: LessonVideo[];
  materials: LessonMaterial[];
  isCompleted: boolean;
}

export interface ModuleWithLessons {
  _id: string;
  title: string;
  description: string;
  course: string;
  order: number;
  lessons: LessonWithProgress[];
}

export interface CourseContent {
  modules: ModuleWithLessons[];
  progress: number;
  lastLesson: string | null;
}

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
  lessonId: string;
  videos: { title: string; file: File }[];
}

export interface UpdateLastLessonPayload {
  courseId: string;
  lessonId: string;
}

export interface MarkLessonCompletedPayload {
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

  uploadVideo: (payload: UploadLessonVideoPayload) => {
    const formData = new FormData();
    formData.append("lessonId", payload.lessonId);
    payload.videos.forEach((video) => {
      formData.append("titles", video.title);
      formData.append("videos", video.file);
    });

    return apiClient<ApiResponse>("/api/v1/lesson/upload-video", {
      method: "POST",
      body: formData,
      requireAuth: true,
    });
  },

  markCompleted: ({ courseId, lessonId }: MarkLessonCompletedPayload) =>
    apiClient<ApiResponse>("/api/v1/lesson/mark-lesson-as-completed", {
      method: "POST",
      body: JSON.stringify({ courseId, lessonId }),
      requireAuth: true,
    }),

  updateLastLesson: (payload: UpdateLastLessonPayload) =>
    apiClient<ApiResponse>("/api/v1/lesson/update-last-lesson", {
      method: "POST",
      body: JSON.stringify(payload),
      requireAuth: true,
    }),

  resumeLastLesson: (courseId: string) =>
    apiClient<ApiResponse<ResumeLessonInfo>>(
      `/api/v1/lesson/resume-last-lesson?courseId=${courseId}`,
      {
        method: "GET",
        requireAuth: true,
      },
    ),

  // Despite the "view-lesson-content" endpoint name, it's keyed by courseId
  // and returns the whole module/lesson tree for that course (each lesson
  // flagged with isCompleted) - not a single lesson's content.
  getCourseContent: (courseId: string) =>
    apiClient<ApiResponse<CourseContent>>(
      `/api/v1/lesson/view-lesson-content?courseId=${courseId}`,
      {
        method: "GET",
        requireAuth: true,
      },
    ),
};
