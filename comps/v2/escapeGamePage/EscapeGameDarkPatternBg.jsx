export default function EscapeGameDarkPatternBg({ children }) {
  return (
    <div className="section-detail bg-black  ">
      <div className="dt-section-wrapper py-16 md:py-20 lg:py-24 xl:py-28  flex flex-col space-y-12 md:spcae-y-20 lg:space-y-20 xl:lg:space-y-24 bg-[url('/assets/escape-games/bg/escape-game-key-bg-pattern.png')] bg-center bg-[length:188px_188px] md:bg-[length:420px_420px] lg:bg-[length:572px_572px] bg-repeat">
        {children}
      </div>
    </div>
  );
}
