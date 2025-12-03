import React from "react";

function GiftHeroBtn({ giftBooking, setShowGiftBookingList }) {
  const handleClick = (giftBooking) => {
    if (!giftBooking) {
      setShowGiftBookingList(true);
      const body = document.getElementsByTagName("body")[0];
      body.classList.add("overflow-hidden");
    } else {
      bookGift(giftBooking);
    }
  };
  const bookGift = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "no",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
  return (
    <div className="gift-hero-btn">
      <button
        onClick={() => {
          handleClick(giftBooking);
        }}
        className="bg-red-600 hover:bg-red-700 text-left text-[18px] font-medium rounded-full text-white  w-[248px] pl-[32px] py-4 relative"
      >
        BUY GIFT CARDS
        <div className="absolute max-w-[76px] bottom-0 right-[-26px]">
          <img
            className="w-[76px] h-[76px]"
            src="/assets/gift-images/hero/Gift-box-icon-for-Primary-CTA.svg"
            alt="Icon of a gift box, symbolizing adventure and excitement, featuring a decorative ribbon and a vibrant design."
          ></img>
        </div>
      </button>
    </div>
  );
}

export default GiftHeroBtn;
