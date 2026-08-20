"use client";

import { useMemo, useState } from "react";
import { ArrowUp, MessageCircle, Search, Send } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  useAnswerCourseQuestionMutation,
  useCourseQuestions,
  useCreateCourseQuestionMutation,
  useUpvoteCourseQuestionMutation,
} from "@/hooks/api/use-course-interactions";
import { CourseQuestion } from "@/lib/api/endpoints/course-interactions";

interface CourseQAndAProps {
  courseId: string;
  lessonId?: string;
}

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const CourseQAndA = ({ courseId, lessonId }: CourseQAndAProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedQuestion, setSelectedQuestion] =
    useState<CourseQuestion | null>(null);
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [answer, setAnswer] = useState("");

  const { data, isLoading, isError } = useCourseQuestions(courseId, lessonId);
  const createQuestion = useCreateCourseQuestionMutation();
  const answerQuestion = useAnswerCourseQuestionMutation(courseId, lessonId);
  const upvoteQuestion = useUpvoteCourseQuestionMutation(courseId, lessonId);

  const questions = data?.data?.questions ?? [];
  const visibleQuestions = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return questions.filter(
      (question) =>
        question.title.toLowerCase().includes(query) ||
        question.details.toLowerCase().includes(query) ||
        question.author.name.toLowerCase().includes(query),
    );
  }, [questions, searchQuery]);

  const handleCreateQuestion = () => {
    if (!title.trim() || !details.trim()) return;
    createQuestion.mutate(
      { courseId, lessonId, title, details },
      {
        onSuccess: () => {
          setTitle("");
          setDetails("");
        },
      },
    );
  };

  const handleAnswer = () => {
    if (!selectedQuestion || !answer.trim()) return;
    answerQuestion.mutate(
      { questionId: selectedQuestion.id, text: answer },
      {
        onSuccess: (response) => {
          setSelectedQuestion(response.data ?? selectedQuestion);
          setAnswer("");
        },
      },
    );
  };

  if (selectedQuestion) {
    return (
      <div className="w-full pb-20 flex flex-col gap-6">
        <Button
          variant="ghost"
          onClick={() => setSelectedQuestion(null)}
          className="w-fit px-0 hover:bg-transparent"
        >
          Back to questions
        </Button>

        <QuestionCard
          question={selectedQuestion}
          onOpen={() => undefined}
          onUpvote={() => upvoteQuestion.mutate(selectedQuestion.id)}
        />

        <div className="flex flex-col gap-4">
          {selectedQuestion.answers.map((item) => (
            <div key={item.id} className="flex gap-3 rounded-xl border border-gray-100 p-4">
              <Avatar className="size-10">
                <AvatarImage src={item.author.profile?.url} />
                <AvatarFallback>{initials(item.author.name)}</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-medium text-gray-900">{item.author.name}</div>
                <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Input
            value={answer}
            onChange={(event) => setAnswer(event.target.value)}
            placeholder="Add an answer"
            className="h-12 rounded-xl"
          />
          <Button
            onClick={handleAnswer}
            disabled={!answer.trim() || answerQuestion.isPending}
            className="h-12 rounded-xl bg-[#F86432] hover:bg-[#F86432]/90"
          >
            <Send className="size-4" />
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full pb-20 flex flex-col gap-6">
      <div className="relative w-full">
        <Search className="absolute left-3 top-1/2 size-5 -translate-y-1/2 text-gray-400" />
        <Input
          placeholder="Search questions"
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          className="w-full pl-10 py-6 rounded-xl border-gray-200 text-base"
        />
      </div>

      <div className="rounded-xl border border-gray-100 p-4 flex flex-col gap-3">
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          placeholder="Question title"
          className="h-11 rounded-xl"
        />
        <textarea
          value={details}
          onChange={(event) => setDetails(event.target.value)}
          placeholder="Add details"
          className="min-h-[120px] rounded-xl border border-gray-200 p-3 text-sm outline-none focus:ring-1 focus:ring-[#F86432]"
        />
        <Button
          onClick={handleCreateQuestion}
          disabled={!title.trim() || !details.trim() || createQuestion.isPending}
          className="ml-auto bg-[#F86432] hover:bg-[#F86432]/90"
        >
          Publish Question
        </Button>
      </div>

      {isLoading ? (
        <div className="py-16 text-center text-gray-500">Loading questions...</div>
      ) : isError ? (
        <div className="py-16 text-center text-red-500">Failed to load questions.</div>
      ) : visibleQuestions.length === 0 ? (
        <div className="py-16 text-center text-gray-500">
          No questions have been asked for this lesson yet.
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          {visibleQuestions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onOpen={() => setSelectedQuestion(question)}
              onUpvote={() => upvoteQuestion.mutate(question.id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function QuestionCard({
  question,
  onOpen,
  onUpvote,
}: {
  question: CourseQuestion;
  onOpen: () => void;
  onUpvote: () => void;
}) {
  return (
    <div className="border border-gray-100 rounded-xl p-5 hover:border-gray-200 transition-colors">
      <div className="flex gap-4">
        <Avatar className="size-12">
          <AvatarImage src={question.author.profile?.url} />
          <AvatarFallback>{initials(question.author.name)}</AvatarFallback>
        </Avatar>
        <button onClick={onOpen} className="flex-1 text-left">
          <h5 className="font-medium text-gray-900 text-base mb-1">
            {question.title}
          </h5>
          <p className="text-gray-500 text-sm line-clamp-2">{question.details}</p>
          <div className="mt-3 text-xs text-gray-500 font-medium">
            <span className="text-black">{question.author.name}</span>
          </div>
        </button>
        <div className="flex flex-col items-center gap-2 shrink-0">
          <button
            onClick={onUpvote}
            className="flex items-center gap-1.5 font-medium text-gray-700"
          >
            <span className="text-sm">{question.upvoteCount}</span>
            <ArrowUp className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-1.5 font-medium text-gray-700">
            <span className="text-sm">{question.commentCount}</span>
            <MessageCircle className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
