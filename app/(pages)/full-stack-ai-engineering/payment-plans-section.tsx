import Image from "next/image";
import { exo, exoMedium, melodrama, salt, space } from "@/app/fonts";

const plans = [
  {
    title: "5-Month Plan",
    schedule: "₦100,000 × 5 Months",
    total: "₦500,000",
  },
  {
    title: "3-Month Plan",
    schedule: "₦200,000 + ₦200,000 + ₦100,000",
    total: "₦500,000",
  },
  {
    title: "7-Month Plan",
    schedule: "₦80,000 × 7 Months",
    total: "₦560,000",
  },
  {
    title: "10-Month Plan",
    schedule: "₦60,000 × 10 Months",
    total: "₦600,000",
  },
];

export default function PaymentPlansSection() {
  return (
    <section className="bg-gradient-to-b from-[rgba(255,255,255,0.28)] to-[rgba(248,100,50,0.28)] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24 xl:px-16 xl:py-28">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-14 lg:gap-20">
        
        <div className="grid w-full gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] xl:grid-cols-[544px_1fr] lg:gap-8 xl:gap-[45px]">
          
          {/* LEFT CONTENT */}
          <div className="flex flex-col gap-7 lg:gap-9">
            <h2
              className={`
                ${melodrama.className}
                text-[30px]
                font-bold
                uppercase
                leading-[1.18]
                tracking-[0.1px]
                text-[#181c23]

                sm:text-[36px]

                lg:text-[46px]
                lg:leading-[1.2]
              `}
            >
              And no... you do not have to pay{" "}<br/>
              <span className="text-[#f25e25]">
                ₦500,000 at once.
              </span>
            </h2>

            <p
              className={`
                ${space.className}
                text-[16px]
                font-medium
                leading-[1.65]
                tracking-[0.2px]
                text-[#5a4136]

                sm:text-[18px]

                lg:text-[22px]
                lg:leading-[1.65]
              `}
            >
              We know serious people still have bills, family responsibilities,
              businesses, school fees and other commitments.
            </p>

            <p
              className={`
                ${space.className}
                text-[15px]
                font-medium
                leading-[1.65]
                tracking-[0.2px]
                text-[#5a4136]

                sm:text-[17px]

                lg:text-[20px]
                lg:leading-[1.65]
              `}
            >
              That is why we created several payment structures.
            </p>
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col gap-7 lg:gap-9">
            <p
              className={`
                ${salt.className}
                text-[15px]
                font-semibold
                uppercase
                tracking-[0.08em]
                text-[#ff6b00]

                lg:text-[18px]
              `}
            >
              Plans
            </p>

            <div className="flex flex-col gap-6 lg:gap-8">
              {plans.map((plan) => (
                <article
                  key={plan.title}
                  className="relative flex aspect-[702/336] w-full items-center lg:max-w-[655px]"
                >
                  <Image
                    src="/assets/images/ai-fullstack-engineering/right-fit-card.svg"
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 655px, 100vw"
                    className="pointer-events-none object-contain"
                  />
                  <div
                    className="relative z-10 flex w-full items-center gap-3.5 pl-6 pr-4 sm:gap-6 sm:pl-8 sm:pr-6 lg:gap-8 lg:pl-10 lg:pr-8"
                    style={{ transform: "rotate(4.38deg)" }}
                  >
                    {/* CHECK ICON */}
                    <Image
                      src="/assets/images/ai-fullstack-engineering/mark.svg"
                      alt=""
                      width={46}
                      height={44}
                      className="size-[36px] shrink-0 object-contain sm:size-[46px] lg:size-[58px]"
                    />

                    {/* PLAN CONTENT */}
                    <div className="w-[68%] space-y-1.5 text-[#181c23] sm:space-y-2 lg:space-y-2.5">
                      <h3
                        className={`
                          ${exo.className}
                          text-[14px]
                          font-bold
                          uppercase
                          tracking-[0.06em]

                          sm:text-[18px]

                          lg:text-[22px]
                        `}
                      >
                        {plan.title}
                      </h3>

                      <p
                        className={`
                          ${exoMedium.className}
                          text-[12px]
                          font-semibold
                          tracking-[0.1px]
                          text-[#5a4136]

                          sm:text-[15px]

                          lg:text-[18px]
                        `}
                      >
                        {plan.schedule}
                      </p>

                      <p
                        className={`
                          ${exoMedium.className}
                          text-[12px]
                          font-bold
                          tracking-[0.1px]
                          text-black

                          sm:text-[15px]

                          lg:text-[18px]
                        `}
                      >
                        Total: {plan.total}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM TEXT */}
        <p
          className={`
            ${exoMedium.className}
            text-center
            text-[16px]
            font-normal
            leading-[1.6]
            tracking-[0.2px]
            text-[#5a4136]

            sm:text-[18px]

            lg:text-[21px]
          `}
        >
          Choose the structure that lets you begin responsibly.
        </p>

        {/* CTA */}
        <a
          href="https://wa.link/f1iadg"
          target="_blank"
          rel="noopener noreferrer"
          className={`
            ${exo.className}
            inline-flex
            items-center
            justify-center
            gap-2
            rounded-[8px]
            bg-[#ff6b00]
            px-8
            py-4
            text-center
            text-xs
            font-bold
            uppercase
            tracking-[0.04em]
            text-white
            shadow-[0_12px_16px_rgba(255,107,0,0.3)]
            transition-transform
            hover:scale-[1.01]

            sm:px-10
            sm:py-5
            sm:text-[14px]

            lg:text-[16px]
          `}
        >
          I want to start with an installment plan

          <Image
            src="/assets/images/ai-fullstack-engineering/curriculum-button-arrow.svg"
            alt=""
            width={16}
            height={16}
            className="size-4"
          />
        </a>
      </div>
    </section>
  );
}