'use client';

import { agile, adineue } from '@/app/fonts';

export default function DifferenceSection() {
  const renderTextWithAdineueA = (text: string) => {
    return text.split('').map((char, index) => {
      if (char === 'A') {
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
    <section className="flex w-full flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-3xl text-center">
        
        {/* Callout Box */}
        <div className="rounded-[20px] bg-[#FFF5F1] px-6 py-8 shadow-[0_4px_20px_rgba(242,94,37,0.04)] sm:px-12 sm:py-10">
          <h2 className={`${adineue.className} mb-4 text-xl font-bold tracking-tight text-black sm:text-4xl`}>
            That is the difference.
          </h2>
          
          <p className="text-base font-medium leading-relaxed text-[#121315] sm:text-lg md:text-xl">
            {renderTextWithAdineueA('AI')} Consumers use {renderTextWithAdineueA('AI')} tools.{' '}
            <span className="block text-[#F25E25] sm:inline">
              {renderTextWithAdineueA('AI')} Builders create {renderTextWithAdineueA('AI')} systems.
            </span>
          </p>
        </div>

        {/* Subtext Description */}
        <p className={`${adineue.className} mt-8 text-lg leading-relaxed tracking-tight text-[#5C5E63] sm:text-xl md:text-xl md:leading-[32px]`}>
          This free masterclass will show you the roadmap to move from learning{' '}
          {renderTextWithAdineueA('AI')} randomly to building real-world{' '}
          {renderTextWithAdineueA('AI')} systems with structure.
        </p>

      </div>
    </section>
  );
}