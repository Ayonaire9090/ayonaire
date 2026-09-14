import Hero from "./hero";
import HighestPaidSection from "./highest-paid-section";
import WhyPaySection from "./why-pay-section";
import CompaniesPaySection from "./companies-pay-section";
import TwoSetsSection from "./two-sets-section";
import LinkedInSearchSection from "./linkedin-search-section";
import AiBoomSideSection from "./ai-boom-side-section";
import AiEngineeringExplainedSection from "./ai-engineering-explained-section";

export default function AiFullstackEngineeringPage() {
  return (
    <main>
      <Hero />
      <HighestPaidSection />
      <WhyPaySection />
      <CompaniesPaySection />
      <TwoSetsSection />
      <LinkedInSearchSection />
      <AiBoomSideSection />
      <AiEngineeringExplainedSection />
    </main>
  );
}
