import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🍃</span>
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Naruto Fan Hub
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#characters" className="text-foreground hover:text-primary transition-colors">
              Characters
            </a>
            <a href="#villages" className="text-foreground hover:text-primary transition-colors">
              Villages
            </a>
            <a href="#jutsu" className="text-foreground hover:text-primary transition-colors">
              Jutsu
            </a>
            <a href="#episodes" className="text-foreground hover:text-primary transition-colors">
              Episodes
            </a>
          </div>
          
          <Button variant="outline" size="sm">
            Join the Village
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;