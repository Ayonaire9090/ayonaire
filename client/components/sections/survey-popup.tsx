import React from "react";
import { AppSurveyPopup } from "@/components/app-survey-popup";

interface SurveyPopupProps {
  mode?: "popup" | "section";
}

export const SurveyPopup = ({ mode = "popup" }: SurveyPopupProps) => {
  return (
    <section className="w-full py-8 md:py-12">
      <AppSurveyPopup mode={mode} />
    </section>
  );
};
