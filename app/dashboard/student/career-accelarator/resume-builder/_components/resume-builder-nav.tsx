"use client";

import { cn } from "@/lib/utils";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { resumeSections } from "./resume-sections-data";

export function ResumeBuilderNav({
  activeSection,
  onSelect,
}: {
  activeSection: string;
  onSelect: (sectionId: string) => void;
}) {
  const { state } = useSidebar();
  const isCollapsed = state === "collapsed";

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu className="gap-1">
          {resumeSections.map((section) => {
            const isActive = section.id === activeSection;

            return (
              <SidebarMenuItem key={section.id}>
                <SidebarMenuButton
                  tooltip={section.title}
                  onClick={() => onSelect(section.id)}
                  className={cn(
                    "text-gray-500 py-5 px-3 rounded-[10px] hover:bg-transparent hover:text-primary transition-all cursor-pointer",
                    isActive && "bg-white text-black font-bold",
                  )}
                >
                  <section.icon
                    className={cn(
                      isCollapsed ? "h-6 w-6 shrink-0" : "h-5 w-5",
                      isActive && "text-primary",
                    )}
                  />
                  <span className={cn("text-sm", isActive && "text-primary")}>
                    {section.title}
                  </span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
