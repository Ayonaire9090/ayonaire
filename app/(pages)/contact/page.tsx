import { AppActionButton } from "@/components/app-action-button";
import { AppJoinBanner } from "@/components/app-join-banner";
import { ContactSection } from "@/components/sections/contact-section";
import { Header } from "@/components/layout/header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Faqs } from "@/components/sections/faqs";
import { Footer } from "@/components/layout/footer";

export default function ContactUsPage() {
  return (
    <>
    
    
    <div className="flex-flex-col relative">
      {/* Hero Decoration */}
      <div className="absolute bg-[linear-gradient(178.47deg,#FFAC74_1.3%,#FFFFFF_45.22%)] inset-0 " />
      <section className="container">
        <div className="flex flex-col items-center justify-center">
          <Header />
          <AppJoinBanner
            title="Get In Touch"
            description="Get in touch with us for inquiries on enrollment, available course as well as next cohort start date."
            descriptionClassName="w-full lg:max-w-[60%]"
            subTitle="Community Support."
            subTitleClassName="block! text-white!"
            variant="primary"
            className="my-3 w-full"
            showImageOnMobile={true}
            cta={
              <Link href="">
                <AppActionButton variant="glass">
                  <p>Join Community</p>
                  <span className="bg-white p-1 rounded shrink-0 group-hover:ml-2 transition-all ease-in-out duration-300">
                    <ArrowRight className="text-primary rounded w-4 h-4 lg:w-8 lg:h-8" />
                  </span>
                </AppActionButton>
              </Link>
            }
            image="/assets/icons/ayonaire-africa.svg"
          />
        </div>
      </section>
    </div>
    
      <ContactSection />

      {/* faq */}
      <Faqs />

      {/* Footer */}
      <Footer />
    </>
  );
}
