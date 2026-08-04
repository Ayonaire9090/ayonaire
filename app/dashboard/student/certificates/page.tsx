"use client";

import { SidebarInset } from "@/components/ui/sidebar";
import { StudentFeedSidebarContent } from "../_components/student-feed-sidebar-content";
import { StudentDashboardHeader } from "../_components/student-dashboard-header";
import { useGetMyCertificates } from "@/hooks/api/use-certificates";
import { Award, Copy, Download } from "lucide-react";
import { toast } from "sonner";

function courseTitle(course: { title: string } | string | undefined): string {
  if (!course) return "Untitled Course";
  return typeof course === "string" ? course : course.title;
}

export default function StudentCertificatesPage() {
  const { data, isLoading, isError } = useGetMyCertificates();
  const certificates = data?.data ?? [];

  const handleCopyId = (certificateId: string) => {
    navigator.clipboard.writeText(certificateId);
    toast.success("Certificate ID copied");
  };

  const handleDownload = () => {
    toast.info(
      "PDF download isn't available yet - pending confirmation from the backend on how certificate files are served.",
    );
  };

  return (
    <>
      <StudentFeedSidebarContent variant="sidebar" collapsible="offcanvas" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <StudentDashboardHeader />
        <div className="flex flex-col gap-6 p-4 lg:p-8 max-w-5xl mx-auto w-full">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Certificates</h1>
            <p className="text-gray-500 text-[15px] mt-1">
              Certificates you've earned from completed courses.
            </p>
          </div>

          {isLoading ? (
            <div className="flex items-center justify-center py-24">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          ) : isError ? (
            <div className="flex items-center justify-center py-24 text-[15px] text-red-500">
              Failed to load certificates. Please try again.
            </div>
          ) : certificates.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center gap-3 bg-white rounded-2xl">
              <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                <Award className="w-8 h-8 text-gray-300" />
              </div>
              <h2 className="text-lg font-semibold text-gray-800">
                No certificates yet
              </h2>
              <p className="text-sm text-gray-400 max-w-sm">
                Complete a course to earn your first certificate.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certificates.map((cert) => (
                <div
                  key={cert._id}
                  className="bg-white rounded-2xl p-5 flex flex-col gap-4 border border-gray-100"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="w-12 h-12 rounded-xl bg-[#FFF5F2] flex items-center justify-center shrink-0">
                      <Award className="w-6 h-6 text-[#F86432]" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[11px] font-semibold ${
                        cert.status === "active"
                          ? "bg-[#ECFDF5] text-[#10B981]"
                          : "bg-[#FEF2F2] text-[#EF4444]"
                      }`}
                    >
                      {cert.status === "active" ? "Active" : "Revoked"}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 text-[16px]">
                      {courseTitle(cert.course)}
                    </h3>
                    <p className="text-[13px] text-gray-400 mt-0.5">
                      Issued {new Date(cert.issuedAt).toLocaleDateString(undefined, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-2 pt-3 border-t border-gray-100">
                    <button
                      onClick={() => handleCopyId(cert.certificateId)}
                      className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-800 transition-colors"
                      title="Copy certificate ID"
                    >
                      <Copy className="w-3.5 h-3.5" />
                      {cert.certificateId}
                    </button>
                    <button
                      onClick={handleDownload}
                      className="flex items-center gap-1.5 text-[13px] font-medium text-[#F86432] hover:text-[#E55A2B] transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </SidebarInset>
    </>
  );
}
