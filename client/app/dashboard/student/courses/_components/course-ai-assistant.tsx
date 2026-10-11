"use client";

import { ArrowUp, Link2, Sparkles } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useAskCourseAssistantMutation } from "@/hooks/api/use-course-interactions";

interface CourseAiAssistantProps {
  className?: string;
  courseId?: string;
  lessonId?: string;
}

export const CourseAiAssistant = ({
  className,
  courseId,
  lessonId,
}: CourseAiAssistantProps) => {
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string }[]
  >([]);
  const [inputValue, setInputValue] = useState("");
  const assistantMutation = useAskCourseAssistantMutation();

  const handleSend = (text: string) => {
    const question = text.trim();
    if (!question || !courseId) return;

    setMessages((prev) => [...prev, { role: "user", content: question }]);
    setInputValue("");

    assistantMutation.mutate(
      { courseId, lessonId, question },
      {
        onSuccess: (response) => {
          setMessages((prev) => [
            ...prev,
            { role: "ai", content: response.data?.answer ?? "" },
          ]);
        },
        onError: (error) =>
          toast.error(error instanceof Error ? error.message : "Assistant failed"),
      },
    );
  };

  return (
    <div className={`flex flex-col bg-white relative ${className || "h-full"}`}>
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 pb-28">
        {messages.length === 0 ? (
          <div className="flex items-start gap-4 mb-8">
            <div className="w-10 h-10 rounded-full bg-[#F86432] flex items-center justify-center shrink-0 mt-1">
              <Sparkles size={20} className="text-white" />
            </div>
            <div className="flex flex-col pt-1">
              <span className="font-semibold text-gray-900 text-[17px]">
                Ask a question about this course
              </span>
              <span className="text-gray-500 text-[13px] mt-1">
                The assistant will respond when a question is submitted.
              </span>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-8">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.role === "user" ? (
                  <div className="bg-[#FFF0E6] text-gray-800 px-5 py-3.5 rounded-[20px] max-w-[85%] text-[14px]">
                    {msg.content}
                  </div>
                ) : (
                  <div className="flex items-end gap-3 max-w-[95%] lg:max-w-[85%]">
                    <div className="w-10 h-10 rounded-full bg-[#F86432] flex items-center justify-center shrink-0 mb-1">
                      <Sparkles size={20} className="text-white" />
                    </div>
                    <div className="text-gray-800 text-[14px] leading-[1.6] whitespace-pre-wrap">
                      {msg.content}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {assistantMutation.isPending && (
              <div className="flex items-center gap-3 text-[13px] text-gray-400">
                <div className="w-4 h-4 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                Thinking...
              </div>
            )}
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white flex items-center gap-3 border-t border-gray-50">
        <button className="text-gray-700 hover:text-black transition shrink-0 ml-1">
          <Link2 size={24} strokeWidth={2.5} />
        </button>
        <div className="flex-1 relative ml-1">
          <input
            type="text"
            placeholder="Ask Question"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSend(inputValue);
            }}
            className="w-full bg-transparent border border-gray-200 rounded-xl py-3 px-4 text-[15px] focus:outline-none focus:ring-1 focus:ring-[#F86432]"
          />
        </div>
        <button
          onClick={() => handleSend(inputValue)}
          disabled={assistantMutation.isPending || !inputValue.trim()}
          className="w-[46px] h-[46px] rounded-xl bg-[#F86432] text-white flex items-center justify-center shrink-0 hover:bg-[#E55A2B] transition ml-1 disabled:opacity-50"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
