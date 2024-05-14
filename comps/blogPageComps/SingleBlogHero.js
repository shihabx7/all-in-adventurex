import LocationBtn from "../util/LocationBtn";
import Image from "next/image";
import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
} from "react-share";
import { FacebookIcon, TwitterIcon, EmailIcon } from "react-share";
import { useState, useCallback, useEffect } from "react";

const getFbHashTags = (hashTags) => {
  let tempTag = hashTags.trim();
  let tagsArr = hashTags.trim().split(",");

  if (tagsArr.length > 0) {
    tempTag = tagsArr[0];
  }
  tempTag = tempTag.trim().split(" ").join("_").replace("#", "");

  return "#" + tempTag;
};
const getTwHashTags = (hashTags) => {
  let twTags = hashTags.trim();
  let tempTagsArr = [
    "Escape_room",
    "Escape_games",
    "Escape_room_blog",
    "Allinadventures_escape_room",
  ];

  let tagsArr = twTags.split(",");

  if (tagsArr.length > 0) {
    for (let i = 0; i < tagsArr.length; i++) {
      if (i < 4) {
        tempTagsArr[i] = tagsArr[i].replace("#", "").split(" ").join("_");
      }
    }
  }

  return tempTagsArr;
};
const getSocialDesc = (desc) => {
  let des = desc;
  if (des.length > 60) {
    des = des.substring(0, 57).trim();
  }
  des = des + "...";
};
const SingleBlogHero = (props) => {
  const [scrollY, setScrollY] = useState(0);
  const onScroll = useCallback((event) => {
    const headerHeight = document.getElementById("header").offsetHeight;

    const wW = screen.width;
    //const heroHeight=document.querySelector('.single-blog-hero').offsetHeight
    // const contentHeight=document.querySelector('.sbl-desc').offsetHeight
    const heroHeight = document.getElementById("single-blog-hero").offsetHeight;
    const contentHeight = document.getElementById(
      "single-blog-content"
    ).offsetHeight;
    const relatedHeight = document.getElementById("related-blog").offsetHeight;
    const totalHeigth = headerHeight + heroHeight + contentHeight;
    const desktopShare = document.getElementById("dsk-share");
    const { pageYOffset, scrollY } = window;

    //console.log(wW);
    if (wW > 1000) {
      if (scrollY > totalHeigth) {
        desktopShare.classList.remove("md:block");
        desktopShare.classList.add("hidden");
      } else {
        desktopShare.classList.remove("hidden");
        desktopShare.classList.add("md:block");
      }
    }

    // console.log("headerHeight", headerHeight, "heroHeight", heroHeight,'content',contentHeight, 'total',totalHeigth);
    //console.log("yOffset", pageYOffset, "scrollY", scrollY);
    setScrollY(window.pageYOffset);
  }, []);

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
      window.removeEventListener("scroll", onScroll, { passive: true });
    };
  }, []);

  return (
    <div
      id="single-blog-hero"
      className="single-blog-hero"
      style={{
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.88), rgba(0, 0, 0, 0.88)), url('/assets/blogs/single-blog-bg.png')",
        backgroundSize: "cover",
      }}
    >
      <div className="sbl-home-hero-holder ">
        <div className="max-w-7xl  mx-auto px-4 pt-8 pb-12 md:pt-12 md:pb-20 lg:pt-16 lg:pb-24 relative z-20">
          {/* =============================share btn=========================================== */}
          <div
            id="dsk-share"
            className="blog-share-btn-cont fixed top-[300px]  z-20 hidden md:block"
          >
            <div className="bg-[#fbf0d9] p-2 pb-1 flex flex-col ">
              <div className="share-item-desk">
                <FacebookShareButton
                  url={"https://allinadventures.com" + props.pagedata.shareurl}
                  quote={
                    props.facebookMeta.title
                      ? props.facebookMeta.title
                      : props.pagedata.pagetitle
                  }
                  hashtag={
                    props.facebookMeta.hashTags
                      ? getFbHashTags(props.facebookMeta.hashTags)
                      : "#All_in_adventures_escape_room"
                  }
                  description={
                    props.facebookMeta.description
                      ? props.facebookMeta.description
                      : getSocialDesc(props.pagedata.description)
                  }
                  className="Demo__some-network__share-button"
                >
                  <FacebookIcon size={32} />
                </FacebookShareButton>
              </div>
              <div className="share-item-desk mb-[4px] mt-[2px]">
                <TwitterShareButton
                  title={
                    props.twitterMeta.title
                      ? props.twitterMeta.title
                      : props.pagedata.pagetitle
                  }
                  via={"AllinAdventures"}
                  url={"https://allinadventures.com" + props.pagedata.shareurl}
                  hashtags={
                    props.twitterMeta.hashTags
                      ? getTwHashTags(props.twitterMeta.hashTags)
                      : [
                          "Escape_room",
                          "Escape_room_games",
                          "Escape_room_blog",
                          "All_in_adventures_escape_room",
                        ]
                  }
                  related={["AllinAdventures"]}
                >
                  <TwitterIcon size={32} />
                </TwitterShareButton>
              </div>
              <div className="share-item-desk">
                <EmailShareButton
                  subject={props.pagedata.pagetitle}
                  body={props.pagedata.description}
                  url={"https://allinadventures.com" + props.pagedata.shareurl}
                >
                  <EmailIcon size={32} />
                </EmailShareButton>
              </div>
            </div>
          </div>
          {/* =============================share btn=========================================== */}
          <div className="page-benar-info">
            <h1 className="text-[#ffffff] font-bold text-center text-2xl md:text-4xl lg:text-5xl mb-4 md:mb-8 font-os uppercase max-w-[1000px] mx-auto">
              {props.pagedata.pagetitle}
            </h1>
            <div className="max-w-md mx-auto mt-4 md:mt-8 pb-8">
              {/*============location search btn==========*/}
              <LocationBtn
                borderbg="bg-red-600"
                borderbghover="bg-red-900"
                innerbg="bg-white"
                innerborder="border-white"
                innerbghover="bg-grey-200"
                innerborderhover="border-gray-200"
                color="text-black"
              />
              {/*============location search btn==========*/}
            </div>

            <div
              id="sbl-ftimg"
              className="sbl-ft-img-box  mx-auto pt-2 md:pt-4 mb-[-38%] md:mb-[-33%] lg:mb-[-27%] xl:mb-[-24%] "
            >
              <Image
                className="blog-ft-shadow sbl-ft-img  mx-auto"
                src={props.pagedata.ftimg}
                alt={props.pagedata.ftimgAlt}
                width={props.pagedata.ftimgWidth}
                height={props.pagedata.ftimgHeight}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogHero;
