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
        <div className="relative z-10 flex min-h-screen w-full flex-col items-center px-5 pt-[73px] pb-8 sm:px-6 lg:px-8 lg:pt-[70px] lg:pb-10">
          {/* Auth Logo */}
          <AuthLogo className="mb-[34px] lg:mb-[48px]" />
          <div className="min-h-[635px] w-full max-w-[382px] rounded-[42px] border border-[#F1F1F1] bg-white px-6 pt-[22px] pb-8 shadow-[0_14px_28px_rgba(18,19,21,0.12)] sm:px-8 lg:min-h-[598px] lg:max-w-[532px] lg:rounded-[52px] lg:px-[46px] lg:pt-[35px] lg:pb-10">
            {children}
          </div>
        </div>
      </div>
    </GuestGuard>
  );
}
