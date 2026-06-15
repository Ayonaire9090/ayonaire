import {
  Clock,
  ChevronLeft,
  ChevronRight,
  HelpCircle,
} from "lucide-react";

interface TakingQuizViewProps {
  onReview: () => void;
}

export const TakingQuizView = ({ onReview }: TakingQuizViewProps) => {
  return (
    <div className="bg-white p-4 md:p-8 rounded-none md:rounded-[20px] w-full flex flex-col gap-6 md:gap-10 shadow-none border border-transparent md:border-gray-100">
      <div className="flex flex-col md:flex-row gap-6 md:gap-10 w-full">
        {/* Left Column (Question Area) */}
        <div className="w-full md:w-3/5 flex flex-col gap-6 md:gap-8">
          {/* Header */}
          <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
            <h2 className="text-gray-900 font-semibold text-[16px] md:text-[18px]">
              Question 3 of 20
            </h2>
            <div className="flex flex-col items-center justify-center bg-[#FEF4F0] text-gray-900 px-4 py-2 rounded-[12px] self-end md:self-auto">
              <div className="flex items-center gap-1.5 text-gray-500 text-[11px] md:text-[12px]">
                <Clock className="w-3.5 h-3.5 text-[#F97316]" />
                Time Remaining
              </div>
              <span className="font-bold text-[16px] md:text-[18px] leading-tight">
                15:23
              </span>
            </div>
          </div>

          {/* Question Text */}
          <p className="text-gray-900 font-medium text-[15px] md:text-[16px]">
            What is supervised learning?
          </p>

          {/* Options */}
          <div className="flex flex-col gap-3">
            {[
              {
                id: "1",
                text: "A machine learning method using labeled data",
                selected: false,
              },
              { id: "2", text: "A type of database", selected: true },
              { id: "3", text: "A programming language", selected: false },
              { id: "4", text: "None of the above", selected: false },
            ].map((opt) => (
              <div
                key={opt.id}
                className="flex items-center gap-3 p-4 rounded-[12px] border border-gray-100 bg-[#F9F9F9] cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center shrink-0 ${
                    opt.selected ? "border-gray-900" : "border-gray-400"
                  }`}
                >
                  {opt.selected && (
                    <div className="w-2.5 h-2.5 bg-gray-900 rounded-full" />
                  )}
                </div>
                <span className="text-gray-600 text-[14px] md:text-[15px]">
                  {opt.text}
                </span>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between mt-2 md:mt-4 gap-4">
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-start px-2 md:px-0">
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium text-[14px] md:text-[15px]">
                <ChevronLeft className="w-4 h-4" /> Prev.
              </button>
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-gray-900 font-medium text-[14px] md:text-[15px]">
                Next <ChevronRight className="w-4 h-4" />
              </button>
            </div>
            <button className="w-full md:w-auto px-6 py-2.5 bg-[#F97316] text-white rounded-[10px] font-medium text-[14px] md:text-[15px] hover:bg-[#EA580C] transition-colors">
              Submit Question
            </button>
          </div>
        </div>

        {/* Right Column (Question Navigator) */}
        <div className="w-full md:w-2/5 flex flex-col gap-6 pt-6 md:pt-0 border-t border-gray-100 md:border-none">
          <h3 className="font-semibold text-gray-900 text-[16px] md:text-[18px]">
            Question Navigator
          </h3>

          {/* Navigator Grid */}
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {Array.from({ length: 20 }).map((_, i) => {
              const num = i + 1;
              let state = "not-answered";
              if (num <= 3) state = "answered";
              if (num === 4) state = "current";

              let bgClass = "bg-[#F6F6F6] text-gray-900";
              if (state === "answered") bgClass = "bg-[#10B981] text-white";
              if (state === "current") bgClass = "bg-[#F97316] text-white";

              return (
                <div
                  key={num}
                  className={`flex flex-col items-center justify-center py-2 md:py-2.5 rounded-[8px] cursor-pointer hover:opacity-90 ${bgClass}`}
                >
                  <span className="text-[10px] md:text-[11px] opacity-90">
                    Question
                  </span>
                  <span className="text-[18px] md:text-[20px] font-bold leading-tight">
                    {num}
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
            Submit Quiz
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
