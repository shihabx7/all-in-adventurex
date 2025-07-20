import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { mobileEscapeGameGridData } from "../../lib/tempData/mobileEscapeTempData";

export default function MobileEscapeGrid4() {
  const containerRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const isThrottled = useRef(false);
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

    const maxIndex = mobileEscapeGameGridData.length - 1;

    if (direction === "down" && activeIndex < maxIndex) {
      scrollToIndex(activeIndex + 1);
    } else if (direction === "up" && activeIndex > 0) {
      scrollToIndex(activeIndex - 1);
    }
  };

  const handleWheel = (e) => {
    const isAtTop = activeIndex === 0;
    const isAtBottom = activeIndex === mobileEscapeGameGridData.length - 1;

    if ((!isAtTop && e.deltaY < 0) || (!isAtBottom && e.deltaY > 0)) {
      e.preventDefault();
    }

    if (e.deltaY > 10) {
      handleScroll("down");
    } else if (e.deltaY < -10) {
      handleScroll("up");
    }
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current;

    if (Math.abs(deltaY) > 30) {
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
      className="gallery-slider h-screen overflow-hidden md:hidden relative z-10"
    >
      {mobileEscapeGameGridData.map((item, index) => (
        <div
          key={index}
          className="mbg-game-col h-screen w-full flex items-center justify-center snap-start"
        >
          <motion.div
            className="mbl-bg-img max-w-[380px] mx-auto relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <img
              className="w-full object-cover object-center mask-img"
              src={item.bgImage.url}
              alt={item.bgImage.alt}
            />
            {/* price, content, etc. */}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
