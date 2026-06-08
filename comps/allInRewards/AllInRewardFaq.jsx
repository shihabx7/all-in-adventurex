import MegFaqlist from "../mobileEscapeGames/MegFaqlist";
export default function AllInRewardFaq(props) {
  const tempFaqList = [
    {
      id: 1,
      faqQuestion: "What does it cost to join?",
      faqAnswer:
        "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
    },
    {
      id: 2,
      faqQuestion: 'How do I earn "Punches" on my digital card?',
      faqAnswer:
        "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
    },
    {
      id: 3,
      faqQuestion: "Do my rewards work at all locations?",
      faqAnswer:
        "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
    },
    {
      id: 4,
      faqQuestion: 'How do I redeem my "Free" reward?',
      faqAnswer:
        "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
    },

    {
      id: 5,
      faqQuestion:
        "Can I use additional discounts on top of my membership discounts?",
      faqAnswer:
        "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
    },

    {
      id: 6,
      faqQuestion: "Do my monthly and seasonal offers expire?",
      faqAnswer:
        'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
    },
    {
      id: 7,
      faqQuestion: "Does every game count toward my punches?",
      faqAnswer:
        "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
    },

    {
      id: 8,
      faqQuestion: "What happens if I have to cancel?",
      faqAnswer:
        "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
    },
    {
      id: 9,
      faqQuestion: "Does the Member actually have to be there?",
      faqAnswer:
        "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
    },
  ];
  return (
    <div
      id="rewards-faq"
      className="rew-faq relative  py-16 md:py-24 lg:py-32 px-4 overflow-hidden bg-[#FFF9EB] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px] bg-repeat "
    >
      <div className="max-w-7xl mx-auto relative z-30">
        <div className="section-title mb-6 rm:mb-8 md:mb-10 lg:mb-12  md:max-w-[660px] lg:max-w-[700px] mx-auto">
          <h2 className="dark-gold py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <div className="text-[#2E2E2E] mt-1 md:mt-2  text-center md:text-lg lg:text-xl lg:max-w-[480px] mx-auto">
            Browse through these FAQs to find answers to commonly raised
            questions.
          </div>
        </div>

        <div className="mer-faq-box max-w-[860px] mx-auto">
          <MegFaqlist faqList={tempFaqList} />
        </div>
        {/*=======================Section btn============== */}
      </div>
    </div>
  );
}
