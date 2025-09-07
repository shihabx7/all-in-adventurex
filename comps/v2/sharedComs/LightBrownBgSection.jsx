export default function LightBrownBgSection({ children }) {
  return (
    <div className="section-detail bg-[#FFF9EB]">
      <div className="dt-section-wrapper py-16 md:py-20 lg:py-24 xl:py-28  flex flex-col space-y-12 md:spcae-y-20 lg:space-y-20 xl:lg:space-y-24 relative bg-[url('/assets/home-page/aia-brown-bg-pattern.svg')] bg-center bg-[length:200px_200px] md:bg-[length:360px_360px] lg:bg-[length:400px_400px] bg-repeat bg-opacity-50 relative">
        {children}
      </div>
    </div>
  );
}
