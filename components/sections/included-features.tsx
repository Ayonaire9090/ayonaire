import { AppIncludedFeaturesList } from "../app-included-features-list";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";

export function IncludedFeatures() {
  return (
    <section className="section-spacing">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col items-start gap-4 text-start">
          <AppSectionButton title="Features" />
          <div className="w-full hidden lg:block">
            <AppHeading
              headingLevel="h2"
              title="Job Assistance and Career Support"
              description="All Bootcamp learners receive access to our Smart Job Assistance Portal — a suite of tools and expert resources designed to help you stand out in today’s job market."
              className="text-start text-[30px] lg:text-[48px] leading-tight!"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="w-[95%] block lg:hidden">
              <AppHeading
                headingLevel="h2"
                title="Job Assistance & Career Support"
                className="text-start text-[30px] lg:text-[48px] leading-tight!"
              />
            </div>
            <p className="text-gray-500 block lg:hidden">
              Get tools and expert support through our Smart Job Portal.
            </p>
          </div>
          <h2 className="text-start text-[24px] lg:text-[32px] font-semibold pt-3">
            What's Included
          </h2>
        </div>

        {/* Features List */}
        <AppIncludedFeaturesList />
      </div>
    </section>
  );
}
