const activityInfo =
  "&populate[activityInfo][populate][activityThemeImage][fields][0]=name&populate[activityInfo][populate][activityThemeImage][fields][1]=url&populate[activityInfo][populate][activityThemeImage][fields][2]=width&populate[activityInfo][populate][activityThemeImage][fields][3]=height&populate[activityInfo][populate][activityThemeImage][fields][4]=alternativeText&populate[activityInfo][populate][price]=*";
const pageHeroData =
  "&populate[pageHeroData][populate][pageHeroDesktop][fields][0]=name&populate[pageHeroData][populate][pageHeroDesktop][fields][1]=url&populate[pageHeroData][populate][pageHeroDesktop][fields][2]=alternativeText&populate[pageHeroData][populate][pageHeroDesktop][fields][3]=width&populate[pageHeroData][populate][pageHeroDesktop][fields][4]=height&populate[pageHeroData][populate][pageHeroMobile][fields][0]=name&populate[pageHeroData][populate][pageHeroMobile][fields][1]=url&populate[pageHeroData][populate][pageHeroMobile][fields][2]=width&populate[pageHeroData][populate][pageHeroMobile][fields][3]=height&populate[pageHeroData][populate][pageHeroMobile][fields][4]=alternativeText";
const pricedData =
  "&populate[price][populate][pageHeroDesktop][fields][0]=name&populate[pageHeroData][populate][pageHeroDesktop][fields][1]=url&populate[pageHeroData][populate][pageHeroDesktop][fields][2]=alternativeText&populate[pageHeroData][populate][pageHeroDesktop][fields][3]=width&populate[pageHeroData][populate][pageHeroDesktop][fields][4]=height&populate[pageHeroData][populate][pageHeroMobile][fields][0]=name&populate[pageHeroData][populate][pageHeroMobile][fields][1]=url&populate[pageHeroData][populate][pageHeroMobile][fields][2]=width&populate[pageHeroData][populate][pageHeroMobile][fields][3]=height&populate[pageHeroData][populate][pageHeroMobile][fields][4]=alternativeText";
const storyLine =
  "&populate[storyLine][populate][storyLineImage][fields][0]=name&populate[storyLine][populate][storyLineImage][fields][1]=alternativeText&populate[storyLine][populate][storyLineImage][fields][2]=url&populate[storyLine][populate][storyLineImage][fields][3]=width&populate[storyLine][populate][storyLineImage][fields][4]=height&populate[storyLine][populate][storyLineBgImage][fields][0]=name&populate[storyLine][populate][storyLineBgImage][fields][1]=alternativeText&populate[storyLine][populate][storyLineBgImage][fields][2]=url&populate[storyLine][populate][storyLineBgImage][fields][3]=width&populate[storyLine][populate][storyLineBgImage][fields][4]=height";
const plotData =
  "&populate[plot][populate][plotImage][fields][0]=name&populate[plot][populate][plotImage][fields][1]=alternativeText&populate[plot][populate][plotImage][fields][2]=url&populate[plot][populate][plotImage][fields][3]=width&populate[plot][populate][plotImage][fields][4]=height&populate[plot][populate][plotBgImage][fields][0]=name&populate[plot][populate][plotBgImage][fields][1]=alternativeText&populate[plot][populate][plotBgImage][fields][2]=url&populate[plot][populate][plotBgImage][fields][3]=width&populate[plot][populate][plotBgImage][fields][4]=height";
const missionData =
  "&populate[mission][populate][missionImage][fields][0]=name&populate[mission][populate][missionImage][fields][1]=alternativeText&populate[mission][populate][missionImage][fields][2]=url&populate[mission][populate][missionImage][fields][3]=width&populate[mission][populate][missionImage][fields][4]=height&populate[mission][populate][missionBgImage][fields][0]=name&populate[mission][populate][missionBgImage][fields][1]=alternativeText&populate[mission][populate][plotBgImage][fields][2]=url&populate[mission][populate][missionBgImage][fields][3]=width&populate[mission][populate][missionBgImage][fields][4]=height";
const activityVideo =
  "&populate[activityVideo][populate][thumbnail][fields][0]=name&populate[activityVideo][populate][thumbnail][fields][1]=alternativeText&populate[activityVideo][populate][thumbnail][fields][2]=url&populate[activityVideo][populate][thumbnail][fields][3]=width&populate[activityVideo][populate][thumbnail][fields][4]=height";
const activityGallery =
  "&populate[activityGallery][populate][galleryImages][fields][0]=name&populate[activityGallery][populate][galleryImages][fields][1]=url&populate[activityGallery][populate][galleryImages][fields][2]=alternativeText&populate[activityGallery][populate][galleryImages][fields][3]=width&populate[activityGallery][populate][galleryImages][fields][4]=height";

const activitySlider =
  "&populate[activitySlider][populate][sliderBgImage][fields][0]=name&populate[activitySlider][populate][sliderBgImage][fields][1]=url&populate[activitySlider][populate][sliderBgImage][fields][2]=alternativeText&populate[activitySlider][populate][sliderBgImage][fields][3]=width&populate[activitySlider][populate][sliderBgImage][fields][4]=height&populate[activitySlider][populate][activityListImage][fields][0]=name&populate[activitySlider][populate][activityListImage][fields][1]=url&populate[activitySlider][populate][activityListImage][fields][2]=alternativeText&populate[activitySlider][populate][activityListImage][fields][3]=width&populate[activitySlider][populate][activityListImage][fields][4]=height";

const activitySeo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";

export const activityPageQuery =
  activityInfo +
  pageHeroData +
  storyLine +
  plotData +
  missionData +
  activityVideo +
  activityGallery +
  activitySeo;

export const activityListPageQuery =
  "activity-list-page?populate[pageInfo]=*&populate[pageHeroDesktop][fields][0]=name&populate[pageHeroDesktop][fields][1]=alternativeText&populate[pageHeroDesktop][fields][2]=url&populate[pageHeroDesktop][fields][3]=width&populate[pageHeroDesktop][fields][4]=height&populate[pageHeroMobile][fields][0]=name&populate[pageHeroMobile][fields][1]=alternativeText&populate[pageHeroMobile][fields][2]=url&populate[pageHeroMobile][fields][3]=width&populate[pageHeroMobile][fields][4]=height" +
  activitySeo;
export const activityListQuery =
  "activities?sort[0]=priority:asc" +
  activitySlider +
  "&populate[activityInfo][populate][price]=*";
