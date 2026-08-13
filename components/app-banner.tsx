import Image from 'next/image'
import React from 'react'
import { AppActionButton } from './app-action-button'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { splineSans } from '@/app/fonts';


interface AppBannerProps {
    showPattern? : boolean;
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    className?: string;
}
export const AppBanner = ({
    showPattern = true,
    variant = "primary",
    children,
    className
}: AppBannerProps) => {
    return (
        <div className={cn("relative rounded-[24px] lg:rounded-[40px] overflow-hidden  ",
            variant === "primary" ? "bg-primary" : "bg-[#FEF1E8]",
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

            {children}


        </div>
    )
}
