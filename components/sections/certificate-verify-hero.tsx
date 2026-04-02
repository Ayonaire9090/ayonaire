import { ArrowRight } from "lucide-react";
import { AppActionButton } from "../app-action-button";
import { AppHeading } from "../app-heading";
import { Input } from "../ui/input";
import Image from "next/image";

export const CertificateVerifyHero = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-36 place-items-center  py-6 lg:py-16">
      {/* Text Column */}
      <div className="flex flex-col gap-5 lg:gap-8">
        <AppHeading
          title="Verify Our Student Certificate"
          description="Ensure the authenticity of any Ayonaire certificate by checking the student’s credentials. Enter the unique Identification Number provided on the certificate to verify its validity."
          descriptionClassName="text-gray-900 font-medium"
          headingLevel="h1"
        />
        <div className="flex items-center gap-2">
          <Input
            type="text"
            className="bg-white border-gray-200 py-6! shadow-none!"
            placeholder="Enter Your Certificate ID Here"
          />
          <AppActionButton variant="fading">
            <div className="flex items-center gap-1">
              <p className="text-base">Search</p>
              <div className="bg-white p-1 rounded-lg flex justify-center items-center">
                <ArrowRight size={25} className="text-primary" />
              </div>
            </div>
          </AppActionButton>
        </div>
      </div>

      {/* Certificate Column */}
      <div className="w-[95%] mx-auto lg:w-full -rotate-6 hover:rotate-0 transition-all ease-in-out duration-300 cursor-pointer ">
        <Image
          src="/assets/images/certificate.svg"
          width={800}
          height={800}
          alt="certificate"
          className="w-full h-full object-contain "
        />
      </div>
    </section>
  );
};
