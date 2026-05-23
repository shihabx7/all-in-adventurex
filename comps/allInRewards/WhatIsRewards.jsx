import UnlockRewardBtn from "./elements/UnlockRewardBtn";
export default function WhatIsRewards(props) {
  return (
    <div className="what-is-rewards-section bg-[#090909]">
      <div className="section-container max-w-[740px] lg:max-w-7xl mx-auto py-16 md:py-20 lg:py-28 px-4">
        <div className="section-content flex flex-col lg:flex-row space-y-10 md:space-y-14 lg:space-y-0 justify-between items-center ">
          <div className="text-content lg:max-w-[420px]">
            <div className="text-center lg:text-left">
              <p className="text-red-700 md:text-xl lg:text-2xl ">The Program</p>
              <h2 className="text-2xl rm:text-[1.75rem]  md:text-[2.5rem] lg:text-[2.875rem] leading-[1.2] font-os font-bold text-[#E0BF62]  lg:mt-1">
                <span className="text-[#F0E8D5] block">WHAT IS</span>
                <span className="block">ALL IN REWARDS?</span>
              </h2>
              <p className="text-white xl:text-lg mt-3 md:mt-4 lg:mt-6 max-w-[640px] mx-auto lg:mx-0 lg:max-w-max">
                Your invitation to more fun and even more value. Designed for
                friends, families, and puzzle-lovers — it's the easiest way to
                make every visit to All In Adventures count. Join a community of
                players who get the most out of every escape!
              </p>
            </div>

            <div className="booking-btn md:max-w-[360px] mx-auto lg:mx-0 mt-6 md:mt-8 lg:mt-10">
              <UnlockRewardBtn />
            </div>
          </div>
          {/*=====================================================content-box */}
          <div className="text-content lg:max-w-[672px] flex flex-col space-y-8">
            <div className="wr-box p-4 md:p-5 lg:p-7 border-l-[3px] border-[#8A7133] bg-gradient-to-r from-[#19160E] via-[#19160E]/10 to-transparent">
              <h3 className="font-os text-[#F0E8D5] text-xl md:text-2xl font-semibold">
                All In Rewards
              </h3>
              <p className="text-[#ADADAD] mt-2 md:mt-3 lg:mt-4">
                All In Rewards is your invitation to more fun and even more
                value. Designed for friends, families, and puzzle-lovers, it's
                the easiest way to make every visit to All In Adventures count.
                Join a community of players who get the most out of every
                escape!
              </p>
            </div>
            <div className="wr-box p-4 md:p-5 lg:p-7 border-l-[3px] border-[#8A7133] bg-gradient-to-r from-[#19160E] via-[#19160E]/10 to-transparent">
              <h3 className="font-os text-[#F0E8D5] text-xl md:text-2xl font-semibold">
                Unlock your free visit!
              </h3>
              <p className="text-[#ADADAD] mt-2 md:mt-3 lg:mt-4">
                Our program is simple: Each player in your group counts as 1
                punch. After just 5 punches, your next one is on us! No points
                to track and no complicated rules—just 5 punches, and your next
                admission is completely free.
              </p>
            </div>
            <div className="wr-box p-4 md:p-5 lg:p-7 border-l-[3px] border-[#8A7133] bg-gradient-to-r from-[#19160E] via-[#19160E]/10 to-transparent">
              <h3 className="font-os text-[#F0E8D5] text-xl md:text-2xl font-semibold">
                Experience the perks all year long!
              </h3>
              <p className="text-[#ADADAD] mt-2 md:mt-3 lg:mt-4">
                Beyond your free rooms, members receive exclusive bonus offers
                and seasonal surprises delivered throughout the year. It's the
                perfect way for any group to stay connected to the fun and keep
                the adventure going for less.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
