import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { CertificatesStats } from "./_components/certificates-stats";
import { CertificatesTable } from "./_components/certificates-table";
import { IssueCertificateDialog } from "./_components/issue-certificate-dialog";

export default function AdminCertificatesPage() {
  return (
    <div className="flex flex-col gap-5 lg:gap-8 mb-4">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <DashboardHeader
          title="Certificates"
          subTitle="Issue and manage course completion certificates"
        />
        <IssueCertificateDialog />
      </div>

      <CertificatesStats />
      <CertificatesTable />
    </div>
  );
}
