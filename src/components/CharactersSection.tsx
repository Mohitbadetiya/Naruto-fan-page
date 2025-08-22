import CharacterCard from "./CharacterCard";
import narutoImage from "@/assets/naruto-hero.jpg";
import sasukeImage from "@/assets/sasuke.jpg";
import sakuraImage from "@/assets/sakura.jpg";
import kakashiImage from "@/assets/kakashi.jpg";
import hinataImage from "@/assets/hinata.jpg";
import shikamaruImage from "@/assets/shikamaru.jpg";
import rockLeeImage from "@/assets/rock-lee.jpg";
import nejiImage from "@/assets/neji.jpg";
import gaaraImage from "@/assets/gaara.jpg";
import itachiImage from "@/assets/itachi.jpg";
import jiraiyaImage from "@/assets/jiraiya.jpg";
import tsunadeImage from "@/assets/tsunade.jpg";
import minatoImage from "@/assets/minato.jpg";
import inoImage from "@/assets/ino.jpg";
import chojiImage from "@/assets/choji.jpg";
import tentenImage from "@/assets/tenten.jpg";

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
    },
    {
      name: "Hinata Hyuga",
      title: "Byakugan Princess",
      image: hinataImage,
      description: "A gentle and kind kunoichi from the Hyuga clan, wielder of the Byakugan and Naruto's beloved wife.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Shikamaru Nara",
      title: "Shadow Master",
      image: shikamaruImage,
      description: "A brilliant strategist with an IQ over 200, known for his shadow manipulation techniques and lazy personality.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Rock Lee",
      title: "Taijutsu Specialist",
      image: rockLeeImage,
      description: "A dedicated ninja who specializes in taijutsu, known for his incredible speed and determination to prove hard work beats talent.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Neji Hyuga",
      title: "Hyuga Prodigy",
      image: nejiImage,
      description: "A prodigy of the Hyuga clan, master of the Gentle Fist fighting style and the Byakugan's full potential.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Gaara",
      title: "Fifth Kazekage",
      image: gaaraImage,
      description: "The jinchuriki of the One-Tail, transformed from a feared weapon into a beloved leader of the Hidden Sand Village.",
      village: "Hidden Sand Village"
    },
    {
      name: "Itachi Uchiha",
      title: "Uchiha Prodigy",
      image: itachiImage,
      description: "A legendary ninja who sacrificed everything for peace, wielder of the Mangekyo Sharingan and member of Akatsuki.",
      village: "Akatsuki"
    },
    {
      name: "Jiraiya",
      title: "Toad Sage",
      image: jiraiyaImage,
      description: "One of the legendary Sannin, master of sage mode and Naruto's mentor, known as the Gallant Jiraiya.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Tsunade",
      title: "Fifth Hokage",
      image: tsunadeImage,
      description: "The legendary Sannin known as the world's greatest medical ninja and one of the strongest kunoichi in history.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Minato Namikaze",
      title: "Fourth Hokage",
      image: minatoImage,
      description: "The Yellow Flash of the Leaf, known for his incredible speed and the Flying Thunder God technique. Naruto's father.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Ino Yamanaka",
      title: "Mind Transfer Specialist",
      image: inoImage,
      description: "A kunoichi from the Yamanaka clan, skilled in mind transfer techniques and sensory abilities.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Choji Akimichi",
      title: "Human Boulder",
      image: chojiImage,
      description: "A kind-hearted ninja from the Akimichi clan, known for his expansion techniques and love of food.",
      village: "Hidden Leaf Village"
    },
    {
      name: "Tenten",
      title: "Weapon Mistress",
      image: tentenImage,
      description: "A kunoichi specializing in weaponry and tools, known for her incredible accuracy and vast arsenal.",
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