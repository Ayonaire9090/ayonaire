"use client";

import { useRouter } from "next/navigation";
import { ProfileCertificateCard } from "./profile-certificate-card";
import { useGetMyCertificates } from "@/hooks/api/use-certificates";
import { toast } from "sonner";

export const ProfileCerificateContent = () => {
  const router = useRouter();
  const { data, isLoading, isError } = useGetMyCertificates();

  const certificates = data?.data ?? [];

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="py-16 text-center">
        <p className="text-red-500 text-[15px]">
          Failed to load your certificates. Please try again.
        </p>
      </div>
    );
  }

  if (certificates.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-400 text-[15px]">
          You haven&apos;t earned any certificates yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {certificates.map((cert) => (
        <ProfileCertificateCard
          key={cert._id}
          title={typeof cert.course === "object" ? cert.course.title : "Certificate"}
          issueDate={new Date(cert.issuedAt).toLocaleDateString(undefined, {
            month: "short",
            year: "numeric",
          })}
          certificateId={cert.certificateId}
          onView={() => router.push(`/certificate/verify?id=${cert.certificateId}`)}
          onDownload={() => toast.info("Certificate download isn't available yet.")}
        />
      ))}
    </div>
  );
};
