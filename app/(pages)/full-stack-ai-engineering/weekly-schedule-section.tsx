"use client"
import Image from "next/image";
import { exo, exoMedium, salt  } from "@/app/fonts";

const schedule = [
  { number: "01", day: "Monday", time: "7 PM - 10 PM" },
  { number: "02", day: "Wednesday", time: "7 PM - 10 PM" },
  { number: "03", day: "Saturday", time: "6 PM - 10 PM" },
];

export default function WeeklyScheduleSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto max-w-[1240px] rounded-[40px] bg-[#fdd8cc] px-6 py-12 sm:px-10 lg:px-20 lg:py-20">
        <div className="flex flex-col items-center gap-10 lg:gap-11">
          <div className="w-full space-y-8">
            <p className={`${exoMedium.className} text-[18px] font-bold uppercase leading-[1.6] tracking-[0.08em] text-[#5a4136] underline underline-offset-4 lg:text-[24px]`}>
              So, what does the week look like?
            </p>
            <p className={`${exoMedium.className} text-[20px] font-bold leading-[1.65] tracking-[0.5px] text-[#181c23] sm:text-[24px] lg:text-[28px] lg:leading-[1.78]`}>
              You&apos;ll have 3 live classes every week, alongside with doubting clearing sessions.
            </p>
          </div>

          <div className="grid w-full gap-10 lg:gap-14">
            {schedule.map((item) => (
              <div key={item.number} className="grid grid-cols-[72px_1fr] items-center gap-5 sm:grid-cols-[100px_1fr]">
                <span className={`${salt.className} text-[40px] font-bold italic leading-none tracking-[0.05em] text-[#f25e25] lg:text-[56px]`}>
                  {item.number}
                </span>
                <div className={`${exoMedium.className} space-y-3 text-[#181c23]`}>
                  <p className="text-[22px] font-medium uppercase tracking-[0.4px] lg:text-[28px]">{item.day}</p>
                  <p className="text-[20px] font-medium tracking-[0.4px] lg:text-[24px]">{item.time}</p>
                </div>
              </div>
            ))}
          </div>

          <p className={`${exoMedium.className} max-w-[1100px] text-center text-[20px] font-bold leading-[1.65] tracking-[0.5px] text-[#181c23] underline underline-offset-4 sm:text-[24px] lg:text-[28px] lg:leading-[1.78]`}>
            Beyond the live classes, expect assignments, practice, project work, monthly end-to-end builds, presentations, mentorship and capstone work.
          </p>

          <a href="tel:+2349067835701" className={`${exoMedium.className} inline-flex items-center justify-center gap-2 rounded-[8px] bg-[#ff6b00] px-8 py-4 text-[13px] font-bold uppercase tracking-[0.04em] text-white shadow-[0_12px_16px_rgba(255,107,0,0.3)] transition-transform hover:scale-[1.01] sm:px-10 sm:py-5 lg:text-[16px]`}>
            I want to reserve my place
            <Image src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg" alt="" width={16} height={16} className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}