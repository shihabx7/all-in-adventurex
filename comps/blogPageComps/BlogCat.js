import { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

const BlogCat = (props) => {
  const [catBoxWidth, setCatBoxWidth] = useState("0px");
  const [showNav, setShowNav] = useState(false);
  const [currentNav, setCurrentNav] = useState(0);
  const [showNext, setShowNext] = useState(true);
  const [showPrev, setShowPrev] = useState(false);
  const [leftPos, setLeftPos] = useState(0);

  const showNextCat = (e) => {
    e.preventDefault();
    const catTotal = document.querySelectorAll(".bl-cat-item");
    //console.log(catTotal.length);
    //console.log(currentNav);
    const catBox = document.querySelector("#bolg-cat-cont");
    if (currentNav < catTotal.length - 2) {
      const currentNavWidth = catTotal[currentNav].offsetWidth;
      const pos = currentNavWidth + leftPos;
      setLeftPos(pos);
      catBox.style.left = "-" + pos + "px";
      const cnav = currentNav + 1;
      setCurrentNav(cnav);
      if (cnav > 0) {
        setShowPrev(true);
      }
    } else {
      setShowNext(false);
    }
  };
  const showPrevCat = (e) => {
    e.preventDefault();

    const catTotal = document.querySelectorAll(".bl-cat-item");
    const catBox = document.querySelector("#bolg-cat-cont");
    if (currentNav > 0) {
      const currentNavWidth = catTotal[currentNav].offsetWidth;
      const pos = leftPos - currentNavWidth;
      setLeftPos(pos);
      catBox.style.left = "-" + pos + "px";
      const cnav = currentNav - 1;
      setCurrentNav(cnav);
      if (cnav < catTotal.length - 2) {
        setShowNext(true);
      }
    } else {
      setShowPrev(false);
      setLeftPos(0);
      catBox.style.left = "0px";
      setShowNext(true);
    }
  };

  useEffect(() => {
    const catItem = document.querySelectorAll(".bl-cat-item");

    const catTabWidth = document.querySelector("#blog-cat-box").offsetWidth;
    var catWidth = 0;
    for (let i = 0; i < catItem.length; i++) {
      //console.log("item-w" + i + ":" + catItem[i].offsetWidth);
      catWidth = catWidth + catItem[i].offsetWidth + 76;
      //console.log("total" + catWidth);
    }

    if (catWidth > catTabWidth + 76) {
      setShowNav(true);
    } else {
      catWidth = catTabWidth;
      setShowNav(false);
    }
    setCatBoxWidth(catWidth + "px");
  }, []);

  return (
    <div className="blog-cat-container  pb-4">
      <div className="blog-cat-nav flex justify-end space-x-2 items-center">
        {showNav && showPrev && (
          <button
            onClick={(e) => showPrevCat(e)}
            className="blog-cat-prev cursor-pointer hover:bg-[#FFF3D8] hover:text-[#111111]  w-8 h-8 border border-[#464646] rounded-full text-[#464646] flex justify-center items-center"
          >
            <FiChevronLeft></FiChevronLeft>
          </button>
        )}
        {showNav && showNext && (
          <button
            onClick={(e) => showNextCat(e)}
            className="blog-cat-next cursor-pointer hover:bg-[#FFF3D8] hover:text-[#111111]  w-8 h-8 border border-[#464646] rounded-full text-[#464646] flex justify-center items-center"
          >
            <FiChevronRight></FiChevronRight>
          </button>
        )}
      </div>

      <div className="box flex items-center justify-center">
        <div className="all-blogs h-[44px]  my-2">
          <a
            href="/blog"
            className="block blog-cat-item bg-[#FFF3D8] px-4 md:px-6 lg:px-8 py-2 text-[#464646] font-medium"
          >
            ALL
          </a>
        </div>
        <div
          id="blog-cat-box"
          className="all-blog-cat w-full h-[44px]  overflow-hidden relative"
        >
          <div
            id="bolg-cat-cont"
            className={
              !showNav
                ? "flex justify-evenly space-x-1 border-b border-[#855800] bg-[#FFF3D8]"
                : "absolute top-0  z-20"
            }
            style={{
              width: catBoxWidth,
            }}
          >
            {props.blogcat.map((item) => {
              return (
                <a
                  key={item.id}
                  href={"/blog/category/?category=" + item.slug}
                  className="inline-block bl-cat-item blog-cat-item  bg-[#FFF3D8] px-4 md:px-6 py-2 text-[#464646]"
                >
                  {item.cat}
                </a>
              );
            })}
          </div>
          <div className="absolute top-0 right-0 h-full w-[60px] z-30 bg-cat-shadow">
            {" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogCat;
