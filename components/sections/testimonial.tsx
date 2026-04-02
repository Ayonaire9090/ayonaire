import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppTestimonialList } from "../app-testimonial-list";

export function Testimonial() {
  return (
    <section className="section-spacing overflow-hidden space-y-6">
      <div className="container flex flex-col gap-8">
        {/* Section Header */}
        <div className="flex flex-col items-center gap-4 text-center">
          <AppSectionButton title="Testimonial" />

          {/* Desktop Heading */}
          <div className="hidden lg:block w-full max-w-[45%]">
            <AppHeading
              headingLevel="h2"
              title="Hear From Our Students"
              description="Our graduates are building careers, one skill at a time. Here' s what they have to say about learning with Ayonaire"
              className="text-[30px] lg:text-5xl leading-tight!"
            />
          </div>

          {/* Mobile Heading */}
          <div className="block lg:hidden">
            <AppHeading
              headingLevel="h2"
              title="Hear From Our Students"
              description="Here' s what they have to say about learning with Ayonaire"
              className="text-[30px] lg:text-5xl leading-tight!"
            />
          </div>
        </div>
      </div>
      {/* Testimonials List */}
      <AppTestimonialList />
    </section>
  );
}
