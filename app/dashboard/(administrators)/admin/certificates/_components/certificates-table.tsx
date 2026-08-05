"use client";

import { useState } from "react";
import { format } from "date-fns";
import { toast } from "sonner";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import { CertificateRecord } from "@/lib/api/endpoints/certificates";
import { useGetCertificates, useRevokeCertificateMutation } from "@/hooks/api/use-certificates";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export const CertificatesTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { data, isLoading, isError } = useGetCertificates({ limit: 200 });
  const revokeCertificate = useRevokeCertificateMutation();

  const certificates = data?.certificates ?? [];
  const filtered = certificates.filter((c) => {
    const student = typeof c.student === "string" ? "" : c.student.name;
    const course = typeof c.course === "string" ? "" : c.course.title;
    const query = searchQuery.toLowerCase();
    return (
      student.toLowerCase().includes(query) ||
      course.toLowerCase().includes(query) ||
      c.certificateId.toLowerCase().includes(query)
    );
  });

  const handleRevoke = (id: string) => {
    if (!window.confirm("Revoke this certificate? This cannot be undone.")) return;
    revokeCertificate.mutate(id, {
      onSuccess: () => toast.success("Certificate revoked"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to revoke certificate"),
    });
  };

  const columns: ColumnDef<CertificateRecord>[] = [
    {
      key: "certificateId",
      header: "Certificate ID",
      cell: (item) => <span className="font-semibold text-gray-900">{item.certificateId}</span>,
    },
    {
      key: "student",
      header: "Student",
      cell: (item) => (
        <span className="text-gray-600 font-medium">
          {typeof item.student === "string" ? item.student : item.student.name}
        </span>
      ),
    },
    {
      key: "course",
      header: "Course",
      cell: (item) => (
        <span className="text-gray-600 font-medium">
          {typeof item.course === "string" ? item.course : item.course.title}
        </span>
      ),
    },
    {
      key: "issuedAt",
      header: "Issued",
      cell: (item) => (
        <span className="text-gray-500">
          {item.issuedAt ? format(new Date(item.issuedAt), "d MMM yyyy") : "-"}
        </span>
      ),
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
            item.status === "active" ? "bg-[#ECFDF5] text-[#10B981]" : "bg-[#FEE2E2] text-[#EF4444]"
          }`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Actions",
      cell: (item) => (
        <button
          onClick={() => handleRevoke(item._id)}
          disabled={item.status === "revoked"}
          className="text-xs font-medium text-red-500 hover:underline disabled:text-gray-300 disabled:no-underline"
        >
          Revoke
        </button>
      ),
    },
  ];

  return (
    <div className="bg-white rounded-2xl p-4 lg:p-6 flex flex-col gap-4">
      <div className="relative w-full sm:w-[280px]">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-[18px] text-gray-500" />
        <Input
          placeholder="Search certificates..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-11 rounded-full border-none bg-[#F6F6F6] h-11 text-[15px] placeholder:text-gray-400 focus-visible:ring-0 focus-visible:bg-gray-100 shadow-none"
        />
      </div>

      {isLoading ? (
        <p className="py-10 text-center text-sm text-gray-400">Loading certificates...</p>
      ) : isError ? (
        <p className="py-10 text-center text-sm text-red-500">Failed to load certificates.</p>
      ) : filtered.length === 0 ? (
        <p className="py-10 text-center text-sm text-gray-400">No certificates issued yet</p>
      ) : (
        <DataTable data={filtered} columns={columns} keyExtractor={(item) => item._id} />
      )}
    </div>
  );
};
