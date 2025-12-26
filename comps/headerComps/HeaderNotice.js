import { useState, useEffect } from "react";
import UnlimitedBundleNotice from "../noticeBaner/UnlimitedBundleNotice";
import BlackFridayNotice from "../noticeBaner/BlackFridayNotice";
import GiftNotice25 from "../noticeBaner/GiftNotice25";
import ChristmasGiftNotice from "../noticeBaner/ChristmasGiftNotice";
export default function HeaderNotice({
  noticeData,
  locationSlug,
  giftBooking,
}) {
  const [currentNotice, setCurrentNotice] = useState("uer");

  useEffect(() => {
    const expireDate = new Date("2026-01-01T00:11:59");
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
       <GiftNotice25
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
