import { PublicHeader } from "@/components/Home/PublicHeader";
import { HeroSection } from "@/components/Home/HeroSection";
import { StatsSection } from "@/components/Home/StatsSection";
import { ContentSection } from "@/components/Home/ContentSection";
import { NewsSection } from "@/components/Home/NewsSection";
import { IndiaMap } from "@/components/Home/IndiaMap";
import { PublicFooter } from "@/components/Home/PublicFooter";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <PublicHeader />
      <HeroSection />
      <StatsSection />
      <ContentSection />
      <NewsSection />
      <IndiaMap />
      <PublicFooter />
    </div>
  );
};

export default Home;
