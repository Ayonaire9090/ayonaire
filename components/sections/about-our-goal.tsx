import React from "react";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import {
  Award,
  Earth,
  Heart,
  Lightbulb,
  LucideIcon,
  Target,
  TrendingUp,
  Users2,
} from "lucide-react";

const missionsInAction = [
  {
    icon: Users2,
    title: "Equip 1M Africans",
    description:
      "Training one million young Africans with job-ready digital skills by 2036",
  },
  {
    icon: Heart,
    title: "Build Africa's Top Tech Academy",
    description: "Build Africa's Top Tech Academy",
  },
  {
    icon: Award,
    title: "Empower Underrepresented Communities",
    description:
      "Breaking barriers through scholarships and accessible tech education",
  },
];

const missionCoreAssignments = [
  {
    icon: Earth,
    title: "Raise Kingdom Tech Giants",
    description:
      "Building world-class technologists who lead with purpose and excellence",
  },
  {
    icon: Lightbulb,
    title: "Build Creators, Not Just Consumers",
    description:
      "Transforming users into innovators who build solutions for global problems",
  },
  {
    icon: TrendingUp,
    title: "Break the Cycle of Poverty",
    description:
      "Using digital skills as a tool for economic empowerment and generational wealth",
  },
  {
    icon: Award,
    title: "Restore the Kingship Mandate",
    description: "Empowering believers to take dominion in the tech space",
  },
  {
    icon: Heart,
    title: "Preach Jesus in the Marketplace",
    description:
      "Demonstrating Christ's excellence through technology and innovation",
  },
  {
    icon: Target,
    title: "Raise Kingdom Financiers",
    description:
      "Creating wealth generators who fund the advancement of the gospel",
  },
];

export const AboutOurGoal = () => {
  return (
    <div className="container section-spacing">
      <div className="w-full flex flex-col justify-center text-center  gap-6">
        <AppSectionButton title="Our Goal" className="w-fit mx-auto" />
        <AppHeading
          headingLevel="h2"
          title="1 Million Young Africans by 2036"
          description="We are on a mission to equip 1,000,000 young Africans with world-class digital skills, mentorship, and global career opportunities by 2036. Through hands-on, project-based learning, we empower them to rise above poverty, build with excellence, and shape industries not just as workers, but as creators, innovators, and leaders with purpose."
          className="text-center text-[36px]! lg:text-[44px]!"
          descriptionClassName="text-center text-base pt-2 lg:text-lg!"
        />

        <div className="w-full lg:max-w-[60%] mx-auto flex flex-col justify-center items-center p-6 rounded-xl bg-linear-to-br from-[#F25E25] to-[#F97F11]">
          <h3 className="text-center font-bold text-2xl text-white">
            Our Mission
          </h3>
          <p className="text-center text-base w-full lg:max-w-[70%] mx-auto text-white">
            “To build Africa’s most trusted tech academy and career incubator
            delivering world-class training, mentorship, and real-world
            experience that empowers youth to break free from poverty, access
            global opportunities, and transform industries.”
          </p>
        </div>

        <div className="py-6">
          <h3 className="text-2xl font-extrabold text-center py-6">
            Our Mission in Action
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {missionsInAction.map((mission, index) => (
              <MissionInActionCard
                key={index}
                icon={mission.icon}
                title={mission.title}
                description={mission.description}
              />
            ))}
          </div>
        </div>
        <div className="py-6">
          <div className="w-full lg:max-w-[60%] mx-auto flex flex-col justify-center items-center p-6 rounded-xl bg-linear-to-br from-[#F25E25] to-[#F97F11]">
            <h3 className="text-center font-bold text-2xl text-white">
              Our Vision
            </h3>
            <p className="text-center text-base w-full lg:max-w-[70%] mx-auto text-white">
              “To see Africa lead in global tech innovation by raising a new
              generation of highly skilled, purpose-driven leaders who create
              solutions, build industries, and influence nations.”
            </p>
          </div>
        </div>

        <div className="py-6">
          <h3 className="text-2xl font-extrabold text-center py-6">
            Our Mission Core Assignment
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {missionCoreAssignments.map((mission, index) => (
              <MissionCoreAssignmentCard
                key={index}
                icon={mission.icon}
                title={mission.title}
                description={mission.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface MissionInActionCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const MissionInActionCard = ({
  icon: Icon,
  title,
  description,
}: MissionInActionCardProps) => {
  return (
    <div className="flex items-start gap-4 bg-white p-6 border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
      <div className="shrink-0 flex justify-center items-center w-16 h-16 rounded-full bg-[#FDE7DD]">
        <Icon className="text-primary w-7 h-7" />
      </div>
      <div className="flex flex-col items-start text-start gap-2 flex-1">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-base text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

const MissionCoreAssignmentCard = ({
  icon: Icon,
  title,
  description,
}: MissionInActionCardProps) => {
  return (
    <div className="flex flex-col items-start gap-4 bg-white p-6 border border-gray-100 rounded-2xl shadow-glow-blur hover:shadow-md transition-shadow h-full">
      <div className="shrink-0 flex justify-center items-center w-14 h-14 rounded-full bg-linear-to-b from-[#FDE7DD] to-white">
        <Icon className="text-primary w-7 h-7" />
      </div>
      <div className="flex flex-col items-start text-start gap-3 w-full">
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
        <p className="text-base text-gray-500 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
