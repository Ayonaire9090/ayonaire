"use client";
import React, { InputHTMLAttributes } from 'react';
import { Input } from "@/components/ui/input";

export interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
  error?: string;
  Icon?: React.ReactNode;
}

export function AppInput({ label, error, Icon, className = "", ...props }: AppInputProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && <label className="text-[15px] font-semibold text-gray-900">{label}</label>}
      <div className="relative">
        {Icon && <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">{Icon}</div>}
        <Input 
          className={`w-full ${Icon ? "pl-11" : "px-4"} h-12 bg-white border-transparent hover:border-gray-200 rounded-xl text-[15px] text-gray-900 placeholder:text-gray-400 focus-visible:ring-1 focus-visible:ring-primary/30 shadow-none ${className}`} 
          {...props} 
        />
      </div>
      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}
