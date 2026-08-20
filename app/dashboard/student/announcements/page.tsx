import { redirect } from "next/navigation";

export default function StudentAnnouncementsRedirectPage() {
  redirect("/dashboard/student/feed/announcements");
}
