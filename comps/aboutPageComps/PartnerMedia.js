import TitleSeparator from "../util/TitleSeparator";
import { FiChevronRight } from "react-icons/fi";
const PartnerMedia = (props) => {
  return (
    <div className="buy-gift py-20 md:py-28 bg-black  relative overflow-hidden">
      <div className="gift-lt absolute top-0 left-0">
        <img src="/assets/gift-balon-bg.png"></img>
      </div>
      <div className="gift-rt absolute">
        <img src="/assets/Compas-brown.png"></img>
      </div>

      <div className="section-container max-w-7xl mx-auto relative z-30 px-4">
        <div className="section-title">
          <TitleSeparator title="WE ARE IN THE MEDIA" />
          <p className="max-w-2xl md:text-lg mx-auto text-center mt-4 md:mt-8 mb-10 md:mb-12 lg:mb-16 text-gray-100">
            The escape room industry is all over the media, and here we are too!
          </p>
        </div>
        <div className="partner-box">
          {/**=====================partner-row 1----------------- */}
          <div className="partner-row grid grid-cols-1 gap-y-3 gap-x-0 md:gap-3 md:grid-cols-2 lg:grid-cols-3 lg:gap-4 ">
            {props.partnerMediaList.length > 0 ? (
              <>
                {props.partnerMediaList.map((item, index) => {
                  return (
                    <div
                      key={index + 1}
                      className="partner-item bg-[#111111] px-4 py-4 rounded-md "
                    >
                      <div className="p-img min-h-[80px]">
                        <img
                          className="mx-auto max-h-[100%]"
                          src={item.partnerLogo.url}
                          alt={
                            item.partnerLogo.alt
                              ? item.partnerLogo.alt
                              : "allinadventures media partner " + index
                          }
                        ></img>
                      </div>
                      <div className="p-desc mt-2 text-center">
                        <p className="text-[#818181] mb-2">
                          {item.publishDate}
                        </p>
                        <a
                          href={item.linkUrl}
                          target="_blank"
                          className="flex space-x-1 justify-center items-center text-red-600 hover:text-red-700 text-lg"
                        >
                          <span>Learn more</span>
                          <span>
                            <FiChevronRight />
                          </span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
          {/**=====================partner-row----------------- */}
        </div>
      </div>
    </div>
  );
};

export default PartnerMedia;
