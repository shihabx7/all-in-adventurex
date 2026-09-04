import React, { useState } from "react";
import Script from "next/script";

export default function FhBookingGridFlow() {
  const embedCode = `
    <!-- FareHarbor item grid of flow #16807 -->
    <script src="https://fareharbor.com/embeds/script/items/allinadventures-raleigh/?full-items=yes&fallback=simple&flow=16807"></script>
  `;
  return (
    <div className="test-section-container bg-[#090909]">
      <div className="section-container py-16 rm:py-20 md:py-20 lg:py-28 2xl:py-32 mx-auto max-w-7xl px-3 rm:px-4 md:px-8 xl:px-0">
        <div className="fareharbor-grid-header text-center mb-10">
          <h2 className="text-[#e0bf62] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
            Fareharbor Booking items grid

          </h2>
              <p className="text-gray-300 text-xl font-medium mt-4">
            Embed Grid for Releigh, NC Location 
          </p>
        </div>
        <div className="fareharbor-grid-wrapper w-full min-h-[600px]">
          <div className="fareharbor-grid-wrapper my-6">
            <div dangerouslySetInnerHTML={{ __html: embedCode }} />
          </div>
        </div>
      </div>
    </div>
  );
}
