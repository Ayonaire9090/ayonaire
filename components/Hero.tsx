'use client';

import Image from 'next/image';
import { useState } from 'react';
import RegistrationModal from './RegisterationModal';
import { agile, adineue } from '@/app/fonts';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to replace capital A's with Adineue font
  const renderTextWithAdineueA = (text: string) => {
    return text.split('').map((char, index) => {
      if (char === 'A') {
        return (
          <span key={index} className={`${adineue.className}  inline-block`}>
            {char}
          </span>
        );
      }
      return <span key={index}>{char}</span>;
    });
  };

  return (
    <>
      <main className="relative bg-[#F25E25]">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center mix-blend-luminosity"
          style={{
            backgroundImage:
              "url('https://api.builder.io/api/v1/image/assets/TEMP/1523e69ae24327de9c69acf8cba1db2c22022339?width=2880')",
            backgroundPosition: '-52px 0',
            backgroundSize: '107% 100%',
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center px-4 pt-20 sm:px-8">
          <div className="mt-4 flex w-full max-w-4xl flex-col items-center gap-6 text-center sm:gap-4">
            {/* Badge */}
            <div className="flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-sm">
              <span className="absolute inline-flex h-4 w-4 animate-ping rounded-full bg-[#F25E25] opacity-40"></span>
              <svg
                width="16"
                height="12"
                viewBox="0 0 16 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M10.9091 0C11.102 0 11.287 0.0790178 11.4234 0.21967C11.5597 0.360322 11.6364 0.551088 11.6364 0.75V3.9L15.4276 1.1625C15.4822 1.12309 15.5461 1.09987 15.6125 1.09538C15.679 1.09088 15.7453 1.10528 15.8044 1.137C15.8634 1.16872 15.9129 1.21654 15.9474 1.27526C15.9819 1.33398 16.0001 1.40134 16 1.47V10.53C16.0001 10.5987 15.9819 10.666 15.9474 10.7247C15.9129 10.7835 15.8634 10.8313 15.8044 10.863C15.7453 10.8947 15.679 10.9091 15.6125 10.9046C15.5461 10.9001 15.4822 10.8769 15.4276 10.8375L11.6364 8.1V11.25C11.6364 11.4489 11.5597 11.6397 11.4234 11.7803C11.287 11.921 11.102 12 10.9091 12H0.727273C0.534388 12 0.349403 11.921 0.213013 11.7803C0.0766231 11.6397 0 11.4489 0 11.25V0.75C0 0.551088 0.0766231 0.360322 0.213013 0.21967C0.349403 0.0790178 0.534388 0 0.727273 0H10.9091Z"
                  fill="#F25E25"
                />
              </svg>

              <span className="text-sm font-medium tracking-tight text-[#121315]">
                Free Live Masterclass
              </span>
            </div>

            {/* Heading */}
            <h1 className={`${agile.className} text-3xl leading-tight tracking-[-0.04em] text-center sm:text-4xl md:text-5xl lg:text-6xl`}>
              <span className="text-black">
                How To Break Into{' '}
              </span>

              <span className="text-[#F4683F]">
                {renderTextWithAdineueA('AI Engineering')}
              </span>

              <span className="text-black">
                {' '}
                & Become Globally Employable
              </span>
            </h1>

            {/* Subtitle */}
            <p className="max-w-2xl text-base leading-relaxed tracking-tight text-[#121315] sm:text-[18px] sm:leading-[28px]">
              Even Without a Technical Background…using the Exact Skills
              Employers Hire For
            </p>

            {/* CTA */}
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
              <button
                onClick={() => setModalOpen(true)}
                className="group relative mt-2 flex h-14 items-center gap-3 rounded-full pl-6 pr-3 font-bold text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 active:scale-95"
                style={{
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #FFE5D4 100%)',
                }}
              >
                <span className="text-base font-agile tracking-wide text-[#F25E25] group-hover:tracking-wider transition-all">
                  Get free access now →
                </span>

                <span className="flex h-[42px] w-[42px] items-center justify-center rounded-full bg-gradient-to-br from-[#F25E25] to-[#F67721] shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="group-hover:translate-x-0.5 transition-transform"
                  >
                    <path
                      d="M9.59456 1.68393L17.4854 8.85501L9.26626 15.7397"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M0.000324288 8.62534L17.0875 8.92915"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </span>
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-20 w-full max-w-6xl px-4 mt-10 mb-[-70px] md:mb-[-120px] lg:mb-[-150px]">
            <Image
              src="/HeroImage.png"
              alt="Hero visual"
              width={1200}
              height={800}
              priority
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </main>

      {/* Next Section */}
      <section className="bg-white pt-24 md:pt-40 lg:pt-52">
        {/* Your next component goes here */}
      </section>

      {/* Modal */}
      <RegistrationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}