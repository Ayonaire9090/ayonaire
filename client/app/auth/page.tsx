"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { GraduationCap, Users, ShieldCheck } from "lucide-react";
import {
  AuthHeader,
  AuthSubmitButton,
  AuthRoleSelectionSkeleton,
} from "@/components/auth";
import { cn } from "@/lib/utils";

type UserRole = "instructor" | "student" | "admin";

interface RoleOption {
  id: UserRole;
  title: string;
  description: string;
  icon: React.ReactNode;
  signupPath: string;
  signinPath: string;
}

const roleOptions: RoleOption[] = [
  {
    id: "instructor",
    title: "I'm an Instructor",
    description: "Share your knowledge and teach courses",
    icon: <GraduationCap className="w-6 h-6" />,
    signupPath: "/auth/instructor/signup",
    signinPath: "/auth/instructor/signin",
  },
  {
    id: "student",
    title: "I'm a Student",
    description: "Learn new skills from expert instructors",
    icon: <Users className="w-6 h-6" />,
    signupPath: "/auth/student/signup",
    signinPath: "/auth/student/signin",
  },
  {
    id: "admin",
    title: "I'm an Admin",
    description: "Manage platform and oversee operations",
    icon: <ShieldCheck className="w-6 h-6" />,
    signupPath: "/auth/admin/signup",
    signinPath: "/auth/admin/signin",
  },
];

function AuthPageContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);

  // Check if we're in signin or signup mode (default to signup)
  const mode = searchParams.get("mode") === "signin" ? "signin" : "signup";

  const handleContinue = () => {
    if (!selectedRole) return;

    const selectedOption = roleOptions.find((opt) => opt.id === selectedRole);
    if (selectedOption) {
      const path =
        mode === "signin"
          ? selectedOption.signinPath
          : selectedOption.signupPath;
      router.push(path);
    }
  };

  return (
    <>
      {/* Header */}
      <AuthHeader
        title="Welcome to Ayonaire"
        description="How would you like to get started?"
        className="mb-8"
      />

      {/* Role Selection Cards */}
      <div className="space-y-4 mb-8">
        {roleOptions.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setSelectedRole(option.id)}
            className={cn(
              "w-full flex items-center gap-4 p-4 rounded-xl border-2 transition-all duration-200 cursor-pointer text-left",
              selectedRole === option.id
                ? "border-[#F86432] bg-[#F86432]/5"
                : "border-gray-200 hover:border-gray-300 bg-white",
            )}
          >
            {/* Icon */}
            <div
              className={cn(
                "w-12 h-12 rounded-xl flex items-center justify-center transition-colors",
                selectedRole === option.id
                  ? "bg-[#F86432]/10 text-[#F86432]"
                  : "bg-gray-100 text-gray-500",
              )}
            >
              {option.icon}
            </div>

            {/* Text Content */}
            <div className="flex-1">
              <h3 className="font-semibold text-[#121315]">{option.title}</h3>
              <p className="text-sm text-gray-500">{option.description}</p>
            </div>

            {/* Radio Indicator */}
            <div
              className={cn(
                "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors",
                selectedRole === option.id
                  ? "border-[#F86432]"
                  : "border-gray-300",
              )}
            >
              {selectedRole === option.id && (
                <div className="w-2.5 h-2.5 rounded-full bg-[#F86432]" />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Continue Button */}
      <AuthSubmitButton
        type="button"
        onClick={handleContinue}
        disabled={!selectedRole}
        className={cn(!selectedRole && "opacity-50 cursor-not-allowed")}
      >
        Continue
      </AuthSubmitButton>
    </>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<AuthRoleSelectionSkeleton />}>
      <AuthPageContent />
    </Suspense>
  );
}
