import Image from "next/image";
import React from "react";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";

interface SchoolRecognitionProps {
  /** The label for the section button */
  sectionButtonTitle?: string;
  /** The main heading title */
  title?: string;
  /** The description text below the heading */
  description?: string;
  /** The image source for the certificate image */
  image?: string;
  /** The alt text for the certificate image */
  imageAlt?: string;
}

export const SchoolRecognition = ({
  sectionButtonTitle = "Earn Recognition",
  title = "Get Globally Recognized Certification",
  description = "Every course comes with a globally respected certificate to showcase your new skills.",
  image = "/assets/images/certificates.svg",
  imageAlt = "AI Recognition Certificate",
}: SchoolRecognitionProps) => {
  return (
    <section className="section-spacing overflow-hidden">
      <div className="container">
        <div className="relative flex flex-col items-center text-center rounded-2xl lg:rounded-3xl bg-linear-to-b from-[#F3F3F3] to-[#FEE9DA] pt-10 lg:pt-16 pb-48 md:pb-56 lg:pb-72 overflow-hidden">
          <AppSectionButton className="bg-white!" title={sectionButtonTitle} />
          <div className="w-full lg:max-w-[50%] mx-auto mt-5">
            <AppHeading
              title={title}
              headingLevel="h2"
              description={description}
              className="text-center text-[27px] lg:text-[44px] leading-tight!"
              descriptionClassName="text-center text-[16px] lg:text-[18px] pt-2 lg:pt-5 w-full max-w-[80%] mx-auto"
            />
          </div>

          {/* Certificate Image */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[2%] w-[85%] md:w-[60%] lg:w-[50%]">
            <Image
              src={image}
              alt={imageAlt}
              width={700}
              height={500}
              className="w-full h-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
