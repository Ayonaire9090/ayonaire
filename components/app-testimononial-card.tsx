"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Star } from "lucide-react";

interface AppTestimonialCardProps {
    media: string;
    name: string;
    position: string;
    testimonial: string;
    rating: number;
    poster?: string;
}

export function AppTestimonialCard({
    media,
    name,
    position,
    testimonial,
    rating,
    poster,
}: AppTestimonialCardProps) {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const isVideo = media.endsWith(".mp4") || media.endsWith(".webm") || media.endsWith(".mov");

    const handlePlayPause = () => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div className="flex flex-col rounded-3xl overflow-hidden shadow-lg bg-white hover:bg-[#FFF5ED]  transition-colors">
            {/* Video/Image Section */}
            <div className="relative aspect-video w-full">
                {isVideo ? (
                    <video
                        ref={videoRef}
                        src={media}
                        poster={poster}
                        className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                        onEnded={() => setIsPlaying(false)}
                        controls={isPlaying}
                        playsInline
                    />
                ) : (
                    <Image
                        src={media}
                        alt={`${name}'s testimonial`}
                        fill
                        className="object-cover"
                    />
                )}

                {/* Dark overlay - hide when video is playing */}
                {/* {!isPlaying && (
                    <div className="absolute inset-0 bg-black/10" />
                )} */}

                {/* Play/Pause button */}
                <button
                    onClick={isVideo ? handlePlayPause : undefined}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity ${isPlaying ? "opacity-0 hover:opacity-100" : "opacity-100"
                        }`}
                >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 border-4 border-white/30 flex items-center justify-center shadow-lg cursor-pointer hover:scale-105 transition-transform">
                        {isPlaying ? (
                            <Pause className="w-6 h-6 md:w-8 md:h-8 text-foreground fill-foreground" />
                        ) : (
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-foreground fill-foreground ml-1" />
                        )}
                    </div>
                </button>
            </div>

            {/* Content Section */}
            <div className="flex flex-col gap-3 p-5 md:p-6 bg-white hover:bg-[#FFF5ED]">
                {/* Name and Rating Row */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                        <span className="font-semibold text-foreground text-base md:text-lg">
                            {name}
                        </span>
                        <span className="text-muted-foreground text-sm md:text-base">
                            ({position})
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <p className="text-muted-foreground text-sm md:text-base">
                            {rating.toFixed(1)}
                        </p>
                        <Image
                            src="/assets/icons/solid-star.svg"
                            alt="Star"
                            width={20}
                            height={20}
                            className="pb-1"
                        />
                    </div>
                </div>

                {/* Testimonial Quote */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed italic">
                    "{testimonial}"
                </p>
            </div>
        </div>
    );
}