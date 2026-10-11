"use client";

import { testimonials } from "@/constants";
import { AppTestimonialCard } from "./app-testimononial-card";

export function AppTestimonialList() {
    return (
        <div className="w-full lg:max-w-[98%] lg:mx-auto lg:px-2 overflow-hidden">
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 hide-scrollbar snap-x snap-mandatory px-[5%]  lg:px-[calc((100vw-1440px)/2+1rem)]">
                {testimonials.map((testimonial) => (
                    <div
                        key={testimonial.id}
                        className="shrink-0 w-[95%] sm:w-[50%] lg:w-[400px] snap-center"
                    >
                        <AppTestimonialCard
                            media={testimonial.media}
                            poster={testimonial.poster}
                            name={testimonial.name}
                            position={testimonial.position}
                            testimonial={testimonial.testimonial}
                            rating={testimonial.rating}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
