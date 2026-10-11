"use client";

import { cn } from "@/lib/utils";
import { useMemo } from "react";

interface AuthPasswordStrengthProps {
  password: string;
  className?: string;
}

type StrengthLevel = "weak" | "fair" | "good" | "strong";

interface StrengthResult {
  level: StrengthLevel;
  score: number;
  label: string;
  color: string;
}

function calculatePasswordStrength(password: string): StrengthResult {
  let score = 0;

  if (!password) {
    return { level: "weak", score: 0, label: "", color: "bg-gray-200" };
  }

  // Length checks
  if (password.length >= 8) score += 1;
  if (password.length >= 12) score += 1;

  // Character variety checks
  if (/[a-z]/.test(password)) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[^a-zA-Z0-9]/.test(password)) score += 1;

  // Determine level based on score
  if (score <= 2) {
    return { level: "weak", score: 1, label: "Weak", color: "bg-red-500" };
  } else if (score <= 3) {
    return { level: "fair", score: 2, label: "Fair", color: "bg-orange-500" };
  } else if (score <= 4) {
    return { level: "good", score: 3, label: "Good", color: "bg-yellow-500" };
  } else {
    return {
      level: "strong",
      score: 4,
      label: "Strong",
      color: "bg-green-500",
    };
  }
}

export function AuthPasswordStrength({
  password,
  className,
}: AuthPasswordStrengthProps) {
  const strength = useMemo(
    () => calculatePasswordStrength(password),
    [password],
  );

  if (!password) return null;

  return (
    <div className={cn("space-y-2", className)}>
      <p className="text-sm text-muted-foreground">
        Min 8 Characters with a combination of letters and numbers
      </p>
      <div className="flex items-center gap-2">
        {/* Strength bars */}
        <div className="flex flex-1 gap-1">
          {[1, 2, 3, 4].map((level) => (
            <div
              key={level}
              className={cn(
                "h-1.5 flex-1 rounded-full transition-colors duration-300",
                level <= strength.score ? strength.color : "bg-gray-200",
              )}
            />
          ))}
        </div>
        {/* Strength label */}
        <span
          className={cn(
            "text-sm font-medium",
            strength.level === "weak" && "text-red-500",
            strength.level === "fair" && "text-orange-500",
            strength.level === "good" && "text-yellow-600",
            strength.level === "strong" && "text-green-500",
          )}
        >
          {strength.label}
        </span>
      </div>
    </div>
  );
}
