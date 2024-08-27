import TitleSeparator from "../util/TitleSeparator";
import GalleryGroupCarousel from "./GalleryGroupCarousel";
import { FiChevronRight } from "react-icons/fi";
const GallerySection = (props) => {
  return (
    <div className="gallery-section  relative bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-repeat bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px]">
      {/*======================= boder img============== */}
      <div className="sec-divider-top w-full absolute top-0 left-0 ">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Top.svg"
        ></img>
        <img
          className="w-full rotate-180 md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
        <img
          className="w-full hidden md:block"
          src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
        ></img>
        <img
          className="w-full  md:hidden"
          src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
        ></img>
      </div>
      {/*======================= boder img end============== */}
      <div className="section-container max-w-7xl mx-auto relative z-30">
        {/* =======  gallery========  */}

        <p className="uppercase md:text-lg text-center">CUSTOMER GALLERY</p>
        {props.galleryGroup.map((group, index) => {
          return (
            <div
              key={index + 1}
              className={index == 0 ? "mt-0" : "mt-16 md:mt-20 lg:mt-28"}
            >
              <div className="text-center section-title max-w-[820px] mx-auto px-4 md:px-0">
                <TitleSeparator title={group.groupTitle} />
                <div
                  className="text-gray-700 md:px-8 md:text-lg mt-3 md:mt-5 red-link"
                  dangerouslySetInnerHTML={{ __html: group.groupSubTitle }}
                ></div>
              </div>
              <GalleryGroupCarousel galleryImages={group.galleryImages} />
              <div className="gl-bottom-link mt-12 text-center flex items-center justify-center">
                <a
                  href={group.linkUrl}
                  className="flex items-center justify-center space-x-1 text-red-600 hover:text-red-700 text-lg font-medium"
                >
                  <span>{group.linkLabelText}</span>{" "}
                  <span>
                    <FiChevronRight />
                  </span>
                </a>
              </div>
            </div>
          );
        })}

        {/* =======gallery========  end*/}
      </div>
    </div>
  );
};

export default GallerySection;
