import { AuthLogo } from "@/components/auth";
import { GuestGuard } from "@/components/auth/guest-guard";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <GuestGuard>
      <div className="relative flex justify-center items-center w-full min-h-screen bg-white lg:bg-transparent">
        {/* Background Image - Desktop Only */}
        <div
          className="hidden lg:block fixed inset-0 z-0"
          style={{
            backgroundImage: "url('/assets/images/auth-image.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Form Container */}
        <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-screen px-5 sm:px-6 lg:px-8 py-8 lg:py-12">
          {/* Auth Logo */}
          <AuthLogo className="mb-5 lg:mb-8" />
          <div className="w-full max-w-[382px] lg:max-w-[532px] bg-white rounded-[42px] lg:rounded-[52px] border border-[#F1F1F1] shadow-[0_14px_28px_rgba(18,19,21,0.12)] px-6 py-8 sm:px-8 lg:px-[46px] lg:py-10">
            {children}
          </div>
        </div>
      </div>
    </GuestGuard>
  );
}
