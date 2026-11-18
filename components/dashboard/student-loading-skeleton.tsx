import { Skeleton } from "@/components/ui/skeleton";

type Variant = "rows" | "cards" | "feed" | "messages";
export function StudentLoadingSkeleton({ variant = "rows" }: { variant?: Variant }) {
  const count = variant === "cards" ? 3 : variant === "messages" ? 4 : 2;
  return <div role="status" aria-label="Loading content" aria-busy="true" className={variant === "cards" ? "grid w-full grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3" : "flex w-full flex-col gap-3"}>
    {Array.from({ length: count }, (_, index) => <div key={index} className={`min-w-0 rounded-2xl border border-[#f0ebe6] bg-white p-4 ${variant === "messages" ? `w-[78%] ${index % 2 ? "ml-auto" : ""}` : "w-full"}`}>
      {variant === "cards" && <Skeleton className="mb-4 h-32 w-full rounded-xl" />}
      {(variant === "feed" || variant === "rows") && <div className="mb-3 flex items-center gap-3"><Skeleton className="size-9 shrink-0 rounded-xl" /><div className="w-full space-y-2"><Skeleton className="h-3 w-2/5" /><Skeleton className="h-2.5 w-1/4" /></div></div>}
      <Skeleton className="h-3 w-4/5" /><Skeleton className="mt-2 h-3 w-3/5" />
      {variant === "feed" && <Skeleton className="mt-4 h-9 w-full rounded-xl" />}
    </div>)}<span className="sr-only">Loading, please wait</span>
  </div>;
}
