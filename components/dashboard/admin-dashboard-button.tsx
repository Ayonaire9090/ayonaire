import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface AdminDashboardButtonProps {
  title?: string;
  icon?: LucideIcon;
  onClick?: () => void;
  className?: string;
}

export const AdminDashboardButton = ({
  title,
  icon: Icon,
  onClick,
  className,
}: AdminDashboardButtonProps) => {
  return (
    <>
      <Button
        onClick={onClick}
        variant="outline"
        className={`py-5! hidden md:flex items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-primary shadow-sm 
                text-white focus:outline-0! shadow-0! ${className}`}
      >
        {Icon && <Icon className="size-5" />}
        {title && <p className="text-sm">{title}</p>}
      </Button>

      <div className="fixed flex md:hidden justify-center items-center right-3 top-[50%] translate-y-[-50%] z-90">
        <Button
          onClick={onClick}
          variant="outline"
          className={`py-5! flex md:hidden items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-primary shadow-sm 
                focus:outline-0! shadow-0! ${className}`}
        >
          {Icon && <Icon className="size-5" />}
        </Button>
      </div>
    </>
  );
};
