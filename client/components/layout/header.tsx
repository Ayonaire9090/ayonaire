"use client";
import React, { useState, useRef } from "react";
import { AppLogo } from "../app-logo";
import { CgMenuRight } from "react-icons/cg";
import { navItems, desktopMoreMenuItems } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { AppActionButton } from "../app-action-button";
import { MegaMenu } from "../app-mega-menu";
import { MobileMenu } from "../app-mobile-menu";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/auth.store";
import { DashboardUserDropDown } from "@/components/dashboard/dashboard-user-dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const Header = () => {
  const { user, token } = useAuthStore();
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isMoreDropdownOpen, setMoreDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathName = usePathname();
  const router = useRouter();
  const megaMenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const moreDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (path: string) => {
    return pathName === path;
  };

  const handleMoreMouseEnter = () => {
    // Clear any pending close timeout
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
    setMegaMenuOpen(true);
  };

  const handleMoreMouseLeave = () => {
    // Add a small delay before closing to allow moving to the mega menu
    megaMenuTimeoutRef.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 100);
  };

  const handleMegaMenuMouseEnter = () => {
    // Clear close timeout when entering mega menu
    if (megaMenuTimeoutRef.current) {
      clearTimeout(megaMenuTimeoutRef.current);
      megaMenuTimeoutRef.current = null;
    }
  };

  const closeMegaMenu = () => {
    setMegaMenuOpen(false);
  };

  // More Dropdown handlers
  const handleMoreDropdownEnter = () => {
    if (moreDropdownTimeoutRef.current) {
      clearTimeout(moreDropdownTimeoutRef.current);
      moreDropdownTimeoutRef.current = null;
    }
    setMoreDropdownOpen(true);
  };

  const handleMoreDropdownLeave = () => {
    moreDropdownTimeoutRef.current = setTimeout(() => {
      setMoreDropdownOpen(false);
    }, 100);
  };

  return (
    <div className="relative w-full">
      <div className="w-full flex justify-between items-center bg-white shadow rounded-[8px] lg:rounded-[19px] p-2 lg:p-4 my-4">
        <div className="flex items-center gap-6">
          <AppLogo />
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isLearnItem = item.name === "Ayonaire Learn";
              const isMoreItem = item.name === "More";

              if (isLearnItem) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleMoreMouseEnter}
                    onMouseLeave={handleMoreMouseLeave}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 text-black hover:text-primary text-[16px] font-medium transition-all ease-in-out duration-300 pb-1",
                        isMegaMenuOpen &&
                          "text-primary border-b-2 border-primary",
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isMegaMenuOpen && "rotate-180",
                        )}
                      />
                    </button>
                  </div>
                );
              }

              if (isMoreItem) {
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={handleMoreDropdownEnter}
                    onMouseLeave={handleMoreDropdownLeave}
                  >
                    <button
                      className={cn(
                        "flex items-center gap-1 text-black hover:text-primary text-[16px] font-medium transition-all ease-in-out duration-300 pb-1",
                        isMoreDropdownOpen &&
                          "text-primary border-b-2 border-primary",
                      )}
                    >
                      {item.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform duration-200",
                          isMoreDropdownOpen && "rotate-180",
                        )}
                      />
                    </button>

                    {/* More Dropdown */}
                    {isMoreDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
                        {desktopMoreMenuItems.map((menuItem, index) => (
                          <Link
                            key={index}
                            href={menuItem.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors"
                          >
                            {menuItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "hover:text-primary text-[16px] font-medium transition-all ease-in-out duration-300 pb-1",
                    isActive(item.href) &&
                      "text-primary border-b-2 border-primary",
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        {/* Login and see bootcamps buttons */}
        <div className="hidden lg:flex items-center gap-4">
          {token && user ? (
            <div className="flex items-center gap-4">
              <Link href="/dashboard/student">
                <AppActionButton
                  id="dashboard"
                  className="py-6"
                  title="Dashboard"
                  variant="outline"
                />
              </Link>
              <DashboardUserDropDown>
                <Avatar className="h-12 w-12 cursor-pointer hover:opacity-80 transition-opacity">
                  <AvatarImage src={user.profile?.url} alt={user.name} className="object-cover" />
                  <AvatarFallback>{user.name?.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
              </DashboardUserDropDown>
            </div>
          ) : (
            <>
              <AppActionButton
                onClick={() => router.push("/auth")}
                id="login"
                className="py-6"
                title="Login"
                variant="outline"
              />
              <Link href="/get-started">
                <AppActionButton
                  id="bootcamp"
                  variant="fading"
                  className="group py-6"
                >
                  <p>See Bootcamps</p>
                  <span className="bg-white p-1 rounded group-hover:ml-2 transition-all ease-in-out duration-300">
                    <ArrowRight size={20} className="text-primary  rounded" />
                  </span>
                </AppActionButton>
              </Link>
            </>
          )}
        </div>
        {/* Mobile Menu Button */}
        <button
          className="block lg:hidden cursor-pointer transition-all ease-in-out duration-300"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <CgMenuRight className="w-8 h-8 text-primary" />
        </button>
      </div>

      {/* Mega Menu - Desktop Only */}
      <div
        className="hidden lg:block"
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={closeMegaMenu}
      >
        <MegaMenu isOpen={isMegaMenuOpen} onClose={closeMegaMenu} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </div>
  );
};
