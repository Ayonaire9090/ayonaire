"use client";

import Link from "next/link";
import Image from "next/image";
import { SidebarInset } from "@/components/ui/sidebar";
import { CareerAcceleratorSidebarContent } from "./_components/career-accelerator-sidebar-content";
import { CareerHomeHeader } from "./_components/career-home-header";
import { CareerToolCard } from "./_components/career-tool-card";
import { careerTools as tools } from "./_components/career-tools-data";
import { CareerChecklistCard } from "./_components/career-checklist-card";
import { ArrowRight, Rocket } from "lucide-react";

export default function StudentCareerAccelarator() {
  return (
    <>
      <CareerAcceleratorSidebarContent variant="sidebar" collapsible="icon" />
      <SidebarInset className="bg-[#F6F6F6] min-h-screen">
        <div className="flex flex-1 flex-col lg:my-6 lg:px-8 lg:max-w-[1400px] pb-24 gap-6">
          <CareerHomeHeader />

          <div className="px-4 lg:px-0">
            <div className="flex items-center gap-3 bg-[#FDEEEC] rounded-2xl p-4">
              <div className="flex items-center justify-center size-10 rounded-xl bg-white text-[#F86432] shrink-0">
                <Rocket className="size-5" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">Optimize your Resume 🚀</p>
                <p className="text-sm text-gray-500">
                  Increase your chances of getting selected
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
            <div className="flex flex-col gap-6">
              <div className="md:px-4 lg:px-0">
                <div className="relative overflow-hidden rounded-none md:rounded-3xl bg-gradient-to-r from-[#FFAE77] to-white p-6 md:p-8 flex flex-row items-center gap-4 md:gap-8">
                  <div className="flex items-center justify-center shrink-0 relative w-20 h-20 md:w-32 md:h-32">
                    <Image
                      src="/assets/icons/Resumes.png"
                      alt="Career identity illustration"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                      Building Your Professional Identity with AI
                    </h2>
                    <p className="text-gray-600 text-sm mt-2 max-w-xs">
                      Complete your base profile to unlock advanced AI generation
                      tools. This helps our agent understand your unique value
                      proposition.
                    </p>
                    <Link
                      href="/dashboard/student/profile/edit"
                      className="inline-flex items-center gap-2 mt-5 bg-[#F86432] text-white font-semibold px-5 py-2.5 rounded-full hover:bg-[#F86432]/90 transition-colors"
                    >
                      Continue <ArrowRight className="size-4" />
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 lg:px-0">
                {tools.map((tool) => (
                  <CareerToolCard key={tool.title} {...tool} />
                ))}
              </div>
            </div>

            <div className="hidden lg:block px-4 lg:px-0">
              <CareerChecklistCard />
            </div>
          </div>
        </div>
      </SidebarInset>
    </>
  );
}
