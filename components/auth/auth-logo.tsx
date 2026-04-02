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
        width={150}
        height={50}
        className="h-10 w-auto object-contain"
        priority
      />
    </Link>
  );
}
