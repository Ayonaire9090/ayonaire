"use client";

import { useState } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { PanelRightClose, Sparkles, X } from "lucide-react";
import { CourseContentAccordion } from "./course-content-accordion";
import { CourseAiAssistant } from "./course-ai-assistant";
import { ModuleWithLessons } from "@/lib/api/endpoints/lessons";

interface CourseSidebarSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  modules?: ModuleWithLessons[];
  activeLessonId?: string;
  onSelectLesson?: (lessonId: string) => void;
  isLoading?: boolean;
}

export const CourseSidebarSheet = ({
  open,
  onOpenChange,
  modules,
  activeLessonId,
  onSelectLesson,
  isLoading,
}: CourseSidebarSheetProps) => {
  const [activeTab, setActiveTab] = useState<"content" | "ai">("content");

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent 
        className="w-[95vw] sm:w-[50vw] sm:max-w-none p-0 flex flex-col gap-0 border-l border-gray-200 overflow-hidden"
        hideCloseButton
      >
        {/* Header Tabs */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 pt-2 bg-white">
          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveTab("content")}
              className={`py-3 text-[15px] font-medium transition relative ${
                activeTab === "content" ? "text-[#F86432]" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Course Content
              {activeTab === "content" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F86432]" />
              )}
            </button>

            <button
              onClick={() => setActiveTab("ai")}
              className={`py-3 text-[15px] font-medium transition relative flex items-center gap-1.5 ${
                activeTab === "ai" ? "text-[#F86432]" : "text-gray-500 hover:text-gray-900"
              }`}
            >
              <Sparkles size={16} />
              Ai Assistant
              {activeTab === "ai" && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#F86432]" />
              )}
            </button>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-gray-500 hover:text-gray-900 transition">
              <PanelRightClose size={20} />
            </button>
            <button onClick={() => onOpenChange(false)} className="text-gray-500 hover:text-gray-900 transition">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden relative bg-white">
          {activeTab === "content" ? (
            <CourseContentAccordion
              modules={modules}
              activeLessonId={activeLessonId}
              onSelectLesson={onSelectLesson}
              isLoading={isLoading}
            />
          ) : (
            <CourseAiAssistant />
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};
