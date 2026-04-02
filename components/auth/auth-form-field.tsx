"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AuthFormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

export const AuthFormField = forwardRef<HTMLInputElement, AuthFormFieldProps>(
  ({ label, error, className, id, type = "text", ...props }, ref) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

    // Handle checkbox type differently
    if (type === "checkbox") {
      return (
        <div className="flex items-center gap-3">
          <Checkbox
            id={fieldId}
            required={props.required}
            className={cn(
              "w-5 h-5 rounded border-2 border-gray-300 data-[state=checked]:bg-[#F86432] data-[state=checked]:border-[#F86432] data-[state=checked]:text-white",
              className,
            )}
          />
          <Label
            htmlFor={fieldId}
            className="text-sm font-medium text-foreground cursor-pointer select-none"
          >
            {label}
          </Label>
          {error && <p className="text-sm text-destructive">{error}</p>}
        </div>
      );
    }

    return (
      <div className="space-y-2">
        <Label
          htmlFor={fieldId}
          className="text-sm font-medium text-foreground"
        >
          {label}
        </Label>
        <Input
          ref={ref}
          id={fieldId}
          type={type}
          className={cn(
            "h-12 rounded-lg border-gray-200 bg-[#FBFBFB] px-4 text-base placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus-visible:ring-primary/20 shadow-none!",
            error && "border-destructive focus-visible:ring-destructive/20",
            className,
          )}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  },
);

AuthFormField.displayName = "AuthFormField";
