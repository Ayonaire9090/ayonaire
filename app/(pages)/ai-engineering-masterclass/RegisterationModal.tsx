'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { adineue } from '@/app/fonts';

interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

async function registerUser(fullName: string, email: string) {
    const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email }),
    });

    const data = await res.json();

    if (!res.ok) {
        throw new Error(data.error || 'Failed to register');
    }

    return data;
}

export default function RegistrationModal({
    isOpen,
    onClose,
}: RegistrationModalProps) {
    const router = useRouter();

    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [fieldErrors, setFieldErrors] = useState<{
        name?: string;
        email?: string;
    }>({});

    const handleSubmit = async () => {
        setError(null);
        setFieldErrors({});

        const nameErr = !fullName.trim()
            ? 'Full name is required.'
            : undefined;

        const emailErr = !email.trim()
            ? 'Email is required.'
            : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                ? 'Enter a valid email address.'
                : undefined;

        if (nameErr || emailErr) {
            setFieldErrors({
                name: nameErr,
                email: emailErr,
            });
            return;
        }

        setLoading(true);

        try {
            await registerUser(fullName, email);
            window.dataLayer = window.dataLayer || [];

            window.dataLayer.push({
                event: 'generate_lead',
                form_name: 'registration_form',
                full_name: fullName,
                email: email,
            });

            setTimeout(() => {
                const encodedName = encodeURIComponent(fullName);
                const encodedEmail = encodeURIComponent(email);

                router.push(
                    `/ai-engineering-thank-you?name=${encodedName}&email=${encodedEmail}`
                );
            }, 500);
        } catch (err: any) {
            console.log(err)
            setError(
                err.message ||
                'Something went wrong. Please try again.'
            );
            setLoading(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4 backdrop-blur-sm">
            {/* Main Outer Container Wrapper Box */}
            <div className="relative w-full max-w-[380px] sm:max-w-[400px] md:max-w-[470px] lg:max-w-[510px] overflow-hidden rounded-[24px] bg-[#121315] shadow-2xl border border-white/10">
                {/* Top Close Button (Stays clear over the full-bleed layout image context) */}
                {!loading && (
                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 z-30 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-xs font-bold text-white backdrop-blur-md transition hover:bg-black/60 active:scale-95"
                    >
                        ✕
                    </button>
                )}

                {/* 1. Full-bleed Image Layer Frame taking up full horizontal and layout ceiling space */}
                <div className="relative h-[215px] w-full">
                    <Image
                        src="/m.jpeg"
                        alt="Transition to AI Engineering"
                        fill
                        sizes="380px"
                        className="object-cover object-top"
                        priority
                    />
                </div>

                {/* 2. Lower Form Fields Container featuring the /Bg.png file texture + custom gray overlay style */}
                <div
                    className="relative px-6 pb-8 pt-3 bg-[#DBDBDB] bg-cover bg-center rounded-t-none -mt-4 z-10 border-t border-white/20"
                    style={{
                        backgroundImage: "url('/Bg.png')",
                    }}
                >
                    {/* Gray Overlay Blend Tint layer */}
                    <div
                        className="absolute inset-0 pointer-events-none mix-blend-normal rounded-t-[23px]"
                        style={{
                            background: "radial-gradient(100% 100% at 50% 0%, rgba(255, 255, 255, 0.75) 0%, rgba(219, 219, 219, 0.45) 100%)"
                        }}
                    />

                    {/* Relative Content Frame above the inputs backdrop background mask setup */}
                    <div className="relative z-10 w-full flex flex-col">

                        <h1
                            className={`${adineue.className} font-bold text-center text-[22px] sm:text-[28px] text-[#1A1C1E]`}
                            
                        >
                            One Last Step
                        </h1>

                        <p className="mt-1 text-center text-[14px] font-medium leading-normal text-[#1A1C1E]/80 max-w-[260px] mx-auto">
                            Fill out the form below to get instant access to the group.
                        </p>

                        {/* Status Alert Error Log Block */}
                        {error && (
                            <p className="mt-3 text-center text-xs font-semibold text-red-600 bg-red-50/90 py-1.5 px-3 rounded-xl border border-red-200">
                                {error}
                            </p>
                        )}

                        {/* Input Sets */}
                        <div className="mt-6 flex flex-col gap-4 w-full max-w-[340px] mx-auto px-2">

                            {/* Full Name block */}
                            <div className="w-full">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    value={fullName}
                                    disabled={loading}
                                    onChange={(e) => {
                                        setFullName(e.target.value);
                                        setFieldErrors((p) => ({
                                            ...p,
                                            name: undefined,
                                        }));
                                    }}
                                    className={`h-[45px] w-full rounded-[12px] border bg-white px-4 text-sm text-[#121315] placeholder-gray-400 font-medium shadow-sm transition-all outline-none ${fieldErrors.name
                                        ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100'
                                        : 'border-gray-200 focus:border-[#F66A1B] focus:ring-2 focus:ring-orange-100'
                                        }`}
                                />
                                {fieldErrors.name && (
                                    <p className="mt-1 pl-2 text-xs font-semibold text-red-600">
                                        {fieldErrors.name}
                                    </p>
                                )}
                            </div>

                            {/* Email Address block */}
                            <div className="w-full">
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    value={email}
                                    disabled={loading}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        setFieldErrors((p) => ({
                                            ...p,
                                            email: undefined,
                                        }));
                                    }}
                                    className={`h-[45px] w-full rounded-[12px] border bg-white px-4 text-sm text-[#121315] placeholder-gray-400 font-medium shadow-sm transition-all outline-none ${fieldErrors.email
                                        ? 'border-red-400 focus:border-red-500 ring-2 ring-red-100'
                                        : 'border-gray-200 focus:border-[#F66A1B] focus:ring-2 focus:ring-orange-100'
                                        }`}
                                />
                                {fieldErrors.email && (
                                    <p className="mt-1 pl-2 text-xs font-semibold text-red-600">
                                        {fieldErrors.email}
                                    </p>
                                )}
                            </div>

                            {/* Main CTA Submission Button Component Element */}
                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="group relative mt-2 flex h-[46px] w-full items-center justify-center rounded-[12px] text-sm font-extrabold text-black transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:scale-100 shadow-md active:shadow-sm disabled:opacity-60"
                                style={{
                                    background: "linear-gradient(90deg, #FA9855 0%, #FFDCC4 100%)",
                                }}
                            >
                                <span>
                                    {loading ? 'Processing...' : 'Give Me Instant Access Now'}
                                </span>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
