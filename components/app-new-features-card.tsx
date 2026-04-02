import Image from "next/image";
import { Spline_Sans } from "next/font/google";

const splineSans = Spline_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-spline-sans",
});

interface AppNewFeaturesCardProps {
  icon: string;
  title: string;
}

export function AppNewFeaturesCard({ icon, title }: AppNewFeaturesCardProps) {
  return (
    <div className="relative overflow-hidden flex flex-col items-center justify-center py-6 px-4 rounded-xl bg-white border-l-4 border-l-primary shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] min-h-[160px] transition-colors duration-300 md:hover:bg-[#FFF2ED] w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]">
      {/* Icon with orange gradient background */}
      <div className="flex items-center justify-center mb-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[#FFA55C]">
        <Image
          src={icon}
          alt={title}
          width={32}
          height={32}
          className="brightness-0 invert"
        />
      </div>

      {/* Title */}
      <h3
        className={`${splineSans.className} font-bold text-base leading-[140%] tracking-normal text-center text-[#141414] m-0`}
      >
        {title}
      </h3>
    </div>
  );
}
