import { Clock, ChevronLeft, ChevronRight } from "lucide-react";

const historyData = [
  {
    date: "Nov 2, 2025",
    items: [
      {
        time: "9:30 AM - 12:30 PM",
        title:
          "Induction Session (Ultimate RAG Bootcamp: Building Traditional to Agentic Systems with Cloud Deploy)",
        subtitle: "(Custom meeting)",
      },
      {
        time: "2:00 PM - 6:00 PM",
        title: "Deployment of the project part -2 (LLMOPS)",
        subtitle: "(Custom meeting)",
      },
    ],
  },
  {
    date: "Nov 10, 2025",
    items: [
      {
        time: "8:00 PM - 12:00 AM",
        title: "ML - 11 (ultimate Data Science)",
        subtitle: "(Custom meeting)",
      },
    ],
  },
  {
    date: "Nov 20, 2025",
    items: [
      {
        time: "8:00 PM - 12:00 AM",
        title:
          "Local AI + Prompt Engineering (Generative AI for EveryOne-Professionals and Leaders)",
        subtitle: "(Custom meeting)",
      },
    ],
  },
];

export const WorkshopHistory = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        {historyData.map((group, i) => (
          <div key={i} className="flex flex-col gap-3 w-full">
            {/* Group Header */}
            <div className="bg-[#F8F9FA] lg:bg-[#F6F6F6] px-4 py-2 lg:py-3 lg:rounded-lg">
              <span className="text-gray-500 font-medium text-sm">
                {group.date}
              </span>
            </div>

            {/* Group Items */}
            <div className="flex flex-col gap-3">
              {group.items.map((item, j) => (
                <div
                  key={j}
                  className="flex bg-white lg:rounded-2xl border border-gray-100 p-4 lg:p-6 gap-3 lg:gap-8 hover:shadow-sm transition-all items-start lg:items-center"
                >
                  <div className="flex items-start lg:items-center gap-2 w-[100px] lg:w-[200px] shrink-0">
                    <Clock className="w-4 h-4 text-[#F86432] shrink-0 lg:hidden mt-0.5" />
                    <span className="font-bold text-gray-900 text-sm lg:text-base leading-snug wrap-break-word">
                      {item.time}
                    </span>
                    <Clock className="w-5 h-5 text-gray-400 shrink-0 hidden lg:block" />
                  </div>
                  <div className="flex flex-col flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 text-sm lg:text-base leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-xs lg:text-sm mt-1">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between pt-6 mt-4 border-t border-gray-100 w-[95%] mx-auto lg:w-full">
        <span className="text-gray-900 text-sm font-medium">Page 1 of 5</span>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-gray-900 font-medium text-sm hover:text-[#F86432] transition-colors">
            <ChevronLeft className="w-4 h-4" />
            Prev.
          </button>
          <button className="flex items-center gap-1 text-gray-900 font-medium text-sm hover:text-[#F86432] transition-colors">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
