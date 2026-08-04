"use client";

import { useMemo, useState } from "react";
import { toast } from "sonner";
import { Award } from "lucide-react";
import { SidebarInset } from "@/components/ui/sidebar";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { ProfileCertificateCard } from "@/components/dashboard/profile/profile-certificate-card";
import { useGetMyCertificates } from "@/hooks/api/use-certificates";
import { useAuthStore } from "@/store/auth.store";
import {
  mapCertificateRecordToStudentCertificate,
  StudentCertificate,
} from "./_components/certificate-data";
import { CertificateDetailDialog } from "./_components/certificate-detail-dialog";

export default function StudentCertificatesPage() {
  const { data, isLoading, isError } = useGetMyCertificates();
  const studentName = useAuthStore((state) => state.user?.name) ?? "you";

  const [selectedCertificate, setSelectedCertificate] =
    useState<StudentCertificate | null>(null);

  const certificates = useMemo(
    () => (data?.data ?? []).map(mapCertificateRecordToStudentCertificate),
    [data],
  );

  const handleDownload = () => {
    toast.info("Certificate download is coming soon.");
  };

  return (
    <>
      <StudentFeedSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />

        <div className="lg:bg-white flex flex-1 flex-col lg:my-6 lg:rounded-3xl lg:p-8 lg:min-w-4xl lg:mx-auto pb-24">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 p-4 lg:p-0">
            Certificates
          </h1>

          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : isError ? (
            <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
              Failed to load certificates. Please try again.
            </div>
          ) : certificates.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-3 py-20 px-4 text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-7 h-7 text-primary" />
              </div>
              <h2 className="text-base font-semibold text-gray-900">
                No certificates yet
              </h2>
              <p className="text-sm text-gray-500 max-w-sm">
                Complete a course with a certificate of completion and it
                will show up here.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 px-4 lg:px-0">
              {certificates.map((certificate) => (
                <ProfileCertificateCard
                  key={certificate.id}
                  title={certificate.title}
                  issueDate={certificate.issueDate}
                  certificateId={certificate.certificateId}
                  imageSrc={certificate.imageSrc}
                  onView={() => setSelectedCertificate(certificate)}
                  onDownload={handleDownload}
                />
              ))}
            </div>
          )}
        </div>
      </SidebarInset>

      <CertificateDetailDialog
        certificate={selectedCertificate}
        studentName={studentName}
        onClose={() => setSelectedCertificate(null)}
      />
    </>
  );
}
