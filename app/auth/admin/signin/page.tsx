"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AuthHeader,
  AuthFooter,
  AuthFormField,
  AuthPasswordField,
  AuthSubmitButton,
} from "@/components/auth";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Sign in:", formData);
    setIsLoading(false);
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    // Implement Google OAuth logic
  };

  const handleFacebookSignIn = () => {
    console.log("Facebook sign in clicked");
    // Implement Facebook OAuth logic
  };

  return (
    <>
      {/* Header */}
      <AuthHeader
        title="Welcome back, Ayo"
        description="Sign in to continue to your account"
        className="mb-8"
      />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthFormField
          id="email"
          label="Email"
          type="email"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
          required
          labelClassName="font-bold! text-[14px]!"
          className="
          text-[#121315]!
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
            border-0! border-b-[1.8px]! border-b-[#121315] rounded-none!
            focus:border-b-[1.8px]! focus:border-b-primary!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-primary!
            active:border-b-[1.8px]! active:border-b-primary!
            active-visible:border-b-[1.8px]! active-visible:border-b-primary!
            not-placeholder-shown:bg-[#FFFCC8]!
            not-placeholder-shown:border-b-primary!
            "
        />

        <AuthPasswordField
          id="password"
          label="Password"
          placeholder=""
          value={formData.password}
          onChange={handleChange}
          required
          labelClassName="font-bold! text-[14px]! pt-3"
          className="
          text-[#121315]!
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
            border-0! border-b-[1.8px]! border-b-[#121315] rounded-none!
            focus:border-b-[1.8px]! focus:border-b-primary!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-primary!
            active:border-b-[1.8px]! active:border-b-primary!
            active-visible:border-b-[1.8px]! active-visible:border-b-primary!
            not-placeholder-shown:bg-[#FFFCC8]!
            not-placeholder-shown:border-b-primary!
            "
        />

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between">
          <AuthFormField
            id="terms"
            onChange={(e) => setRememberMe(e.target.checked)}
            label="Remember Me"
            type="checkbox"
            checked={rememberMe}
            required
          />
          <Link
            href="/auth/reset-password"
            className="text-sm text-gray-700 font-medium hover:underline"
          >
            Forgot password
          </Link>
        </div>

        <AuthSubmitButton isLoading={isLoading} className="mt-8">
          Sign In
        </AuthSubmitButton>
      </form>

      {/* Footer with social login and navigation */}
      <AuthFooter
        promptText="Don't have an account?"
        actionText="Sign up for free"
        actionHref="/auth/admin/signup"
        onGoogleClick={handleGoogleSignIn}
        onFacebookClick={handleFacebookSignIn}
        className="mt-6"
      />
    </>
  );
}
