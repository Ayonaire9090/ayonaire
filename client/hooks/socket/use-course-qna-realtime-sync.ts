"use client";

import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import {
  joinCourseQna,
  leaveCourseQna,
} from "@/lib/socket/course-qna-socket";
import { getMessagingSocket } from "@/lib/socket/messaging-socket";
import { queryKeys } from "@/lib/api/query-keys";
import { ApiResponse } from "@/lib/api/types";
import { CourseQuestion } from "@/lib/api/endpoints/course-interactions";

type QuestionsResult = { questions: CourseQuestion[] };

const upsertQuestion = (
  old: ApiResponse<QuestionsResult> | undefined,
  question: CourseQuestion,
) => {
  if (!old?.data) return old;
  const exists = old.data.questions.some((item) => item.id === question.id);
  const questions = exists
    ? old.data.questions.map((item) =>
        item.id === question.id ? question : item,
      )
    : [question, ...old.data.questions];
  return { ...old, data: { ...old.data, questions } };
};

export function useCourseQnaRealtimeSync(courseId: string, lessonId?: string) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!courseId) return;

    const socket = getMessagingSocket();
    joinCourseQna(courseId, lessonId);

    const handleQuestionChange = (question: CourseQuestion) => {
      if (question.course !== courseId) return;
      if (lessonId && question.lesson !== lessonId) return;

      queryClient.setQueryData<ApiResponse<QuestionsResult>>(
        queryKeys.courseInteractions.questions(courseId, lessonId),
        (old) => upsertQuestion(old, question),
      );
    };

    socket.on("course-question:new", handleQuestionChange);
    socket.on("course-question:update", handleQuestionChange);

    return () => {
      leaveCourseQna(courseId, lessonId);
      socket.off("course-question:new", handleQuestionChange);
      socket.off("course-question:update", handleQuestionChange);
    };
  }, [courseId, lessonId, queryClient]);
}
