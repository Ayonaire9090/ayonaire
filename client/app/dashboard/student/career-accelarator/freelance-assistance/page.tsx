"use client";

import { useState } from "react";
import { toast } from "sonner";
import { SidebarInset } from "@/components/ui/sidebar";
import { CareerAcceleratorSidebarContent } from "../_components/career-accelerator-sidebar-content";
import { StudentDashboardHeader } from "../../_components/student-dashboard-header";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useCreateFreelanceProfileMutation } from "@/hooks/api/use-career";
import { FreelanceProfile } from "@/lib/api/endpoints/career";

export default function StudentFreelanceAssistancePage() {
  const createProfile = useCreateFreelanceProfileMutation();
  const [form, setForm] = useState({
    headline: "",
    summary: "",
    skills: "",
    portfolioLinks: "",
    hourlyRate: "",
    availability: "",
    services: "",
    expertiseAreas: "",
  });
  const [savedProfile, setSavedProfile] = useState<FreelanceProfile | null>(null);

  const setField = (name: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const toList = (value: string) =>
    value.split(",").map((s) => s.trim()).filter(Boolean);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.headline.trim() || !form.summary.trim() || !toList(form.skills).length) {
      toast.error("Headline, summary, and at least one skill are required");
      return;
    }

    try {
      const res = await createProfile.mutateAsync({
        headline: form.headline,
        summary: form.summary,
        skills: toList(form.skills),
        portfolioLinks: form.portfolioLinks ? toList(form.portfolioLinks) : undefined,
        hourlyRate: form.hourlyRate || undefined,
        availability: form.availability || undefined,
        services: form.services ? toList(form.services) : undefined,
        expertiseAreas: form.expertiseAreas ? toList(form.expertiseAreas) : undefined,
      });
      setSavedProfile(res?.data ?? null);
      toast.success("Freelance profile saved");
    } catch (error: any) {
      toast.error(error?.message || "Failed to save freelance profile");
    }
  };

  return (
    <>
      <CareerAcceleratorSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="lg:bg-white flex flex-1 flex-col lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          <div className="p-4 lg:p-0 mb-6">
            <h1 className="text-xl lg:text-2xl font-bold text-gray-900">
              Freelance Assistance
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Create a freelance profile for talent marketplace opportunities.
            </p>
          </div>

          <div className="px-4 lg:px-0 bg-white rounded-2xl border border-gray-100 p-5 md:p-6">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="headline">
                  Headline <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="headline"
                  placeholder="Freelance Web Developer"
                  value={form.headline}
                  onChange={(e) => setField("headline", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="summary">
                  Summary <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="summary"
                  placeholder="Builds performance-first landing pages and customer portals."
                  value={form.summary}
                  onChange={(e) => setField("summary", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="skills">
                  Skills <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="skills"
                  placeholder="Comma-separated, e.g. React, Node.js"
                  value={form.skills}
                  onChange={(e) => setField("skills", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="hourlyRate">Hourly Rate</Label>
                  <Input
                    id="hourlyRate"
                    placeholder="$30/hr"
                    value={form.hourlyRate}
                    onChange={(e) => setField("hourlyRate", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <Label htmlFor="availability">Availability</Label>
                  <Input
                    id="availability"
                    placeholder="Full-time"
                    value={form.availability}
                    onChange={(e) => setField("availability", e.target.value)}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="services">Services</Label>
                <Input
                  id="services"
                  placeholder="Comma-separated services offered"
                  value={form.services}
                  onChange={(e) => setField("services", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="expertiseAreas">Expertise Areas</Label>
                <Input
                  id="expertiseAreas"
                  placeholder="Comma-separated areas of expertise"
                  value={form.expertiseAreas}
                  onChange={(e) => setField("expertiseAreas", e.target.value)}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <Label htmlFor="portfolioLinks">Portfolio Links</Label>
                <Input
                  id="portfolioLinks"
                  placeholder="Comma-separated URLs"
                  value={form.portfolioLinks}
                  onChange={(e) => setField("portfolioLinks", e.target.value)}
                />
              </div>

              <Button
                type="submit"
                disabled={createProfile.isPending}
                className="self-start bg-[#F86432] hover:bg-[#F86432]/90 text-white"
              >
                {createProfile.isPending ? "Saving..." : "Save Freelance Profile"}
              </Button>
            </form>

            {savedProfile && (
              <div className="mt-6 bg-[#E6F6EC] text-[#24A164] rounded-xl p-4 text-sm">
                Profile saved successfully as of{" "}
                {savedProfile.createdAt
                  ? new Date(savedProfile.createdAt).toLocaleString()
                  : "now"}
                .
              </div>
            )}
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
