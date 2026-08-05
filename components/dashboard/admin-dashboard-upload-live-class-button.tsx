"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
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
import { AdminDashboardButton } from "./admin-dashboard-button";
import { useCreateWorkshopMutation } from "@/hooks/api/use-workshops";

const emptyForm = {
  title: "",
  description: "",
  platformName: "",
  platformLink: "",
  startDate: "",
  endDate: "",
};

export const AdminDashboardUploadLiveClassButton = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState(emptyForm);
  const { mutate, isPending } = useCreateWorkshopMutation();

  const handleSubmit = () => {
    if (!form.title || !form.platformLink || !form.startDate || !form.endDate) {
      toast.error("Please fill in title, platform link, start and end date.");
      return;
    }

    mutate(
      {
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
          toast.success("Live class scheduled.");
          setForm(emptyForm);
          setOpen(false);
        },
        onError: () => {
          toast.error("Couldn't schedule the live class. Please try again.");
        },
      },
    );
  };

  return (
    <>
      <AdminDashboardButton
        title="Upload Live Class"
        icon={Plus}
        onClick={() => setOpen(true)}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Schedule a Live Class</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="workshop-title">Title</Label>
              <Input
                id="workshop-title"
                value={form.title}
                onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
                placeholder="e.g. Intro to Data Analytics"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <Label htmlFor="workshop-description">Description</Label>
              <Textarea
                id="workshop-description"
                value={form.description}
                onChange={(e) =>
                  setForm((f) => ({ ...f, description: e.target.value }))
                }
                placeholder="What will this class cover?"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="workshop-platform">Platform</Label>
                <Input
                  id="workshop-platform"
                  value={form.platformName}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, platformName: e.target.value }))
                  }
                  placeholder="Zoom, Google Meet..."
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="workshop-link">Meeting Link</Label>
                <Input
                  id="workshop-link"
                  value={form.platformLink}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, platformLink: e.target.value }))
                  }
                  placeholder="https://..."
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="workshop-start">Start</Label>
                <Input
                  id="workshop-start"
                  type="datetime-local"
                  value={form.startDate}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, startDate: e.target.value }))
                  }
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="workshop-end">End</Label>
                <Input
                  id="workshop-end"
                  type="datetime-local"
                  value={form.endDate}
                  onChange={(e) =>
                    setForm((f) => ({ ...f, endDate: e.target.value }))
                  }
                />
              </div>
            </div>

            <Button onClick={handleSubmit} disabled={isPending} className="mt-2">
              {isPending ? "Scheduling..." : "Schedule Class"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
