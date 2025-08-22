import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const VillageSection = () => {
  const villages = [
    {
      name: "Hidden Leaf Village",
      symbol: "🍃",
      leader: "Naruto Uzumaki",
      description: "The village hidden in the leaves, known for the Will of Fire and producing legendary ninja.",
      specialty: "Will of Fire"
    },
    {
      name: "Hidden Sand Village",
      symbol: "🏜️",
      leader: "Gaara",
      description: "A desert village known for its puppet masters and powerful wind-style jutsu techniques.",
      specialty: "Puppet Arts"
    },
    {
      name: "Hidden Mist Village",
      symbol: "🌊",
      leader: "Chojuro",
      description: "The village of the bloody mist, famous for its seven legendary ninja swordsmen.",
      specialty: "Seven Swords"
    },
    {
      name: "Hidden Cloud Village",
      symbol: "⚡",
      leader: "Darui",
      description: "A mountain village known for its lightning-style jutsu and powerful shinobi.",
      specialty: "Lightning Style"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
            Five Great Nations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the hidden villages that house the most powerful ninja in the world, each with their unique traditions and abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {villages.map((village, index) => (
            <Card key={index} className="hover:scale-105 transition-transform duration-300 bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-secondary/50">
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{village.symbol}</div>
                <CardTitle className="text-xl text-foreground">{village.name}</CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">{village.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Leader:</span>
                    <span className="text-sm font-semibold text-primary">{village.leader}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">Specialty:</span>
                    <span className="text-sm font-semibold text-accent">{village.specialty}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VillageSection;