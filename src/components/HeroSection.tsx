import { Button } from "@/components/ui/button";
import narutoHeroImage from "@/assets/naruto-hero.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${narutoHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            NARUTO
          </h1>
          <h2 className="text-2xl md:text-4xl font-bold mb-8 text-foreground">
            UZUMAKI
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join the ninja world of Hidden Leaf Village. Discover the epic journey of Naruto Uzumaki 
            as he pursues his dream to become Hokage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection('characters')}
            >
              Explore Characters
            </Button>
            <Button 
              variant="secondary" 
              size="lg" 
              className="text-lg px-8 py-6"
              onClick={() => scrollToSection('game')}
            >
              Naruto Game
            </Button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-16 h-16 rounded-full bg-primary/20 animate-pulse" />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent/20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 right-40 w-8 h-8 rounded-full bg-secondary/20 animate-pulse delay-500" />
    </section>
  );
};

export default HeroSection;