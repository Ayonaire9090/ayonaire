import { AuthGuard } from "@/components/auth/auth-guard";

export default function StudentDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthGuard allowedRoles={["admin", "student"]}>{children}</AuthGuard>;
}
