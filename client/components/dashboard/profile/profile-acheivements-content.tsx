"use client";

import Image from "next/image";
import {
  useGetCompletedCourses,
  useGetEnrolledCourses,
} from "@/hooks/api/use-enrollment";
import { useGetMyCertificates } from "@/hooks/api/use-certificates";

interface AchievementCardProps {
  icon: string;
  title: string;
  description: string;
  earnedAt?: string;
}

function AchievementCard({
  icon,
  title,
  description,
  earnedAt,
}: AchievementCardProps) {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-4 w-full sm:w-[310px] shrink-0">
      <div className="flex flex-col items-center flex-1">
        <div className="w-[100px] h-[100px] bg-[#FFF5F0] rounded-[32px] flex items-center justify-center mb-6 shrink-0">
          <Image
            src={icon}
            alt={title}
            width={45}
            height={45}
            className="w-12 h-12 object-contain"
          />
        </div>
        <h2 className="text-[20px] font-bold text-gray-900 mb-3 text-center">
          {title}
        </h2>
        <p className="text-[13px] font-medium text-primary uppercase leading-[1.6] tracking-wide text-center px-2">
          {description}
        </p>
      </div>

      {earnedAt && (
        <div className="w-full mt-6">
          <div className="w-full h-px bg-gray-100 mb-6" />
          <h2 className="text-[13px] font-bold text-gray-900 uppercase text-center tracking-wide">
            Earned {earnedAt}
          </h2>
        </div>
      )}
    </div>
  );
}

export const ProfileAcheivementsContent = () => {
  const { data: enrolledData, isLoading: enrolledLoading } =
    useGetEnrolledCourses();
  const { data: completedData, isLoading: completedLoading } =
    useGetCompletedCourses();
  const { data: certificateData, isLoading: certificatesLoading } =
    useGetMyCertificates();

  const enrollments = enrolledData?.data ?? [];
  const completedCourses = completedData?.data ?? [];
  const certificates = certificateData?.data ?? [];

  const achievements: AchievementCardProps[] = [];

  if (enrollments.length > 0) {
    achievements.push({
      icon: "/assets/icons/team.svg",
      title: "Course Starter",
      description: `Enrolled in ${enrollments.length} course${enrollments.length === 1 ? "" : "s"}`,
      earnedAt: enrollments[0]?.createdAt
        ? new Date(enrollments[0].createdAt).toLocaleDateString(undefined, {
            month: "short",
            year: "numeric",
          })
        : undefined,
    });
  }

  if (completedCourses.length > 0) {
    achievements.push({
      icon: "/assets/icons/thinker.svg",
      title: "Course Finisher",
      description: `Completed ${completedCourses.length} course${completedCourses.length === 1 ? "" : "s"}`,
    });
  }

  certificates.slice(0, 3).forEach((certificate) => {
    achievements.push({
      icon: "/assets/icons/award-badge.svg",
      title: "Certified Learner",
      description:
        typeof certificate.course === "object"
          ? certificate.course.title
          : certificate.certificateId,
      earnedAt: new Date(certificate.issuedAt).toLocaleDateString(undefined, {
        month: "short",
        year: "numeric",
      }),
    });
  });

  if (enrolledLoading || completedLoading || certificatesLoading) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (achievements.length === 0) {
    return (
      <div className="py-16 text-center">
        <p className="text-gray-400 text-[15px]">
          No achievements have been earned yet.
        </p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-[95%] md:max-w-full mx-auto flex flex-col sm:flex-row items-stretch gap-6 my-6 flex-wrap">
      {achievements.map((achievement) => (
        <AchievementCard
          key={`${achievement.title}-${achievement.description}`}
          {...achievement}
        />
      ))}
    </div>
  );
};
