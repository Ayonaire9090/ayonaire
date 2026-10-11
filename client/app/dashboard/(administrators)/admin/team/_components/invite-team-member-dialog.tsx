"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { AdminDashboardButton } from "@/components/dashboard/admin-dashboard-button";
import { useInviteTeamMemberMutation } from "@/hooks/api/use-team";

export const InviteTeamMemberDialog = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [role, setRole] = useState<"admin" | "instructor">("admin");
  const inviteMember = useInviteTeamMemberMutation();

  const handleInvite = () => {
    if (!email.trim()) {
      toast.error("Enter an email address.");
      return;
    }
    inviteMember.mutate(
      { email, role },
      {
        onSuccess: () => {
          toast.success("Invitation sent");
          setEmail("");
          setOpen(false);
        },
        onError: (err) =>
          toast.error(err instanceof Error ? err.message : "Failed to send invitation"),
      },
    );
  };

  return (
    <>
      <AdminDashboardButton title="Invite Member" icon={Plus} onClick={() => setOpen(true)} />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Invite Team Member</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col gap-4 py-2">
            <AppInput
              label="Email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
            <AppSelect
              label="Role"
              options={[
                { label: "Admin", value: "admin" },
                { label: "Instructor", value: "instructor" },
              ]}
              value={role}
              onChange={(v) => setRole(v as "admin" | "instructor")}
            />
            <Button onClick={handleInvite} disabled={inviteMember.isPending} className="mt-1">
              {inviteMember.isPending ? "Sending..." : "Send Invite"}
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
