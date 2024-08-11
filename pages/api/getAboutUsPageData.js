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

export const getAboutUsPageData = async () => {
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
      title: "About Us | All In Adventures | Formerly Mystery Room",
      description:
        "All In Adventures (formerly Mystery Room) is now more than an escape room place. Come join us to experience more entertaining activities. ",
      keywords:
        "all in adventures about us, all in adventures about, mystery room about us, mystery room about",
      url: "/about",
      metaindex: true,
      metaimg: "/assets/gn-mobile-hero/allinadventures-about-us-hero.jpg",
    },

    pageData: {
      pagetitle: "ABOUT ALL IN ADVENTURES",
      pagesubtitle:
        "Experience fun activities, escape rooms, game show rooms, beat the seat and axe throwing with locations throughout the U.S.",

      coverimageL: "/assets/gn-desktop-hero/allinadventures-about-us-hero.jpg",
      coverimageM: "/assets/gn-mobile-hero/allinadventures-about-us-hero.jpg",
      totalLocations: totalLocations,
    },
    teamMembersList: [
      {
        id: 1,
        name: "John Reichel",
        designation: "Founder/CEO",
        img: "/assets/team-member/John-Reichel.png",
      },
      {
        id: 2,
        name: "Chetan Patel",
        designation: "President",
        img: "/assets/team-member/Chetan-Patel.png",
      },
      {
        id: 3,
        name: "Sara Reshoft",
        designation: "Vice President of Planning and Facilities",
        img: "/assets/team-member/Sara-Reshoft.png",
      },
      {
        id: 4,
        name: "Jennifer Reichel",
        designation: "Human Resources Specialist",
        img: "/assets/team-member/Jen-Reichel.png",
      },
      {
        id: 5,
        name: "Beth Palmer",
        designation: "Director of Employee Development",
        img: "/assets/team-member/Beth-Palmer.png",
      },
      {
        id: 6,
        name: "John Reshoft",
        designation: "Director of Construction and Facilities",
        img: "/assets/team-member/John-Reshoft.png",
      },
      {
        id: 7,
        name: "Brian Capps",
        designation: "Director of Game Development",
        img: "/assets/team-member/Brian-Capps.png",
      },
      {
        id: 8,
        name: "Jordan Pursell",
        designation: "Regional Manager",
        img: "/assets/team-member/Jordan-Pursell.png",
      },
      /*{
                "id":9,
                "name":"Bruce Seide",
                "designation":"Regional Manager",
                "img":"/assets/team-member/Bruce-Seide.png"
            },*/
      {
        id: 10,
        name: "Adam Spink",
        designation: "Regional Manager",
        img: "/assets/team-member/Adam-Spink.png",
      },
    ],
  };
  return data;
};
