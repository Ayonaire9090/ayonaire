"use client";

import { useState } from "react";
import { Accordion } from "@/components/ui/accordion";
import {
  AppWhoShouldEnrolCardDesktop,
  AppWhoShouldEnrolCardMobile,
} from "./app-who-should-enrol-card";

interface WhoShouldEnrolItem {
  title: string;
  description: string;
}

interface AppWhoShouldEnrolListProps {
  items: WhoShouldEnrolItem[];
}

export function AppWhoShouldEnrolList({ items }: AppWhoShouldEnrolListProps) {
  const [activeItem, setActiveItem] = useState<string>("enrol-0");

  return (
    <>
      {/* Desktop: Grid Layout (hidden on mobile/tablet) */}
      <div
        className="hidden md:grid md:grid-cols-3 w-full max-w-full mx-auto"
        style={{
          columnGap: "29.5px",
          rowGap: "29px",
        }}
      >
        {items.map((item, index) => (
          <AppWhoShouldEnrolCardDesktop
            key={`desktop-${index}`}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

      {/* Mobile/Tablet: Accordion (hidden on desktop) */}
      <div className="md:hidden">
        <Accordion
          type="single"
          collapsible
          value={activeItem}
          onValueChange={(value) => setActiveItem(value)}
          className="flex flex-col gap-3"
        >
          {items.map((item, index) => (
            <AppWhoShouldEnrolCardMobile
              key={`mobile-${index}`}
              value={`enrol-${index}`}
              title={item.title}
              description={item.description}
              isActive={activeItem === `enrol-${index}`}
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
