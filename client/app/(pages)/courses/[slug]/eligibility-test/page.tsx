import { findCourseBySlug } from "@/lib/course-utils";
import { notFound } from "next/navigation";
import { courseSurveys } from "@/constants/course-surveys";
import { SurveyClient } from "./survey-client";

export default async function EligibilityTestPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const course = findCourseBySlug(slug);

  if (!course) {
    notFound();
  }

  // Get the survey data for this course
  // course.survey maps to the key in courseSurveys
  const surveyKey = course.survey || course.slug; // Fallback to slug if survey key missing (though we populated it)
  const survey = courseSurveys[surveyKey];

  if (!survey) {
    // If no specific survey data found for this course, ensure we fallback gracefully or show 404
    // Since we created surveys for most courses, this handles the check
    notFound();
  }

  return <SurveyClient survey={survey} course={course} />;
}
