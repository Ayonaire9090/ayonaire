import Link from "next/link";
import { LucideIcon, ArrowRight } from "lucide-react";

interface CommunitySpaceCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
}

export const CommunitySpaceCard = ({
  title,
  description,
  href,
  icon: Icon,
}: CommunitySpaceCardProps) => {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 bg-white border border-gray-200/80 rounded-2xl p-5 hover:border-primary/40 hover:shadow-md transition-all"
    >
      <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
        <Icon className="w-5 h-5" />
      </div>
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold text-gray-900 text-[15px]">{title}</h3>
        <p className="text-sm text-gray-500 leading-snug">{description}</p>
      </div>
      <span className="flex items-center gap-1.5 text-primary text-sm font-medium mt-auto pt-1">
        Enter
        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
};
