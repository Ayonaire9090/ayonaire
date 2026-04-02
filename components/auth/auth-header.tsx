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
        className="text-2xl text-center md:text-3xl lg:text-4xl"
        descriptionClassName="text-sm md:text-base text-muted-foreground pt-2"
      />
    </div>
  );
}
