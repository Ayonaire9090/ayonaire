"use client";

import { useState } from "react";
import { AppInput } from "@/components/ui/app-input";
import { Button } from "@/components/ui/button";
import { EditProfileSubTabs } from "./edit-profile-sub-tabs";
import { EDIT_INPUT_CLASSNAME } from "./edit-profile-input-styles";

const profileSubTabs = ["Name", "Company", "Social"] as const;
type ProfileSubTab = (typeof profileSubTabs)[number];

/** Name form fields */
function NameForm() {
  const [firstName, setFirstName] = useState("Ayobami");
  const [lastName, setLastName] = useState("Awosanya");
  const [userName, setUserName] = useState("Awosanya");

  return (
    <div className="flex flex-col gap-6 mt-6">
      <AppInput
        label="First Name"
        placeholder="Enter first name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
      <AppInput
        label="Last Name"
        placeholder="Enter last name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
      <AppInput
        label="User Name"
        placeholder="Enter user name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
    </div>
  );
}

/** Company form fields */
function CompanyForm() {
  const [companyName, setCompanyName] = useState("Ayonaire Academy");
  const [website, setWebsite] = useState("https://....");

  return (
    <div className="flex flex-col gap-6 mt-6">
      <AppInput
        label="Company name"
        placeholder="Enter company name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
      <AppInput
        label="website"
        placeholder="Enter website URL"
        type="url"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
    </div>
  );
}

/** Social form fields */
function SocialForm() {
  const [linkedin, setLinkedin] = useState("http://....");
  const [instagram, setInstagram] = useState("https://....");

  return (
    <div className="flex flex-col gap-6 mt-6">
      <p className="text-[14px] font-semibold text-gray-900">
        Profile URL https://....
      </p>
      <AppInput
        label="Linkedin"
        placeholder="Enter LinkedIn URL"
        type="url"
        value={linkedin}
        onChange={(e) => setLinkedin(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
      <AppInput
        label="Instagram"
        placeholder="Enter Instagram URL"
        type="url"
        value={instagram}
        onChange={(e) => setInstagram(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
    </div>
  );
}

/** Sub-tab label map for the heading */
const subTabTitleMap: Record<ProfileSubTab, string> = {
  Name: "Name",
  Company: "Company",
  Social: "Social",
};

export function EditProfileContent() {
  const [activeSubTab, setActiveSubTab] = useState<ProfileSubTab>("Name");

  return (
    <div>
      {/* Section heading */}
      <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-5">
        Edit &apos;{subTabTitleMap[activeSubTab]}&apos; Information
      </h2>

      {/* Sub tabs */}
      <EditProfileSubTabs
        tabs={profileSubTabs}
        activeTab={activeSubTab}
        onTabChange={setActiveSubTab}
      />

      {/* Form content */}
      {activeSubTab === "Name" && <NameForm />}
      {activeSubTab === "Company" && <CompanyForm />}
      {activeSubTab === "Social" && <SocialForm />}

      {/* Save button */}
      <div className="mt-8">
        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-10 rounded-lg text-[14px]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
