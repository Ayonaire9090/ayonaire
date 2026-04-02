import { Header } from "@/components/layout/header";
import { AppAdvisorBanner } from "@/components/appadvisor-banner";
import { CertificateHowItWorks } from "@/components/sections/certificate-how-it-works";
import { CertificateVerificationForm } from "@/components/sections/certificate-verification-form";
import { CertificateVerifyHero } from "@/components/sections/certificate-verify-hero";
import { CertificateWhyVerify } from "@/components/sections/certificate-why-verify";
import { Mail } from "lucide-react";

export default function VerifyCertificate() {
  return (
    <>
      {/* Decoration Background */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 min-h-[872px] h-screen" />
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          {/* Section Certificate Verify Hero */}
          <CertificateVerifyHero />
        </div>
      </div>
      {/* Section How It Works */}
      <CertificateHowItWorks />
      {/* Certificate Verification Form */}
      <CertificateVerificationForm />

      {/* Why Verify Certificates */}
      <CertificateWhyVerify />

      {/* Banner */}
        <AppAdvisorBanner
          title="Need Help?"
          description="If you encounter any issues verifying a certificate, contact our support team:"
          sectionClassName="my-0! mt-16! lg:mt-24!"
          className="px-0! lg:px-0!"
          ctaSection={
            <a
              href="mailto:info@ayonaire.com"
              className="mt-4 flex items-center gap-3 bg-white rounded-xl px-5 py-3 lg:px-6 lg:py-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-primary rounded-lg">
                <Mail className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
              </div>
              <span className="text-base lg:text-lg font-semibold text-primary">
                info@ayonaire.com
              </span>
            </a>
          }
        />
    </>
  );
};
