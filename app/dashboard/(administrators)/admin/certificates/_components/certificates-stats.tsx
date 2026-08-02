"use client";

import { useMemo } from "react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetCertificates } from "@/hooks/api/use-certificates";

export const CertificatesStats = () => {
  const { data } = useGetCertificates({ limit: 200 });
  const certificates = data?.certificates ?? [];

  const stats = useMemo(() => {
    const active = certificates.filter((c) => c.status === "active").length;
    const revoked = certificates.length - active;
    return [
      { title: "All", number: String(certificates.length) },
      { title: "Active", number: String(active) },
      { title: "Revoked", number: String(revoked) },
    ];
  }, [certificates]);

  return <StatsSummary data={stats} />;
};
