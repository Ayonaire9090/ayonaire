"use client";

import { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { BadgeCheck } from "lucide-react";
import {
  AuthHeader,
  AuthFormField,
  AuthPasswordField,
  AuthPasswordStrength,
  AuthSubmitButton,
  AuthFormMessage,
  AuthFormSkeleton,
} from "@/components/auth";
import { Button } from "@/components/ui/button";
import { AcceptInviteSchema } from "@/schemas/accept-invite";
import { useAcceptInviteMutation } from "@/hooks/api/use-invites";
import { toast } from "sonner";

interface FormErrors {
  name?: string;
  password?: string;
  confirmPassword?: string;
}

function AcceptInviteContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const token = searchParams.get("token");

  const [step, setStep] = useState<"form" | "success">("form");
  const [form, setForm] = useState({ name: "", password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<FormErrors>({});

  const { mutateAsync: acceptInvite, isPending } = useAcceptInviteMutation();

  const clearError = (field: keyof FormErrors) => {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    clearError(id as keyof FormErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = AcceptInviteSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        name: fieldErrors.name?.[0],
        password: fieldErrors.password?.[0],
        confirmPassword: fieldErrors.confirmPassword?.[0],
      });
      return;
    }

    if (!token) {
      setErrors({ name: "This invite link is missing its token. Please use the link sent to your email." });
      return;
    }

    try {
      await acceptInvite({
        token,
        payload: { name: form.name, password: form.password },
      });
      toast.success("Invite accepted! You can now sign in.");
      setStep("success");
    } catch (error: any) {
      toast.error(error?.message || "Failed to accept invite");
      setErrors({ confirmPassword: error?.message || "Failed to accept invite" });
    }
  };

  if (!token && step === "form") {
    return (
      <div className="flex flex-col items-center text-center">
        <AuthHeader
          title="Invalid invite link"
          description="This invite link is missing its token. Please use the link sent to your email, or ask an admin to resend your invite."
          className="mb-8"
        />
        <Link href="/auth" className="w-full">
          <Button className="w-full h-12 rounded-[10px] text-base font-semibold bg-primary hover:bg-primary/90 text-white">
            Go to Sign In
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {step === "form" ? (
        <>
          <AuthHeader
            title="Accept your invite"
            description="Set your name and password to activate your account"
            className="mb-8"
          />

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <AuthFormField
                id="name"
                label="Full Name"
                type="text"
                placeholder=""
                value={form.name}
                onChange={handleChange}
                required
                labelClassName="font-bold! text-[14px]!"
              />
              {errors.name && <AuthFormMessage type="error" message={errors.name} />}
            </div>

            <div className="space-y-2">
              <AuthPasswordField
                id="password"
                label="Password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                required
                minLength={8}
                labelClassName="font-bold! text-[14px]! pt-3!"
              />
              {errors.password && <AuthFormMessage type="error" message={errors.password} />}
            </div>

            <div className="space-y-2">
              <AuthPasswordField
                id="confirmPassword"
                label="Confirm Password"
                placeholder=""
                value={form.confirmPassword}
                onChange={handleChange}
                required
                minLength={8}
                labelClassName="font-bold! text-[14px]! pt-3!"
              />
              {errors.confirmPassword && (
                <AuthFormMessage type="error" message={errors.confirmPassword} />
              )}
            </div>

            <AuthPasswordStrength password={form.password} />

            <AuthSubmitButton isLoading={isPending} className="mt-4">
              Activate Account
            </AuthSubmitButton>
          </form>
        </>
      ) : (
        <div className="flex flex-col items-center text-center">
          <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mb-6">
            <BadgeCheck fill="white" className="w-14 h-14 text-primary" strokeWidth={1.5} />
          </div>

          <AuthHeader
            title="Account activated"
            description="Your account is ready. Sign in to get started."
            className="mb-8 text-xl!"
          />

          <Button
            onClick={() => router.push("/auth?mode=signin")}
            className="w-full h-12 rounded-[10px] text-base font-semibold bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/30 transition-all duration-200"
          >
            Go to Sign In
          </Button>
        </div>
      )}
    </>
  );
}

export default function AcceptInvitePage() {
  return (
    <Suspense fallback={<AuthFormSkeleton />}>
      <AcceptInviteContent />
    </Suspense>
  );
}
