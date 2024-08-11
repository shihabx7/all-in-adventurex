import Script from "next/script";
import LocationMenuBtnFooter from "../util/LocationMenuBtnFooter";

import React, { useEffect, useState } from "react";

import UseFullLinks from "../footercomps/UseFullLinks";
import FooterLocMenu from "../footercomps/FooterLocMenu";
import FooterEmbedMap from "../footercomps/FooterEmbedMap";
import FooterSocial from "../footercomps/FooterSocial";
import FooterCopy from "../footercomps/FooterCopy";
import Dgency from "../footercomps/Dgency";

const LocationFooter = (props) => {
  const [isPgLoad, setPgLoad] = useState(false);
  useEffect(() => {
    setPgLoad(true);
  });

  return (
    <>
      <footer className="bg-esc-black">
        <div className="max-w-7xl mx-auto px-4">
          <div className="footer-info-row max-w-[850px]  mx-auto pt-20">
            <div className="footer-logo text-center">
              <img
                className="max-w-[120px] mx-auto"
                src="/assets/svg/All-In-Adventures-Logo.svg"
              ></img>
              {/* svg image will be added */}
            </div>
            <div className="footer-info text-center">
              <h3 className="golden-text pt-6 font-os font-bold text-3xl md:text-3xl lg:text-4xl">
                ALL IN ADVENTURES
              </h3>
              <p className="text-gray-300 md:text-lg pt-4">
                All In Adventures (formerly Mystery Room) is one of the pioneers
                in bringing escape rooms to the United States and now operates
                in {props.totalLocations ? props.totalLocations : "22"}{" "}
                locations. Established in 2014 and a registered franchise brand
                since 2020, All In Adventures has gained vast industry
                experience through our popular Escape Room, Game Show Room, Beat
                the Seat, and Axe Throwing games.
              </p>
              <p className="text-gray-300 md:text-lg pt-4 pb-8">
                We're your one-stop shop for any private event. We have you
                covered for birthday parties, team building, corporate events,
                holiday parties, bachelor or bachelorette parties… and so much
                more!
              </p>
              <div className="max-w-[400px] mx-auto">
                <LocationMenuBtnFooter locationName={props.locationName} />
              </div>
            </div>
          </div>
          {/*========================================= map  added================ */}
          <div className="footer-map-row text-center">
            <h3 className="golden-text py-8 font-os font-bold text-2xl md:text-3xl lg:text-3xl">
              {props.totalLocations ? props.totalLocations : "22"} LOCATIONS IN
              THE U.S.
            </h3>

            <div className="footer-map">
              {isPgLoad && (
                <>
                  <FooterEmbedMap />
                </>
              )}
            </div>
          </div>
          {/*========================================= map added================ */}
          {/*===================footer ?Location Menu===== */}
          <div className="footer-loc-menu-row">
            <FooterLocMenu locationSlugList={props.locationSlugList} />
          </div>
          {/*===================footer ?Location Menu end */}
          {/*========================================= footer copyright row================ */}
          <div className="footer-link-row pt-8">
            {/*========================================= usefull link end================ */}

            <UseFullLinks locationSlug={props.locationSlug} />

            {/*========================================= usefull link end================ */}

            {/*========================================= footer social ================ */}
            <FooterSocial />
            {/*========================================= footer social ================ */}
            {/*========================================= footer copy ================ */}
            <FooterCopy />
            {/*========================================= footer copy ================ */}
          </div>

          {/*========================================= footer copyright row================ */}
        </div>
        {/*===================dgency  ======*/}
        <Dgency />
        {/*===================dgency end ====*/}
      </footer>
      <Script src="/custom.js" />
    </>
  );
};

export default LocationFooter;
