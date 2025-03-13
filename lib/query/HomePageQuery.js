import { apiUrl } from "../apiSettings";

const pageInfo =
  "&populate[pageInfo][populate][themeImage][fields][0]=name&populate[pageInfo][populate][themeImage][fields][1]=alternativeText&populate[pageInfo][populate][themeImage][fields][2]=url&populate[pageInfo][populate][themeImage][fields][3]=width&populate[pageInfo][populate][themeImage][fields][4]=height";
const pageHero =
  "populate[pageHeroDesktop][fields][0]=name&populate[pageHeroDesktop][fields][1]=alternativeText&populate[pageHeroDesktop][fields][2]=url&populate[pageHeroDesktop][fields][3]=width&populate[pageHeroDesktop][fields][4]=height&populate[pageHeroMobile][fields][0]=name&populate[pageHeroMobile][fields][1]=alternativeText&populate[pageHeroMobile][fields][2]=url&populate[pageHeroMobile][fields][3]=width&populate[pageHeroMobile][fields][4]=height";
const testimonial =
  "&populate[testimonials][populate][revImage][fields][0]=name&populate[testimonials][populate][revImage][fields][1]=alternativeText&populate[testimonials][populate][revImage][fields][2]=url&populate[testimonials][populate][revImage][fields][3]=width&populate[testimonials][populate][revImage][fields][4]=height";
const seo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";
const video =
  "&populate[pageVideo][populate][thumbnail][fields][0]=name&populate[pageVideo][populate][thumbnail][fields][1]=alternativeText&populate[pageVideo][populate][thumbnail][fields][2]=url&populate[pageVideo][populate][thumbnail][fields][3]=width&populate[pageVideo][populate][thumbnail][fields][4]=height";
const allcarouselSection = "&populate[carouselSectionData]=*";
export const homePageQuery =
  "home-page?" +
  pageHero +
  pageInfo +
  video +
  testimonial +
  allcarouselSection +
  seo;

export const homePageTestimonialQuery =
  "home-page?populate[testimonials][populate][revImage][fields][0]=name&populate[testimonials][populate][revImage][fields][1]=alternativeText&populate[testimonials][populate][revImage][fields][2]=url&populate[testimonials][populate][revImage][fields][3]=width&populate[testimonials][populate][revImage][fields][4]=height" +
  pageInfo;

// for location home page data
const locationInfo = "&populate[locationInfo]=*";
const mapInfo = "&populate[mapInfo]=*";
const bookingInfo = "&populate[bookingInfo]=*";
const locationPageHeroData =
  "&populate[pageHeroData][populate][pageHeroDesktop][fields][0]=name&populate[pageHeroData][populate][pageHeroDesktop][fields][1]=url&populate[pageHeroData][populate][pageHeroDesktop][fields][2]=alternativeText&populate[pageHeroData][populate][pageHeroDesktop][fields][3]=width&populate[pageHeroData][populate][pageHeroDesktop][fields][4]=height&populate[pageHeroData][populate][pageHeroMobile][fields][0]=name&populate[pageHeroData][populate][pageHeroMobile][fields][1]=url&populate[pageHeroData][populate][pageHeroMobile][fields][2]=width&populate[pageHeroData][populate][pageHeroMobile][fields][3]=height&populate[pageHeroData][populate][pageHeroMobile][fields][4]=alternativeText";
const businessHours =
  "&populate[businessHours][populate][monday]=*&populate[businessHours][populate][tuesday]=*&populate[businessHours][populate][wednesday]=*&populate[businessHours][populate][thursday]=*&populate[businessHours][populate][friday]=*&populate[businessHours][populate][saturday]=*&populate[businessHours][populate][sunday]=*";
const holidayHours = "&populate[holidayHours]=*";
//activitie price per loc
const activityInfo =
  "&populate[locationActivities][populate][activityPrice][populate]=*&populate[locationActivities][populate][activity][populate][activityInfo][populate][price]=*";
const activitySlider =
  "&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][0]=name&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][1]=url&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][2]=alternativeText&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][3]=width&populate[locationActivities][populate][activity][populate][activitySlider][populate][sliderBgImage][fields][4]=height";
const activityList =
  "&populate[locationActivities][populate][activity][populate][activitySlider][populate][activityListImage][fields][0]=name&populate[locationActivities][populate][activity][populate][activitySlider][populate][activityListImage][fields][1]=url&populate[locationActivities][populate][activity][populate][activitySlider][populate][activityListImage][fields][2]=alternativeText&populate[locationActivities][populate][activity][populate][activitySlider][populate][activityListImage][fields][3]=width&populate[locationActivities][populate][activity][populate][activitySlider][populate][activityListImage][fields][4]=height";
const activitySeo = "&populate[locationActivities][populate][seo]=*";
const activityNoticeImage =
  "&populate[locationActivities][populate][noticeImage][fields][0]=name&populate[locationActivities][populate][noticeImage][fields][1]=url&populate[locationActivities][populate][noticeImage][fields][2]=alternativeText&populate[locationActivities][populate][noticeImage][fields][3]=width&populate[locationActivities][populate][noticeImage][fields][4]=height";
const activityListSeo = "&populate[activityListPage][populate][seo]=*";
// location's event page ===============
const eventInfo =
  "&populate[locationEvents][populate][event][populate][eventInfo]=*";
const eventSlider =
  "&populate[locationEvents][populate][event][populate][eventSlider][populate][sliderImage][fields][0]=name&populate[locationEvents][populate][event][populate][eventSlider][populate][sliderImage][fields][1]=url&populate[locationEvents][populate][event][populate][eventSlider][populate][sliderImage][fields][2]=alternativeText&populate[locationEvents][populate][event][populate][eventSlider][populate][sliderImage][fields][3]=width&populate[locationEvents][populate][event][populate][eventSlider][populate][sliderImage][fields][4]=height";
const eventList =
  "&populate[locationEvents][populate][event][populate][eventSlider][populate][eventListImage][fields][0]=name&populate[locationEvents][populate][event][populate][eventSlider][populate][eventListImage][fields][1]=url&populate[locationEvents][populate][event][populate][eventSlider][populate][eventListImage][fields][2]=alternativeText&populate[locationEvents][populate][event][populate][eventSlider][populate][eventListImage][fields][3]=width&populate[locationEvents][populate][event][populate][eventSlider][populate][eventListImage][fields][4]=height";
const eventSeo = "&populate[locationEvents][populate][seo]=*";
const extraPartyList =
  "&populate[escapeGameParty][populate][linkedActivity][populate][activityInfo]=*&populate[escapeGameParty][populate][activityListImage][fields][0]=name&populate[escapeGameParty][populate][activityListImage][fields][1]=url&populate[escapeGameParty][populate][activityListImage][fields][2]=alternativeText&populate[escapeGameParty][populate][activityListImage][fields][3]=width&populate[escapeGameParty][populate][activityListImage][fields][4]=height";
const extraPartySlider =
  "&populate[escapeGameParty][populate][sliderImage][fields][0]=name&populate[escapeGameParty][populate][sliderImage][fields][1]=url&populate[escapeGameParty][populate][sliderImage][fields][2]=alternativeText&populate[escapeGameParty][populate][sliderImage][fields][3]=width&populate[escapeGameParty][populate][sliderImage][fields][4]=height&populate[escapeGameParty][populate][price]=*";
const extraPartyCardImage =
  "&populate[escapeGameParty][populate][partyCardImage][fields][0]=name&populate[escapeGameParty][populate][partyCardImage][fields][1]=url&populate[escapeGameParty][populate][partyCardImage][fields][2]=alternativeText&populate[escapeGameParty][populate][partyCardImage][fields][3]=width&populate[escapeGameParty][populate][partyCardImage][fields][4]=height";
const eventListSeo = "&populate[eventListPage][populate][seo]=*";
const mobileEscapeQuery =
  "&populate[mobileEscapeRoom][on][mobile-escape-room.home-page-section-data][populate][iconList][populate][icon]=*&populate[mobileEscapeRoom][on][mobile-escape-room.home-page-section-data][populate][sectionImage]=*&populate[mobileEscapeRoom][on][mobile-escape-room.pricing-card-section][populate]=*";
// location Home Page ===========
export const LocationHomePageQuery =
  locationPageHeroData +
  locationInfo +
  mapInfo +
  bookingInfo +
  allcarouselSection +
  businessHours +
  holidayHours +
  video +
  activityInfo +
  activitySlider +
  "&populate[locationActivities][populate][activity][populate][pageHeroData]=*" +
  eventInfo +
  eventSlider +
  extraPartyList +
  extraPartySlider +
  seo +
  mobileEscapeQuery;
// location activity page and event page
export const locationDynamicPageQuery =
  locationInfo +
  mapInfo +
  bookingInfo +
  businessHours +
  holidayHours +
  activityNoticeImage +
  activityInfo +
  "&populate[locationActivities][populate][activity][populate][pageHeroData]=*" +
  activitySeo +
  eventInfo +
  eventSeo +
  extraPartyCardImage +
  extraPartyList +
  mobileEscapeQuery;
// location's activities and events list page
export const locationDynamicListPageQuery =
  locationInfo +
  bookingInfo +
  businessHours +
  holidayHours +
  activityInfo +
  activityList +
  activityListSeo +
  eventInfo +
  eventList +
  eventListSeo +
  extraPartyList +
  extraPartyCardImage +
  extraPartySlider +
  mobileEscapeQuery;
export const locationListPageQuery = "location-list-page?populate=*" + seo;
export const LocationListPageListQuery =
  "locations?sort[0]=priority:asc&populate[locationInfo]=*&populate[bookingInfo]=*&populate[pageHeroData][populate][cardImage][fields][0]=name&populate[pageHeroData][populate][cardImage][fields][1]=url&populate[pageHeroData][populate][cardImage][fields][2]=width&populate[pageHeroData][populate][cardImage][fields][3]=height&populate[pageHeroData][populate][cardImage][fields][4]=alternativeText";
