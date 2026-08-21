import { getMessagingSocket } from "./messaging-socket";

export const joinCourseQna = (courseId: string, lessonId?: string) => {
  getMessagingSocket().emit("course:qna:join", { courseId, lessonId });
};

export const leaveCourseQna = (courseId: string, lessonId?: string) => {
  getMessagingSocket().emit("course:qna:leave", { courseId, lessonId });
};
