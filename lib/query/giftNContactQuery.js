// corporate contact page
const corSeo =
  "&populate[seoCorporate][populate][metaImage][fields][0]=name" +
  "&populate[seoCorporate][populate][metaImage][fields][1]=url" +
  "&populate[seoCorporate][populate][metaSocial][fields][0]=socialNetwork" +
  "&populate[seoCorporate][populate][metaSocial][fields][1]=title" +
  "&populate[seoCorporate][populate][metaSocial][fields][2]=description" +
  "&populate[seoCorporate][populate][metaSocial][fields][3]=hashTags" +
  "&populate[seoCorporate][populate][metaSocial][populate][image][fields][0]=url";
const corConQuery =
  "contact-page?populate[corporateContact][populate][pageHeroDesktop][fields][0]=name" +
  "&populate[corporateContact][populate][pageHeroDesktop][fields][1]=alternativeText" +
  "&populate[corporateContact][populate][pageHeroDesktop][fields][2]=url" +
  "&populate[corporateContact][populate][pageHeroDesktop][fields][3]=width" +
  "&populate[corporateContact][populate][pageHeroDesktop][fields][4]=height" +
  "&populate[corporateContact][populate][pageHeroMobile][fields][0]=name" +
  "&populate[corporateContact][populate][pageHeroMobile][fields][1]=alternativeText" +
  "&populate[corporateContact][populate][pageHeroMobile][fields][2]=url" +
  "&populate[corporateContact][populate][pageHeroMobile][fields][3]=width" +
  "&populate[corporateContact][populate][pageHeroMobile][fields][4]=height";
export const corporateContactPageQuery = corConQuery + corSeo;
// gift card page....
const giftSeo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";
const giftGallery =
  "&populate[gallery][populate][galleryImages][fields][0]=name&populate[gallery][populate][galleryImages][fields][1]=url&populate[gallery][populate][galleryImages][fields][2]=alternativeText&populate[gallery][populate][galleryImages][fields][3]=width&populate[gallery][populate][galleryImages][fields][4]=height";
export const giftCardsPageQuery =
  "gift-cards-page?populate[giftFaqs]=*" + giftGallery + giftSeo;
export const giftReedemQuery =
  "activities?populate[activityInfo]=*&sort[0]=priority:asc&populate[activitySlider][populate][sliderBgImage][fields][0]=name&populate[activitySlider][populate][sliderBgImage][fields][1]=url&populate[activitySlider][populate][sliderBgImage][fields][2]=alternativeText&populate[activitySlider][populate][sliderBgImage][fields][3]=width&populate[activitySlider][populate][sliderBgImage][fields][4]=height&populate[activitySlider][populate][activityListImage][fields][0]=name&populate[activitySlider][populate][activityListImage][fields][1]=url&populate[activitySlider][populate][activityListImage][fields][2]=alternativeText&populate[activitySlider][populate][activityListImage][fields][3]=width&populate[activitySlider][populate][activityListImage][fields][4]=height";
