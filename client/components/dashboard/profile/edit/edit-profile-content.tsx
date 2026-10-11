"use client";

import { useState, useEffect } from "react";
import { AppInput } from "@/components/ui/app-input";
import { Button } from "@/components/ui/button";
import { EditProfileSubTabs } from "./edit-profile-sub-tabs";
import { EDIT_INPUT_CLASSNAME } from "./edit-profile-input-styles";
import { useAuthStore } from "@/store/auth.store";
import { useEditProfileMutation } from "@/hooks/api/use-users";
import { Loader2 } from "lucide-react";

const profileSubTabs = ["Name", "Company", "Social"] as const;
type ProfileSubTab = (typeof profileSubTabs)[number];

/** Name form fields — pre-populated from auth store */
function NameForm({
  fullName,
  phoneNumber,
  onNameChange,
  onPhoneChange,
}: {
  fullName: string;
  phoneNumber: string;
  onNameChange: (value: string) => void;
  onPhoneChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <AppInput
        label="Full Name"
        placeholder="Enter full name"
        value={fullName}
        onChange={(e) => onNameChange(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
      <AppInput
        label="Phone Number"
        placeholder="Enter phone number"
        type="tel"
        value={phoneNumber}
        onChange={(e) => onPhoneChange(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
    </div>
  );
}

/** Company form fields */
function CompanyForm({
  companyName,
  website,
  onCompanyNameChange,
  onWebsiteChange,
}: {
  companyName: string;
  website: string;
  onCompanyNameChange: (value: string) => void;
  onWebsiteChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <AppInput
        label="Company name"
        placeholder="Enter company name"
        value={companyName}
        onChange={(e) => onCompanyNameChange(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
      <AppInput
        label="Website"
        placeholder="Enter website URL"
        type="url"
        value={website}
        onChange={(e) => onWebsiteChange(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
    </div>
  );
}

/** Social form fields */
function SocialForm({
  linkedin,
  instagram,
  onLinkedinChange,
  onInstagramChange,
}: {
  linkedin: string;
  instagram: string;
  onLinkedinChange: (value: string) => void;
  onInstagramChange: (value: string) => void;
}) {
  return (
    <div className="flex flex-col gap-6 mt-6">
      <p className="text-[14px] font-semibold text-gray-900">Profile URL</p>
      <AppInput
        label="Linkedin"
        placeholder="Enter LinkedIn URL"
        type="url"
        value={linkedin}
        onChange={(e) => onLinkedinChange(e.target.value)}
        className={EDIT_INPUT_CLASSNAME}
      />
      <AppInput
        label="Instagram"
        placeholder="Enter Instagram URL"
        type="url"
        value={instagram}
        onChange={(e) => onInstagramChange(e.target.value)}
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
  const user = useAuthStore((state) => state.user);
  const editProfileMutation = useEditProfileMutation();

  // Editable state, initialized from the store
  const [fullName, setFullName] = useState(user?.name ?? "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber ?? "");
  const [companyName, setCompanyName] = useState(user?.company ?? "");
  const [website, setWebsite] = useState(user?.website ?? "");
  const [linkedin, setLinkedin] = useState(user?.linkedin ?? "");
  const [instagram, setInstagram] = useState(user?.instagram ?? "");

  // Re-sync when user data changes (e.g. after profile fetch)
  useEffect(() => {
    if (user) {
      setFullName(user.name ?? "");
      setPhoneNumber(user.phoneNumber ?? "");
      setCompanyName(user.company ?? "");
      setWebsite(user.website ?? "");
      setLinkedin(user.linkedin ?? "");
      setInstagram(user.instagram ?? "");
    }
  }, [user]);

  const handleSave = () => {
    const formData = new FormData();
    let hasChanges = false;

    if (activeSubTab === "Name") {
      if (fullName !== (user?.name ?? "")) {
        formData.append("name", fullName);
        hasChanges = true;
      }
      if (phoneNumber !== (user?.phoneNumber ?? "")) {
        formData.append("phoneNumber", phoneNumber);
        hasChanges = true;
      }
    } else if (activeSubTab === "Company") {
      if (companyName !== (user?.company ?? "")) {
        formData.append("company", companyName);
        hasChanges = true;
      }
      if (website !== (user?.website ?? "")) {
        formData.append("website", website);
        hasChanges = true;
      }
    } else if (activeSubTab === "Social") {
      if (linkedin !== (user?.linkedin ?? "")) {
        formData.append("linkedin", linkedin);
        hasChanges = true;
      }
      if (instagram !== (user?.instagram ?? "")) {
        formData.append("instagram", instagram);
        hasChanges = true;
      }
    }

    if (hasChanges) {
      editProfileMutation.mutate(formData);
    }
  };

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
      {activeSubTab === "Name" && (
        <NameForm
          fullName={fullName}
          phoneNumber={phoneNumber}
          onNameChange={setFullName}
          onPhoneChange={setPhoneNumber}
        />
      )}
      {activeSubTab === "Company" && (
        <CompanyForm
          companyName={companyName}
          website={website}
          onCompanyNameChange={setCompanyName}
          onWebsiteChange={setWebsite}
        />
      )}
      {activeSubTab === "Social" && (
        <SocialForm
          linkedin={linkedin}
          instagram={instagram}
          onLinkedinChange={setLinkedin}
          onInstagramChange={setInstagram}
        />
      )}

      {/* Save button */}
      <div className="mt-8">
        <Button
          onClick={handleSave}
          disabled={editProfileMutation.isPending}
          className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-10 rounded-lg text-[14px]"
        >
          {editProfileMutation.isPending && (
            <Loader2 className="size-4 mr-2 animate-spin" />
          )}
          Save Changes
        </Button>
      </div>
    </div>
  );
}
