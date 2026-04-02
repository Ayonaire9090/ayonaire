"use client";
import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import { cn } from "@/lib/utils";

interface AppConfettiProps {
  className?: string;
}

export const AppConfetti = ({ className }: AppConfettiProps) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);

    // Set initial window size
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    // Handle resize
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Don't render on server
  if (!isClient) {
    return null;
  }

  return (
    <Confetti
      width={windowSize.width}
      height={windowSize.height}
      className={cn("overflow-hidden fixed top-0 left-0 z-50", className)}
      recycle={false}
      numberOfPieces={500}
    />
  );
};
