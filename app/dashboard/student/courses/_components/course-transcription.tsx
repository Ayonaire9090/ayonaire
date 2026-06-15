"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, ChevronLeft, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Section = {
  id: number;
  title: string;
  progress: string;
  duration: string;
  content: string;
};

const MOCK_TRANSCRIPTION = `Hi Gorkem,

The reason I have made solution complex and it took me good time to write solution in its complete form because through this course I just don't want you all to solve the problem but rather make sure that you are able to understand the approach and are less and less dependent on language specific syntax.

Though the above is passing all the test cases, it doesn't made you think on alternative approach which could have helped you maybe in solving any other process. Along with that, what if tomorrow you are coding in some other language where these inbuilt are not supported or else say interviewer doesn't want you to use this way of solving due to some complexity.

Coding is more about understanding the different approach than just passing test cases and hence I have asked everywhere to write more and more brute force wherever possible.
Hope the above helps. :)

Hi Gorkem,

The reason I have made solution complex and it took me good time to write solution in its complete form because through this course I just don't want you all to solve the problem but rather make sure that you are able to understand the approach and are less and less dependent on language specific syntax.

Though the above is passing all the test cases, it doesn't made you think on alternative approach which could have helped you maybe in solving any other process. Along with that, what if tomorrow you are coding in some other language where these inbuilt are not supported or else say interviewer doesn't want you to use this way of solving due to some complexity.

Coding is more about understanding the different approach than just passing test cases and hence I have asked everywhere to write more and more brute force wherever possible.
Hope the above helps. :)`;

const transcriptionSections: Section[] = [
  {
    id: 1,
    title: "Section 1 introduction",
    progress: "0/5",
    duration: "27min",
    content: MOCK_TRANSCRIPTION,
  },
  {
    id: 2,
    title: "Section 2 introduction",
    progress: "0/5",
    duration: "27min",
    content: "",
  },
  {
    id: 3,
    title: "Section 3 introduction",
    progress: "0/5",
    duration: "27min",
    content: "",
  },
];

export const CourseTranscription = () => {
  const [openSections, setOpenSections] = useState<number[]>([1]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleSection = (id: number) => {
    if (openSections.includes(id)) {
      setOpenSections(openSections.filter((secId) => secId !== id));
    } else {
      setOpenSections([...openSections, id]);
    }
  };

  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 pb-20">
      <div className="flex flex-col gap-4 px-4 md:px-0">
        <Button
          variant="outline"
          className="w-fit rounded-full border-[#F86432] text-[#F86432] hover:bg-[#F86432]/5 hover:text-[#F86432] font-medium h-9 px-4 shadow-none text-sm"
        >
          <ChevronLeft className="w-4 h-4 mr-1" />
          Return to course
        </Button>

        <div className="relative w-full max-w-sm mt-2">
          <Input
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full h-10 pl-4 pr-10 rounded-xl border-gray-300 text-[15px] focus-visible:ring-1 focus-visible:ring-[#F86432]"
          />
          <Search className="w-4 h-4 text-gray-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
        </div>
      </div>

      <div className="w-full flex flex-col h-full bg-white md:rounded-2xl overflow-hidden md:border md:border-gray-100">
        {transcriptionSections.map((section) => {
          const isOpen = openSections.includes(section.id);

          return (
            <div key={section.id} className="border-b border-gray-200 last:border-b-0">
              {/* Header */}
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full flex items-center justify-between px-4 md:px-6 py-5 bg-white hover:bg-gray-50 transition"
              >
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-gray-900 text-[15px] md:text-base">
                    {section.title}
                  </span>
                  <span className="text-sm text-gray-500 mt-0.5">
                    {section.progress} | {section.duration}
                  </span>
                </div>
                {isOpen ? (
                  <ChevronUp size={20} className="text-gray-500" />
                ) : (
                  <ChevronDown size={20} className="text-gray-500" />
                )}
              </button>

              {/* Content */}
              {isOpen && section.content && (
                <div className="px-4 md:px-6 pb-6 bg-white">
                  <div className="text-[15px] text-gray-800 leading-[1.8] whitespace-pre-wrap">
                    {section.content}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
