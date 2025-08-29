export default function PageHeroBgImage({ sectionBg, pageHeroBgImage }) {
  return (
    <div className="section-full-screen-bg-image w-full h-full">
      <img
        className="w-full h-full object-cover object-center"
        src={
          pageHeroBgImage.url
            ? pageHeroBgImage.url
            : "/assets/home-page/aia-intro-section-bg.jpg"
        }
        alt={
          pageHeroBgImage.alt
            ? pageHeroBgImage.alt
            : "/assets/home-page/aia-intro-section-bg.jpg"
        }
      ></img>
    </div>
  );
}
