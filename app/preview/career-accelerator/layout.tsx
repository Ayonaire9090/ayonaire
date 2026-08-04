"use client";

// Auth-free preview of the Career Accelerator homepage + Resume Builder so
// they can be reviewed without real student credentials. Reuses the real
// page components as-is - neither one calls a useQuery hook that needs
// seeded data (the homepage is static content, the Resume Builder holds
// everything in local component state except the Summary "Enhance" button,
// which is a mutation and will hit the real API and fail with the normal
// error toast, same as the admin/instructor previews). The global
// QueryClientProvider from the root layout already covers what little is
// needed here, so no seeded QueryClient is required.
//
// Scope note: only the homepage and Resume Builder have preview routes.
// Their sidebar/tool-grid links still point at the real, auth-guarded
// /dashboard/student/career-accelarator/* routes, so clicking into any
// OTHER career tool (AI Career Agent, Job Assistance, etc.) from inside
// this preview will bounce to login - those weren't given preview routes.
// Safe to delete before launch.

import { SidebarProvider } from "@/components/ui/sidebar";

export default function PreviewCareerAcceleratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-amber-50 border-b border-amber-200 text-amber-800 text-[13px] text-center py-2 px-4">
        Preview mode — the real Career Accelerator homepage and Resume
        Builder, no login required. Links to other career tools and the
        &quot;Enhance&quot; AI action will show a normal error since
        there&apos;s no backend session behind this preview.
      </div>
      <SidebarProvider defaultOpen={false}>{children}</SidebarProvider>
    </>
  );
}
