export default function EventPatternBgSection({ children }) {
  return (
    <div className="section-detail bg-black  ">
      <div className="dt-section-wrapper py-16 md:py-20 lg:py-24 xl:py-28  flex flex-col space-y-12 md:spcae-y-20 lg:space-y-20 xl:lg:space-y-24 bg-[url('/assets/escape-game/icons/game-page-dark-pattern.svg')] bg-center bg-[length:128px_128px] md:bg-[length:132px_132px] lg:bg-[length:146px_146px] bg-repeat">
        {children}
      </div>
    </div>
  );
}
