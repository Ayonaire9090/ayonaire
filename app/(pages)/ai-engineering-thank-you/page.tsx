"use client";

import { agile, adineue } from "@/app/fonts";
import NextStepCallout from "./NextStep";
import { Footer } from "@/components/layout/footer";
import Navbar from "./Navbar";
export default function RegistrationSuccess() {
  const renderTextWithAdineueA = (text: string) => {
    return text.split("").map((char, index) => {
      if (char === "A") {
        return (
          <span key={index} className={`${adineue.className} inline-block`}>
            {char}
          </span>
        );
      }
      return <span key={index}>{char}</span>;
    });
  };

  return (
    <>
      <Navbar />
 <main
  className="relative min-h-[85vh] pt-24 sm:pt-12 bg-[#DBDBDB] bg-cover bg-center flex items-start sm:items-center justify-center"
  style={{
    backgroundImage: "url('/Bg.png')",
  }}
>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(89.33% 89.33% at 50% 23.35%, #FFF 0%, rgba(255,255,255,0.00) 73.09%)",
          }}
        />

        {/* Content Container */}
        <div className="relative z-10 flex flex-col items-center px-2 py-3 sm:py-10 text-center sm:px-8 w-full max-w-5xl">
          {/* Registration Status Badge */}
          <div
            className={`${adineue.className} mb-3  mt-0 sm:mt-12 inline-block rounded-md bg-[#FA9855] px-4 py-3 uppercase  text-white shadow-sm`}
          >
            Registration Successful
          </div>

          {/* Main Title Headings */}
          <h1
            className={`${agile.className} text-[22px] font-extrabold leading-tight tracking-tight text-black sm:text-4xl md:text-4xl `}
          >
            You're {renderTextWithAdineueA("Almost")} Done!
            <br />
            <span className="text-[#F25E25] block mt-2">
              Now Join The Community
            </span>
            <span className="text-black block mt-1">
              To Get The Masterclass Link & Updates
            </span>
          </h1>

          {/* Body Paragraph Description */}
          <p className={`${adineue.className} mt-6 max-w-2xl text-base leading-relaxed text-[#4A4A4A] sm:text-lg md:text-xl`}>
            You've successfully registered for the free{" "}
            {renderTextWithAdineueA("AI")} Engineering Masterclass. Join the
            community now so you don't miss:
          </p>

          {/* Action Button */}
         <a
  href="https://chat.whatsapp.com/DNNBBxaEPACKVHJier91EG?s=cl&p=i&mlu=4&ilr=4"
  target="_blank"
  rel="noopener noreferrer"
  className={`${adineue.className} group relative mt-8 flex h-14 items-center gap-4 rounded-[14px] pl-7 pr-4 text-lg sm:text-lg  text-white transition-all duration-300 hover:scale-[1.03] shadow-lg`}
  style={{
    background: "linear-gradient(90deg, #F67219 0%, #FFDCC4 100%)",
  }}
>
       <span className="text-lg sm:text-lg whitespace-nowrap">
              Join The Community Now
            </span>

            <span className="flex h-[31px] w-[31px] shrink-0 items-center justify-center rounded-[8px] bg-white transition-transform group-hover:translate-x-0.5">
              <svg
                width="16"
                height="16"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397"
                  stroke="#F67721"
                  strokeWidth="2"
                />
                <path
                  d="M0.000324288 8.62534L17.0875 8.92915"
                  stroke="#F67721"
                  strokeWidth="2"
                />
              </svg>
            </span>
          </a>
        </div>
      </main>

      <NextStepCallout />
      <Footer />
    </>
  );
}
