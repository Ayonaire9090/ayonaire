import { CertificateRecord } from "@/lib/api/endpoints/certificates";

export interface StudentCertificate {
  id: string;
  title: string;
  issueDate: string;
  certificateId: string;
  imageSrc?: string;
}

export const mapCertificateRecordToStudentCertificate = (
  record: CertificateRecord,
): StudentCertificate => {
  const course =
    typeof record.course === "string" ? null : record.course;

  return {
    id: record._id,
    title: course?.title ?? "Untitled course",
    issueDate: new Date(record.issuedAt).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    }),
    certificateId: record.certificateId,
    imageSrc: course?.thumbnail?.url,
  };
};
