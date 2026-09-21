"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import faq from "../../../public/assets/images/ai-fullstack-engineering/faq.png";
import { barlowBold, space, melodrama } from '@/app/fonts';

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "Is AYONAIRE Suitable for complete beginners?",
    answer: "Yes. You don't need a tech background, Computer Science degree or prior AI Engineering experience. The programme takes you from the foundations to advanced AI Engineering."
  },
  {
    question: "Do I Need to Know Python Before Joining?",
    answer: "No prior knowledge of Python is required. We cover the necessary programming foundations as part of the curriculum."
  },
  {
    question: "Is This Just Another Chatgpt, n8n or AI Automation Course?",
    answer: "No, this is a comprehensive AI Full-Stack Engineering programme designed to take you deep into building production-grade AI applications, custom models, and full-stack integration."
  },
  {
    question: "What's The Difference Between Using AI Tools And Becoming AN AI Engineer?",
    answer: "Using AI tools means interacting with existing interfaces. Becoming an AI engineer means building, fine-tuning, and integrating custom AI systems and architectures into software products."
  },
  {
    question: "How Much Time do i need to Commit?",
    answer: "We recommend setting aside 10-15 hours per week for lectures, hands-on labs, and project building."
  },
  {
    question: "Why Does The Programme Take 10 months?",
    answer: "Our 10-month timeline ensures deep mastery, comprehensive practical experience, and enough time to build a robust portfolio without burning out."
  },
  {
    question: "Will i Actually Build Projects?",
    answer: "Yes! You will build multiple real-world capstone projects and practical portfolio pieces throughout the duration of the programme."
  },
  {
    question: "Will I Gain Practical Experience?",
    answer: "Absolutely. The curriculum is heavily project-based, simulating real-world engineering environments."
  },
  {
    question: "Will I Build a Portfolio and Github Proof of Work?",
    answer: "Yes, you will graduate with a verified GitHub profile showcasing multiple working AI projects."
  },
  {
    question: "What happens after i learn the technical skills?",
    answer: "You get access to our career support, interview prep, and placement partner network to help you land roles."
  },
  {
    question: "Will I get career and interview support?",
    answer: "Yes, including resume reviews, mock interviews, and portfolio optimization."
  },
  {
    question: "Will completing ayonaire guarantee me a job?",
    answer: "While we provide top-tier training, career support, and introductions to hiring partners, job placement depends on your dedication, performance, and interview outcomes."
  },
  {
    question: "Can I use these skills to freelance or start a business?",
    answer: "Yes! Many of our students leverage these skills to offer freelance AI engineering services or build their own AI startups."
  },
  {
    question: "Can i pursue international opportunities?",
    answer: "Yes, AI engineering skills are globally in high demand, opening doors to remote and international roles."
  },
  {
    question: "What if i don't know which ai career path i want?",
    answer: "Our foundational modules and mentorship will help you explore different branches of AI engineering to find your focus."
  },
  {
    question: "What if i fall behind?",
    answer: "We have community support, teaching assistants, and recorded sessions to help you catch up easily."
  },
  {
    question: "What if i join and realise it isn't for me?",
    answer: "We have standard onboarding terms and a refund policy outlined in our terms of service."
  },
  {
    question: "Is N500,000 the only payment option?",
    answer: "Check our enrollment page for alternative payment plans and installment options where available."
  },
  {
    question: "Do i have to feel ready before joining?",
    answer: "You don't need to feel 100% ready. If you are eager to learn and put in the work, we will guide you from day one."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className='mt-20 bg-[#FEF1EB] py-16 px-4 md:px-12 lg:px-20 w-full'>
      <div className='max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start'>
        
        {/* Left Column: Heading & Image (Takes full width on mobile) */}
        <div className='lg:col-span-5 flex flex-col gap-8 lg:sticky lg:top-8 w-full'>
          <div className='relative w-full'>
            <h2 className={`${melodrama.className} font-bold relative z-10 text-4xl sm:text-5xl lg:text-6xl text-[#111111] leading-[1.1] w-full`}>
              <span className="relative inline-block text-[#F4672B]">
                Frequently
                {/* SVG Highlight behind 'Frequently' */}
                <Image
                  src="/assets/images/ai-fullstack-engineering/questions-cta-heading-highlight.svg"
                  alt=""
                  width={312}
                  height={58}
                  className="pointer-events-none absolute -left-2 -top-1 z-[-1] h-full w-full max-w-none object-contain"
                />
              </span> Asked <br className="hidden sm:block" />
              Questions
            </h2>
          </div>

          {/* FAQ Illustration / Image */}
          <div className='w-full max-w-[375px] h-[304px] relative self-start'>
            <Image 
              src={faq} 
              alt="Frequently Asked Questions Illustration" 
              fill
              className='object-contain'
              priority
            />
          </div>
        </div>

        {/* Right Column: Collapsible Cards List */}
        <div className='lg:col-span-7 flex flex-col gap-4 w-full'>
          {faqs.map((faqItem, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className='bg-white rounded-xl border border-[#F0E4DE] shadow-sm transition-all duration-300 overflow-hidden w-full'
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className='w-full py-5 px-6 flex items-center justify-between text-left focus:outline-none cursor-pointer'
                >
                  <span className={`${barlowBold.className} text-lg sm:text-xl text-[#111111]`}>
                    {faqItem.question}
                  </span>
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    {/* Arrow icon */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </button>

                {isOpen && (
                  <div className='px-6 pb-6 pt-0 border-t border-gray-100 mt-1'>
                    <p className={`${space.className} text-[#4A4A4A] text-base leading-relaxed pt-3`}>
                      {faqItem.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FaqSection;