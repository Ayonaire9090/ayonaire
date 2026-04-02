import Image from "next/image";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";
import { AppActionButton } from "../app-action-button";
import { coursePrising } from "@/constants";
import Link from "next/link";

export const CoursePricing = () => {
  return (
    <section className="container section-spacing">
      {/* Section Heading */}
      <div className="flex flex-col justify-center items-center gap-3 mb-12">
        <AppSectionButton title="Pricing" />
        <AppHeading
          headingLevel="h2"
          title={`Cost Of Admission`}
          description={`Get Full Access To All Training, Mentorship, Templates, Resources, And Certification.`}
          className="text-center w-full lg:max-w-3xl mx-auto text-[27px] lg:text-[44px] leading-tight! pt-4"
          descriptionClassName="text-center lg:w-[70%] mx-auto"
        />
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-7xl mx-auto">
        {coursePrising.map((plan, index) => (
          <div
            key={index}
            className="relative bg-linear-to-b from-white via-[#FFE7DE] to-[#FFE7DE] rounded-2xl lg:rounded-3xl p-6 lg:p-8 overflow-hidden shadow-sm"
          >
            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Plan Title */}
              <h3 className="text-xl lg:text-2xl font-bold text-center mb-4 lg:mb-6">
                {plan.title}
              </h3>

              {/* Pricing Display */}
              <div className="flex items-baseline justify-center gap-2 lg:gap-3 mb-4">
                {/* Original Price (strikethrough) */}
                <span className="text-2xl lg:text-3xl font-bold line-through decoration-2">
                  ₦{plan.prices.original}
                </span>
                <span className="text-2xl lg:text-3xl font-bold">/</span>
                {/* Discount Price */}
                <span className="text-2xl lg:text-3xl font-bold">
                  ₦{plan.prices.discount}
                </span>
              </div>

              {/* Early Bird Discount Badge */}
              <div className="inline-block bg-white shadow-lg rounded-full px-4 lg:px-6 py-2 mb-6 lg:mb-8">
                <span className="text-primary text-sm lg:text-base font-semibold">
                  Early Bird Discount Available
                </span>
              </div>

              {/* Features List */}
              <div className="w-full flex flex-col gap-4 lg:gap-5 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center gap-3">
                    <Image
                      src="/assets/icons/round-tick.svg"
                      alt="check"
                      width={28}
                      height={28}
                      className="shrink-0"
                    />
                    <span className="text-sm lg:text-base text-gray-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Apply Button */}
              <Link className="w-full" href="/opt-in#freeAccessFormOptin">
              
              <AppActionButton
                variant="fading"
                className="w-full py-6! lg:py-8! text-base lg:text-lg font-semibold rounded-xl!"
              >
                Apply
              </AppActionButton>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
