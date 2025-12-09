export default function HomePageGameListBg({ children }) {
  return (
    <div className="escape-game-list-section-wrapper bg-[#090909]">
      <div className="dt-section-wrapper pt-20 pb-16 zm:pt-[7.5rem]  md:py-20 lg:py-24 xl:py-28  relative">
        <div className="animated-maze-bg  absolute top-0 left-0 right-0 mx-auto">
          <div className="maze-img relative w-full overflow-hidden">
            <img
              className="w-[100%]  object-cover  object-center scale-105  lg:scale-110"
              saltrc="all in adevntures escape game maze"
              src="/assets/home-page/all-in-adevntures-escape-game-maze.svg"
            ></img>
            <div className="mage-overlay bg-gradient-to-t from-[rgba(9,9,9,1)] from-50%   via-[rgba(9,9,9,.99)]  to-[rgba(9,9,9,.88)] absolute w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
        <div className="section-content flex flex-col space-y-16 md:spcae-y-20 lg:space-y-20 xl:space-y-24  relative z-20">{children}</div>
      </div>
    </div>
  );
}
