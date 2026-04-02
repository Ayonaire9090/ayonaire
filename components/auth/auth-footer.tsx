"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { AuthSocialButton } from "./auth-social-button";

interface AuthFooterProps {
  /** Text shown before the action link, e.g., "Don't have an account?" */
  promptText: string;
  /** The action link text, e.g., "Sign up for free" */
  actionText: string;
  /** The URL to navigate to */
  actionHref: string;
  /** Show or hide social login buttons */
  showSocialLogin?: boolean;
  /** Callback for Google sign-in */
  onGoogleClick?: () => void;
  /** Callback for Facebook sign-in */
  onFacebookClick?: () => void;
  className?: string;
}

export function AuthFooter({
  promptText,
  actionText,
  actionHref,
  showSocialLogin = true,
  onGoogleClick,
  onFacebookClick,
  className,
}: AuthFooterProps) {
  return (
    <div className={cn("space-y-6", className)}>
      {/* Social Login Section */}
      {showSocialLogin && (
        <div className="space-y-4">
          {/* Divider */}
          <div className="flex items-center gap-4">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-sm text-muted-foreground">Or</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Buttons */}
          <div className="flex gap-3">
            <AuthSocialButton provider="google" onClick={onGoogleClick} />
            <AuthSocialButton provider="facebook" onClick={onFacebookClick} />
          </div>
        </div>
      )}

      {/* Navigation Link */}
      <p className="text-center text-sm text-muted-foreground">
        {promptText}{" "}
        <Link
          href={actionHref}
          className="font-semibold text-[#F86432] hover:underline"
        >
          {actionText}
        </Link>
      </p>
    </div>
  );
}
