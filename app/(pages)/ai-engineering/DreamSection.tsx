'use client';
import RegistrationModal from '@/components/RegisterationModal';
import { useState } from 'react';
import { agile, adineue, exo } from '@/app/fonts';

// Reusable Circle Checkmark Component tailored to the design image
const OrangeCircleCheck = ({ id }: { id: string }) => (
    <svg width="48" height="48" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
            d="M46.3128 28.4374C44.6878 36.5624 38.5619 44.2117 29.963 45.9221C21.3643 47.6326 12.6384 43.6328 8.32119 36.0021C4.00399 28.3717 5.06979 18.8322 10.9646 12.3425C16.8594 5.85279 26.8128 4.06243 34.9378 7.31243"
            stroke={`url(#grad0_${id})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M18.6875 25.1875L26.8125 33.3125L46.3125 12.1875"
            stroke={`url(#grad1_${id})`}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <defs>
            <linearGradient id={`grad0_${id}`} x1="5.6875" y1="26.0214" x2="46.3128" y2="26.0214" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F25E25" />
                <stop offset="1" stopColor="#F97F11" />
            </linearGradient>
            <linearGradient id={`grad1_${id}`} x1="18.6875" y1="22.75" x2="46.3125" y2="22.75" gradientUnits="userSpaceOnUse">
                <stop stopColor="#F25E25" />
                <stop offset="1" stopColor="#F97F11" />
            </linearGradient>
        </defs>
    </svg>
);

// Updated items reflecting the exact text from the image
const builderChallenges = [
    {
        text: (
            <>
                Can you build a <strong>RAG document search system</strong> that helps companies ask questions from internal documents?
            </>
        ),
    },
    {
        text: (
            <>
                Can you build a <strong>recommendation system</strong> like <strong>Amazon</strong> and <strong>Netflix</strong> that suggests products, movies, or content based on user behaviour?
            </>
        ),
    },
    {
        text: (
            <>
                Can you build an <strong>AI career assistant</strong> that improves resumes, prepares users for jobs, and strengthens their profiles?
            </>
        ),
    },
    {
        text: (
            <>
                Can you build an <strong>insurance claim support agent</strong> that helps customers process claims and retrieve policy information?
            </>
        ),
    },
    {
        text: (
            <>
                Can you build a <strong>customer support agent</strong> that remembers conversations and solves customer issues automatically?
            </>
        ),
    },
    {
        text: (
            <>
                Can you build a <strong>tumor detection system</strong> that supports medical image analysis?
            </>
        ),
    },
    {
        text: (
            <>
                Can you build a <strong>loan approval system</strong> that helps lenders assess credit risk and customer eligibility?
            </>
        ),
    },
    {
        text: (
            <>
                Can you build a <strong>business intelligence agent</strong> that analyzes company data and generates reports automatically?
            </>
        ),
    },
];

export default function AIBuildersSection() {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            {/* Changed background from pinkish-orange to crisp white/light gray wrapper if needed */}
            <section className="bg-white px-4 py-16 sm:py-24">
                <div className="mx-auto w-full max-w-6xl font-sans">

                    {/* Header Section */}
                    <div className="text-center mb-16">
                        <h2 className={`${agile.className} text-4xl sm:text-5xl lg:text-[56px] font-bold tracking-tight text-[#121315] leading-tight`}>
                            Companies Pay For <span className="text-[#F25E25]">AI Builders</span>, Not <span className="text-[#F25E25]">AI Consumers.</span>
                        </h2>

                        <p className="mt-4 text-[18px] sm:text-[22px] text-[#55565A] font-normal tracking-tight">
                            Using AI tools is not enough anymore.
                        </p>

                        <p className="mt-2 text-[18px] sm:text-[22px] text-[#F25E25] font-semibold tracking-tight">
                            The real question is:
                        </p>
                    </div>

                    {/* Core Content Grid (2 Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        {builderChallenges.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-5 rounded-2xl bg-[#F9FAFB] p-6 border border-gray-50/50 transition-all duration-200 hover:shadow-sm"
                            >
                                {/* Custom SVG Checkmark Icon */}
                                <div className="shrink-0">
                                    <OrangeCircleCheck id={`challenge-${index}`} />
                                </div>

                                {/* Question Text */}
                                <div className="text-[#2D3139] text-[16px] sm:text-[17px] leading-[1.5] font-normal">
                                    {item.text}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Button Wrapper */}
                    <div className="mt-14 flex justify-center">
                        <button
                            onClick={() => setModalOpen(true)}
                            className="flex items-center gap-3 rounded-[14px] px-6 py-3.5 text-base font-bold text-white transition-transform active:scale-95"
                            style={{ background: "linear-gradient(90deg, #F25E25 0%, #F97F11 100%)" }}
                        >
                            Reserve My Free Spot
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-[7px] bg-white">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10.7442 2.73047L19.5805 9.90155L10.3766 16.7862" stroke="#F25E25" strokeWidth="1.5" />
                                    <path d="M9.29604e-05 9.67188L19.1346 9.97569" stroke="#F25E25" strokeWidth="1.5" />
                                </svg>
                            </span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal Alignment */}
            <RegistrationModal
                isOpen={modalOpen}
                onClose={() => setModalOpen(false)}
            />
        </>
    );
}