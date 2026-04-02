import Image from 'next/image'
import React from 'react'
import { AppActionButton } from './app-action-button'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Spline_Sans } from 'next/font/google';

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});


interface AppJoinBannerProps {
    title?: string;
    subTitle?: string;
    subTitleClassName?: string;
    description?: string;
    descriptionClassName?: string;
    cta?: React.ReactNode;
    ctaText?: string;
    ctaLink?: string;
    image?: string;
    imageClassName?: string;
    showImageOnMobile?: boolean;
    showPattern? : boolean;
    showSecondaryFadingWhite?: boolean;
    variant?: "primary" | "secondary";
    buttonVariant?: "fading" | "outline" | "glass";
    buttonClassName?: string;
    className?: string;
}
export const AppJoinBanner = ({
    title = "Join 1,000+ Learners Building Their Future with",
    subTitle = "Ayonaire",
    subTitleClassName,
    description = "Across 19+ countries, aspiring tech professionals are choosing Ayonaire to gain high-income skills, launch global careers, and live with purpose and freedom.",
    descriptionClassName,
    cta,
    ctaText = "Explore Our Bootcamps",
    ctaLink,
    image = "/assets/smiling-students.png",
    imageClassName,
    showImageOnMobile = false,
    showPattern = true,
    showSecondaryFadingWhite = true,
    variant = "primary",
    buttonVariant= "outline",
    buttonClassName,
    className
}: AppJoinBannerProps) => {
    return (
        <div className={cn("relative rounded-[24px] lg:rounded-[40px] overflow-hidden  ",
            variant === "primary" ? "bg-linear-to-b lg:bg-linear-to-r from-primary from-48% to-[#ffdcc4]" : "bg-[#FEF1E8]",
             className
             )}>
            {/* Background Pattern */}
            {
                showPattern && (
                    <div
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{
                            backgroundImage: 'url(/assets/lines-pattern-1.svg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    />
                )
            }

            {/* Content Container */}
            <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-stretch min-h-fit lg:min-h-[450px]">
                {/* Text Content */}
                <div className="flex flex-col gap-6 lg:gap-8 p-6 lg:p-12 lg:py-16 w-full lg:w-[60%] justify-center">
                    {/* Title and Description */}
                    <div className={cn("flex flex-col gap-4 lg:gap-5", variant === "primary" ? "text-white" : "text-[#141414]")}>
                        <h2 className={cn("text-2xl md:text-3xl lg:text-[44px]  leading-tight lg:leading-[53px] font-extrabold", splineSans.className)}>
                            {title}{' '}
                            <span className={cn(variant === "primary" ? "text-white/70" : "text-[#141414]", subTitleClassName)}>{subTitle}</span>
                        </h2>
                        <p className={cn("text-base leading-relaxed lg:leading-[28px] tracking-[-0.02em] opacity-90",
                            variant === "primary" ? "text-white opacity-90" : "text-[#141414] opacity-70",
                            descriptionClassName
                        )}>
                            {description}
                        </p>
                    </div>

                    {/* CTA  */}
                    {cta || (
                    <Link href={ctaLink || ""}>
                        <AppActionButton
                            title={ctaText}
                            variant={buttonVariant}
                            className={cn(" border-0 font-medium text-base lg:text-lg px-6 lg:px-8 py-6", 
                                variant === "primary" ? "bg-white text-primary hover:bg-white/90 hover:text-primary" 
                                : "bg-primary text-white hover:bg-primary/90 hover:text-white",
                                buttonClassName

                            )}
                        />
                    </Link>
                    )}
                </div>

                {/* Image Section - Conditionally visible, based on showImageOnMobile or showImage prop */}
                <div className={cn("relative w-full lg:w-[40%] min-h-[350px]", variant === "primary" ? "" : showSecondaryFadingWhite ? "p-4 bg-linear-to-br from-transparent from-80% to-white" : "",
                    showImageOnMobile ? "block" : "hidden lg:block",
                    imageClassName
                )}>
                    <Image
                        src={image}
                        alt="Happy students learning at Ayonaire"
                        fill
                        className="object-contain object-center"
                        sizes={variant === "primary" ? "(min-width: 1024px) 40vw, 0vw" : ""}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}
