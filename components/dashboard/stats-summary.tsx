import { LucideIcon, Layers } from "lucide-react";
import { StatCard } from "./stat-card";

interface StatsSummaryItem {
  title: string;
  number: string;
  icon?: LucideIcon;
  iconBg?: string;
}

interface StatsSummaryProps {
  data?: StatsSummaryItem[];
  className?: string;
}

export const StatsSummary = ({ data, className = "" }: StatsSummaryProps) => {
  if (!data || data.length === 0) return null;

  return (
    <div
      className={`hidden md:grid gap-3 mb-6 ${className}`}
      style={{ gridTemplateColumns: `repeat(${data.length}, minmax(0, 1fr))` }}
    >
      {data.map((item, index) => {
        const Icon = item.icon ?? Layers;
        return (
          <StatCard
            key={index}
            label={item.title}
            value={item.number}
            icon={Icon}
            iconBg={item.iconBg}
          />
        );
      })}
    </div>
  );
};
