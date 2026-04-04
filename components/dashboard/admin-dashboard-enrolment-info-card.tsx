import { Clock, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Enrolment {
  studentName: string;
  courseName: string;
  timeAgo: string;
  avatar: string;
}

const recentEnrolments: Enrolment[] = [
  {
    studentName: "John D",
    courseName: "AI Automation",
    timeAgo: "2 mins ago",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    studentName: "Mary S",
    courseName: "Data Analytics",
    timeAgo: "15 mins ago",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    studentName: "Alex P",
    courseName: "Power BI",
    timeAgo: "1 hour ago",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

export const AdminDashboardEnrolmentInfoCard = () => {
  return (
    <div className="rounded-2xl bg-white overflow-hidden py-5 px-5">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">
          Recent Enrollments
        </h3>
        <button className="text-sm font-medium text-primary hover:underline">
          View All
        </button>
      </div>

      {/* Enrolment List */}
      {/* Add divide-y divide-gray-100 for separator */}
      <div className="space-y-2">
        {recentEnrolments.map((enrolment, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-4 bg-[#FBFBFB] hover:bg-[#F5F5F5] transition-colors cursor-pointer -mx-2 px-2 rounded-lg"
          >
            <div className="flex items-center gap-3">
              <div className="relative size-11 rounded-full overflow-hidden shrink-0">
                <Image
                  src={enrolment.avatar}
                  alt={enrolment.studentName}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  {enrolment.studentName}{" "}
                  <span className="text-gray-400">→</span>{" "}
                  {enrolment.courseName}
                </p>
                <div className="flex items-center gap-1 mt-0.5">
                  <Clock className="size-3.5 text-gray-400" />
                  <span className="text-xs text-gray-400">
                    {enrolment.timeAgo}
                  </span>
                </div>
              </div>
            </div>
            <ChevronRight className="size-4 text-gray-400 shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};
