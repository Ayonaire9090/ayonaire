"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { AppInput } from "@/components/ui/app-input";
import { AppSelect } from "@/components/ui/app-select";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { Button } from "@/components/ui/button";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useCreatePricingPlanMutation } from "@/hooks/api/use-payments";

export const AddPricingPlanDialog = () => {
  const [open, setOpen] = useState(false);
  const [courseId, setCourseId] = useState("");
  const [planType, setPlanType] = useState("one-time");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("Lifetime");
  const [accessType, setAccessType] = useState("Full Access");

  const { data: coursesData } = useGetCourses({ limit: 100 });
  const createPlan = useCreatePricingPlanMutation();

  const courseOptions = useMemo(
    () => (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id })),
    [coursesData],
  );

  const reset = () => {
    setCourseId("");
    setPlanType("one-time");
    setPrice("");
    setDuration("Lifetime");
    setAccessType("Full Access");
  };

  const handleCreate = () => {
    const numericPrice = Number(price);
    if (!courseId || !price || Number.isNaN(numericPrice)) {
      toast.error("Select a course and enter a valid price.");
      return;
    }

    createPlan.mutate(
      {
        course: courseId,
        planType,
        price: numericPrice,
        duration,
        accessType,
      },
      {
        onSuccess: () => {
          toast.success("Pricing plan created");
          reset();
          setOpen(false);
        },
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to create pricing plan"),
      },
    );
  };

  return (
    <>
      <AdminDashboardButton title="Add Plan" icon={Plus} onClick={() => setOpen(true)} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Add Pricing Plan</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2">
            <AppSelect
              label="Course"
              placeholder="Select a course"
              options={courseOptions}
              value={courseId}
              onChange={setCourseId}
            />
            <AppSelect
              label="Plan Type"
              options={[
                { label: "One-time", value: "one-time" },
                { label: "Subscription", value: "subscription" },
              ]}
              value={planType}
              onChange={setPlanType}
            />
            <AppInput
              label="Price (USD)"
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="e.g. 48"
            />
            <AppSelect
              label="Duration"
              options={[
                { label: "Lifetime", value: "Lifetime" },
                { label: "1 Year", value: "1 Year" },
                { label: "2 Year", value: "2 Year" },
                { label: "3 Year", value: "3 Year" },
              ]}
              value={duration}
              onChange={setDuration}
            />
            <AppSelect
              label="Access Type"
              options={[{ label: "Full Access", value: "Full Access" }]}
              value={accessType}
              onChange={setAccessType}
            />

            <Button onClick={handleCreate} disabled={createPlan.isPending} className="mt-1">
              {createPlan.isPending ? "Creating..." : "Create Plan"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
