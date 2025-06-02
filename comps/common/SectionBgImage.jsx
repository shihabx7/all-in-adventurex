export default function SectionBgImage({ sectionBg }) {
  return (
    <div className="section-full-screen-bg-image w-full h-full bg-stone-800 absolute left-0 top-0">
      <img
        className="w-full h-full object-cover object-center"
        src={
          sectionBg.url
            ? sectionBg.url
            : "/assets/home-page/aia-intro-section-bg.jpg"
        }
        alt={
          sectionBg.alt
            ? sectionBg.alt
            : "/assets/home-page/aia-intro-section-bg.jpg"
        }
      ></img>
    </div>
  );
}
