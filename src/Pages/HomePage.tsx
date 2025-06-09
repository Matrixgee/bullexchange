import HeroSection from "./HeroSection";
import StatsSection from "./StatsSection";
import MarketInsightsSection from "./MarketInsightsSection";
import FeaturesSection from "./FeaturesSection";
import TechnologySection from "./TechnologySection";
import InvestmentPlansSection from "./InvestmentPlansSection";
import CTA from "./CTA";

const HomePage: React.FC = () => {

  return (
    <div className="bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">

      <HeroSection />
            <StatsSection />
            <MarketInsightsSection />
            <FeaturesSection />
            <TechnologySection />
            <InvestmentPlansSection />
            <CTA />
    </div>
  );
};
export default HomePage
