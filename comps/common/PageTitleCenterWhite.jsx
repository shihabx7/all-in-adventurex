export default function PageTitleCenterWhite({ pageTitle }) {
  return (
    <div>
      <h1 className="text-white uppercase font-bold text-center text-[30px] rm:text-[32px] zm:text-[34px] leading-[1.3] zm:leading-[1.4] md:leading-[1.3] md:text-[48px] lg:text-6xl font-os outline-tile">
        {pageTitle}
      </h1>
    </div>
  );
}
