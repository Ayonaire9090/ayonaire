"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { ChevronRight, Star } from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { QuizInstructionsView } from "./_components/quiz-instructions-view";
import { TakingQuizView } from "./_components/taking-quiz-view";
import { ReviewQuizView } from "./_components/review-quiz-view";
import { QuizResultView } from "./_components/quiz-result-view";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { useGetQuizById, useGetQuizQuestions, useSubmitQuizMutation } from "@/hooks/api/use-quiz";
import { SubmitQuizResponse } from "@/lib/api/endpoints/quiz";
import { toast } from "sonner";

type Stage = "instructions" | "taking" | "reviewing" | "result";

export default function StudentQuizDetailsPage() {
  const { quizId } = useParams<{ quizId: string }>();
  const router = useRouter();

  const { data: quizRes, isLoading: isLoadingQuiz } = useGetQuizById(quizId);
  const { data: questionsRes, isLoading: isLoadingQuestions } = useGetQuizQuestions(quizId);
  const submitQuiz = useSubmitQuizMutation();

  const quiz = quizRes?.data;
  const questions = useMemo(() => questionsRes?.questions ?? [], [questionsRes]);

  const [stage, setStage] = useState<Stage>("instructions");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [startedAt, setStartedAt] = useState<Date | null>(null);
  const [completedAt, setCompletedAt] = useState<Date | null>(null);
  const [result, setResult] = useState<SubmitQuizResponse | null>(null);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);

  useEffect(() => {
    if (!startedAt || completedAt) return;
    const interval = setInterval(() => {
      setElapsedSeconds(Math.floor((Date.now() - startedAt.getTime()) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, [startedAt, completedAt]);

  const elapsedLabel = `${String(Math.floor(elapsedSeconds / 60)).padStart(2, "0")}:${String(
    elapsedSeconds % 60
  ).padStart(2, "0")}`;

  const handleSelectOption = (questionId: string, optionId: string, multiple: boolean) => {
    setAnswers((prev) => {
      const current = prev[questionId] ?? [];
      if (multiple) {
        const next = current.includes(optionId)
          ? current.filter((id) => id !== optionId)
          : [...current, optionId];
        return { ...prev, [questionId]: next };
      }
      return { ...prev, [questionId]: [optionId] };
    });
  };

  const handleSubmit = () => {
    submitQuiz.mutate(
      {
        quiz: quizId,
        answers: Object.entries(answers).map(([question, selectedOptions]) => ({
          question,
          selectedOptions,
        })),
      },
      {
        onSuccess: (res) => {
          setResult(res.data ?? null);
          setCompletedAt(new Date());
          setShowSubmitModal(true);
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to submit quiz");
        },
      }
    );
  };

  if (isLoadingQuiz || isLoadingQuestions) {
    return (
      <>
        <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6]">
          <div className="flex flex-1 items-center justify-center p-10 text-gray-500">
            Loading quiz...
          </div>
        </SidebarInset>
      </>
    );
  }

  if (!quiz) {
    return (
      <>
        <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
        <SidebarInset className="bg-[#F6F6F6]">
          <div className="flex flex-1 items-center justify-center p-10 text-gray-500">
            Quiz not found.
          </div>
        </SidebarInset>
      </>
    );
  }

  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <div className="px-4">
          <DashboardHeader
            title={
              stage === "result"
                ? "Quiz Result"
                : stage === "reviewing"
                ? "Review Your Answers"
                : stage === "taking"
                ? quiz.title
                : "Quiz Details"
            }
            subTitle={
              stage === "result" ? (
                `Final Assessment: ${quiz.title}`
              ) : stage === "reviewing" ? (
                "Please review your progress before final submission. You can go back to any question to change your answer."
              ) : stage === "taking" ? (
                quiz.course?.title ?? ""
              ) : (
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="flex items-center gap-1 text-gray-500">
                    Dashboard <ChevronRight className="size-3" />
                  </span>
                  <span className="flex items-center gap-1 text-gray-500">
                    Assessments <ChevronRight className="size-3" />
                  </span>
                  <span className="text-gray-500">Quiz Details</span>
                </div>
              )
            }
          />
        </div>
        <div className="flex flex-1 flex-col lg:p-6 pb-24 md:pb-6">
          <div className="@container/main flex flex-1 flex-col gap-6 w-full max-w-5xl mx-auto">
            {stage === "result" ? (
              <QuizResultView
                quiz={quiz}
                result={result}
                startedAt={startedAt}
                completedAt={completedAt}
                onBackToCourse={() => router.back()}
                onReviewQuestions={() => setStage("reviewing")}
              />
            ) : stage === "reviewing" ? (
              <ReviewQuizView
                questions={questions}
                answers={answers}
                isSubmitting={submitQuiz.isPending}
                onGoTo={(i) => {
                  setCurrentIndex(i);
                  setStage("taking");
                }}
                onBack={() => setStage("taking")}
                onSubmit={handleSubmit}
              />
            ) : stage === "taking" ? (
              <TakingQuizView
                questions={questions}
                currentIndex={currentIndex}
                answers={answers}
                elapsedLabel={elapsedLabel}
                onSelectOption={handleSelectOption}
                onGoTo={setCurrentIndex}
                onNext={() => setCurrentIndex((i) => Math.min(i + 1, questions.length - 1))}
                onPrev={() => setCurrentIndex((i) => Math.max(i - 1, 0))}
                onReview={() => setStage("reviewing")}
              />
            ) : (
              <QuizInstructionsView
                quiz={quiz}
                onStartQuiz={() => {
                  setStartedAt(new Date());
                  setStage("taking");
                }}
                onCancel={() => router.back()}
              />
            )}

            {/* Submit Modal */}
            <AppSimpleModal
              isOpen={showSubmitModal}
              onClose={() => {
                setShowSubmitModal(false);
                setStage("result");
              }}
              title="Quiz Submitted Successfully"
            >
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex items-center gap-3 p-5 rounded-[16px] border border-gray-100 bg-[#FAFAFA]">
                  <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[14px]">Assessment:</span>
                    <span className="text-gray-900 font-medium text-[16px]">{quiz.title}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-5 rounded-[16px] border border-gray-100 bg-[#FAFAFA]">
                  <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[14px]">Status:</span>
                    <span className="text-gray-900 font-medium text-[16px]">Submitted</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-5 rounded-[16px] border border-gray-100 bg-[#FAFAFA]">
                  <div className="w-8 h-8 rounded-full bg-[#F97316] flex items-center justify-center shrink-0">
                    <Star className="w-4 h-4 text-white fill-white" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-gray-500 text-[14px]">Marks:</span>
                    <span className="text-gray-900 font-medium text-[16px]">
                      {result?.completed ? `${result.score ?? "—"} / ${result.totalPoints ?? quiz.totalPoints ?? "—"}` : "Pending Evaluation"}
                    </span>
                  </div>
                </div>
              </div>
            </AppSimpleModal>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
