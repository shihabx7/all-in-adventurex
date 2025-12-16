export default function HomeHeroInfo({ heroInfo }) {
  return (
    <div className="hero-Info bg-[#ffffff] drop-shadow-[0_4px_6px_rgba(216,174,84,0.45)] w-[98%] h-[66px] rm:w-[96%] lm:w-[94%] rm:h-[80px] zm:max-w-[440px] md:max-w-none md:w-[620px] lg:w-[720px] md:h-[120px]  absolute left-0  right-0 bottom-[-33px] rm:bottom-[-40px] md:bottom-[-60px] mx-auto rounded-[6px] z-[30] shadow-[0px_4px_8px_rgba(216, 174, 84, 0.45)]">
      <div className="h-full md:w-full flex flex-col justify-center items-center">
        <div className="flex md:w-full md:p-2 justify-center">
          <div className="info-item border-r boder-[0.5px] border-[#9d9d9d] text-center px-2 rm:px-3 xm:px-4 md:px-8 lg:px-10">
            <h3 className="font-os  text-[#231800] leading-[1.3] md:leading-[1.2] font-bold text-[18px] rm:text-[19px] sm:text-[24px] md:text-[34px] lg:text-[40px]">
              {heroInfo.escapeRooms}
            </h3>
            <p className="text-[#374151] text-xs rm:text-[14px] md:text-base lg:text-lg">
              Escape Rooms
            </p>
          </div>
          <div className="info-item border-r boder-[0.5px] border-[#9d9d9d] text-center px-3 xm:px-4 md:px-8 lg:px-10">
            <h3 className="font-os text-[#231800] leading-[1.3] md:leading-[1.2] font-bold text-[18px] rm:text-[19px] sm:text-[24px] md:text-[32px] lg:text-[40px]">
              {heroInfo.age}
            </h3>
            <p className="text-[#374151] text-xs rm:text-[14px] md:text-base lg:text-lg">
              Age
            </p>
          </div>
          <div className="info-item border-r boder-[0.5px] border-[#9d9d9d] text-center px-3 xm:px-4 md:px-8 lg:px-10">
            <h3 className="font-os text-[#231800] leading-[1.3] md:leading-[1.2] font-bold text-[18px] rm:text-[19px] sm:text-[24px] md:text-[34px] lg:text-[40px]">
              {heroInfo.review}
            </h3>
            <p className="text-[#374151] text-xs rm:text-[14px] md:text-base lg:text-lg">
              Reviews
            </p>
          </div>
          <div className="info-item text-center px-3 xm:px-4 md:px-8 lg:px-10">
            <h3 className="font-os text-[#231800] leading-[1.3] md:leading-[1.2] font-bold text-[18px] rm:text-[19px] sm:text-[24px] md:text-[34px] lg:text-[40px]">
              {heroInfo.guestServed}
            </h3>
            <p className="text-[#374151] text-xs rm:text-[14px] md:text-base lg:text-lg">
              Guest Served
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
