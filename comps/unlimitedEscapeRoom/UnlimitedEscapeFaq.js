import MegFaqlist from "../mobileEscapeGames/MegFaqlist";
import TitleSeparator from "../util/TitleSeparator";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
import UerBtn from "./UerBtn";
const UnlimitedEscapeFaq = (props) => {
  const tempFaqList = [
    {
      id: 1,
      faqQuestion: "What is the Unlimited Play Pass?",
      faqAnswer:
        "The Unlimited Play Pass grants you access to an unlimited number of escape room games at All In Adventures locations. You can choose between the Day Pass (valid for one day) or the Annual Pass (valid for one year).",
    },
    {
      id: 2,
      faqQuestion: "How much does the Unlimited Play Pass cost?",
      faqAnswer:
        "<p><b>Day Pass:</b> $50 per person, valid for the day of purchase.</p><p><b>Annual Pass:</b> $79 per person, valid for one year from the date of purchase.</p>",
    },
    {
      id: 3,
      faqQuestion: "Where can I use the Unlimited Play Pass?",
      faqAnswer:
        "You can use the Unlimited Play Pass at any All In Adventures location across the country.",
    },
    {
      id: 4,
      faqQuestion: "Can I share my Unlimited Play Pass with others?",
      faqAnswer:
        "No, the Unlimited Play Pass is non-transferable and is valid only for the person who purchased it.",
    },

    {
      id: 5,
      faqQuestion:
        "Is the Unlimited Play Pass valid for all escape room themes?",
      faqAnswer:
        "Yes! The pass allows you to play an unlimited number of rooms across all the themes available at All In Adventures.",
    },

    {
      id: 6,
      faqQuestion: "Can I purchase the Unlimited Play Pass online?",
      faqAnswer:
        "Yes, you can easily purchase the Unlimited Play Pass online or in-store at any All In Adventures location.",
    },
    {
      id: 7,
      faqQuestion: " Is the Unlimited Play Pass refundable?",
      faqAnswer:
        "No, all sales are final. The pass is non-refundable and cannot be exchanged for cash.",
    },

    {
      id: 8,
      faqQuestion: "Can I upgrade my Day Pass to an Annual Pass?",
      faqAnswer:
        "Unfortunately, Day Passes cannot be upgraded to an Annual Pass. You would need to purchase a new Annual Pass if you wish to have year-long access.",
    },
    {
      id: 9,
      faqQuestion:
        "Can I use the Unlimited Play Pass for special events or group bookings?",
      faqAnswer:
        "The Unlimited Play Pass is valid for regular escape room bookings. For special events or group bookings, please contact the location directly for more details on availability and pricing.",
    },
    {
      id: 10,
      faqQuestion: "How do I get started with my Unlimited Play Pass?",
      faqAnswer:
        "Once you purchase your pass, head to any All In Adventures location, check in with your pass, and start playing your first Mystery Room! You can play as many rooms as you want for the day or year, depending on your pass type.",
    },
  ];
  return (
    <div
      id="gift-faq"
      className="all-faq relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden md:mt-[0px] bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-center bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat"
    >
      {/*======================= boder img============== */}
      <SectionBorderTop />
      <SectionBorderBottom />
      {/*======================= boder img end============== */}
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[720px] lg:max-w-[840px] mx-auto">
          <TitleSeparator title={"FREQUENTLY ASKED QUESTIONS"} />

          <div className="text-[#2E2E2E] mt-3 md:mt-4 lg:mt-6  text-center md:text-lg lg:text-xl">
            Explore the FAQs about the Unlimited Play Pass and get all your
            questions answered.
          </div>
        </div>

        <div className="mer-faq-box max-w-[1000px] mx-auto">
          <MegFaqlist faqList={tempFaqList} />
        </div>
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

export default UnlimitedEscapeFaq;
