import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const mockStudents = [
  {
    name: "Member Jane Doe",
    image: "/assets/persons/jane-doe.png",
    contributions: 50,
  },
  {
    name: "Member Bob Marley",
    image: "/assets/persons/bob.png",
    contributions: 40,
  },
  {
    name: "Member Ayo Awosanya",
    image: "/assets/persons/member-ayo.png",
    contributions: 30,
  },
];

export const FeedTopContributors = () => {
  return (
    <div className="flex flex-col gap-3 bg-white p-4 lg:rounded-2xl">
      <div className="flex items-center gap-2">
        <Sparkles className="text-primary w-5 h-5" />
        <h2 className="font-bold text-lg">Top Contributors</h2>
      </div>
      <div className="flex flex-col gap-4">
        {mockStudents.map((student, index) => (
          <div key={index} className="flex items-center gap-5">
            <Avatar className="-mr-3">
              <AvatarImage src={student.image} />
              <AvatarFallback>
                {student.name.slice(0, 2).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <p className="flex flex-col font-semibold">
              {student.name}
              <span className="text-gray-500 font-normal text-xs">
                {student.contributions} Courses Managed
              </span>
            </p>
          </div>
        ))}
      </div>
      <Button
        variant="ghost"
        className="w-fit self-start text-primary font-medium cursor-pointer! hover:bg-transparent!"
      >
        View All Contributors <ArrowRight className="w-3 h-3 text-primary" />
      </Button>
    </div>
  );
};
