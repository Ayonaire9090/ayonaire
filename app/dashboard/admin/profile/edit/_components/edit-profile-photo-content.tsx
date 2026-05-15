"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { EditProfileSubTabs } from "./edit-profile-sub-tabs";
import { Upload, Camera, Trash2, ImageIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const photoSubTabs = ["Upload", "Take Photo"] as const;
type PhotoSubTab = (typeof photoSubTabs)[number];

/** Upload photo form */
function UploadPhotoForm() {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  return (
    <div className="mt-6">
      {/* Current photo */}
      <div className="flex items-center gap-4 mb-6">
        <Avatar className="size-20 border-2 border-gray-200">
          <AvatarImage
            src={preview || "https://randomuser.me/api/portraits/men/32.jpg"}
            alt="Profile photo"
          />
          <AvatarFallback className="text-xl font-bold bg-gray-200 text-gray-600">
            SM
          </AvatarFallback>
        </Avatar>
        <div>
          <p className="text-[14px] font-semibold text-gray-900">
            Current Profile Photo
          </p>
          <p className="text-[13px] text-gray-400 mt-0.5">
            JPG, PNG or GIF. Max size 2MB.
          </p>
        </div>
      </div>

      {/* Upload area */}
      <div
        onClick={() => fileInputRef.current?.click()}
        className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-primary/40 hover:bg-primary/5 transition-colors"
      >
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Upload className="size-5 text-primary" />
        </div>
        <p className="text-[14px] font-medium text-gray-600">
          Click to upload or drag and drop
        </p>
        <p className="text-[12px] text-gray-400">PNG, JPG or GIF (max 2MB)</p>
      </div>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      {/* Save button */}
      <div className="mt-6">
        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-10 rounded-lg text-[14px]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

/** Take photo form */
function TakePhotoForm() {
  return (
    <div className="mt-6">
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 flex flex-col items-center justify-center gap-3">
        <div className="size-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Camera className="size-5 text-primary" />
        </div>
        <p className="text-[14px] font-medium text-gray-600">
          Use your camera to take a photo
        </p>
        <Button
          variant="outline"
          className="mt-2 font-semibold text-[13px] px-5 h-10 rounded-lg border-primary text-primary hover:bg-primary/5"
        >
          <Camera className="size-4 mr-1.5" />
          Open Camera
        </Button>
      </div>

      {/* Save button */}
      <div className="mt-6">
        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-10 rounded-lg text-[14px]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}

export function EditProfilePhotoContent() {
  const [activeSubTab, setActiveSubTab] = useState<PhotoSubTab>("Upload");

  return (
    <div>
      {/* Section heading */}
      <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-5">
        Profile Photo
      </h2>

      {/* Sub tabs + Delete button row */}
      <div className="flex items-center justify-between">
        <EditProfileSubTabs
          tabs={photoSubTabs}
          activeTab={activeSubTab}
          onTabChange={setActiveSubTab}
        />
        <Button
          variant="outline"
          className="text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600 font-semibold text-[13px] px-4 h-9 rounded-lg gap-1.5"
        >
          <Trash2 className="size-3.5" />
          Delete
        </Button>
      </div>

      {/* Sub tab content */}
      {activeSubTab === "Upload" && <UploadPhotoForm />}
      {activeSubTab === "Take Photo" && <TakePhotoForm />}
    </div>
  );
}
