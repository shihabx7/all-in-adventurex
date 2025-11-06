import BookingButtonPair from "../mmcomponents/BookingButtonPair";
import OpenMenuButtonPair from "../mmcomponents/OpenMenuButtonPair";
export default function GallerySectionMm({ sectionData,locationSlug,setShowMobileEecapeMenu,setGoMobileEecapeForm}) {
  return (
    <div className="mbl-game-gallery-section bg-[#000000]   ">
      <div className=" egg-section  relative py-16 md:py-20 lg:py-28  overflow-hidden  px-3 md:px-4">
        <div className="section-head-lg     ">
          <div className="section-title  md:max-w-[720px] lg:max-w-[1000px] mx-auto text-center">
            <h2 className="text-[#E0BF62] text-2xl md:text-[40px] lg:text-[44px] 2xl:text-[48px] font-os font-bold uppercase leading-[1.3]">
              Mobile Mystery Gallery
            </h2>
          </div>
        </div>
        {/*=======================================Game gallery  /assets/mobile-escape-room/brown-paper-bg.jpg */}
        <div className="section-bg  mt-6 md:mt-8 xl:mt-8 ">
          <div className="section-container zm:max-w-[580px] md:max-w-[780px] lg:max-w-[960px] xl:max-w-[1160px] 2xl:max-w-[1180px] mx-auto   ">
            {/*=======================================gallery main image*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-5 lg:gap-6 xl:gap-8">
              {sectionData.galleryImageList.map((item, index) => {
                return (
                  <div className="gal-item" key={index}>
                   
                    <img className="max-w-full rounded-lg" src={item.url} alt={item.alt}></img>
                  </div>
                );
              })}
            </div>
          { /*  button pair center */}
                   <div className="card-game-link mt-7 rm:mt-10 md:mt-12 xl:mt-12 ">
                     {locationSlug ? (
                       <div className="flex flex-col md:flex-row justify-center items-center space-y-4 rm:space-y-5 md:space-y-0 md:space-x-5 xl:space-x-6">
                         <BookingButtonPair locationSlug={locationSlug} />
                       </div>
                     ) : (
                       <div className="flex flex-col md:flex-row justify-center items-center space-y-4 rm:space-y-5 md:space-y-0 md:space-x-5 xl:space-x-6">
                         <OpenMenuButtonPair setShowMobileEecapeMenu={setShowMobileEecapeMenu} setGoMobileEecapeForm={setGoMobileEecapeForm}/>
                       </div>
                     )}
                   </div>
          </div>
        </div>
      </div>
    </div>
  );
}
