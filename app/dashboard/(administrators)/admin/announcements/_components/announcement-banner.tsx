import Image from "next/image";

interface AnnouncementBannerProps {
  title?: string;
  description?: string;
}
export const AnnouncementBanner = ({
  title = "Create Announcement",
  description = "Notify all students of your course",
}: AnnouncementBannerProps) => {
  return (
    <div className="w-full bg-white border-0 rounded-xl p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 rounded-2xl bg-[#F86432]/10">
          <Image
            src="/assets/icons/speaker.svg"
            alt="Announcement"
            width={28}
            height={28}
          />
        </div>
        <div className="flex flex-col gap-1">
          {title && (
            <h3 className="text-base font-semibold text-gray-900">{title}</h3>
          )}

          {description && (
            <p className="text-sm text-gray-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};
