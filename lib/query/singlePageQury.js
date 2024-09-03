import { apiUrl } from "../apiSettings";

// Gn Page query
const pageHero =
  "populate[pageHeroDesktop][fields][0]=name&populate[pageHeroDesktop][fields][1]=alternativeText&populate[pageHeroDesktop][fields][2]=url&populate[pageHeroDesktop][fields][3]=width&populate[pageHeroDesktop][fields][4]=height&populate[pageHeroMobile][fields][0]=name&populate[pageHeroMobile][fields][1]=alternativeText&populate[pageHeroMobile][fields][2]=url&populate[pageHeroMobile][fields][3]=width&populate[pageHeroMobile][fields][4]=height";
const seo =
  "&populate[seo][populate][metaImage][fields][0]=name&populate[seo][populate][metaImage][fields][1]=url&populate[seo][populate][metaSocial][fields][0]=socialNetwork&populate[seo][populate][metaSocial][fields][1]=title&populate[seo][populate][metaSocial][fields][2]=description&populate[seo][populate][metaSocial][fields][3]=hashTags&populate[seo][populate][metaSocial][populate][image][fields][0]=url";

// abot page teammembers and media partners query

const teamMemberList =
  "&populate[teamMemberList][populate][photo][fields][0]=name" +
  "&populate[teamMemberList][populate][photo][fields][1]=alternativeText" +
  "&populate[teamMemberList][populate][photo][fields][2]=url" +
  "&populate[teamMemberList][populate][photo][fields][3]=width" +
  "&populate[teamMemberList][populate][photo][fields][4]=height";
const mediaPartnerList =
  "&populate[partnerMediaList][populate][partnerLogo][fields][0]=name&" +
  "populate[partnerMediaList][populate][partnerLogo][fields][1]=alternativeText" +
  "&populate[partnerMediaList][populate][partnerLogo][fields][2]=url" +
  "&populate[partnerMediaList][populate][partnerLogo][fields][3]=width" +
  "&populate[partnerMediaList][populate][partnerLogo][fields][4]=height";

// Abotu Page Data Query

export const aboutPageQuery =
  apiUrl + "about-page?" + pageHero + teamMemberList + mediaPartnerList + seo;

//faq page query
export const faqPageQurey =
  apiUrl +
  "faq-page?" +
  pageHero +
  "&populate[faqGroup][populate][faqs]=*" +
  seo;

// customer gallery page data
const galleryImg =
  "&populate[galleryImage][populate][galleryImages][fields][0]=name" +
  "&populate[galleryImage][populate][galleryImages][fields][1]=alternativeText" +
  "&populate[galleryImage][populate][galleryImages][fields][2]=url" +
  "&populate[galleryImage][populate][galleryImages][fields][3]=width" +
  "&populate[galleryImage][populate][galleryImages][fields][4]=height";
export const galleryPageQuery =
  apiUrl + "customer-gallery-page?" + pageHero + galleryImg + seo;

// testimonial page query
const testimonialsGroup =
  "&populate[testimonialsGroup][populate][testimonials][populate][testimonialImage][fields][0]=name" +
  "&populate[testimonialsGroup][populate][testimonials][populate][testimonialImage][fields][1]=alternativeText" +
  "&populate[testimonialsGroup][populate][testimonials][populate][testimonialImage][fields][2]=url" +
  "&populate[testimonialsGroup][populate][testimonials][populate][testimonialImage][fields][3]=width" +
  "&populate[testimonialsGroup][populate][testimonials][populate][testimonialImage][fields][4]=height";
export const testimonialPageQuery =
  apiUrl + "testimonial-page?" + pageHero + testimonialsGroup + seo;

// Answer page query
export const answersPageQuery =
  apiUrl + "answer-page?" + pageHero + "&populate[options]=*" + seo;

// Careers page query
export const careerPageQuery = apiUrl + "careers-page?" + pageHero + seo;
export const jobApplicationPageQuery =
  apiUrl + "job-application-page?" + pageHero + seo;
export const jobDisclaimerPageQuery =
  apiUrl + "job-application-page?" + pageHero + seo;

// Deals and coupon page query
export const dealsCouponPageQuery =
  apiUrl + "deals-coupon-page?" + pageHero + seo;

// what-is-an-escape-room-page page query
export const whatisErPageQuery =
  apiUrl + "what-is-an-escape-room-page?" + pageHero + seo;

//volunteering page query
export const volunteeringPageQuery =
  apiUrl + "volunteering-page?" + pageHero + seo;

//franchise + franchise contact page query
export const franchisePageQuery = apiUrl + "franchise-page?" + pageHero + seo;
export const franchiseContactPageQuery =
  apiUrl + "franchise-contact-page?" + pageHero + seo;

// site map
export const siteMapLocationQuery =
  apiUrl +
  "locations?populate[locationActivities][populate][activity][populate][activityInfo]=*" +
  "&populate[locationEvents][populate][event]=*&sort[0]=priority:asc";
export const siteMapBlogQuery =
  apiUrl + "blogs?[fields][0]=title&[fields][1]=slug&sort[1]=publishDate:desc";
export const siteMapBlogCategoryQuery =
  apiUrl + "blog-categories?sort[1]=publishedAt:asc";
