"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  AuthHeader,
  AuthFooter,
  AuthFormField,
  AuthPasswordField,
  AuthSubmitButton,
} from "@/components/auth";

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
      `/auth/instructor/verify-email?email=${encodeURIComponent(formData.email)}`,
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
        title="Create Instructor Account"
        description="Start Your Journey as an Instructor Today"
        className="mb-8"
      />

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <AuthFormField
          id="fullName"
          label="Full Name"
          placeholder="John Doe"
          value={formData.fullName}
          onChange={handleChange}
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

        <AuthFormField
          id="email"
          label="Email"
          type="email"
          placeholder="instructor@example.com"
          value={formData.email}
          onChange={handleChange}
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

        <AuthPasswordField
          id="password"
          label="Password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
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
        actionHref="/auth/instructor/signin"
        onGoogleClick={handleGoogleSignUp}
        onFacebookClick={handleFacebookSignUp}
        className="mt-6"
      />
    </>
  );
}
