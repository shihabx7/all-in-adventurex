import MobileTitleSeparatorCenter from "../mobileEscapeGames/MobileTitleSeparatorCenter";
import UerBtn from "./UerBtn";

const CreatUnlimitedDeal = (props) => {
  const tempData = [
    {
      id: 1,
      title: "ESCAPE ROOM ENTHUSIASTS",
      icon: {
        hasImage: true,
        alt: "Allinadventures unlimited play pass escape room enthusiasts",
        url: "/assets/unlimited-escape-room/icon/escape-room-enthusiasts.svg",
      },
      description:
        "Love solving puzzles and cracking codes? With unlimited games, you can master all 9 themes, perfect your strategies, and feed your passion for escape rooms—all for one low price!",
    },
    {
      id: 2,
      title: "FIRST-TIMERS",
      icon: {
        hasImage: true,
        alt: "Allinadventures unlimited play pass first timer",
        url: "/assets/unlimited-escape-room/icon/first-timer.svg",
      },
      description:
        "New to escape rooms? The Unlimited Play Pass gives you the freedom to explore different themes, discover your favorite game style, and enjoy the excitement at your own pace.",
    },
    {
      id: 3,
      title: "TEENAGERS / YOUNG ADULTS",
      icon: {
        hasImage: true,
        alt: "Allinadventures unlimited play pass kids young adult",
        url: "/assets/unlimited-escape-room/icon/kids-young-adult.svg",
      },
      description:
        "Keep the kids entertained and the teens excited! From birthday parties to weekend fun, the Unlimited Play Pass is the ultimate ticket to endless adventures they'll love.",
    },
    {
      id: 4,
      title: "FAMILY AND FRIENDS",
      icon: {
        hasImage: true,
        alt: "Allinadventures unlimited play pass familly and friends ",
        url: "/assets/unlimited-escape-room/icon/familly-and-friends.svg",
      },
      description:
        "Bring your family and friends together for exciting, screen-free fun! With unlimited games, every visit is an opportunity for shared laughs, teamwork, and adventure.",
    },
    {
      id: 5,
      title: "CORPORATE TEAM BUILDING",
      icon: {
        hasImage: true,
        alt: "Allinadventures unlimited play pass corporate team building",
        url: "/assets/unlimited-escape-room/icon/corporate-team-building.svg",
      },
      description:
        "Boost teamwork, communication, and morale with unlimited access to our escape rooms. Perfect for team-building events that are fun, engaging, and cost-effective.",
    },
    {
      id: 6,
      title: "COUPLES DATE NIGHT",
      icon: {
        hasImage: true,
        alt: "Allinadventures unlimited play pass couple date night",
        url: "/assets/unlimited-escape-room/icon/couple-date-night.svg",
      },
      description:
        "Spice up your date nights with thrilling challenges and collaborative fun. Unlimited escape rooms give you endless opportunities to bond, laugh, and create unforgettable memories.",
    },
  ];
  const gridBorderClassesList = [
    {
      id: 1,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] md:border-r-[#222222] lg:border-r-[#000000]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-2 pb-6 md:pb-8 lg:pb-12",
    },
    {
      id: 2,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] lg:border-x-[#222222]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-2 pb-6 md:pb-8 lg:pb-12",
    },
    {
      id: 3,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] md:border-r-[#222222] lg:border-r-[#000000]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-2 pb-6 md:pb-8 lg:pb-12",
    },
    {
      id: 4,
      borderClasses:
        "mer-wc-list-item border border-[#000000] border-b-[#222222]  lg:border-b-[#000000] pt-0",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-12 pb-6 md:pb-2 lg:pb-6",
    },
    {
      id: 5,
      borderClasses:
        "border-[1px] border-[#000000] border-b-[#222222] md:border-b-[#000000] md:border-r-[#222222] lg:border-x-[#222222]",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-12 pb-6 md:pb-2 md:pb-5 lg:pb-6",
    },
    {
      id: 6,
      borderClasses: "border-none",
      paddingClasses: "pt-4 rm:pt-5 lg:pt-12 pb-6 md:pb-2 md:pb-5 lg:pb-6",
    },
  ];
  const getBoderClassess = (index) => {
    return gridBorderClassesList[index].borderClasses;
  };
  const getPaddingClassess = (index) => {
    return gridBorderClassesList[index].paddingClasses;
  };
  return (
    <div className="mer-why-c bg-black pb-16 pt-0 md:py-20 lg:py-28 px-4 lg:px-12  z-20 ">
      {/*======================= boder img============== */}

      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <MobileTitleSeparatorCenter
            title={"GREAT DEAL FOR ADVENTURE LOVERS"}
          />
          <div className=" text-[#e2e2e2]  mt-3 md:mt-4 lg:mt-6  text-center  md:text-lg lg:text-xl">
            The Unlimited Escape Room Play Pass offers unforgettable fun and
            adventure for everyone of all ages and skill levels
          </div>
        </div>
        {tempData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
            {tempData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={"mer-wc-list-item " + getBoderClassess(index)}
                >
                  <div
                    className={
                      "item-wrapper px-1 rm:px-2 sm:px-6 md:px-8 lg:px-12 " +
                      getPaddingClassess(index)
                    }
                  >
                    <div className="mer-wc-img img-1 flex flex-row items-center space-x-2 sm:flex-col  sm:items-start sm:space-x-0  ">
                      <img
                        className="mer-wc-icon w-[32px] md:w-[36px] 3xl:w-[40px]"
                        alt={
                          item.icon.alt
                            ? item.icon.alt
                            : "Allinadventures offer icon" + index
                        }
                        src={
                          item.icon.hasImage
                            ? item.icon.url
                            : "/assets/mobile-escape-room/icon/convenient-mobile-experience.svg"
                        }
                      ></img>
                      <h3 className=" sm:mt-4 md:mt-5 3xl:mt-6 font-bold text-[17px] rm:text-[18px] md:text-[20px] xl:text-[22px] leading-[1.3] text-[#CA9342]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mar-wv-text ">
                      <div
                        className="text-[#afafaf] mt-3 3xl:mt-4  text-sm 3xl:text-base"
                        dangerouslySetInnerHTML={{ __html: item.description }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <></>
        )}

        {/*=======================Section btn============== */}
        <div className="mbl-h-btn  mt-10 md:mt-14 2xl:mt-16 flex justify-center">
          <UerBtn
            setShowUerBookingList={
              props.setShowUerBookingList ? props.setShowUerBookingList : false
            }
          />
        </div>
      </div>
    </div>
  );
};

export default CreatUnlimitedDeal;
