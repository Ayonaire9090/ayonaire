"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Upload, ImageIcon, Loader2 } from "lucide-react";
import { useAuthStore } from "@/store/auth.store";
import { useEditProfileMutation } from "@/hooks/api/use-users";

export function EditCoverPhotoContent() {
  const user = useAuthStore((state) => state.user);
  const editProfileMutation = useEditProfileMutation();
  const [preview, setPreview] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const currentCoverUrl = user?.coverPhoto?.url;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const url = URL.createObjectURL(file);
      setPreview(url);
    }
  };

  const handleSave = () => {
    if (!selectedFile) return;
    const formData = new FormData();
    formData.append("coverPhoto", selectedFile);
    editProfileMutation.mutate(formData, {
      onSuccess: () => {
        setSelectedFile(null);
        setPreview(null);
      },
    });
  };

  return (
    <div>
      {/* Section heading */}
      <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-5">
        Cover Photo
      </h2>

      {/* Current cover preview */}
      <div className="relative w-full h-[140px] md:h-[180px] rounded-xl overflow-hidden bg-[#1a1a2e] mb-6">
        {preview || currentCoverUrl ? (
          <img
            src={preview || currentCoverUrl}
            alt="Cover preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="flex flex-col items-center gap-2 text-white/50">
              <ImageIcon className="size-8" />
              <p className="text-[13px]">Current cover photo</p>
            </div>
          </div>
        )}
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
        <p className="text-[12px] text-gray-400">
          Recommended: 1200 x 300px. PNG, JPG (max 5MB)
        </p>
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
        <Button
          onClick={handleSave}
          disabled={!selectedFile || editProfileMutation.isPending}
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
