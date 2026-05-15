"use client";

import { useState } from "react";
import { AppInput } from "@/components/ui/app-input";
import { Button } from "@/components/ui/button";
import { EDIT_INPUT_CLASSNAME } from "./edit-profile-input-styles";

export function EditLoginInfoContent() {
  const [email, setEmail] = useState("example@gmail.com");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div>
      {/* Section heading */}
      <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-5">
        Login Information
      </h2>

      <div className="flex flex-col gap-6">
        <AppInput
          label="Email Address"
          placeholder="Enter email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={EDIT_INPUT_CLASSNAME}
        />
        <AppInput
          label="Current Password"
          placeholder="Enter current password"
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className={EDIT_INPUT_CLASSNAME}
        />
        <AppInput
          label="New Password"
          placeholder="Enter new password"
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className={EDIT_INPUT_CLASSNAME}
        />
        <AppInput
          label="Confirm New Password"
          placeholder="Confirm new password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className={EDIT_INPUT_CLASSNAME}
        />
      </div>

      {/* Save button */}
      <div className="mt-8">
        <Button className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-10 rounded-lg text-[14px]">
          Save Changes
        </Button>
      </div>
    </div>
  );
}
