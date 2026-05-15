"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

interface EmailPref {
  id: string;
  label: string;
  description: string;
  enabled: boolean;
}

const initialPrefs: EmailPref[] = [
  {
    id: "mentions",
    label: "Mentions",
    description: "A member mention you in an update using @ayo.",
    enabled: true,
  },
  {
    id: "replies",
    label: "Replies",
    description: "A member reply to an update or comment to you have posted.",
    enabled: true,
  },
  {
    id: "academy-alerts",
    label: "Academy Alerts",
    description: "Receive our weekly Academy alerts.",
    enabled: true,
  },
  {
    id: "course-updates",
    label: "Course Updates",
    description: "Get notified when courses you enrolled in are updated.",
    enabled: true,
  },
  {
    id: "new-courses",
    label: "New Courses",
    description: "Receive emails about newly published courses.",
    enabled: true,
  },
  {
    id: "promotions",
    label: "Promotions & Offers",
    description: "Receive promotional emails and special offers.",
    enabled: false,
  },
  {
    id: "announcements",
    label: "Platform Announcements",
    description: "Important announcements about the platform.",
    enabled: true,
  },
  {
    id: "newsletter",
    label: "Weekly Newsletter",
    description: "A weekly digest of top courses and community highlights.",
    enabled: false,
  },
];

export function EditEmailPreferenceContent() {
  const [prefs, setPrefs] = useState<EmailPref[]>(initialPrefs);

  const togglePref = (id: string) => {
    setPrefs((prev) =>
      prev.map((p) => (p.id === id ? { ...p, enabled: !p.enabled } : p)),
    );
  };

  return (
    <div>
      {/* Section heading */}
      <h2 className="text-[22px] md:text-[26px] font-bold text-gray-900 mb-5">
        Email Preference
      </h2>

      <p className="text-[14px] text-gray-500 mb-6">
        Choose which emails you&apos;d like to receive.
      </p>

      <div className="flex flex-col gap-1">
        {prefs.map((pref) => (
          <div
            key={pref.id}
            className="flex items-start justify-between gap-4 py-4 border-b border-gray-100 last:border-b-0"
          >
            <div className="flex-1 min-w-0">
              <p className="text-[14px] font-semibold text-gray-900">
                {pref.label}
              </p>
              <p className="text-[13px] text-gray-400 mt-0.5">
                {pref.description}
              </p>
            </div>
            <Switch
              checked={pref.enabled}
              onCheckedChange={() => togglePref(pref.id)}
              className="shrink-0 mt-0.5"
            />
          </div>
        ))}
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
