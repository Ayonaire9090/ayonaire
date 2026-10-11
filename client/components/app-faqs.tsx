"use client";

import React, { useState } from "react";
import { AppFaqCard } from "./app-faq-card";
import { AppActionButton } from "./app-action-button";
import {
  Accordion,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

interface FaqItem {
  title: string;
  description: React.ReactNode;
}

interface AppFaqsProps {
  faqs: FaqItem[];
  initialVisibleCount?: number;
  titleClassName?: string;
}

export const AppFaqs = ({ faqs, initialVisibleCount = 5, titleClassName }: AppFaqsProps) => {
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, initialVisibleCount);
  const hasMoreFaqs = faqs.length > initialVisibleCount;

  return (
    <div className="w-full flex flex-col gap-5">
      {/* FAQ Accordion */}
      <Accordion type="single" collapsible className="flex flex-col gap-4">
        {visibleFaqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={cn(
              "group relative rounded-lg border bg-white transition-all duration-300 overflow-hidden last:border-b-3",
              "border-[#FFE7DE] border-3 hover:border-primary",
              " data-[state=open]:border-[#f25e25]"
            )}
          >
            <AppFaqCard
              index={index}
              title={faq.title}
              description={faq.description}
              titleClassName={titleClassName}
            />
          </AccordionItem>
        ))}
      </Accordion>

      {/* View More / View Less Button */}
      {hasMoreFaqs && (
        <div className="flex justify-center mt-4">
          <AppActionButton
            onClick={() => setShowAll(!showAll)}
            title={showAll ? "View Less" : "View More"}
          />
        </div>
      )}
    </div>
  );
};
