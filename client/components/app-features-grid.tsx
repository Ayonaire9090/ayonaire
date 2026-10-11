import React from "react";
import { AppFeatureCard } from "./app-feature-card";
import { reviewFeatures } from "@/constants";

interface AppFeaturesGridProps {
  features?: typeof reviewFeatures;
}
export const AppFeaturesGrid = ({
  features = reviewFeatures,
}: AppFeaturesGridProps) => {
  return (
    <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4">
      {features.map((feature) => (
        <AppFeatureCard
          key={feature.title}
          title={feature.title}
          icon={feature.icon}
          description={feature.description}
        />
      ))}
    </div>
  );
};
