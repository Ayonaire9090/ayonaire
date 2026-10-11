import { Skeleton } from "@/components/ui/skeleton";

interface AuthFormSkeletonProps {
  variant?: "form" | "otp" | "profile";
}

export function AuthFormSkeleton({ variant = "form" }: AuthFormSkeletonProps) {
  return (
    <div className="w-full">
      {/* Logo Skeleton */}
      <div className="flex justify-center mb-8 mt-8">
        <Skeleton className="h-10 w-32" />
      </div>

      {/* Header Skeleton */}
      <div className="text-center mb-8">
        <Skeleton className="h-8 w-64 mx-auto mb-3" />
        <Skeleton className="h-4 w-48 mx-auto" />
      </div>

      {variant === "otp" ? (
        <>
          {/* OTP Input Skeleton */}
          <div className="flex justify-center gap-3 mb-6">
            {[...Array(6)].map((_, i) => (
              <Skeleton
                key={i}
                className="w-12 h-14 md:w-14 md:h-16 rounded-lg"
              />
            ))}
          </div>

          {/* Timer Skeleton */}
          <Skeleton className="h-4 w-32 mx-auto mb-6" />

          {/* Button Skeleton */}
          <Skeleton className="h-12 w-full rounded-[10px]" />
        </>
      ) : variant === "profile" ? (
        <>
          {/* Form Fields Skeleton */}
          <div className="space-y-5">
            {/* Field 1 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>

            {/* Field 2 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-32" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>

            {/* Textarea */}
            <div className="space-y-2">
              <div className="flex justify-between">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-12" />
              </div>
              <Skeleton className="h-24 w-full rounded-lg" />
            </div>

            {/* Two columns */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-12 w-full rounded-lg" />
              </div>
            </div>

            {/* Button */}
            <Skeleton className="h-12 w-full rounded-[10px] mt-6" />
          </div>
        </>
      ) : (
        <>
          {/* Standard Form Fields Skeleton */}
          <div className="space-y-5">
            {/* Field 1 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-28" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>

            {/* Field 2 */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-24" />
              <Skeleton className="h-12 w-full rounded-lg" />
            </div>

            {/* Button */}
            <Skeleton className="h-12 w-full rounded-[10px] mt-6" />
          </div>
        </>
      )}
    </div>
  );
}

export function AuthRoleSelectionSkeleton() {
  return (
    <div className="w-full">
      {/* Logo Skeleton */}
      <div className="flex justify-center mb-8">
        <Skeleton className="h-10 w-32" />
      </div>

      {/* Header Skeleton */}
      <div className="text-center mb-8">
        <Skeleton className="h-8 w-56 mx-auto mb-3" />
        <Skeleton className="h-4 w-64 mx-auto" />
      </div>

      {/* Role Cards Skeleton */}
      <div className="space-y-4 mb-8">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-4 p-4 rounded-xl border-2 border-gray-200"
          >
            <Skeleton className="w-12 h-12 rounded-xl" />
            <div className="flex-1 space-y-2">
              <Skeleton className="h-5 w-32" />
              <Skeleton className="h-4 w-48" />
            </div>
            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
        ))}
      </div>

      {/* Button Skeleton */}
      <Skeleton className="h-12 w-full rounded-[10px]" />
    </div>
  );
}
