"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { mobileMenuData } from "@/constants";
import { X, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";
import { AppLogo } from "./app-logo";
import { AppActionButton } from "./app-action-button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuSection = (typeof mobileMenuData)[number];
type MenuChild = NonNullable<MenuSection["children"]>[number];

export const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [currentSection, setCurrentSection] = useState<MenuSection | null>(
    null,
  );
  const [currentSubSection, setCurrentSubSection] = useState<MenuChild | null>(
    null,
  );

  const handleSectionClick = (section: MenuSection) => {
    if (section.hasChildren) {
      setCurrentSection(section);
    }
  };

  const handleSubSectionClick = (child: MenuChild) => {
    if ("hasChildren" in child && child.hasChildren && "children" in child) {
      setCurrentSubSection(child);
    }
  };

  const handleBack = () => {
    if (currentSubSection) {
      setCurrentSubSection(null);
    } else {
      setCurrentSection(null);
    }
  };

  const handleClose = () => {
    setCurrentSection(null);
    setCurrentSubSection(null);
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={handleClose}>
      <SheetContent
        side="right"
        className="w-full sm:w-[400px] p-0 bg-white overflow-hidden flex flex-col"
        hideCloseButton
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Navigation Menu</SheetTitle>
          <SheetDescription>Mobile navigation menu</SheetDescription>
        </SheetHeader>

        {/* Header with Logo and Close */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">
          <AppLogo />
          <button
            onClick={handleClose}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto">
          {currentSection === null ? (
            // Main Menu View
            <MainMenuView
              onSectionClick={handleSectionClick}
              onClose={handleClose}
            />
          ) : currentSubSection === null ? (
            // Submenu View (Level 1)
            <SubmenuView
              section={currentSection}
              onBack={handleBack}
              onClose={handleClose}
              onSubSectionClick={handleSubSectionClick}
            />
          ) : (
            // Sub-submenu View (Level 2)
            <SubSubmenuView
              subSection={currentSubSection}
              parentSection={currentSection}
              onBack={handleBack}
              onClose={handleClose}
            />
          )}
        </div>

        {/* Footer with "Read More About Us" */}
        <div className="px-5 py-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            {/* Avatar stack */}
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/assets/persons/jane-doe.png"
                  alt="Team member"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/assets/persons/john-doe.png"
                  alt="Team member"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-white">
                <Image
                  src="/assets/persons/bob.png"
                  alt="Team member"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <Link
                href="/about"
                onClick={handleClose}
                className="text-primary font-medium text-sm flex items-center gap-1 hover:underline"
              >
                Read More About Us.
                <ArrowRight className="w-3 h-3 -rotate-45" />
              </Link>
              <p className="text-gray-500 text-xs">Over 20 amazing stories</p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Main Menu View Component
function MainMenuView({
  onSectionClick,
  onClose,
}: {
  onSectionClick: (section: MenuSection) => void;
  onClose: () => void;
}) {
  return (
    <div className="py-3 px-5 animate__animated animate__fadeIn">
      {/* Logo Icon and Tagline */}
      <div className="mb-8">
        <div className="mb-3">
          <Image
            src="/assets/icons/mobile-menu-logo.svg"
            alt="Ayonaire"
            width={40}
            height={32}
          />
        </div>
        <p className="text-gray-500 text-lg">
          Ayonaire - The future of learning
        </p>
      </div>

      {/* Menu Items */}
      <nav>
        {mobileMenuData.map((item) => (
          <div key={item.id}>
            {item.hasChildren ? (
              <button
                onClick={() => onSectionClick(item)}
                className={cn(
                  "flex items-center justify-between w-full py-3 text-base transition-colors",
                  item.isHighlighted ? "text-primary" : "hover:text-gray-600",
                )}
              >
                <span>{item.title}</span>
                <ChevronRight className="w-5 h-5 text-gray-400" />
              </button>
            ) : (
              <Link
                href={item.href || "#"}
                onClick={onClose}
                className="flex items-center justify-between w-full py-3 text-base hover:text-gray-600 transition-colors"
              >
                <span>{item.title}</span>
              </Link>
            )}
          </div>
        ))}
      </nav>

      {/* CTA Section */}
      <div className="mt-8 space-y-4">
        <Link onClick={onClose} href="/get-started">
          <AppActionButton
            variant="fading"
            className="w-full justify-center group py-4"
          >
            <>
              See Bootcamps{" "}
              <span className="bg-white p-1 rounded group-hover:ml-2 transition-all ease-in-out duration-300">
                <ArrowRight size={20} className="text-primary rounded" />
              </span>
            </>
          </AppActionButton>
        </Link>

        <p className="text-center text-sm text-gray-600">
          Have an ongoing course?{" "}
          <Link
            href="/auth"
            onClick={onClose}
            className="text-primary font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

// Submenu View Component (Level 1)
function SubmenuView({
  section,
  onBack,
  onClose,
  onSubSectionClick,
}: {
  section: MenuSection;
  onBack: () => void;
  onClose: () => void;
  onSubSectionClick: (child: MenuChild) => void;
}) {
  return (
    <div className="py-3 px-5 animate__animated animate__flipInY">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:transition-colors mb-8"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        {section.icon && (
          <Image
            src={section.icon}
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
        )}
        <h2 className="text-primary text-xl font-bold">{section.title}</h2>
      </div>

      {/* Child Items */}
      <nav>
        {section.children?.map((child, index) => {
          const hasNestedChildren = "hasChildren" in child && child.hasChildren;

          if (hasNestedChildren) {
            return (
              <button
                key={index}
                onClick={() => onSubSectionClick(child)}
                className="flex items-center justify-between w-full py-3 text-base hover:text-gray-600 transition-colors"
              >
                <span>{child.label}</span>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            );
          }

          return (
            <Link
              key={index}
              href={child.href}
              onClick={onClose}
              className="flex items-center justify-between w-full py-3 text-base hover:text-gray-600 transition-colors"
            >
              <span>{child.label}</span>
              <ArrowRight className="w-4 h-4 text-gray-800" />
            </Link>
          );
        })}
      </nav>
    </div>
  );
}

// Sub-submenu View Component (Level 2)
function SubSubmenuView({
  subSection,
  parentSection,
  onBack,
  onClose,
}: {
  subSection: MenuChild;
  parentSection: MenuSection;
  onBack: () => void;
  onClose: () => void;
}) {
  const nestedChildren = "children" in subSection ? subSection.children : [];

  return (
    <div className="py-3 px-5 animate__animated animate__flipInY">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-primary hover:transition-colors mb-8"
        aria-label="Go back"
      >
        <ArrowLeft className="w-5 h-5" />
      </button>

      {/* Section Header */}
      <div className="flex items-center gap-3 mb-6">
        {parentSection.icon && (
          <Image
            src={parentSection.icon}
            alt=""
            width={24}
            height={24}
            className="w-6 h-6"
          />
        )}
        <h2 className="text-primary text-xl font-bold">{subSection.label}</h2>
      </div>

      {/* Nested Child Items */}
      <nav>
        {nestedChildren?.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            onClick={onClose}
            className="flex items-center justify-between w-full py-3 text-base hover:text-gray-600 transition-colors"
          >
            <span>{item.label}</span>
            <ArrowRight className="w-4 h-4 text-gray-800" />
          </Link>
        ))}
      </nav>
    </div>
  );
}
