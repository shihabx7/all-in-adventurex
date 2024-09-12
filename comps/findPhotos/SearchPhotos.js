import React, { useState, useRef, useEffect } from "react";
import { BiChevronLeft, BiChevronRight, BiX } from "react-icons/bi";
import { MdOutlineFileDownload } from "react-icons/md";
const AllPhotos = ({ photoList, locationName, srcDate, searchDateUs }) => {
  const [imageList, setImageList] = useState(photoList);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [locName, setLocname] = useState("");
  const [srcDt, setSrcDt] = useState("");
  const imageRef = useRef(null); // Ref to store the image container
  const closeRef = useRef(null);

  useEffect(() => {
    setLocname(locationName);
    setSrcDt(srcDate);
    setImageList(photoList);
  }, [photoList]);

  // Get all image elements within the gallery
  const images = useRef([]);
  useEffect(() => {
    if (photoList.length > 0) {
      images.current = imageRef.current.querySelectorAll("img");
    }
  }, []);

  const openLightbox = (index) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.add("overflow-hidden");
    setSelectedIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    setIsOpen(false);
  };

  const handleNavigation = (direction) => {
    if (!isOpen) return;

    const imageCount = images.current.length;
    const newIndex = (selectedIndex + imageCount + direction) % imageCount;
    setSelectedIndex(newIndex);
  };

  const handleKeyDown = (event) => {
    if (!isOpen) return;

    switch (event.key) {
      case "Escape":
        closeLightbox();
        break;
      case "ArrowLeft":
        handleNavigation(-1);
        break;
      case "ArrowRight":
        handleNavigation(1);
        break;
      default:
        break;
    }
  };
  const downloadImage = (imageUrl) => {
    let filename = "Allinadventures-escape-rooms-" + selectedIndex + 1;
    fetch(imageUrl)
      .then((response) => response.blob()) // Convert response to Blob
      .then((blob) => {
        const url = window.URL.createObjectURL(blob); // Create temporary URL
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", filename); // Set download filename
        document.getElementById("dnl").appendChild(link);
        // document.body.appendChild(link);
        link.click();
        document.getElementById("dnl").removeChild(link);
        //document.body.removeChild(link);
        window.URL.revokeObjectURL(url); // Clean up temporary URL
      })
      .catch((error) => console.error("Error downloading image:", error));
  };
  const handleClickOutside = (event) => {
    if (
      isOpen &&
      !closeRef.current.contains(event.target) &&
      !imageRef.current.contains(event.target)
    ) {
      closeLightbox();
    }
  };
  const usFormate = (dt) => {
    let arr = dt.split("-");
    return arr[1] + "-" + arr[2] + "-" + arr[0];
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]); // Only attach listener when lightbox is open

  return (
    <>
      <div className="c-all-photos ">
        {/*=====section Head==== */}
        <div className="sec-head px-3 rm:px-4">
          <div className="flex justify-center items-center space-x-1 md:space-x-3 lg:space-x-4">
            {imageList.length < 1 ? (
              <h2 className="text-[rgb(55,65,81)] text-center font-bold text-[20px] rm:text-[24px] md:text-[28px] lg:text-[36px] 2xl:text-[40px]">
                Photo Playing Hard to Get? It'll Show Up Soon!
              </h2>
            ) : (
              <>
                <div className="h-[2px] grow bg-[rgba(0,0,0,0.7)]"></div>
                <div className="flex-none">
                  <h2 className="text-[rgb(55,65,81)] font-bold text-[20px] rm:text-[24px] md:text-[28px] lg:text-[36px] 2xl:text-[40px]">
                    REVISIT YOUR ADVENTURE
                  </h2>
                </div>
                <div className="h-[2px] grow bg-[rgba(0,0,0,0.7)]"></div>
              </>
            )}
          </div>
          <div className="sub-head ">
            <div className="text-center text-gray-500 text-[16px] md:text-[18px] lg:text-[20px] 2xl:text-[22px] ">
              {imageList.length < 1 ? (
                <p className="max-w-[800px] mx-auto mt-4">
                  Please make sure you've selected the correct location and
                  date. If you played recently, allow 24-48 hours for our team
                  to upload your photos.
                </p>
              ) : (
                <p>
                  Captured on {searchDateUs} at All In Adventures {locName}.
                </p>
              )}
            </div>
          </div>
        </div>
        {/*=====section Head end==== */}
        {/*=====================image container============= */}
        <div className="customer-image-container mt-4 md:mt-6 lg:mt-8 px-2">
          {imageList.length < 1 ? (
            <div className="mt-4">
              <p className="text-[#2d2d2d] font-medium text-center md:text-[24px]"></p>
            </div>
          ) : (
            <div
              className="grid grid-cols-1 gap-x-0 gap-y-2 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-4"
              ref={imageRef}
            >
              {imageList.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => openLightbox(index)}
                    className="photo-item p-[4px] hover:cursor-pointer md:p-1 bg-[#FFF1D2] shadow-md hover:shadow-lg hover:bg-[#D3A54F]"
                  >
                    <div
                      className="w-full pt-[56.25%] bg-center bg-origin-border bg-contain bg-no-repeat bg-[#111111]"
                      style={{ backgroundImage: "url('" + item.url + "')" }}
                    ></div>

                    <img
                      className="w-full hidden"
                      src={item.url}
                      alt={item.alt}
                    ></img>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        {/*=====================image container============= */}
      </div>
      {/*=====================image lightbox============= */}
      {isOpen && (
        <div
          className="light-gal w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.8)] z-[100]"
          id="lightbox"
        >
          <div className="w-full h-full flex justify-center items-center relative z-80">
            <div
              ref={closeRef}
              className="lighrbox-container max-w-[92%] mx-auto md:max-w-max  relative p-[4px] lg:p-[6px] bg-[#FFF1D2]"
            >
              <div className="lb-img  md:max-w-[740px] lg:max-w-[840px] ">
                <img
                  className="md:max-h-[560px]"
                  src={imageList[selectedIndex].url}
                  alt={"allinadventures customer photo" + selectedIndex}
                />
              </div>
              {/*==============download image============*/}
              <div id="dnl" className="absolute bottom-0 left-0 h-0 w-0"></div>
              <button
                className="absolute top-0 right-0 flex bg-[#2D2D2D] p-1 lg:px-2 lg:py-2 "
                onClick={() => downloadImage(imageList[selectedIndex].src)}
              >
                <span className="text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[38px] text-[#D8AF53] hover:text-[#FFD700] ">
                  <MdOutlineFileDownload />
                </span>
              </button>
              {/*==============download image============*/}
              <button
                className="absolute top-0 bottom-0 left-[-10px] md:left-[-15px] lg:left-[-17px] 2xl:left-[-20px] flex justify-center items-center bg-[#111111] my-auto h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[44px] lg:w-[44px] 2xl:h-[48px] 2xl:w-[48px] rounded-full border-[2px] border-[#D4B56A]  hover:border-[#FFD700] group"
                onClick={() => handleNavigation(-1)}
              >
                <span className="text-[22px] md:text-[26px] lg:text-[36px] 2xl:text-[40px] text-[#D4B56A] group-hover:text-[#FFD700]">
                  <BiChevronLeft />
                </span>
              </button>
              <button
                className=" absolute top-0 bottom-0 right-[-10px] md:right-[-15px] lg:right-[-17px] 2xl:right-[-20px] my-auto flex justify-center items-center bg-[#111111] h-[30px] w-[30px] md:h-[40px] md:w-[40px] lg:h-[44px] lg:w-[44px] 2xl:h-[48px] 2xl:w-[48px] rounded-full border-[2px] border-[#D4B56A]  hover:border-[#FFD700] group"
                onClick={() => handleNavigation(1)}
              >
                <span className="text-[22px] md:text-[26px] lg:text-[36px] 2xl:text-[40px] text-[#D4B56A] group-hover:text-[#FFD700]">
                  <BiChevronRight />
                </span>
              </button>
            </div>
            {/**===========close========= lightbox */}
            <button
              className="absolute top-[80px] right-[12px] md:top-[100px] md:right-[20px]  h-[38px] w-[38px] md:h-[42px] md:w-[42px] lg:h-[44px] lg:w-[44px] 2xl:h-[48px] 2xl:w-[50px] bg-[#111111] rounded-full flex justify-center items-center"
              onClick={closeLightbox}
            >
              <span className="text-[24px] md:text-[28px] lg:text-[32px] 2xl:text-[38px] text-red-600 hover:text-red-600">
                <BiX />
              </span>
            </button>
          </div>
        </div>
      )}
      {/*=====================image container image lightbox end============= */}
    </>
  );
};
export default AllPhotos;
