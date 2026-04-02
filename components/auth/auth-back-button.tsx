"use client";

import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface AuthBackButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function AuthBackButton({
  href,
  onClick,
  className,
}: AuthBackButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (href) {
      router.push(href);
    } else {
      router.back();
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "absolute left-0 top-5 p-2 text-foreground hover:text-primary transition-colors",
        className,
      )}
      aria-label="Go back"
    >
      <ArrowLeft className="size-5" />
    </button>
  );
}
