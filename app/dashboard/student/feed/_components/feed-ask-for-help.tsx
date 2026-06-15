import { Badge } from "@/components/ui/badge";
import { FeedPost } from "./feed-post";
import { CircleHelp, CircleCheck, Clock, CheckCircle } from "lucide-react";

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

export const FeedAskForHelp = () => {
  return (
    <div className="flex flex-col gap-6">
      {/* Ask for help cards */}
      <div className="flex overflow-x-auto gap-4 pb-4 px-4 lg:px-0 lg:grid lg:grid-cols-3 snap-x snap-proximity hide-scrollbar">
        <AskForHelpCard
          title="Total Questions"
          value={2}
          icon={<CircleHelp className="w-6 h-6" />}
          iconBg="bg-[#FDF0EA]"
          iconColor="text-[#F86432]"
        />
        <AskForHelpCard
          title="Solved"
          value={1}
          icon={<CircleCheck className="w-6 h-6" />}
          iconBg="bg-[#EAF7EC]"
          iconColor="text-[#2E7D32]"
        />
        <AskForHelpCard
          title="Awaiting Help"
          value={1}
          icon={<Clock className="w-6 h-6" />}
          iconBg="bg-[#EBF0FF]"
          iconColor="text-[#3F51B5]"
        />
      </div>

      {/* Posts */}
      <div className="flex flex-col gap-6">
        <FeedPost
          authorName="Aisha Kumar"
          authorSubtitle="in about 7 hours"
          badge={
            <Badge variant="outline" className="bg-[#EAF7EC] text-[#2E7D32]">
              <CheckCircle className="w-3 h-3 text-[#2E7D32]" />
              Solved
            </Badge>
          }
          tags={["Python", "PyTorch", "DeepLearning"]}
          textContent="How do I fix dimension mismatch in PyTorch during concat? I'm getting RuntimeError: Sizes of tensors must match except in dimension 1."
        />
        <FeedPost
          authorName="Mai Cheng"
          authorSubtitle="in about 7 hours"
          badge={
            <Badge variant="outline" className="bg-[#EBF0FF] text-[#3F51B5]">
              <Clock className="w-3 h-3 text-[#3F51B5]" />
              Awaiting
            </Badge>
          }
          tags={["Python", "MachineLearning", "BestPractices"]}
          textContent="Any tips for writing clean Python classes for ML pipelines? I want to make my code more modular and reusable."
        />
      </div>
    </div>
  );
};
