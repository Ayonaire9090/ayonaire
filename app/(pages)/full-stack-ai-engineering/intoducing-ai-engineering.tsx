import Image from "next/image";
import { exo, exoMedium, melodrama } from "@/app/fonts";

export default function IntroducingAIEngineeringSection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:px-12 lg:py-[90px]">
      <div className="mx-auto w-full max-w-[980px]">
        {/* TOP HEADINGS */}
        <div className="text-center">
          {/* Main Heading */}
          <h2
            className={`${melodrama.className} text-[30px] font-bold leading-[1.12] tracking-[-0.8px] text-[#181c23] sm:text-[36px] lg:text-[44px] lg:leading-[1.16]`}
          >
            And that’s where Ayonaire comes in.
          </h2>

          {/* Highlighted Introducing Heading */}
          <div className="mt-4">
            <p
              className={`${melodrama.className} text-[25px] font-medium uppercase leading-[1.1] tracking-[-0.5px] sm:text-[30px] lg:text-[36px]`}
            >
              <span className="relative inline-block text-[#f25e25]">
                <span className="relative z-10">
                  Introducing AI Engineering 2.0
                </span>

                <Image
                  src="/assets/images/ai-fullstack-engineering/learning-options-highlight.svg"
                  alt=""
                  width={586}
                  height={68}
                  className="pointer-events-none absolute left-1/2 top-1/2 h-6 sm:h-9 md:h-12 lg:h-[58px] w-[108%] -translate-x-1/2 -translate-y-1/2 object-fill"
                />
              </span>
            </p>
          </div>

          {/* 10 Month Program Title */}
          <h3
            className={`${exo.className} mx-auto mt-5 max-w-[900px] text-[25px] font-bold leading-[1.08] tracking-[-0.7px] text-[#181c23] sm:text-[31px] lg:text-[38px]`}
          >
            10-month full stack AI/ML engineering
            <br className="hidden sm:block" />
            career transition program
          </h3>
        </div>

        {/* Integrated Training */}
        <p
          className={`${exoMedium.className} mx-auto mt-7 max-w-[850px] text-center text-[16px] font-medium leading-[1.7] tracking-[0.1px] text-[#65493e] sm:text-[18px] lg:text-[20px]`}
        >
          Integrated Training Across{" "}
          <strong className="font-bold">
            Machine Learning Engineering
          </strong>
          {" + "}
          <strong className="font-bold">
            Generative AI Engineering
          </strong>
          {" + "}
          <strong className="font-bold">
            Agentic AI Engineering
          </strong>
          {" + "}
          <strong className="font-bold">
            Forward Deployed Engineering
          </strong>
          {" + "}
          <strong className="font-bold">
            Production AI Engineering
          </strong>
        </p>

        {/* Body Content */}
        <div
          className={`${exoMedium.className} mx-auto mt-9 max-w-[850px] space-y-6 text-left text-[16px] font-medium leading-[1.65] tracking-[0.05px] text-[#65493e] sm:text-[17px] lg:text-[18px] lg:leading-[1.65]`}
        >
          <p>
            Ayonaire Academy is a{" "}
            <strong className="font-bold">
              10-month Full Stack AI/ML Engineering Career Transition Program
            </strong>{" "}
            designed to take you step by step from the foundations into
            building, deploying and presenting real AI systems.
          </p>

          <p>
            And when you look at the curriculum, you will notice structure and
            depth.
            <br />
            That is because we are on{" "}
            <strong className="font-bold">EXCELLENCE</strong>
          </p>

          <p>
            You&apos;ll see one structured journey across{" "}
            <strong className="font-bold">
              Python, Data, Machine Learning, Deep Learning, Generative AI, RAG,
              Agentic AI, Cloud, MLOps and Production AI Engineering
            </strong>{" "}
            with projects, practical experience and career preparation built
            around it.
          </p>
        </div>
      </div>
    </section>
  );
}