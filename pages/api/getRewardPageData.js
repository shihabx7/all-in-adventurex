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
export const getRewardPageData = async () => {
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
      title: "Rewards Program | All In Adventures | Formerly Mystery Room",
      description:
        "Our rewards program offers you to earn points for each and every game experience. It includes surprise offers, free experiences on your birthdays and more.",
      keywords:
        "escape room rewards program, all in adventures rewards program, mystery room rewards program",
      url: "/rewards-program",
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-reward-program-hero.jpg",
    },

    pageData: {
      pagetitle: "WE LOVE OUR LOYAL CUSTOMERS",
      pagesubtitle:
        "In partnership with FIVESTARS, our rewards program offers you the opportunity to earn points for each and every AIA game experience. Those points ultimately accumulate into rewards you can redeem for future use/admissions. The program even includes surprise offers, free experiences on your birthdays, and so much more. To join, click the locations button under the READY TO SIGN UP section below.",
      totalLocation: "28",
      totalLocations: totalLocations,
      coverimageL:
        "/assets/gn-desktop-hero/allinadventures-reward-program-hero.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/allinadventures-reward-program-hero.jpg",
    },

    faqlist: [
      {
        id: 1,
        category: "reward",
        group: "reward",
        ques: "Does the program cost anything?",
        ans: ["The VIP program is FREE to join."],
      },
      {
        id: 2,
        category: "reward",
        group: "reward",
        ques: "Can I join online?",
        ans: [
          "Yes, you can! Just visit the Rewards Program page and go to READY TO SIGN UP section, then click on CHOOSE YOUR LOCATION, and you'll be redirected to fivestars.com site for your selected All In Adventures location.",
        ],
      },
      {
        id: 3,
        category: "reward",
        group: "reward",
        ques: "How old do you have to be to join?",
        ans: ["There is no age limit to join."],
      },
      {
        id: 4,
        category: "reward",
        group: "reward",
        ques: "What if I already purchased an Adventure Club Passport?",
        ans: [
          "You can bring your physical passport into the store and exchange it to be added into the new program as a VIP member for NO additional cost.",
        ],
      },
      {
        id: 5,
        category: "reward",
        group: "reward",
        ques: "What happens to the stamps I have already collected?",
        ans: [
          "All unused stamps will be converted at a rate of 50 points per stamp.",
        ],
      },
      {
        id: 6,
        category: "reward",
        group: "reward",
        ques: "Will I continue to receive $5 off every visit?",
        ans: [
          "The new program does not include this benefit going forward. However, the new program allows you to accumulate points at a much faster rate which you can use to redeem free admissions much quicker.",
        ],
      },
      {
        id: 7,
        category: "reward",
        group: "reward",
        ques: "Can I redeem points online?",
        ans: ["You will have to redeem all points physically in the store."],
      },
    ],
  };

  return data;
};
