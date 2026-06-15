import { Sparkles } from "lucide-react";

interface QuizInstructionsViewProps {
  onStartQuiz: () => void;
  onCancel: () => void;
}

export const QuizInstructionsView = ({
  onStartQuiz,
  onCancel,
}: QuizInstructionsViewProps) => {
  return (
    <div className="bg-white p-0 md:p-8 rounded-none md:rounded-[20px] w-full flex flex-col gap-6 md:gap-10 shadow-none border border-transparent md:border-gray-100">
      <h1 className="text-2xl md:text-[32px] font-semibold text-gray-900 tracking-tight px-4 pt-4 md:px-0 md:pt-0">
        Quiz Instructions
      </h1>

      <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-stretch px-4 md:px-0">
        {/* Left Column (Cards) */}
        <div className="flex flex-col gap-4 w-full md:w-[50%]">
          <div className="grid grid-cols-2 gap-4">
            {/* Card 1 */}
            <div className="flex flex-col gap-2 bg-[#F6F6F6] p-4 md:p-6 rounded-none md:rounded-2xl shadow-none">
              <span className="text-[14px] md:text-[15px] text-gray-500">
                Assessment Name
              </span>
              <span className="text-[18px] md:text-[22px] font-semibold text-gray-900 leading-tight">
                AI Engineering
                <br />
                Quiz 1
              </span>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col gap-2 bg-[#F6F6F6] p-4 md:p-6 rounded-none md:rounded-2xl shadow-none">
              <span className="text-[14px] md:text-[15px] text-gray-500">
                Course
              </span>
              <span className="text-[18px] md:text-[22px] font-semibold text-[#0084FF] leading-tight">
                AI Engineering
                <br />
                1.0
              </span>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col bg-[#F6F6F6] p-4 md:p-6 rounded-none md:rounded-2xl shadow-none">
              <span className="text-[14px] md:text-[15px] text-gray-500">
                Total Questions
              </span>
              <div className="flex-1 flex items-center justify-center mt-3">
                <span className="text-[22px] md:text-[28px] font-bold text-[#10B981]">
                  20
                </span>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col bg-[#F6F6F6] p-4 md:p-6 rounded-none md:rounded-2xl shadow-none">
              <span className="text-[14px] md:text-[15px] text-gray-500">
                Marks
              </span>
              <div className="flex-1 flex items-center justify-center mt-3">
                <span className="text-[22px] md:text-[28px] font-bold text-[#10B981]">
                  20
                </span>
              </div>
            </div>
          </div>
          {/* Card 5 (Centered on mobile) */}
          <div className="flex justify-center md:justify-start w-full mt-2 md:mt-0">
            <div className="flex flex-col bg-[#F6F6F6] p-4 md:p-6 rounded-none md:rounded-2xl shadow-none w-[180px] md:w-[calc(50%-0.5rem)]">
              <span className="text-[14px] md:text-[15px] text-gray-500 md:text-left text-center">
                Time Limit
              </span>
              <div className="flex-1 flex items-center justify-center mt-3">
                <span className="text-[20px] md:text-[24px] font-bold text-[#10B981] leading-tight text-center">
                  30
                  <br />
                  Minutes
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column (Instructions) */}
        <div className="flex flex-col w-full md:w-[50%] h-auto rounded-none md:rounded-3xl overflow-hidden shadow-none">
          {/* Instructions Header */}
          <div className="flex items-center gap-2 bg-[#FCEBE3] px-6 py-4 border-b border-[#FADCD0]">
            <Sparkles className="w-5 h-5 text-[#F97316] fill-[#F97316]" />
            <span className="font-semibold text-gray-900 text-[16px]">
              Instructions
            </span>
          </div>
          {/* Instructions Body */}
          <div className="bg-[#FEF4F0] p-6 md:p-8 flex-1 h-full">
            <ul className="list-disc pl-5 space-y-4 text-gray-600 text-[15px] md:text-[16px] marker:text-gray-400">
              <li>Do not refresh the page during the assessment</li>
              <li>Timer starts once exam begins and cannot be paused</li>
              <li>All questions must be answered to complete the quiz</li>
              <li>Ensure a stable internet connection before starting</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex justify-end items-center w-full mt-4 pt-4 md:pt-0 px-4 md:px-0">
        <button
          onClick={onStartQuiz}
          className="w-[48%] md:w-auto px-4 md:px-16 py-3.5 bg-[#F97316] text-white rounded-none md:rounded-[12px] font-medium hover:bg-[#EA580C] transition-colors text-center text-[15px]"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
};
