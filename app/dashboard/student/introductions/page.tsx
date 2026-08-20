import { redirect } from "next/navigation";

export default function StudentIntroductionsRedirectPage() {
  redirect("/dashboard/student/feed/introductions");
}
