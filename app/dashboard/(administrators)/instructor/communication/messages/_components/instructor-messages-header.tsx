"use client";
import { dashboardData } from "@/constants";
import { IconChevronDown } from "@tabler/icons-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, usePathname } from "next/navigation";
import {
  Bell,
  MessageSquare,
  BookOpen,
  Video,
  Briefcase,
  Presentation,
  LayoutTemplate,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { AppLogo } from "@/components/app-logo";
import { useAuthStore } from "@/store/auth.store";
import { DashboardUserDropDown } from "@/components/dashboard/dashboard-user-dropdown";

const headerNav = [
  { title: "Feed", url: "/dInstructor/feed", icon: LayoutTemplate },
  { title: "Workshop", url: "/dashboard/instructor/workshop", icon: Video },
  {
    title: "Job Fair Sessions",
    url: "/dashboard/instructor/job-sessions",
    icon: Briefcase,
  },
  { title: "Courses", url: "/dashboard/instructor/courses", icon: BookOpen },
  {
    title: "Messages",
    url: "/dashboard/instructor/communication/messages",
    icon: MessageSquare,
  },
];

const careerAcceleratorSubNav = [
  {
    title: "AI Career Agent",
    url: "/dashboard/instructor/career-accelarator/ai-career-agent",
  },
  {
    title: "Career Support Tools",
    url: "/dashboard/instructor/career-accelarator/career-support-tools",
  },
  {
    title: "Job Assistance System",
    url: "/dashboard/instructor/career-accelarator/job-assistance-system",
  },
  {
    title: "Freelancing Assistance",
    url: "/dashboard/instructor/career-accelarator/freelance-assistance-system",
  },
  {
    title: "Talent Marketplace",
    url: "/dashboard/instructor/career-accelarator/talent-marketplace",
  },
];

export const InstructorMessagesHeader = ({
  className,
  showLogo,
}: {
  className?: string;
  showLogo?: boolean;
}) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuthStore();

  const isActive = (url: string) => {
    return pathname.startsWith(url);
  };

  return (
    <header
      className={cn(
        "hidden md:flex w-full shrink-0 flex-row items-center justify-between gap-4 border-b border-gray-200  py-2 pb-1 px-3",
        className,
      )}
    >
      <div className="flex items-center gap-8 lg:gap-10 mx-auto">
        {showLogo && <AppLogo />}
        {headerNav.map((item) => {
          const active = isActive(item.url);
          return (
            <Link
              key={item.title}
              href={item.url}
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 min-w-[50px] transition-colors",
                active
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-gray-500 hover:text-gray-900",
              )}
            >
              <item.icon className="h-5 w-5" strokeWidth={active ? 2 : 1.5} />
              <span
                className={cn(
                  "text-xs leading-tight whitespace-nowrap",
                  active && "font-medium",
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div
              className={cn(
                "flex flex-col items-center justify-center gap-1.5 min-w-[50px] transition-colors cursor-pointer -mt-1",
                pathname.includes("career-accelarator")
                  ? "text-primary border-b-2 border-b-primary"
                  : "text-gray-500 hover:text-gray-900",
              )}
            >
              <Presentation
                className="h-6 w-6"
                strokeWidth={pathname.includes("career-accelarator") ? 2 : 1.5}
              />
              <span
                className={cn(
                  "text-xs -mt-1 leading-tight whitespace-nowrap flex items-center gap-1",
                  pathname.includes("career-accelarator") && "font-medium",
                )}
              >
                Career Accelerator <IconChevronDown className="h-3 w-3" />
              </span>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="center"
            sideOffset={8}
            className="w-56 rounded-xl border border-gray-200 bg-[#F2F2F2] p-2 space-y-1"
          >
            {careerAcceleratorSubNav.map((subItem) => (
              <DropdownMenuItem
                key={subItem.title}
                className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer text-sm font-medium text-gray-800 hover:bg-white focus:bg-white"
              >
                <Link href={subItem.url} className="flex w-full h-full">
                  {subItem.title}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white hover:bg-white/80 transition-colors">
          <Bell className="h-5 w-5 text-black" fill="currentColor" />
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#E33B44] text-[10px] font-bold text-white border-2 border-[#F8F9FA]">
            8
          </span>
        </button>

        <DashboardUserDropDown>
          <Avatar className="h-12 w-12 border-2 border-transparent cursor-pointer hover:opacity-80 transition-opacity">
            <AvatarImage
              src={user?.profile?.url}
              alt={user?.name || dashboardData.user.name}
              className="object-cover"
            />
            <AvatarFallback>
              {user?.name ? user.name.slice(0, 2).toUpperCase() : "AY"}
            </AvatarFallback>
          </Avatar>
        </DashboardUserDropDown>
      </div>
    </header>
  );
};
