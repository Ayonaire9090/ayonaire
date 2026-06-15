import { ChevronDown, ChevronUp, MonitorPlay, Square, Folder } from "lucide-react";
import { useState } from "react";

// Mock data based on the provided content
type Module = {
  id: number;
  title: string;
  duration: string;
  completed: boolean;
  hasResources?: boolean;
};

type Section = {
  id: number;
  title: string;
  progress: string;
  duration: string;
  modules: Module[];
};

const courseSections: Section[] = [
  {
    id: 1,
    title: "Section 1 introduction",
    progress: "0/5",
    duration: "27min",
    modules: [
      { id: 11, title: "1. introduction", duration: "1min", completed: true, hasResources: true },
    ]
  },
  {
    id: 2,
    title: "Section 2 introduction",
    progress: "0/5",
    duration: "27min",
    modules: [
      { id: 21, title: "1. introduction", duration: "1min", completed: false },
      { id: 22, title: "1. introduction", duration: "1min", completed: false },
      { id: 23, title: "1. introduction", duration: "1min", completed: false },
    ]
  },
  {
    id: 3,
    title: "Section 3 introduction",
    progress: "0/5",
    duration: "27min",
    modules: []
  },
  {
    id: 4,
    title: "Section 4 introduction",
    progress: "0/5",
    duration: "27min",
    modules: []
  },
  {
    id: 5,
    title: "Section 5 introduction",
    progress: "0/5",
    duration: "27min",
    modules: []
  }
];

export const CourseContentAccordion = () => {
  const [openSections, setOpenSections] = useState<number[]>([1, 2]);

  const toggleSection = (id: number) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter(secId => secId !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };

  return (
    <div className="w-full flex flex-col h-full overflow-y-auto bg-gray-50/30">
      {courseSections.map((section) => {
        const isOpen = openSections.includes(section.id);
        
        return (
          <div key={section.id} className="border-b border-gray-200">
            {/* Header */}
            <button 
              onClick={() => toggleSection(section.id)}
              className="w-full flex items-center justify-between px-6 py-5 bg-gray-50 hover:bg-gray-100 transition"
            >
              <div className="flex flex-col text-left">
                <span className="font-semibold text-gray-900 text-[15px]">{section.title}</span>
                <span className="text-sm text-gray-500 mt-0.5">{section.progress} | {section.duration}</span>
              </div>
              {isOpen ? <ChevronUp size={20} className="text-gray-500" /> : <ChevronDown size={20} className="text-gray-500" />}
            </button>

            {/* Content */}
            {isOpen && section.modules.length > 0 && (
              <div className="flex flex-col">
                {section.modules.map((mod) => (
                  <div key={mod.id} className={`flex items-center justify-between p-4 px-6 border-l-4 ${mod.completed ? 'border-transparent bg-[#DCDFEA]/50' : 'border-transparent bg-white'}`}>
                    <div className="flex items-start gap-4">
                      {mod.completed ? (
                        <div className="mt-0.5 text-[#F86432]">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="#F86432" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check-square"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="m9 12 2 2 4-4" stroke="white"/></svg>
                        </div>
                      ) : (
                        <div className="mt-0.5 text-gray-400">
                          <Square size={18} />
                        </div>
                      )}
                      
                      <div className="flex flex-col">
                        <span className="text-[14px] font-medium text-gray-800">{mod.title}</span>
                        <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1">
                          <MonitorPlay size={14} />
                          <span>{mod.duration}</span>
                        </div>
                      </div>
                    </div>

                    {/* Resources Dropdown (if any) */}
                    {mod.hasResources && (
                      <button className="flex items-center gap-1 text-[11px] text-[#F86432] border border-[#F86432]/30 rounded-md px-2 py-1 bg-transparent hover:bg-[#F86432]/5 transition">
                        <Folder size={12} />
                        Resources
                        <ChevronDown size={12} />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
