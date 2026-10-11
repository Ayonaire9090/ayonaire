"use client";
import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";

interface AppTextMarqueeProps {
    text: string;
    className?: string;
    reverse?: boolean;
    pauseOnHover?: boolean;
    duration?: string;
    gap?: string;
    textClassName?: string;
}

export function AppTextMarquee({
    text,
    className,
    reverse = false,
    pauseOnHover = true,
    duration = "40s",
    gap = "4rem",
    textClassName,
}: AppTextMarqueeProps) {
    return (
        <Marquee
            className={cn(className)}
            reverse={reverse}
            pauseOnHover={pauseOnHover}
            repeat={4}
            style={{
                "--duration": duration,
                "--gap": gap,
            } as React.CSSProperties}
        >
            <span
                className={cn(
                    "text-4xl md:text-6xl lg:text-8xl font-bold text-foreground/10 whitespace-nowrap capitalize tracking-wider",
                    textClassName
                )}
            >
                {text}
            </span>
        </Marquee>
    );
}