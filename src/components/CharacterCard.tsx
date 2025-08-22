import { Card, CardContent } from "@/components/ui/card";

interface CharacterCardProps {
  name: string;
  title: string;
  image: string;
  description: string;
  village: string;
}

const CharacterCard = ({ name, title, image, description, village }: CharacterCardProps) => {
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-card/80 border-border/50 hover:border-primary/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <CardContent className="p-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-4 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
            <img 
              src={image} 
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
          <p className="text-primary font-semibold mb-2">{title}</p>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-xs font-medium">
            🍃 {village}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CharacterCard;