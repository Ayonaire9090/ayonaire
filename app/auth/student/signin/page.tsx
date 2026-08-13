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
import { useLoginMutation } from "@/hooks/api/use-auth";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function SignInPage() {
  const router = useRouter();
  const { mutateAsync: login, isPending } = useLoginMutation();
  const isLoading = isPending;
  const [rememberMe, setRememberMe] = useState(true);
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

    try {
      const res = await login({
        email: formData.email,
        password: formData.password,
      });
      if (res.success) {
        const user = res.user || res.data?.user;
        if (!user) {
          throw new Error("User data not found in response");
        }
        toast.success("Signed in successfully!");
        if (user.role === "admin") {
          router.push("/dashboard/admin");
        } else if (user.role === "instructor") {
          router.push("/dashboard/instructor");
        } else {
          router.push("/dashboard/student");
        }
      }
    } catch (error: any) {
      console.error("Sign in failed:", error);
      toast.error(error?.message || "Sign in failed");
    }
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
        className="mb-7"
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
            h-[58px]! lg:h-10!
          text-[#121315]!
            bg-transparent!
            font-semibold!
            text-[14px]!
            active:bg-transparent!
            focus:bg-transparent!
            active:outline-none!  
            focus:outline-none!
            focus:ring-0!
            active:ring-0!
            focus-visible:ring-0!
            active-visible:ring-0!
            border-0! border-b-[1.8px]! border-b-[#B7B7B7] rounded-none!
            focus:border-b-[1.8px]! focus:border-b-primary!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-primary!
            active:border-b-[1.8px]! active:border-b-primary!
            active-visible:border-b-[1.8px]! active-visible:border-b-primary!
            not-placeholder-shown:bg-transparent!
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
          labelClassName="font-bold! text-[14px]!"
          className="
            h-[58px]! lg:h-10!
            text-[#121315]!
            bg-transparent!
            font-semibold!
            active:bg-transparent!
            focus:bg-transparent!
            active:outline-none!  
            focus:outline-none!
            focus:ring-0!
            active:ring-0!
            focus-visible:ring-0!
            active-visible:ring-0!
            border-0! border-b-[1.8px]! border-b-[#B7B7B7] rounded-none!
            focus:border-b-[1.8px]! focus:border-b-primary!
            focus-visible:border-b-[1.8px]! focus-visible:border-b-primary!
            active:border-b-[1.8px]! active:border-b-primary!
            active-visible:border-b-[1.8px]! active-visible:border-b-primary!
            not-placeholder-shown:bg-transparent!
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
          />
          <Link
            href="/auth/reset-password"
            className="text-sm text-gray-700 font-medium hover:underline"
          >
            Forgot password
          </Link>
        </div>

        <AuthSubmitButton isLoading={isLoading}>
          Sign in
        </AuthSubmitButton>
      </form>

      {/* Footer with social login and navigation */}
      <AuthFooter
        promptText="Don't have an account?"
        actionText="Sign up for free"
        actionHref="/auth/student/signup"
        onGoogleClick={handleGoogleSignIn}
        onFacebookClick={handleFacebookSignIn}
        className="mt-10 lg:mt-6"
      />
    </>
  );
}
