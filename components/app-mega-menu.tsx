"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { megaMenuData } from "@/constants";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

// Tab icons mapping
const tabIcons: Record<string, string> = {
  individuals: "/assets/icons/person-primary.svg",
  business: "/assets/icons/laptop-primary.svg",
  survey: "/assets/icons/list-primary.svg",
};

interface MegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MegaMenu = ({ isOpen, onClose }: MegaMenuProps) => {
  const [activeTab, setActiveTab] = useState(
    megaMenuData[0]?.id || "individuals"
  );

  const activeTabData = megaMenuData.find((tab) => tab.id === activeTab);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-40" onClick={onClose} />

      {/* Mega Menu Container */}
      <div
        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-full max-w-[1280px] bg-white rounded-[30px] shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200"
        onMouseLeave={onClose}
      >
        {/* Tab Navigation */}
        <div className="flex items-center border-b border-gray-100">
          {megaMenuData.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn(
                "flex items-center gap-2 px-8 py-5 text-base font-medium transition-colors relative",
                activeTab === tab.id
                  ? "text-primary"
                  : "text-black hover:text-primary"
              )}
            >
              <Image
                src={tabIcons[tab.id]}
                alt=""
                width={28}
                height={28}
                className="shrink-0"
              />
              <span>{tab.title}</span>
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary" />
              )}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex gap-12 p-12">
          {/* Link Columns */}
          <div
            className={cn(
              "flex-1 grid gap-8",
              activeTabData?.sections.length === 1 && "grid-cols-1",
              activeTabData?.sections.length === 2 && "grid-cols-2",
              activeTabData?.sections.length === 3 && "grid-cols-3",
              activeTabData?.sections.length &&
                activeTabData.sections.length >= 4 &&
                "grid-cols-4"
            )}
          >
            {activeTabData?.sections.map((section, sectionIndex) => (
              <div key={sectionIndex}>
                <h3 className="text-lg font-bold text-black mb-6">
                  {section.category}
                </h3>
                <ul className="flex flex-col gap-4">
                  {section.links.map((linkItem, linkIndex) => {
                    const href =
                      (linkItem as { link?: string; href?: string }).link ||
                      (linkItem as { link?: string; href?: string }).href ||
                      "#";
                    return (
                      <li
                        key={linkIndex}
                        className={cn(
                          activeTabData?.sections?.length === 2 && "pr-28"
                        )}
                      >
                        <Link
                          href={href}
                          onClick={onClose}
                          className="group w-full overflow-hidden text-sm text-[#5c5c5c] leading-relaxed flex items-center justify-between gap-3 hover:text-primary transition-colors"
                        >
                          <span className="transition-colors">
                            {linkItem.label}
                          </span>
                          <ArrowRight className="w-4 h-4 text-[#5c5c5c] group-hover:text-primary transition-colors shrink-0" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>

          {/* "Why Learn at Ayonaire?" Promo Section */}
          <div className="w-[300px]  shrink-0">
            <h3 className="text-[16px] font-bold text-black mb-4">
              Why Learn at Ayonaire?
            </h3>
            <Link
              href={"#"}
              className="text-[#5c5c5c] text-sm leading-relaxed mb-6"
            >
              We offer learning programs designed by industry experts and
              co-created with leading companies, so you gain skills that match
              real market demands.
            </Link>

            {/* Avatars and CTA */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <Image
                    src="/assets/persons/jane-doe.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <Image
                    src="/assets/persons/john-doe.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-white overflow-hidden">
                  <Image
                    src="/assets/persons/bob.png"
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <Link
                  href="/about"
                  onClick={onClose}
                  className="text-primary font-medium flex items-center gap-1 hover:underline"
                >
                  Read More About Us.
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                </Link>
                <p className="text-xs text-[#6e6e6e]">
                  Over 20 amazing stories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
