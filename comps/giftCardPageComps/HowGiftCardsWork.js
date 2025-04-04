import TitleSeparator from "../util/TitleSeparator";
import SectionTitleCenter from "./SectionTitleCenter";
import GiftGnBtn from "./GiftGnBtn";
const HowGiftCardsWork = (props) => {
  return (
    <div className="hwgift-works bg-black">
      <div className="max-w-[700px] lg:max-w-7xl mx-auto px-4 rm:px-5 pt-16 md:pt-24 lg:pt-28">
        <div className="hwgift-container">
          {/*==============Section Title============= */}
          <div className="sec-title gs-title max-w-[768px] mx-auto">
            <div className="">
              <SectionTitleCenter textColor={"#E0BF62"} title="HOW OUR GIFT CARDS WORK" />
            </div>
            <p className="text-lg text-white mt-1 lg:mt-2 text-center">
              Get your All In Adventures Gift Cards in 3 simple steps
            </p>
          </div>
          {/*==============Section Title end============= */}
          {/*==============Section mid content ============= */}
          <div className="hwgift-content flex flex-col lg:flex-row justify-between items-center mt-8">
            <div className="hwgift-img w-full max-w-[460px] lg:max-w-[42%]">
              <img src="/assets/gift-images/how-it-work-all-in-adventures-gift-card.png"></img>
            </div>
            <div className="hwgift-content-box w-full lg:max-w-[52%] mt-6 md:mt-8 lg:mt-0">
              <div className="hwgift-item my-6">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[28px]">
                  Choose Your Gift Card Amount
                </h3>
                <p className="text-white md:text-lg mt-1 md:mt-2">
                  Pick from $25, $50, $100, or set a custom amount—there's no limit to your gifting!
                </p>
              </div>
              <div className="hwgift-item my-6">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[28px]">
                  Personalize Your Gift </h3>
                <p className="text-white md:text-lg mt-1 md:mt-2">
                  Add a heartfelt message to make your gift extra special for the recipient.
                </p>
              </div>
              <div className="hwgift-item my-6">
                <h3 className="text-[#E0BF62] font-medium text-[24px] md:text-[28px]">
                  Instant Digital Delivery
                </h3>
                <p className="text-white md:text-lg mt-1 md:mt-2">
                  Enter the recipient's email, and your gift card will be delivered instantly—quick, easy, and hassle-free!
                </p>
              </div>
              <div className="hwgft-btn hwgift-item mt-12">
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
          {/*==============Section mid content end============= */}
        </div>

        {/*==============Section bottom content ============= */}
        <div className="whwgift-bottom mt-8 md:mt-12">
          <p className="text-[#ADADAD] md:text-lg italic">
            <span className="text-gold">Easy to Redeem :</span> Escape Room Gift cards can be redeemed online at <a
              className="text-red-600 hover:text-red-700"
              href="/"
            >allinadventures.com</a> or in-store. Need help? Call {" "}
            <a
              className="text-red-600 hover:text-red-700"
              href="tel:+1 844-502-5546"
            >
              +1 844-502-5546
            </a>{" "}
            for assistance.
          </p>
        </div>
        {/*==============Section bottom content end============= */}
      </div>
    </div>
  );
};
export default HowGiftCardsWork;
