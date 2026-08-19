import { apiClient } from "../client";
import { ApiResponse } from "../types";

export interface CourseInteractionUser {
  id: string;
  name: string;
  profile?: { url: string; publicId: string } | null;
}

export interface CourseQuestionAnswer {
  id: string;
  text: string;
  author: CourseInteractionUser;
  createdAt: string;
}

export interface CourseQuestion {
  id: string;
  title: string;
  details: string;
  course: string;
  lesson: string | null;
  author: CourseInteractionUser;
  upvotes: string[];
  upvoteCount: number;
  commentCount: number;
  answers: CourseQuestionAnswer[];
  createdAt: string;
  updatedAt: string;
}

export interface CourseReview {
  id: string;
  rating: number;
  content: string;
  author: CourseInteractionUser;
  createdAt: string;
}

export interface CourseReviewsResponse {
  averageRating: number;
  totalReviews: number;
  ratingStats: { stars: number; count: number; percentage: number }[];
  reviews: CourseReview[];
}

export interface TranscriptionSection {
  _id?: string;
  title: string;
  progress?: string;
  duration?: string;
  content: string;
}

export interface LearningReminder {
  _id: string;
  course: string;
  user: string;
  name?: string;
  frequency: "Daily" | "Weekly" | "Once";
  time: string;
  calendarProvider: "google" | "apple" | "none";
  createdAt: string;
}

export const courseInteractionsApi = {
  getQuestions: (courseId: string, lessonId?: string) => {
    const qs = lessonId ? `?lessonId=${lessonId}` : "";
    return apiClient<ApiResponse<{ questions: CourseQuestion[] }>>(
      `/api/v1/course-interactions/${courseId}/questions${qs}`,
      { method: "GET", requireAuth: true },
    );
  },

  createQuestion: (payload: {
    courseId: string;
    lessonId?: string;
    title: string;
    details: string;
  }) =>
    apiClient<ApiResponse<CourseQuestion>>(
      `/api/v1/course-interactions/${payload.courseId}/questions`,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify({
          lessonId: payload.lessonId,
          title: payload.title,
          details: payload.details,
        }),
      },
    ),

  answerQuestion: (payload: { questionId: string; text: string }) =>
    apiClient<ApiResponse<CourseQuestion>>(
      `/api/v1/course-interactions/questions/${payload.questionId}/answers`,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify({ text: payload.text }),
      },
    ),

  upvoteQuestion: (questionId: string) =>
    apiClient<ApiResponse<{ upvoted: boolean }>>(
      `/api/v1/course-interactions/questions/${questionId}/upvote`,
      { method: "POST", requireAuth: true },
    ),

  getReviews: (courseId: string) =>
    apiClient<ApiResponse<CourseReviewsResponse>>(
      `/api/v1/course-interactions/${courseId}/reviews`,
      { method: "GET", requireAuth: true },
    ),

  createReview: (payload: { courseId: string; rating: number; content: string }) =>
    apiClient<ApiResponse<CourseReviewsResponse>>(
      `/api/v1/course-interactions/${payload.courseId}/reviews`,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify({
          rating: payload.rating,
          content: payload.content,
        }),
      },
    ),

  getTranscription: (courseId: string, lessonId: string) =>
    apiClient<ApiResponse<{ sections: TranscriptionSection[] }>>(
      `/api/v1/course-interactions/${courseId}/lessons/${lessonId}/transcription`,
      { method: "GET", requireAuth: true },
    ),

  getReminders: (courseId: string) =>
    apiClient<ApiResponse<{ reminders: LearningReminder[] }>>(
      `/api/v1/course-interactions/${courseId}/reminders`,
      { method: "GET", requireAuth: true },
    ),

  createReminder: (payload: {
    courseId: string;
    name?: string;
    frequency: "Daily" | "Weekly" | "Once";
    time: string;
    calendarProvider: "google" | "apple" | "none";
  }) =>
    apiClient<ApiResponse<LearningReminder>>(
      `/api/v1/course-interactions/${payload.courseId}/reminders`,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify(payload),
      },
    ),

  askAssistant: (payload: {
    courseId: string;
    lessonId?: string;
    question: string;
  }) =>
    apiClient<ApiResponse<{ answer: string; suggestions: string[] }>>(
      `/api/v1/course-interactions/${payload.courseId}/assistant`,
      {
        method: "POST",
        requireAuth: true,
        body: JSON.stringify({
          lessonId: payload.lessonId,
          question: payload.question,
        }),
      },
    ),
};
