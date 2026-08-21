"use client";

import React, { useState } from "react";
import { FileText, Loader2 } from "lucide-react";
import {
  useAddLessonVideoUrlMutation,
  useUploadLessonMutation,
  useUploadLessonVideoMutation,
} from "@/hooks/api/use-lessons";

export interface CreatedLesson {
  _id: string;
  title: string;
  isFreePreview: boolean;
}

export function ToggleSwitch({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (val: boolean) => void;
}) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`w-10 h-[22px] rounded-full relative cursor-pointer border border-transparent transition-colors ${checked ? "bg-gray-900" : "bg-gray-200"}`}
    >
      <div
        className={`size-[18px] rounded-full bg-white absolute top-px transition-all ${checked ? "right-[2px]" : "left-[2px]"}`}
      />
    </div>
  );
}

export function AddNewLessonForm({
  courseId,
  moduleId,
  order,
  onCancel,
  onCreated,
}: {
  courseId: string;
  moduleId: string;
  order: number;
  onCancel: () => void;
  onCreated: (lesson: CreatedLesson) => void;
}) {
  const [title, setTitle] = useState("");
  const [freePreview, setFreePreview] = useState(false);
  const [videoSource, setVideoSource] = useState<"url" | "upload">("url");
  const [videoUrl, setVideoUrl] = useState("");
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const uploadLesson = useUploadLessonMutation();
  const uploadVideo = useUploadLessonVideoMutation();
  const addVideoUrl = useAddLessonVideoUrlMutation();

  const handleSave = async () => {
    if (!title.trim()) {
      setError("Lesson title is required");
      return;
    }
    setError("");

    try {
      const res = await uploadLesson.mutateAsync({
        title,
        module: moduleId,
        course: courseId,
        order,
        duration: 0,
        isFreePreview: freePreview,
      });

      const lessonId = (res.data as any)?._id;

      if (lessonId && videoFile) {
        await uploadVideo.mutateAsync({
          lessonId,
          videos: [{ title, file: videoFile }],
        });
      } else if (lessonId && videoUrl.trim()) {
        await addVideoUrl.mutateAsync({
          lessonId,
          title,
          url: videoUrl.trim(),
        });
      }

      onCreated({ _id: lessonId ?? crypto.randomUUID(), title, isFreePreview: freePreview });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create lesson");
    }
  };

  const isSaving =
    uploadLesson.isPending || uploadVideo.isPending || addVideoUrl.isPending;

  return (
    <div className="flex flex-col gap-5 p-4 md:p-6 bg-primary/4 border-t border-primary/10 rounded-b-2xl w-full">
      <h4 className="text-[16px] md:text-[17px] font-semibold text-gray-900">
        Add New Lesson
      </h4>

      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
          Lesson Title <span className="text-red-500">*</span>
        </label>
        <input
          className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors bg-white"
          placeholder="e.g., Introduction to React Hooks"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[13px] md:text-[14px] font-semibold text-gray-900">
          Lesson Video (optional)
        </label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => {
              setVideoSource("url");
              setVideoFile(null);
            }}
            className={`h-10 rounded-xl text-[14px] font-medium border transition-colors ${
              videoSource === "url"
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            Video URL
          </button>
          <button
            type="button"
            onClick={() => {
              setVideoSource("upload");
              setVideoUrl("");
            }}
            className={`h-10 rounded-xl text-[14px] font-medium border transition-colors ${
              videoSource === "upload"
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
            }`}
          >
            Upload
          </button>
        </div>
        {videoSource === "url" ? (
          <input
            className="w-full px-4 h-11 rounded-xl border border-gray-100/50 hover:border-gray-200 text-[14px] placeholder:text-gray-400 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors bg-white"
            placeholder="https://youtube.com/watch?v=..."
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
          />
        ) : (
          <label className="flex items-center gap-3 px-4 h-11 rounded-xl border border-dashed border-gray-200 hover:border-gray-300 text-[14px] text-gray-500 bg-white cursor-pointer">
            <FileText className="size-4 shrink-0" />
            <span className="truncate">{videoFile ? videoFile.name : "Click to upload a video file"}</span>
            <input
              type="file"
              accept="video/*"
              className="hidden"
              onChange={(e) => setVideoFile(e.target.files?.[0] ?? null)}
            />
          </label>
        )}
      </div>

      <div className="flex items-center justify-between p-4 md:p-5 rounded-xl border border-primary bg-white mt-1">
        <div className="flex flex-col gap-0.5">
          <h4 className="text-[14.5px] font-semibold text-gray-900">
            Free Preview
          </h4>
          <p className="text-[13px] text-gray-500">
            Allow non-enrolled students to watch this lesson
          </p>
        </div>
        <ToggleSwitch checked={freePreview} onChange={setFreePreview} />
      </div>

      {error && <span className="text-xs text-red-500">{error}</span>}

      <div className="grid grid-cols-2 md:flex flex-col-reverse md:flex-row items-center justify-end gap-3 mt-4 w-full">
        <button
          onClick={onCancel}
          disabled={isSaving}
          className="md:w-auto px-6 h-11 rounded-xl text-[14px] font-medium bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="md:w-auto px-6 h-11 rounded-xl text-[14px] font-medium bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isSaving && <Loader2 className="size-4 animate-spin" />}
          Save Lesson
        </button>
      </div>
    </div>
  );
}
