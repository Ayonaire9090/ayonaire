import React from 'react';
import Image from 'next/image';
import { space, melodrama } from '@/app/fonts';

const Next10MonthsSection = () => {
  return (
    <section className='bg-[#FEF1EB] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28 w-full flex flex-col'>
      <div className=' max-w-[1279px] w-full mx-auto flex flex-col gap-6'>
        
        {/* Header with Melodrama font and highlighted text */}
        <h2 className={`${melodrama.className} font-bold text-3xl sm:text-4xl lg:text-5xl text-[#111111] leading-[1.2] relative z-10 mb-4 text-center`}>
          The{' '}
          <span className="relative inline-block text-[#F4672B]">
            next 10 months
            {/* SVG Highlight behind 'next 10 months' */}
            <Image
              src="/assets/images/ai-fullstack-engineering/questions-cta-heading-highlight.svg"
              alt=""
              width={312}
              height={58}
              className="pointer-events-none absolute -left-2 -top-1 z-[-1] h-full w-full max-w-none object-contain"
            />
          </span>{' '}
          will pass anyway.
        </h2>

        {/* Body content with Space font and left alignment */}
     <div className={`${space.className} text-[#333333] text-xl sm:text-2xl leading-relaxed flex flex-col gap-6 text-left`}>
         
          <p>Think about that for a moment.</p>

          <p>
            Perhaps AI has already been on your mind for months. Perhaps you have been looking for a skill that has the potential to change the trajectory of your career, income and future.
          </p>

          <p>And now, the opportunity is in front of you.</p>

          <p className="font-semibold text-[#111111]">The question is:</p>

          <p className="font-bold text-lg sm:text-xl text-[#111111]">
            What are you going to do about it?
          </p>

          <p>
            Ten months from now will come whether you enrol or not.<br />
            The calendar will keep moving.
          </p>

          <p>
            You can spend those months consuming content, saving videos, watching other people make progress and repeatedly telling yourself:
          </p>

          <p className="font-semibold text-[#111111]">
            &ldquo;I&apos;ll start soon.&rdquo;
          </p>

          <p>Or you can make those same ten months intentional.</p>

          <p>
            You can spend them learning, practising, building, gaining experience, developing proof of work, becoming more visible and positioning yourself for better opportunities.
          </p>

          <p className="font-semibold text-[#111111]">
            And this is where <span className="font-bold">ACTION</span> matters.
          </p>

          <p>You can have the right information.</p>

          <p>You can know the opportunity exists.</p>

          <p>You can understand the roadmap.</p>

          <p className="font-semibold text-[#111111]">
            But nothing changes until you decide to act.
          </p>

          <p>There is an old saying:</p>
        </div>

      </div>
    </section>
  );
};

export default Next10MonthsSection;