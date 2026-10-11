import { cn } from "@/lib/utils";
import React from "react";

interface AppSectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Whether to show the default background gradient found in many sections.
   * Default: "default" (no specific background, transparent)
   * "gradient": applies the standard orange/peach gradient.
   * "white": applies a white background.
   */
  variant?: "default" | "gradient" | "white";
  /**
   * Optional custom background decoration (e.g., extra images or divs).
   * This is rendered absolutely positioned behind the content but above the base background.
   */
  direction?: "top" | "bottom";
  /**
   * Optional custom background decoration (e.g., extra images or divs).
   * This is rendered absolutely positioned behind the content but above the base background.
   */
  decoration?: React.ReactNode;
  /**
   * ClassName for the inner container div.
   * By default, has "container relative mx-auto".
   */
  containerClassName?: string;
  /**
   * Whether to use the standard "section-spacing" utility class (margins).
   * Default: true
   */
  useSectionSpacing?: boolean;
}

export const AppSection = ({
  children,
  className,
  containerClassName,
  variant = "default",
  direction = "bottom",
  decoration,
  useSectionSpacing = true,
  ...props
}: AppSectionProps) => {
  return (
    <section
      className={cn(
        "relative w-full",
        useSectionSpacing && "section-spacing",
        variant === "white" && "bg-white",
        className
      )}
      {...props}
    >
      {/* Background Gradient */}
      {variant === "gradient" && (
        <>
          {direction === "bottom" && (
            <div className="absolute inset-0 bg-linear-to-b from-white via-[#FFE7DE] to-[#FFE7DE] -z-10" />
          )}
          {direction === "top" && (
            <div className="absolute inset-0 bg-linear-to-t from-[#FFE7DE] via-[#FFE7DE] to-white -z-10" />
          )}
        </>
      )}

      {/* Custom Decoration */}
      {decoration}

      {/* Content Container */}
      <div className={cn("container relative mx-auto", containerClassName)}>
        {children}
      </div>
    </section>
  );
};
