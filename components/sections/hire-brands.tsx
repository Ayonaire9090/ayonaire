import React from "react";
import { FeaturedBrands } from "./featured-brands";

const featuredLogos = [
  "/assets/brands/hire/hire-gt.png",
  "/assets/brands/hire/hire-meta.png",
  "/assets/brands/hire/hire-microsoft.png",
  "/assets/brands/hire/hire-opay.png",
  "/assets/brands/hire/hire-rubixe.png",
  "/assets/brands/hire/hire-stripe.png",
  "/assets/brands/hire/hire-wise.png",
];

export const HireBrands = () => {
  return (
    <>
      <FeaturedBrands
        titleContainerClassName="hidden lg:block"
        titleClassName="hidden lg:block"
        logos={featuredLogos}
        repeat={3}
        className="pl-0! lg:pl-18! py-4!"
        marqueeClassName="[--duration:30s]!"
        marqueeContainerClassName="lg:hidden"
        imageClassName="w-[120px] h-[50px] lg:w-[160px] lg:h-[90px]"
        logoFlexClassName="lg:w-[100px] lg:h-[50px]"
      />
    </>
  );
};
