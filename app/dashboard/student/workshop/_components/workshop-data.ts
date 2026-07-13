import { WorkshopRecord } from "@/lib/api/endpoints/workshops";
import {
  format,
  intervalToDuration,
  isToday,
  isTomorrow,
  isWithinInterval,
} from "date-fns";
import { DateRange } from "react-day-picker";

export interface StudentWorkshop {
  id: string;
  title: string;
  author: string;
  platform: string;
  month: string;
  day: string;
  label: string;
  dateText: string;
  time: string;
  endTime?: string;
  isLive: boolean;
  startDate: Date;
  endDate: Date;
  status: "upcoming" | "completed";
}

function getDayLabel(start: Date): string {
  if (isToday(start)) return "Today";
  if (isTomorrow(start)) return "Tomorrow";
  return format(start, "EEEE");
}

// author has no confirmed backend field beyond the optional createdBy on
// WorkshopRecord, so it falls back to "-" rather than a guessed value.
export function mapWorkshopRecordToStudentWorkshop(
  workshop: WorkshopRecord,
): StudentWorkshop {
  const startDate = new Date(workshop.startDate);
  const endDate = new Date(workshop.endDate);
  const now = new Date();
  const isLive = now >= startDate && now <= endDate;

  let endTime: string | undefined;
  if (isLive) {
    const duration = intervalToDuration({ start: now, end: endDate });
    endTime = `${duration.hours ?? 0}h ${duration.minutes ?? 0}m`;
  }

  const author =
    typeof workshop.createdBy === "object" ? workshop.createdBy.name : "-";

  return {
    id: workshop._id,
    title: workshop.title,
    author,
    platform: workshop.platform || "-",
    month: format(startDate, "MMM"),
    day: format(startDate, "d"),
    label: getDayLabel(startDate),
    dateText: format(startDate, "d MMM"),
    time: `${format(startDate, "hh:mm a")} - ${format(endDate, "hh:mm a")}`,
    endTime,
    isLive,
    startDate,
    endDate,
    status: endDate < now ? "completed" : "upcoming",
  };
}

export function isWithinDateRange(
  workshop: StudentWorkshop,
  range?: DateRange,
): boolean {
  if (!range?.from) return true;
  const end = range.to ?? range.from;
  return isWithinInterval(workshop.startDate, { start: range.from, end });
}

export interface WorkshopHistoryItem {
  id: string;
  time: string;
  title: string;
  subtitle: string;
}

export interface WorkshopHistoryGroup {
  date: string;
  items: WorkshopHistoryItem[];
}

export function groupWorkshopsByDate(
  workshops: StudentWorkshop[],
): WorkshopHistoryGroup[] {
  const groups = new Map<string, WorkshopHistoryGroup>();

  for (const workshop of workshops) {
    const key = format(workshop.startDate, "MMM d, yyyy");
    if (!groups.has(key)) {
      groups.set(key, { date: key, items: [] });
    }
    groups.get(key)!.items.push({
      id: workshop.id,
      time: workshop.time,
      title: workshop.title,
      subtitle: `(${workshop.platform})`,
    });
  }

  return Array.from(groups.values());
}
