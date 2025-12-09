"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="w-full flex justify-center pt-[18px] pb-4 md:pb-8 px-4 md:px-0">
      <header
        className="flex items-center justify-between w-full max-w-[1280px] h-[64px] md:h-[80px] bg-white rounded-[12px] shadow-lg px-4 md:px-12 relative"
        style={{ opacity: 1 }}
      >
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/ayonaire-logo-new.png"
              alt="Ayonaire Logo"
              width={120}
              height={30}
              className="w-[120px] md:w-[159px] h-auto"
              priority
            />
          </a>
          
          <nav className="hidden lg:flex gap-10 text-lg font-semibold">
            <a href="#" className="text-orange-500 relative pb-1">
              Ayonaire Learn
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-orange-500 rounded"></span>
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">
              For Business
            </a>
            <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors">
              Hire Talent
            </a>
            <div className="relative group">
              <button className="text-gray-800 hover:text-orange-500 flex items-center gap-1 transition-colors">
                More
                <svg width="18" height="18" fill="none" viewBox="0 0 20 20">
                  <path
                    d="M5.25 7.75L10 12.25L14.75 7.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-32 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto">
                <a href="#" className="block px-4 py-2 hover:bg-orange-50">
                  About
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-orange-50">
                  Contact
                </a>
              </div>
            </div>
          </nav>
        </div>

        <div className="hidden lg:flex gap-4">
          <button className="px-6 py-2 border-2 border-orange-400 rounded-xl text-orange-500 font-semibold bg-white hover:bg-orange-50 transition-colors text-lg">
            Log in
          </button>
          <button
            className="flex items-center gap-2 font-semibold shadow text-lg transition-colors"
            style={{
              width: "206.33px",
              height: "48px",
              borderRadius: "14px",
              opacity: 1,
              background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
              color: "#fff",
              paddingLeft: "24px",
              paddingRight: "24px",
              border: "none",
            }}
          >
            <span
              style={{
                fontFamily: "Satoshi, sans-serif",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "0",
              }}
            >
              See Bootcamps
            </span>
            <span
              style={{
                background: "rgba(255,255,255,0.3)",
                borderRadius: "50%",
                padding: "4px",
              }}
            >
              <svg width="22" height="22" fill="none" viewBox="0 0 20 20">
                <path
                  d="M7 10H13M13 10L10 7M13 10L10 13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>

        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2"
          aria-label="Toggle menu"
        >
          <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.3611 22.2786L9.36125 22.2113" stroke="url(#paint0_linear_299_277)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.4004 14.1121L4.73394 14.0223" stroke="url(#paint1_linear_299_277)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M23.4397 5.9455L14.1065 5.90061" stroke="url(#paint2_linear_299_277)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            <defs>
              <linearGradient id="paint0_linear_299_277" x1="23.3635" y1="21.7786" x2="9.36365" y2="21.7113" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F25E25"/>
                <stop offset="1" stopColor="#F97F11"/>
              </linearGradient>
              <linearGradient id="paint1_linear_299_277" x1="23.4028" y1="13.6121" x2="4.73635" y2="13.5223" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F25E25"/>
                <stop offset="1" stopColor="#F97F11"/>
              </linearGradient>
              <linearGradient id="paint2_linear_299_277" x1="23.4421" y1="5.44551" x2="14.1089" y2="5.40062" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F25E25"/>
                <stop offset="1" stopColor="#F97F11"/>
              </linearGradient>
            </defs>
          </svg>
        </button>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-white rounded-lg shadow-xl lg:hidden z-50">
            <nav className="flex flex-col p-4 gap-4">
              <a href="#" className="text-orange-500 font-semibold py-2 border-b border-orange-100">
                Ayonaire Learn
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors py-2">
                For Business
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors py-2">
                Hire Talent
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors py-2">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-orange-500 transition-colors py-2">
                Contact
              </a>
              
              <div className="flex flex-col gap-3 pt-4 border-t border-gray-200">
                <button className="w-full px-4 py-3 border-2 border-orange-400 rounded-xl text-orange-500 font-semibold bg-white hover:bg-orange-50 transition-colors">
                  Log in
                </button>
                <button
                  className="w-full flex items-center justify-center gap-2 font-semibold shadow transition-colors py-3 rounded-xl"
                  style={{
                    background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
                    color: "#fff",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Satoshi, sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      lineHeight: "100%",
                    }}
                  >
                    See Bootcamps
                  </span>
                  <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                    <path
                      d="M7 10H13M13 10L10 7M13 10L10 13"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>
    </div>
  );
}