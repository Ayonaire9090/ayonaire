import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppTestimonial2Carousel } from "../app-testimonial2-carousel";
import { Star } from "lucide-react";

export function Testimonial2() {
  return (
    <section className="container section-spacing overflow-hidden bg-white">
      <div className="flex justify-between items-center mb-8">
        {/* Section Header */}
        <div className="flex flex-col">
          <div className="flex flex-col items-start gap-4">
            <AppSectionButton title="Testimonial" />

            {/* Desktop Heading */}
            <div className="w-full text-start lg:max-w-[70%]">
              <AppHeading
                headingLevel="h2"
                title="Hear From Our Students"
                description="Our graduates are building careers, one skill at a time. Here's what they have to say about learning with Ayonaire."
                className="text-[30px] lg:text-5xl leading-tight!"
              />
            </div>
          </div>
        </div>

        {/* Customers rating for support - Hidden on mobile */}
        <div className="hidden lg:flex flex-col gap-3">
          {/* Top row: Number + Text */}
          <div className="flex items-center gap-3">
            <AppHeading
              headingLevel="h2"
              title="456+"
              className="text-[30px] lg:text-5xl font-bold leading-tight!"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg font-semibold">
                Customers Have Given
              </span>
              <span className="text-lg font-semibold">Rating For Support</span>
            </div>
          </div>

          {/* Bottom row: Stars + Divider + Average Rating */}
          <div className="flex items-center gap-3">
            {/* Stars */}
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="text-primary fill-primary" />
              ))}
              <Star size={20} className="text-black fill-black" />
            </div>

            {/* Divider */}
            <div className="h-5 w-px bg-gray-300" />

            {/* Average Rating */}
            <span className="text-gray-600 text-sm">Average Rating 4/5</span>
          </div>
        </div>
      </div>

      {/* Testimonials Carousel */}
      <AppTestimonial2Carousel />
    </section>
  );
}
