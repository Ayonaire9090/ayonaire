"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BookOpen,
  CircleDollarSign,
  Palette,
  Settings,
  Mail,
  LogIn,
  FileText,
} from "lucide-react";
import { cn } from "@/lib/utils";

export const AdminSystemSettingsSidebar = ({
  searchQuery = "",
}: {
  searchQuery?: string;
}) => {
  const pathname = usePathname();

  const links = [
    {
      name: "General",
      href: "/dashboard/admin/system-settings",
      icon: LayoutGrid,
    },
    {
      name: "Courses",
      href: "/dashboard/admin/system-settings/courses",
      icon: BookOpen,
    },
    {
      name: "Monetization",
      href: "/dashboard/admin/system-settings/monetization",
      icon: CircleDollarSign,
    },
    {
      name: "Design",
      href: "/dashboard/admin/system-settings/design",
      icon: Palette,
    },
    {
      name: "Advanced",
      href: "/dashboard/admin/system-settings/advanced",
      icon: Settings,
    },
    {
      name: "Email",
      href: "/dashboard/admin/system-settings/email",
      icon: Mail,
    },
    {
      name: "Authentication",
      href: "/dashboard/admin/system-settings/authentication",
      icon: LogIn,
    },
    {
      name: "License",
      href: "/dashboard/admin/system-settings/license",
      icon: FileText,
    },
  ];

  const filteredLinks = links.filter((link) =>
    link.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    // Add bg-[#F8F9FA] and border-gray-100/80 for extra beautiful design
    <div className="flex flex-col gap-1.5 w-full  p-3 rounded-[20px]">
      {filteredLinks.length === 0 && (
        <p className="px-4 py-3 text-sm text-gray-400">No matching settings</p>
      )}
      {filteredLinks.map((link) => {
        const isActive = pathname === link.href;
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`flex items-center gap-3.5 px-4 py-3.5 rounded-xl transition-all ${
              isActive
                ? "bg-primary text-white font-medium shadow-sm"
                : "text-gray-500 hover:bg-white hover:text-gray-900 hover:shadow-sm"
            }`}
          >
            <Icon
              className={cn(
                "w-5 h-5",
                isActive ? "text-white" : "text-gray-400",
                link.icon === LogIn && "rotate-180",
              )}
              strokeWidth={isActive ? 2.5 : 2}
            />
            <span className="text-[15px]">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
};
