import { redirect } from "next/navigation";

// The real instructor dashboard home fetches live data this preview doesn't
// seed yet, so route straight to the one page this preview actually covers.
export default function PreviewInstructorRootPage() {
  redirect("/preview/instructor/analytics-reporting");
}
