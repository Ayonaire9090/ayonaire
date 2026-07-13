"use client";
import { ProfileCourseCard } from "@/components/dashboard/profile/profile-course-card";
import { InstructorCreateNewCourseCard } from "./instructor-create-new-course-card";
import { Course } from "@/lib/api/endpoints/courses";

interface InstructorCourseListProps {
  courses: Course[];
}

// Draft/Published are the only statuses ProfileCourseCard's badge styling
// supports well here - anything else (e.g. "pending", "private") falls back
// to Draft rather than crashing on an unrecognized status.
function toCardStatus(status?: string): "Draft" | "Published" {
  return status?.toLowerCase() === "active" ||
    status?.toLowerCase() === "published"
    ? "Published"
    : "Draft";
}

export function InstructorCourseList({ courses }: InstructorCourseListProps) {
  return (
    <div className="py-6 md:py-8 w-full max-w-[96%] md:max-w-full mx-auto">
      {/* My Courses Content */}
      {courses.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <ProfileCourseCard
              key={course._id}
              imageSrc={course.thumbnail || "/assets/images/optin-hero.png"}
              title={course.title}
              description={course.description || "No description available"}
              slug={course.slug || course._id}
              status={toCardStatus(course.status)}
              statusAsAction={true}
              actions={[
                {
                  label: "View Course",
                  onClick: () => {
                    console.log("View course");
                  },
                },
                {
                  label: "Edit Course",
                  onClick: () => {
                    console.log("Edit course");
                  },
                },
                {
                  label:
                    toCardStatus(course.status) === "Published"
                      ? "Unpublish"
                      : "Publish",
                  onClick: () => {
                    console.log("Publish/Unpublish Course");
                  },
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
