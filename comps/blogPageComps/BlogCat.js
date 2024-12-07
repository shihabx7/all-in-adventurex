import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const BlogCat = (props) => {
  const [showNav, setShowNav] = useState(false);
  const [currentNav, setCurrentNav] = useState(0);
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);

  const scrollLeft = (e) => {
    e.preventDefault;
    let itemTotal = document.querySelectorAll(".bl-cat-item");
    let content = document.getElementById("catBoxCont");
    let toScroll = itemTotal[currentNav].offsetWidth;
    // console.log(currentNav);
    let newNavindex = currentNav - 1;
    // console.log(currentNav);
    // console.log(itemTotal.length);
    //const content_scroll_width = content.scrollWidth;
    let content_scoll_left = content.scrollLeft;
    content_scoll_left -= toScroll;
    setShowNext(true);
    if (content_scoll_left <= 0) {
      content_scoll_left = 0;
      setShowPrev(false);
      newNavindex = 0;
    }
    content.scrollLeft = content_scoll_left;
    setCurrentNav(newNavindex);
  };
  const scrollRight = (e) => {
    e.preventDefault;
    let itemTotal = document.querySelectorAll(".bl-cat-item");
    const content = document.getElementById("catBoxCont");
    const contentDiv = document.getElementById("catBox");
    //console.log("view:" + contentDiv.offsetWidth);
    const content_scroll_width = content.scrollWidth;
    let content_scoll_left = content.scrollLeft;
    // console.log("SL Bf:" + content_scoll_left);
    let toScroll = itemTotal[currentNav].offsetWidth;
    content_scoll_left += toScroll;
    let neindex = currentNav + 1;
    setCurrentNav(neindex);
    setShowPrev(true);
    // console.log("SW :" + content_scroll_width);
    //  console.log("SL :" + content_scoll_left);
    if (content_scoll_left >= content_scroll_width - contentDiv.offsetWidth) {
      content_scoll_left = content_scroll_width;
      setShowNext(false);
      // console.log("SL change:" + content_scoll_left);
      setCurrentNav[itemTotal.length - 1];
    }
    content.scrollLeft = content_scoll_left;
  };
  useEffect(() => {
    let intBox = document.getElementById("catBox");
    let intBoxW = intBox.offsetWidth;

    // console.log("int Box D W " + intBoxW);

    let intCatItems = document.getElementsByClassName("blog-cat-item");
    let intCatItemsW = 0;
    for (let i = 0; i < intCatItems.length; i++) {
      intCatItemsW = intCatItemsW + intCatItems[i].offsetWidth;
      // let slg = intCatItems[i].getAttribute("href").split("/");

      //  if (props.categorySlug && props.categorySlug == slg[slg.length - 1]) {
      //  setCurrentPos(intCatItemsW + "px");
      // }
      //console.log("current index " + currentPos);
      //console.log(props.categorySlug);
      //console.log(slg[slg.length - 1]);
    }

    // console.log("int items W " + intCatItemsW);
    if (intBoxW < intCatItemsW) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    const handleResize = () => {
      let catbox = document.getElementById("catBox");
      let boxW = catbox.offsetWidth;

      let boxCatItems = document.getElementsByClassName("blog-cat-item");
      let boxCatItemsW = 0;
      for (let i = 0; i < boxCatItems.length; i++) {
        boxCatItemsW = boxCatItemsW + boxCatItems[i].offsetWidth;
      }

      // console.log("box W " + boxW);
      // console.log("items W " + boxCatItemsW);
      if (boxW < boxCatItemsW) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  // console.log(category);
  return (
    <div className="blog-cat-container  pb-4">
      <div className="blog-cat-nav flex justify-end space-x-2 items-center mb-1">
        {showNav && showPrev && (
          <button
            onClick={(e) => scrollLeft(e)}
            className="blog-cat-prev cursor-pointer hover:bg-[#FFF3D8] hover:text-[#111111]  w-8 h-8 border border-[#464646] rounded-full text-[#464646] flex justify-center items-center"
          >
            <FiChevronLeft></FiChevronLeft>
          </button>
        )}
        {showNav && showNext && (
          <button
            onClick={(e) => scrollRight(e)}
            className="blog-cat-next cursor-pointer hover:bg-[#FFF3D8] hover:text-[#111111]  w-8 h-8 border border-[#464646] rounded-full text-[#464646] flex justify-center items-center"
          >
            <FiChevronRight></FiChevronRight>
          </button>
        )}
      </div>

      <div
        id="catBox"
        className={
          !showNav
            ? "box  bg-[#FFF3D8] border-b border-[#855800]"
            : "w-full relative h-[44px] bg-[#FFF3D8]  overflow-hidden"
        }
      >
        <div
          id="catBoxCont"
          className={
            !showNav
              ? "flex items-center justify-between overflow-hidden"
              : "absolute h-full top-0 left-0 right-0 bottom-0 flex overflow-x-scroll  cusBar"
          }
        >
          <a
            href="/blog"
            className={
              !props.categorySlug
                ? "  blog-cat-item bl-cat-item flex-none  bg-[#FFF3D8] px-6 md:px-7 lg:px-10 py-2 text-[#464646] font-semibold catactive"
                : "  blog-cat-item bl-cat-item flex-none bg-[#FFF3D8] px-6 md:px-7 lg:px-10 py-2 text-[#464646] font-medium"
            }
          >
            ALL
          </a>

          {props.blogcat.map((item) => {
            return (
              <a
                key={item.id}
                href={"/blog/category/" + item.slug}
                className={
                  props.categorySlug == item.slug
                    ? " bl-cat-item flex-none blog-cat-item  bg-[#FFF3D8] px-5 md:px-6 lg:px-10 py-2 text-[#464646] font-semibold catactive"
                    : " bl-cat-item flex-none blog-cat-item  bg-[#FFF3D8] px-5 md:px-6 lg:px-10 py-2 text-[#464646] "
                }
              >
                {item.cat}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default BlogCat;
