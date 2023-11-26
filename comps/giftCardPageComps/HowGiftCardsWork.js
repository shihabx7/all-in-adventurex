import TitleSeparator from "../util/TitleSeparator";
import GiftGnBtn from "./GiftGnBtn";
const HowGiftCardsWork = (props) => {
  return (
    <div className="hwgift-works bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24 lg:py-32">
        <div className="hwgift-container">
          {/*==============Section Title============= */}
          <div className="sec-title gs-title max-w-[768px] mx-auto">
            <TitleSeparator
              title="HOW OUR GIFT CARDS WORK"
              color="text-gold"
              weight="font-bold"
            />
            <p className="text-lg text-white mt-2 text-center">
              Get your All In Adventures Gift Cards in 3 simple steps
            </p>
          </div>
          {/*==============Section Title end============= */}
          {/*==============Section mid content ============= */}
          <div className="hwgift-content flex flex-col lg:flex-row justify-between items-center mt-8">
            <div className="hwgift-img w-full lg:max-w-[42%]">
              <img src="/assets/gift-images/how-it-work-all-in-adventures-gift-card.png"></img>
            </div>
            <div className="hwgift-content-box w-full lg:max-w-[52%] mt-6 md:mt-8 lg:mt-0">
              <div className="hwgift-item my-6">
                <h3 className="text-gold font-medium text-[24px] md:text-[28px]">
                  Choose Your Gift Card
                </h3>
                <p className="text-white md:text-lg mt-1 md:mt-2">
                  Set the mood by choosing from the 2 color themes, Black or
                  Golden. Get to tailor your gift according to your desired
                  monetary value.
                </p>
              </div>
              <div className="hwgift-item my-6">
                <h3 className="text-gold font-medium text-[24px] md:text-[28px]">
                  Add Your Personalized Message
                </h3>
                <p className="text-white md:text-lg mt-1 md:mt-2">
                  Insert a custom personalized message and let your gift
                  recipient know just how thoughtful and caring you are.
                </p>
              </div>
              <div className="hwgift-item my-6">
                <h3 className="text-gold font-medium text-[24px] md:text-[28px]">
                  Instant Digital Delivery
                </h3>
                <p className="text-white md:text-lg mt-1 md:mt-2">
                  Input recipient name and email to have it delivered instantly
                  to the inbox without any hassle. Zip, zap, zoom! Simple,
                  speedy, and oh-so-fun!
                </p>
              </div>
              <div className="hwgift-item mt-12">
                <GiftGnBtn
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
          {/*==============Section mid content end============= */}
        </div>
        {/*==============Section bottom content ============= */}
        <div className="whwgift-bottom mt-8 md:mt-12">
          <p className="text-[#ADADAD] md:text-lg italic">
            <span className="text-gold">Easy to Redeem :</span> Gift card
            holders can redeem the card online at allinadventures.com or
            directly in-store where the Gift Card was purchased. Contact us
            directly at your local All In Adventures store or call our customer
            service team at{" "}
            <a
              className="text-red-600 hover:text-red-700"
              href="tel:844-502-5546"
            >
              844-502-5546
            </a>{" "}
            to redeem it over the phone.
          </p>
        </div>
        {/*==============Section bottom content end============= */}
      </div>
    </div>
  );
};
export default HowGiftCardsWork;
