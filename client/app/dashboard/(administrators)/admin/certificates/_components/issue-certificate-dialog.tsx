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
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { useGetAdminUsers } from "@/hooks/api/use-admin";
import { useGetCourses } from "@/hooks/api/use-courses";
import { useIssueCertificateMutation } from "@/hooks/api/use-certificates";

export const IssueCertificateDialog = () => {
  const [open, setOpen] = useState(false);
  const [studentId, setStudentId] = useState("");
  const [courseId, setCourseId] = useState("");

  const { data: usersData } = useGetAdminUsers();
  const { data: coursesData } = useGetCourses({ limit: 100 });
  const issueCertificate = useIssueCertificateMutation();

  const studentOptions = useMemo(
    () =>
      (usersData?.users ?? [])
        .filter((u) => u.role === "student" || u.role === "user")
        .map((u) => ({ label: `${u.name} (${u.email})`, value: u._id })),
    [usersData],
  );
  const courseOptions = useMemo(
    () => (coursesData?.courses ?? []).map((c) => ({ label: c.title, value: c._id })),
    [coursesData],
  );

  const handleIssue = () => {
    if (!studentId || !courseId) {
      toast.error("Select a student and a course.");
      return;
    }

    issueCertificate.mutate(
      { studentId, courseId },
      {
        onSuccess: () => {
          toast.success("Certificate issued");
          setStudentId("");
          setCourseId("");
          setOpen(false);
        },
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to issue certificate"),
      },
    );
  };

  return (
    <>
      <AdminDashboardButton title="Issue Certificate" icon={Plus} onClick={() => setOpen(true)} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Issue Certificate</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2">
            <AppSelect
              label="Student"
              placeholder="Select a student"
              options={studentOptions}
              value={studentId}
              onChange={setStudentId}
            />
            <AppSelect
              label="Course"
              placeholder="Select a course"
              options={courseOptions}
              value={courseId}
              onChange={setCourseId}
            />
            <Button onClick={handleIssue} disabled={issueCertificate.isPending} className="mt-1">
              {issueCertificate.isPending ? "Issuing..." : "Issue Certificate"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
