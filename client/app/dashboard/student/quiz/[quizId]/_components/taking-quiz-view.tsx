import { Clock, ChevronLeft, ChevronRight, HelpCircle } from "lucide-react";
import { QuizQuestion } from "@/lib/api/endpoints/quiz";

interface TakingQuizViewProps {
  questions: QuizQuestion[];
  currentIndex: number;
  answers: Record<string, string[]>;
  elapsedLabel: string;
  onSelectOption: (questionId: string, optionId: string, multiple: boolean) => void;
  onGoTo: (index: number) => void;
  onNext: () => void;
  onPrev: () => void;
  onReview: () => void;
}

export const TakingQuizView = ({
  questions,
  currentIndex,
  answers,
  elapsedLabel,
  onSelectOption,
  onGoTo,
  onNext,
  onPrev,
  onReview,
}: TakingQuizViewProps) => {
  const question = questions[currentIndex];
  const selected = (question && answers[question._id]) || [];

  if (!question) return null;

  return (
    <div className="bg-white p-4 md:p-8 rounded-none md:rounded-[20px] w-full flex flex-col gap-6 md:gap-10 shadow-none border border-transparent md:border-gray-100">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
        {/* Left Column (Question Area) */}
        <div className="w-full md:w-3/5 flex flex-col gap-6 md:gap-8">
          {/* Header */}
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-gray-900 font-semibold text-[16px] md:text-[18px]">
              Question {currentIndex + 1} of {questions.length}
            </h2>
            <div className="flex flex-col items-center justify-center bg-[#FEF4F0] text-gray-900 px-4 py-2 rounded-[12px] self-end md:self-auto">
              <div className="flex items-center gap-1.5 text-gray-500 text-[11px] md:text-[12px]">
                <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                Time Elapsed
              </div>
              <span className="font-bold text-[16px] md:text-[18px] leading-tight">
                {elapsedLabel}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <p className="text-gray-900 font-medium text-[15px] md:text-[16px]">
            {question.question}
          </p>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {question.options.map((opt) => {
              const isSelected = selected.includes(opt._id);
              return (
                <div
                  key={opt._id}
                  onClick={() =>
                    onSelectOption(question._id, opt._id, !!question.multipleCorrectAnswer)
                  }
                  className="flex items-center gap-3 p-4 rounded-[12px] border border-gray-100 bg-[#F9F9F9] cursor-pointer hover:bg-gray-50 transition-colors"
                >
                  <div
                    className={`w-5 h-5 shrink-0 flex items-center justify-center border-[1.5px] ${
                      question.multipleCorrectAnswer ? "rounded-[6px]" : "rounded-full"
                    } ${isSelected ? "border-gray-900" : "border-gray-400"}`}
                  >
                    {isSelected && (
                      <div
                        className={`bg-gray-900 ${
                          question.multipleCorrectAnswer ? "w-3 h-3 rounded-[3px]" : "w-2.5 h-2.5 rounded-full"
                        }`}
                      />
                    )}
                  </div>
                  <span className="text-gray-600 text-[14px] md:text-[15px]">
                    {opt.text}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 md:mt-4 gap-4">
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start px-2 md:px-0">
              <button
                onClick={onPrev}
                disabled={currentIndex === 0}
                className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium text-[14px] md:text-[15px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-4 h-4" /> Prev.
              </button>
              <button
                onClick={onNext}
                disabled={currentIndex === questions.length - 1}
                className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium text-[14px] md:text-[15px] disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column (Question Navigator) */}
        <div className="w-full md:w-2/5 flex flex-col gap-6 pt-6 md:pt-0 border-t border-gray-100 md:border-none">
          <h3 className="font-semibold text-gray-900 text-[16px] md:text-[18px]">
            Question Navigator
          </h3>

          {/* Navigator Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {questions.map((q, i) => {
              const isAnswered = (answers[q._id]?.length ?? 0) > 0;
              const isCurrent = i === currentIndex;

              let bgClass = "bg-[#F6F6F6] text-gray-900";
              if (isAnswered) bgClass = "bg-[#10B981] text-white";
              if (isCurrent) bgClass = "bg-[#F97316] text-white";

              return (
                <div
                  key={q._id}
                  onClick={() => onGoTo(i)}
                  className={`flex flex-col items-center justify-center py-2 md:py-2.5 rounded-[8px] cursor-pointer hover:opacity-90 ${bgClass}`}
                >
                  <span className="text-[10px] md:text-[11px] opacity-90">
                    Question
                  </span>
                  <span className="text-[18px] md:text-[20px] font-bold leading-tight">
                    {i + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-3 mt-2">
            <h4 className="font-medium text-gray-900 text-[14px] md:text-[15px]">
              Legend
            </h4>
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-6 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-[4px] bg-[#10B981]" />
                <span className="text-gray-600 text-[12px] md:text-[13px]">
                  Answered
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-[4px] bg-[#F97316]" />
                <span className="text-gray-600 text-[12px] md:text-[13px]">
                  Current
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3.5 h-3.5 rounded-[4px] bg-[#F6F6F6] border border-gray-200" />
                <span className="text-gray-600 text-[12px] md:text-[13px]">
                  Not Answered
                </span>
              </div>
            </div>
          </div>

          {/* Submit Quiz */}
          <button
            onClick={onReview}
            className="w-full py-3 md:py-3.5 bg-[#F97316] text-white rounded-[10px] font-medium text-[14px] md:text-[15px] hover:bg-[#EA580C] transition-colors mt-4 md:mt-2"
          >
            Review & Submit
          </button>

          {/* Need Help */}
          <div className="bg-[#FEF4F0] p-4 md:p-5 rounded-[12px] md:rounded-[16px] flex flex-col gap-2 mt-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#E9F7EF] rounded-full p-1">
                <HelpCircle className="w-4 h-4 text-[#10B981]" />
              </div>
              <span className="font-semibold text-gray-900 text-[14px] md:text-[15px]">
                Need Help?
              </span>
            </div>
            <p className="text-gray-600 text-[13px] md:text-[14px] leading-relaxed">
              If you encounter any technical issues during the assessment,
              please contact our support team immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
