"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";


interface AppFeatureCardProps {
  title: string;
  icon: string;
  description?: string;
}

// Parse numeric value from title (e.g., "65%" -> 65, "4.8/5" -> 4.8)
const parseNumericValue = (
  title: string
): { value: number; suffix: string; isDecimal: boolean } => {
  // Match patterns like "65%", "89%", "4.8/5"
  const match = title.match(/^([\d.]+)(.*)$/);
  if (match) {
    const value = parseFloat(match[1]);
    const suffix = match[2];
    const isDecimal = match[1].includes(".");
    return { value, suffix, isDecimal };
  }
  return { value: 0, suffix: title, isDecimal: false };
};

export const AppFeatureCard = ({
  title,
  icon,
  description,
}: AppFeatureCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const { value: targetValue, suffix, isDecimal } = parseNumericValue(title);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCount();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [hasAnimated, targetValue]);

  const animateCount = () => {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const startValue = 0;

    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function for smooth deceleration
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);

      const currentValue =
        startValue + (targetValue - startValue) * easeOutQuart;
      setDisplayValue(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateValue);
      } else {
        setDisplayValue(targetValue);
      }
    };

    requestAnimationFrame(updateValue);
  };

  // Format the display value
  const formattedValue = isDecimal
    ? displayValue.toFixed(1)
    : Math.round(displayValue).toString();

  return (
    <div
      ref={cardRef}
      className="bg-[#FFF8F8] rounded-xl p-4 space-y-2 lg:space-y-4 flex flex-col items-center justify-center text-center"
    >
      <div className="flex items-center justify-center bg-white rounded-xl p-2 shadow-lg">
        <Image
          src={icon}
          alt="icon"
          width={20}
          height={20}
          className="text-primary w-6 h-6 lg:w-10 lg:h-10"
        />
      </div>
      <h3
      style={
        {
          fontFamily:"Satoshi, sans-serif",
          fontWeight:700,
          fontSize:"clamp(40px, 10vw, 63px)",
          lineHeight:"100%",
          letterSpacing:"-0.2px",
          textAlign:"center",
          color:"#F67219"
        }
      }
        className={`text-[#F67219] font-['Satoshi','sans-serif'] font-bold text-4xl lg:text-6xl`}
      >
        {targetValue > 0 ? `${formattedValue}${suffix}` : title}
      </h3>
      <p
        className={`text-gray-700 text-xs md:text-lg lg:text-2xl`}
      >
        {description}
      </p>
    </div>
  );
};
