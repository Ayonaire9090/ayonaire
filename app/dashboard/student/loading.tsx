import { StudentLoadingSkeleton } from "@/components/dashboard/student-loading-skeleton";
export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl p-6">
      <StudentLoadingSkeleton variant="cards" />
    </div>
  );
}
