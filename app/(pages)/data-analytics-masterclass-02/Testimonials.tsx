'use client';

import Image from 'next/image';
import { Star } from 'lucide-react';
import { Marquee } from '@/components/ui/marquee';
import { sora } from '@/app/fonts';
import { typeScale } from './_components/type';

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
    <div
      className="flex min-h-[240px] w-[300px] shrink-0 flex-col rounded-2xl p-6 shadow-[0_2px_12px_rgba(0,0,0,0.05)] md:w-[400px]"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FDECE2 100%)',
      }}
    >
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={20} strokeWidth={0} fill="#F25E25" />
        ))}
      </div>
      <p className={`${typeScale.quote} mt-4 leading-relaxed text-[#2D3139]`}>
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="mt-auto flex items-center gap-3 pt-6">
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md">
          <Image
            src={avatars[index % avatars.length]}
            alt={item.handle}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="text-[14px] font-bold text-[#121315]">{item.handle}</p>
          <p className={`${typeScale.caption} text-gray-500`}>Masterclass Attendee</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="reviews" className="w-full bg-white py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-2xl w-full text-center mb-10 px-4">
        <h2 className={`${sora.className} ${typeScale.h2} font-bold text-[#121315]`}>
          <span className="text-[#F67219]">Real Feedbacks</span> from students who attended our last session?
        </h2>
        <p className={`${sora.className} ${typeScale.body} mt-4 leading-relaxed text-[#3F4145]`}>
          Eight things top candidates already know that most people learning Data Analytics don&apos;t.
        </p>
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
