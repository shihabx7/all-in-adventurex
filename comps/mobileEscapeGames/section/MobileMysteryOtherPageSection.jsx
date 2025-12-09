import MobileTitleSeparatorLeft from "../MobileTitleSeparatorLeft";
import OpenMenuButtonPair from "../mmcomponents/OpenMenuButtonPair";
import BookingButtonPair from "../mmcomponents/BookingButtonPair";

export default function MobileMysteryOtherPageSection({
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
}) {
  const iconList = [
    {
      id: 1,
      text: "Kid and family-friendly experience, perfect for all ages",
    },
    {
      id: 2,
      text: "Great for team-building, parties and special events",
    },
    {
      id: 3,
      text: "Experience anywhere—office, classroom, church or indoor/outdoor",
    },
    {
      id: 4,
      text: "No transportation hassle, no logistical challenges",
    },
    {
      id: 5,
      text: "No waiver signs are required for kids",
    },
  ];

  return (
    <>
      <div className="mbl-h mbe-root">
        <div className="mbl-h-container max-w-7xl mx-auto py-16 md:py-28 2xl:py-32 px-4 md:px-4 lg:px-4 xl:px-6 2xl:px-4">
          <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-10 2xl:space-x-16 items-center md:px-8 lg:px-0">
            <div className="mbl-col w-full lg:w-1/2 order-2 lg:order-1">
              {/* ==================section title=====================*/}
              <div className="section-title-container xl:pl-4 2xl:pl-0">
                <div className="md:max-w-[76%] lg:max-w-[100%]">
                  <MobileTitleSeparatorLeft
                    title={"EXPERIENCE OUR MOBILE MYSTERY ROOMS"}
                    label={"NEW"}
                    fontRM="3xl"
                  />
                </div>

                <div className="text-slate-100 md:text-lg mt-2">
                  <p>
                    Looking for a fun, hassle-free way to level up your next
                    event? Bring the adventure to you with our one-of-a-kind
                    mobile escape room experience! Whether it's a school event,
                    team-building day, church gathering, or private party, we
                    deliver the thrill, puzzles, and excitement right to your
                    location. No setup is needed—just step inside and let the
                    fun begin!
                  </p>
                </div>
              </div>
              {/* ==================icon list=====================*/}
              <div className="text-slate-100 mbl-h-list mt-5 ml-1 md:ml-4">
                {iconList.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="icon-row flex space-x-2 md:spaxe-x-3 my-3 2xl:my-3 w-full"
                    >
                      <span className="mt-[5px] md:mt-[5px] w-[6px] h-[6px] md:w-[8px] md:h-[8px] rounded-full bg-[#CA9342] "></span>
                      <div
                        className="md:text-lg xl:text-base flex-1"
                        style={{ lineHeight: 1.3 }}
                      >
                        {item.text}
                      </div>
                    </div>
                  );
                })}
               
              </div>
               <div className="learn-mm mt-4 zm:mt-4 lg:mt-4">
                  {
                    locationSlug? ( <p className=" inline-block md:text-lg text-slate-100 ">To learn more about Mobile Mystery <a className="text-red-500 hover:text-red-600 transition-colors duration-300 ease-in-out" href={`/${locationSlug}/activities/mobile-escape-room`}>Click Here</a></p> ):(  <p className="inline-block text-slate-100 md:text-lg">To learn more about Mobile Mystery <a className="text-red-500 hover:text-red-600 transition-colors duration-300 ease-in-out"  href={`/mobile-escape-room`}>Click Here</a></p>)
                  }
                
                </div>
              {/* ==================button=====================*/}
              <div className="mbl-h-btn flex flex-col md:flex-row space-y-5 rm:space-y-6 md:space-y-0  md:space-x-6 justify-center items-center md:justify-start mt-8 md:mt-7">
                {locationSlug ? (
                  <BookingButtonPair locationSlug={locationSlug} />
                ) : (
                  <OpenMenuButtonPair
                    setShowMobileEecapeMenu={setShowMobileEecapeMenu}
                    setGoMobileEecapeForm={setGoMobileEecapeForm}
                  />
                )}
              </div>
            </div>
            <div className="mbl-col w-full lg:w-1/2 order-1 lg:order-2 mt-3 md:mt-0 mb-6 md:mb-8 lg:mb-0">
              <div className="mbl-h-img">
                <img
                  alt={"Allinadventures mobile escape room"}
                  src={
                    "/assets/mobile-escape-room/all-in-adventures-mobile-mystery-room-experience.jpg"
                  }
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
