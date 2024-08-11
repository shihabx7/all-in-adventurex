const eventInfo = "&populate[eventInfo][populate]=*";
const pageHeroData =
  "&populate[pageHeroData][populate][pageHeroDesktop][fields][0]=name&populate[pageHeroData][populate][pageHeroDesktop][fields][1]=url&populate[pageHeroData][populate][pageHeroDesktop][fields][2]=alternativeText&populate[pageHeroData][populate][pageHeroDesktop][fields][3]=width&populate[pageHeroData][populate][pageHeroDesktop][fields][4]=height&populate[pageHeroData][populate][pageHeroMobile][fields][0]=name&populate[pageHeroData][populate][pageHeroMobile][fields][1]=url&populate[pageHeroData][populate][pageHeroMobile][fields][2]=width&populate[pageHeroData][populate][pageHeroMobile][fields][3]=height&populate[pageHeroData][populate][pageHeroMobile][fields][4]=alternativeText";
const whyAllinAdventures =
  "&populate[whyAllinAdventures][populate][sectionImage][fields][0]=name&populate[whyAllinAdventures][populate][sectionImage][fields][1]=alternativeText&populate[whyAllinAdventures][populate][sectionImage][fields][2]=url&populate[whyAllinAdventures][populate][sectionImage][fields][3]=width&populate[whyAllinAdventures][populate][sectionImage][fields][4]=height";
const makeItMemorable =
  "&populate[makeItMemorable][populate][sectionImage][fields][0]=name&populate[makeItMemorable][populate][sectionImage][fields][1]=alternativeText&populate[makeItMemorable][populate][sectionImage][fields][2]=url&populate[makeItMemorable][populate][sectionImage][fields][3]=width&populate[makeItMemorable][populate][sectionImage][fields][4]=height";
const whatToExpect =
  "&populate[whatToExpect][populate][sectionImage][fields][0]=name&populate[whatToExpect][populate][sectionImage][fields][1]=alternativeText&populate[whatToExpect][populate][sectionImage][fields][2]=url&populate[whatToExpect][populate][sectionImage][fields][3]=width&populate[whatToExpect][populate][sectionImage][fields][4]=height";
const eventTestimonials =
  "&populate[eventTestimonials][populate][revImage][fields][0]=name&populate[eventTestimonials][populate][revImage][fields][1]=url&populate[eventTestimonials][populate][revImage][fields][2]=alternativeText&populate[eventTestimonials][populate][revImage][fields][3]=width&populate[eventTestimonials][populate][revImage][fields][4]=height";
const eventSlider =
  "&populate[eventSlider][populate][sliderImage][fields][0]=name&populate[eventSlider][populate][sliderImage][fields][1]=url&populate[eventSlider][populate][sliderImage][fields][2]=alternativeText&populate[eventSlider][populate][sliderImage][fields][3]=width&populate[eventSlider][populate][sliderImage][fields][4]=height&populate[eventSlider][populate][eventListImage][fields][0]=name&populate[eventSlider][populate][eventListImage][fields][1]=url&populate[eventSlider][populate][eventListImage][fields][2]=alternativeText&populate[eventSlider][populate][eventListImage][fields][3]=width&populate[eventSlider][populate][eventListImage][fields][4]=height";
const eventSeo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";
export const eventPageQuery =
  eventInfo +
  pageHeroData +
  whyAllinAdventures +
  makeItMemorable +
  whatToExpect +
  eventTestimonials +
  eventSeo;
const eventListPageData =
  "event-list-page?populate[pageInfo]=*&populate[pageHeroDesktop][fields][0]=name&populate[pageHeroDesktop][fields][1]=alternativeText&populate[pageHeroDesktop][fields][2]=url&populate[pageHeroDesktop][fields][3]=width&populate[pageHeroDesktop][fields][4]=height&populate[pageHeroMobile][fields][0]=name&populate[pageHeroMobile][fields][1]=alternativeText&populate[pageHeroMobile][fields][2]=url&populate[pageHeroMobile][fields][3]=width&populate[pageHeroMobile][fields][4]=height";

export const eventListPageQuery = eventListPageData + eventSeo;
export const eventListQuery = "events?sort[0]=priority:asc" + eventSlider;
