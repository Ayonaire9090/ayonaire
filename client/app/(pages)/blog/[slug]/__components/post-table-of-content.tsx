"use client";
import { useState } from "react";


// TOC Button Component
export const PostTableOfContents = ({
  headings,
}: {
  headings: { level: number; text: string; id: string }[];
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="relative mb-6">
      {/* TOC Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-[#141414] hover:text-primary transition-colors font-bold"
        aria-label="Table of Contents"
      >
        <span className="text-sm lg:text-base">TOC</span>
        <svg
          className="w-5 h-5 lg:w-6 lg:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 10h16M4 14h16M4 18h16"
          />
        </svg>
      </button>

      {/* TOC Dropdown */}
      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-64 max-h-80 overflow-y-auto bg-white rounded-lg shadow-xl border border-gray-100 z-50 p-3">
          <div className="text-xs font-semibold text-gray-500 uppercase mb-2">
            Contents
          </div>
          <nav className="space-y-1">
            {headings.map((heading, index) => (
              <button
                key={index}
                onClick={() => scrollToHeading(heading.id)}
                className={`block w-full text-left text-sm py-1.5 px-2 rounded hover:bg-primary/10 hover:text-primary transition-colors ${
                  heading.level === 3
                    ? "pl-4 text-gray-600"
                    : "font-medium text-[#141414]"
                }`}
              >
                {heading.text.length > 35
                  ? heading.text.substring(0, 35) + "..."
                  : heading.text}
              </button>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
};