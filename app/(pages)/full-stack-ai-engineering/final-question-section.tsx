import Image from "next/image";
import { exo, exoMedium,rope , salt} from "@/app/fonts";

export default function FinalQuestionSection() {
  return (
    <section className=" mt-20 bg-[linear-gradient(106deg,rgba(255,107,0,0.68)_3%,rgba(255,220,196,0.92)_29%,#fff5ee_58%,#fdfbf9_100%)] px-5 py-16 sm:px-8 lg:px-12 lg:py-[120px] xl:px-16">
      <div className="mx-auto flex w-full max-w-[799px] flex-col items-center gap-12 text-center lg:gap-20">
        <Image
          src="/assets/images/ai-fullstack-engineering/final-question-icon.png"
          alt=""
          width={179}
          height={149}
          className="h-auto w-[120px] sm:w-[150px] lg:w-[179px]"
          sizes="(min-width: 1024px) 179px, 150px"
        />

        <div className="flex w-full flex-col items-center gap-8">
          <div className="relative w-full max-w-[713px]">
            <h2 className={`${rope.className} relative z-10 text-[34px] font-bold leading-[1.08] tracking-[-0.8px] text-[#181c23] sm:text-[44px] lg:text-[56px] lg:leading-[60.48px] lg:tracking-[-1.4px]`}>
              <span className="text-[#f25e25]">One last question</span> before you leave.
            </h2>
            <Image
              src="/assets/images/ai-fullstack-engineering/final-question-heading-highlight.svg"
              alt=""
              width={457}
              height={58}
              className="pointer-events-none absolute left-0 top-1 z-0 hidden h-[58px] w-[457px] max-w-[65%] lg:block"
            />
          </div>

          <p className={`${exoMedium.className} text-[16px] font-medium leading-[1.55] text-[#5a4136] sm:text-[20px] lg:text-[24px] lg:leading-[34px]`}>
            Ten months from now... Do you want to still be someone who mainly uses AI?
          </p>
        </div>

        <p className={`${salt.className} text-[48px] font-bold leading-none tracking-[0.6px] text-[#ff6b00] sm:text-[56px] lg:text-[64px]`}>
          Or
        </p>

        <div className={`${exoMedium.className} flex w-full flex-col items-center gap-8 text-center text-[16px] font-medium leading-[1.6] tracking-[0.3px] text-[#181c23] sm:text-[20px] lg:gap-10 lg:text-[24px] lg:leading-[38px] lg:tracking-[0.6px]`}>
          <p>Do you want to have spent those months developing the skills to build, integrate, evaluate, secure, deploy and improve AI systems?</p>
          <p className="font-bold uppercase text-[#f25e25]">Your decision comes with a 30-day safety net.</p>
          <p>If, after your first month, you decide Ayonaire isn&apos;t right for you, <strong>you can request a <span className="text-[#f25e25]">100% refund.</span></strong></p>
          <p className="font-bold text-black">No questions asked</p>
          <p className="text-[15px] sm:text-[18px] lg:text-[20px]">So you can either make the full investment upfront, or spread it across the period you&apos;re building the skill.</p>
        </div>
      </div>
    </section>
  );
}
