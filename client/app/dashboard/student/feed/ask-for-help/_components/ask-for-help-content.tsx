"use client";

import { useMemo, useState } from "react";
import { CircleHelp, CircleCheck, Clock, Plus } from "lucide-react";
import { useGetAskForHelpQuestions } from "@/hooks/api/use-ask-for-help";
import { useAuthStore } from "@/store/auth.store";
import { mapQuestionRecordToQuestionData } from "./question-data";
import { QuestionPost } from "./question-post";
import { AskQuestionModal } from "./ask-question-modal";

interface AskForHelpCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
}

const AskForHelpCard = ({
  title,
  value,
  icon,
  iconBg,
  iconColor,
}: AskForHelpCardProps) => {
  return (
    <div className="bg-white p-5 rounded-2xl border border-gray-200/60 flex items-start justify-between min-w-[260px] sm:min-w-[280px] lg:min-w-0 flex-1 shrink-0 snap-start hover:border-gray-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300">
      <div className="flex flex-col gap-3">
        <span className="text-gray-500 font-medium text-sm sm:text-base tracking-tight">
          {title}
        </span>
        <span className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight leading-none">
          {value}
        </span>
      </div>
      <div
        className={`p-2.5 rounded-xl ${iconBg} ${iconColor} flex items-center justify-center shrink-0`}
      >
        {icon}
      </div>
    </div>
  );
};

export const AskForHelpContent = () => {
  const user = useAuthStore((state) => state.user);
  const { data, isLoading, isError } = useGetAskForHelpQuestions({ limit: 100 });
  const [isAskModalOpen, setIsAskModalOpen] = useState(false);

  const questions = useMemo(
    () => (data?.data ?? []).map((q) => mapQuestionRecordToQuestionData(q, user?._id)),
    [data, user?._id],
  );

  const solvedCount = questions.filter((q) => q.resolved).length;

  return (
    <div className="flex flex-col gap-6">
      {/* Ask for help cards */}
      <div className="flex overflow-x-auto gap-4 pb-4 px-4 lg:px-0 lg:grid lg:grid-cols-3 snap-x snap-proximity hide-scrollbar">
        <AskForHelpCard
          title="Total Questions"
          value={questions.length}
          icon={<CircleHelp className="w-6 h-6" />}
          iconBg="bg-[#FDF0EA]"
          iconColor="text-[#F86432]"
        />
        <AskForHelpCard
          title="Solved"
          value={solvedCount}
          icon={<CircleCheck className="w-6 h-6" />}
          iconBg="bg-[#EAF7EC]"
          iconColor="text-[#2E7D32]"
        />
        <AskForHelpCard
          title="Awaiting Help"
          value={questions.length - solvedCount}
          icon={<Clock className="w-6 h-6" />}
          iconBg="bg-[#EBF0FF]"
          iconColor="text-[#3F51B5]"
        />
      </div>

      {/* Ask a question button */}
      <div className="px-4 lg:px-0">
        <button
          onClick={() => setIsAskModalOpen(true)}
          className="flex items-center gap-2 bg-[#F86432] hover:bg-[#F86432]/90 text-white font-semibold px-5 py-3 rounded-xl transition-colors"
        >
          <Plus className="w-4 h-4" />
          Ask a question
        </button>
      </div>

      {/* Questions */}
      {isLoading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      ) : isError ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
          Failed to load questions. Please try again.
        </div>
      ) : questions.length === 0 ? (
        <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
          No questions yet. Be the first to ask for help!
        </div>
      ) : (
        <div className="flex flex-col gap-6">
          {questions.map((question) => (
            <QuestionPost key={question.id} question={question} currentUserId={user?._id} />
          ))}
        </div>
      )}

      <AskQuestionModal
        isOpen={isAskModalOpen}
        onClose={() => setIsAskModalOpen(false)}
      />
    </div>
  );
};
