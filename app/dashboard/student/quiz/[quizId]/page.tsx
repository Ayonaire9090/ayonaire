"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import {
  ChevronRight,
  Sparkles,
  Star,
} from "lucide-react";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { StudentHomeSidebarContent } from "../../_components/student-home-sidebar-content";
import { useState } from "react";
import { QuizInstructionsView } from "./_components/quiz-instructions-view";
import { TakingQuizView } from "./_components/taking-quiz-view";
import { ReviewQuizView } from "./_components/review-quiz-view";
import { QuizResultView } from "./_components/quiz-result-view";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";

export default function StudentQuizDetailsPage() {
  const [isTakingQuiz, setTakingQuiz] = useState(false);
  const [isReviewing, setReviewing] = useState(false);
  const [showSubmitModal, setShowSubmitModal] = useState(false);
  const [showQuizResult, setShowQuizResult] = useState(false);
  return (
    <>
      <StudentHomeSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6]">
        <div className="px-4">
          <DashboardHeader
            title={
              showQuizResult
                ? "Quiz Result"
                : isReviewing
                ? "Review Your Answers"
                : isTakingQuiz
                ? "AI Engineering Quiz 1"
                : "Quiz Details"
            }
            subTitle={
              showQuizResult ? (
                "Final Assessment: React Patterns"
              ) : isReviewing ? (
                "Please review your progress before final submission. You can go back to any question to change your answer."
              ) : isTakingQuiz ? (
                "Foundational Concepts in Machine Learning"
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
            {showQuizResult ? (
              <QuizResultView />
            ) : isReviewing ? (
              <ReviewQuizView
                onBack={() => setReviewing(false)}
                onSubmit={() => setShowSubmitModal(true)}
              />
            ) : isTakingQuiz ? (
              <TakingQuizView onReview={() => setReviewing(true)} />
            ) : (
              <QuizInstructionsView
                onStartQuiz={() => setTakingQuiz(true)}
                onCancel={() => {}}
              />
            )}

            {/* Submit Modal */}
            <AppSimpleModal
              isOpen={showSubmitModal}
              onClose={() => {
                setShowSubmitModal(false);
                setShowQuizResult(true);
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
                    <span className="text-gray-900 font-medium text-[16px]">AI Engineering Quiz 1</span>
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
                    <span className="text-gray-900 font-medium text-[16px]">Pending Evaluation</span>
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
