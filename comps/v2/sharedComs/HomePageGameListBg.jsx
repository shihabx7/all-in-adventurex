export default function HomePageGameListBg({ children }) {
  return (
    <div className="section-detail bg-[#090909]  ">
      <div className="dt-section-wrapper py-16 md:py-20 lg:py-24 xl:py-28  flex flex-col space-y-12 md:spcae-y-20 lg:space-y-20 xl:lg:space-y-24 relative">
        <div className="animated-maze-bg max-w-[1500px] absolute top-10 left-0 right-0 mx-auto">
          <div className="maze-img relative">
            <img
              className="max-w-full mx-auto"
              saltrc="all in adevntures escape game maze"
              src="/assets/home-page/all-in-adevntures-escape-game-maze.svg"
            ></img>
            <div className="mage-overlay bg-gradient-to-t from-[rgba(9,9,9,1)] from-50%   via-[rgba(9,9,9,.99)]  to-[rgba(9,9,9,.88)] absolute w-full h-full top-0 left-0 z-10"></div>
          </div>
        </div>
        <div className="section-content relative z-20">{children}</div>
      </div>
    </div>
  );
}
