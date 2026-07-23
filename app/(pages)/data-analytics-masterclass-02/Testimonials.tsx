'use client';

import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import { baiJamjuree } from '@/app/fonts';

interface Quote {
  handle: string;
  quote: string;
}

const quotes: Quote[] = [
  { handle: '@felixekpa8870', quote: 'Thank you so much, Dr. Gospel.' },
  { handle: '@niklaushakan9294', quote: 'Real value.' },
  { handle: '@EnochOlorunjuwon', quote: 'Eye opener — I never knew what hiring managers actually look for.' },
  { handle: '@davidolaoye7214', quote: "That's value! That truly is value." },
  { handle: '@UcheChokmah', quote: 'Thank you, sir.' },
  { handle: '@PreciousSolomon-h4n', quote: 'AI all the way!' },
  { handle: '@greatgrace6601', quote: 'Wow.' },
  { handle: '@dekeraannyon2768', quote: 'Having domain knowledge makes you get hired quickly.' },
  { handle: '@olanrewajuojetunde2296', quote: 'This is highly revealing.' },
  { handle: '@blessingcharles1527', quote: 'You are doing well.' },
  { handle: '@fapohundaabdulfatai', quote: 'Having a niche is vital!' },
  { handle: '@ahmaduisreal880', quote: "Seriously, you need to be paid for this — it's too much, ma'am!" },
];

const avatars = [
  '/assets/persons/member-ayo.png',
  '/assets/persons/member-amoran.png',
  '/assets/persons/member-flourish.png',
];

function QuoteCard({ item, index }: { item: Quote; index: number }) {
  return (
    <div className="flex w-[280px] shrink-0 flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
      <span className="text-3xl leading-none text-[#F67219]">"</span>
      <p className="text-[15px] leading-relaxed text-[#2D3139] -mt-2">{item.quote}</p>
      <div className="flex items-center gap-3 pt-2">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full">
          <Image
            src={avatars[index % avatars.length]}
            alt={item.handle}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[13px] font-semibold text-[#121315]">{item.handle}</p>
          <p className="text-xs text-gray-500">Masterclass Attendee</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="w-full bg-white py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-2xl w-full text-center mb-10 px-4">
        <h2 className={`${baiJamjuree.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#121315]`}>
          <span className="text-[#F67219]">Real Feedbacks</span> From Students Who Attended Our Last Session
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-32 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-32 bg-gradient-to-l from-white to-transparent" />

        <Marquee pauseOnHover repeat={2} className="[--duration:35s]">
          {quotes.map((item, index) => (
            <QuoteCard key={item.handle + index} item={item} index={index} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
