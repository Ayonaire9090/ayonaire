"use client";
import React from "react";
import { Checkbox } from "@/components/ui/checkbox";

interface AppCheckProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  containerClassName?: string;
}

export function AppCheck({
  label,
  description,
  checked,
  onCheckedChange,
  className = "",
  containerClassName = "",
}: AppCheckProps) {
  return (
    <div className={`flex items-start gap-3 ${containerClassName}`}>
      <Checkbox
        className={`mt-0.5 size-[18px] rounded-[4px] border-gray-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary ${className}`}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
      {(label || description) && (
        <div className="flex flex-col gap-0.5 mt-px">
          {label && (
            <span className="text-[15px] font-medium text-gray-900">
              {label}
            </span>
          )}
          {description && (
            <span className="text-[14px] text-gray-500">{description}</span>
          )}
        </div>
      )}
    </div>
  );
}
