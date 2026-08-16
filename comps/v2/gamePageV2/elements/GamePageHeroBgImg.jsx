import Image from "next/image";
export default function GamePageHeroBgImg({ heroBgImage }) {
  return (
    <div className="game-page-hero-bg-img w-full h-full relative">
      <Image
        src={
          heroBgImage
            ? heroBgImage.url
            : "/assets/escape-games-v2/escape-from-alcatraz/escape-from-alcatraz-game-page-hero-bg.webp"
        }
        alt="Game Hero Background"
        layout="fill"
        objectFit="cover"
        // objectPosition="center center"
        className="object-[73%_center] lg:object-center"
        priority
      />
    </div>
  );
}
