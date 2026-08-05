"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MessageSquarePlus, Loader2, GraduationCap } from "lucide-react";
import { toast } from "sonner";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useGetEnrolledCourses } from "@/hooks/api/use-enrollment";
import { enrollmentApi } from "@/lib/api/endpoints/enrollment";
import { useCreateDMMutation } from "@/hooks/api/use-rooms";

// Students can only start a DM with the instructor of a course they're
// enrolled in - there's no general "search for any user" endpoint yet
// (the closest thing, /api/v1/auth/non-admin-users, is admin-only). The
// enrolled-courses list only has the instructor's name, not their user id,
// so we fetch that specific course's detail on click to get the real id
// needed by POST /api/v1/room/dm.
export function NewMessagePopover() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [loadingCourseId, setLoadingCourseId] = useState<string | null>(null);

  const { data: enrolledData, isLoading } = useGetEnrolledCourses();
  const createDM = useCreateDMMutation();

  const enrollments = (enrolledData?.data ?? []).filter(
    (e) => typeof e.course === "object" && e.course !== null,
  );

  const handleSelectCourse = async (courseId: string) => {
    setLoadingCourseId(courseId);
    try {
      const detail = await enrollmentApi.getCourseDetail(courseId);
      const instructorId = detail.data?.instructor?.id;
      if (!instructorId) {
        toast.error("This course doesn't have an instructor assigned yet.");
        return;
      }
      const res = await createDM.mutateAsync(instructorId);
      const room = res.data;
      setOpen(false);
      if (room?.id) router.push(`/dashboard/student/messages/${room.id}`);
    } catch (err) {
      toast.error(
        err instanceof Error ? err.message : "Couldn't start conversation",
      );
    } finally {
      setLoadingCourseId(null);
    }
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          className="ml-auto p-1.5 text-gray-500 hover:text-black transition-colors"
          aria-label="New message"
        >
          <MessageSquarePlus className="w-5 h-5" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-72 p-2">
        <p className="px-2 pt-1 pb-2 text-[12px] font-medium text-gray-400 uppercase tracking-wide">
          Message an instructor
        </p>
        {isLoading ? (
          <div className="flex items-center justify-center py-6">
            <Loader2 className="w-4 h-4 animate-spin text-gray-400" />
          </div>
        ) : enrollments.length === 0 ? (
          <p className="px-2 py-4 text-[13px] text-gray-400 text-center">
            Enroll in a course to message its instructor.
          </p>
        ) : (
          <div className="flex flex-col gap-0.5 max-h-64 overflow-y-auto">
            {enrollments.map((enrollment) => {
              const course =
                typeof enrollment.course === "object" ? enrollment.course : null;
              if (!course) return null;
              const isRowLoading = loadingCourseId === course._id;

              return (
                <button
                  key={enrollment._id}
                  onClick={() => handleSelectCourse(course._id)}
                  disabled={loadingCourseId !== null}
                  className="flex items-center gap-3 px-2 py-2 rounded-lg text-left hover:bg-gray-50 transition-colors disabled:opacity-50"
                >
                  <div className="w-8 h-8 rounded-full bg-[#FFF5F2] flex items-center justify-center shrink-0">
                    <GraduationCap className="w-4 h-4 text-[#F86432]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-medium text-gray-900 truncate">
                      {course.instructor?.name ?? "Instructor"}
                    </p>
                    <p className="text-[12px] text-gray-400 truncate">
                      {course.title}
                    </p>
                  </div>
                  {isRowLoading && (
                    <Loader2 className="w-4 h-4 animate-spin text-gray-400 shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
}
