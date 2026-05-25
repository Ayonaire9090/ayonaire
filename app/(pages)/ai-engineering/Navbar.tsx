"use client";

import { useState } from "react";
import RegistrationModal from "@/components/RegisterationModal";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 px-4">
        <div
          className="
            mx-auto w-full max-w-[1280px] overflow-hidden rounded-2xl border border-gray-100
            bg-white/95 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.08)]
            md:bg-transparent md:backdrop-blur-0 md:shadow-none
          "
        >
          {/* Top Bar */}
          <div className="flex h-[68px] items-center justify-between px-5 sm:px-8">
            
            {/* Logo */}
            <a href="/" className="shrink-0">
              <img
                src="/Logo.png"
                alt="Ayonaire"
                className="h-[32px] w-auto object-contain"
              />
            </a>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => setModalOpen(true)}
                className="relative flex h-11 items-center gap-3 rounded-[14px] pl-5 pr-2 font-bold text-white transition-transform hover:scale-[1.02]"
                style={{
                  background:
                    "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
                }}
              >
                <span className="text-sm whitespace-nowrap">
                  Get free access now
                </span>

                <span className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397"
                      stroke="#F67721"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0.000324288 8.62534L17.0875 8.92915"
                      stroke="#F67721"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>

            {/* Custom Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex flex-col justify-center items-end gap-[5px] p-2 md:hidden"
              aria-label="Toggle Menu"
            >
              <span
                className={`h-[2px] rounded-full bg-[#F67219] transition-all duration-300 ${
                  menuOpen ? "w-4 rotate-45 translate-y-[7px]" : "w-4"
                }`}
              />

              <span
                className={`h-[2px] rounded-full bg-[#F67219] transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "w-6"
                }`}
              />

              <span
                className={`h-[2px] rounded-full bg-[#F67219] transition-all duration-300 ${
                  menuOpen ? "w-4 -rotate-45 -translate-y-[7px]" : "w-4"
                }`}
              />
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`overflow-hidden transition-all duration-300 md:hidden ${
              menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="border-t border-gray-100 px-5 py-4">
              <button
                onClick={() => setModalOpen(true)}
                className="relative flex h-11 w-full items-center justify-center gap-3 rounded-[14px] font-bold text-white"
                style={{
                  background:
                    "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
                }}
              >
                <span className="text-sm">Get free access now</span>

                <span className="flex h-[33px] w-[33px] shrink-0 items-center justify-center rounded-[7px] bg-white">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397"
                      stroke="#F67721"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0.000324288 8.62534L17.0875 8.92915"
                      stroke="#F67721"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}