"use client";

import { BadgeCheck, Copy } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { StudentCertificate } from "./certificate-data";

interface CertificateDetailDialogProps {
  certificate: StudentCertificate | null;
  studentName: string;
  onClose: () => void;
}

export const CertificateDetailDialog = ({
  certificate,
  studentName,
  onClose,
}: CertificateDetailDialogProps) => {
  const handleCopyId = () => {
    if (!certificate) return;
    navigator.clipboard.writeText(certificate.certificateId);
    toast.success("Certificate ID copied");
  };

  return (
    <Dialog open={!!certificate} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Certificate details</DialogTitle>
        </DialogHeader>

        {certificate && (
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2 w-fit px-3 py-1.5 rounded-full bg-[#E4F2E7] text-[#2E7D46]">
              <BadgeCheck className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-wide">
                Verified
              </span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 leading-tight">
                {certificate.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">
                Issued to {studentName}
              </p>
            </div>

            <dl className="grid grid-cols-2 gap-4 bg-[#F6F6F6] rounded-xl p-4">
              <div>
                <dt className="text-xs text-gray-500 mb-1">Issued</dt>
                <dd className="text-sm font-semibold text-gray-900">
                  {certificate.issueDate}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-gray-500 mb-1">Issued by</dt>
                <dd className="text-sm font-semibold text-gray-900">
                  Ayonaire Academy
                </dd>
              </div>
            </dl>

            <div className="flex items-center justify-between bg-white border border-gray-200 rounded-xl px-4 py-3">
              <span className="text-sm font-mono text-gray-600 truncate">
                {certificate.certificateId}
              </span>
              <button
                onClick={handleCopyId}
                className="flex items-center gap-1.5 text-primary text-sm font-semibold shrink-0 ml-3"
              >
                <Copy className="w-4 h-4" />
                Copy
              </button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};
