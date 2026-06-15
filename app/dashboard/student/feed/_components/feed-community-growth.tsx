import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const mockStudents = [
  { name: "Jane Doe", image: "/assets/persons/jane-doe.png" },
  { name: "John Doe", image: "/assets/persons/john-doe.png" },
  { name: "Bob", image: "/assets/persons/bob.png" },
  { name: "Member Amoran", image: "/assets/persons/member-amoran.png" },
  { name: "Member Ayo", image: "/assets/persons/member-ayo.png" },
  { name: "Student 10", image: "/assets/persons/student-1.png" },
];

export const FeedCommunityGrowth = () => {
  return (
    <div className="flex flex-col gap-3 bg-white p-4 lg:rounded-2xl">
      <h2 className="font-bold text-lg">Community Growth</h2>
      <h2 className="text-primary font-bold text-2xl lg:text-3xl">12.5K+</h2>
      <p className="text-gray-500 text-sm">Members Active This Month</p>
      <div className="flex gap-[-10px]">
        {mockStudents.map((student, index) => (
          <Avatar key={index} className="-mr-3">
            <AvatarImage src={student.image} />
            <AvatarFallback>
              {student.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        ))}
      </div>
    </div>
  );
};
