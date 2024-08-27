import { apiSetting, apiUrl } from "../../lib/apiSettings";
import {
  locationSlugListQuery,
  allActivitiesSluglistQuery,
  allEventsSluglistQuery,
} from "../../lib/query/navMenuQuery";
import {
  getLocationSlugList,
  getAllEscapeGameSlugList,
  getAllOtherGameSlugList,
  getAllEventSlugList,
} from "../../lib/menuDataFormation";

import { galleryPageQuery } from "../../lib/query/singlePageQury";
import {
  getSinglePageMeta,
  getSinglePageData,
  getGalleryGroup,
} from "../../lib/singlePageDataFormation";
export const getGalleryPageData = async () => {
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

  const pegeRes = await fetch(galleryPageQuery, apiSetting);
  const pegeResObj = await pegeRes.json();
  const pageResData = pegeResObj.data.attributes;

  const seoData = pageResData.seo;
  const ftImage = pageResData.pageHeroMobile.data.attributes.url;

  //const tst = getSinglePageMeta(seoData, ftImage, "faqs");
  //const pdt = getSinglePageData(pageResData, totalLocations);

  // console.log(pdt);

  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,
    pageMeta: getSinglePageMeta(seoData, ftImage, "gallery"),

    pageData: getSinglePageData(pageResData, totalLocations),

    galleryGroup: getGalleryGroup(pageResData.galleryImage),

    galleryList: [
      {
        id: 1,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-treasure-island-gallery-4.jpg",
      },
      {
        id: 2,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-superheros-adventure-gallery-2.jpg",
      },
      {
        id: 3,
        type: "inperson",

        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-hollywood-premiere-gallery-5.jpg",
      },
      {
        id: 4,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-sherlocks-library-gallery-1.jpg",
      },

      {
        id: 5,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-black-ops-gallery-4.jpg",
      },
      {
        id: 6,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-escape-from-alcatraz-gallery-1.jpg",
      },
      {
        id: 7,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-team-building-testimonials-1.jpg",
      },

      {
        id: 8,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-houdinis-magic-cell-gallery-2.jpg",
      },
      {
        id: 9,
        type: "inperson",
        category: "escapegame",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-team-building-testimonials-7.jpg",
      },
      //==========================================================event gl list
      {
        id: 10,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-bachelorette-parties-testimonials-1.jpg",
      },
      {
        id: 11,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-bachelorette-parties-testimonials-2.jpg",
      },
      {
        id: 12,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-birthday-party-testimonials-3.jpg",
      },
      {
        id: 13,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-gender-reveal-party-testimonials-4.jpg",
      },

      {
        id: 14,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-graduation-party-testimonials-5.jpg",
      },
      {
        id: 15,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-private-parties-testimonials-6.jpg",
      },
      {
        id: 16,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/allinadventures-events-team-building-testimonials-7.jpg",
      },

      {
        id: 17,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/Allinadventures-gallery-Details-Page---Gallery-Images-8.jpg",
      },
      {
        id: 18,
        type: "inperson",
        category: "events",
        gallery_img:
          "/assets/all-gallery/Allinadventures-gallery-Details-Page----Gallery-Images-9.jpg",
      },
      //==========================================================other inperson  gl list
      {
        id: 19,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-axe-throwing-gallery-1.jpg",
      },
      {
        id: 20,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-beat-the-seat-gallery-2.jpg",
      },
      {
        id: 21,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-game-show-room-gallery-3.jpg",
      },
      {
        id: 22,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-game-show-room-gallery-4.jpg",
      },

      {
        id: 23,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-beat-the-seat-gallery-5.jpg",
      },
      {
        id: 24,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-beat-the-seat-gallery-6.jpg",
      },
      {
        id: 25,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-beat-the-seat-gallery-7.jpg",
      },

      {
        id: 26,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-game-show-room-gallery-8.jpg",
      },
      {
        id: 27,
        type: "inperson",
        category: "others",
        gallery_img:
          "/assets/all-gallery/allinadventures-game-show-room-gallery-9.jpg",
      },
      //==========================================================other inperson  gl list
      {
        id: 28,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-escape-room-aztec-gallery-1.jpg",
      },
      {
        id: 29,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-escape-room-japan-gallery-2.jpg",
      },
      {
        id: 30,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-escape-room-japan-gallery-3.jpg",
      },
      {
        id: 31,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-escape-room-madness-gallery-4.jpg",
      },

      {
        id: 32,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-5.jpg",
      },
      {
        id: 33,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-6.jpg",
      },
      {
        id: 34,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-7.jpg",
      },

      {
        id: 35,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-escape-room-prison-gallery-8.jpg",
      },
      {
        id: 36,
        type: "virtual",
        category: "virtual",
        gallery_img:
          "/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-9.jpg",
      },
    ],
  };

  return data;
};

/*const OldgalleryList: [
  {
    id: 1,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-treasure-island-gallery-4.jpg",
  },
  {
    id: 2,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-superheros-adventure-gallery-2.jpg",
  },
  {
    id: 3,
    type: "inperson",

    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-hollywood-premiere-gallery-5.jpg",
  },
  {
    id: 4,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-sherlocks-library-gallery-1.jpg",
  },

  {
    id: 5,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-black-ops-gallery-4.jpg",
  },
  {
    id: 6,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-escape-from-alcatraz-gallery-1.jpg",
  },
  {
    id: 7,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-team-building-testimonials-1.jpg",
  },

  {
    id: 8,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-houdinis-magic-cell-gallery-2.jpg",
  },
  {
    id: 9,
    type: "inperson",
    category: "escapegame",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-team-building-testimonials-7.jpg",
  },
  //==========================================================event gl list
  {
    id: 10,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-bachelorette-parties-testimonials-1.jpg",
  },
  {
    id: 11,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-bachelorette-parties-testimonials-2.jpg",
  },
  {
    id: 12,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-birthday-party-testimonials-3.jpg",
  },
  {
    id: 13,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-gender-reveal-party-testimonials-4.jpg",
  },

  {
    id: 14,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-graduation-party-testimonials-5.jpg",
  },
  {
    id: 15,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-private-parties-testimonials-6.jpg",
  },
  {
    id: 16,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/allinadventures-events-team-building-testimonials-7.jpg",
  },

  {
    id: 17,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/Allinadventures-gallery-Details-Page---Gallery-Images-8.jpg",
  },
  {
    id: 18,
    type: "inperson",
    category: "events",
    gallery_img:
      "/assets/all-gallery/Allinadventures-gallery-Details-Page----Gallery-Images-9.jpg",
  },
  //==========================================================other inperson  gl list
  {
    id: 19,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-axe-throwing-gallery-1.jpg",
  },
  {
    id: 20,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-beat-the-seat-gallery-2.jpg",
  },
  {
    id: 21,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-game-show-room-gallery-3.jpg",
  },
  {
    id: 22,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-game-show-room-gallery-4.jpg",
  },

  {
    id: 23,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-beat-the-seat-gallery-5.jpg",
  },
  {
    id: 24,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-beat-the-seat-gallery-6.jpg",
  },
  {
    id: 25,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-beat-the-seat-gallery-7.jpg",
  },

  {
    id: 26,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-game-show-room-gallery-8.jpg",
  },
  {
    id: 27,
    type: "inperson",
    category: "others",
    gallery_img:
      "/assets/all-gallery/allinadventures-game-show-room-gallery-9.jpg",
  },
  //==========================================================other inperson  gl list
  {
    id: 28,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-escape-room-aztec-gallery-1.jpg",
  },
  {
    id: 29,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-escape-room-japan-gallery-2.jpg",
  },
  {
    id: 30,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-escape-room-japan-gallery-3.jpg",
  },
  {
    id: 31,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-escape-room-madness-gallery-4.jpg",
  },

  {
    id: 32,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-5.jpg",
  },
  {
    id: 33,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-6.jpg",
  },
  {
    id: 34,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-7.jpg",
  },

  {
    id: 35,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-escape-room-prison-gallery-8.jpg",
  },
  {
    id: 36,
    type: "virtual",
    category: "virtual",
    gallery_img:
      "/assets/all-gallery/allinadventures-virtual-game-show-room-gallery-9.jpg",
  },
],*/
