"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import {
  AuthHeader,
  AuthBackButton,
  AuthSubmitButton,
  AuthFormSkeleton,
} from "@/components/auth";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";

function VerifyEmailContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [countdown, setCountdown] = useState(58);
  const [canResend, setCanResend] = useState(false);

  // Get email from query params or use fallback
  const email = searchParams.get("email") || "instructor@example.com";

  // Countdown timer for resend
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResendCode = async () => {
    if (!canResend) return;

    // Reset countdown
    setCountdown(58);
    setCanResend(false);

    // Simulate resending code
    console.log("Resending code to:", email);
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length !== 6) return;

    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Verifying OTP:", otp);
    setIsLoading(false);

    // Navigate to profile setup page
    router.push("/auth/instructor/complete-profile");
  };

  return (
    <>
      {/* Header */}
      <AuthHeader
        title="Verify your email"
        description={
          <>
            We&apos;ve sent a 6-digit code to
            <br />
            <span className="text-foreground font-medium">{email}</span>
          </>
        }
        className="mb-10"
      />

      {/* OTP Form */}
      <form onSubmit={handleVerify} className="space-y-6">
        {/* OTP Input */}
        <div className="flex justify-center">
          <InputOTP
            maxLength={6}
            value={otp}
            onChange={(value) => setOtp(value)}
            containerClassName="gap-2 md:gap-3 shadow-none!"
            className="shadow-none!"
          >
            <InputOTPGroup className="gap-2">
              {[0, 1, 2, 3, 4, 5].map((index) => (
                <InputOTPSlot
                  key={index}
                  index={index}
                  className="w-12 h-12 md:w-12 md:h-12 text-xl font-semibold rounded-lg border-2 border-gray-200 bg-gray-50 first:rounded-lg last:rounded-lg data-[active=true]:border-[#F86432] data-[active=true]:ring-[#F86432]/20 shadow-none!"
                />
              ))}
            </InputOTPGroup>
          </InputOTP>
        </div>

        {/* Resend Timer */}
        <p className="text-center text-sm text-muted-foreground">
          {canResend ? (
            <button
              type="button"
              onClick={handleResendCode}
              className="text-[#F86432] font-medium hover:underline cursor-pointer"
            >
              Resend code
            </button>
          ) : (
            <>
              Resend code in{" "}
              <span className="font-semibold text-foreground">
                {countdown}s
              </span>
            </>
          )}
        </p>

        {/* Verify Button */}
        <AuthSubmitButton
          isLoading={isLoading}
          disabled={otp.length !== 6}
          className="mt-4"
        >
          Verify & Continue
        </AuthSubmitButton>
      </form>

      {/* Change Email Link */}
      <button
        type="button"
        onClick={() => window.history.back()}
        className="flex items-center justify-center gap-2 w-full mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        change email address
      </button>

      {/* Support Text */}
      <p className="text-center text-xs text-muted-foreground mt-8">
        Didn&apos;t receive the email? Check your spam folder or{" "}
        <Link
          href="/contact"
          className="text-[#F86432] font-medium hover:underline"
        >
          contact support
        </Link>
      </p>
    </>
  );
}

export default function VerifyEmailPage() {
  return (
    <Suspense fallback={<AuthFormSkeleton variant="otp" />}>
      <VerifyEmailContent />
    </Suspense>
  );
}
