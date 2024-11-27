// for location data
const locationInfo = "&populate[locationInfo]=*";
const mapInfo = "&populate[mapInfo]=*";
const bookingInfo = "&populate[bookingInfo]=*";
const businessHours =
  "&populate[businessHours][populate][monday]=*&populate[businessHours][populate][tuesday]=*&populate[businessHours][populate][wednesday]=*&populate[businessHours][populate][thursday]=*&populate[businessHours][populate][friday]=*&populate[businessHours][populate][saturday]=*&populate[businessHours][populate][sunday]=*";
const holidayHours = "&populate[holidayHours]=*";
const locationContact = "&populate[storeContactPage][populate][seo]=*";
const locationGift = "&populate[giftcardsPage][populate][seo]=*";
const locationActivities =
  "&populate[locationActivities][populate][activity][populate][activityInfo]=*&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][0]=name&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][1]=url&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][2]=alternativeText&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][3]=width&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][4]=height";
const locationEvents =
  "&populate[locationEvents][populate][event][populate][eventInfo]=*";
const mobileEscapeQuery = "&populate[mobileEscapeRoom][populate]=*";

export const locationDataQuery =
  locationInfo +
  mapInfo +
  bookingInfo +
  businessHours +
  holidayHours +
  locationGift +
  locationContact +
  locationActivities +
  locationEvents +
  mobileEscapeQuery;

export const locationContactPageQuery =
  "contact-page?populate[storeContact][populate][pageHeroDesktop][fields][0]=name&populate[storeContact][populate][pageHeroDesktop][fields][1]=alternativeText&populate[storeContact][populate][pageHeroDesktop][fields][2]=url&populate[storeContact][populate][pageHeroDesktop][fields][3]=width&populate[storeContact][populate][pageHeroDesktop][fields][4]=height&populate[storeContact][populate][pageHeroMobile][fields][0]=name&populate[storeContact][populate][pageHeroMobile][fields][1]=alternativeText&populate[storeContact][populate][pageHeroMobile][fields][2]=url&populate[storeContact][populate][pageHeroMobile][fields][3]=width&populate[storeContact][populate][pageHeroMobile][fields][4]=height";

// gift card page....
const seo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";
const giftGallery =
  "&populate[gallery][populate][galleryImages][fields][0]=name&populate[gallery][populate][galleryImages][fields][1]=url&populate[gallery][populate][galleryImages][fields][2]=alternativeText&populate[gallery][populate][galleryImages][fields][3]=width&populate[gallery][populate][galleryImages][fields][4]=height";
export const locationGiftPageQuery =
  "gift-cards-page?populate[giftFaqs]=*" + giftGallery + seo;
