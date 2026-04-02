import { AppSection } from "../app-section";
import { AppHeading } from "../app-heading";
import { AppSectionButton } from "../app-section-button";
import { FileText, Bot, LucideIcon, UserCheck } from "lucide-react";

const processSteps = [
  {
    id: "1",
    icon: FileText,
    title: "Lead the Shift",
    desciption: "Share the role, skills, and experience needed.",
  },
  {
    id: "2",
    icon: Bot,
    title: "Skills for Tomorrow",
    desciption: "Get instant access to pre-vetted candidates.",
  },
  {
    id: "3",
    icon: UserCheck,
    title: "From Learning to Impact",
    desciption: "Connect, interview, and bring the right talent on board.",
  },
];

export const HireWorkingProcess = () => {
  return (
    <AppSection
      variant="gradient"
      containerClassName="flex flex-col justify-center items-center gap-3 w-full"
    >
      <AppSectionButton title="Working Process" />
      <AppHeading
        headingLevel="h2"
        title="How It Works"
        description="Three simple steps to build your dream team"
        className="text-center text-[36px]! lg:text-[44px]!"
        descriptionClassName="text-center text-base pt-2 lg:text-lg!"
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 py-16">
        {processSteps.map((step, index) => (
          <HireWorkingProcessCard
            key={index}
            id={step.id}
            icon={step.icon}
            title={step.title}
            description={step.desciption}
          />
        ))}
      </div>
    </AppSection>
  );
};

interface HireWorkingProcessCardProps {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const HireWorkingProcessCard = ({
  id,
  icon: Icon,
  title,
  description,
}: HireWorkingProcessCardProps) => {
  return (
    <div className="pt-10 pb-6 px-5 relative w-full flex flex-col items-center justify-center gap-4 bg-white hover:bg-[#FFF8F8] rounded-[16px] border border-gray-200 hover:border-primary h-[250px]">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 flex justify-center items-center rounded-full bg-primary p-3 w-10 h-10 shadow-xl">
        <p className="text-white text-[20px] font-bold">{id}</p>
      </div>
      <div className="flex justify-center items-center rounded-full bg-[#F59F0A]/10 p-3 w-12 h-12 ">
        <Icon className="w-10 h-10 text-primary" />
      </div>
      <AppHeading
        headingLevel="h2"
        title={title}
        description={description}
        className="text-center text-xl! lg:text-xl!"
        descriptionClassName="text-base text-center text-[#141414] opacity-70! pt-2!"
      />
    </div>
  );
};
