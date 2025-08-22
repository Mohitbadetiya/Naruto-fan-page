import CharacterCard from "./CharacterCard";
import narutoImage from "@/assets/naruto-hero.jpg";
import sasukeImage from "@/assets/sasuke.jpg";
import sakuraImage from "@/assets/sakura.jpg";
import kakashiImage from "@/assets/kakashi.jpg";

const CharactersSection = () => {
  const characters = [
    {
      name: "Naruto Uzumaki",
      title: "Seventh Hokage",
      image: narutoImage,
      description: "The hero of the Hidden Leaf Village, known for his unwavering determination and the Nine-Tails fox spirit within him.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Sasuke Uchiha",
      title: "The Last Uchiha",
      image: sasukeImage,
      description: "A prodigy from the Uchiha clan, wielder of the Sharingan and Naruto's eternal rival and best friend.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Sakura Haruno",
      title: "Medical Ninja",
      image: sakuraImage,
      description: "A skilled medical ninja and one of the strongest kunoichi, known for her incredible strength and healing abilities.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Kakashi Hatake",
      title: "Copy Ninja",
      image: kakashiImage,
      description: "The Sixth Hokage and former leader of Team 7, famous for copying over 1000 jutsu with his Sharingan.",
      village: "Hidden Leaf Village"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Legendary Characters
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the iconic ninjas who shaped the world of Naruto with their incredible abilities and unwavering bonds.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {characters.map((character, index) => (
            <CharacterCard key={index} {...character} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;