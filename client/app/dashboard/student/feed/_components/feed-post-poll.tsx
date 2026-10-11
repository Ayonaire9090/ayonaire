interface PollOption {
  text: string;
  percentage: number;
}

interface FeedPostPollProps {
  question?: string;
  subtitle?: string;
  options?: PollOption[];
  totalVotes?: string;
}

export const FeedPostPoll = ({
  question = "Which of the following best describes situated AI agents?",
  subtitle = "Also comment the reasons for your answers",
  options = [
    { text: "Dynamic interaction & learning", percentage: 84.34 },
    { text: "Static environment", percentage: 3.02 },
    { text: "Structured data only", percentage: 3.02 },
    { text: "No feedback", percentage: 8.52 },
  ],
  totalVotes = "364 votes",
}: FeedPostPollProps) => {
  return (
    <div className="bg-[#F9F6F4] rounded-2xl p-4 sm:p-5 mt-2">
      <h3 className="font-semibold text-[15px] sm:text-[16px] text-gray-900 leading-tight">
        {question}
      </h3>
      <p className="text-[14px] sm:text-[15px] text-gray-800 mt-1 mb-4 font-medium">
        {subtitle}
      </p>

      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <div
            key={index}
            className="relative h-11 sm:h-12 bg-[#F6EBE5] rounded-xl overflow-hidden flex items-center justify-between px-4 z-0"
          >
            {/* Progress Bar Background */}
            <div
              className="absolute top-0 left-0 h-full bg-[#F36B36] z-10 rounded-xl"
              style={{ width: `${option.percentage}%` }}
            />
            
            {/* Text Content (Foreground) */}
            <span className="relative z-20 font-medium text-gray-900 text-[14px] sm:text-[15px] truncate pr-4">
              {option.text}
            </span>
            <span className="relative z-20 font-medium text-[#F36B36] text-[14px] sm:text-[15px] shrink-0">
              {option.percentage}%
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 text-[13px] text-gray-500 font-medium">
        {totalVotes}
      </div>
    </div>
  );
};
