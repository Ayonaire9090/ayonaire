import type { Metadata } from "next";
import AttendanceDashboard from "./attendance-dashboard";

export const metadata: Metadata = {
  title: "Student Attendance | Ayonaire",
  description:
    "Confirm your attendance after class and review your recent Ayonaire sessions.",
};

export default function AttendancePage() {
  return <AttendanceDashboard />;
}
