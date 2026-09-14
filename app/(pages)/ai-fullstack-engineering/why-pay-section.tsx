import Image from "next/image";
import { adineue } from "@/app/fonts";

export default function WhyPaySection() {
  return (
    <section
      className="px-4 py-20 sm:px-8 lg:py-[120px]"
      style={{
        background:
          "linear-gradient(112.805deg, rgba(255, 107, 0, 0.68) 2.7537%, rgba(255, 220, 196, 0.92) 28.776%, #fff5ee 58.126%, #fdfbf9 100.01%)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[799px] flex-col items-center justify-center gap-14 text-center sm:gap-16 lg:gap-20">
        <p
          className={`${adineue.className} max-w-[799px] text-[20px] font-medium leading-[1.45] tracking-[0.4px] text-[#181c23] sm:text-[22px] lg:text-[24px] lg:leading-[60.48px] lg:tracking-[0.6px]`}
        >
          These are real jobs that you can search for and see on Job boards.
        </p>

        <div className="relative h-[149px] w-[179px]">
          <Image
            src="/assets/images/ai-fullstack-engineering/why-pay-icon.png"
            alt=""
            fill
            sizes="179px"
            className="object-cover"
          />
        </div>

        <div className="flex w-full max-w-[777px] flex-col items-center gap-6 sm:gap-8">
          <h2 className="relative max-w-[713px] text-center text-[38px] font-bold leading-[1.08] tracking-[-0.95px] text-[#181c23] sm:text-[48px] lg:text-[56px] lg:leading-[60.48px] lg:tracking-[-1.4px]">
            <Image
              src="/assets/images/ai-fullstack-engineering/why-pay-highlight.svg"
              alt=""
              width={651}
              height={62}
              className="pointer-events-none absolute left-1/2 top-[6px] h-[62px] w-[651px] max-w-[92vw] -translate-x-1/2 select-none object-fill"
            />
            <span className="relative">Why would any company pay?</span>
          </h2>

          <div
            className={`${adineue.className} max-w-[777px] text-[20px] font-medium leading-[1.45] text-[#5a4136] sm:text-[22px] lg:text-[24px] lg:leading-[38px]`}
          >
            <p>
              But here&apos;s a question that should{" "}
              <strong className="font-bold">trouble</strong> you:
            </p>
            <p>
              <strong className="font-bold">
                Why would any company pay so much for just 8 hours of work/day?
              </strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
