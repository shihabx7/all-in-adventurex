export default function HowRewardWorks(props) {
  return (
    <div className="reward-work-section bg-[#FFF9EB] bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px] lg:bg-[400px_400px]">
      <div className="section-container max-w-7xl py-16 md:py-20 lg:py-28 px-4 mx-auto">
        <div className="section-head">
          <div className="md:max-w-[600px] lg:max-w-[760px] xl:max-w-[840px] mx-auto">
            <h2 className="dark-gold py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase text-center">
              How it works
            </h2>
          </div>
          <p className="text-[#2e2e2e] md:text-lg lg:text-xl mt-1 md:mt-2 mbl-group-text md:max-w-[720px] lg:max-w-[760] xl:max-w-[920px] mx-auto text-center">
            Just enter your member ID during checkout, play, and get closer to
            your next free experience. It's our way of saying thanks for being
            part of the adventure. Join today and start unlocking your rewards!
          </p>
        </div>
        <div className="section-content  mt-8 md:mt-12 lg:mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/*=====================================================================grid item 1 */}
            <div className="grid-item bg-[#211906] p-7 relative">
              <div className="item-no absolute top-4 right-4 w-[74px]">
                <span className="font-os font-semibold text-[4rem] text-[#F0E8D51A]/10">
                  01
                </span>
              </div>
              <div className="item-text">
                <div className="pt-8">
                  <img
                    className="max-w-[80px]"
                    src="/assets/all-in-rewards/how-it-works/free-sign-up-icon.png"
                    alt="Sign Up free icon"
                  ></img>
                </div>
                <h3 className="font-os text-2xl text-[#F0E8D5] mt-6">
                  SIGN UP FOR FREE
                </h3>
                <p className="md:text-lg lg:text-xl text-[#ADADAD] mt-4">
                  Earn punches on every visit plus enjoy 10% off and 1 free
                  punch during your very first visit!
                </p>
              </div>
            </div>
            {/*=====================================================================grid item 2 */}
            <div className="grid-item  p-6 relative">
              <div className="item-img w-full h-full">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/all-in-rewards/how-it-works/sign-up-free.png"
                  alt="Sign Up free"
                ></img>
              </div>
            </div>
            {/*=====================================================================grid item 3 */}
            <div className="grid-item bg-[#211906] p-7 relative">
              <div className="item-no absolute top-4 right-4 w-[74px]">
                <span className="font-os font-semibold text-[4rem] text-[#F0E8D51A]/10">
                  02
                </span>
              </div>
              <div className="item-text">
                <div className="pt-8">
                  <img
                    className="max-w-[80px]"
                    src="/assets/all-in-rewards/how-it-works/enjoy-offer-icon.png"
                    alt="Enjoy offer icon"
                  ></img>
                </div>
                <h3 className="font-os text-2xl text-[#F0E8D5] mt-6">
                  ENJOY EXCLUSIVE OFFERS
                </h3>
                <p className="md:text-lg lg:text-xl text-[#ADADAD] mt-4">
                  Receive exclusive member-only savings, seasonal promotions,
                  and bonus offers delivered year-round!
                </p>
              </div>
            </div>
            {/*=====================================================================grid item 4 */}
            <div className="grid-item  p-6 relative">
              <div className="item-img w-full h-full">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/all-in-rewards/how-it-works/enjoy-exclusive-offer.png"
                  alt="Enjoy exclusive offers"
                ></img>
              </div>
            </div>
            {/*=====================================================================grid item 5 */}
            <div className="grid-item bg-[#211906] p-7 relative">
              <div className="item-no absolute top-4 right-4 w-[74px]">
                <span className="font-os font-semibold text-[4rem] text-[#F0E8D51A]/10">
                  03
                </span>
              </div>
              <div className="item-text">
                <div className="pt-8">
                  <img
                    className="max-w-[80px]"
                    src="/assets/all-in-rewards/how-it-works/start-earning-icon.png"
                    alt="Sign Up free icon"
                  ></img>
                </div>
                <h3 className="font-os text-2xl text-[#F0E8D5] mt-6">
                  START EARNING
                </h3>
                <p className="md:text-lg lg:text-xl text-[#ADADAD] mt-4">
                  It's simple. After every 2 paid escape room visits, your next
                  adventure experience is completely free!
                </p>
              </div>
            </div>
            {/*=====================================================================grid item 6 */}
            <div className="grid-item  p-6 relative">
              <div className="item-img w-full h-full">
                <img
                  className="w-full h-full object-contain"
                  src="/assets/all-in-rewards/how-it-works/start-earning.png"
                  alt="Start earning"
                ></img>
              </div>
            </div>
          </div>
        </div>
        <div className="section-note pt-8 md:pt-12 lg:mt-16">
          <p className="text-sm md:text-base text-[#374151] text-center">
            *Non-discounted “visits” only. See terms and conditions during
            checkout for full details.
          </p>
        </div>
      </div>
    </div>
  );
}
