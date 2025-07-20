import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mobileEscapeGameGridData } from "../../lib/tempData/mobileEscapeTempData";

export default function MobileEscapeGrid3() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isThrottled = useRef(false);

  // Touch tracking
  const touchStartY = useRef(0);
  const touchEndY = useRef(0);

  const scrollToIndex = (index) => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(".mbg-game-col");
    const target = children[index];
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const handleScroll = (direction) => {
    if (isThrottled.current) return;

    isThrottled.current = true;
    setTimeout(() => (isThrottled.current = false), 700);

    if (
      direction === "down" &&
      activeIndex < mobileEscapeGameGridData.length - 1
    ) {
      scrollToIndex(activeIndex + 1);
    } else if (direction === "up" && activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleWheel = (e) => {
    e.preventDefault(); // Prevent default scroll
    if (e.deltaY > 0) {
      handleScroll("down");
    } else {
      handleScroll("up");
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current;

    if (Math.abs(deltaY) > 50) {
      handleScroll(deltaY > 0 ? "down" : "up");
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener("wheel", handleWheel, { passive: false });
    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      container.removeEventListener("wheel", handleWheel);
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeIndex]);

  return (
    <div
      ref={containerRef}
      className="gallery-slider  h-[588px] rm:h-[610x] lm:h-[630px] overflow-hidden md:hidden"
    >
      {mobileEscapeGameGridData.map((item, index) => (
        <div
          key={index}
          className="mbg-game-col h-full  max-w-full px-3 rm:px-4 flex  items-end justify-center snap-start"
        >
          <motion.div
            className="mbl-bg-img max-w-[380px]  mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              className="mbl-bg-img-m w-full object-cover"
              src={item.bgImage.url}
              alt={item.bgImage.alt}
            />
            <div className="price text-white absolute right-0 top-0">
              <div className="p-3 flex items-end">
                <span className="text-sm md:text-base xl:text-lg font-semibold">
                  {item.price}
                </span>
                <span className="text-[.8rem]">(Per Persion)</span>
              </div>
            </div>
            <div className="mbl-g-content-box w-full h-full absolute top-0 left-0">
              <div className="h-full flex flex-col justify-between">
                <div className="mbl-card-g-top p-2 xl:p-3 max-w-[158px] rm:max-w-[180px] xl:max-w-[200px]">
                  <div className="flex items-center space-x-1 md:space-x-2 text-gray-50 bg-[#251A03E5] p-2 rounded">
                    <span>
                      <img
                        alt="Allinadventure mobile escape game carousel icon"
                        src="/assets/svg/inperson.svg"
                      ></img>
                    </span>
                    <span className="text-[.7rem] rm:text-[.8rem] xl:text-[.88rem]">
                      Mobile Escape Room
                    </span>
                  </div>
                </div>
                <div className="mbl-card-g-bottom px-4 pb-4 pt-8 card-bottom rounded-b-lg ">
                  <div className="mbl-carg-info">
                    <div className=" flex space-x-3 text-gray-50 items-center">
                      <div className="flex space-x-1 items-center">
                        <img
                          alt="Allinadventure mobile escape game age range  icon"
                          src="/assets/svg/card-age.svg"
                        ></img>
                        <p className="text-[.65rem] rm:text-[.8rem] ">
                          Age {item.ageRange}
                        </p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <img
                          alt="Allinadventure mobile escape room duration   icon"
                          src="/assets/svg/card-time.svg"
                        ></img>
                        <p className="text-[.65rem] rm:text-[.8rem]">
                          Duration {item.duration} Min
                        </p>
                      </div>
                      <div className="flex space-x-1 items-center">
                        <img
                          alt="Allinadventure mobile escape room team size  icon"
                          src="/assets/svg/card-person.svg"
                        ></img>
                        <p className="text-[.65rem] rm:text-[.8rem]">
                          Team Size {item.teamSize}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mbl-g-title mt-3 mb-2">
                    <h3 className="text-xl font-bold text-[#E0BF62]">
                      {item.gameTitle}
                    </h3>
                  </div>
                  <div
                    className="text-gray-200 text-[.9rem]"
                    dangerouslySetInnerHTML={{
                      __html: item.shortDescription,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
}
