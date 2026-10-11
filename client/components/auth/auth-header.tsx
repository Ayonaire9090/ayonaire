"use client";

import { AppHeading } from "@/components/app-heading";
import { cn } from "@/lib/utils";

interface AuthHeaderProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  className?: string;
}

export function AuthHeader({ title, description, className }: AuthHeaderProps) {
  return (
    <div className={cn("text-center", className)}>
      <AppHeading
        title={title}
        description={description}
        headingLevel="h1"
        className="text-xl text-center md:text-2xl lg:text-[24px] leading-tight"
        descriptionClassName="text-[13px] md:text-sm text-muted-foreground pt-3"
      />
    </div>
  );
}
