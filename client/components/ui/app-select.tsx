"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon } from "lucide-react";

export interface AppSelectOption {
  label: string;
  value: string;
  description?: string;
}

interface AppSelectProps {
  label?: React.ReactNode;
  placeholder?: string;
  options: AppSelectOption[];
  value?: string;
  onChange?: (val: string) => void;
  className?: string;
}

export function AppSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
  className = "",
}: AppSelectProps) {
  return (
    <div className="flex flex-col gap-1.5 w-full">
      {label && (
        <label className="text-[15px] font-semibold text-gray-900">
          {label}
        </label>
      )}
      <Select value={value} onValueChange={onChange}>
        <SelectTrigger
          className={`w-full px-4 h-12! bg-white border-transparent hover:border-gray-200 rounded-xl text-[15px] text-gray-700 shadow-none focus:ring-1 focus:ring-primary/30 ${className}`}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent className="rounded-xl border border-gray-100 shadow-lg bg-white">
          {options.map((opt) => (
            <SelectPrimitive.Item
              key={opt.value}
              value={opt.value}
              className="cursor-pointer py-2 px-3 m-1 rounded-lg relative flex w-[calc(100%-8px)] flex-col select-none outline-none focus:bg-accent focus:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50"
            >
              <div className="flex flex-col pr-6">
                <span className="text-[15px] text-gray-800">
                  <SelectPrimitive.ItemText>
                    {opt.label}
                  </SelectPrimitive.ItemText>
                </span>
                {opt.description && (
                  <span className="text-[13px] text-gray-400 font-normal mt-0.5">
                    {opt.description}
                  </span>
                )}
              </div>
              <span className="absolute right-3 top-0 flex h-full items-center justify-center">
                <SelectPrimitive.ItemIndicator>
                  <CheckIcon className="size-4" />
                </SelectPrimitive.ItemIndicator>
              </span>
            </SelectPrimitive.Item>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
