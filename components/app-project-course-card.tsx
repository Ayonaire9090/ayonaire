import { AppHeading } from "./app-heading";

interface AppProjectCourseCardProps {
  title?: string;
  description?: string;
}
export const AppProjectCourseCard = ({ 
  title = "", 
  description = "" 
}:AppProjectCourseCardProps) => {
  return (
    <div className="flex flex-col justify-between items-start rounded-[22px] p-4 bg-linear-to-b from-[#FFEDE0] via-[#F9F9F9] to-[#F9F9F9] hover:bg-[#F9F9F9] transition-all">
      <AppHeading 
        headingLevel="h3" 
        title={title} 
        description={description}
        className="text-2xl lg:text-2xl line-clamp-2"
        descriptionClassName="line-clamp-4"
      />
    </div>
  );
};
