const allphotos =
  "populate[photos][fields][0]=name&populate[photos][fields][1]=url&populate[photos][fields][2]=alternativeText&populate[photos][fields][3]=width&populate[photos][fields][4]=height&populate[location]=*";

const pageHero =
  "populate[pageHeroDesktop][fields][0]=name&populate[pageHeroDesktop][fields][1]=alternativeText&populate[pageHeroDesktop][fields][2]=url&populate[pageHeroDesktop][fields][3]=width&populate[pageHeroDesktop][fields][4]=height&populate[pageHeroMobile][fields][0]=name&populate[pageHeroMobile][fields][1]=alternativeText&populate[pageHeroMobile][fields][2]=url&populate[pageHeroMobile][fields][3]=width&populate[pageHeroMobile][fields][4]=height";
const seo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";

export const fyppageQuery = "find-your-photo-page?" + pageHero + seo;

export const allphotoQuery =
  "find-your-photos?" +
  allphotos +
  "&pagination[start]=0&pagination[limit]=9&sort[1]=publishDate:desc";

export const srcPhotoQuery =
  "&populate[photos][fields][0]=name&populate[photos][fields][1]=url&populate[photos][fields][2]=alternativeText&populate[photos][fields][3]=width&populate[photos][fields][4]=height&populate[location]=*";

export const loadMorePhotoQuery = "find-your-photos?" + allphotos;
