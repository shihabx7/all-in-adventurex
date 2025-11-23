import UnlimitedBundleNotice from "../noticeBaner/UnlimitedBundleNotice";
import BlackFridayNotice from "../noticeBaner/BlackFridayNotice";
export default function HeaderNotice({ noticeData, locationSlug,giftBooking }) {
  return (
    <div className="header-notice-container">
      <BlackFridayNotice
        noticeData={noticeData ? noticeData : false}
        locationSlug={locationSlug ? locationSlug : false}
        giftBooking={giftBooking? giftBooking:false}
      />
    </div>
  );
}
