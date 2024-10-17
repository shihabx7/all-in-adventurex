import React from "react";
import TitleSeparator from "../util/TitleSeparator";
import GiftGnBtn from "./GiftGnBtn";
function GiftEffect(props) {
  return (
    <div className="gift-spoton gift-pattern bg-black">
      <div className="gift-spoton-container-wrapper max-w-7xl mx-auto py-16 md:py-24 lg:py-32 pl-3 pr-5 md:px-8">
        <div className="gs-container ">
          {/*====================section title==============*/}
          <div className="sec-title gs-title max-w-[600px] mx-auto">
            <TitleSeparator title="THE ALL IN ADVENTURES GIFT CARD EFFECT" />
          </div>
          <div className="gs-box-container flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-6   lg:space-x-0 lg:space-y-0 lg:justify-between mt-8 md:mt-12 flex-wrap">
            {/*==============================================box column 1==============*/}
            <div className="gift-effect-box-col w-full md:max-w-[47%] lg:max-w-[31%] bg-[#FFF9EB]  relative rounded-[30px] ">
              {/*====================box column border==============*/}
              <div className="bg-or p-3 absolute z-[10] w-full h-full top-0 left-0 ">
                <div className="border-dashed border-2 border-[#CEB67E] relative w-full h-full rounded-[30px]"></div>
              </div>
              {/*====================box column bg-img==============*/}
              <div className="br-img absolute bottom-0 right-0 z-[20] w-full h-full">
                <div className="gbr relative w-full h-full">
                  <img
                    className="gift-ribbon absolute bottom-[4px] left-0 right-0 max-w-[90%] mx-auto"
                    src="/assets/gift-images/effect/Confetti-bottom.svg"
                    alt="Escape room gift card from All In Adventures, decorated with festive confetti, a perfect present for adventure seekers."
                  ></img>
                  <img
                    className="gift-ribbon absolute bottom-[8px] left-[8px] right-0 max-w-[44px] "
                    src="/assets/gift-images/effect/Rocket-left.svg"
                    alt="rocket icon"
                  ></img>
                  <img
                    className="gift-ribbon absolute  bottom-0 right-0 max-w-[50px] "
                    src="/assets/gift-images/effect/Ballon-right.svg"
                    alt="Gift card for All In Adventures escape room featuring a colorful balloon design, perfect for thrilling experiences."
                  ></img>
                </div>
              </div>

              <div className="gs-content-container relative z-[30] px-6 py-6">
                <div className="geft-img">
                  <img
                    className="rounded-[30px]"
                    src="/assets/gift-images/effect/all-in-adventure-dubbed-agift-genius.jpg"
                    alt="All In Adventures escape room gift card, ideal for fun challenges and memorable group experiences."
                  ></img>
                </div>
                <div className="geft-content mt-2">
                  <h3 className="text-[#CA9342] font-os font-bold text-[24px] text-center">
                    DUBBED A GIFTING GENIUS!
                  </h3>
                  <p className="text-[#4A2F03] text-center mt-2">
                    This year, I decided to go for something different and
                    gifted All In Adventures Gift Cards to friends, family, and
                    even colleagues. The reactions were amazing! The experiences
                    they had were so unique that I was dubbed a gifting genius.
                    It truly added a special touch to our holiday season.
                  </p>
                </div>
                <div className="geft-star mt-6">
                  <img
                    className="w-[150px] mx-auto"
                    src="/assets/gift-images/effect/five-star.svg"
                    alt="Five star icon"
                  ></img>
                  <p className="text-center text-[#A17F47] mt-1">Andrea B.</p>
                </div>
              </div>
            </div>
            {/*====================box column 2==============*/}
            <div className="gift-effect-box-col w-full md:max-w-[47%] lg:max-w-[31%] bg-[#FFF9EB]  relative rounded-[30px] ">
              {/*====================box column border==============*/}
              <div className="bg-or p-3 absolute z-[10] w-full h-full top-0 left-0 ">
                <div className="border-dashed border-2 border-[#CEB67E] relative w-full h-full rounded-[30px]"></div>
              </div>
              {/*====================box column bg-img==============*/}
              <div className="br-img absolute bottom-0 right-0 z-[20] w-full h-full">
                <div className="gbr relative w-full h-full">
                  <img
                    className="gift-ribbon absolute bottom-[4px] left-0 right-0 max-w-[90%] mx-auto"
                    src="/assets/gift-images/effect/Confetti-bottom.svg"
                    alt="All In Adventures escape room gift card adorned with vibrant confetti, ideal for gifting an exciting adventure."
                  ></img>
                  <img
                    className="gift-ribbon absolute bottom-[8px] left-[8px] right-0 max-w-[44px] "
                    src="/assets/gift-images/effect/Rocket-left.svg"
                    alt="Rocket icon"
                  ></img>
                  <img
                    className="gift-ribbon absolute  bottom-0 right-0 max-w-[50px] "
                    src="/assets/gift-images/effect/Ballon-right.svg"
                    alt="Gift card for All In Adventures escape room featuring a colorful balloon design, perfect for thrilling experiences."
                  ></img>
                </div>
              </div>

              <div className="gs-content-container relative z-[30] px-6 py-6">
                <div className="geft-img">
                  <img
                    className="rounded-[30px]"
                    src="/assets/gift-images/effect/all-in-adventure-stress-free-gifting.jpg"
                    alt="A vibrant image capturing the essence of stress-free gifting, featuring adventurous moments filled with joy and togetherness."
                  ></img>
                </div>
                <div className="geft-content mt-2">
                  <h3 className="text-[#CA9342] font-os font-bold text-[24px] text-center">
                    STRESS-FREE GIFTING!
                  </h3>
                  <p className="text-[#4A2F03] text-center mt-2">
                    The holiday season's last-minute gift distribution was a
                    challenge with our members spanning all over the Northeast.
                    Discovering All In Adventures Gift Cards made bulk gift
                    distribution effortless during the holiday rush. Everyone
                    loved it, and this made me quite popular in the office… XD!
                  </p>
                </div>
                <div className="geft-star mt-6">
                  <img
                    className="w-[150px] mx-auto"
                    src="/assets/gift-images/effect/five-star.svg"
                    alt="Five star icon"
                  ></img>
                  <p className="text-center text-[#A17F47] mt-1">Suzana V.</p>
                </div>
              </div>
            </div>
            {/*====================box column 3==============*/}
            <div className=" gift-effect-box-col-last  md:pt-6 lg:pt-0  w-full md:max-w-[47%] lg:max-w-[31%] ">
              <div className="bg-[#FFF9EB] md:ml-[-24px] lg:-ml-0 gift-effect-box-col relative rounded-[30px] ">
                {/*====================box column border==============*/}

                <div className="bg-or p-3 absolute z-[10] w-full h-full top-0 left-0 ">
                  <div className="border-dashed border-2 border-[#CEB67E] relative w-full h-full rounded-[30px]"></div>
                </div>
                {/*====================box column bg-img==============*/}
                <div className="br-img absolute bottom-0 right-0 z-[20] w-full h-full">
                  <div className="gbr relative w-full h-full">
                    <img
                      className="gift-ribbon absolute bottom-[4px] left-0 right-0 max-w-[90%] mx-auto"
                      src="/assets/gift-images/effect/Confetti-bottom.svg"
                    ></img>
                    <img
                      className="gift-ribbon absolute bottom-[8px] left-[8px] right-0 max-w-[44px] "
                      src="/assets/gift-images/effect/Rocket-left.svg"
                    ></img>
                    <img
                      className="gift-ribbon absolute  bottom-0 right-0 max-w-[50px] "
                      src="/assets/gift-images/effect/Ballon-right.svg"
                    ></img>
                  </div>
                </div>

                <div className="gs-content-container relative z-[30] px-6 py-6">
                  <div className="geft-img">
                    <img
                      className="rounded-[30px]"
                      alt="all in adventure Gift Cards beyond just a gift"
                      src="/assets/gift-images/effect/all-in-adventure-beyond-just-a-gift.jpg"
                    ></img>
                  </div>
                  <div className="geft-content mt-2">
                    <h3 className="text-[#CA9342] font-os font-bold text-[24px] text-center">
                      BEYOND JUST A GIFT!
                    </h3>
                    <p className="text-[#4A2F03] text-center mt-2">
                      I gave an All In Adventures Gift Card to a friend, and it
                      turned out to be a real treat! The recipient invited me to
                      join during the game, and we had a blast! We shared
                      laughs, solved puzzles, and built a lifelong bond. It's
                      beyond just a gift; it's a gateway to unforgettable
                      moments and connections.
                    </p>
                  </div>
                  <div className="geft-star mt-6">
                    <img
                      className="w-[150px] mx-auto"
                      src="/assets/gift-images/effect/five-star.svg"
                    ></img>
                    <p className="text-center text-[#A17F47] mt-1">
                      Eveline G.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sec-btn ss-btn flex justify-center mt-12 md:mt-16">
            <GiftGnBtn
              setShowGiftBookingList={
                props.setShowGiftBookingList
                  ? props.setShowGiftBookingList
                  : false
              }
              giftBooking={props.giftBooking ? props.giftBooking : false}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftEffect;
