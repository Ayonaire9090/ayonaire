import { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";

interface AdminDashboardUploadButtonProps {
  title: string;
  icon?: LucideIcon;
}

export const AdminDashboardUploadButton = ({
  title,
  icon: Icon,
}: AdminDashboardUploadButtonProps) => {
  return (
    <Button
      variant="outline"
      className="py-5! flex items-center cursor-pointer justify-center gap-2 
                rounded-lg bg-primary shadow-sm 
                text-white focus:outline-0! shadow-0!"
    >
      {Icon && <Icon className="size-5 text-white" />}
      <p className="text-sm text-white">{title}</p>
    </Button>
  );
};
