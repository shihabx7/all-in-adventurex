import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import {
  careerPageQuery,
  jobPositionSlugQuery,
  jobOpeningsQuery,
} from "../../lib/query/singlePageQury";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";
import {
  getSinglePageMeta,
  getSinglePageData,
  getJobCardList,
} from "../../lib/singlePageDataFormation";
//===================================v2
import {
  jobPostQuery,
  jobPositonListQuery,
} from "../../lib/v2/query/jobPostQuery";

import {
  jobPositionList,
  jobPositionCardList,
  jobSearchLocationList,
} from "../../lib/v2/formate/jobPostformater";

export const getCareerHomePageDataV2 = async () => {
  // fetch all location list as an array
  const locationListRes = await fetch(locationSlugListQuery, apiSetting);
  const locationListObj = await locationListRes.json();
  const locationListData = locationListObj.data;
  // fetch all activity list as an array
  const activityListRes = await fetch(allActivitiesSluglistQuery, apiSetting);
  const activityListObj = await activityListRes.json();
  const actctivityListResData = activityListObj.data;

  // fetch all event list as an array
  const eventListRes = await fetch(allEventsSluglistQuery, apiSetting);
  const eventListResObj = await eventListRes.json();
  const eventListResData = eventListResObj.data;

  const totalActivities = actctivityListResData.length;
  const totalLocations = locationListData.length;

  // fetch page data

  const pegeRes = await fetch(careerPageQuery, apiSetting);
  const pegeResObj = await pegeRes.json();
  const pageResData = pegeResObj.data.attributes;

  console.log("||||||");
  console.log(
    "Career page Data : ",
    JSON.stringify(pageResData.associateJobDetails),
  );

  const seoData = pageResData.seo;
  const ftImage = pageResData.pageHeroMobile.data.attributes.url;
  // fetch page data end
  // fatch job position data

  const jobPosRes = await fetch(jobPositionSlugQuery, apiSetting);
  const jobPosResObj = await jobPosRes.json();
  const jobPosResData = jobPosResObj.data;

  //================================v2
  const jobOpeningsRes = await fetch(jobPostQuery, apiSetting);
  const jobOpeningsResObj = await jobOpeningsRes.json();
  const jobOpeningsResData = jobOpeningsResObj.data;

  console.log("job Openings Data : ", JSON.stringify(jobOpeningsResData));
  const jobCardList = jobPositionCardList(jobOpeningsResData);
  //.log("||||||");
  // console.log("job Openings Data after format : ", JSON.stringify(jobCardList));

  const jobPositionListRes = await fetch(jobPositonListQuery, apiSetting);
  const jobPositionListObj = await jobPositionListRes.json();
  const jobPositionListData = jobPositionListObj.data;

  const jobPosList = jobPositionList(jobPositionListData);
  const jobLocList = jobSearchLocationList(locationListData);
  // console.log("locationList : ", JSON.stringify(jobLocList));
  //console.log("job Position List Data : ", JSON.stringify(jobPositionListData));
  // console.log("||||||");
  //  console.log("job Position List Data after format : ", JSON.stringify(jobPosList), );
  //================================v2 end

  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getSinglePageMeta(seoData, ftImage, "careers"),

    pageData: getSinglePageData(pageResData, totalLocations),
    jobCardList: getJobCardList(jobPosResData),
    jobOpeningsList: jobOpeningsResData,
    //=================================================v2
    jobPositionList: jobPosList, //jobPositionList(jobPositionListData),
    jobPositionCardList: jobCardList,
    jobSearchLocationList: jobLocList, //obPositionCardList(jobOpeningsResData),
    pinJobData: pageResData.associateJobDetails,
  };

  return data;
};

const pageDt = {
  pageTitle: "CAREERS AT ALL IN ADVENTURES",
  pageSubTitle:
    "<p>Passion led us here! We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. We love our awesome team! Join us.</p>",
  createdAt: "2024-08-24T14:06:35.595Z",
  updatedAt: "2026-09-24T11:58:31.904Z",
  publishedAt: "2024-08-24T14:06:38.353Z",
  pageHeroDesktop: {
    data: {
      id: 870,
      attributes: {
        name: "allinadventures-career-hero.jpg",
        alternativeText:
          "Two individuals shaking hands over a table, symbolizing collaboration and partnership at All In Adventures.",
        url: "/uploads/allinadventures_career_hero_7e347dc7ee.jpg",
        width: 2250,
        height: 750,
      },
    },
  },
  pageHeroMobile: {
    data: {
      id: 871,
      attributes: {
        name: "allinadventures-career-hero-mobile.jpg",
        alternativeText:
          "A handshake between two people at a table, representing teamwork and professional connections at All In Adventures.",
        url: "/uploads/allinadventures_career_hero_mobile_21b40c2b32.jpg",
        width: 700,
        height: 560,
      },
    },
  },
  associateJobDetails: {
    id: 1,
    jobTitle: "Associate",
    commaSeparetedTags: "Hiring,  Part-Time,  On-Site,  All Locations",
    cardText:
      "Our part-time Associate role is open at every location, all the time. Jump in on the guest floor, run live games, and deliver the guest-obsessed experience we're known for.",
    description:
      "<p>All in Adventures, LLC. is an equal opportunity employer and affirmatively seeks diversity in its workforce. All in Adventures recruits qualified applicants and advances in employment its employees without regard to race, color, religion, gender, sexual orientation, gender identity, gender expression, age, disability, genetic information, ethnic or national origin, marital status, veteran status, or any other status protected by law.</p><h4>As an associate, you will:</h4><ul><li>Greet new guests as they arrive for their scheduled appointments, or simply stop in to inquire about the experience</li><li>Good verbal skills are important as you will be informing guests about the overall experience, theme options, and safety rules and regulations</li><li>Good manners will go a long way as you guide each guest to their selected escape room</li><li>Even if they beg, you won’t give away clues, but you could be asked to interpret a theme’s overall mission to help our guests get moving</li><li>After guests exit their selected rooms and desire to share their experiences, you will be there to support, encourage and affirm their game strategy, plus invite them back in the future</li><li>Support the daily operations of the facility; including the quick, accurate recovery of each mystery room immediately after use</li><li>Have an open ear to any guests who may express any dissatisfaction with their experience; escalate those grievances to the appropriate manager</li><li>Assist with the arrangement of furniture, backdrops, props or window displays, as outlined by company standards</li><li>Ensure signage, written game clues, etc. reflect appropriate changes in themed promotions and upholds company guidelines</li><li>Perform daily end-of-day register tasks</li></ul><p><strong>If you are interested in applying for this role, please click below to complete an employment application and submit your resume for review by our recruiting team.</strong></p>",
  },
  seo: {
    id: 93,
    metaTitle: "Careers | All In Adventures | Formerly Mystery Room",
    metaDescription:
      "Explore career opportunities at All In Adventures. Join a fun, dynamic team and help create exciting escape room experiences. Apply TODAY!",
    keywords:
      "escape room careers, all in adventures careers, mystery room careers, escape room jobs, all in adventures jobs, mystery room jobs,",
    metaRobots: null,
    structuredData: [
      {
        "@type": "JobPosting",
        title: "Associate",
        "@context": "https://schema.org/",
        datePosted: "2024-09-10T18:00:00.000Z",
        description:
          "The Associate is the guest experience specialist, who is each guest's first and last impression of All In Adventures! This position serves as the vitally important liaison between our guests and our team. The ideal candidate will greet new guests as they arrive and inquire about the experience after the game.",
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress" },
        },
        validThrough: "2024-10-10T00:00:00.000Z",
        hiringOrganization: {
          name: "All In Adventures",
          "@type": "Organization",
        },
      },
      {
        "@type": "JobPosting",
        title: "Store Lead",
        "@context": "https://schema.org/",
        datePosted: "2024-09-10T18:00:00.000Z",
        description:
          "Our Store Lead positions exist to inspire, serve, and empower their team to uphold our outstanding services and hospitality standards. They are ultimately responsible for the success or failure of the store. The ideal candidate is eager to be flexible and creative in a fast-paced, high-stress environment.",
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress" },
        },
        validThrough: "2024-10-10T00:00:00.000Z",
        hiringOrganization: {
          name: "All In Adventures",
          "@type": "Organization",
        },
      },
      {
        "@type": "JobPosting",
        title: "Assistant Manager",
        "@context": "https://schema.org/",
        datePosted: "2024-09-10T18:00:00.000Z",
        description:
          "Our Assistant Manager assists the Store Manager in encouraging the team to achieve success by ensuring our guests' overall satisfaction. The ideal candidates need positive attitude, willingness to provide outstanding guest service, and a desire to succeed. They must utilize their communication skills.",
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress" },
        },
        validThrough: "2024-10-10T00:00:00.000Z",
        hiringOrganization: {
          name: "All In Adventures",
          "@type": "Organization",
        },
      },
      {
        "@type": "JobPosting",
        title: "Store Manager",
        "@context": "https://schema.org/",
        datePosted: "2024-09-10T18:00:00.000Z",
        description:
          "The Store Manager position inspires your team to achieve success by ensuring the overall satisfaction of our guests. This position requires managing the store's day-to-day operations and financial success, including growing sales through local store marketing efforts.",
        jobLocation: {
          "@type": "Place",
          address: { "@type": "PostalAddress" },
        },
        validThrough: "2024-10-10T00:00:00.000Z",
        hiringOrganization: {
          name: "All In Adventures",
          "@type": "Organization",
        },
      },
    ],
    metaViewport: null,
    canonicalURL: "https://allinadventures.com/careers",
    metaImage: {
      data: {
        id: 871,
        attributes: {
          name: "allinadventures-career-hero-mobile.jpg",
          url: "/uploads/allinadventures_career_hero_mobile_21b40c2b32.jpg",
        },
      },
    },
    metaSocial: {
      id: 119,
      socialNetwork: "Twitter",
      title: "Careers | All In Adventures | Formerly Mystery Room",
      description:
        "Explore career opportunities at All In Adventures. Join a fun, dynamic team and help create exciting escape room experiences. Apply TODAY!",
      hashTags: null,
      image: {
        data: {
          id: 871,
          attributes: {
            url: "/uploads/allinadventures_career_hero_mobile_21b40c2b32.jpg",
          },
        },
      },
    },
  },
};
