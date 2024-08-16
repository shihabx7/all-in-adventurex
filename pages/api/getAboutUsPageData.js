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
    partnerMediaList: [
      {
        id: 1,
        publishDate: "September 1, 2023",
        linkUrl: "https://newenglandcities.com/escape-rooms-in-connecticut/",
        image: {
          url: "/assets/nec.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 2,
        publishDate: "February 20, 2017",
        linkUrl: "https://www.usatoday.com/",
        image: {
          url: "/assets/partner-1.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 3,
        publishDate: "April 24, 2019",
        linkUrl:
          "https://www.cnbc.com/video/2019/04/24/experience-over-shopping-making-malls-hot-again.html",
        image: {
          url: "/assets/partner-2.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 4,
        publishDate: "August 15, 2015",
        linkUrl: "https://www.youtube.com/watch?v=vA9KHQ0Biqw",
        image: {
          url: "/assets/partner-3.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 5,
        publishDate: "Oct 29, 2019",
        linkUrl:
          "https://www.mycentraljersey.com/story/money/business/2019/10/29/all-in-adventures-escape-room-opens-brunswick-square-mall-nj/2484647001/",
        image: {
          url: "/assets/partner-4.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 6,
        publishDate: "September 7, 2017",
        linkUrl:
          "https://westfieldsouthwick.macaronikid.com/articles/59b173763c105d76b6e2f315/have-you-escaped-yet",
        image: {
          url: "/assets/partner-5.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 7,
        publishDate: "September 11, 2017",
        linkUrl:
          "https://www.dailyitem.com/business/escape-rooms-allows-valley-residents-to-escape-into-an-alternate/article_ea772444-96e7-11e7-9549-8fcb321a40b8.html",
        image: {
          url: "/assets/partner-6.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 8,
        publishDate: "March 5, 2018",
        linkUrl: "https://www.gazettenet.com/puzzled-escape-games-14823150",
        image: {
          url: "/assets/partner-7.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 9,
        publishDate: "December 17, 2017",
        linkUrl:
          "http://www.roanoke.com/_services/v1/client_captcha/challenge?request=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjY3MTM0NjEsImlhdCI6MTY2NjcxMzE2MSwicmVkaXJlY3QiOiIvYnVzaW5lc3MvZXNjYXBlLXJvb20tYnJpbmdzLWFkdmVudHVyZS10by12YWxsZXktdmlldy9hcnRpY2xlX2IwZGE1ODUxLWQwZjEtNTgzMy1iZThjLTk2Y2RkZWU2ZjJjNC5odG1sIiwic2VydmljZSI6Il9sYl9yYXRlX2ZvcmVpZ24iLCJzaXRlIjoicm9hbm9rZS5jb20ifQ.d3XXp_e37Y6Od5955uodmdjeiuD_0dp5ogQ4KUHTkwA",
        image: {
          url: "/assets/partner-9.png",
          alt: "allinadventures media partner",
        },
      },
      {
        id: 10,
        publishDate: "November 19, 2014",
        linkUrl: "https://www.youtube.com/watch?v=xuMg3rYggGA",
        image: {
          url: "/assets/partner-10.png",
          alt: "allinadventures media partner",
        },
      },
    ],
  };
  return data;
};
