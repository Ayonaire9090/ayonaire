import { redirect } from "next/navigation";

export default function StudentAskForHelpRedirectPage() {
  redirect("/dashboard/student/feed/ask-for-help");
}
