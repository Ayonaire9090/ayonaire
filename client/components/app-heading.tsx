import { cn } from "@/lib/utils";
import { melodrama, splineSans } from "@/app/fonts";
import React from "react";
interface AppHeadingProps {
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  descriptionClassName?: string;
  fontVariant?: "melodrama" | "splineSans";
}

export const AppHeading = ({
  title,
  description,
  headingLevel: Tag = "h1",
  className,
  descriptionClassName,
  fontVariant = "splineSans",
}: AppHeadingProps) => {
  return (
    <div>
      <Tag
        className={cn(
          "font-bold",
          fontVariant === "melodrama"
            ? melodrama.className
            : splineSans.className,
          Tag === "h1"
            ? "text-4xl md:text-5xl lg:text-6xl"
            : "text-2xl md:text-4xl",
          className,
        )}
      >
        {title}
      </Tag>
      <p className={cn("text-gray-500 pt-5", descriptionClassName)}>
        {description}
      </p>
    </div>
  );
};
