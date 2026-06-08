import BlueDarkDecorBg from "./elements/BlueDarkDecorBg";
import PartyPackageBookingBtn from "./elements/partyPackageBookingBtn";
import PartyFormBookingBtn from "./elements/PartyFormBookingBtn";
export default function CheckOutPartyPackages(props) {
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
          {/*=======================================================section heading===*/}
          <div className="section-head max-w-[930px] ">
            <h2 className="text-white  md:py-1 2xl:py-2 text-2xl md:text-[2.5rem] 2xl:text-[2.875rem] leading-[1.2] font-os font-bold uppercase ">
              {props.sectionData.title
                ? props.sectionData.title
                : "CHECK OUT OUR PARTY PACKAGES"}
            </h2>
            <p className="text-[#ADADAD] xl:text-lg my-3">
              Every package includes a 1-hour private escape room plus 2 hours
              in your own private party room — one hour while the group plays,
              one hour after to celebrate. Non-players and parents are welcome
              to relax in the party room the whole time.
            </p>
            <p className="text-[#ADADAD] xl:text-lg my-3">
              Want food handled? Add catering at checkout — pizza, cookie cake,
              and unlimited drinks ready when your group walks out. Bringing
              your own? Store-bought food is welcome.
            </p>
            <p className="text-[#ADADAD] xl:text-lg my-3">
              Book at least 7 days in advance to lock in your date. Cutting it
              close? Submit an enquiry below and our manager will reach out to
              make it work.
            </p>
          </div>
          {/*=======================================================button pair+ price
          <div className="section-row price-btn-row flex flex-col md:flex-row justify-between md:space-x-2 mt-4 xl:mt-5">
            <div className="btn-pair flex items-center space-x-4">
              <button className="cursor-pointer rounded font-medium text-[#090909] bg-[#E0BF62] hover:bg-[#CA9342] py-2 px-7 border border-[#E0BF62] hover:border-[#CA9342] transition duration-300">
                Up to 10 players
              </button>
              <button className="bg-transparent cursor-pointer rounded font-medium text-[#ADADAD] hover:text-[#090909] hover:bg-[#CA9342] py-2 px-7 border border-[#ADADAD] hover:border-[#CA9342] transition duration-300">
                10+ players and more
              </button>
            </div>
            <div className="text-[#ADADAD] text-right">
              <h3 className="text-3xl font-os font-semibold text-white mb-1 md:mb-2">
                $350
              </h3>
              <p>*Taxes & Fees are NOT included in the package price</p>
              <p>Add catering for just $19.99 / person.</p>
            </div>
          </div>
          ===*/}
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
                      <PartyPackageBookingBtn
                        partyName={item.partyName}
                        bookingInfo={
                          item.bookingInfo ? item.bookingInfo : false
                        }
                        locationSlug={
                          props.locationSlug ? props.locationSlug : false
                        }
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/*=======================================================package-info===*/}
          <div className="section-row packages-info flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-2 mt-8 md:mt-10 xl:mt-12">
            {/*=======================================================package-info 1===*/}
            <div className="item-col md:max-w-[31%]">
              <h3 className="xl:text-lg font-semibold text-white">
                WHAT'S INCLUDED IN EVERY PACKAGE
              </h3>
              <ul className="list-disc  text-sm xl:text-base text-[#adadad] mt-3 xl:mt-4 pl-4 xl:pl-6">
                <li className="my-3">Game Room Rental for 1 hours</li>
                <li className="my-3">
                  Basic Supplies (Plates, Napkins, Utensils, etc.)
                </li>
                <li className="my-3">
                  FREE All In Adventures Birthday Invitations (Digital - can be
                  printed)
                </li>
              </ul>
            </div>
            {/*=======================================================package-info 2===*/}
            <div className="item-col md:max-w-[31%]">
              <h3 className="xl:text-lg font-semibold text-white">
                OPTIONAL CATERING ADD-ON (ADD AT CHECKOUT)
              </h3>
              <ul className="list-disc text-sm xl:text-base text-[#adadad] mt-3 xl:mt-4 pl-4 xl:pl-6">
                <li className="my-3">
                  Minimum Guest Count: 6 people up to 20, including parents
                </li>
                <li className="my-3">
                  All In Adventures Catering (Standard Package includes Pizza,
                  Cookie Cake, & unlimited drinks)
                </li>
                <li className="my-3">Add catering for just $19.99 / person.</li>
              </ul>
            </div>
            {/*=======================================================package-info 3===*/}
            <div className="item-col md:max-w-[31%]">
              <h3 className="xl:text-lg font-semibold text-white">
                GOOD TO KNOW
              </h3>
              <ul className="list-disc text-sm xl:text-base text-[#adadad] mt-3 xl:mt-4 pl-4 xl:pl-6">
                <li className="my-3">
                  For your safety, no homemade food is allowed and all food and
                  drink items must be store-bought.
                </li>
                <li className="my-3">
                  Guests may decorate the room but must remove all items after
                  the party.
                </li>
              </ul>
            </div>
          </div>

          {/*=======================================================package-info2===*/}
          <div className="section-row packages-info-2 flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-2 mt-6 md:mt-10 xl:mt-12">
            <div className="item-col md:max-w-[45%] xl:max-w-[37%]">
              <h3 className="xl:text-lg font-semibold text-white">
                CANCELLATIONS & RESCHEDULING
              </h3>
              <ul className="list-disc  text-sm xl:text-base text-[#adadad] mt-3 xl:mt-4 pl-4 xl:pl-6">
                <li className="my-3">
                  All sales are final — no refunds or cancellations
                </li>
                <li className="my-3">
                  Cancellation Protection is available at checkout for peace of
                  mind — full refund minus an 8% fee if cancelled at least 24
                  hours before your booking
                </li>
                <li className="my-3">
                  Most reservations can be rescheduled online through your
                  confirmation email at least 48 hours in advance
                </li>
                <li className="my-3">
                  Need to reschedule within 48 hours? Contact us directly and
                  we'll do our best
                </li>
              </ul>
            </div>
            <div className="item-col md:max-w-[52%] xl:max-w-[50%] bg-[#6376BC40]/25 border-2 border-[#20398E] rounded-xl">
              <div className="item-contact-info text-[#DBDBDB] p-8">
                <h3 className="xl:text-lg font-semibold text-white">
                  NEED SOMETHING BIGGER, CUSTOM, OR WITHIN 7 DAYS?
                </h3>
                <p className="text-sm xl:text-base text-[#DBDBDB] mt-2 xl:mt-3">
                  Got a bigger crowd or a tight timeline? We've got you. We
                  regularly host groups of 20, 30, 50, and well beyond —
                  multiple rooms running simultaneously so nobody sits out. Our
                  events team handles every detail from logistics to catering.
                </p>
                <div className="pn-em flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-2 md:space-x-6 xl:space-x-8 my-5 md:my-8">
                  <a
                    href={"tel:844-502-5546"}
                    className="text-white font-bold md:text-lg hover:text-red-700"
                  >
                    844-502-5546
                  </a>
                  <a
                    href={"mailto:sales@allinadventures.com"}
                    className="text-white font-bold md:text-lg hover:text-red-700"
                  >
                    sales@allinadventures.com
                  </a>
                </div>
                <div className="max-w-[330px]">
                  <PartyFormBookingBtn
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
