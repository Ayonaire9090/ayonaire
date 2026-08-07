"use client";

import { useState } from "react";
import { toast } from "sonner";
import { AppSimpleModal } from "@/components/modals/app-simple-modal";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useCreateCohortMutation } from "@/hooks/api/use-cohorts";

interface CreateCohortModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateCohortModal({ isOpen, onClose }: CreateCohortModalProps) {
  const [name, setName] = useState("");
  const [courseId, setCourseId] = useState("");
  const [description, setDescription] = useState("");

  const { data: coursesData } = useGetCourses();
  const createCohort = useCreateCohortMutation();

  const courseOptions = (coursesData?.courses ?? []).map((c) => ({
    label: c.title,
    value: c._id,
  }));

  const handleClose = () => {
    setName("");
    setCourseId("");
    setDescription("");
    onClose();
  };

  const handleCreate = () => {
    if (!name.trim() || !courseId) {
      toast.error("Please provide a cohort name and select a course.");
      return;
    }
    createCohort.mutate(
      { name: name.trim(), course: courseId, description: description.trim() || undefined },
      {
        onSuccess: () => {
          toast.success("Cohort created");
          handleClose();
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to create cohort");
        },
      },
    );
  };

  return (
    <AppSimpleModal isOpen={isOpen} onClose={handleClose} title="Create Cohort" className="max-w-[480px]">
      <div className="flex flex-col gap-4 mt-2">
        <AppInput label="Cohort Name" value={name} onChange={(e) => setName(e.target.value)} />
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-gray-700">Course</label>
          <AppSelect
            value={courseId}
            onChange={setCourseId}
            placeholder="Select a course..."
            options={courseOptions}
            className="h-12! bg-white border-gray-200"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-medium text-gray-700">Description</label>
          <Textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="flex justify-end gap-3 mt-2">
          <Button variant="outline" onClick={handleClose} className="h-10 px-6 rounded-lg shadow-none">
            Cancel
          </Button>
          <Button
            onClick={handleCreate}
            disabled={createCohort.isPending}
            className="h-10 px-6 bg-[#ff6b22] hover:bg-[#ff6b22]/90 text-white rounded-lg shadow-none disabled:opacity-60"
          >
            {createCohort.isPending ? "Creating..." : "Create Cohort"}
          </Button>
        </div>
      </div>
    </AppSimpleModal>
  );
}
