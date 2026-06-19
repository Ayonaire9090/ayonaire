"use client";

import { useState } from "react";
import { AppInput } from "@/components/ui/app-input";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const INPUT_CLASSNAME = `text-[#121315]!
  bg-transparent!
  font-semibold!
  text-[14px]!
  active:bg-[#FFFCC8]! 
  focus:bg-[#FFFCC8]! 
  active:outline-none!  
  focus:outline-none!
  focus:ring-0!
  active:ring-0!
  focus-visible:ring-0!
  active-visible:ring-0!
  border-0! border-b-[1.8px]! border-b-[#121315] rounded-none!
  focus:border-b-[1.8px]! focus:border-b-primary!
  focus-visible:border-b-[1.8px]! focus-visible:border-b-primary!
  active:border-b-[1.8px]! active:border-b-primary!
  active-visible:border-b-[1.8px]! active-visible:border-b-primary!
  not-placeholder-shown:bg-[#FFFCC8]!
  not-placeholder-shown:border-b-primary!
  cursor-not-allowed`;

interface ProfileData {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  phone: string;
  bio: string;
  linkedIn: string;
  website: string;
}

const initialData: ProfileData = {
  firstName: "Ayobami",
  lastName: "Awosanya",
  userName: "Awosanya",
  email: "example@gmail.com",
  phone: "+234 8123456789",
  bio: "Senior Software Engineer with 10+ years of experience in Python, AI, and cloud computing.",
  linkedIn: "https://linkedin.com/in/sarahmitchell",
  website: "https://sarahmitchell.dev",
};

export function ProfileForm() {
  const router = useRouter();
  const pathname = usePathname();
  const [formData, setFormData] = useState<ProfileData>(initialData);

  // Get the profile path based on route (update this later to be session based):
  const profilePath = pathname.includes("/admin")
    ? "admin"
    : pathname.includes("instructor")
      ? "/instructor"
      : pathname.includes("/student")
        ? "student"
        : "";

  const handleChange = (field: keyof ProfileData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-6 md:py-8 bg-white p-4 rounded-2xl my-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900">
          View Profile
        </h3>
        <div className="flex items-center gap-3">
          <Button
            onClick={() =>
              router.push(`/dashboard/${profilePath}/profile/edit`)
            }
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-5 h-10 rounded-lg text-[13px] cursor-pointer"
          >
            <SquarePen />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Form fields */}
      <div className="flex flex-col gap-6 max-w-[720px]">
        <AppInput
          label="First Name"
          placeholder="Enter first name"
          value={formData.firstName}
          onChange={(e) => handleChange("firstName", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Last Name"
          placeholder="Enter last name"
          value={formData.lastName}
          onChange={(e) => handleChange("lastName", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="User Name"
          placeholder="Enter user name"
          value={formData.userName}
          onChange={(e) => handleChange("userName", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Email Address"
          placeholder="Enter email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Phone Number"
          placeholder="Enter phone number"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Bio"
          placeholder="Enter bio"
          value={formData.bio}
          onChange={(e) => handleChange("bio", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="LinkedIn"
          placeholder="Enter LinkedIn URL"
          type="url"
          value={formData.linkedIn}
          onChange={(e) => handleChange("linkedIn", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Website"
          placeholder="Enter website URL"
          type="url"
          value={formData.website}
          onChange={(e) => handleChange("website", e.target.value)}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />
      </div>
    </div>
  );
}
