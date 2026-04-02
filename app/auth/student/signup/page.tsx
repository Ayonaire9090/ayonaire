"use client";

import { useState } from "react";
import {
  AuthLogo,
  AuthHeader,
  AuthFooter,
  AuthFormField,
  AuthSubmitButton,
} from "@/components/auth";

export default function SignUpPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
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

    console.log("Sign up:", formData);
    setIsLoading(false);
  };

  const handleGoogleSignUp = () => {
    console.log("Google sign up clicked");
    // Implement Google OAuth logic
  };

  const handleFacebookSignUp = () => {
    console.log("Facebook sign up clicked");
    // Implement Facebook OAuth logic
  };

  return (
    <>
      {/* Logo */}
      <AuthLogo className="mb-8" />

      {/* Header */}
      <AuthHeader
        title="Create new account"
        description="Welcome, please enter your details to get started."
        className="mb-8"
      />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthFormField
          id="fullName"
          label="Full Name"
          placeholder="Flores Juanita"
          value={formData.fullName}
          onChange={handleChange}
          required
        />

        <AuthFormField
          id="email"
          label="Email"
          type="email"
          placeholder="michelle.rivera@example.com"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <AuthFormField
          id="password"
          label="Password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
        />

        <AuthSubmitButton isLoading={isLoading} className="mt-6">
          Create Account
        </AuthSubmitButton>
      </form>

      {/* Footer with social login and navigation */}
      <AuthFooter
        promptText="Don't have an account?"
        actionText="Sign in"
        actionHref="/auth/student/signin"
        onGoogleClick={handleGoogleSignUp}
        onFacebookClick={handleFacebookSignUp}
        className="mt-6"
      />
    </>
  );
}
