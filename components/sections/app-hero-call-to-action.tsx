"use client";
import React from "react";
import { AppActionButton } from "../app-action-button";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface AppHeroCallToActionProps {
  firstButton?: {
    title?: string;
    route?: string;
  };
  secondButton?: {
    title?: string;
    route?: string;
  };
}
const AppHeroCallToAction = ({
  firstButton,
  secondButton,
}: AppHeroCallToActionProps) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 lg:flex items-center gap-2 lg:gap-4 pt-8 lg:pt-12 md:py-18">
      <AppActionButton
        onClick={() =>
          router.push(firstButton?.route || "/opt-in#freeAccessFormOptin")
        }
        variant="fading"
        className="py-5 lg:py-8 px-2 lg:px-6 text-[11px] sm:text-sm lg:text-base rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer group flex items-center justify-center gap-1.5 lg:gap-2"
      >
        <p className="whitespace-nowrap">
          {firstButton?.title || "Talk to an Advisor"}
        </p>
        <span className="bg-white p-1 rounded-lg shrink-0 group-hover:ml-2 transition-all ease-in-out duration-300">
          <ArrowRight className="text-primary rounded w-3.5 h-3.5 lg:w-6 lg:h-6" />
        </span>
      </AppActionButton>
      <AppActionButton
        onClick={() => router.push(secondButton?.route || "/get-started")}
        variant="outline"
        className="py-5 lg:py-8 px-2 lg:px-6 text-[11px] sm:text-sm lg:text-base rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 hover:text-white cursor-pointer"
      >
        <p className="whitespace-nowrap">
          {secondButton?.title || "Download Brochure"}
        </p>
      </AppActionButton>
    </div>
  );
};

export default AppHeroCallToAction;
