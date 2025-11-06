import BookingButtonPairBlack from "../mmcomponents/BookingButtonPairBlack";
import OpenMenuButtonPairBlack from "../mmcomponents/OpenMenuButtonPairBlack";


export default function AboutSectionMm({
  locationName,
  locationSlug,
  setShowMobileEecapeMenu,
  setGoMobileEecapeForm,
}) {
  return (
    <div className="mer-hero bg-[#FFF9EB]   bg-[url('/assets/mobile-escape-room/brown-paper-bg.jpg')] bg-[240px_240px] md:bg-[300px_300px]  lg:bg-[400px_400px]">
      <div className="mbl-h-container max-w-7xl mx-auto px-3 rm:px-4 py-16 md:py-20 lg:py-28">
        {/* =====================++++section row 1++++=====================*/}
        <div className="mbl-row flex flex-col lg:flex-row jsutify-between  space-x-0 lg:space-x-2 xl:space-x-6 items-center">
          <div className="mbl-col w-full lg:min-w-[500px] xl:min-w-[640px] order-2 lg:order-1">
            {/* ==================section title=====================*/}
            <div className="md:max-w-[80%] lg:max-w-[100%]">
              <h2 className="text-[#CA9342] py-[2px] md:py-1 2xl:py-2 text-2xl md:text-[40px] xl:text-[44px] 2xl:text-[48px] leading-[1.2] font-os font-bold uppercase ">
                ALL THE FUN IN YOUR PLACE
              </h2>
            </div>

            {/* ==================text   __html: experienceSectionData.descriptionOne, =====================*/}
            <div className="text-[#2e2e2e] md:text-lg  mbl-h-list mt-2 md:mt-6 mbl-group-text">
              <p>
                Bring high-energy entertainment to your event without the
                stress. Our interactive, on-site Mobile Mystery experiences
                transform ordinary spaces into unforgettable adventures—complete
                with interesting props, engaging storylines, and seamless setup.
              </p>
              <p>
                Whether you're hosting a school field trip, company retreat,
                church function, or birthday bash, we deliver a crowd-pleasing
                activity that sparks teamwork, creativity, and excitement. All
                you need is the space—we handle the rest.
              </p>
            </div>
            {/* ==================button=====================*/}
            <div className="mbl-h-btn flex flex-col md:flex-row space-y-5 rm:space-y-6 md:space-y-0 md:space-x-6 justify-center items-center md:justify-start mt-5 md:mt-10 2xl:mt-12">
              {locationSlug ? (
                <BookingButtonPairBlack locationSlug={locationSlug} />
              ) : (
                <OpenMenuButtonPairBlack
                  setShowMobileEecapeMenu={setShowMobileEecapeMenu}
                  setGoMobileEecapeForm={setGoMobileEecapeForm}
                />
              )}
            </div>
          </div>
          <div className="mbl-col w-full lg:w-auto flex-grow order-1 lg:order-2 mb-6 md:mb-8 lg:mb-0">
            <div className="mbl-h-img text-center">
              <img
                className="w-full"
                alt={"Allinadventures mobile escape room experience "}
                src={
                  "/assets/mobile-escape-room/experience-adventure-everywhere.png"
                }
              ></img>
            </div>
          </div>
        </div>

        {/* ==================Gallery=====================*/}

        {/* ==================+++partner section row    +++=====================*/}
      </div>
    </div>
  );
}
