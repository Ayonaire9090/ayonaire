"use client";

import React, { useState, useEffect } from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppFaqCard } from "../app-faq-card";
import { AppActionButton } from "../app-action-button";
import { Accordion, AccordionItem } from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  question: string;
  answer: string;
}

interface CourseFaqsProps {
  courseTitle?: string;
  faqs?: FaqItem[];
}

export const CourseFaqs = ({
  courseTitle = "",
  faqs = [],
}: CourseFaqsProps) => {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Different visible count for mobile and desktop
  const initialVisibleCount = isMobile ? 4 : 10;
  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialVisibleCount);
  const hasMoreFaqs = faqs.length > initialVisibleCount;

  if (!faqs || faqs.length === 0) {
    return null;
  }

  return (
    <section className="container section-spacing">
      <div className="flex flex-col items-center justify-center space-y-10">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <AppSectionButton title="FAQ" className="text-lg" />
          <div className="w-full max-w-full lg:max-w-[60%] text-center">
            <AppHeading
              headingLevel="h2"
              className="text-[30px] lg:text-5xl leading-tight!"
              title={`Frequently Asked Questions About ${courseTitle} Course`}
            />
          </div>
        </div>

        {/* FAQ Grid - 1 column on mobile, 2 columns on desktop */}
        <div className="w-full">
          <Accordion
            type="single"
            collapsible
            className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start"
          >
            {visibleFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className={cn(
                  "group relative rounded-lg border bg-white transition-all duration-300 overflow-hidden",
                  "border-[#FFE7DE] border-3 hover:border-primary last:border-b-3",
                  "data-[state=open]:border-[#f25e25] data-[state=open]:last:border-b-[#f25e25]"
                )}
              >
                <AppFaqCard
                  index={index}
                  title={faq.question}
                  description={faq.answer}
                />
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* View More / View Less Button */}
        {hasMoreFaqs && (
          <div className="flex justify-center">
            <AppActionButton
              onClick={() => setShowAll(!showAll)}
              title={showAll ? "View Less" : "View More"}
            />
          </div>
        )}
      </div>
    </section>
  );
};
