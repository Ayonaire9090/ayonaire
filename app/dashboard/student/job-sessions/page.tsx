"use client";

import { SidebarProvider } from "@/components/ui/sidebar";
import { StudentJobFairSessionsContent } from "./student-job-fair-content";

export default function StudentJobFairSessionsPage() {
  return (
    <SidebarProvider defaultOpen={false}>
      <StudentJobFairSessionsContent />
    </SidebarProvider>
  );
}
