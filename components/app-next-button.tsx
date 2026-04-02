import { ArrowRight, ChevronRight } from "lucide-react";
import { CarouselNext } from "./ui/carousel";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonType = "default" | "rounded" | "outline";

interface AppNextButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof CarouselNext>, "children"> {
  /** Button style type: "default" (arrow), "rounded" (circular with chevron), or "outline" (transparent with border) */
  buttonType?: ButtonType;
  /** Custom content to render inside the button. Overrides buttonType icon. */
  children?: ReactNode;
  /** Additional className for the icon (only applies when using default icons) */
  iconClassName?: string;
  /** Icon stroke width (only applies when using default icons) */
  iconStrokeWidth?: number;
}

const buttonStyles: Record<ButtonType, string> = {
  default:
    "static translate-y-0 translate-x-0 border-0 hover:bg-transparent hover:text-primary size-auto!",
  rounded:
    "static translate-y-0 translate-x-0 size-10 md:size-12 rounded-full bg-white border border-gray-300 hover:border-primary hover:bg-white transition-colors",
  outline:
    "static translate-y-0 translate-x-0 size-10 md:size-12 rounded-full bg-transparent border border-[#6E6E6E] hover:border-primary transition-colors",
};

const iconStyles: Record<ButtonType, string> = {
  default: "size-[35px] text-primary",
  rounded: "size-5 md:size-6 text-primary",
  outline: "size-5 md:size-6 text-primary",
};

export const AppNextButton = ({
  buttonType = "default",
  children,
  className,
  iconClassName,
  iconStrokeWidth = 1.7,
  variant = "link",
  size = "lg",
  ...props
}: AppNextButtonProps) => {
  const IconComponent =
    buttonType === "rounded" || buttonType === "outline"
      ? ChevronRight
      : ArrowRight;

  return (
    <CarouselNext
      variant={buttonType === "rounded" ? "ghost" : variant}
      size={buttonType === "rounded" ? "icon" : size}
      className={cn(buttonStyles[buttonType], className)}
      {...props}
    >
      {children ?? (
        <IconComponent
          strokeWidth={iconStrokeWidth}
          className={cn(iconStyles[buttonType], iconClassName)}
        />
      )}
    </CarouselNext>
  );
};
