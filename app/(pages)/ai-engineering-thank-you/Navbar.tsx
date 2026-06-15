"use client";

import { useState } from "react";
import RegistrationModal from "../ai-engineering-masterclass/RegisterationModal";

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
                src="/Lg.png"
                alt="Ayonaire"
                className="h-8 w-auto object-contain"
              />
            </a>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center">
            
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
