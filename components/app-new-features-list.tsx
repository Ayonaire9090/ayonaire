import { newFeatures } from "@/constants";
import { AppNewFeaturesCard } from "./app-new-features-card";

export function AppNewFeaturesList() {
  return (
    <div className="flex flex-wrap justify-center gap-4 px-4 md:px-0 w-full mx-auto">
      {newFeatures.map((feature, index) => (
        <AppNewFeaturesCard
          key={index}
          icon={feature.icon}
          title={feature.title}
        />
      ))}
    </div>
  );
}
