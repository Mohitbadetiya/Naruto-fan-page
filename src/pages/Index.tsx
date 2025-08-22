import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CharactersSection from "@/components/CharactersSection";
import VillageSection from "@/components/VillageSection";
import NarutoGame from "@/components/NarutoGame";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <div id="characters">
        <CharactersSection />
      </div>
      <div id="villages">
        <VillageSection />
      </div>
      <div id="game">
        <NarutoGame />
      </div>
    </div>
  );
};

export default Index;
