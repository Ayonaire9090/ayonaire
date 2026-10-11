import { AskForHelpQuestionRecord } from "@/lib/api/endpoints/ask-for-help";

export interface QuestionAnswerData {
  id?: string;
  authorId: string;
  authorName: string;
  text: string;
  timeAgo: string;
}

export interface QuestionData {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatarUrl?: string;
  authorSubtitle: string;
  textContent: string;
  imageUrl?: string;
  tags: string[];
  resolved: boolean;
  likesCount: number;
  isLikedByMe: boolean;
  sharesCount: number;
  answers: QuestionAnswerData[];
}

export function timeAgo(dateString?: string): string {
  if (!dateString) return "";
  const diffMs = Date.now() - new Date(dateString).getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return "just now";
  if (diffMins < 60) return `${diffMins}m ago`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `${diffHours}h ago`;
  const diffDays = Math.floor(diffHours / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return new Date(dateString).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function mapQuestionRecordToQuestionData(
  question: AskForHelpQuestionRecord,
  currentUserId?: string,
): QuestionData {
  const likes = question.likes ?? [];
  return {
    id: question.id,
    authorId: question.user?.id ?? "",
    authorName: question.user?.name ?? "Unknown User",
    authorAvatarUrl: question.user?.profile?.url,
    authorSubtitle: timeAgo(question.createdAt),
    textContent: question.content,
    imageUrl: question.media?.url,
    tags: question.tags ?? [],
    resolved: question.resolved,
    likesCount: likes.length,
    isLikedByMe: !!currentUserId && likes.includes(currentUserId),
    sharesCount: question.shares ?? 0,
    answers: (question.answers ?? []).map((a) => ({
      id: a.id,
      authorId: a.user?.id ?? "",
      authorName: a.user?.name ?? "Unknown User",
      text: a.text,
      timeAgo: timeAgo(a.createdAt),
    })),
  };
}
