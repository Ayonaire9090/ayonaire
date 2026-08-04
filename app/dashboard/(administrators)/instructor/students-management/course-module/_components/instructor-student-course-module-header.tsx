import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { AvatarFallback } from "@radix-ui/react-avatar";

interface InstructorStudentCourseModuleHeaderProps {
  name?: string | null;
  email?: string | null;
  isLoading?: boolean;
  found?: boolean;
}

function initials(name?: string | null) {
  if (!name) return "?";
  return name
    .split(" ")
    .map((part) => part[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export const InstructorStudentCourseModuleHeader = ({
  name,
  email,
  isLoading,
  found,
}: InstructorStudentCourseModuleHeaderProps) => {
  return (
    <div className="flex flex-col justify-center items-center bg-white p-4 lg:p-8 rounded-lg lg:rounded-xl">
      {/* Image */}
      <Avatar className="size-24">
        <AvatarImage src="/assets/persons/student-2.png" />
        <AvatarFallback>{initials(name)}</AvatarFallback>
      </Avatar>
      {/* Name and Email */}
      <div className="flex flex-col pt-3 items-center">
        <h2 className="font-bold text-lg lg:text-xl">
          {isLoading ? "Loading…" : found ? (name ?? "Unknown Student") : "Student not found"}
        </h2>
        {!isLoading && found && email && (
          <p className="text-gray-500 font-medium">{email}</p>
        )}
      </div>
    </div>
  );
};
