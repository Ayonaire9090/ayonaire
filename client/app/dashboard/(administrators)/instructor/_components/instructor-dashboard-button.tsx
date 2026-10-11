import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface InstructorDashboardButtonProps {
  title?: string;
  icon?: LucideIcon;
  showFullButtonOnMobile?: boolean;
  onClick?: () => void;
  className?: string;
}

export const InstructorDashboardButton = ({
  title,
  icon: Icon,
  showFullButtonOnMobile = false,
  onClick,
  className,
}: InstructorDashboardButtonProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant="outline"
        className={cn(
          "py-5! items-center cursor-pointer justify-center gap-2",
          "rounded-lg bg-primary shadow-sm",
          "text-white focus:outline-0! shadow-0!",
          showFullButtonOnMobile ? "flex! md:flex" : "hidden md:flex",
          className,
        )}
      >
        {Icon && <Icon className="size-5" />}
        {title && <p className="text-sm">{title}</p>}
      </Button>

      <div
        className={cn(
          "fixed flex  justify-center items-center right-3 top-[50%] translate-y-[-50%] z-90",
          showFullButtonOnMobile ? "hidden" : "md:hidden",
        )}
      >
        <Button
          onClick={onClick}
          variant="outline"
          className={cn(
            "py-5! flex  items-center cursor-pointer justify-center gap-2 ",
            "rounded-lg bg-primary shadow-sm",
            "focus:outline-0! shadow-0!",
            showFullButtonOnMobile ? "hidden" : "md:hidden",
            className,
          )}
        >
          {Icon && <Icon className="size-5 text-white" />}
        </Button>
      </div>
    </>
  );
};
