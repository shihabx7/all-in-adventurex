import React from "react";
import BookYourEventOptionFour from "./BookYourEventOptionFour";
import BookYourEventsEscapeGame from "./BookYourEventsEscapeGame ";

function EventBookingPartySection(props) {
  return (
    <>
      <div
        id="eventbooking"
        className="book-your-event overflow-hidden  relative z-[30]  md:px-1 lg:px-0 bg-center bg-[url('/assets/svg/pattern/Light-Brown-Color-BG-Pattern.svg')] bg-[length:360px_360px] md:bg-[length:580px_580px] lg:bg-[length:640px_640px] bg-repeat"
      >
        {/*======================= boder img============== */}
        <div className="sec-divider-bottom w-full absolute bottom-0 left-0">
          <img
            className="w-full hidden md:block"
            src="/assets/svg/pattern/Light-Brown-Color-BG-Bottom.svg"
          ></img>
          <img
            className="w-full  md:hidden"
            src="/assets/svg/pattern/light-brown-color-bg-mobile.svg"
          ></img>
        </div>
        {/*======================= boder img end============== */}
        <div className="bbottom-left max-w-[66px] md:max-w-[140px] xl:max-w-[180px] absolute bottom-0 left-0 z-10">
          <img className="w-full" src="/assets/pl-bgi-2.png"></img>
        </div>
        <div className="bbottom-right max-w-[72px] md:max-w-[144px] xl:max-w-[180px]  absolute bottom-0 right-0 z-10">
          <img className="w-full" src="/assets/pl-bgi-4.png"></img>
        </div>
        {/*=======================  conditional section end============== */}
        {props.escapeGamePartyList.length > 1 ? (
          <>
            <BookYourEventsEscapeGame
              isPublished={props.isPublished}
              allBooking={props.allBooking}
              eventBooking={props.eventBooking}
              escapeGamePartyList={props.escapeGamePartyList}
              locationSlug={props.locationSlug}
            />
          </>
        ) : (
          <>
            <BookYourEventOptionFour
              isPublished={props.isPublished}
              allBooking={props.allBooking}
              eventBooking={props.eventBooking}
              escapeGamePartyList={props.escapeGamePartyList}
            />
          </>
        )}

        {/*=======================  conditional section end============== */}
      </div>
    </>
  );
}

export default EventBookingPartySection;
