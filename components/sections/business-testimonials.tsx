"use client";

import { testimonials2 } from "@/constants";
import { AppTestimonial2Card } from "../app-testimonial2-card";
import { AppHeading } from "../app-heading";
import { ArrowRight, Star } from "lucide-react";
import { AppSectionButton } from "../app-section-button";
import { AppActionButton } from "../app-action-button";

const testimonials = testimonials2.slice(0, 2);

export const BusinessTestimonials = () => {
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
                title="What Our Clients Are Saying"
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

      {/* Testimonials Grid */}
      <BusinessTestimonialsGrid />

      <div className="my-6 lg:my-8 flex justify-center items-center">
        <AppActionButton
          variant="fading"
          className="py-6 lg:py-8 text-[16px] rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group"
        >
          <p>Upskill Your Team Today</p>
          <span className="bg-white p-1 lg:p-2 rounded-lg group-hover:ml-2 transition-all ease-in-out duration-300">
            <ArrowRight size={25} className="text-primary  rounded" />
          </span>
        </AppActionButton>
      </div>
    </section>
  );
};

export const BusinessTestimonialsGrid = () => {
  return (
    <div className="w-full lg:max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
      {testimonials.map((testimonial) => (
        <AppTestimonial2Card
          key={testimonial.id}
          name={testimonial.name}
          username={testimonial.username}
          address={testimonial.address}
          testimonial={testimonial.testimonial}
          rating={testimonial.rating}
          image={testimonial.image}
          variant="default"
        />
      ))}
    </div>
  );
};
