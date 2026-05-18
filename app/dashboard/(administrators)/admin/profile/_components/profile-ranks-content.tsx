import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";

export const ProfileRanksContent = () => {
  return (
    <div className="flex flex-col gap-2 my-6 w-full max-w-[96%] md:max-w-full mx-auto">
      <div className="flex gap-1">
        {/* Logo */}
        <Image
          src="/assets/logos/logo-dark.png"
          alt=""
          width={60}
          height={60}
          className="object-contain"
        />
        {/* title and description */}
        <div className="flex flex-col">
          <h2 className="font-extrabold text-3xl">Admin</h2>
          <p className="font-bold text-[14px]">
            manage and moderate Ayoniare Academy{" "}
          </p>
        </div>
      </div>
      {/* Images */}
      <div className="flex items-center gap-1">
        <Avatar className="size-[50px] md:size-[70px] border-4 border-orange-100">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="Community"
          />
          <AvatarFallback className="text-2xl font-bold bg-orange-100 text-orange-600">
            DS
          </AvatarFallback>
        </Avatar>
        <Avatar className="size-[50px] md:size-[70px] border-4 border-orange-100">
          <AvatarImage
            src="https://randomuser.me/api/portraits/women/68.jpg"
            alt="Community"
          />
          <AvatarFallback className="text-2xl font-bold bg-orange-100 text-orange-600">
            MN
          </AvatarFallback>
        </Avatar>
        <Avatar className="size-[50px] md:size-[70px] border-4 border-orange-100">
          <AvatarImage
            src="https://randomuser.me/api/portraits/men/65.jpg"
            alt="Community"
          />
          <AvatarFallback className="text-2xl font-bold bg-orange-100 text-orange-600">
            SA
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};
