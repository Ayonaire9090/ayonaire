import { AuthLogo } from "@/components/auth";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
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
      <div className="relative z-10 flex flex-col justify-center items-center w-full min-h-screen px-2 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Auth Logo */}
        <AuthLogo className="mb-0 lg:mb-3" />
        <div className="w-full lg:max-w-[580px] bg-white rounded-[80px] shadow-2xl lg:px-10 lg:py-12 px-4 py-4">
          {children}
        </div>
      </div>
    </div>
  );
}
