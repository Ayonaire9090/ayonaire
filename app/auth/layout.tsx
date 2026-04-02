import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 w-full min-h-screen bg-[#F86432]">
      <div className="flex justify-center items-center bg-white lg:rounded-r-[50px] w-full h-full">
        <div className="relative w-full max-w-[90%] lg:max-w-[80%] mx-auto py-8 lg:py-12">
          {children}
        </div>
      </div>
      <div className="hidden lg:fixed lg:top-0 lg:right-10 lg:flex flex-col w-[45%] justify-center items-center bg-[#F86432] h-full">
        <Image
          src="/assets/images/auth-banner.png"
          alt="auth"
          width={1000}
          height={1000}
          className="h-full object-contain"
        />
      </div>
    </div>
  );
}
