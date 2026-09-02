import Image from "next/image";
export default function HeroBgImg({
  heroBgImageDesktop,
  heroBgImageMobile,
}) {
  return (
    <div className="game-page-hero-bg-img w-full h-full relative">
      <Image
        src={
          heroBgImageDesktop
            ? heroBgImageDesktop.url
            : "/assets/escape-games-v2/escape-from-alcatraz/escape-from-alcatraz-game-page-hero-bg.webp"
        }
        alt={
          heroBgImageDesktop ? heroBgImageDesktop.alt : "Game Hero Background"
        }
        layout="fill"
        objectFit="cover"
        // objectPosition="center center"
        className="object-[73%_center] lg:object-center"
        priority
      />
    </div>
  );
}
