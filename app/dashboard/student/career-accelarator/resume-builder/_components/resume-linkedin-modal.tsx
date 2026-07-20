"use client";

import { useState } from "react";
import { toast } from "sonner";
import { FileEdit, Upload } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const steps = [
  { color: "bg-emerald-100 text-emerald-600", text: "Click the Me icon at the top of your LinkedIn homepage." },
  { color: "bg-purple-100 text-purple-600", text: "Click View profile." },
  { color: "bg-amber-100 text-amber-600", text: "If downloading another member's profile, navigate to their profile." },
  { color: "bg-red-100 text-red-600", text: "Click the More or Resources button in the introduction section." },
  { color: "bg-blue-100 text-blue-600", text: "Select Save to PDF from the dropdown." },
];

export function ResumeLinkedInModal({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [file, setFile] = useState<File | null>(null);

  const handleConvert = () => {
    // No backend endpoint yet accepts a LinkedIn PDF export for parsing —
    // the existing import endpoint only takes a profile URL/text.
    toast.error("PDF conversion isn't available yet — this needs a backend endpoint that can parse an uploaded LinkedIn PDF.");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-0 gap-0 max-h-[85vh] flex flex-col overflow-hidden">
        <DialogHeader className="bg-[#FDEEEC] px-6 py-5 shrink-0">
          <DialogTitle className="flex items-center gap-2.5 text-lg">
            <FileEdit className="size-5 text-[#F86432]" />
            Convert LinkedIn to CV
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 overflow-y-auto flex-1 min-h-0">
          <label
            className={cn(
              "flex flex-col items-center justify-center gap-3 text-center border border-dashed border-gray-300 rounded-2xl bg-[#F8F9FA] py-16 px-6 cursor-pointer hover:bg-gray-100 transition-colors",
            )}
          >
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            <div className="flex items-center justify-center size-12 rounded-full bg-gray-200 text-gray-600">
              <Upload className="size-5" />
            </div>
            <div>
              <p className="font-medium text-gray-900">
                {file ? file.name : "Upload your LinkedIn PDF"}
              </p>
              <p className="text-sm text-gray-500 mt-1">
                {file ? "Ready to convert" : "Export your profile as PDF and upload it here"}
              </p>
            </div>
          </label>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              How to download LinkedIn PDF
            </h3>
            <div className="flex flex-col gap-3">
              {steps.map((step, i) => (
                <div key={i} className="flex items-center gap-3 bg-[#F8F9FA] rounded-xl p-3">
                  <div
                    className={cn(
                      "flex items-center justify-center size-8 rounded-full font-semibold text-sm shrink-0",
                      step.color,
                    )}
                  >
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-start gap-2 bg-[#FDEEEC] rounded-xl p-3 mt-4">
              <span className="text-[#F86432] shrink-0">?</span>
              <div>
                <p className="text-sm font-semibold text-gray-900">Need Help?</p>
                <p className="text-sm text-gray-600 mt-0.5">
                  This feature is not available on the LinkedIn mobile app.
                  You&apos;ll need to use a desktop browser to export your profile.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 px-6 py-4 border-t border-gray-100 shrink-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button
            disabled={!file}
            onClick={handleConvert}
            className="bg-[#F86432] hover:bg-[#F86432]/90 text-white"
          >
            Convert to CV
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
