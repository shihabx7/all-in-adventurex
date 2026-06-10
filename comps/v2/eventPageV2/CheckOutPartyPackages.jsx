import { FaPhone, FaEnvelope } from "react-icons/fa6";
import PartyPackageListBox from "./elements/PartyPackageListBox";

import BlueDarkDecorBg from "./elements/BlueDarkDecorBg";
//import PartyPackageBookingBtn from "./elements/partyPackageBookingBtn";
import PartyFormBookingBtn from "./elements/PartyFormBookingBtn";
import { useSiteData } from "../../../contexts/SiteDataContext";
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
        <div className="section-container md:max-w-[860px] lg:max-w-7xl py-16 md:py-20 lg:py-28 px-4 mx-auto">
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
            <div className="section-row party-packages-row flex flex-col md:flex-row  justify-center space-y-8 md:space-y-0 md:space-x-3 xl:space-x-4 mt-6 md:mt-8 xl:mt-10">
              {props.partyPackageList.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="sec-col package-item bg-[#111111]/40 md:p-4 xl:p-6"
                  >
                    <div className="package-poster relative">
                      <img
                        className="max-w-full"
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
                          className="block w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
                        >
                          BOOK THIS PACKAGE
                        </button>
                      ) : (
                        <button
                          onClick={(e) => showPartyBookingModal(item.partyName)}
                          className="block w-full py-2 rounded-full uppercase text-center text-white font-medium border-2 border-red-600 bg-red-600 hover:border-red-700 hover:bg-red-700 text-[15px] rm:text-base md:text-lg"
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
          <div className="section-row packages-info flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-2 mt-8 md:mt-10 xl:mt-12">
            {/*=======================================================package-info 1===*/}
            {props.sectionData.partyPackageInfo &&
              props.sectionData.partyPackageInfo.packageIncludeList && (
                <>
                  {props.sectionData.partyPackageInfo.packageIncludeList.map(
                    (listItem, index) => {
                      return (
                        <div key={index} className="item-col md:max-w-[31%]">
                          <PartyPackageListBox boxItem={listItem} />
                        </div>
                      );
                    },
                  )}
                </>
              )}
          </div>

          {/*===========================================================================================================================package-info2===*/}
          <div className="section-row packages-info-2 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-2 mt-6 md:mt-10 xl:mt-12">
            {/*====================================================================================================================*/}
            <div className="item-col md:max-w-[45%] xl:max-w-[37%]">
              <PartyPackageListBox
                boxItem={props.sectionData.partyPackageInfo.cancellationInfo}
              />
            </div>
            {/*==================================================================================================================== large event*/}
            <div className="item-col md:max-w-[54%] xl:max-w-[50%] bg-[#6376BC40]/25 border-2 border-[#20398E] rounded-xl">
              <div className="item-contact-info text-[#DBDBDB] p-3 md:p-4 lg:p-5 xl:p-8">
                <h3 className="xl:text-lg font-semibold text-white">
                  {props.sectionData.partyPackageInfo.bigPackageInfo.infoTitle
                    ? props.sectionData.partyPackageInfo.bigPackageInfo
                        .infoTitle
                    : "NEED SOMETHING BIGGER, CUSTOM, OR WITHIN 7 DAYS?..."}
                </h3>
                {props.sectionData.partyPackageInfo.bigPackageInfo
                  .infoHtmlText && (
                  <div
                    className="text-sm xl:text-base text-[#DBDBDB] mt-2 xl:mt-3"
                    dangerouslySetInnerHTML={{
                      __html:
                        props.sectionData.partyPackageInfo.bigPackageInfo
                          .infoHtmlText,
                    }}
                  ></div>
                )}
                {!props.sectionData.partyPackageInfo.bigPackageInfo
                  .infoHtmlText && (
                  <div className="text-sm xl:text-base text-[#DBDBDB] mt-2 xl:mt-3">
                    Got a bigger crowd or a tight timeline? We've got you. We
                    regularly host groups of 20, 30, 50, and well beyond —
                    multiple rooms running simultaneously so nobody sits out.
                    Our expart events team handles every detail from logistics
                    to catering.
                  </div>
                )}
                <div className="pn-em flex flex-col lg:flex-row space-y-5 lg:space-y-0  lg:space-x-4 xl:space-x-7 my-5 md:my-6 xl:my-7">
                  <a
                    href={
                      props.locationInfo
                        ? "tel" + props.locationInfo.phone
                        : "tel:844-502-5546"
                    }
                    className="flex items-center space-x-2 text-white font-medium xl:text-lg hover:text-[#CB9442] transition-all duration-300 ease-linear "
                  >
                    <span className="text-gold">
                      <FaPhone />
                    </span>
                    <span>
                      {props.locationInfo
                        ? props.locationInfo.phone
                        : "844-502-5546"}{" "}
                    </span>
                  </a>
                  <a
                    href={
                      props.locationInfo
                        ? "mailto" + props.locationInfo.storeEmail
                        : "mailto:sales@allinadventures.com"
                    }
                    className="flex items-center space-x-2 text-white  font-medium xl:text-lg hover:text-[#CB9442] transition-all duration-300 ease-linear "
                  >
                    <span className="text-gold">
                      <FaEnvelope />
                    </span>
                    <span>
                      {props.locationInfo
                        ? props.locationInfo.storeEmail
                        : "sales@allinadventures.com"}
                    </span>
                  </a>
                </div>
                <div className="big-party-booking">
                  <PartyFormBookingBtn
                    btnLabel={
                      props.sectionData.partyPackageInfo.bigPackageInfo
                        .ctaBtnLabel
                        ? props.sectionData.partyPackageInfo.bigPackageInfo
                            .ctaBtnLabel
                        : "TELL US ABOUT YOUR PARTY"
                    }
                    locationSlug={
                      props.locationSlug ? props.locationSlug : false
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
