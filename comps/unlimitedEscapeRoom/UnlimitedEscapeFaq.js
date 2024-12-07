import MegFaqlist from "../mobileEscapeGames/MegFaqlist";
import TitleSeparator from "../util/TitleSeparator";
import SectionBorderBottom from "../util/SectionBorderBottom";
import SectionBorderTop from "../util/SectionBorderTop";
const UnlimitedEscapeFaq = (props) => {
  const tempFaqList = [
    {
      id: 1,
      faqQuestion: "How to purchase your Gift Cards?",
      faqAnswer:
        "Pick your location, choose the amount, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. For physical cards, Visit your local store.",
    },
    {
      id: 2,
      faqQuestion: "How do I redeem the Gift Cards?",
      faqAnswer:
        "Pick your location, choose the amount, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. For physical cards, Visit your local store.",
    },
    {
      id: 3,
      faqQuestion: "Do Gift Cards expire?",
      faqAnswer:
        "Pick your location, choose the amount, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. For physical cards, Visit your local store.",
    },
    {
      id: 4,
      faqQuestion: "Do we need to make a reservation to use a Gift Card?",
      faqAnswer:
        "Pick your location, choose the amount, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. For physical cards, Visit your local store.",
    },
    {
      id: 5,
      faqQuestion: "What happens if I prepay for my reservation in advance?",
      faqAnswer:
        "Pick your location, choose the amount, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. For physical cards, Visit your local store.",
    },
    {
      id: 6,
      faqQuestion:
        "Can I get a physical Gift Card instead of an electronic one?",
      faqAnswer:
        "Pick your location, choose the amount, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. For physical cards, Visit your local store.",
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
            Explore these FAQs to uncover answers to popular questions about All
            In Adventures Gift Cards. If your specific query isn't covered,
            reach us anytime on phone or email.
          </div>
        </div>

        <div className="mer-faq-box max-w-[1000px] mx-auto">
          <MegFaqlist faqList={tempFaqList} />
        </div>
        {/*=======================Section btn============== */}
        <div className="mbl-h-btn  mt-10 md:mt-14 2xl:mt-16 flex justify-center">
          <button className=" px-5 rm:px-6 md:px-8 text-center border inline-block text-[15px] rm:text-[16px] lg:text-[18px] text-white border-red-600 bg-red-600 py-[10px] md:py-3 rounded-full font-medium md:text-lg hover:bg-red-700 hover:border-red-700">
            Get Your Unlimited Play Pass Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default UnlimitedEscapeFaq;
