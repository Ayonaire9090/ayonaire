"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ChatFormData, registrationOptions } from "@/constants/chatbot";

interface ChatRegistrationFormProps {
  onSubmit: (data: ChatFormData) => void;
}

export function ChatRegistrationForm({ onSubmit }: ChatRegistrationFormProps) {
  const [formData, setFormData] = useState<ChatFormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
    registration: "",
    agreeToTerms: false,
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const handleChange = (field: keyof ChatFormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const isFieldValid = (field: keyof ChatFormData) => {
    const value = formData[field];
    if (typeof value === "string") {
      return value.trim().length > 0;
    }
    return value === true;
  };

  const isFormValid = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.email.includes("@") &&
      formData.phoneNumber.trim() !== "" &&
      formData.registration !== "" &&
      formData.agreeToTerms
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid()) {
      onSubmit(formData);
    }
  };

  return (
    <div className="mx-auto w-full max-w-sm">
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 border-t-primary border-t-4 p-4 space-y-4"
      >
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-xs text-gray-500 font-medium">Full Name</label>
          <div className="relative">
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => handleChange("fullName", e.target.value)}
              className={cn(
                "w-full px-3 py-2.5 text-sm border-b border-gray-200",
                "focus:outline-none focus:border-primary transition-colors",
                "bg-transparent"
              )}
              placeholder="Enter your full name"
            />
            {touched.fullName && isFieldValid("fullName") && (
              <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
        </div>

        {/* Email Address */}
        <div className="space-y-1">
          <label className="text-xs text-gray-500 font-medium">
            Email Address
          </label>
          <div className="relative">
            <input
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className={cn(
                "w-full px-3 py-2.5 text-sm border-b border-gray-200",
                "focus:outline-none focus:border-primary transition-colors",
                "bg-transparent"
              )}
              placeholder="Enter your email"
            />
            {touched.email && formData.email.includes("@") && (
              <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
        </div>

        {/* Phone Number */}
        <div className="space-y-1">
          <label className="text-xs text-gray-500 font-medium">
            Phone Number
          </label>
          <div className="relative">
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => handleChange("phoneNumber", e.target.value)}
              className={cn(
                "w-full px-3 py-2.5 text-sm border-b border-gray-200",
                "focus:outline-none focus:border-primary transition-colors",
                "bg-transparent"
              )}
              placeholder="Enter your phone number"
            />
            {touched.phoneNumber && isFieldValid("phoneNumber") && (
              <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
        </div>

        {/* Registration Type */}
        <div className="space-y-1">
          <label className="text-xs text-gray-500 font-medium">
            Registration
          </label>
          <div className="relative">
            <select
              value={formData.registration}
              onChange={(e) => handleChange("registration", e.target.value)}
              className={cn(
                "w-full px-3 py-2.5 text-sm border-b border-gray-200",
                "focus:outline-none focus:border-primary transition-colors",
                "bg-transparent appearance-none cursor-pointer",
                !formData.registration && "text-gray-400"
              )}
            >
              <option value="" disabled>
                Select registration type
              </option>
              {registrationOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            {formData.registration && (
              <Check className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500" />
            )}
          </div>
        </div>

        {/* Terms checkbox */}
        <div className="flex items-start gap-2 pt-2">
          <button
            type="button"
            onClick={() => handleChange("agreeToTerms", !formData.agreeToTerms)}
            className={cn(
              "w-5 h-5 rounded flex items-center justify-center shrink-0 mt-0.5",
              "border transition-colors",
              formData.agreeToTerms
                ? "bg-green-500 border-green-500"
                : "border-gray-300 hover:border-primary"
            )}
          >
            {formData.agreeToTerms && (
              <Check className="w-3.5 h-3.5 text-white" />
            )}
          </button>
          <label className="text-xs text-gray-600 leading-relaxed">
            I Agree To The{" "}
            <a
              href="/terms"
              className="text-green-600 hover:underline font-medium"
            >
              Terms Of Service
            </a>{" "}
            &{" "}
            <a
              href="/privacy"
              className="text-green-600 hover:underline font-medium"
            >
              Privacy Policy
            </a>
            .
          </label>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={!isFormValid()}
          className={cn(
            "w-full py-3 rounded-full text-sm font-medium",
            "transition-all duration-200",
            isFormValid()
              ? "bg-linear-to-r from-green-500 to-green-600 text-white hover:from-green-600 hover:to-green-700 shadow-sm"
              : "bg-gray-100 text-gray-400 cursor-not-allowed"
          )}
        >
          Submit & Continue
        </button>
      </form>
    </div>
  );
}
