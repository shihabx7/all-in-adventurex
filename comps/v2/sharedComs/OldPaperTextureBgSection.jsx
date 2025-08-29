export default function OldPaperTextureBgSection({ children }) {
  return (
    <div className="section-detail bg-[#FFF9EB]">
      <div className="dt-section-wrapper py-16 md:py-20 lg:py-24 xl:py-28  flex flex-col space-y-12 md:spcae-y-20 lg:space-y-20 xl:lg:space-y-24 bg-[url('/assets/escape-game-events/old-paper-texture-bg-long.svg')] bg-center bg-cover relative">
        {children}
      </div>
    </div>
  );
}
