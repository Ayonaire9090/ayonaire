"use client";

import React, { useState, useMemo } from "react";
import { Header } from "../layout/header";
import { Progress } from "../ui/progress";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight, Send } from "lucide-react";
import { SurveyQuestion } from "@/constants/course-surveys";
import { likertOptions } from "@/constants/survey-data";
import { AppSectionButton } from "../app-section-button";
import { SurveyResults } from "./survey-results";

interface SurveyFormProps {
  onBack?: () => void;
  questions: SurveyQuestion[];
  courseTitle: string;
  resultTitle: string;
  actionRecommendation: string;
  courseSlug: string;
}

export const SurveyForm = ({
  onBack,
  questions,
  courseTitle,
  resultTitle,
  actionRecommendation,
  courseSlug,
}: SurveyFormProps) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [animationClass, setAnimationClass] = useState("");
  const [animationKey, setAnimationKey] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];

  // Calculate overall progress
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(answers).length;
  const overallProgress = Math.round(
    (answeredQuestions / totalQuestions) * 100,
  );

  const handleAnswerSelect = (value: number) => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: value,
    }));
  };

  const handleNext = () => {
    setAnimationClass("animate__animated animate__flipInY");
    setAnimationKey((prev) => prev + 1);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmit = () => {
    // Calculate the final score based on answers
    const totalScore = Object.values(answers).reduce(
      (acc, val) => acc + val,
      0,
    );
    const maxPossibleScore = totalQuestions * 5; // 5 is max Likert score
    const percentageScore = Math.round((totalScore / maxPossibleScore) * 100);
    setFinalScore(percentageScore);
    setShowResults(true);
  };

  const handleRetake = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setShowResults(false);
    setFinalScore(0);
    setAnimationClass("");
  };

  const handlePrevious = () => {
    setAnimationClass("animate__animated animate__fadeInLeft");
    setAnimationKey((prev) => prev + 1);
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (onBack) {
      onBack();
    }
  };

  const currentAnswer = answers[currentQuestion.id];

  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  // Strong areas and focus areas (Mock logic for now as questions aren't categorized per skill in this simpler model, or we need mapping)
  // For now, static or random? The prompt didn't specify dynamic areas logic update.
  // I'll keep the static/mock ones from original component or make them slightly dynamic if possible.
  // Original component hardcoded them in `getResultAreas`.
  // I'll keep hardcoded for layout preservation, as logic to derive them from 12 flat questions isn't defined.
  const getResultAreas = () => {
    const strongAreas = ["Interest", "Problem Solving", "Curiosity"];
    const focusAreas = ["Technical Skills", "Tools Usage"];
    return { strongAreas, focusAreas };
  };

  // If showing results, render the results component
  if (showResults) {
    const { strongAreas, focusAreas } = getResultAreas();
    return (
      <SurveyResults
        score={finalScore}
        strongAreas={strongAreas}
        focusAreas={focusAreas}
        onRetake={handleRetake}
        courseTitle={courseTitle}
        resultTitle={resultTitle}
        actionRecommendation={actionRecommendation}
        courseSlug={courseSlug}
      />
    );
  }

  return (
    <>
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen pointer-events-none" />
      <div className="container relative z-10">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <div className="w-full flex flex-col gap-6 my-8">
            {/* Page Header */}
            <div className="flex flex-row items-center justify-between gap-2 lg:gap-4 bg-white rounded-xl p-4">
              <h1 className="text-sm md:text-lg lg:text-3xl font-bold text-gray-900">
                Find Your Match %
              </h1>
              <nav className="text-xs lg:text-sm text-gray-500">
                <span className="hover:text-primary cursor-pointer">
                  Survey
                </span>
                <span className="mx-2">/</span>
                <span className="text-primary">Find Your Match %</span>
              </nav>
            </div>

            {/* Overall Progress */}
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-700">
                  Progress
                </span>
                <span className="text-sm font-bold text-primary">
                  {overallProgress}%
                </span>
              </div>
              <Progress value={overallProgress} className="h-2 bg-[#142038]" />
            </div>

            {/* Current Category Badge (Removed or repurposed as Course Title?) */}
            <div className="flex flex-col items-center gap-4 mt-4">
              <AppSectionButton
                title={courseTitle}
                className="bg-primary text-white hover:bg-primary/90 border-0"
                showIcon={false}
              />
              {/* Description removed as it's shown in Welcome screen usually, or we can add it here if needed. Original had category description. */}
            </div>

            {/* Question Card */}
            <div
              key={animationKey}
              className={cn(
                "bg-white rounded-2xl shadow-lg border border-gray-100 p-6 lg:p-10 mt-4",
                animationClass,
              )}
            >
              {/* Question Counter */}
              <p className="text-sm text-gray-500 mb-4">
                Question {currentQuestionIndex + 1} of {questions.length}
              </p>

              {/* Question */}
              <h2 className="text-xl lg:text-2xl font-bold text-gray-900 mb-8">
                {currentQuestion.question}
              </h2>

              {/* Answer Options */}
              <div className="flex flex-col gap-3">
                {likertOptions.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswerSelect(option.value)}
                    className={cn(
                      "w-full flex items-center gap-4 p-4 lg:p-5 rounded-xl border-2 transition-all duration-300 cursor-pointer text-left",
                      currentAnswer === option.value
                        ? "border-primary bg-[#FFF8F0]"
                        : "border-gray-200 bg-white hover:border-gray-300",
                    )}
                  >
                    {/* Radio Circle */}
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all duration-300",
                        currentAnswer === option.value
                          ? "border-primary"
                          : "border-gray-300",
                      )}
                    >
                      {currentAnswer === option.value && (
                        <div className="w-3 h-3 rounded-full bg-primary" />
                      )}
                    </div>
                    <span
                      className={cn(
                        "font-medium transition-colors",
                        currentAnswer === option.value
                          ? "text-primary"
                          : "text-gray-700",
                      )}
                    >
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>

              {/* Visual Scale Indicator */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-gray-400">Not at all</span>
                  <span className="text-sm text-gray-400">Very much</span>
                </div>
                <div className="grid grid-cols-5 gap-2">
                  {likertOptions.map((option, index) => (
                    <div
                      key={option.value}
                      className={cn(
                        "h-2 rounded-full transition-all duration-300",
                        currentAnswer && currentAnswer >= option.value
                          ? "bg-primary"
                          : "bg-gray-200",
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center mt-6">
              <button
                onClick={handlePrevious}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 text-gray-600 font-medium rounded-xl transition-all duration-300 cursor-pointer",
                  isFirstQuestion && !onBack
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-gray-100",
                )}
                disabled={isFirstQuestion && !onBack}
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Previous</span>
              </button>

              <button
                onClick={isLastQuestion ? handleSubmit : handleNext}
                disabled={currentAnswer === undefined}
                className={cn(
                  "flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl transition-all duration-300",
                  currentAnswer === undefined
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-primary/90 cursor-pointer",
                )}
              >
                <span>{isLastQuestion ? "Submit" : "Next"}</span>
                {isLastQuestion ? (
                  <Send className="w-5 h-5" />
                ) : (
                  <ArrowRight className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
