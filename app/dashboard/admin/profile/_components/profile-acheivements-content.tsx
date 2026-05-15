import Image from "next/image";

export const ProfileAcheivementsContent = () => {
  return (
    <div className="w-full max-w-[95%] md:max-w-full mx-auto flex flex-col sm:flex-row items-stretch gap-6 my-6 flex-wrap">
      {/* Card 1 */}
      <div className="flex flex-col bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-4 w-full sm:w-[310px] shrink-0">
        <div className="flex flex-col items-center flex-1">
          <div className="w-[100px] h-[100px] bg-[#FFF5F0] rounded-[32px] flex items-center justify-center mb-6 shrink-0">
            <Image
              src="/assets/icons/team.svg"
              alt="Team Player"
              width={45}
              height={45}
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-[20px] font-bold text-gray-900 mb-3 text-center">
            Team Player
          </h2>
          <p className="text-[13px] font-medium text-primary uppercase leading-[1.6] tracking-wide text-center px-2">
            Helped 10 Peers In Community Forums
          </p>
        </div>

        <div className="w-full mt-6">
          <div className="w-full h-px bg-gray-100 mb-6"></div>
          <h2 className="text-[13px] font-bold text-gray-900 uppercase text-center tracking-wide">
            Earned Feb 2024
          </h2>
        </div>
      </div>

      {/* Card 2 */}
      <div className="flex flex-col bg-white rounded-xl shadow-[0_2px_16px_rgba(0,0,0,0.04)] p-8 w-full sm:w-[310px] shrink-0">
        <div className="flex flex-col items-center flex-1">
          <div className="w-[100px] h-[100px] bg-[#FFF5F0] rounded-[32px] flex items-center justify-center mb-6 shrink-0">
            <Image
              src="/assets/icons/thinker.svg"
              alt="Critical Thinker"
              width={45}
              height={45}
              className="w-12 h-12 object-contain"
            />
          </div>
          <h2 className="text-[20px] font-bold text-gray-900 mb-3 text-center">
            Critical Thinker
          </h2>
          <p className="text-[13px] font-medium text-primary uppercase leading-[1.6] tracking-wide text-center px-2">
            Passed All Logic Modules
          </p>
        </div>

        <div className="w-full mt-6">
          <div className="w-full h-px bg-gray-100 mb-6"></div>
          <h2 className="text-[13px] font-bold text-gray-900 uppercase text-center tracking-wide">
            Earned Mar 2024
          </h2>
        </div>
      </div>
    </div>
  );
};
