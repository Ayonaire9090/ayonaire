import { redirect } from "next/navigation";

export default function StudentChatroomsRedirectPage() {
  redirect("/dashboard/student/messages");
}
