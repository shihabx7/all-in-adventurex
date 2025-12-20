import { useState, useEffect } from "react";
import UnlimitedBundleNotice from "../noticeBaner/UnlimitedBundleNotice";
import BlackFridayNotice from "../noticeBaner/BlackFridayNotice";
import ChristmasGiftNotice from "../noticeBaner/ChristmasGiftNotice";
export default function HeaderNotice({
  noticeData,
  locationSlug,
  giftBooking,
}) {
  const [currentNotice, setCurrentNotice] = useState("uer");

  useEffect(() => {
    const expireDate = new Date("2025-12-21T11:59:59");
    const currentTime = new Date();
    const timeRemainingMs = expireDate.getTime() - currentTime.getTime();
    if (timeRemainingMs > 0) {
      setCurrentNotice("gift");
    } else {
      setCurrentNotice("uer");
    }
  }, []);

  return (
    <div className="header-notice-container">
    {currentNotice=='gift' && <>
       <ChristmasGiftNotice
        noticeData={noticeData ? noticeData : false}
        locationSlug={locationSlug ? locationSlug : false}
        giftBooking={giftBooking ? giftBooking : false}
      />
      </>}
        {currentNotice=='uer' && <>
       <UnlimitedBundleNotice
        noticeData={noticeData ? noticeData : false}
        locationSlug={locationSlug ? locationSlug : false}
      
      />
      </>}
     
    </div>
  );
}
