'use client';

import Image from 'next/image';
import { agile, adineue } from '@/app/fonts';

const speakers = [
  {
    name: 'Dr. Gospel Iyioku',
    role: 'Senior Data Analyst & Hiring Executive, McKinsey & Company',
    color: '#F25E25',
    initials: 'GI',
  },
  {
    name: 'Muhammad Jamilu',
    role: 'Remote Data Analyst for International Companies',
    color: '#3B6FF2',
    initials: 'MJ',
  },
  {
    name: 'Oluwapelumi',
    role: 'Data Analyst, formerly Biochemistry',
    color: '#2F8F6B',
    photo: '/assets/images/ayo-partner.png',
  },
];

export default function WhoIsTeaching() {
  return (
    <section id="who-is-teaching" className="w-full bg-white px-4 py-16 sm:py-24 scroll-mt-24">
      <div className="mx-auto max-w-5xl w-full">
        <div className="text-center mb-12">
          <h2 className={`${agile.className} text-2xl sm:text-3xl md:text-4xl font-bold text-[#121315]`}>
            Meet Your Instructors
          </h2>
          <p className={`${adineue.className} mt-2 text-gray-500`}>Real practitioners, not just theorists.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {speakers.map((speaker, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div
                className="relative aspect-[4/5] rounded-2xl overflow-hidden"
                style={{ backgroundColor: speaker.color }}
              >
                {speaker.photo ? (
                  <Image
                    src={speaker.photo}
                    alt={speaker.name}
                    fill
                    className="object-cover object-top"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="text-6xl font-extrabold text-white/90">
                      {speaker.initials}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <p className="font-bold text-[#121315]">{speaker.name}</p>
                <p className="text-sm text-gray-500 leading-snug mt-0.5">{speaker.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
