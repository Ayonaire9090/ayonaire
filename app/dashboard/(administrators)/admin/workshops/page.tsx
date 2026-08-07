"use client";

import { useState } from "react";
import { toast } from "sonner";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { DataTable, ColumnDef } from "@/components/ui/data-table";
import {
  AppDropdown,
  AppDropdownItem,
  AppDropdownSeparator,
} from "@/components/ui/app-dropdown";
import { Button } from "@/components/ui/button";
import { MoreVertical } from "lucide-react";
import { AdminDashboardUploadLiveClassButton } from "@/components/dashboard/admin-dashboard-upload-live-class-button";
import { useGetWorkshops, useDeleteWorkshopMutation } from "@/hooks/api/use-workshops";
import { mapWorkshopRecordToRow, workshopStatusStyles, WorkshopRow } from "./_components/workshops-data";
import { WorkshopEditModal } from "./_components/workshop-edit-modal";

function WorkshopActions({
  workshop,
  onEdit,
}: {
  workshop: WorkshopRow;
  onEdit: (id: string) => void;
}) {
  const deleteWorkshop = useDeleteWorkshopMutation();

  const handleDelete = () => {
    if (!window.confirm(`Delete "${workshop.title}"? This cannot be undone.`)) return;
    deleteWorkshop.mutate(workshop.id, {
      onSuccess: () => toast.success("Workshop deleted"),
      onError: (err) => toast.error(err instanceof Error ? err.message : "Failed to delete workshop"),
    });
  };

  return (
    <AppDropdown
      variant="white"
      align="end"
      trigger={
        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-transparent">
          <MoreVertical className="size-[18px] text-black" />
        </Button>
      }
    >
      {workshop.link && (
        <AppDropdownItem variant="menu" onClick={() => window.open(workshop.link, "_blank")}>
          Open Link
        </AppDropdownItem>
      )}
      <AppDropdownItem variant="menu" onClick={() => onEdit(workshop.id)}>
        Edit
      </AppDropdownItem>
      <AppDropdownSeparator />
      <AppDropdownItem variant="danger-menu" onClick={handleDelete}>
        Delete
      </AppDropdownItem>
    </AppDropdown>
  );
}

export default function AdminWorkshopsPage() {
  const { data, isLoading, isError } = useGetWorkshops();
  const [editingId, setEditingId] = useState<string | null>(null);

  const workshops = (data?.data?.workshops ?? []).map(mapWorkshopRecordToRow);

  const columns: ColumnDef<WorkshopRow>[] = [
    {
      key: "title",
      header: "Workshop",
      cell: (item) => <span className="font-medium text-gray-900">{item.title}</span>,
      className: "w-[280px]",
    },
    {
      key: "platform",
      header: "Platform",
      cell: (item) => <span className="text-gray-600">{item.platform}</span>,
    },
    {
      key: "createdBy",
      header: "Created By",
      cell: (item) => <span className="text-gray-600">{item.createdBy}</span>,
    },
    {
      key: "startDate",
      header: "Start",
      cell: (item) => <span className="text-gray-600">{item.startDate}</span>,
    },
    {
      key: "endDate",
      header: "End",
      cell: (item) => <span className="text-gray-600">{item.endDate}</span>,
    },
    {
      key: "status",
      header: "Status",
      cell: (item) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${workshopStatusStyles[item.status]}`}
        >
          {item.status}
        </span>
      ),
    },
    {
      key: "actions",
      header: "Action",
      cell: (item) => <WorkshopActions workshop={item} onEdit={setEditingId} />,
    },
  ];

  return (
    <div className="flex flex-col gap-0 pb-4">
      <div className="flex items-center justify-between px-4 lg:px-0">
        <DashboardHeader
          title="Workshops"
          subTitle="Manage all scheduled live classes and workshops."
        />
        <AdminDashboardUploadLiveClassButton />
      </div>

      <div className="mt-4 bg-white p-4 md:p-6 rounded-2xl">
        {isLoading ? (
          <div className="flex items-center justify-center py-16">
            <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : isError ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-red-500">
            Failed to load workshops. Please try again.
          </div>
        ) : workshops.length === 0 ? (
          <div className="flex items-center justify-center py-16 text-[15px] text-gray-500">
            No workshops scheduled yet.
          </div>
        ) : (
          <DataTable data={workshops} columns={columns} keyExtractor={(item) => item.id} />
        )}
      </div>

      <WorkshopEditModal workshopId={editingId} onClose={() => setEditingId(null)} />
    </div>
  );
}
