import { LucideIcon } from "lucide-react";
import { AppHeading } from "./app-heading";

interface AppCourseMostDemandCardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
}
export const AppCourseMostDemandCard = ({
  icon: Icon,
  title,
  description,
}: AppCourseMostDemandCardProps) => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 p-6 lg:p-4 rounded-xl bg-white border border-l-3 border-l-primary border-t-orange-500 border-t-2 border-r-primary/20 border-r-3 border-b-orange-300 border-b-2">
      {Icon && <Icon size={50} className="text-primary" />}
      <AppHeading 
        headingLevel="h2" 
        title={title} 
        description={description}
        className="text-center text-[24px] lg:text-[28px] font-semibold"
        descriptionClassName="text-center"
     />
    </div>
  );
};
