import { getLocationIndActivityList } from "./getLocationIndActivityList";
import { getLocationsPageData } from "../getLocationsPageData";
import { bookingList, hasAxeParty } from "./bookingList";
import { getLocationActivitySlugList } from "./getLocationActivitySlugList";
import { getLocationEventSlugList } from "./getLocationEventSlugList";
import { getLocTotal } from "../AllDataList/getLocTotal";
export const getLocationSingleActivitypageData = (gameslug, locationslug) => {
  const locData = getLocationsPageData();
  const getLocSpec = (slug) => {
    var i = 0;
    var j = 0;
    for (i = 0; i < locData.states.length; i++) {
      for (j = 0; j < locData.states[i].cities.length; j++) {
        if (locData.states[i].cities[j].slug == slug) {
          return locData.states[i].cities[j];
        }
      }
    }
  };
  const activitiesName = gameslug.toString().split("-").join(" ");
  const locationname = locationslug.toString().split("-").join(" ");

  const malldata = getLocationIndActivityList(locationslug);

  const bookingdata = bookingList(gameslug, locationslug);

  const eventbookinglist = bookingList("", locationslug);

  const totalLocation = () => {
    var locdata = getLocationsPageData().states;
    var total = 0;

    for (var i = 0; i < locdata.length; i++) {
      total = total + locdata[i].cities.length;
    }

    return total;
  };
  const locnameMod = (locname) => {
    var spLoc = locname.split("-");
    if (spLoc[0] == "n") {
      spLoc[0] = spLoc[0] + ".";
    }
    var st = spLoc[spLoc.length - 1].toString();
    spLoc = spLoc.slice(0, -1);
    spLoc = spLoc.join(" ");

    var ret = spLoc + ", " + st;
    return ret;
  };

  const getLocationSearchName = (slug) => {
    var locs = slug.split("-");
    if (locs[0] == "n") {
      locs[0] = "n.";
    }
    var st = locs[locs.length - 1].toString();
    locs = locs.slice(0, -1);
    locs = locs.join(" ");

    return locs + ", " + st;
  };

  const salt = (cat) => {
    var ret = "escape room";

    if (cat == "other") {
      ret = "";
    }
    return ret;
  };
  // SEO FUNCTION===========
  const capCity = (str, lslug) => {
    var cityArr = lslug.split("-");
    if (cityArr[0] == "n" || cityArr[0] == "N") {
      cityArr[0] = "North";
    }
    var citySt = cityArr[cityArr.length - 1].toString().toUpperCase();

    cityArr = cityArr.slice(0, -1);
    var x;

    for (x = 0; x < cityArr.length; x++) {
      var upc = cityArr[x].charAt(0).toUpperCase();
      var nnsp = cityArr[x].substring(0, 0) + upc + cityArr[x].substring(0 + 1);
      cityArr[x] = nnsp;
    }
    var upcity = cityArr.join(" ") + " " + citySt;

    return str.replaceAll("CITY", upcity);
  };
  const lowCity = (str, slug) => {
    var locn = slug.split("-");
    if (locn[0] == "n" || locn[0] == "N") {
      locn[0] = "North";
    }

    var upcity = locn.join(" ");

    return str.replaceAll("CITY", upcity);
  };
  const capMall = (str, mall) => {
    var mallArr = mall.split(" ");
    var appArr = ["to", "at", "in", "for", "of", "it", "a", "an"];

    var y;

    for (y = 0; y < mallArr.length; y++) {
      if (!appArr.includes(mallArr[y]) && mallArr[y] != "USA") {
        if (mallArr[y] == "usa") {
          mallArr[y] == mallArr[y].toUpperCase();
        }
        var upc = mallArr[y].charAt(0).toUpperCase();
        var nnsp =
          mallArr[y].substring(0, 0) + upc + mallArr[y].substring(0 + 1);

        mallArr[y] = nnsp;
      }
    }
    var capmall = mallArr.join(" ");

    return str.replaceAll("MALL", capmall);
  };
  const getState = (locslug) => {
    var stArr = locslug.split("-");
    return stArr[stArr.length - 1].toUpperCase();
  };
  // SEO FUNCTION end===========
  const activityData = {
    //"pagemeta":activityDataset[gameslug].pagemeta,
    pagemeta: {
      title: capCity(activityDataset[gameslug].pagemeta.title, locationslug),
      description: activityGuest[locationslug][gameslug].pagesubtitle
        ? capMall(
            activityGuest[locationslug][gameslug].pagesubtitle,
            malldata.pagedata.mall
          )
        : capMall(
            activityDataset[gameslug].pagesubtitle,
            malldata.pagedata.mall
          ),
      keywords: lowCity(
        activityDataset[gameslug].pagemeta.keywords,
        locationslug
      ),
      url: "/" + locationslug + "/" + activityDataset[gameslug].pagemeta.url,
      metaindex: activityDataset[gameslug].pagemeta.metaindex,
      metaimg: activityDataset[gameslug].pagemeta.metaimg,
    },

    pagedata: {
      pagetitle:
        activityDataset[gameslug].activityname +
        " " +
        salt(activityDataset[gameslug].activitydata.category),
      pagesubtitle: activityGuest[locationslug][gameslug].pagesubtitle
        ? activityGuest[locationslug][gameslug].pagesubtitle
        : activityDataset[gameslug].pagesubtitle,
      themeImage: activityDataset[gameslug].themeImage
        ? activityDataset[gameslug].themeImage
        : false,
      themeImageAlt: activityDataset[gameslug].themeImageAlt
        ? activityDataset[gameslug].themeImageAlt
        : false,
      publish_status: getLocTotal(locationslug).publish_status,
      totalLocation: "28",
      coverimageL: activityDataset[gameslug].coverimageL,
      coverimageM: activityDataset[gameslug].coverimageM,
      totalLocations: totalLocation(),
      slug: gameslug,
      groupcat: activityDataset[gameslug].groupcat
        ? activityDataset[gameslug].groupcat
        : "",
      locationslug: locationslug,
      location_name: locnameMod(locationslug),
      location_serach_name: getLocationSearchName(locationslug),
      mall: malldata.pagedata.mall,
      city: getLocSpec(locationslug).city,
      state: getState(locationslug),
      mall: getLocSpec(locationslug).mall,
      price: activityGuest[locationslug][gameslug].price
        ? activityGuest[locationslug][gameslug].price
        : activityDataset[gameslug].price,
      duration: activityGuest[locationslug][gameslug].duration
        ? activityGuest[locationslug][gameslug].duration
        : activityDataset[gameslug].duration,
      max_players: activityGuest[locationslug][gameslug].max_players,
      min_players: activityGuest[locationslug][gameslug].min_players,
      age: activityDataset[gameslug].age
        ? activityDataset[gameslug].age
        : false,
      success_rate: activityGuest[locationslug][gameslug].success_rate
        ? activityGuest[locationslug][gameslug].success_rate
        : activityDataset[gameslug].success_rate,
      activityname: activityDataset[gameslug].shortname
        ? activityDataset[gameslug].shortname
        : activityDataset[gameslug].activityname,
      notice: activityDataset[gameslug].notice
        ? activityDataset[gameslug].notice
        : false,
      notice_img: activityGuest[locationslug][gameslug].notice_img
        ? activityGuest[locationslug][gameslug].notice_img
        : false,
      bookingdata: bookingdata,
      bookingParty: hasAxeParty(locationslug)
        ? bookingList("axe-throwing-party", locationslug)
        : false,
      private_events: activityDataset[gameslug].private_events
        ? activityDataset[gameslug].private_events
        : false,
      eventbooking: {
        shortname: eventbookinglist.shortname,
        item: eventbookinglist["party-package"].item,
        flow: eventbookinglist["party-package"].flow,
        eventstatus: eventbookinglist["party-package"].eventstatus,
      },
      locdetail: getLocSpec(locationslug),
    },
    //activitydata: activityDataset[gameslug].activitydata,
    activitydata: {
      category: activityGuest[locationslug][gameslug].category
        ? activityGuest[locationslug][gameslug].category
        : activityDataset[gameslug].activitydata.category,
      story: activityGuest[locationslug][gameslug].story
        ? activityGuest[locationslug][gameslug].story
        : activityDataset[gameslug].activitydata.story,
      storyimg: activityGuest[locationslug][gameslug].storyimg
        ? activityGuest[locationslug][gameslug].storyimg
        : activityDataset[gameslug].activitydata.storyimg,
      storyimg_alt: activityGuest[locationslug][gameslug].storyimg_alt
        ? activityGuest[locationslug][gameslug].storyimg_alt
        : activityDataset[gameslug].activitydata.storyimg_alt,
      story_bg: activityGuest[locationslug][gameslug].story_bg
        ? activityGuest[locationslug][gameslug].story_bg
        : activityDataset[gameslug].activitydata.story_bg,
      scene: activityGuest[locationslug][gameslug].scene
        ? activityGuest[locationslug][gameslug].scene
        : activityDataset[gameslug].activitydata.scene,
      sceneimg: activityGuest[locationslug][gameslug].sceneimg
        ? activityGuest[locationslug][gameslug].sceneimg
        : activityDataset[gameslug].activitydata.sceneimg,
      sceneimg_alt: activityGuest[locationslug][gameslug].sceneimg_alt
        ? activityGuest[locationslug][gameslug].sceneimg_alt
        : activityDataset[gameslug].activitydata.sceneimg_alt,
      scene_bg: activityGuest[locationslug][gameslug].scene_bg
        ? activityGuest[locationslug][gameslug].scene_bg
        : activityDataset[gameslug].activitydata.scene_bg,
      mission: activityGuest[locationslug][gameslug].mission
        ? activityGuest[locationslug][gameslug].mission
        : activityDataset[gameslug].activitydata.mission,
      missionimg: activityGuest[locationslug][gameslug].missionimg
        ? activityGuest[locationslug][gameslug].missionimg
        : activityDataset[gameslug].activitydata.missionimg,
      missionimg_alt: activityGuest[locationslug][gameslug].missionimg_alt
        ? activityGuest[locationslug][gameslug].missionimg_alt
        : activityDataset[gameslug].activitydata.missionimg_alt,
      videoid: activityGuest[locationslug][gameslug].videoid
        ? activityGuest[locationslug][gameslug].videoid
        : activityDataset[gameslug].activitydata.videoid,
      videothumb: activityGuest[locationslug][gameslug].videothumb
        ? activityGuest[locationslug][gameslug].videothumb
        : activityDataset[gameslug].activitydata.videothumb,
    },
    activitygallery: activityDataset[gameslug].activitygallery,
    locationlist: getLocTotal(locationslug).locationlist,
    activitylist: getLocationActivitySlugList(locationslug),
    eventlist: getLocationEventSlugList(locationslug),
  };

  return activityData;
};

const activityDataset = {
  //============================================escape-from-alcatraz 1
  "escape-from-alcatraz": {
    activityname: "Escape From Alcatraz",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-escape-from-alcatraz-theme-prison-break.png",
    themeImageAlt: "prison break escape room theme",
    pagesubtitle:
      "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "56%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-escape-from-alcatraz.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-escape-from-alcatraz.jpg",
    coverimageM_alt: "escape from alcatraz allinadventures ",

    pagemeta: {
      title: "Escape From Alcatraz Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them or they'll escape.",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room CITY, all in adventure escape from alcatraz CITY, mystery room escape from alcatraz,  alcatraz escape room, prison break escape room CITY, prison break escape room near me, jail break escape room CITY, escape from alcatraz escape room near me CITY, prison themed escape room CITY, escape alcatraz escape room, escape from alcatraz escape game CITY,",
      url: "/activities/escape-from-alcatraz",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-escape-from-alcatraz.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.",
      storyimg:
        "/assets/all-game-details/allinadventures-escape-from-alcatraz-storyline.png",
      storyimg_alt: "allinadventures-escape-from-alcatraz-storyline",

      scene:
        "After returning to his office, the Warden discovers that all ten keys to the prison have gone missing! He has summoned you and his most fearless guards to help find the missing keys before any prisoners use them to attempt an escape. Retrace the Warden's steps to find the keys and save Alcatraz from going into full lockdown.",
      sceneimg:
        "/assets/all-game-details/allinadventures-escape-from-alcatraz-plot.png",
      sceneimg_alt: "allinadventures-escape-from-alcatraz-plot",
      story_bg: "/assets/svg/game-bg-pattern/lock-and-key.svg",
      scene_bg: "/assets/svg/game-bg-pattern/broken-handcuff.svg",
      mission:
        "Prison protocol indicates that you have 60 minutes to locate and return all of the Warden's keys or the prison will have to go into lockdown. If you are able to find the keys in time, you will have to complete an additional investigation to find the prisoner who stole the keys, and make sure they pay for their crime.",
      missionimg:
        "/assets/all-game-details/allinadventures-escape-from-alcatraz-mission.png",
      missionimg_alt: "allinadventures-escape-from-alcatraz-mission",
      videoid: "TlhTN4eqIK0",
      videothumb:
        "/assets/video-thumb/allinadventures-escape-from-alcatraz.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-1.jpg",
        img_alt: "allinadventures-escape-from-alcatraz-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-2.jpg",
        img_alt: "allinadventures-escape-from-alcatraz-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-3.jpg",
        img_alt: "allinadventures-escape-from-alcatraz-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-4.jpg",
        img_alt: "allinadventures-escape-from-alcatraz-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-5.jpg",
        img_alt: "allinadventures-escape-from-alcatraz-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-6.jpg",
        img_alt: "allinadventures-escape-from-alcatraz-gallery-6",
      },
    ],
  },
  //============================================escape-from-alcatraz end 1
  //============================================treasure-island 2
  "treasure-island": {
    activityname: "Treasure Island",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-treasure-island-theme-pirate-adventure.png",
    themeImageAlt: "Private Adventure escape room theme",
    pagesubtitle:
      "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "67%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-treasure-island.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-treasure-island.jpg",
    coverimageM_alt: "allinadventures treasure island",

    pagemeta: {
      title: "Treasure Island Escape Room in CITY - All In Adventures ",
      description:
        "Join us at MALL. You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
      keywords:
        "treasure island, treasure island escape room CITY, all in adventures treasure island CITY, mystery room treasure island CITY, treasure pirate escape room CITY, treasure escape room CITY, treasure escape game CITY, pirate escape game CITY, treasure island escape room near me CITY, pirate escape room CITY, pirate themed escape room, treasure hunt escape room, treasure island escape game",
      url: "/activities/treasure-island",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-treasure-island.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "Welcome aboard the vessel of the dread pirate, Captain Jake Hawkins - the most feared pirate who has ever sailed the seven seas. Hawkins and his crew continue to loot and capture without remorse, and you are no exception to his evil ways. You must find a way to break free from his clutches but take heed - your only way out may be to find a way in!",
      storyimg:
        "/assets/all-game-details/allinadventures-treasure-island-storyline-updated.png",
      storyimg_alt: "allinadventures-treasure-island-storyline",
      scene:
        "After a long trek out at sea, you were captured by the captain and his crew. Hawkins has looted your ship and directed his crew to feed you to the sharks. However, in a rare show of kindness, Hawkins has given you a chance at mercy. He is looking for highly skilled crew members to man his ship, and he is giving you the chance to prove your sea-worthiness.",
      sceneimg:
        "/assets/all-game-details/allinadventures-treasure-island-plot.png",
      sceneimg_alt: "allinadventures-treasure-island-plot",
      story_bg: "/assets/svg/game-bg-pattern/ship-wheel.svg",
      scene_bg: "/assets/svg/game-bg-pattern/shark.svg",
      mission:
        "In order to survive, you have 60 minutes to prove to the crew that you are good enough to keep alive. Failure to follow the directions from the crew and you will be fed to the sharks! If you can prove you are worthy of Jake Hawkin's leadership, show him you can navigate these dangerous seas, and a promotion may be in order for you!",
      missionimg:
        "/assets/all-game-details/allinadventures-treasure-island-mission.png",
      missionimg_alt: "allinadventures-treasure-island-mission",
      videoid: "lSs1TB0WMfw",
      videothumb:
        "/assets/video-thumb/allinadventures-treasure-island-thumb.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-treasure-island-gallery-1.jpg",
        img_alt: "allinadventures-treasure-island-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-treasure-island-gallery-2.jpg",
        img_alt: "allinadventures-treasure-island-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-treasure-island-gallery-3.jpg",
        img_alt: "allinadventures-treasure-island-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-treasure-island-gallery-4.jpg",
        img_alt: "allinadventures-treasure-island-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-treasure-island-gallery-5.jpg",
        img_alt: "allinadventures-treasure-island-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-treasure-island-gallery-6.jpg",
        img_alt: "allinadventures-treasure-island-gallery-6",
      },
    ],
  },
  //============================================treasure-island end 2
  //============================================superheros-adventure3
  "superheros-adventure": {
    activityname: "Superhero's Adventure",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-superheros-adventure-theme-comic-book-heroes.png",
    themeImageAlt: "prison break escape room theme",
    pagesubtitle:
      "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "61%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-superheros-adventure.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-superheros-adventure.jpg",
    coverimageM_alt: "allinadventures superheros adventure",

    pagemeta: {
      title: "Superhero's Adventure Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. The arch-criminal, Matador and his team of henchmen, have devised an evil plan to take over the city. Use your superpowers to stop them!",
      keywords:
        "superheros adventure, superhero adventure escape room CITY, superhero adventure mystery room, all in adventure superhero adventure, superhero escape room, escape room superhero, superhero adventure escape room near me, superhero escape room near me, escape room superhero near me CITY, superhero theme escape room, superhero escape game CITY, mystery room superhero escape room,",
      url: "/activities/superheros-adventure",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-superheros-adventure.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "Darkover City is home to the prestigious Grand Central Bank - housing and securing millions of dollars worth of gold. Superheroes across the universe have been called to protect the bank after its blueprint has mysteriously gone missing. You suspect the infamous Matador and his crew of minions have something to do with it.",
      storyimg:
        "/assets/all-game-details/allinadventures-superheros-adventure-storyline.png",
      storyimg_alt: "allinadventures-superheros-adventure-storyline",
      scene:
        "Entrusted by the citizens of Darkover City, your team of superheroes rush to answer their call for help and work together to recover the stolen blueprint before it's too late. You must hurry because the Matador has now threatened to contaminate the gold and crash the stock market if you don't pay his hefty ransom.",
      sceneimg:
        "/assets/all-game-details/allinadventures-superheros-adventure-plot.png",
      sceneimg_alt: "allinadventures-superheros-adventure-plot",
      story_bg: "/assets/svg/game-bg-pattern/bank.svg",
      scene_bg: "/assets/svg/game-bg-pattern/locker-money.svg",
      mission:
        "The Matador has hinted that he hid the blueprint in one of the city's streets, so his plan proceeds even if he is captured. You have 60 minutes to use your superpowers to recover the stolen blueprint, and if you have time, find a way to stop his plan before time runs out!",
      missionimg:
        "/assets/all-game-details/allinadventures-superheros-adventure-mission.png",
      missionimg_alt: "allinadventures-superheros-adventure-mission",
      videoid: "T-TJ2BXmZ9I",
      videothumb:
        "/assets/video-thumb/allinadventures-superheros-adventure.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-superheros-adventure-gallery-1.jpg",
        img_alt: "allinadventures-superheros-adventure-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-superheros-adventure-gallery-2.jpg",
        img_alt: "allinadventures-superheros-adventure-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-superheros-adventure-gallery-3.jpg",
        img_alt: "allinadventures-superheros-adventure-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-superheros-adventure-gallery-4.jpg",
        img_alt: "allinadventures-superheros-adventure-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-superheros-adventure-gallery-5.jpg",
        img_alt: "allinadventures-superheros-adventure-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-superheros-adventure-gallery-6.jpg",
        img_alt: "allinadventures-superheros-adventure-gallery-6",
      },
    ],
  },
  //============================================superheros-adventure end3
  //============================================zombie-apocalypse4
  "zombie-apocalypse": {
    activityname: "Zombie Apocalypse",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-zombie-apocalypse-theme-biohazard-breakout.png",
    themeImageAlt: "Biohazard breakout escape room theme",
    pagesubtitle:
      "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "37%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-zombie-apocalypse.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-zombie-apocalypse.jpg",
    coverimageM_alt: "allinadventures zombie apocalypse",

    pagemeta: {
      title: "Zombie Apocalypse Escape Room in CITY- All In Adventures",
      description:
        "Join us at MALL. The zombification virus has mutated and it is up to you to save humanity! Double check your research and create an immunity chemical test!",
      keywords:
        "zombie apocalypse CITY, zombie apocalypse escape room, zombie apocalypse mystery room CITY, mystery room zombie escape room CITY, all in adventure zombie apocalypse, zombie escape room, escape room zombie, zombie apocalypse escape room near me, zombie escape room near me, escape room zombie near me CITY, zombie theme escape room, zombie escape game CITY,  scary escape room, horror escape room,",
      url: "/activities/zombie-apocalypse",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-zombie-apocalypse.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "You are a group of low-level scientists working at the ominous Umbra Industries. As you get ready to leave for the day, the biosafety alert system begins to go off. The alert announces that the entire laboratory has been sealed for quarantine and that authorized personnel have one hour to exit the facility using their ID badge.",
      storyimg:
        "/assets/all-game-details/allinadventures-zombie-apocalypse-storyline.png",
      storyimg_alt: "allinadventures-zombie-apocalypse-storyline",
      scene:
        "Making your way toward your administrator's personal laboratory, you come face to face with the horrifying cause of the lockdown: Zombies! There is little time to try and develop a cure for the virus and escape the facility. You must use the top-secret chemicals in the lab to create a vaccine and find your administrator's key card. Time is running out as it has already taken you ten minutes to safely reach the administrator's laboratory.",
      sceneimg:
        "/assets/all-game-details/allinadventures-zombie-apocalypse-plot.png",
      sceneimg_alt: "allinadventures-zombie-apocalypse-plot",
      story_bg: "/assets/svg/game-bg-pattern/chemistry.svg",
      scene_bg: "/assets/svg/game-bg-pattern/microscope.svg",
      mission:
        "You have 60 minutes to find your administrator's key card and create a vaccine using the chemicals that you are able to find in the lab. Can you finish in time, or will you be trapped in the lockdown with the growing zombie horde?",
      missionimg:
        "/assets/all-game-details/allinadventures-zombie-apocalypse-mission.png",
      missionimg_alt: "",
      videoid: "wSH4ApjhxHo",
      videothumb: "/assets/video-thumb/allinadventures-zombie-apocalypse.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-1.jpg",
        img_alt: "allinadventures-zombie-apocalypse-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-2.jpg",
        img_alt: "allinadventures-zombie-apocalypse-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-3.jpg",
        img_alt: "allinadventures-zombie-apocalypse-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-4.jpg",
        img_alt: "allinadventures-zombie-apocalypse-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-5.jpg",
        img_alt: "allinadventures-zombie-apocalypse-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-6.jpg",
        img_alt: "allinadventures-zombie-apocalypse-gallery-6",
      },
    ],
  },
  //============================================zombie-apocalypse end4
  //============================================special-agent5
  "special-agent": {
    activityname: "Special Agent",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-special-agent-theme-espionage.png",
    themeImageAlt: "Special agent escape room theme",
    pagesubtitle:
      "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "37%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-special-agent.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-special-agent.jpg",
    coverimageM_alt: "allinadventures special agent",

    pagemeta: {
      title: "Special Agent Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. After capturing one of the world's most infamous money launderers, one of his associates is planning a new scheme. Stop him in his tracks!",
      keywords:
        "special agent, special agent escape room CITY, investigation themed escape room CITY, special agent mystery room, all in adventure special agent CITY, spy agent escape room, special force escape room CITY, special agent escape room near me CITY, investigation themed escape room near me CITY, spy agent escape room near me, special force escape room near me CITY, mystery room special agent escape room",
      url: "/activities/special-agent",
      metaindex: true,
      metaimg: "/assets/all-game-mobile-hero/allinadventures-special-agent.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "Interpol is holding a suspect on a minor charge and will have to release them within the hour. You have reason to believe that this person is in fact the international jewelry thief known as The Velvet Glove. The Velvet Glove was involved in the theft of the Crown of Hildegard of the Vinzgau. You have been sent to search the properties in order to find proof that they are indeed The Velvet Glove.",
      storyimg:
        "/assets/all-game-details/allinadventures-special-agent-storyline-updated.png",
      storyimg_alt: "allinadventures-special-agent-Story",
      scene:
        "You must move quickly, if Interpol is forced to release the suspect, they will slip away into the shadows. It has been years since anyone has been this close to The Velvet Glove, and this is just the break you have been looking for.  The recent theft of Crown of Hildegard of the Vinzgau means that this case will get international attention and a solid conviction.",
      sceneimg:
        "/assets/all-game-details/allinadventures-special-agent-plot-updated.png",
      sceneimg_alt: "escape room",
      story_bg: "/assets/svg/game-bg-pattern/case-file.svg",
      scene_bg: "/assets/svg/game-bg-pattern/crown.svg",
      mission:
        "We have two objectives here, agents: find proof that this person is indeed The Velvet Glove before Interpol has to release them, and if we complete that in time, find the missing crown. Once we are able to accomplish those, that will stop the Velvet Glove from committing future robberies and destroy the foundation of their criminal empire.",
      missionimg:
        "/assets/all-game-details/allinadventures-special-agent-mission-updated.png",
      missionimg_alt: "allinadventures-special-agent-mission",
      videoid: "vrtdmQBMZ4E",
      videothumb: "/assets/video-thumb/allinadventures-special-agent.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-special-agent-gallery-1.jpg",
        img_alt: "allinadventures-special-agent-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-special-agent-gallery-2.jpg",
        img_alt: "allinadventures-special-agent-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-special-agent-gallery-3.jpg",
        img_alt: "allinadventures-special-agent-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-special-agent-gallery-4.jpg",
        img_alt: "allinadventures-special-agent-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-special-agent-gallery-5.jpg",
        img_alt: "allinadventures-special-agent-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-special-agent-gallery-6.jpg",
        img_alt: "allinadventures-special-agent-gallery-6",
      },
    ],
  },
  //============================================special-agent end5
  //============================================hollywood-premiere 6
  "hollywood-premiere": {
    activityname: "Hollywood Premiere",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-hollywood-premiere-theme-movie-mystery.png",
    themeImageAlt: "Movie mystery escape room theme",
    pagesubtitle:
      "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "45%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-hollywood-premiere.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-hollywood-premiere.jpg",
    coverimageM_alt: "allinadventures hollywood premiere",

    pagemeta: {
      title: "Hollywood Premiere Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. Live from Hollywood, California. You're the next lucky contestant on our exciting game show! To win the game, name our secret celebrity!",
      keywords:
        "hollywood premiere escape room, hollywood escape room, hollywood premiere mystery room CITY, all in adventure hollywood premiere CITY, hollywood theme escape room CITY, hollywood celebrity escape room, hollywood premiere mystery room, hollywood mystery escape room CITY, hollywood premiere escape room near me, hollywood escape room near me CITY, hollywood theme escape room near me, hollywood celebrity escape room near me CITY, hollywood premiere mystery room near me, hollywood mystery escape room near me,",
      url: "/activities/hollywood-premiere",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-hollywood-premiere.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        'The newest and hottest game show, "Name That Celebrity", started back in 2019. Since then, contestants have been booked constantly as they await their chance to compete and win. Recently, they completed a casting call and chose a brand new round of contestants. Much to your surprise, you were chosen to compete!',
      storyimg:
        "/assets/all-game-details/allinadventures-hollywood-premiere-storyline.png",
      storyimg_alt: "allinadventures-hollywood-premiere-storyline",
      scene:
        "You will have to use your keen senses and pop-culture knowledge to get ahead. Search the theater and see what clues might lead you to the identity of the hidden celebrity. However, that is only one part of the game. There is a much loved bonus round in which you will have to identify which booth the celebrity is hiding in!",
      sceneimg:
        "/assets/all-game-details/allinadventures-hollywood-premiere-plot.png",
      sceneimg_alt: "allinadventures-hollywood-premiere-plot",
      story_bg: "/assets/svg/game-bg-pattern/microphone.svg",
      scene_bg: "/assets/svg/game-bg-pattern/film-camera.svg",
      mission:
        "It's " +
        'time for "Name that Celebrity"! You have 60 minutes to identify our secret celebrity, and if ' +
        "you're " +
        "really good, go on for the Bonus Prize by also correctly identifying which booth they are hiding in!",
      missionimg:
        "/assets/all-game-details/allinadventures-hollywood-premiere-mission.png",
      missionimg_alt: "allinadventures-hollywood-premiere-mission",
      videoid: "N3a9jpmBt40",
      videothumb: "/assets/video-thumb/allinadventures-hollywood-premiere.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-hollywood-premiere-gallery-1.jpg",
        img_alt: "allinadventures-hollywood-premiere-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-hollywood-premiere-gallery-2.jpg",
        img_alt: "allinadventures-hollywood-premiere-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-hollywood-premiere-gallery-3.jpg",
        img_alt: "allinadventures-hollywood-premiere-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-hollywood-premiere-gallery-4.jpg",
        img_alt: "allinadventures-hollywood-premiere-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-hollywood-premiere-gallery-5.jpg",
        img_alt: "allinadventures-hollywood-premiere-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-hollywood-premiere-gallery-6.jpg",
        img_alt: "allinadventures-hollywood-premiere-gallery-6",
      },
    ],
  },
  //============================================hollywood-premiere 6
  //============================================sherlocks-library 7
  "sherlocks-library": {
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-sherlocks-library-theme-super-sleuth.png",
    themeImageAlt: "Super sleuth escape room theme",
    pagesubtitle:
      "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
    activityname: "Sherlock's Library",
    category: "escapegames",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "42%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-sherlocks-library.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-sherlocks-library.jpg",
    coverimageM_alt: "allinadventures sherlocks library",

    pagemeta: {
      title: "Sherlock's Library Escape Room in CITY - All In Adventures",
      description:
        "The great detective Sherlock Holmes has gone missing, but left a trail of clues for you to find him.",
      keywords:
        "sherlocks library, sherlock library escape room CITY, sherlock library mystery room, all in adventure sherlock library, all in adventure sherlock library, sherlock escape room, spy escape room, investigation escape room, sherlock holmes escape room, investigator escape room, sherlock library mystery room, sherlock library escape room near me, sherlock escape room near me, spy escape room near me, investigation escape room near me, sherlock holmes escape room near me, sherlock library mystery room near me, mystery room sherlock escape room,",
      url: "/activities/sherlocks-library",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-sherlocks-library.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "The great Sherlock Holmes has gone missing! His stalwart partner, Dr. Watson, suspects that a member of the London aristocracy is to blame. The four aristocrats that recently inquired into the duo's services all share the same accountant... a detail Watson looks to investigate!",
      storyimg:
        "/assets/all-game-details/allinadventures-sherlocks-library-storyline.png",
      storyimg_alt: "allinadventures-sherlocks-library-storyline",
      scene:
        "While Watson works with police to track Holmes down, you have been sent by Sherlock's brother to sniff out any involvement from the accountant. Upon entering the office, you immediately detect a carefully calibrated ruse!",
      sceneimg:
        "/assets/all-game-details/allinadventures-sherlocks-library-plot.png",
      sceneimg_alt: "allinadventures-sherlocks-library-plot",
      story_bg: "/assets/svg/game-bg-pattern/money-and-coin.svg",
      scene_bg: "/assets/svg/game-bg-pattern/fingerprint.svg",
      mission:
        "You have one hour to follow the trail of breadcrumbs left behind by Sherlock. Search the estate portfolios of each aristocrat found throughout the office to determine who is behind the kidnapping and discover how deep this nefarious plot goes!",
      missionimg:
        "/assets/all-game-details/allinadventures-sherlocks-library-mission.png",
      missionimg_alt: "allinadventures-sherlocks-library-mission",
      videoid: "b8Pz4-4ybRA",
      videothumb: "/assets/video-thumb/allinadventures-sherlocks-library.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-sherlocks-library-gallery-1.jpg",
        img_alt: "allinadventures-sherlocks-library-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-sherlocks-library-gallery-2.jpg",
        img_alt: "allinadventures-sherlocks-library-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-sherlocks-library-gallery-3.jpg",
        img_alt: "allinadventures-sherlocks-library-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-sherlocks-library-gallery-4.jpg",
        img_alt: "allinadventures-sherlocks-library-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-sherlocks-library-gallery-5.jpg",
        img_alt: "allinadventures-sherlocks-library-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-sherlocks-library-gallery-6.jpg",
        img_alt: "allinadventures-sherlocks-library-gallery-6",
      },
    ],
  },
  //============================================hollywood-premiere 7
  //============================================houdinis-magic-cell 8
  "houdinis-magic-cell": {
    activityname: "Houdini's Magic Cell",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-houdinis-magic-cell-theme-escape-artist.png",
    themeImageAlt: "Escape artist escape room theme",
    pagesubtitle:
      "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "18%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-houdinis-magic-cell.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-houdinis-magic-cell.jpg",
    coverimageM_alt: "allinadventures-houdinis-magic-cell",

    pagemeta: {
      title: "Houdini's Magic Cell Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better!",
      keywords:
        "houdinis magic cell, houdinis magic cell escape room CITY, all in adventure houdini magic cell CITY, mystery room houdinis magic cell, houdini escape room, magic theme escape room, magician escape room CITY, houdinis magic cell mystery room, houdinis magic cell escape room near me, houdini escape room near me, magic theme escape room near me CITY, magician escape room near me CITY, houdinis magic cell mystery room near me CITY,",
      url: "/activities/houdinis-magic-cell",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-houdinis-magic-cell.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        'The famous Hungarian American magician, Houdini, performed many tricks during his lifetime; some were even death defying. Houdini was adept at all tricks ranging from simple card tricks to the most daring escape from an unbelievable scenario. There is one trick in particular that you have always wanted to outperform: the "Houdini Upside Down" - the trick involving Houdini trapped upside down, handcuffed at the feet, submerged in water. Death was just minutes away.',
      storyimg:
        "/assets/all-game-details/allinadventures-houdinis-magic-cell-storyline.png",
      storyimg_alt: "allinadventures-houdinis-magic-cell-storyline",
      scene:
        "While you may want to outperform Houdini's most outlandish trick, you must start with the basics - playing cards. Prove you can fool even the most skilled magician, and only then, will you be able to move on to the biggest challenge yet: locks and handcuffs. Are you able to outplay the master himself in his own proving grounds?",
      sceneimg:
        "/assets/all-game-details/allinadventures-houdinis-magic-cell-plot.png",
      sceneimg_alt: "escape room",
      story_bg: "/assets/svg/game-bg-pattern/handcuffs.svg",
      scene_bg: "/assets/svg/game-bg-pattern/playing-cards.svg",
      mission:
        "You will have 60 minutes to complete your act. First, perform a series of tricks with multiple sets of playing cards. Once you have mastered the art of cards, it will be time to perform your ultimate act and escape from multiple types of locks and handcuffs.",
      missionimg:
        "/assets/all-game-details/allinadventures-houdinis-magic-cell-mission.png",
      missionimg_alt: "allinadventures-houdinis-magic-cell-mission",
      videoid: "zkgL68r22xo",
      videothumb: "/assets/video-thumb/allinadventures-houdinis-magic-cell.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-1.jpg",
        img_alt: "allinadventures-houdinis-magic-cell-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-2.jpg",
        img_alt: "allinadventures-houdinis-magic-cell-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-3.jpg",
        img_alt: "allinadventures-houdinis-magic-cell-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-4.jpg",
        img_alt: "allinadventures-houdinis-magic-cell-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-5.jpg",
        img_alt: "allinadventures-houdinis-magic-cell-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-6.jpg",
        img_alt: "allinadventures-houdinis-magic-cell-gallery-6",
      },
    ],
  },
  //============================================houdinis-magic-cell 8

  //============================================black-ops 10
  "black-ops": {
    activityname: "Black Ops",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-black-ops-theme-covert-operations.png",
    themeImageAlt: "Covert operations escape room theme",
    pagesubtitle:
      "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "46%",
    coverimageL: "/assets/all-game-desktop-hero/allinadventures-black-ops.jpg",
    coverimageM: "/assets/all-game-mobile-hero/allinadventures-black-ops.jpg",
    coverimageM_alt: "allinadventures black ops",

    pagemeta: {
      title: "Black Ops Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
      keywords:
        "black ops, black ops escape room CITY, all in adventure black ops CITY, black ops mystery room, action escape room, war theme escape room CITY, black ops escape game, black ops mystery room CITY, black ops escape room near me CITY, action escape room near me, war theme escape room near me CITY, black ops escape game near me, black ops mystery room near me,",
      url: "/activities/black-ops",
      metaindex: true,
      metaimg: "/assets/all-game-mobile-hero/allinadventures-black-ops.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "As a member of an elite military unit, you are no stranger to dangerous missions - this mission will be no different. Previous operations have allowed us to obtain all the evidence necessary to initiate the capture of the international arms dealer known as The Hawk. We have located the HQ of The Hawk, and it is time to raid the bunker and bring The Hawk in for questioning.",
      storyimg:
        "/assets/all-game-details/allinadventures-black-ops-storyline.png",
      storyimg_alt: "allinadventures-black-ops-storyline",
      scene:
        "The bunker raid has begun, but you realize it's a trap. The Hawk was anticipating your arrival, and the bunker has been booby-trapped and is rigged to explode in 60 minutes! There is no way you can make it out in time and must defuse all explosives. We can't let The Hawk get away with this either - continue to search the bunker for information that will certainly lead to their future capture.",
      sceneimg: "/assets/all-game-details/allinadventures-black-ops-plot.png",
      sceneimg_alt: "allinadventures-black-ops-plot",
      story_bg: "/assets/svg/game-bg-pattern/explosion.svg",
      scene_bg: "/assets/svg/game-bg-pattern/helmet.svg",
      mission:
        "You must make it out alive. In 60 minutes, you must defuse all booby-traps to save your squad. However, you cannot lose sight of the main mission - capturing The Hawk. If you are able to disarm all traps, you must search the bunker to find additional information that will help us discover The Hawk's true location so we can continue the hunt.",
      missionimg:
        "/assets/all-game-details/allinadventures-black-ops-mission.png",
      missionimg_alt: "allinadventures-black-ops-mission",
      videoid: "uxOFr69ooTw",
      videothumb: "/assets/video-thumb/allinadventures-black-ops.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-black-ops-gallery-1.jpg",
        img_alt: "allinadventures-black-ops-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-black-ops-gallery-2.jpg",
        img_alt: "allinadventures-black-ops-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-black-ops-gallery-3.jpg",
        img_alt: "allinadventures-black-ops-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-black-ops-gallery-4.jpg",
        img_alt: "allinadventures-black-ops-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-black-ops-gallery-5.jpg",
        img_alt: "allinadventures-black-ops-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-black-ops-gallery-6.jpg",
        img_alt: "allinadventures-black-ops-gallery-6",
      },
    ],
  },
  //============================================black-ops 10
  //============================================lost-in-the-jungle 11
  "lost-in-the-jungle": {
    activityname: "Lost In The Jungle",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-lost-in-the-jungle-theme-adventure.png",
    themeImageAlt: "Adventure escape room theme",
    pagesubtitle:
      "The mysterious sound of drums lure you in, promising adventure. You find yourself trapped in the game, and the only way out is to win!",
    price: "39.95",
    duration: "60",
    max_players: 5,
    min_players: 2,
    age: "6-99",
    success_rate: "54%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-lost-in-the-jungle.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-lost-in-the-jungle.jpg",
    coverimageM_alt: "allinadventures lost in the jungle",

    pagemeta: {
      title: "Lost In The Jungle Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. Having heard the mysterious sound of drums coming from the roof, you and your friends decided to check it out. Drawn by the beat, you find yourself trapped in the game!",
      keywords:
        "lost in jungle escape room, adventure jungle escape room CITY, jungle theme escape room CITY, lost in the jungle mystery room CITY, lost in jungle escape room near me, adventure jungle escape room near me, jungle theme escape room near me, lost in the jungle mystery room near me, all in adventure lost in the jungle CITY",
      url: "/activities/lost-in-the-jungle",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-lost-in-the-jungle.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "It was just a normal day in suburbia and you were with your friends getting ready to enjoy the weekend. One of your favorite things to do was to tell stories at night, and this night, you had a special story - one about animals coming to life and taking over the city. You had no idea what would come next…",
      storyimg:
        "/assets/all-game-details/allinadventures-lost-in-the-jungle-storyline.png",
      storyimg_alt: "allinadventures-lost-in-the-jungle-storyline",
      scene:
        "During the middle of your story, you hear a strange knocking on your roof. You and your friends decide to investigate the noise and what you discover is unbelievable. Your story has come to life, and all around you are bizarre animals and puzzles. You must pass the game to save yourself and the future of humanity!",
      sceneimg:
        "/assets/all-game-details/allinadventures-lost-in-the-jungle-plot.png",
      sceneimg_alt: "allinadventures-lost-in-the-jungle-plot",
      story_bg: "/assets/svg/game-bg-pattern/haunted-house.svg",
      scene_bg: "/assets/svg/game-bg-pattern/animal-claws.svg",
      mission:
        "You must outsmart the jungle! Prove you are worthy by beating the jungle creatures at their own game. Solve the puzzles, decipher the riddles, and put together clues and finish the game in time to put the world back in normal order.",
      missionimg:
        "/assets/all-game-details/allinadventures-lost-in-the-jungle-mission.png",
      missionimg_alt: "allinadventures-lost-in-the-jungle-mission",
      videoid: "0AIPcDlkaYU",
      videothumb: "/assets/video-thumb/allinadventures-lost-in-the-jungle.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-1.jpg",
        img_alt: "allinadventures-lost-in-the-jungle-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-2.jpg",
        img_alt: "allinadventures-lost-in-the-jungle-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-3.jpg",
        img_alt: "allinadventures-lost-in-the-jungle-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-4.jpg",
        img_alt: "allinadventures-lost-in-the-jungle-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-5.jpg",
        img_alt: "allinadventures-lost-in-the-jungle-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-6.jpg",
        img_alt: "allinadventures-lost-in-the-jungle-gallery-6",
      },
    ],
  },
  //============================================lost-in-the-jungle end 11

  //============================================wizarding-school 13
  "wizarding-school": {
    activityname: "Wizarding School",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-wizarding-school-theme-magic-academy.png",
    themeImageAlt: "Magic academy escape room theme",
    pagesubtitle:
      "You have gotten locked in the headmaster's office! You must put on your thinking cap and find a way out in time for your next class.",
    price: "39.95",
    duration: "60",
    max_players: "4",
    min_players: "2",
    age: "6-99",
    success_rate: "47%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-wizarding-school.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-wizarding-school.jpg",
    coverimageM_alt: "allinadventures wizarding school",

    pagemeta: {
      title: "Wizarding School Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. Lost in the Wizarding School, locked in the office and late for class - this is not the key to success. Find your way out of the office!",
      keywords:
        "wizard escape room, wizarding school escape rooms, wizard escape room near me CITY, wizard escape game, wizard escape games CITY, wizard escape game near me, wizard allinadventures, wizard all in adventures CITY, wizarding school escape room, wizard escape room, wizarding escape room, wizarding school mystery room, wizarding school escape room near me, wizard escape room near me, wizarding escape room near me, wizarding school mystery room near me CITY, all in adventure wizarding school CITY",
      url: "/activities/wizarding-school",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-wizarding-school.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "Wizarding School is the most revered school for magic in the land. With an admission rate of only 1%, you were extremely lucky to get into the school. You were placed in a house that cares highly about their reputation, and they won't allow anyone in the group who may cost them their standing. You want to live up to their expectations and it all starts with your first lesson - Potions!",
      storyimg:
        "/assets/all-game-details/allinadventures-wizarding-school-storyline.png",
      storyimg_alt: "allinadventures-wizarding-school-storyline",
      scene:
        "You studied and studied for your lessons but failed to learn one thing - the layout of the school. On your way to your potions lesson, you must have taken a wrong turn and found your way into the office of the school's highest ranking wizard! Unfortunately for you, the door locked behind you and you must use all of your wizarding knowledge to escape!",
      sceneimg:
        "/assets/all-game-details/allinadventures-wizarding-school-plot.png",
      sceneimg_alt: "allinadventures-wizarding-school",
      story_bg: "/assets/svg/game-bg-pattern/mail-box.svg",
      scene_bg: "/assets/svg/game-bg-pattern/potion.svg",
      mission:
        "You studied right? RIGHT?! Oh, alright then, good! Use your knowledge of wizarding and escape this office! You must locate and solve all puzzles located in the wizard's office and get to class on time so your faculty doesn't lose points this semester!",
      missionimg:
        "/assets/all-game-details/allinadventures-wizarding-school-mission.png",
      missionimg_alt: "allinadventures-wizarding-school-mission",
      videoid: "nkIcpyXyhks",
      videothumb: "/assets/video-thumb/allinadventures-wizarding-school.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-wizarding-school-gallery-1.jpg",
        img_alt: "allinadventures-wizarding-school-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-wizarding-school-gallery-2.jpg",
        img_alt: "allinadventures-wizarding-school-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-wizarding-school-gallery-3.jpg",
        img_alt: "allinadventures-wizarding-school-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-wizarding-school-gallery-4.jpg",
        img_alt: "allinadventures-wizarding-school-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-wizarding-school-gallery-5.jpg",
        img_alt: "allinadventures-wizarding-school-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-wizarding-school-gallery-6.jpg",
        img_alt: "allinadventures-wizarding-school-gallery-6",
      },
    ],
  },
  //============================================wizarding-school end 13
  //============================================magic-castle 9
  "magic-castle": {
    activityname: "Magic Castle",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-magic-castle-theme-fantasy-magic.png",
    themeImageAlt: "Fantasy Magic escape room theme",
    pagesubtitle:
      "Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. Test your wits, courage, loyalty, and cunning.",
    price: "29.89",
    duration: "60",
    max_players: "10",
    min_players: "2",
    age: "6-99",
    success_rate: "42%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-magic-castle.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-magic-castle.jpg",
    coverimageM_alt: "allinadventures magic castle",

    pagemeta: {
      title: "Magic Castle Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. But it's not easy!",
      keywords:
        "magic castle escape room, magic escape room CITY, magic castle escape game CITY, magic castle mystery room CITY, magic castle escape room near me CITY, magic escape room near me CITY, magic castle escape game near me, magic castle mystery room, all in adventure magic castle,",
      url: "/activities/magic-castle",
      metaindex: true,
      metaimg: "/assets/all-game-mobile-hero/allinadventures-magic-castle.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "The Magic Castle is known as one of the toughest entrance exams any wizard can take. Any aspiring wizard who wants to get out of the muggle world must take this exam. The waiting list spans years, and you have just received your entrance letter giving you your chance at the test.",
      storyimg:
        "/assets/all-game-details/allinadventures-magic-castle-storyline.png",
      storyimg_alt: "allinadventures-magic-castle-storyline",
      scene:
        "While it is exciting, you must take this test seriously. Failing this test means returning to the muggle world and getting put at the bottom of the waitlist. You have 60 minutes to take the exam and complete all tasks. Now is the time to show off all of your studying!",
      sceneimg:
        "/assets/all-game-details/allinadventures-magic-castle-plot.png",
      storyimg_alt: "allinadventures-magic-castle-plot",
      story_bg: "/assets/svg/game-bg-pattern/letter.svg",
      scene_bg: "/assets/svg/game-bg-pattern/books.svg",
      mission:
        "Pass the exam and earn your spot in the Magic Castle! Your exam is timed and the 60 minutes will be up before you know it. Listen closely to all directions and complete all tasks in time to secure your place.",
      missionimg:
        "/assets/all-game-details/allinadventures-magic-castle-mission.png",
      missionimg_alt: "allinadventures-magic-castle-mission",
      videoid: "z6cXBauEvdc",
      videothumb: "/assets/video-thumb/allinadventures-magic-castle.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-magic-castle-gallery-1.jpg",
        img_alt: "allinadventures-magic-castle-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-magic-castle-gallery-2.jpg",
        img_alt: "allinadventures-magic-castle-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-magic-castle-gallery-3.jpg",
        img_alt: "allinadventures-magic-castle-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-magic-castle-gallery-4.jpg",
        img_alt: "allinadventures-magic-castle-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-magic-castle-gallery-5.jpg",
        img_alt: "allinadventures-magic-castle-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-magic-castle-gallery-6.jpg",
        img_alt: "allinadventures-magic-castle-gallery-6",
      },
    ],
  },
  //============================================magic-castle end 9
  //============================================locked-in-the-Lift 14
  "locked-in-the-lift": {
    activityname: "Locked In The Lift",
    themeImage:
      "/assets/theme/all-in-adventures-escape-room-locked-in-the-lift-theme-thriller-survival.png",
    themeImageAlt: "Thriller survival escape room theme",
    pagesubtitle:
      "Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. See if you can piece together how to get things running again.",
    price: "29.89",
    duration: "30",
    max_players: "4",
    min_players: "2",
    age: "6-99",
    success_rate: "63%",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-locked-in-the-lift.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-locked-in-the-lift.jpg",
    coverimageM_alt: "allinadventures locked in the lift",

    pagemeta: {
      title: "Locked in The Lift Escape Room in CITY - All In Adventures",
      description:
        "Join us at MALL. Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. Act fast and save yourself and others!",
      keywords:
        "locked in the lift escape room, locked escape room CITY, locked in the lift escape game CITY, locked in the lift mystery room, locked in the lift escape room near me CITY, locked escape room near me, locked in the lift escape game near me CITY, locked in the lift mystery room CITY, all in adventure locked in the lift,",
      url: "/activities/locked-in-the-lift",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-locked-in-the-lift.jpg",
    },
    activitydata: {
      category: "escapegames",
      story:
        "As a famous actor in the 40's, you were given luxuries that most couldn't imagine possessing. A fancy car? Check. Nice house? Check. Debt? Of course not. There was one place all the VIPs wanted to visit—the luxurious hotel on Main Street to take the elusive lift to the second floor. You just received your invite in the mail - time to get ready!",
      storyimg:
        "/assets/all-game-details/allinadventures-locked-in-the-lift-storyline.png",
      storyimg_alt: "allinadventures-locked-in-the-lift-storyline",
      scene:
        "You arrive at the hotels and cameras are flashing, the crowd is cheering, and fans are asking for your autograph. As you make your way into the hotel, you see the elevator and make your way in. As the elevator begins to ascend, you hear a loud crashing noise, and the elevator comes to a hard stop. You are all alone and must find a way out!",
      sceneimg:
        "/assets/all-game-details/allinadventures-locked-in-the-lift-plot.png",
      sceneimg_alt: "allinadventures-locked-in-the-lift-plot",
      story_bg: "/assets/svg/game-bg-pattern/luxury-hotel.svg",
      scene_bg: "/assets/svg/game-bg-pattern/old-telephone.svg",
      mission:
        "The emergency phone is out, and no help is coming. You must remain calm and use logic to escape the trapped lift. But hurry up, the lift will only remain secure for 60 minutes. We don't want to find out what happens after that…",
      missionimg:
        "/assets/all-game-details/allinadventures-locked-in-the-lift-mission.png",
      missionimg_alt: "allinadventures-locked-in-the-lift-mission",
      videoid: "_eFI_JZRLC0",
      videothumb: "/assets/video-thumb/allinadventures-locked-in-the-lift.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-1.jpg",
        img_alt: "allinadventures-locked-in-the-lift-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-2.jpg",
        img_alt: "allinadventures-locked-in-the-lift-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-3.jpg",
        img_alt: "allinadventures-locked-in-the-lift-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-4.jpg",
        img_alt: "allinadventures-locked-in-the-lift-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-5.jpg",
        img_alt: "allinadventures-locked-in-the-lift-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-6.jpg",
        img_alt: "allinadventures-locked-in-the-lift-gallery-6",
      },
    ],
  },
  //============================================locked-in-the-lift end 14
  //============================================game-show-room 15
  "game-show-room": {
    activityname: "A LIVE GAME SHOW EXPERIENCE AS SEEN ON TV",
    shortname: "Game Show Room",
    notice:
      '48 HOURS ADVANCE BOOKING REQUIRED. If you see online booking isn\'t available, please call us at <a href="tel:+1 844-502-5546" class="text-medium text-gold hover:text-blue-700">+1 844-502-5546</a>. We can surely manage a spot for you and your team.',
    pagesubtitle:
      "Always dreamed of being on a game show? Dream no more, you can be the next contestant in this exciting game show experience!",
    price: 33,
    duration: 60,
    max_players: 16,
    min_players: 4,
    success_rate: false,
    age: "6-99",
    private_events: "YES",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-game-show-room.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-game-show-room.jpg",
    coverimageM_alt: "allinadventures-game-show-room",

    pagemeta: {
      title: "Game Show Room in CITY | All In Adventures",
      description:
        "We offer a unique, unpredictable, family-friendly live game show experience for guests of all different ages, backgrounds and group sizes.",
      keywords:
        "game show room, game show room near you, game show room CITY, game show room in CITY,",
      url: "/activities/game-show-room",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-game-show-room.jpg",
    },
    activitydata: {
      category: "other",
      story:
        "Our real-life Game Show Room is created to bring friends, family or co-workers together. It's a fun, group-oriented activity you share with other live players. You have the option to choose from a family, kid or adult experience. Once your group come in, players will become instant game show contestants led by a professional game host who will guide players through a series of interactive games.",
      storyimg:
        "/assets/all-game-details/allinadventures-game-show-room-sec1.png",
      storyimg_alt: "allinadventures game show room story",
      scene:
        "For one (1) fun-filled hour, you get to experience a live game show - similar to popular shows seen on TV! Our game ranges from a variety of mentally challenging puzzles to on-the-spot trivia and quiz questions. Plus, we even offer games which will challenge your group's physical skills and talents! As a Game Show Room contestant, you'll have a blast and make long-lasting memories while actively participating in an amusing, uber challenging live-game show setting!",
      sceneimg:
        "/assets/all-game-details/allinadventures-game-show-room-sec2.png",
      sceneimg_alt: "allinadventures game show room plot",
      story_bg: "/assets/svg/game-bg-pattern/cup-pong.svg",
      scene_bg: "/assets/svg/game-bg-pattern/cup-stacks.svg",
      mission:
        "This is the perfect pastime for those looking for a highly energetic, super entertaining corporate team building event, birthday party, bachelor / bachelorette party, church / family reunion or an outing with friends or family!",
      missionimg:
        "/assets/all-game-details/allinadventures-game-show-room-sec3.png",
      missionimg_alt: "allinadventures game show room mission",

      videoid: "9imesyfsms4",
      videothumb: "/assets/video-thumb/allinadventures-game-show-room.jpg",
      faqlist: [
        {
          id: 1,
          category: "games",
          group: "game-show-room",
          ques: "Can I play alone?",
          ans: [
            "While studies show that 66% of online gamers prefer to game alone, the Game Show Room is designed to be a fun, group-oriented activity you share with other live players. Players can be made up of your own group, or you could find your team playing with - or competing against - other players in this interactive setting. In other words, rooms that are not booked to full capacity have spots available so that other players may join in on the fun!",
          ],
        },
        {
          id: 2,
          category: "games",
          group: "game-show-room",
          ques: "How do I book a Private room?",
          ans: [
            "Private Room bookings are designed for those looking to guarantee their game show experience will be played by players within their own group - without other outside players. Once you book this type of room, this means other customers will not be permitted to reserve a spot in your studio.",
          ],
        },
        {
          id: 4,
          category: "games",
          group: "game-show-room",
          ques: "How many people do I need on my team?",
          ans: [
            "Our games are designed so that a minimum of four (4) players is required in a room. This equates to two (2) players per team.",
          ],
        },
        {
          id: 5,
          category: "games",
          group: "game-show-room",
          ques: "Is there an age requirement?",
          ans: [
            "The minimum player age is 16 years old. Participants under the age of 16 are permitted to play as long as their team has an adult player, in addition to a signed participation waiver on file with the venue. With two (2) teams per game, this means there must be a minimum of two (2) adults playing (i.e. one adult per team).",
          ],
        },
        {
          id: 6,
          category: "games",
          group: "game-show-room",
          ques: "Do I need to make a reservation?",
          ans: [
            "Yes, an advance reservation is required to book a game show room. You can make reservations online, in-store, or by telephone. Reservations must be made at least 48 hours in advance for all bookings.",
          ],
        },
        {
          id: 7,
          category: "games",
          group: "game-show-room",
          ques: "How early should we arrive for our reservation?",
          ans: [
            "All game-playing guests should strive to arrive at least 20 minutes before your reservation. This gives your Game Show Host time to review the rules and answer any questions you may have before the games begin.",
          ],
        },
        {
          id: 8,
          category: "games",
          group: "game-show-room",
          ques: "How much time do I need to do this?",
          ans: [
            "The Game Show Room experience takes one (1) hour. Don't forget to allow an extra 20 minutes before your game - to get your team prepared for the experience.",
          ],
        },
        {
          id: 9,
          category: "games",
          group: "game-show-room",
          ques: "Is there a prize handed out at the end?",
          ans: [
            "Bragging rights are your main prize - especially if your team manages to make the Game Show Room Leader Board which broadcasts top scoring teams who achieve the highest possible scores in each game. Overall, we're certain you'll walk away with long-lasting memories of your time as a contestant in our live Game Show Room!",
          ],
        },
        {
          id: 10,
          category: "games",
          group: "game-show-room",
          ques: "Can I wait to pay when I arrive?",
          ans: [
            "All game show rooms must be paid-in-full at the time they are booked or reserved.",
          ],
        },
        {
          id: 11,
          category: "games",
          group: "game-show-room",
          ques: "What is your cancellation policy?",
          ans: [
            "Our company does not accommodate refunds once game show rooms are reserved and paid for, however, we will do our very best to reschedule your booking based on the availability of rooms.",
          ],
        },
        {
          id: 12,
          category: "games",
          group: "game-show-room",
          ques: "Can I choose my own set of games to play?",
          ans: [
            "As with most professional game shows, the experience is pre-designed, but with you in mind. Our game show designers have developed an awesome game show lineup for you – ensuring the games have a good mix of hands-on and mentally challenging activities. All you have to do is show up . . . ready to play and our professional Game Show Room Hosts will guide you through each game to ensure your satisfaction!",
          ],
        },
        {
          id: 13,
          category: "games",
          group: "game-show-room",
          ques: "Is there a dress code?",
          ans: [
            "You don't have to show up in formal attire, but we won't turn you away if you do! We suggest out contestants wear comfortable clothing and footwear that will allow them to move freely during the games. For everyone’s enjoyment, we ask that players avoid wearing clothing which displays offensive/inappropriate language, or anything that goes against the mall dress code.",
          ],
        },
      ],
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-game-show-room-gallery-1.jpg",
        img_alt: "allinadventures-game-show-room-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-game-show-room-gallery-2.jpg",
        img_alt: "allinadventures-game-show-room-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-game-show-room-gallery-3.jpg",
        img_alt: "allinadventures-game-show-room-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-game-show-room-gallery-4.jpg",
        img_alt: "allinadventures-game-show-room-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-game-show-room-gallery-5.jpg",
        img_alt: "allinadventures-game-show-room-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-game-show-room-gallery-6.jpg",
        img_alt: "allinadventures-game-show-room-gallery-6",
      },
    ],
  },
  //============================================game-show-room end 15
  //============================================axe-throwing 16
  "axe-throwing": {
    activityname: "Axe Throwing",

    pagesubtitle:
      "You have gotten locked in the headmaster's office! You must put on your thinking cap and find a way out in time for your next class.",
    price: 23.89,
    duration: 60,
    max_players: 4,
    min_players: 2,
    success_rate: false,
    groupcat: "Guest Capacity",
    private_events: "YES",
    age: "13-99",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-axe-throwing.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-axe-throwing.jpg",
    coverimageM_alt: "allinadventures-axe-throwing",

    pagemeta: {
      title: "Axe Throwing in CITY | All In Adventures",
      description:
        "Come throw axes at our exciting interactive targets with your friends and family! Test your hand-eye coordination and see if you can hit a bull's eye.",
      keywords:
        "axe throwing, axe throwing near you, axe throwing CITY, axe throwing in CITY",
      url: "/activities/axe-throwing",
      metaindex: true,
      metaimg: "/assets/all-game-mobile-hero/allinadventures-axe-throwing.jpg",
    },
    activitydata: {
      category: "other",
      story:
        "With our interactive lanes, you can practice throwing at traditional targets or choose from other games. Utilizing a projection system, you can not only easily switch between games, but you can also allow it to do the scoring for you. Using sensors to mark your hits, our lanes can track the score for you and let you focus on the fun.",
      storyimg:
        "/assets/all-game-details/allinadventures-axe-throwing-sec1.png",
      storyimg_alt: "allinadventures axe throwing story",
      scene:
        "Once one of our Axe-perts gets you all set up in your lane, you and your party will be taking turns throwing at the target down range. This means that while you are throwing you will have your very own cheering squad backing you up! The system will track your score for you, so you can practice on your form.",
      sceneimg:
        "/assets/all-game-details/allinadventures-axe-throwing-sec2.png",
      sceneimg_alt: "allinadventures axe throwingplot",
      story_bg: "/assets/svg/game-bg-pattern/bulls-eye.svg",
      scene_bg: "/assets/svg/game-bg-pattern/axe.svg",
      mission:
        "Axe Throwing is great for groups both large and small. Lanes hold up to 4 players, and we can accommodate larger groups by booking multiple lanes. Players 13 to 99 with closed-toed shoes are welcome to heft an axe and join in the fun.",
      missionimg:
        "/assets/all-game-details/allinadventures-axe-throwing-sec3.png",
      missionimg_alt: "allinadventures axe throwing mission",
      videoid: "OEgWueitKTY",
      videothumb: "/assets/video-thumb/allinadventures-axe-throwing.jpg",
    },
    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-axe-throwing-gallery-1.jpg",
        img_alt: "allinadventures-axe-throwing 1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-axe-throwing-gallery-2.jpg",
        img_alt: "allinadventures-axe-throwing 2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-axe-throwing-gallery-3.jpg",
        img_alt: "allinadventures-axe-throwing 3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-axe-throwing-gallery-4.jpg",
        img_alt: "allinadventures-axe-throwing 4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-axe-throwing-gallery-5.jpg",
        img_alt: "allinadventures-axe-throwing 5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-axe-throwing-gallery-6.jpg",
        img_alt: "allinadventures-axe-throwing 6",
      },
    ],
  },
  //============================================axe-throwing end 16
  //============================================beat-the-seat 17
  "beat-the-seat": {
    activityname: "Beat The Seat",

    pagesubtitle:
      "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet.",
    price: 2,
    duration: 2,
    max_players: 1,
    min_players: 1,
    age: "6-99",
    success_rate: false,
    private_events: "YES",
    coverimageL:
      "/assets/all-game-desktop-hero/allinadventures-beat-the-seat.jpg",
    coverimageM:
      "/assets/all-game-mobile-hero/allinadventures-beat-the-seat.jpg",
    coverimageM_alt: "allinadventures-beat-the-seat",

    pagemeta: {
      title: "Beat The Seat Game in CITY | All In Adventures",
      description:
        "Beat the Seat is a two-minute, fun-filled, exhilarating experience where you'll test your endurance, coordination, and ability to think on your feet.",
      keywords:
        "beat the seat, beat the seat game, beat the seat near you, beat the seat CITY, beat the seat game CITY, beat the seat in CITY",
      url: "/activities/beat-the-seat",
      metaindex: true,
      metaimg: "/assets/all-game-mobile-hero/allinadventures-beat-the-seat.jpg",
    },
    activitydata: {
      category: "other",
      story:
        "Beat The Seat is an intense and challenging fun game! You'll be required to solve several different challenges and combinations while holding down the button on the seat, and this must be completed within two minutes. If that sounds simple, well, just wait till you're in there, and you may think a little differently.",
      storyimg:
        "/assets/all-game-details/allinadventures-beat-the-seat-sec1.png",
      storyimg_alt: "allinadventures beat the seat story",
      scene:
        "It's the game of ultimate fast-paced challenge. This fun and exciting game will test your endurance, coordination and ability to think on your feet. Literally! The best part is you can play over and over again and always be challenged as the sequencing in the games change every time. You can even try to beat your fastest time or a friend's time.",
      sceneimg:
        "/assets/all-game-details/allinadventures-beat-the-seat-sec2.png",
      sceneimg_alt: "allinadventures beat the seat plot",
      story_bg: "/assets/svg/game-bg-pattern/chair.svg",
      scene_bg: "/assets/svg/game-bg-pattern/buzzer.svg",
      mission:
        "The great thing is that it can be played by anyone 8 years and older as we have a child mode too! Anyone can play it over and over again as the sequencing of the game changes every time. Try to beat the best times or compete with your friends and family in this new and unique experience.",
      missionimg:
        "/assets/all-game-details/allinadventures-beat-the-seat-sec3.png",
      missionimg_alt: "allinadventures beat the seat mission",
      videoid: "XhMSjpex4tA",
      videothumb: "/assets/video-thumb/allinadventures-beat-the-seat.jpg",
    },

    activitygallery: [
      {
        id: 1,
        img: "/assets/game-gallery/allinadventures-beat-the-seat-gallery-1.jpg",
        img_alt: "allinadventures-beat-the-seat-gallery-1",
      },
      {
        id: 2,
        img: "/assets/game-gallery/allinadventures-beat-the-seat-gallery-2.jpg",
        img_alt: "allinadventures-beat-the-seat-gallery-2",
      },
      {
        id: 3,
        img: "/assets/game-gallery/allinadventures-beat-the-seat-gallery-3.jpg",
        img_alt: "allinadventures-beat-the-seat-gallery-3",
      },
      {
        id: 4,
        img: "/assets/game-gallery/allinadventures-beat-the-seat-gallery-4.jpg",
        img_alt: "allinadventures-beat-the-seat-gallery-4",
      },
      {
        id: 5,
        img: "/assets/game-gallery/allinadventures-beat-the-seat-gallery-5.jpg",
        img_alt: "allinadventures-beat-the-seat-gallery-5",
      },
      {
        id: 6,
        img: "/assets/game-gallery/allinadventures-beat-the-seat-gallery-6.jpg",
        img_alt: "allinadventures-beat-the-seat-gallery-6",
      },
    ],
  },
  //============================================beat-the-seat end 17
  //============================================virtual-reality 12

  //============================================virtual-reality end 12
};

const activityGuest = {
  //********************************************************************************************NY */
  //=========================================================albany-ny list
  "albany-ny": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      id: 1,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      id: 2,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      id: 3,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      id: 4,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      id: 5,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      id: 6,
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      id: 7,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      id: 8,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      id: 9,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
    //============================================lost-in-the-jungle 11
    "lost-in-the-jungle": {
      max_players: 5,
      min_players: 2,
      duration: "60",
    },
    //============================================lost-in-the-jungle end 11

    //============================================wizarding-school 13
    "wizarding-school": {
      max_players: "4",
      min_players: "2",
      duration: "60",
    },
    //============================================wizarding-school end 13
    //============================================magic-castle 9
    "magic-castle": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================magic-castle end 9
    //============================================locked-in-the-Lift 14
    "locked-in-the-lift": {
      max_players: "4",
      min_players: "2",
      duration: "60",
    },
    //============================================locked-in-the-lift end 14
    //============================================game-show-room 15
    "game-show-room": {
      max_players: 16,
      min_players: 4,
    },
    //============================================game-show-room end 15
    //============================================axe-throwing 16
    "axe-throwing": {
      max_players: 4,
      min_players: 2,
      duration: "60",
    },
    //============================================axe-throwing end 16
    //============================================beat-the-seat 17
    "beat-the-seat": {
      max_players: 1,
      min_players: 1,
    },
    //============================================beat-the-seat end 17
  },
  //=========================================================albany-ny list end
  //=========================================================Buffalo ny list
  "buffalo-ny": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      id: 1,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      id: 2,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      id: 3,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      id: 4,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      id: 5,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      id: 6,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      id: 7,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      id: 8,
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      id: 9,
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================albany-ny list end
  //=========================================================middletown-ny list
  "middletown-ny": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      id: 1,
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "15",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10

    //============================================wizarding-school 13
    "wizarding-school": {
      max_players: "4",
      min_players: "2",
      duration: "60",
    },
    //============================================wizarding-school end 13

    //============================================beat-the-seat 17
    "beat-the-seat": {
      max_players: 1,
      min_players: 1,
    },
    //============================================beat-the-seat end 17
  },
  //=========================================================middletown-ny end
  //=========================================================syracuse-ny list
  "syracuse-ny": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      success_rate: "32%",
      duration: "60",
      notice_img: "/assets/svg/new-game-in-beta.svg",
      pagesubtitle:
        "As a library trustee, you have access to a crew that can help with your escape plan. Will you make it out of your cell, and off this miserable rock?",
      story:
        "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. As a library trustee, you have spent a lot of your time walking the corridors, dropping off books, and notes, on other cellblocks. Your job has made you the most connected person in this place.",

      scene:
        "The guards are so used to you and your library cart that they hardly watch as you move from cell to cell. Using this to your advantage, you have found inmates with access to other parts of the facilities and have come up with the plan that will get you out of your cell, and off this miserable rock.",

      mission:
        "If everything goes to plan, you and your crew will make an attempt between shift changes, and slip silently out to sea. Even better, if you can get access to the Main Control Room, you might be able to start a riot and let the chaos cover your escape.",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10

    //============================================magic-castle 9
    // "magic-castle": {
    //   max_players: "4",
    //  min_players: "2",
    // duration: "60",
    // },
    //============================================magic-castle end 9
    //============================================locked-in-the-Lift 14
    // "locked-in-the-lift": {
    //  max_players: "4",
    //  min_players: "2",
    // },
    //============================================locked-in-the-lift end 14

    //============================================beat-the-seat 17
    "beat-the-seat": {
      max_players: 1,
      min_players: 1,
    },
    //============================================beat-the-seat end 17
  },
  //=========================================================syracuse-ny end
  //=========================================================watertown-ny list
  "watertown-ny": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10

    //============================================beat-the-seat end 17
  },
  //=========================================================watertown-ny end
  //=========================================================west-nyack-ny list
  "west-nyack-ny": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7

    //============================================game-show-room 15
    "game-show-room": {
      max_players: 8,
      min_players: 4,
    },
    //============================================game-show-room end 15

    //============================================beat-the-seat 17
    "beat-the-seat": {
      max_players: 1,
      min_players: 1,
    },
    //============================================beat-the-seat end 17
    //============================================axe-throwing 16
    "axe-throwing": {
      max_players: 56,
      min_players: 2,
      pagesubtitle:
        "Come throw axes at our exciting interactive targets with your friends and family! Test your hand-eye coordination and see if you can hit a bull's eye. We can accommodate up to 64 players on the 16 lanes.",
    },
    //============================================axe-throwing e
  },
  //=========================================================west-nyack-ny end
  //=========================================================poughkeepsie-ny list
  "poughkeepsie-ny": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },

    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "4",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10

    //============================================axe-throwing 16
    "axe-throwing": {
      max_players: 24,
      min_players: 2,
    },
    //============================================axe-throwing end 16
  },
  //=========================================================poughkeepsie-ny end
  //********************************************************************************************NY END */
  //********************************************************************************************NC */
  //=========================================================west-nyack-ny list
  "raleigh-nc": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================west-nyack-ny end
  //********************************************************************************************NC END*/
  //********************************************************************************************PA */
  //=========================================================bensalem-palist
  "bensalem-pa": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================bensalem-pa end
  //********************************************************************************************PA END */
  //********************************************************************************************MA */
  //=========================================================hadley-ma list
  "hadley-ma": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================hadley-ma end
  //=========================================================holyoke-ma list
  "holyoke-ma": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3

    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================holyoke-ma end
  //=========================================================kingston-ma list
  "kingston-ma": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
    //============================================lost-in-the-jungle 11
    "lost-in-the-jungle": {
      max_players: 5,
      min_players: 2,
      duration: "60",
    },
    //============================================lost-in-the-jungle end 11
  },
  //=========================================================kingston-ma end
  //=========================================================n-attleborough-ma list
  "n-attleborough-ma": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================n-attleborough-ma end
  //********************************************************************************************MA END */

  //********************************************************************************************CT */
  //=========================================================milford-ct list
  "milford-ct": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2

    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================milford-ct list end
  //=========================================================manchester-ct list
  "manchester-ct": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      success_rate: "32%",
      duration: "60",
      notice_img: "/assets/svg/new-game-in-beta.svg",
      pagesubtitle:
        "As a library trustee, you have access to a crew that can help with your escape plan. Will you make it out of your cell, and off this miserable rock?",
      story:
        "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. As a library trustee, you have spent a lot of your time walking the corridors, dropping off books, and notes, on other cellblocks. Your job has made you the most connected person in this place.",

      scene:
        "The guards are so used to you and your library cart that they hardly watch as you move from cell to cell. Using this to your advantage, you have found inmates with access to other parts of the facilities and have come up with the plan that will get you out of your cell, and off this miserable rock.",

      mission:
        "If everything goes to plan, you and your crew will make an attempt between shift changes, and slip silently out to sea. Even better, if you can get access to the Main Control Room, you might be able to start a riot and let the chaos cover your escape.",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================manchester-ct list end
  //=========================================================manchester-ct list
  "waterbury-ct": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================manchester-ct list end
  //********************************************************************************************CT END*/
  //********************************************************************************************MD */
  //=========================================================bowie-md list
  "bowie-md": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5

    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================bowie-md end
  //=========================================================white-marsh-md list
  "white-marsh-md": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================white-marsh-md end
  //********************************************************************************************MD END*/
  //********************************************************************************************NJ */
  //=========================================================east-brunswick-nj list
  "east-brunswick-nj": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3

    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================east-brunswick-nj end
  //=========================================================rockaway-nj list
  "rockaway-nj": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      duration: "60",
      min_players: "2",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "4",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10

    //============================================game-show-room 15
    "game-show-room": {
      max_players: 8,
      min_players: 4,
      duration: "60",
    },
    //============================================game-show-room end 15
  },
  //=========================================================rockaway-nj end
  //=========================================================woodbridge-nj list. page hero section data can be changed here
  "woodbridge-nj": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
      success_rate: "32%",
      duration: "60",
      notice_img: "/assets/svg/new-game-in-beta.svg",
      pagesubtitle:
        "As a library trustee, you have access to a crew that can help with your escape plan. Will you make it out of your cell, and off this miserable rock?",
      story:
        "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. As a library trustee, you have spent a lot of your time walking the corridors, dropping off books, and notes, on other cellblocks. Your job has made you the most connected person in this place.",

      scene:
        "The guards are so used to you and your library cart that they hardly watch as you move from cell to cell. Using this to your advantage, you have found inmates with access to other parts of the facilities and have come up with the plan that will get you out of your cell, and off this miserable rock.",

      mission:
        "If everything goes to plan, you and your crew will make an attempt between shift changes, and slip silently out to sea. Even better, if you can get access to the Main Control Room, you might be able to start a riot and let the chaos cover your escape.",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "12",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================woodbridge-nj end
  //********************************************************************************************NJ END*/

  //********************************************************************************************OH */
  //=========================================================columbus-oh list
  "columbus-oh": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      id: 4,
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================columbus-oh end
  //=========================================================mentor-oh list
  "mentor-oh": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "8",
      min_players: "2",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "8",
      min_players: "2",
    },
    //============================================treasure-island end 2

    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      max_players: "8",
      min_players: "2",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "8",
      min_players: "2",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "8",
      min_players: "2",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "8",
      min_players: "2",
    },
    //============================================black-ops 10
  },
  //=========================================================mentor-oh end
  //=========================================================dayton-oh  list
  "dayton-oh": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      max_players: "10",
      min_players: "2",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      max_players: "10",
      min_players: "2",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      max_players: "10",
      min_players: "2",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      max_players: "10",
      min_players: "2",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      max_players: "10",
      min_players: "2",
    },
    //============================================special-agent end5

    //============================================sherlocks-library 7
    "sherlocks-library": {
      max_players: "10",
      min_players: "2",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      max_players: "10",
      min_players: "2",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      max_players: "10",
      min_players: "2",
    },
    //============================================black-ops 10
  },
  //=========================================================dayton-oh end
  //********************************************************************************************OH END*/
  //********************************************************************************************VA */
  //=========================================================roanoke-va list
  "roanoke-va": {
    //============================================escape-from-alcatraz 1
    "escape-from-alcatraz": {
      id: 1,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island": {
      id: 2,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      id: 3,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      id: 4,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================zombie-apocalypse end4
    //============================================special-agent5
    "special-agent": {
      id: 5,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================special-agent end5
    //============================================hollywood-premiere 6
    "hollywood-premiere": {
      id: 6,
      max_players: "6",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 6
    //============================================sherlocks-library 7
    "sherlocks-library": {
      id: 7,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      id: 8,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      id: 9,
      max_players: "10",
      min_players: "2",
      duration: "60",
    },
    //============================================black-ops 10
  },
  //=========================================================roanoke-va end
  //********************************************************************************************VA END*/
  //********************************************************************************************GA */
  //=========================================================lawrenceville-ga list
  "lawrenceville-ga": {
    "escape-from-alcatraz": {
      id: 1,
      max_players: "8",
      min_players: "2",
      price: [
        {
          teamSize: "1-3",
          perGuest: "32.99",
        },
        {
          teamSize: "4-6",
          perGuest: "29.99",
        },
        {
          teamSize: "7+",
          perGuest: "26.99",
        },
      ],
      duration: "60",
    },
    //============================================treasure-island 2
    "treasure-island": {
      id: 2,
      max_players: "10",
      min_players: "2",

      price: [
        {
          teamSize: "1-3",
          perGuest: "32.99",
        },
        {
          teamSize: "4-6",
          perGuest: "29.99",
        },
        {
          teamSize: "7+",
          perGuest: "26.99",
        },
      ],
      duration: "60",
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure": {
      id: 3,
      max_players: "10",
      min_players: "2",
      price: [
        {
          teamSize: "1-3",
          perGuest: "32.99",
        },
        {
          teamSize: "4-6",
          perGuest: "29.99",
        },
        {
          teamSize: "7+",
          perGuest: "26.99",
        },
      ],
      duration: "60",
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse": {
      id: 4,
      max_players: "8",
      min_players: "2",
      price: [
        {
          teamSize: "1-3",
          perGuest: "32.99",
        },
        {
          teamSize: "4-6",
          perGuest: "29.99",
        },
        {
          teamSize: "7+",
          perGuest: "26.99",
        },
      ],
      duration: "60",
    },
    //============================================zombie-apocalypse end4

    //============================================sherlocks-library 7
    "sherlocks-library": {
      id: 7,
      max_players: "6",
      min_players: "2",
      price: [
        {
          teamSize: "1-3",
          perGuest: "32.99",
        },
        {
          teamSize: "4-6",
          perGuest: "29.99",
        },
        {
          teamSize: "7+",
          perGuest: "26.99",
        },
      ],
      duration: "60",
    },
    //============================================hollywood-premiere 7
    //============================================houdinis-magic-cell 8
    "houdinis-magic-cell": {
      id: 8,
      max_players: "8",
      min_players: "2",
      price: [
        {
          teamSize: "1-3",
          perGuest: "32.99",
        },
        {
          teamSize: "4-6",
          perGuest: "29.99",
        },
        {
          teamSize: "7+",
          perGuest: "26.99",
        },
      ],
      duration: "60",
    },
    //============================================houdinis-magic-cell 8

    //============================================black-ops 10
    "black-ops": {
      id: 9,
      max_players: "6",
      min_players: "2",
      price: [
        {
          teamSize: "1-3",
          perGuest: "32.99",
        },
        {
          teamSize: "4-6",
          perGuest: "29.99",
        },
        {
          teamSize: "7+",
          perGuest: "26.99",
        },
      ],
      duration: "60",
    },
    //============================================black-ops 10
    "beat-the-seat": {
      id: 2,
      max_players: "1",
      min_players: "1",
    },
  },
  //=========================================================lawrenceville-ga end
  //********************************************************************************************GA END*/
};
