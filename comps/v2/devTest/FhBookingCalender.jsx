import React, { useState } from "react";
import Script from "next/script";
export default function FhBookingCalender() {
  const embedCode = `
    <!-- FareHarbor calendar of item #53870 -->
    <script src="https://fareharbor.com/embeds/script/calendar/allinadventures-raleigh/items/53870/?fallback=simple&full-items=yes&flow=16807"></script>
  `;

  return (
    <div className="test-section-container bg-[#EBDCB5]">
      <div className="section-container py-16 rm:py-20 md:py-20 lg:py-28 2xl:py-32 mx-auto max-w-7xl px-3 rm:px-4 md:px-8 xl:px-0">
        <div className="fareharbor-grid-header text-center mb-10">
          <h2 className="text-[#CA9342] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
            Fareharbor Booking Calender
          </h2>
          <p className="text-gray-800 text-xl font-medium mt-4">
            Embed Calendar for Escape From Alcatraz (Releigh, NC) 
          </p>
        </div>
        <div className="fareharbor-calendar-wrapper w-full min-h-[600px]">
          <div className="fareharbor-calendar-wrapper my-6 p-4 border rounded-lg bg-white shadow-sm">
            <div dangerouslySetInnerHTML={{ __html: embedCode }} />
          </div>
        </div>
      </div>
    </div>
  );
}
