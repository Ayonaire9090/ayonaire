import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CareerTool } from "./career-tools-data";

export function CareerToolCard({ href, icon: Icon, title, description }: CareerTool) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-center justify-center size-10 rounded-xl bg-[#F86432]/10 text-[#F86432] shrink-0">
        <Icon className="size-5" />
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      </div>

      <Button
        asChild
        variant="outline"
        className="w-full mt-1 rounded-xl border-gray-900 text-gray-900 hover:bg-gray-50"
      >
        <Link href={href}>Start</Link>
      </Button>
    </div>
  );
}
