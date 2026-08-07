import { WorkshopRecord } from "@/lib/api/endpoints/workshops";

export interface WorkshopRow {
  id: string;
  title: string;
  platform: string;
  link: string;
  status: WorkshopRecord["status"];
  createdBy: string;
  startDate: string;
  endDate: string;
}

export function mapWorkshopRecordToRow(workshop: WorkshopRecord): WorkshopRow {
  return {
    id: workshop.id,
    title: workshop.title,
    platform: workshop.platform?.name ?? "-",
    link: workshop.platform?.link ?? "",
    status: workshop.status,
    createdBy: workshop.createdBy?.name ?? "-",
    startDate: workshop.startDate
      ? new Date(workshop.startDate).toLocaleString(undefined, {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })
      : "-",
    endDate: workshop.endDate
      ? new Date(workshop.endDate).toLocaleString(undefined, {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        })
      : "-",
  };
}

export const workshopStatusStyles: Record<WorkshopRecord["status"], string> = {
  live: "bg-[#E6F6EC] text-[#24A164]",
  upcoming: "bg-[#EAF0FF] text-[#3B6EF5]",
  completed: "bg-gray-100 text-gray-600",
};
