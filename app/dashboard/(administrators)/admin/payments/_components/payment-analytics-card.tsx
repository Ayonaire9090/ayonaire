import { Badge } from "@/components/ui/badge";
import { LucideIcon } from "lucide-react";

interface PaymentAnalyticsCardProps {
  heading: string;
  title: string;
  icon: LucideIcon;
  rate: string;
  description: string;
}

export const PaymentAnalyticsCard = ({
  heading,
  title,
  icon: Icon,
  rate,
  description,
}: PaymentAnalyticsCardProps) => {
  return (
    <div className="rounded-[16px]! px-4 py-5 space-y-3 bg-white h-full">
      <div>
        <p className="flex justify-between items-center text-sm text-gray-500 pb-2">
          {heading}
          <Icon className="size-10 text-[#F86432] bg-white rounded-lg p-2" />
        </p>
        <p className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {title}
        </p>
      </div>
      <div className="flex items-start gap-1.5 text-sm pt-0!">
        {rate && (
          <Badge
            variant="outline"
            className="text-[#F86432] border-0! border-none! bg-[#F86432]/10 rounded-full!"
          >
            {rate}
          </Badge>
        )}
        <div className="text-muted-foreground">{description}</div>
      </div>
    </div>
  );
};
