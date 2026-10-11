import Image from "next/image";
import { BadgeCheck, Eye, Download } from "lucide-react";

interface ProfileCertificateCardProps {
  title: string;
  issueDate: string;
  certificateId: string;
  imageSrc?: string;
  onView?: () => void;
  onDownload?: () => void;
}

export const ProfileCertificateCard = ({
  title,
  issueDate,
  certificateId,
  imageSrc = "/assets/images/certificate-example.png",
  onView,
  onDownload,
}: ProfileCertificateCardProps) => {
  return (
    <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
      {/* Top Image Section */}
      <div className="relative w-full h-[200px] bg-linear-to-b from-[#FFD5B8] to-white p-4 pt-6 flex justify-center items-center">
        {/* Verified Badge */}
        <div className="absolute top-2 right-2 bg-white rounded-full p-1.5 flex items-center gap-1.5 shadow-[0_2px_8px_rgba(0,0,0,0.08)] z-10">
          <BadgeCheck className="w-4 h-4 fill-primary text-white" />
          <span className="text-[12px] font-bold text-primary uppercase tracking-wide pr-1">
            Verified
          </span>
        </div>

        {/* Certificate Image */}
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt="Certificate"
            fill
            className="object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col gap-4 p-2 pt-0">
        {/* Logo and Issued Date */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 relative shrink-0 bg-gray-50 rounded-lg flex items-center justify-center p-1">
            <Image
              src="/favicon.svg"
              alt="Ayonaire Academy"
              fill
              className="object-contain p-1.5"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-primary font-semibold text-[14px]">
              Ayonaire Academy
            </span>
            <span className="text-gray-900 font-bold text-[11px] uppercase tracking-wide mt-0.5">
              Issued {issueDate}
            </span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-[20px] md:text-[18px] font-bold text-gray-900 leading-tight">
          {title}
        </h3>

        {/* ID Badge */}
        <div className="bg-[#F6F6F6] rounded-xl p-2 flex justify-start items-center">
          <span className="text-[12px] text-gray-600 font-mono tracking-wide">
            ID: {certificateId}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 mt-1">
          <button
            onClick={onView}
            className="flex-1 bg-primary text-white rounded-xl py-2 flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
          >
            <Eye className="w-5 h-5" />
            <span className="font-semibold text-[14px]">View</span>
          </button>
          <button
            onClick={onDownload}
            className="w-[42px] h-[42px] bg-primary/10 text-primary rounded-xl flex items-center justify-center hover:bg-primary/20 transition-colors shrink-0"
          >
            <Download className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};
