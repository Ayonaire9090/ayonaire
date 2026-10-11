"use client";

import { useState } from "react";
import { SurveyWelcome } from "@/components/sections/survey-welcome";
import { SurveyForm } from "@/components/sections/survey-form";
import { CourseSurvey } from "@/constants/course-surveys";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

interface SurveyClientProps {
  survey: CourseSurvey;
  course: any; // Using any for course structure from constants/courses.ts as it's not strictly typed there yet
}

export const SurveyClient = ({ survey, course }: SurveyClientProps) => {
  const [showSurvey, setShowSurvey] = useState(false);

  return (
    <>
      <main>
        {showSurvey ? (
          <SurveyForm
            onBack={() => setShowSurvey(false)}
            questions={survey.questions}
            courseTitle={course.title}
            resultTitle={survey.resultTitle}
            actionRecommendation={survey.actionRecommendation}
            courseSlug={course.slug}
          />
        ) : (
          <SurveyWelcome
            onGetStarted={() => setShowSurvey(true)}
            title={survey.title}
            subtitle={survey.subtitle || ""}
            description={survey.description || ""}
          />
        )}
      </main>

      {/* Footer With Logo Decoration - Preserved from original layout */}
      <div className="relative w-full mt-16 lg:mt-64">
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
};
