export type DashboardRole = "admin" | "instructor" | "student";

export function getDashboardRole(role?: string | null): DashboardRole | null {
  const normalized = role?.toLowerCase();

  if (normalized === "admin") return "admin";
  if (normalized === "instructor") return "instructor";
  if (normalized === "student" || normalized === "user") return "student";
  return null;
}

export function normalizeDashboardRole(role?: string | null): DashboardRole {
  return getDashboardRole(role) ?? "student";
}
