import { AppNewFeaturesList } from "../app-new-features-list";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";

export function NewFeatures() {
  return (
    <section className="section-spacing">
      <div className="container flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <AppSectionButton title="New Features" />
          <AppHeading
            headingLevel="h2"
            title="New Features"
            className="text-center text-[30px] leading-tight!"
          />
        </div>

        {/* Features Grid */}
        <AppNewFeaturesList />
      </div>
    </section>
  );
}
