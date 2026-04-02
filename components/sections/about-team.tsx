"use client";

import React from "react";
import Image from "next/image";
import { AppSectionButton } from "../app-section-button";
import { AppHeading } from "../app-heading";
import { AppSection } from "../app-section";

const teamMembers = [
  {
    image: "/assets/persons/member-ayo.png",
    name: "Awosanya Ayobami",
    position: "CEO",
  },
  {
    image: "/assets/persons/member-amoran.png",
    name: "Amoran Oluwapelumi",
    position: "COO & Chief Marketing Officer",
  },
  {
    image: "/assets/persons/member-flourish.png",
    name: "Flourish Olaiya",
    position: "COO & Chief Operating Officer",
  },
];

export const AboutTeam = () => {
  return (
    <AppSection variant="white">
      <div className="flex flex-col justify-center items-center">
        <AppSectionButton title="Team" className="w-fit bg-white my-4" />
        <AppHeading
          headingLevel="h2"
          title="Meet The Leadership Team"
          className="text-center text-[35px] lg:text-[44px] leading-tight!"
        />
      </div>

      {/* Team Members Grid */}
      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {teamMembers.map((member, index) => (
          <TeamMemberCard
            key={index}
            image={member.image}
            name={member.name}
            position={member.position}
          />
        ))}
      </div>
    </AppSection>
  );
};

interface TeamMemberCardProps {
  image: string;
  name: string;
  position: string;
}

const TeamMemberCard = ({ image, name, position }: TeamMemberCardProps) => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg">
      {/* Member Image */}
      <div className="relative  h-[370px] lg:h-[420px]">
        <Image src={image} alt={name} fill className="object-cover" />
      </div>

      {/* Orange Line */}
      <div className="absolute bottom-[72px] lg:bottom-[80px] left-0 right-0 h-1 bg-primary" />

      {/* Name and Position Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm border-t-3 border-primary px-4 py-4 lg:py-5">
        <h3 className="text-white text-lg lg:text-xl font-bold text-center">
          {name}
        </h3>
        <p className="text-primary text-sm lg:text-base text-center">
          {position}
        </p>
      </div>
    </div>
  );
};
