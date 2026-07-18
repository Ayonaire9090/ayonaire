"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ProfileCourseCard } from "@/components/dashboard/profile/profile-course-card";
import { InstructorCreateNewCourseCard } from "./instructor-create-new-course-card";
import { Course } from "@/lib/api/endpoints/courses";
import { useTogglePublishMutation } from "@/hooks/api/use-courses";

interface InstructorCourseListProps {
  courses: Course[];
}

// Draft/Published are the only statuses ProfileCourseCard's badge styling
// supports well here - "Archived" (the real third status, per the backend's
// CourseStatus enum: Draft | Active | Archived) falls back to Draft rather
// than crashing on an unrecognized status.
function toCardStatus(status?: string): "Draft" | "Published" {
  return status === "Active" ? "Published" : "Draft";
}

export function InstructorCourseList({ courses }: InstructorCourseListProps) {
  const router = useRouter();
  const togglePublish = useTogglePublishMutation();

  const handleTogglePublish = (course: Course) => {
    togglePublish.mutate(course._id, {
      onSuccess: () => {
        toast.success(
          toCardStatus(course.status) === "Published"
            ? "Course unpublished"
            : "Course published",
        );
      },
      onError: (err) => {
        toast.error(err instanceof Error ? err.message : "Failed to update course status");
      },
    });
  };

  return (
    <div className="py-6 md:py-8 w-full max-w-[96%] md:max-w-full mx-auto">
      {/* My Courses Content */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <ProfileCourseCard
              key={course._id}
              imageSrc={course.thumbnail?.url || "/assets/images/optin-hero.png"}
              title={course.title}
              description={course.description || "No description available"}
              slug={course._id}
              href={`/dashboard/instructor/courses/${course._id}`}
              status={toCardStatus(course.status)}
              statusAsAction={true}
              actions={[
                {
                  label: "View Course",
                  onClick: () => {
                    router.push(`/dashboard/instructor/courses/${course._id}`);
                  },
                },
                {
                  label: "Edit Course",
                  onClick: () => {
                    toast.info("Editing an existing course isn't available yet.");
                  },
                },
                {
                  label:
                    toCardStatus(course.status) === "Published"
                      ? "Unpublish"
                      : "Publish",
                  onClick: () => handleTogglePublish(course),
                  isDestructive: toCardStatus(course.status) === "Published",
                },
              ]}
            />
          ))}
          {/* Create New Course Card */}
          <InstructorCreateNewCourseCard />
        </div>
      ) : (
        <div className="py-16 text-center flex justify-center w-full max-w-[420px] mx-auto">
          <InstructorCreateNewCourseCard />
        </div>
      )}
    </div>
  );
}
