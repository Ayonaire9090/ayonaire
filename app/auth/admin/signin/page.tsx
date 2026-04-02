"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AuthLogo,
  AuthHeader,
  AuthFooter,
  AuthFormField,
  AuthSubmitButton,
} from "@/components/auth";

export default function SignInPage() {
  const [isLoading, setIsLoading] = useState(false);
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
      {/* Logo */}
      <AuthLogo className="mb-8" />

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
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <div className="space-y-2">
          <AuthFormField
            id="password"
            label="Password"
            type="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <Link
            href="/auth/reset-password"
            className="block text-sm text-green-700 font-medium hover:underline"
          >
            Forgot password?
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
