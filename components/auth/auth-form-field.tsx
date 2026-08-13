"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface AuthFormFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  labelClassName?: string;
}

export const AuthFormField = forwardRef<HTMLInputElement, AuthFormFieldProps>(
  (
    { label, error, className, id, type = "text", labelClassName, ...props },
    ref,
  ) => {
    const fieldId = id || label.toLowerCase().replace(/\s+/g, "-");

    // Handle checkbox type differently
    if (type === "checkbox") {
      const { checked, disabled, name, onChange, required, value } = props;

      return (
        <div className="flex items-center gap-3">
          <Checkbox
            id={fieldId}
            checked={checked}
            disabled={disabled}
            name={name}
            required={required}
            value={typeof value === "string" ? value : undefined}
            onCheckedChange={(nextChecked) => {
              onChange?.({
                target: {
                  checked: nextChecked === true,
                  id: fieldId,
                  name,
                  value: nextChecked === true ? String(value ?? "on") : "",
                },
              } as React.ChangeEvent<HTMLInputElement>);
            }}
            className={cn(
              "size-[17px] rounded-[3px] border border-[#D7D7D7] shadow-none data-[state=checked]:bg-[#16A34A] data-[state=checked]:border-[#16A34A] data-[state=checked]:text-white",
              className,
            )}
          />
          <Label
            htmlFor={fieldId}
            className={cn(
              "text-[13px] md:text-sm font-medium text-foreground cursor-pointer select-none",
              labelClassName,
            )}
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
          className={cn("text-sm font-medium text-foreground", labelClassName)}
        >
          {label}
        </Label>
        <Input
          ref={ref}
          id={fieldId}
          type={type}
          className={cn(
            "h-10 rounded-lg border-gray-200 bg-[#FBFBFB] px-4 text-base placeholder:text-muted-foreground/60 focus:border-primary focus:bg-white focus-visible:ring-primary/20 shadow-none!",
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
