export default function HomePageTitleCenterLight({ pageTitle }) {
  return (
    <h1 className="text-[#e0bf62] uppercase font-bold text-center text-[1.75rem] rm:text-[2rem] zm:text-[2.25rem] leading-[1.25] zm:leading-[1.35] md:leading-[1.25] md:text-[3.2rem] lg:leading-[1.15] lg:text-[3.5rem] xl:text-[3.8rem] font-os outline-tile">
      {pageTitle}
    </h1>
  );
}
