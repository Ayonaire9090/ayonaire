import { cn } from "@/lib/utils";

export const GlassContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "bg-white/40! backdrop-blur-md! border! border-white/20!",
        className,
      )}
    >
      {children}
    </div>
  );
};
