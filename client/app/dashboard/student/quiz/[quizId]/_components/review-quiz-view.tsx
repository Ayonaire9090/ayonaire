import { CheckCircle2, HelpCircle, XCircle, Check, ChevronLeft } from "lucide-react";
import { QuizQuestion } from "@/lib/api/endpoints/quiz";

interface ReviewQuizViewProps {
  questions: QuizQuestion[];
  answers: Record<string, string[]>;
  isSubmitting: boolean;
  onGoTo: (index: number) => void;
  onBack: () => void;
  onSubmit: () => void;
}

export const ReviewQuizView = ({
  questions,
  answers,
  isSubmitting,
  onGoTo,
  onBack,
  onSubmit,
}: ReviewQuizViewProps) => {
  const total = questions.length;
  const answeredCount = questions.filter((q) => (answers[q._id]?.length ?? 0) > 0).length;
  const unansweredCount = total - answeredCount;

  return (
    <div className="flex flex-col gap-6 md:gap-8 w-full max-w-5xl mx-auto">
      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-5 md:p-6 rounded-[16px] md:rounded-[20px] shadow-none flex flex-col items-center justify-center gap-2 border border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-[8px] bg-[#FEF4F0] flex items-center justify-center">
              <HelpCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#F97316]" />
            </div>
            <span className="text-gray-500 text-[14px] md:text-[15px]">Total Questions</span>
          </div>
          <span className="text-[24px] md:text-[28px] font-bold text-[#0084FF]">{total}</span>
        </div>

        <div className="bg-white p-5 md:p-6 rounded-[16px] md:rounded-[20px] shadow-none flex flex-col items-center justify-center gap-2 border border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-[8px] bg-[#E9F7EF] flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#10B981]" />
            </div>
            <span className="text-gray-500 text-[14px] md:text-[15px]">Answered</span>
          </div>
          <span className="text-[24px] md:text-[28px] font-bold text-[#10B981]">{answeredCount}</span>
        </div>

        <div className="col-span-2 md:col-span-1 bg-white p-5 md:p-6 rounded-[16px] md:rounded-[20px] shadow-none flex flex-col items-center justify-center gap-2 border border-gray-100">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 md:w-8 md:h-8 rounded-[8px] bg-[#FEF2F2] flex items-center justify-center">
              <XCircle className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#EF4444]" />
            </div>
            <span className="text-gray-500 text-[14px] md:text-[15px]">Unanswered</span>
          </div>
          <span className="text-[24px] md:text-[28px] font-bold text-[#EF4444]">{unansweredCount}</span>
        </div>
      </div>

      {/* Navigator Box */}
      <div className="bg-white p-5 md:p-8 rounded-[16px] md:rounded-[20px] shadow-none border border-gray-100 flex flex-col gap-6">
        <h3 className="font-semibold text-gray-900 text-[16px] md:text-[18px]">
          Question Navigator
        </h3>
        <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
          {questions.map((q, i) => {
            const answered = (answers[q._id]?.length ?? 0) > 0;
            return (
              <div
                key={q._id}
                onClick={() => onGoTo(i)}
                className={`relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-[12px] md:rounded-[16px] border cursor-pointer ${
                  answered ? "bg-[#E9F7EF] border-[#A7F3D0]" : "bg-[#F6F6F6] border-gray-200"
                }`}
              >
                <span
                  className={`text-[20px] md:text-[24px] font-bold ${
                    answered ? "text-gray-700" : "text-gray-400"
                  }`}
                >
                  {i + 1}
                </span>
                {answered && (
                  <div className="absolute -top-1.5 -right-1.5 w-4 h-4 md:w-5 md:h-5 bg-[#10B981] rounded-full flex items-center justify-center border-[1.5px] border-white">
                    <Check className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" strokeWidth={3} />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-6 pt-6 border-t border-gray-100 gap-5">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium text-[14px] md:text-[15px] self-start md:self-auto"
          >
            <ChevronLeft className="w-4 h-4" /> Back to Questions
          </button>

          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 w-full md:w-auto justify-end">
            {unansweredCount > 0 && (
              <div className="flex items-center gap-2 text-[#F97316] text-[13px] md:text-[14px] font-medium bg-[#FFF5F0] px-3.5 py-1.5 rounded-full">
                <CheckCircle2 className="w-4 h-4" /> {unansweredCount} question{unansweredCount === 1 ? "" : "s"} remaining
              </div>
            )}
            <button
              onClick={onSubmit}
              disabled={isSubmitting}
              className="w-full md:w-auto px-10 py-3.5 bg-[#F97316] text-white rounded-[10px] md:rounded-[12px] font-medium text-[14px] md:text-[15px] hover:bg-[#EA580C] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Quiz"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
