export default function HomeHeroInfoOld({ heroInfo }) {
  return (
    <div
      className="hero-Info-old drop-shadow-[0_4px_8px_rgba(216,174,84,0.45)] max-w-[96%] rm:max-w-[94%]  xm:max-w-[92%]  md:max-w-3xl 
      zm:absolute  left-0 right-0 bottom-[-11%] rm:bottom-[-11%] lm:bottom-[-10%] zm:bottom-[-10%] sm:bottom-[-9%] md:bottom-[-8%] mx-auto
        bg-white px-2 py-4 md:py-4 md:px-4 lg:py-6  rounded z-30"
    >
      {/**====================================================old version======== */}
      <div className="flex flex-wrap md:grid justify-center items-center md:grid-cols-5 ">
        <div className="text-center w-[33%] md:w-auto">
          <div className="boarf">
            <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
              {heroInfo.escapeRooms - 2}
            </h3>
            <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
              Themed Games
            </p>
          </div>
        </div>
        <div className="text-center w-[33%] md:w-auto">
          <div className="border-l border-gray-300">
            <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
              {heroInfo.age ? heroInfo.age : "6+"}
            </h3>
            <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
              Age
            </p>
          </div>
        </div>
        <div className="text-center w-[33%] md:w-auto">
          <div className="border-l border-gray-300">
            <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
              YES
            </h3>
            <p className="text-gray-700 text-xs md:text-base lg:text-lg ">
              Private Events
            </p>
          </div>
        </div>
        <div className="text-center w-[44%] md:w-auto border-t pt-2 mt-3 md:pt-0 md:mt-0 md:border-t-0  border-gray-300">
          <div className="md:border-l border-gray-300">
            <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
              {heroInfo.review}
            </h3>
            <p className="text-gray-700 text-xs md:text-base lg:text-lg">
              Rave Reviews
            </p>
          </div>
        </div>
        <div className="text-center w-[44%] md:w-auto border-t md:border-t-0 pt-2 mt-3 md:pt-0 md:mt-0 border-gray-300">
          <div className="border-l  border-gray-300">
            <h3 className="golden-text text-xl md:text-4xl font-os font-bold">
              {heroInfo.guestServed}
            </h3>
            <p className="text-gray-700 text-xs md:text-base lg:text-lg">
              Guests Served
            </p>
          </div>
        </div>
      </div>
      {/**====================================================old version======== */}
    </div>
  );
}
