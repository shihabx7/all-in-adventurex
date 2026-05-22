import UnlockRewardBtn from "./elements/UnlockRewardBtn";

export default function CreateValue(props) {
  const tempData = [
    {
      id: 1,
      title: "FIRST-TIMERS",
      icon: {
        hasImage: true,
        alt: "all in adventures reward value first timer",
        url: "/assets/all-in-rewards/create-value/FIRST-TIMERS.svg",
      },
      description:
        "New to escape rooms? Our rewards program is the perfect, low-pressure way to discover your favorite game style. Explore different rooms at your own pace and enjoy the satisfaction of unlocking a free visit just for trying us out.",
    },
    {
      id: 2,
      title: "FAMILIES AND FRIENDS",
      icon: {
        hasImage: true,
        alt: "all in adventures reward value first timer",
        url: "/assets/all-in-rewards/create-value/FAMILIES-AND-FRIENDS.svg",
      },
      description:
        'Bring the whole group together! Enjoy exciting, screen-free fun that everyone can participate in. ALL IN Rewards makes family outings more affordable, ensuring that every shared laugh and "aha!" moment counts toward a free experience for the group.',
    },
    {
      id: 3,
      title: "TEENAGERS / YOUNG ADULTS",
      icon: {
        hasImage: true,
        alt: "all in adventures reward value first timer",
        url: "/assets/all-in-rewards/create-value/TEENAGERS-YOUNG-ADULTS.svg",
      },
      description:
        "Keep the fun going without breaking the bank! From weekend hangouts to birthday celebrations, ALL IN Rewards is the ultimate way for teens to enjoy more adventures. It's a simple, budget-friendly way to make every visit with friends even more rewarding.",
    },
    {
      id: 4,
      title: "CORPORATE TEAM BUILDING",
      icon: {
        hasImage: true,
        alt: "all in adventures reward value first timer",
        url: "/assets/all-in-rewards/create-value/CORPORATE-TEAM-BUILDING.svg",
      },
      description:
        "Boost morale and communication! Reward your team with a program that makes team-building cost-effective and engaging. ALL IN Rewards allows your office to return for multiple challenges, fostering better teamwork and stronger bonds with every visit.",
    },
    {
      id: 5,
      title: "COUPLES DATE NIGHT",
      icon: {
        hasImage: true,
        alt: "all in adventures reward value first timer",
        url: "/assets/all-in-rewards/create-value/COUPLES-DATE-NIGHT.svg",
      },
      description:
        'Spice up your date nights! Trade the "dinner and a movie" routine for collaborative fun and unique challenges. ALL IN Rewards gives you more opportunities to bond, laugh, and unlock a free date night adventure together.',
    },
    {
      id: 6,
      title: "ESCAPE ROOM ENTHUSIASTS",
      icon: {
        hasImage: true,
        alt: "all in adventures reward value first timer",
        url: "/assets/all-in-rewards/create-value/ESCAPE-ROOM-ENTHUSIASTS.svg",
      },
      description:
        "Love solving puzzles and cracking codes? With ALL IN Rewards, your passion for puzzles pays off. It's the best way to master all of our themes and sharpen your skills while working toward your next free adventure!",
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
    <div className="mer-why-c bg-black py-16  md:py-20 lg:py-28 px-4 lg:px-12  z-20 ">
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <h2 className="dark-gold pb-2 pt-0 md:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase text-center">
            GREAT VALUE FOR ALL PLAYERS
          </h2>
          <div className=" text-[#e2e2e2]  mt-2 md:mt-3 lg:mt-4  text-center  md:text-lg lg:text-xl">
            Just enter your member ID during checkout, play, and get closer to
            your next free experience. It's our way of saying thanks for being
            part of the adventure. Join today and start unlocking your rewards!
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
                        className="mer-wc-icon max-h-[45px]"
                        alt={
                          item.icon.alt
                            ? item.icon.alt
                            : "Allinadventures reward value icon" + index
                        }
                        src={
                          item.icon.hasImage
                            ? item.icon.url
                            : "/assets/mobile-escape-room/icon/convenient-mobile-experience.svg"
                        }
                      ></img>
                      <h3 className=" sm:mt-4 md:mt-5 3xl:mt-6 font-bold text-[17px] rm:text-[18px] md:text-[20px] xl:text-[22px] leading-[1.3] text-[#F0E8D5]">
                        {item.title}
                      </h3>
                    </div>
                    <div className="mar-wv-text ">
                      <div
                        className="text-[#ADADAD] mt-3 3xl:mt-4  text-sm 3xl:text-base"
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
            <div className="w-[372px]">
          <UnlockRewardBtn />
          </div>
        </div>
      </div>
    </div>
  );
}
