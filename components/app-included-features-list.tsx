"use client";

import { useState } from "react";
import { includedFeatures } from "@/constants";
import { Accordion } from "@/components/ui/accordion";
import {
  AppIncludedFeaturesCardDesktop,
  AppIncludedFeaturesCardMobile,
} from "./app-included-features-card";

export function AppIncludedFeaturesList() {
  const [activeItem, setActiveItem] = useState<string>("feature-0");

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
        {includedFeatures.map((feature, index) => (
          <AppIncludedFeaturesCardDesktop
            key={`desktop-${index}`}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
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
          {includedFeatures.map((feature, index) => (
            <AppIncludedFeaturesCardMobile
              key={`mobile-${index}`}
              value={`feature-${index}`}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              isActive={activeItem === `feature-${index}`}
            />
          ))}
        </Accordion>
      </div>
    </>
  );
}
