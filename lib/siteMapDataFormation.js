const SITEURL = process.env.SITE_URL || "https://allinadventures.com";

// get location event link
const getEventLinks = (listArr) => {
  let retArr = [];
  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      let retObj = {
        id: i + 1,
        eventName: listArr[i].event.data.attributes.eventName,
        eventSlug: listArr[i].event.data.attributes.eventSlug,
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};

// get location game link
const getGameLinks = (listArr, cat) => {
  let retLinkArr = [];
  let hasGames = false;

  if (listArr.length > 0) {
    for (let i = 0; i < listArr.length; i++) {
      if (listArr[i].activity.data.attributes.activityInfo.category == cat) {
        let retLinkObj = {
          id: i + 1,
          activityName: listArr[i].activity.data.attributes.activityName,
          activitySlug: listArr[i].activity.data.attributes.activitySlug,
        };
        retLinkArr.push(retLinkObj);
      }
    }
  }
  if (retLinkArr.length > 0) {
    hasGames = true;
  }
  let retObj = {
    hasGames: hasGames,
    gameList: retLinkArr,
  };
  return retObj;
};
// =========================HTML Sitemap link formation
export const getSitemapLocationsLinkList = (locArr) => {
  let retArr = [];
  if (locArr.length > 0) {
    for (let i = 0; i < locArr.length; i++) {
      let retObj = {
        locationName: locArr[i].attributes.locationName,
        locationSlug: locArr[i].attributes.slug,
        escapeGameSlugList: getGameLinks(
          locArr[i].attributes.locationActivities,
          "Escape Games"
        ),

        otherGameSlugList: getGameLinks(
          locArr[i].attributes.locationActivities,
          "Others"
        ),
        eventSlugList: getEventLinks(locArr[i].attributes.locationEvents),
      };
      retArr.push(retObj);
    }
  }
  return retArr;
};

export const getJobPositionLiskList = (arr) => {
  let retArr = [];
  if (arr.length > 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].attributes.isActive) {
        let obj = {
          id: i + 1,
          jobName: arr[i].attributes.jobName,
          jobSlug: arr[i].attributes.slug,
        };
        retArr.push(obj);
      }
    }
  }
  return retArr;
};

//============================= XML DATA FORMATION

const getLocActivityList = (list, locSlug) => {
  let retArr = [];
  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        loc:
          SITEURL +
          "/" +
          locSlug +
          "/activities/" +
          list[i].activity.data.attributes.activitySlug,
        lastmod: list[i].activity.data.attributes.updatedAt,
        changefreq: "daily",
        priority: 0.9,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};

const getLocEventList = (list, locSlug) => {
  let retArr = [];
  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        loc:
          SITEURL +
          "/" +
          locSlug +
          "/events/" +
          list[i].event.data.attributes.eventSlug,
        lastmod: list[i].event.data.attributes.updatedAt,
        changefreq: "daily",
        priority: 0.9,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};

export const getLocationXmlList = (locList) => {
  const locIndex = {
    loc: SITEURL + "/locations",
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.7,
  };
  let retLocArr = [locIndex];
  if (locList.length > 0) {
    for (let i = 0; i < locList.length; i++) {
      let locStaticArr = [
        {
          loc: SITEURL + "/locations/" + locList[i].attributes.slug,
          lastmod: locList[i].attributes.updatedAt,
          changefreq: "daily",
          priority: 0.9,
        },
        {
          loc: SITEURL + "/" + locList[i].attributes.slug + "/activities",
          lastmod: locList[i].attributes.updatedAt,
          changefreq: "daily",
          priority: 0.9,
        },
        {
          loc: SITEURL + "/" + locList[i].attributes.slug + "/events",
          lastmod: locList[i].attributes.updatedAt,
          changefreq: "daily",
          priority: 0.9,
        },
        {
          loc: SITEURL + "/" + locList[i].attributes.slug + "/gift-cards",
          lastmod: locList[i].attributes.updatedAt,
          changefreq: "weekly",
          priority: 0.6,
        },
        {
          loc: SITEURL + "/" + locList[i].attributes.slug + "/contact-store",
          lastmod: locList[i].attributes.updatedAt,
          changefreq: "weekly",
          priority: 0.6,
        },
      ];
      let locActivityArr = getLocActivityList(
        locList[i].attributes.locationActivities,
        locList[i].attributes.slug
      );
      let locEventsArr = getLocEventList(
        locList[i].attributes.locationEvents,
        locList[i].attributes.slug
      );
      retLocArr.push(...locStaticArr, ...locActivityArr, ...locEventsArr);
    }
  }

  return retLocArr;
};

export const getAllActivityXmlList = (list) => {
  let indexLink = {
    loc: SITEURL + "/activities",
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.9,
  };

  let retArr = [indexLink];

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        loc: SITEURL + "/activities/" + list[i].attributes.activitySlug,
        lastmod: list[i].attributes.updatedAt,
        changefreq: "daily",
        priority: 0.9,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};

export const getAllEventsXmlList = (list) => {
  let indexLink = {
    loc: SITEURL + "/events",
    lastmod: new Date().toISOString(),
    changefreq: "daily",
    priority: 0.9,
  };

  let retArr = [indexLink];

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        loc: SITEURL + "/events/" + list[i].attributes.eventSlug,
        lastmod: list[i].attributes.updatedAt,
        changefreq: "daily",
        priority: 0.9,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};

export const getBlogCatXmlList = (list) => {
  let indexLink = {
    loc: SITEURL + "/blog",
    lastmod: new Date().toISOString(),
    changefreq: "weekly",
    priority: 0.9,
  };

  let retArr = [indexLink];

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        loc: SITEURL + "/blog/category/" + list[i].attributes.categorySlug,
        lastmod: list[i].attributes.updatedAt,
        changefreq: "weekly",
        priority: 0.9,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};

export const getBlogXmlList = (list) => {
  let retArr = [];

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        loc: SITEURL + "/blog/" + list[i].attributes.slug,
        lastmod: list[i].attributes.updatedAt,
        changefreq: "daily",
        priority: 0.7,
      };
      retArr.push(obj);
    }
  }
  return retArr;
};
export const getJobXmlList = (list) => {
  let retArr = [
    {
      loc: "https://allinadventures.com/careers",
      lastmod: new Date().toISOString(),
      changefreq: "weekly",
      priority: 0.7,
    },
  ];

  if (list.length > 0) {
    for (let i = 0; i < list.length; i++) {
      let obj = {
        loc: "https://allinadventures.com/careers/" + list[i].attributes.slug,
        lastmod: list[i].attributes.updatedAt,
        changefreq: "monthly",
        priority: 0.7,
      };
      retArr.push(obj);
    }
  }
  retArr.push({
    loc: "https://allinadventures.com/careers/apply",
    lastmod: new Date().toISOString(),
    changefreq: "monthly",
    priority: 0.7,
  });
  return retArr;
};
