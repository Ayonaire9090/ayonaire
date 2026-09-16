import { exo } from "@/app/fonts";
import Hero from "./hero";
import HighestPaidSection from "./highest-paid-section";
import WhyPaySection from "./why-pay-section";
import CompaniesPaySection from "./companies-pay-section";
import TwoSetsSection from "./two-sets-section";
import LinkedInSearchSection from "./linkedin-search-section";
import AiBoomSideSection from "./ai-boom-side-section";
import AiEngineeringExplainedSection from "./ai-engineering-explained-section";
import EverydaySystemsSection from "./everyday-systems-section";
import ExplainedCtaSection from "./explained-cta-section";
import ExperienceProofSection from "./experience-proof-section";

export default function AiFullstackEngineeringPage() {
  return (
    <main className={exo.className}>
      <Hero />
      <HighestPaidSection />
      <WhyPaySection />
      <CompaniesPaySection />
      <TwoSetsSection />
      <LinkedInSearchSection />
      <AiBoomSideSection />
      <AiEngineeringExplainedSection />
      <EverydaySystemsSection />
      <ExplainedCtaSection />
      <ExperienceProofSection />
    </main>
  );
}
