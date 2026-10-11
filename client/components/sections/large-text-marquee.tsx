import { cn } from "@/lib/utils";
import { AppTextMarquee } from "../app-text-marquee";

interface LargeTextMarqueeProps {
  text?: string;
  className?: string;
}
export function LargeTextMarquee({
  text = "Your AI Career Starts Here with the global demand for AI professionals on the rise, there’s never been a better time to enroll.",
  className,
}: LargeTextMarqueeProps) {
  return (
    <section className={cn("section-spacing overflow-hidden", className)}>
      <AppTextMarquee text={text} pauseOnHover duration="30s" />
    </section>
  );
}
