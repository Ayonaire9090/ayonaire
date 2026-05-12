"use client";

import { useState } from "react";
import Link from "next/link";
import { BadgeCheck } from "lucide-react";
import {
  AuthHeader,
  AuthFormField,
  AuthPasswordField,
  AuthPasswordStrength,
  AuthSubmitButton,
  AuthFormMessage,
} from "@/components/auth";
import { Button } from "@/components/ui/button";
import {
  ResetPasswordEmailSchema,
  ResetPasswordSchema,
} from "@/schemas/reset-password";

type Step = "email" | "create-password" | "success";

interface FormErrors {
  email?: string;
  newPassword?: string;
  confirmPassword?: string;
}

export default function ResetPasswordPage() {
  const [step, setStep] = useState<Step>("email");
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});

  // Clear error when user starts typing
  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  // Handle email submission
  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate email with Zod
    const result = ResetPasswordEmailSchema.safeParse({ email });
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        email: fieldErrors.email?.[0],
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call to send reset link
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Reset link sent to:", email);
    setIsLoading(false);

    // Move to create password step (simulating user clicked the link)
    setStep("create-password");
  };

  // Handle password update
  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // Validate passwords with Zod
    const result = ResetPasswordSchema.safeParse(passwords);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        newPassword: fieldErrors.newPassword?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
      });
      return;
    }

    setIsLoading(true);

    // Simulate API call to update password
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Password updated successfully");
    setIsLoading(false);

    // Move to success step
    setStep("success");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setPasswords((prev) => ({ ...prev, [id]: value }));
    clearError(id as keyof FormErrors);
  };

  return (
    <>
      {step === "email" ? (
        <>
          {/* Header for Email Step */}
          <AuthHeader
            title="Reset Password"
            description="Input your email address account to receive a reset link"
            className="mb-8"
          />

          {/* Email Form */}
          <form onSubmit={handleEmailSubmit} className="space-y-6">
            <div className="space-y-2">
              <AuthFormField
                id="email"
                label="Email Address"
                type="email"
                placeholder="your_email@example.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  clearError("email");
                }}
                required
                labelClassName="font-bold! text-[14px]!"
                className="
            bg-transparent!
            font-semibold!
            text-[14px]!
            active:bg-[#FFFCC8]! 
            focus:bg-[#FFFCC8]! 
            active:outline-none!  
            focus:outline-none!
            focus:ring-0!
            active:ring-0!
            focus-visible:ring-0!
            active-visible:ring-0!
            border-0! border-b-[1.8px]! border-b-black rounded-none!
            focus:border-b-[1.8px]! focus:border-b-gray-400!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-gray-400!
            active:border-b-[1.8px]! active:border-b-gray-400!
            active-visible:border-b-[1.8px]! active-visible:border-b-gray-400!
            not-placeholder-shown:bg-[#FFFCC8]!
            not-placeholder-shown:border-b-gray-400!
            "
              />
              {errors.email && (
                <AuthFormMessage type="error" message={errors.email} />
              )}
            </div>

            <AuthSubmitButton isLoading={isLoading} className="mt-4">
              Submit
            </AuthSubmitButton>
          </form>

          {/* Back to Sign In */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Remember your password?{" "}
            <Link
              href="/auth"
              className="font-semibold text-primary hover:underline"
            >
              Sign in
            </Link>
          </p>
        </>
      ) : step === "create-password" ? (
        <>
          {/* Header for Create Password Step */}
          <AuthHeader
            title="Create new password"
            description="Let's create a new and more secure password"
            className="mb-8"
          />

          {/* Password Form */}
          <form onSubmit={handlePasswordSubmit} className="space-y-5">
            <div className="space-y-2">
              <AuthPasswordField
                id="newPassword"
                label="New Password"
                placeholder="••••••••"
                value={passwords.newPassword}
                onChange={handlePasswordChange}
                required
                minLength={8}
                labelClassName="font-bold! text-[14px]!"
                className="
            bg-transparent!
            font-semibold!
            active:bg-[#FFFCC8]! 
            focus:bg-[#FFFCC8]! 
            active:outline-none!  
            focus:outline-none!
            focus:ring-0!
            active:ring-0!
            focus-visible:ring-0!
            active-visible:ring-0!
            border-0! border-b-[1.8px]! border-b-black rounded-none!
            focus:border-b-[1.8px]! focus:border-b-gray-400!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-gray-400!
            active:border-b-[1.8px]! active:border-b-gray-400!
            active-visible:border-b-[1.8px]! active-visible:border-b-gray-400!
            not-placeholder-shown:bg-[#FFFCC8]!
            not-placeholder-shown:border-b-gray-400!
            "
              />
              {errors.newPassword && (
                <AuthFormMessage type="error" message={errors.newPassword} />
              )}
            </div>

            <div className="space-y-2">
              <AuthPasswordField
                id="confirmPassword"
                label="Repeat New  Password"
                placeholder="••••••••"
                value={passwords.confirmPassword}
                onChange={handlePasswordChange}
                required
                minLength={8}
                labelClassName="font-bold! text-[14px]!"
                className="
            bg-transparent!
            font-semibold!
            active:bg-[#FFFCC8]! 
            focus:bg-[#FFFCC8]! 
            active:outline-none!  
            focus:outline-none!
            focus:ring-0!
            active:ring-0!
            focus-visible:ring-0!
            active-visible:ring-0!
            border-0! border-b-[1.8px]! border-b-black rounded-none!
            focus:border-b-[1.8px]! focus:border-b-gray-400!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-gray-400!
            active:border-b-[1.8px]! active:border-b-gray-400!
            active-visible:border-b-[1.8px]! active-visible:border-b-gray-400!
            not-placeholder-shown:bg-[#FFFCC8]!
            not-placeholder-shown:border-b-gray-400!
            "
              />
              {errors.confirmPassword && (
                <AuthFormMessage
                  type="error"
                  message={errors.confirmPassword}
                />
              )}
            </div>

            {/* Password Strength Indicator */}
            <AuthPasswordStrength password={passwords.newPassword} />

            <AuthSubmitButton isLoading={isLoading} className="mt-4">
              Update Password
            </AuthSubmitButton>
          </form>
        </>
      ) : (
        <>
          {/* Success Step */}
          <div className="flex flex-col items-center text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
              <BadgeCheck
                fill="white"
                className="w-14 h-14 text-primary"
                strokeWidth={1.5}
              />
            </div>

            {/* Success Header */}
            <AuthHeader
              title="Reset password successful"
              description="Successfully changed password. you can enter the main page"
              className="mb-8 text-xl!"
            />

            {/* Go to Main Page Button */}
            <Link href="/" className="w-full">
              <Button className="w-full h-12 cursor-pointer rounded-[10px] text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all duration-200">
                Go to Main Page
              </Button>
            </Link>
          </div>
        </>
      )}
    </>
  );
}
