import React from "react";
import TitleSeparator from "../util/TitleSeparator";
import GiftBigBtn from "./GiftBigBtn";
function GiftVenGram(props) {
  return (
    <div className="gift-venn  overflow-hidden md:mt-[0px] bg-[#FFF9EB] bg-[url('/assets/svg/pattern/venn-diagram-background-pattern.svg')] bg-[length:500px_500px] bg-repeat">
      <div className="gift-venn-container-wrapper max-w-7xl mx-auto py-16 md:py-24 lg:py-32 px-4 md:px-8">
        <div className="gsvenn-container ">
          <div className="sec-title gs-title max-w-[768px] mx-auto">
            <TitleSeparator
              title="THE GIFT THAT EVERYONE WILL LOVE"
              color="dark-gold"
              weight="font-bold"
            />
            <p className="text-lg text-[#2e2e2e] mt-2 text-center">
              Escape room gift cards are the <b>universal perfect gift, </b>
              proven by mathematics. 😁
            </p>
          </div>
          <div className="gsvenn-box-container flex justify-center mt-8 md:mt-12 ">
            <div className="max-w-[600px]">
              <img src="/assets/gift-images/venn-diagram.png"></img>
            </div>
          </div>
          <div className="sec-btn ss-btn  mt-12 md:mt-16">
            <p className="text-[#4A2F03] text-xl text-center">
              Still on the fence?
            </p>
            <div className="flex  justify-center mt-4">
              <GiftBigBtn
                title="BUY GIFT CARDS WITH CONFIDENCE"
                setShowGiftBookingList={
                  props.setShowGiftBookingList
                    ? props.setShowGiftBookingList
                    : false
                }
                bookingData={props.bookingData ? props.bookingData : false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GiftVenGram;
