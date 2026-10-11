import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface AppButtonProps {
  title?: string;
  disabled?: boolean;
  onClick?: () => void;
  variant?: "fading" | "outline" | "glass";
  children?: React.ReactNode;
  className?: string;
  id?: string;
  type?: "button" | "submit" | "reset";
}
export const AppActionButton = React.forwardRef<
  HTMLButtonElement,
  AppButtonProps
>(
  (
    {
      title,
      disabled,
      onClick,
      children,
      variant = "fading",
      className,
      id,
      type,
      ...props
    },
    ref,
  ) => {
    return (
      <Button
        ref={ref}
        id={id}
        type={type}
        className={cn(
          "p-6 rounded-lg lg:rounded-xl hover:bg-primary transition-all ease-in-out duration-300 cursor-pointer",
          variant === "outline" ? "hover:text-white" : "",
          className,
        )}
        onClick={onClick}
        disabled={disabled}
        variant={variant}
        {...props}
      >
        {title || children}
      </Button>
    );
  },
);
AppActionButton.displayName = "AppActionButton";
