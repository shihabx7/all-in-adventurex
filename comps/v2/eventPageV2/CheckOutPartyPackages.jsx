import { FaPhone, FaEnvelope } from "react-icons/fa6";
import PartyPackageListBox from "./elements/PartyPackageListBox";
import PartyPackageInfoChecklist from "./elements/PartyPackageInfoChecklist";
import CateringInfo from "./elements/CateringInfo";
import CancellationInfo from "./elements/CancellationInfo";
import BlueDarkDecorBg from "./elements/BlueDarkDecorBg";
//import PartyPackageBookingBtn from "./elements/partyPackageBookingBtn";
import PartyFormBookingBtn from "./elements/PartyFormBookingBtn";
import { useSiteData } from "../../../contexts/SiteDataContext";
import BigPackageInfo from "./elements/BigPackageInfo";
export default function CheckOutPartyPackages(props) {
  const { openModalMenu, setModalPartyName, setModalMenuType } = useSiteData();
  //activeModalMenuType= location-links | game-list | game | partyPackage-list | partyPackage-form | BookPatryPackage | gift-card | mobile-mystery |unlimited-play-pass | bundle
  const showPartyBookingModal = (partyName) => {
    const body = document.getElementsByTagName("body")[0];
    body.classList.remove("overflow-hidden");
    let activePartyName = partyName.trim().toLowerCase();
    setModalPartyName(activePartyName);
    setModalMenuType("BookPatryPackage");
    openModalMenu();
  };

  const partyPackageBooking = (bookingData) => {
    FH.open({
      shortname: bookingData.shortName,
      fallback: "simple",
      fullItems: "yes",
      flow: bookingData.flow,
      view: { item: bookingData.itemNo },
    });
  };
  return (
    <div
      id="book-party-pacakages"
      className="checkout-party-section bg-[#090909] relative"
    >
      {/*========================================================background ===*/}
      <div className="blue-dark-gradient-bg w-full h-full absolute top-0 left-0">
        <BlueDarkDecorBg />
      </div>
      {/*========================================================content ===*/}
      <div className="section-wrapper relative z-10">
        <div className="section-container md:max-w-[900px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-3 rm:px-4 xl:px-8 mx-auto">
          {/*=============================================================================================================================section heading===*/}
          <div className="section-head max-w-[940px] ">
            <h2 className="text-white   text-2xl md:text-[2.5rem] 2xl:text-[2.875rem] leading-[1.2] font-os font-bold uppercase ">
              {props.sectionData.title
                ? props.sectionData.title
                : "CHECK OUT OUR PARTY PACKAGES"}
            </h2>
            {props.sectionData.descriptionHtml && (
              <div
                className="text-[#B5B5B5] flex flex-col space-y-4 md:space-y-5 mt-4 md:mt-5 md:text-lg lg:text-xl"
                dangerouslySetInnerHTML={{
                  __html: props.sectionData.descriptionHtml,
                }}
              ></div>
            )}
            {!props.sectionData.descriptionHtml && (
              <div className="text-[#B5B5B5] flex flex-col space-y-4 md:space-y-5 mt-4 md:mt-5 md:text-lg lg:text-xl">
                <p>
                  Every package includes a 1-hour private escape room plus 2
                  hours in your own private party room — one hour while the
                  group plays, one hour after to celebrate. Non-players and
                  parents are welcome to relax in the party room the whole time.
                </p>
                <p>
                  Want food handled? Add catering at checkout — pizza, cookie
                  cake, and unlimited drinks ready when your group walks out.
                  Bringing your own? Store-bought food is welcome.
                </p>
                <p>
                  Book at least 7 days in advance to lock in your date. Cutting
                  it close? Submit an enquiry below and our manager will reach
                  out to make it work.
                </p>
              </div>
            )}
          </div>
          {/*=======================================================party packages===*/}
          {props.partyPackageList && props.partyPackageList.length > 0 && (
            <div className="section-row party-packages-row w-full flex flex-wrap flex-col sm:flex-row justify-center gap-y-5 zm:gap-y-7 sm:gap-x-3 sm:gap-y-8 md:gap-x-2 md:gap-y-6 xl:gap-5 mt-6 zm:mt-7">
              {props.partyPackageList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="sec-col package-item bg-[#111111]/40 p-2.5 rm:p-3.5 zm:p-5 md:p-4 xl:p-6 w-full sm:max-w-[48%]  md:max-w-[32.5%] xl:max-w-[32%]"
                  >
                    <div className="package-poster relative">
                      <img
                        className="w-full max-w-full"
                        src={
                          item.partyCardImage.url
                            ? item.partyCardImage.url
                            : "/assets/event-page-v2/treasure-island-game-card.jpg"
                        }
                        alt={
                          item.partyCardImage.alt
                            ? item.partyCardImage.alt
                            : "escape room party package-" + index
                        }
                      ></img>
                      <div className="absolute w-[120px] h-[120px] bottom-0 right-0">
                        <img
                          className="max-w-full"
                          src="/assets/event-page-v2/party-room-lense.png"
                          alt="party room lense"
                        ></img>
                      </div>
                    </div>
                    <div className="book-btn mt-5 xl:mt-6">
                      {item.bookingData ? (
                        <button
                          onClick={(e) => partyPackageBooking(item.bookingData)}
                          className="block w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-sm lg:text-base"
                        >
                          BOOK THIS PACKAGE
                        </button>
                      ) : (
                        <button
                          onClick={(e) => showPartyBookingModal(item.partyName)}
                          className="block w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-sm lg:text-base"
                        >
                          BOOK THIS PACKAGE
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {/*=================================================================================================================package-info===*/}
          {props.sectionData.partyPackageInfoV2 && (
            <div className="section-row packages-info flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-2 lg:space-x-3 xl:space-x-5 mt-8 zm:mt-12 md:mt-10 xl:mt-12">
              <div className="package-includes item-col w-full  bg-[#6376BC2E] border border-[#20398E] rounded-xl py-5 px-2 rm:py-5 rm:px-3 md:px-2 md:py-5 xl:px-5 xl:py-6">
                <PartyPackageInfoChecklist
                  packageInfo={
                    props.sectionData.partyPackageInfoV2.packageIncludes
                  }
                  teamSize={props.teamSize ? props.teamSize : "10"}
                />
              </div>
              <div className="package-good-to-know item-col w-full bg-[#6376BC2E] border-2 border-[#D4B56A] rounded-xl py-5 px-2 rm:py-5 rm:px-3 md:px-2 md:py-5 xl:px-5 xl:py-6">
                <CateringInfo
                  packageInfo={
                    props.sectionData.partyPackageInfoV2.cateringPackage
                  }
                  teamSize={props.teamSize ? props.teamSize : "10"}
                  locationSlug={props.locationSlug ? props.locationSlug : "/"}
                />
              </div>
              <div className="package-good-to-know item-col w-full bg-[#6376BC2E] border border-[#20398E] rounded-xl py-5 px-2 rm:py-5 rm:px-3 md:px-2 md:py-5 xl:px-5 xl:py-6">
                <PartyPackageInfoChecklist
                  packageInfo={props.sectionData.partyPackageInfoV2.goodToKnow}
                  teamSize={props.teamSize ? props.teamSize : "10"}
                />
              </div>
            </div>
          )}

          {/*===========================================================================================================================package-cancellation===*/}
          <div className="section-row packages-info-2 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-2 lg:space-x-4 xl:space-x-6 mt-6 md:mt-2 lg:mt-4 xl:mt-6">
            {/*====================================================Cancellation Policy============================================================*/}
            <div className="item-col w-full md:max-w-[48%] bg-[#6376BC2E] border border-[#20398E] rounded-xl py-5 px-2 rm:py-6 rm:px-3 md:p-4 lg:p-5 xl:p-8">
              <CancellationInfo
                cancellationInfo={
                  props.sectionData.partyPackageInfoV2.cancellationInfo
                }
              />
            </div>
            {/*==================================================== Large Event ============================================================*/}
            <div className="item-col w-full md:max-w-[52%] bg-[#6376BC2E] border border-[#20398E] rounded-xl">
              <div className="item-contact-info  py-5 px-2 rm:py-6 rm:px-3 md:p-4 lg:p-5 xl:p-8">
                <BigPackageInfo
                  bigPackageInfo={
                    props.sectionData.partyPackageInfoV2.bigPackageInfo
                  }
                  locationInfo={props.locationInfo}
                  locationSlug={props.locationSlug}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
