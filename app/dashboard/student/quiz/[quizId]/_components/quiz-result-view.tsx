import { CheckCircle2, Calendar, Clock, Trophy, ChevronLeft } from "lucide-react";
import { QuizRecord, SubmitQuizResponse } from "@/lib/api/endpoints/quiz";

interface QuizResultViewProps {
  quiz: QuizRecord;
  result: SubmitQuizResponse | null;
  startedAt: Date | null;
  completedAt: Date | null;
  onBackToCourse: () => void;
  onReviewQuestions: () => void;
}

const formatDateTime = (date: Date | null) =>
  date
    ? date.toLocaleString(undefined, {
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
      })
    : "—";

const formatDuration = (start: Date | null, end: Date | null) => {
  if (!start || !end) return "—";
  const minutes = Math.max(0, Math.round((end.getTime() - start.getTime()) / 60000));
  return `${minutes} min`;
};

export const QuizResultView = ({
  quiz,
  result,
  startedAt,
  completedAt,
  onBackToCourse,
  onReviewQuestions,
}: QuizResultViewProps) => {
  const totalPoints = result?.totalPoints ?? quiz.totalPoints ?? 0;
  const score = result?.score;
  const percent =
    typeof score === "number" && totalPoints
      ? Math.round((score / totalPoints) * 100)
      : null;

  return (
    <div className="flex flex-col gap-8 w-full max-w-5xl mx-auto">
      {/* Top Banner / Final Grade */}
      <div className="bg-white p-8 md:p-12 rounded-[20px] shadow-none border border-gray-100 flex flex-col items-center justify-center gap-4">
        <div className="w-16 h-16 rounded-full bg-[#E9F7EF] flex items-center justify-center border-2 border-white ring-4 ring-[#E9F7EF]/50">
          <CheckCircle2 className="w-8 h-8 text-[#10B981]" strokeWidth={2} />
        </div>
        <span className="text-gray-600 font-medium text-[15px] mt-2">
          Final Grade
        </span>
        <div className="flex items-end gap-2 text-gray-900">
          <span className="text-[48px] md:text-[56px] font-bold leading-none tracking-tight">
            {typeof score === "number" ? score : "—"}
          </span>
          <span className="text-[32px] md:text-[40px] font-semibold text-gray-400 mb-1">
            / {totalPoints || "—"}
          </span>
        </div>
        {percent !== null && (
          <span className="text-[#10B981] font-bold text-[16px] md:text-[18px]">
            {percent}%
          </span>
        )}
        {!result?.completed && (
          <div className="flex items-center gap-2 bg-[#FEF4F0] text-[#F97316] px-4 py-1.5 rounded-full font-medium text-[13px] md:text-[14px]">
            Pending Evaluation
          </div>
        )}
      </div>

      {/* Attempt Details */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-1">
          <h3 className="font-semibold text-gray-900 text-[18px] md:text-[20px]">
            Attempt
          </h3>
          <span className="text-gray-600 text-[14px] md:text-[15px]">
            {quiz.allowRetakes ? "Retakes allowed" : "Single attempt only"}
          </span>
        </div>

        <div className="bg-white p-5 md:p-8 rounded-[20px] shadow-none border border-gray-100 flex flex-col md:flex-row gap-6 md:gap-8 justify-between items-start md:items-center">
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 w-full md:w-auto">
            {/* Started */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-[10px] bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                <Calendar className="w-4 h-4 text-gray-500" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[13px] md:text-[14px]">
                  Started
                </span>
                <span className="text-gray-900 font-medium text-[15px] md:text-[16px]">
                  {formatDateTime(startedAt)}
                </span>
              </div>
            </div>

            {/* Completed */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-[10px] bg-[#E9F7EF] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[13px] md:text-[14px]">
                  Completed
                </span>
                <span className="text-gray-900 font-medium text-[15px] md:text-[16px]">
                  {formatDateTime(completedAt)}
                </span>
              </div>
            </div>

            {/* Duration */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-[10px] bg-[#FEF4F0] flex items-center justify-center shrink-0">
                <Clock className="w-4 h-4 text-[#F97316]" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-gray-500 text-[13px] md:text-[14px]">
                  Duration
                </span>
                <span className="text-gray-900 font-medium text-[15px] md:text-[16px]">
                  {formatDuration(startedAt, completedAt)}
                </span>
              </div>
            </div>
          </div>

          {/* Grade Box */}
          <div className="bg-[#FFF5F0] rounded-[16px] p-4 md:p-5 flex items-center gap-4 mt-2 md:mt-0 min-w-[180px] w-full md:w-auto">
            <div className="w-10 h-10 rounded-[10px] bg-[#E9F7EF] flex items-center justify-center shrink-0">
              <Trophy className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500 text-[13px]">Grade</span>
              <span className="text-gray-900 font-bold text-[20px] md:text-[22px] leading-tight">
                {typeof score === "number" ? score : "—"} / {totalPoints || "—"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col md:flex-row items-center justify-between mt-2 p-2 gap-4">
        <button
          onClick={onBackToCourse}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-[14px] md:text-[15px] self-start md:self-auto"
        >
          <ChevronLeft className="w-4 h-4" /> Back to Course
        </button>
        <button
          onClick={onReviewQuestions}
          className="w-full md:w-auto px-8 md:px-12 py-3.5 bg-[#F97316] text-white rounded-[12px] font-medium text-[14px] md:text-[15px] hover:bg-[#EA580C] transition-colors"
        >
          Review Questions
        </button>
      </div>
    </div>
  );
};
