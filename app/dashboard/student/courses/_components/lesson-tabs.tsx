import { Search } from "lucide-react";

interface LessonTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const LessonTabs = ({ activeTab, onTabChange }: LessonTabsProps) => {
  const tabs = [
    "Transcription",
    "Course Content",
    "Ai Assistant",
    "Overview",
    "Resources",
    "Q&A",
    "Notes",
    "Announcement",
    "Reviews",
    "Learning Tools",
  ];

  return (
    <div className="w-full border-b border-gray-200 bg-white">
      <div className="w-full max-w-7xl mx-auto flex items-center lg:justify-center px-4 lg:px-8">
        <button className="text-gray-500 hover:text-gray-900 pr-4 lg:pr-6 py-4 shrink-0">
          <Search size={18} />
        </button>

        <div className="flex items-center overflow-x-auto hide-scrollbar gap-6 lg:gap-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`py-4 whitespace-nowrap text-sm font-medium transition relative shrink-0 ${
                  isActive
                    ? "text-[#F86432]"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {tab}
                {isActive && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F86432]" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
