"use client";

import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AuthLogoProps {
  className?: string;
}

export function AuthLogo({ className }: AuthLogoProps) {
  return (
    <Link href="/" className={cn("w-full flex justify-center", className)}>
      <Image
        src="/assets/logos/full-logo-dark.svg"
        alt="Ayonaire Logo"
        draggable={false}
        width={200}
        height={60}
        className="h-11 w-[150px] lg:h-14 lg:w-[200px] object-contain"
        priority
      />
    </Link>
  );
}
