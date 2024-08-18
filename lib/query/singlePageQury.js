import { apiUrl } from "../apiSettings";

// Gn Page query
const pageHero =
  "populate[pageHeroDesktop][fields][0]=name&populate[pageHeroDesktop][fields][1]=alternativeText&populate[pageHeroDesktop][fields][2]=url&populate[pageHeroDesktop][fields][3]=width&populate[pageHeroDesktop][fields][4]=height&populate[pageHeroMobile][fields][0]=name&populate[pageHeroMobile][fields][1]=alternativeText&populate[pageHeroMobile][fields][2]=url&populate[pageHeroMobile][fields][3]=width&populate[pageHeroMobile][fields][4]=height";
const seo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";

// abot page teammembers and media partners query

const teamMemberList =
  "&populate[teamMemberList][populate][photo][fields][0]=name&populate[teamMemberList][populate][photo][fields][1]=alternativeText&populate[teamMemberList][populate][photo][fields][2]=url&populate[teamMemberList][populate][photo][fields][3]=width&populate[teamMemberList][populate][photo][fields][4]=height";
const mediaPartnerList =
  "&populate[partnerMediaList][populate][partnerLogo][fields][0]=name&populate[partnerMediaList][populate][partnerLogo][fields][1]=alternativeText&populate[partnerMediaList][populate][partnerLogo][fields][2]=url&populate[partnerMediaList][populate][partnerLogo][fields][3]=width&populate[partnerMediaList][populate][partnerLogo][fields][4]=height";

// Abotu Page Data Query

export const aboutPageQuery =
  "about-page?" + pageHero + teamMemberList + mediaPartnerList + seo;
