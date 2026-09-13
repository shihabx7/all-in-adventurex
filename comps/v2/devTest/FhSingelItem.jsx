import React, { useState } from "react";
import Script from "next/script";

export default function FhSingleItem() {
  //https://fareharbor.com/embeds/book/allinadventures-raleigh/items/624177/availability/1740215307/book/?flow=no
  //https://fareharbor.com/embeds/book/allinadventures-raleigh/items/53870/calendar/2026/09/?flow=16807&full-items=yes
  //https://fareharbor.com/embeds/book/kingstontraining/items/56091/?full-items=yes&flow=17842
  //https://fareharbor.com/embeds/book/allinadventures-raleigh/items/624177/calendar/?flow=no

  const embedCode = `
    <script src="https://fareharbor.com/embeds/script/book/mysteryroom-westnyack/items/625155/calendar/?flow=no"></script>
  `;

  const embedCode1 = `<script src="https://fareharbor.com/embeds/script/book/mysteryroom-westnyack/items/53870/?flow=16807&full-items=yes"></script>`;
  const embedCode2 = `<script src="https://fareharbor.com/embeds/script/book/allinadventures-raleigh/item/624177/?flow=no&full-items=no"></script>`;
  const embedCode3 = `<script src="https://fareharbor.com/embeds/script/allinadventures-raleigh/item/624177/calendar/?flow=no"></script>`;
  return (
    <div className="single item test-section-container bg-[#EBDCB5]">
      <div className="section-container py-16 rm:py-20 md:py-20 lg:py-28 2xl:py-32 mx-auto max-w-7xl px-3 rm:px-4 md:px-8 xl:px-0">
        <div className="fareharbor-grid-header text-center mb-10">
          <h2 className="text-[#CA9342] uppercase font-bold text-center text-[28px] rm:text-[30px] zm:text-[33px] leading-[1.2] sm:text-4xl lg:text-5xl font-os outline-tile">
         Booking grid v2
          </h2>
          <p className="text-gray-700 text-xl font-medium mt-4">
            Embed Grid for West Nyack, NY Location with search option
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
