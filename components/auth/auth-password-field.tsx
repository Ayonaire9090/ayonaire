"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff } from "lucide-react";
import { forwardRef, useState } from "react";

interface AuthPasswordFieldProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label: string;
  error?: string;
  labelClassName?: string;
}

export const AuthPasswordField = forwardRef<
  HTMLInputElement,
  AuthPasswordFieldProps
>(({ label, error, className, labelClassName, id, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

  return (
    <div className="space-y-2">
      <Label
        htmlFor={fieldId}
        className={cn("text-sm font-medium text-foreground", labelClassName)}
      >
        {label}
      </Label>
      <div className="relative">
        <Input
          ref={ref}
          id={fieldId}
          type={showPassword ? "text" : "password"}
          className={cn(
            "h-12 rounded-lg border-gray-200 bg-[#FBFBFB] px-4 pr-12 text-base placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus-visible:ring-primary/20 shadow-none!",
            error && "border-destructive focus-visible:ring-destructive/20",
            showPassword ? "text-[14px]!" : "text-[25px]!",
            className,
          )}
          {...props}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          tabIndex={-1}
        >
          {showPassword ? (
            <EyeOff className="size-5" />
          ) : (
            <Eye className="size-5" />
          )}
        </button>
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
});

AuthPasswordField.displayName = "AuthPasswordField";
