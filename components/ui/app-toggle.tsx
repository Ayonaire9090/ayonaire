"use client";
import React from 'react';
import { Switch } from "@/components/ui/switch";

interface AppToggleProps {
  label?: React.ReactNode;
  description?: React.ReactNode;
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  className?: string;
  containerClassName?: string;
}

export function AppToggle({ label, description, checked, onCheckedChange, className = "", containerClassName = "" }: AppToggleProps) {
  return (
    <div className={`flex items-center justify-between w-full gap-4 ${containerClassName}`}>
      {(label || description) && (
        <div className="flex flex-col gap-0.5">
          {label && <span className="text-[15px] font-medium text-gray-900">{label}</span>}
          {description && <span className="text-[14px] text-gray-500">{description}</span>}
        </div>
      )}
      <Switch 
        className={`data-[state=checked]:bg-black ${className}`}
        checked={checked}
        onCheckedChange={onCheckedChange}
      />
    </div>
  );
}
