"use client";

import { AppInput } from "@/components/ui/app-input";
import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { normalizeDashboardRole } from "@/lib/auth/roles";

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

export function ProfileForm() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);

  // Derive the correct edit path from the user's role
  const roleSegment = normalizeDashboardRole(user?.role);

  const editPath =
    roleSegment === "student"
      ? `/dashboard/student/profile/edit`
      : `/dashboard/${roleSegment}/profile/edit`;

  // Read values from the auth store, fall back to empty string
  const fullName = user?.name ?? "";
  const email = user?.email ?? "";
  const phone = user?.phoneNumber ?? "";

  // Fields not yet available in the API – kept as placeholders for future use
  const bio = user?.bio ?? "";
  const linkedIn = user?.linkedin ?? "";
  const website = user?.website ?? "";

  return (
    <div className="py-6 md:py-8 bg-white p-4 rounded-2xl my-3">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900">
          View Profile
        </h3>
        <div className="flex items-center gap-3">
          <Button
            onClick={() => router.push(editPath)}
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
          label="Full Name"
          placeholder="Enter full name"
          value={fullName}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Email Address"
          placeholder="Enter email"
          type="email"
          value={email}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Phone Number"
          placeholder="Enter phone number"
          type="tel"
          value={phone}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Bio"
          placeholder="Enter bio"
          value={bio}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="LinkedIn"
          placeholder="Enter LinkedIn URL"
          type="url"
          value={linkedIn}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />

        <AppInput
          label="Website"
          placeholder="Enter website URL"
          type="url"
          value={website}
          readOnly={true}
          className={INPUT_CLASSNAME}
        />
      </div>
    </div>
  );
}
