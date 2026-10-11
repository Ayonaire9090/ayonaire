"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { FileText, Plus, X } from "lucide-react";
import { CourseCategory } from "@/lib/api/endpoints/courses";
import { useCreateCategoryMutation } from "@/hooks/api/use-courses";

export interface ClassInfoValue {
  title: string;
  description: string;
  category: string;
  price: string;
  courseLevel: "Beginner" | "Intermediate" | "Advanced";
  thumbnailFile: File | null;
  thumbnailPreviewUrl: string | null;
  introVideoSource: "url" | "upload";
  introVideoUrl: string;
  introVideoFile: File | null;
}

interface ClassInformationStepProps {
  value: ClassInfoValue;
  onChange: (patch: Partial<ClassInfoValue>) => void;
  categories: CourseCategory[];
  errors?: Partial<Record<keyof ClassInfoValue, string>>;
}

const levelOptions = [
  { label: "Beginner", value: "Beginner" },
  { label: "Intermediate", value: "Intermediate" },
  { label: "Advanced", value: "Advanced" },
];

export function ClassInformationStep({
  value,
  onChange,
  categories,
  errors,
}: ClassInformationStepProps) {
  const categoryOptions = categories.map((cat) => ({
    label: cat.title,
    value: cat._id,
  }));

  const [isAddingCategory, setIsAddingCategory] = useState(false);
  const [newCategoryTitle, setNewCategoryTitle] = useState("");
  const createCategory = useCreateCategoryMutation();

  const handleCreateCategory = () => {
    if (!newCategoryTitle.trim()) return;
    createCategory.mutate(
      { title: newCategoryTitle.trim() },
      {
        onSuccess: (res) => {
          toast.success("Category created");
          setNewCategoryTitle("");
          setIsAddingCategory(false);
          if (res.data?._id) onChange({ category: res.data._id });
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to create category");
        },
      },
    );
  };

  const handleThumbnailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    onChange({
      thumbnailFile: file,
      thumbnailPreviewUrl: file ? URL.createObjectURL(file) : null,
    });
  };

  const handleIntroVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange({ introVideoFile: e.target.files?.[0] ?? null, introVideoUrl: "" });
  };

  return (
    <div className="flex flex-col gap-6 md:gap-8 mb-4">
      <h3 className="text-[17px] font-semibold text-gray-900">
        Class Information
      </h3>

      <AppInput
        label={
          <span className="font-semibold">
            Class Title <span className="text-red-500">*</span>
          </span>
        }
        placeholder="Complete Python Bootcamp"
        value={value.title}
        onChange={(e) => onChange({ title: e.target.value })}
        error={errors?.title}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="flex flex-col gap-1.5">
          <AppSelect
            label={
              <span className="font-semibold">
                Category <span className="text-red-500">*</span>
              </span>
            }
            placeholder="Select category"
            options={categoryOptions}
            value={value.category}
            onChange={(val) => onChange({ category: val })}
          />
          {isAddingCategory ? (
            <div className="flex items-center gap-2 mt-1">
              <AppInput
                placeholder="New category name"
                value={newCategoryTitle}
                onChange={(e) => setNewCategoryTitle(e.target.value)}
                className="h-10!"
              />
              <Button
                type="button"
                size="sm"
                onClick={handleCreateCategory}
                disabled={createCategory.isPending || !newCategoryTitle.trim()}
                className="h-10 shrink-0"
              >
                {createCategory.isPending ? "Adding..." : "Add"}
              </Button>
              <button
                type="button"
                onClick={() => {
                  setIsAddingCategory(false);
                  setNewCategoryTitle("");
                }}
                className="text-gray-400 hover:text-gray-600 shrink-0"
              >
                <X className="size-4" />
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setIsAddingCategory(true)}
              className="flex items-center gap-1 text-[13px] font-medium text-primary hover:underline w-fit mt-1"
            >
              <Plus className="size-3.5" /> Add new category
            </button>
          )}
        </div>
        <AppSelect
          label={<span className="font-semibold">Course Level</span>}
          options={levelOptions}
          value={value.courseLevel}
          onChange={(val) =>
            onChange({ courseLevel: val as ClassInfoValue["courseLevel"] })
          }
        />
      </div>
      {errors?.category && (
        <span className="-mt-4 text-xs text-red-500">{errors.category}</span>
      )}

      <div className="flex flex-col gap-1.5">
        <label className="text-[15px] font-semibold text-gray-900">
          Class Description
        </label>
        <textarea
          className="w-full p-4 rounded-xl border border-gray-100 hover:border-gray-200 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors bg-white min-h-[160px] resize-none"
          placeholder="Describe what students will learn in this course..."
          value={value.description}
          onChange={(e) => onChange({ description: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <AppInput
          label={<span className="font-semibold">Price ($)</span>}
          type="number"
          min={0}
          placeholder="99.99"
          value={value.price}
          onChange={(e) => onChange({ price: e.target.value })}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 items-start">
        {/* Intro Video */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[17px] font-semibold text-gray-900">
            Intro Video <span className="text-gray-400 font-normal text-[13px]">(optional)</span>
          </h4>
          <div className="grid grid-cols-2 gap-2">
            <Button
              type="button"
              variant={value.introVideoSource === "url" ? "default" : "outline"}
              onClick={() => onChange({ introVideoSource: "url", introVideoFile: null })}
              className="h-10 rounded-xl"
            >
              Video URL
            </Button>
            <Button
              type="button"
              variant={value.introVideoSource === "upload" ? "default" : "outline"}
              onClick={() => onChange({ introVideoSource: "upload", introVideoUrl: "" })}
              className="h-10 rounded-xl"
            >
              Upload
            </Button>
          </div>
          {value.introVideoSource === "url" ? (
            <AppInput
              placeholder="https://youtube.com/watch?v=..."
              value={value.introVideoUrl}
              onChange={(e) =>
                onChange({ introVideoUrl: e.target.value, introVideoFile: null })
              }
            />
          ) : (
            <label className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-gray-200 rounded-xl bg-transparent hover:bg-white/50 transition-colors cursor-pointer min-h-[150px] px-4 text-center">
              <div className="size-11 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-3 text-gray-700 shadow-sm border border-gray-100/50">
                <FileText className="size-5" />
              </div>
              <span className="text-[14px] font-medium text-gray-900 mb-1">
                {value.introVideoFile ? value.introVideoFile.name : "Click to upload intro video"}
              </span>
              <span className="text-[12px] text-gray-500 uppercase tracking-tight">
                MP4, MOV or WEBM
              </span>
              <input
                type="file"
                accept="video/*"
                className="hidden"
                onChange={handleIntroVideoChange}
              />
            </label>
          )}
        </div>

        {/* Course Thumbnail */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[17px] font-semibold text-gray-900">
            Course Thumbnail <span className="text-red-500">*</span>
          </h4>
          <label className="flex flex-col items-center justify-center border-[1.5px] border-dashed border-gray-200 rounded-xl bg-transparent hover:bg-white/50 transition-colors cursor-pointer min-h-[200px] overflow-hidden">
            {value.thumbnailPreviewUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={value.thumbnailPreviewUrl}
                alt="Thumbnail preview"
                className="w-full h-full object-cover min-h-[200px]"
              />
            ) : (
              <>
                <div className="size-11 rounded-full bg-[#FAFAFA] flex items-center justify-center mb-3 text-gray-700 shadow-sm border border-gray-100/50">
                  <FileText className="size-5" />
                </div>
                <span className="text-[14px] font-medium text-gray-900 mb-1">
                  Click to upload thumbnail
                </span>
                <span className="text-[12px] text-gray-500 uppercase tracking-tight">
                  PNG, JPG or WEBP (max. 2MB)
                </span>
              </>
            )}
            <input
              type="file"
              accept="image/png,image/jpeg,image/webp"
              className="hidden"
              onChange={handleThumbnailChange}
            />
          </label>
          {errors?.thumbnailFile && (
            <span className="text-xs text-red-500">{errors.thumbnailFile}</span>
          )}
        </div>
      </div>
    </div>
  );
}
