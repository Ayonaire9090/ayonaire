"use client";

import React, { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  Play,
  Pencil,
  Plus,
  FileText,
  Trash2,
  Loader2,
} from "lucide-react";
import { useCreateModuleMutation } from "@/hooks/api/use-modules";
import {
  useUploadLessonMutation,
  useUploadLessonVideoMutation,
} from "@/hooks/api/use-lessons";

interface LocalLesson {
  _id: string;
  title: string;
  isFreePreview: boolean;
}

interface LocalModule {
  _id: string;
  title: string;
  description: string;
  lessons: LocalLesson[];
}

function ToggleSwitch({
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

function AddNewLessonForm({
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
  onCreated: (lesson: LocalLesson) => void;
}) {
  const [title, setTitle] = useState("");
  const [freePreview, setFreePreview] = useState(false);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [error, setError] = useState("");

  const uploadLesson = useUploadLessonMutation();
  const uploadVideo = useUploadLessonVideoMutation();

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
      }

      onCreated({ _id: lessonId ?? crypto.randomUUID(), title, isFreePreview: freePreview });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to create lesson");
    }
  };

  const isSaving = uploadLesson.isPending || uploadVideo.isPending;

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

function ModuleCard({
  courseId,
  module,
  isExpanded,
  toggleModule,
  onLessonCreated,
}: {
  courseId: string;
  module: LocalModule;
  isExpanded: boolean;
  toggleModule: (id: string) => void;
  onLessonCreated: (moduleId: string, lesson: LocalLesson) => void;
}) {
  const [isAddingLesson, setIsAddingLesson] = useState(false);

  return (
    <div className="flex flex-col bg-white rounded-2xl w-full border border-gray-100 shadow-[0px_2px_8px_rgba(0,0,0,0.02)]">
      <div className={`flex items-center justify-between p-4 md:px-6 md:py-5 ${isExpanded ? "pb-2 md:pb-3" : ""}`}>
        <div className="flex items-center gap-3 md:gap-4">
          <button onClick={() => toggleModule(module._id)} className="hidden md:flex">
            {isExpanded ? (
              <ChevronUp className="size-[22px] text-gray-900" />
            ) : (
              <ChevronDown className="size-[22px] text-gray-900" />
            )}
          </button>
          <div className="flex flex-col gap-1">
            <span className="text-[15.5px] md:text-[16px] font-medium text-gray-900">
              {module.title}
            </span>
            <div className="flex items-center gap-3 text-[13px] text-gray-400 font-medium">
              <div className="flex items-center gap-1.5">
                <Play className="size-3" />
                <span>{module.lessons.length} Lessons</span>
              </div>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (!isExpanded) toggleModule(module._id);
            setIsAddingLesson(true);
          }}
          className="h-8 px-3 md:px-4 rounded-lg border border-gray-200 bg-[#FAFAFA] hover:bg-gray-100 text-[13px] font-medium text-gray-800 transition-colors"
        >
          Add Lesson
        </button>
      </div>

      {isExpanded && module.lessons.length > 0 && (
        <div className="flex flex-col gap-2 px-4 md:px-6 pb-4 md:pb-6 pt-2">
          <div className="w-full h-px bg-gray-100 mb-2" />
          {module.lessons.map((lesson, idx) => (
            <div
              key={lesson._id}
              className="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-xl border border-gray-100/50"
            >
              <div className="flex items-center gap-3">
                <div className="size-[26px] bg-white border border-gray-100 rounded text-gray-400 text-[12px] font-medium flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <span className="text-[15px] font-medium text-gray-900">
                  {lesson.title}
                </span>
                {lesson.isFreePreview && (
                  <span className="text-[11px] font-medium text-primary bg-primary/10 rounded-full px-2 py-0.5">
                    Free Preview
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {isAddingLesson && (
        <AddNewLessonForm
          courseId={courseId}
          moduleId={module._id}
          order={module.lessons.length + 1}
          onCancel={() => setIsAddingLesson(false)}
          onCreated={(lesson) => {
            onLessonCreated(module._id, lesson);
            setIsAddingLesson(false);
          }}
        />
      )}
    </div>
  );
}

interface CurriculumStepProps {
  courseId: string;
  modules: LocalModule[];
  onModulesChange: (modules: LocalModule[]) => void;
}

export function CurriculumStep({ courseId, modules, onModulesChange }: CurriculumStepProps) {
  const [expandedModules, setExpandedModules] = useState<string[]>([]);
  const [isAddingModule, setIsAddingModule] = useState(false);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newModuleDescription, setNewModuleDescription] = useState("");
  const [moduleError, setModuleError] = useState("");

  const createModule = useCreateModuleMutation();

  const toggleModule = (id: string) => {
    setExpandedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id],
    );
  };

  const handleAddModule = async () => {
    if (!newModuleTitle.trim()) {
      setModuleError("Module title is required");
      return;
    }
    if (!newModuleDescription.trim()) {
      setModuleError("Module description is required");
      return;
    }
    setModuleError("");

    try {
      const res = await createModule.mutateAsync({
        title: newModuleTitle,
        description: newModuleDescription,
        courseId,
        order: modules.length + 1,
      });

      const newModule: LocalModule = {
        _id: (res.data as any)?._id ?? crypto.randomUUID(),
        title: newModuleTitle,
        description: newModuleDescription,
        lessons: [],
      };

      onModulesChange([...modules, newModule]);
      setExpandedModules((prev) => [...prev, newModule._id]);
      setNewModuleTitle("");
      setNewModuleDescription("");
      setIsAddingModule(false);
    } catch (err) {
      setModuleError(err instanceof Error ? err.message : "Failed to create module");
    }
  };

  const handleLessonCreated = (moduleId: string, lesson: LocalLesson) => {
    onModulesChange(
      modules.map((m) =>
        m._id === moduleId ? { ...m, lessons: [...m.lessons, lesson] } : m,
      ),
    );
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h3 className="text-[18px] md:text-[20px] font-semibold text-gray-900">
            Curriculum
          </h3>
          <p className="text-[14px] text-gray-400">
            {modules.length} Module{modules.length === 1 ? "" : "s"}
          </p>
        </div>
        <button
          onClick={() => setIsAddingModule(true)}
          className="h-10 px-4 md:px-5 rounded-xl border border-gray-200 text-gray-800 text-[14px] font-medium bg-transparent hover:bg-white transition-colors"
        >
          Add Module
        </button>
      </div>

      <div className="flex flex-col gap-3 md:gap-4 mt-2">
        {isAddingModule && (
          <div className="flex flex-col bg-white rounded-2xl w-full border border-gray-100 p-4 md:p-6">
            <div className="flex flex-row items-center justify-between mb-6">
              <h4 className="text-[16px] md:text-[18px] font-semibold text-gray-900">
                Add New Module
              </h4>
              <div className="flex items-center gap-2 md:gap-3">
                <button
                  onClick={handleAddModule}
                  disabled={createModule.isPending}
                  className="px-4 md:px-5 h-9 md:h-10 rounded-lg md:rounded-xl text-[13px] md:text-[14px] font-medium bg-primary text-white hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {createModule.isPending && <Loader2 className="size-4 animate-spin" />}
                  Add Module
                </button>
                <button
                  onClick={() => setIsAddingModule(false)}
                  className="px-4 md:px-5 h-9 md:h-10 rounded-lg md:rounded-xl text-[13px] md:text-[14px] font-medium bg-[#FAFAFA] border border-gray-200 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] md:text-[15px] font-semibold text-gray-900">
                  Title <span className="text-red-500">*</span>
                </label>
                <input
                  className="w-full px-4 h-12 rounded-xl border border-gray-100 hover:border-gray-200 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors bg-white"
                  placeholder="e.g., Introduction to Web Development"
                  value={newModuleTitle}
                  onChange={(e) => setNewModuleTitle(e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] md:text-[15px] font-semibold text-gray-900">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea
                  className="w-full p-4 rounded-xl border border-gray-100 hover:border-gray-200 text-[15px] placeholder:text-gray-400 focus:outline-none focus:border-primary/30 focus:ring-1 focus:ring-primary/30 transition-colors min-h-[120px] resize-none bg-white"
                  placeholder="What does this module cover?"
                  value={newModuleDescription}
                  onChange={(e) => setNewModuleDescription(e.target.value)}
                />
              </div>

              {moduleError && <span className="text-xs text-red-500">{moduleError}</span>}
            </div>
          </div>
        )}

        {modules.length === 0 && !isAddingModule && (
          <div className="flex flex-col items-center justify-center py-16 text-center border border-dashed border-gray-200 rounded-2xl">
            <Plus className="size-8 text-gray-300 mb-2" />
            <p className="text-[14px] text-gray-500">
              No modules yet. Add your first module to start building the curriculum.
            </p>
          </div>
        )}

        {modules.map((module) => (
          <ModuleCard
            key={module._id}
            courseId={courseId}
            module={module}
            isExpanded={expandedModules.includes(module._id)}
            toggleModule={toggleModule}
            onLessonCreated={handleLessonCreated}
          />
        ))}
      </div>
    </div>
  );
}
