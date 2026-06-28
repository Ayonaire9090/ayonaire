import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

export const InstructorStudentCourseModuleHeader = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-4 lg:p-8 rounded-lg lg:rounded-xl">
      {/* Image */}
      <Avatar className="size-24">
        <AvatarImage src="/assets/persons/student-2.png" />
        <AvatarFallback>SM</AvatarFallback>
      </Avatar>
      {/* Name and Email */}
      <div className="flex flex-col pt-3">
        <h2 className="font-bold text-lg lg:text-xl">Dr.Sarah Michell</h2>
        <p className="text-gray-500 font-medium">sarah.michel;l@edu.com</p>
      </div>
    </div>
  );
};
