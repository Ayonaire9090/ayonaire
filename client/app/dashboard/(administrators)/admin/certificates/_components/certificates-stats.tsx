"use client";

import { useMemo } from "react";
import { Layers, CheckCircle2, Ban } from "lucide-react";
import { StatsSummary } from "@/components/dashboard/stats-summary";
import { useGetCertificates } from "@/hooks/api/use-certificates";

export const CertificatesStats = () => {
  const { data } = useGetCertificates({ limit: 200 });
  const certificates = data?.certificates ?? [];

  const stats = useMemo(() => {
    const active = certificates.filter((c) => c.status === "active").length;
    const revoked = certificates.length - active;
    return [
      { title: "All", number: String(certificates.length), icon: Layers, iconBg: "bg-[#3B82F6]" },
      { title: "Active", number: String(active), icon: CheckCircle2, iconBg: "bg-[#24A164]" },
      { title: "Revoked", number: String(revoked), icon: Ban, iconBg: "bg-[#E5383B]" },
    ];
  }, [certificates]);

  return <StatsSummary data={stats} />;
};
