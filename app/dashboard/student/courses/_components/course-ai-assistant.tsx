"use client";

import { Sparkles, ArrowUp, Link2 } from "lucide-react";
import { useState } from "react";

interface CourseAiAssistantProps {
  className?: string;
}

export const CourseAiAssistant = ({ className }: CourseAiAssistantProps) => {
  const [messages, setMessages] = useState<
    { role: "user" | "ai"; content: string | React.ReactNode }[]
  >([]);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          content: (
            <div className="flex flex-col gap-2.5">
              <p>
                LeetCode exercises are an excellent way to enhance your skills
                for several reasons:
              </p>
              <p>
                1. Foundation Building: The exercises in the course are designed
                to improve your understanding of Python and data structures,
                laying a solid foundation for solving more complex problems.
              </p>
              <p>
                2. Problem-Solving Skills: By regularly practicing coding
                problems, you will develop critical thinking and problem-solving
                abilities essential for technical interviews and competitive
                programming.
              </p>
              <p>
                3. Familiarity with Common Questions: Many exercises resemble
                problems often encountered in interviews with top tech
                companies, such as Google and Amazon, ensuring that you’re
                well-prepared for real-world coding challenges.
              </p>
              <p>
                4. Diverse Problem Types: Engaging with a variety of exercises
                broadens your experience, making you proficient at tackling
                different types of questions.
              </p>
              <p>
                5. Confidence: With consistent practice, the problem-solving
                process becomes more intuitive, allowing you to approach new
                problems with greater confidence and creativity.
              </p>
              <p>
                6. Supplementing Learning: While the exercises in the course
                provide a great start, solving additional LeetCode problems can
                further reinforce your skills and expose you to a wider array of
                problem-solving techniques.
              </p>
              <p className="mt-2">
                In summary, putting in the effort to complete LeetCode exercises
                will significantly enhance your coding abilities, giving you the
                confidence needed for both interviews and competitive
                programming. Keep
              </p>
            </div>
          ),
        },
      ]);
    }, 500);
  };

  return (
    <div className={`flex flex-col bg-white relative ${className || "h-full"}`}>
      <div className="flex-1 overflow-y-auto p-4 lg:p-6 pb-28">
        {messages.length === 0 ? (
          <>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-10 h-10 rounded-full bg-[#F86432] flex items-center justify-center shrink-0 mt-1">
                <Sparkles size={20} className="text-white" />
              </div>
              <div className="flex flex-col pt-1">
                <span className="font-semibold text-gray-900 text-[17px]">
                  Get an instant answer from the assistant
                </span>
                <span className="text-gray-500 text-[13px] mt-1">
                  Our AI uses context from the course to help
                  <br />
                  answer most questions immediately
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-8">
              {[1, 2, 3].map((i) => (
                <button
                  key={i}
                  onClick={() =>
                    handleSend("How will LeetCode exercises enhance my skills?")
                  }
                  className="text-left p-4 rounded-xl border border-gray-100 bg-gray-50/50 hover:bg-gray-100 transition text-gray-600 text-sm"
                >
                  How will LeetCode exercises enhance my skills?
                </button>
              ))}
            </div>
          </>
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
                    <div className="text-gray-800 text-[14px] leading-[1.6]">
                      {msg.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
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
          className="w-[46px] h-[46px] rounded-xl bg-[#F86432] text-white flex items-center justify-center shrink-0 hover:bg-[#E55A2B] transition ml-1"
        >
          <ArrowUp size={24} strokeWidth={2.5} />
        </button>
      </div>
    </div>
  );
};
