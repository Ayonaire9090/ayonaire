import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface AdminDashboardButtonProps {
  title?: string;
  icon?: LucideIcon;
  className?: string;
}

export const AdminDashboardButton = ({
  title,
  icon: Icon,
  className,
}: AdminDashboardButtonProps) => {
  return (
    <Button
      variant="outline"
      className={`py-5! flex items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-primary shadow-sm 
                text-white focus:outline-0! shadow-0! ${className}`}
    >
      {Icon && <Icon className="size-5 text-white" />}
      {title && <p className="text-sm text-white">{title}</p>}
    </Button>
  );
};
