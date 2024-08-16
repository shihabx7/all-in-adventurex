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
export const getPricingPageData = async () => {
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
  const data = {
    locationSlugList: getLocationSlugList(locationListData),
    escapeGameSlugList: getAllEscapeGameSlugList(actctivityListResData),
    otherGameSlugList: getAllOtherGameSlugList(actctivityListResData),
    eventSlugList: getAllEventSlugList(eventListResData),
    totalLocations: totalLocations,

    pageMeta: {
      title: "Pricing | All In Adventures | Formerly Mystery Room",
      description:
        "Escape Room prices vary based on the group size. We offer affordable and innovative pricing for all our games and activities to appeal to groups of all sizes.",
      keywords:
        "escape room pricing, escape room cost, all in adventures pricing, all in adventures cost, mystery room pricing, mystery room cost, escape game pricing, escape game cost,",
      url: "/pricing",
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-pricing-hero.jpg",
    },

    pageData: {
      pagetitle: "ALL IN ADVENTURES PRICING",
      pagesubtitle:
        "How much does an Escape Room cost? Nowadays, It's a very common question! Escape Room prices vary based on the group size. We offer affordable and innovative pricing for all our games and activities to appeal to groups of all sizes. ",

      totalLocations: totalLocations,
      coverimageL: "/assets/gn-desktop-hero/allinadventures-pricing-hero.jpg",
      coverimageM: "/assets/gn-mobile-hero/allinadventures-pricing-hero.jpg",
    },

    faqlist: [
      {
        id: 1,
        category: "deals",
        group: "deals",
        ques: "Does the program cost anything?",
        ans: "All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
      },
      {
        id: 2,
        category: "deals",
        group: "deals",
        ques: "Can I join online?",
        ans: [
          "All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
        ],
      },
      {
        id: 4,
        category: "deals",
        group: "deals",
        ques: "What skills do I need to play?",
        ans: [
          "All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
        ],
      },
      {
        id: 5,
        category: "deals",
        group: "deals",
        ques: "May I leave the room in the middle of the game?",
        ans: [
          "All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
        ],
      },
      {
        id: 6,
        category: "deals",
        group: "deals",
        ques: "What if we need help during the game?",
        ans: [
          "All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
        ],
      },
    ],
    inpersonpricing: [
      {
        id: 1,
        group_size: "1-3",
        group_text: "Guests",
        price: "32.99",
        person: "Per Person",
      },
      {
        id: 2,
        group_size: "4-6",
        group_text: "Guests",
        price: "29.99",
        person: "Per Person",
      },
      {
        id: 3,
        group_size: "7+",
        group_text: "Guests",
        price: "26.99",
        person: "Per Person",
      },
    ],
    nextgenpricing: [
      {
        id: 1,
        group_size: "Per Player",
        group_text: "Minimum 2 players",
        price: "39.95",
        person: "Per Person",
      },
      {
        id: 2,
        group_size: "4 Players",
        group_text: "Full private room",
        price: "149.95",
        person: "4 Person",
      },
    ],
    questgenpricing: [
      {
        id: 1,
        group_size: "Per Player",
        group_text: "Minimum 2 players",
        price: "29.89",
        person: "Per Person",
      },
      {
        id: 2,
        group_size: "8 Players",
        group_text: "Full private room",
        price: "209.00",
        person: "8 Person",
      },
    ],
  };

  return data;
};
