"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useGetWorkshopById, useEditWorkshopMutation } from "@/hooks/api/use-workshops";

interface WorkshopEditModalProps {
  workshopId: string | null;
  onClose: () => void;
}

const toDatetimeLocal = (iso: string) => {
  const d = new Date(iso);
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
};

export function WorkshopEditModal({ workshopId, onClose }: WorkshopEditModalProps) {
  const { data, isLoading } = useGetWorkshopById(workshopId ?? "");
  const editWorkshop = useEditWorkshopMutation();

  const [form, setForm] = useState({
    title: "",
    description: "",
    platformName: "",
    platformLink: "",
    startDate: "",
    endDate: "",
  });

  useEffect(() => {
    if (data?.data) {
      const w = data.data;
      setForm({
        title: w.title,
        description: w.description,
        platformName: w.platform?.name ?? "",
        platformLink: w.platform?.link ?? "",
        startDate: w.startDate ? toDatetimeLocal(w.startDate) : "",
        endDate: w.endDate ? toDatetimeLocal(w.endDate) : "",
      });
    }
  }, [data]);

  const handleSubmit = () => {
    if (!workshopId) return;
    editWorkshop.mutate(
      {
        workShopId: workshopId,
        title: form.title,
        description: form.description,
        platform: {
          name: form.platformName || "Custom",
          link: form.platformLink,
          type: "video-call",
        },
        startDate: new Date(form.startDate).toISOString(),
        endDate: new Date(form.endDate).toISOString(),
      },
      {
        onSuccess: () => {
          toast.success("Workshop updated");
          onClose();
        },
        onError: (err) => {
          toast.error(err instanceof Error ? err.message : "Failed to update workshop");
        },
      },
    );
  };

  return (
    <Dialog open={!!workshopId} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Edit Workshop</DialogTitle>
        </DialogHeader>

        {isLoading ? (
          <div className="flex items-center justify-center py-10">
            <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-workshop-title">Title</Label>
              <Input
                id="edit-workshop-title"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="edit-workshop-description">Description</Label>
              <Textarea
                id="edit-workshop-description"
                value={form.description}
                onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="edit-workshop-platform">Platform</Label>
                <Input
                  id="edit-workshop-platform"
                  value={form.platformName}
                  onChange={(e) => setForm((f) => ({ ...f, platformName: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="edit-workshop-link">Meeting Link</Label>
                <Input
                  id="edit-workshop-link"
                  value={form.platformLink}
                  onChange={(e) => setForm((f) => ({ ...f, platformLink: e.target.value }))}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="edit-workshop-start">Start</Label>
                <Input
                  id="edit-workshop-start"
                  type="datetime-local"
                  value={form.startDate}
                  onChange={(e) => setForm((f) => ({ ...f, startDate: e.target.value }))}
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="edit-workshop-end">End</Label>
                <Input
                  id="edit-workshop-end"
                  type="datetime-local"
                  value={form.endDate}
                  onChange={(e) => setForm((f) => ({ ...f, endDate: e.target.value }))}
                />
              </div>
            </div>

            <Button onClick={handleSubmit} disabled={editWorkshop.isPending} className="mt-2">
              {editWorkshop.isPending ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
