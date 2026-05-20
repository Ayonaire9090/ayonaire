'use client';

import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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

    // Helper function to push events to dataLayer for GA4
    const pushToDataLayer = (eventData: any) => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push(eventData);
            console.log('GA4 event pushed:', eventData);
        }
    };

    // Helper function to fire Facebook Pixel (Meta)
    const fireFacebookPixel = (eventName: string, params?: any) => {
        if (typeof window !== 'undefined' && window.fbq) {
            window.fbq('track', eventName, params);
            console.log(`Facebook Pixel fired: ${eventName}`);
        }
    };

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
            // Track form submission start
            pushToDataLayer({
                event: 'form_start',
                form_type: 'waitlist',
                form_name: 'AI Engineering Masterclass',
                user_email: email
            });

            // Register user
            await registerUser(fullName, email);

            // GA4 Event 1: generate_lead (standard GA4 event for leads)
            pushToDataLayer({
                event: 'generate_lead',
                event_category: 'form',
                event_label: 'AI Engineering Waitlist',
                value: 1,
                currency: 'USD',
                user_email: email,
                user_name: fullName
            });

            // GA4 Event 2: form_submit (custom event)
            pushToDataLayer({
                event: 'form_submit',
                event_category: 'engagement',
                event_label: 'waitlist_signup',
                form_id: 'masterclass_registration',
                form_name: 'AI Engineering Masterclass Waitlist',
                form_destination: '/ai-engineering-thank-you',
                user_email: email,
                user_name: fullName
            });

            // GA4 Event 3: lead (alternative event name for GTM)
            pushToDataLayer({
                event: 'lead',
                event_category: 'conversion',
                event_action: 'form_submission',
                event_label: 'waitlist_conversion',
                value: 1
            });

            // Facebook Pixel Lead event
            fireFacebookPixel('Lead', {
                content_name: 'AI Engineering Masterclass Waitlist',
                content_category: 'Registration',
                content_type: 'form_submission',
                status: 'successful',
                currency: 'USD',
                value: 1.0,
                user_email: email,
                user_name: fullName
            });

            // Store conversion data
            sessionStorage.setItem('conversion_completed', 'true');
            sessionStorage.setItem('user_email', email);
            sessionStorage.setItem('user_name', fullName);

            // Small delay to ensure events fire before navigation
            setTimeout(() => {
                const encodedName = encodeURIComponent(fullName);
                const encodedEmail = encodeURIComponent(email);
                router.push(`/ai-engineering-thank-you?name=${encodedName}&email=${encodedEmail}&converted=true`);
            }, 300);
            
        } catch (err: any) {
            // Track form error
            pushToDataLayer({
                event: 'form_error',
                event_category: 'form',
                event_label: 'waitlist_error',
                error_message: err.message || 'Unknown error',
                user_email: email
            });

            setError(
                err.message ||
                'Something went wrong. Please try again.'
            );
            setLoading(false);
        }
        
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
            <div className="relative w-full max-w-[360px] overflow-hidden rounded-[24px] bg-[#FDE8DA] shadow-2xl">

                {/* Close Button */}
                {!loading && (
                    <button
                        onClick={onClose}
                        className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-sm text-white"
                    >
                        ✕
                    </button>
                )}

                {/* Hero Image */}
                <div className="relative h-[210px] w-full overflow-hidden">
                    <Image
                        src="/HeroImage.png"
                        alt="Masterclass preview"
                        fill
                        sizes="(max-width: 768px) 100vw, 360px"
                        className="object-cover object-center"
                        priority
                    />

                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white shadow-lg">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                            >
                                <path
                                    d="M6 4L16 10L6 16V4Z"
                                    fill="#F25E25"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* Form Section */}
                <div className="bg-[#FDE8DA] px-6 pb-7 pt-6">

                    {/* Heading */}
                    <h2 className="text-center text-[34px] leading-none font-black text-[#121212] font-agile">
                        One Last Step
                    </h2>

                    <p className="mx-auto mt-3 max-w-[240px] text-center text-[13px] leading-[20px] text-[#666]">
                        Fill out this form below to get access to the group.
                    </p>

                    {/* Error */}
                    {error && (
                        <p className="mt-4 text-center text-sm text-red-500">
                            {error}
                        </p>
                    )}

                    {/* Inputs */}
                    <div className="mt-5 flex flex-col gap-3">

                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Full name"
                                value={fullName}
                                onChange={(e) => {
                                    setFullName(e.target.value);
                                    setFieldErrors((p) => ({
                                        ...p,
                                        name: undefined,
                                    }));
                                }}
                                className={`h-[42px] w-full rounded-full border bg-white px-4 text-sm outline-none ${fieldErrors.name
                                        ? 'border-red-400'
                                        : 'border-transparent'
                                    }`}
                            />

                            {fieldErrors.name && (
                                <p className="mt-1 pl-2 text-xs text-red-500">
                                    {fieldErrors.name}
                                </p>
                            )}
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Your email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    setFieldErrors((p) => ({
                                        ...p,
                                        email: undefined,
                                    }));
                                }}
                                className={`h-[42px] w-full rounded-full border bg-white px-4 text-sm outline-none ${fieldErrors.email
                                        ? 'border-red-400'
                                        : 'border-transparent'
                                    }`}
                            />

                            {fieldErrors.email && (
                                <p className="mt-1 pl-2 text-xs text-red-500">
                                    {fieldErrors.email}
                                </p>
                            )}
                        </div>

                        {/* Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={loading}
                            className="mt-2 h-[45px] w-full rounded-full bg-[#F66A1B] text-[13px] font-bold text-white transition hover:opacity-90 disabled:opacity-60"
                        >
                            {loading
                                ? 'Submitting...'
                                : 'Give Me Instant Access Now'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}