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
import { useRegisterMutation } from "@/hooks/api/use-auth";
import { toast } from "sonner";

export default function SignUpPage() {
  const router = useRouter();
  const { mutateAsync: register, isPending } = useRegisterMutation();
  const isLoading = isPending;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      toast.success("Account created! Please verify your email.");
      // Redirect to verify email page
      // TODO: Update this routing logic when auto-login endpoint or token on register is available
      router.push(
        `/auth/admin/verify-email?email=${encodeURIComponent(formData.email)}`,
      );
    } catch (error: any) {
      console.error("Sign up failed:", error);
      toast.error(error?.message || "Sign up failed");
    }
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
          id="name"
          label="Full Name"
          placeholder=""
          value={formData.name}
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

        <AuthFormField
          id="email"
          label="Email"
          type="email"
          placeholder=""
          value={formData.email}
          onChange={handleChange}
          required
          labelClassName="font-bold! text-[14px]! pt-3!"
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
          minLength={8}
          labelClassName="font-bold! text-[14px]! pt-3!"
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
        promptText="Already have an account?"
        actionText="Sign in"
        actionHref="/auth/admin/signin"
        onGoogleClick={handleGoogleSignUp}
        onFacebookClick={handleFacebookSignUp}
        className="mt-6"
      />
    </>
  );
}
