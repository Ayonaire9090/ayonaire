import { Footer } from "@/components/layout/footer";
import { FeaturedBrands } from "@/components/sections/featured-brands";
import { InstructorBanner } from "@/components/sections/instructor-banner";
import { InstructorHero } from "@/components/sections/instructor-hero";
import { InstructorNotes } from "@/components/sections/instructor-notes";
import { AppTimeline } from "@/components/sections/app-timeline";
import { InstructorWeAreLookingFor } from "@/components/sections/instructor-we-are-looking-for";
import { InstructorWhyTeach } from "@/components/sections/instructor-why-teach";
import { Testimonial2 } from "@/components/sections/testimonial2";
import Image from "next/image";

export default function BecomeAnInstructorPage() {
  return (
    <>
      {/* Instructor Hero */}
      <InstructorHero />

      {/* Featured Brands */}
      <FeaturedBrands
        titleClassName="text-base! lg:text-base!"
        imageClassName="w-[100px]! h-[20px]! object-contain"
        marqueeClassName="lg:hidden [--duration:30s]"
        marqueeContainerClassName="lg:hidden"
      />

      {/* Instructor Why Teach Section */}
      <InstructorWhyTeach />

      {/* Instructor We Are Looking For Section */}
      <InstructorWeAreLookingFor />

      {/* testimonial2 */}
      <Testimonial2 />

      {/* Instructor Our process */}
      <AppTimeline />

      {/* Instructor Banner */}
      <InstructorBanner />

      {/* Instructor  Notes */}
      <InstructorNotes />

      {/* Footer With Logo Decoration */}
      <div className="relative w-full">
        {/* Logo positioned to overlap between content and footer */}
        <div className="absolute left-0 right-0 -top-16 lg:-top-48 z-10 w-full">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5"
          />
        </div>
        <div className="absolute left-0 right-0 -top-16 lg:-top-48 z-10 w-full">
          <Image
            width={800}
            height={800}
            src="/assets/logos/full-logo-black.png"
            alt=""
            className="w-full h-auto object-contain opacity-5 invert"
          />
        </div>
        <div className="-z-10">
          <Footer />
        </div>
      </div>
    </>
  );
}
