"use client";

import { useState } from "react";
import {
  AuthHeader,
  AuthFooter,
  AuthFormField,
  AuthPasswordField,
  AuthSubmitButton,
} from "@/components/auth";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
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

    // Redirect to verify email page
    router.push(
      `/auth/admin/verify-email?email=${encodeURIComponent(formData.email)}`,
    );
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
      {/* Header */}
      <AuthHeader
        title="Create Admin Account"
        description="Manage Your Institution's Affairs"
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

        <AuthPasswordField
          id="password"
          label="Password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          required
          minLength={8}
        />

        {/* Checkbox */}
        <AuthFormField
          id="terms"
          label="I agree to the terms and privacy policy"
          type="checkbox"
          required
        />

        <AuthSubmitButton isLoading={isLoading} className="mt-6">
          Create Account
        </AuthSubmitButton>
      </form>

      {/* Footer with social login and navigation */}
      <AuthFooter
        promptText="Don't have an account?"
        actionText="Sign in"
        actionHref="/auth/admin/signin"
        onGoogleClick={handleGoogleSignUp}
        onFacebookClick={handleFacebookSignUp}
        className="mt-6"
      />
    </>
  );
}
