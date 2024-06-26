import LocActivity from "../../albany-ny/activities";
import { getLocationsPageData } from "../getLocationsPageData";
import { bookingList } from "./bookingList";
import { getLocationActivitySlugList } from "./getLocationActivitySlugList";
import { getLocationEventSlugList } from "./getLocationEventSlugList";
import { getTotal } from "../AllDataList/getTotal";
import { getLocTotal } from "../AllDataList/getLocTotal";

export const getLocationIndActivityList = (slug) => {
  const locData = getLocationsPageData();
  const getLocSpec = (locslug) => {
    var i = 0;
    var j = 0;
    for (i = 0; i < locData.states.length; i++) {
      for (j = 0; j < locData.states[i].cities.length; j++) {
        if (locData.states[i].cities[j].slug == locslug) {
          return locData.states[i].cities[j];
        }
      }
    }
  };

  const locationName = () => {
    var locname = slug.split("-").join(", ");
    return locname;
  };
  const cityName = (loc) => {
    var ctname = loc.split("-");
    if (ctname[0] == "n") {
      ctname[0] = "North";
    }
    var st = ctname[ctname.length - 1].toUpperCase();
    var ct = "";

    for (var i = 0; i < ctname.length - 1; i++) {
      let cst = ctname[i].charAt(0).toUpperCase() + ctname[i].slice(1);
      ct = ct + " " + cst;
    }

    return ct + " " + st;
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

  const getLocationSearchNameLw = (s) => {
    var spLoc = s.split("-");
    if (spLoc[0] == "n." || spLoc[0] == "N.") {
      spLoc[0] = "North";
    }
    var st = spLoc[spLoc.length - 1].toString();
    spLoc = spLoc.slice(0, -1);
    spLoc = spLoc.join(" ");

    var nsp = spLoc.split(" ");
    var x;
    var appArr = ["to", "at", "in", "for", "of", "it", "a", "an"];
    for (x = 0; x < nsp.length; x++) {
      var upc = nsp[x].charAt(0).toUpperCase();
      var nnsp = nsp[x].substring(0, 0) + upc + nsp[x].substring(0 + 1);
      nsp[x] = nnsp;
    }

    nsp = nsp.join(" ");

    var ret = nsp + " " + st.toUpperCase();
    return ret;
  };
  const capCase = (str) => {
    var capstr = str.split(" ");
    var x;

    for (x = 0; x < capstr.length; x++) {
      if (capstr[x] != "usa") {
        var upc = capstr[x].charAt(0).toUpperCase();
        var nnsp = capstr[x].substring(0, 0) + upc + capstr[x].substring(0 + 1);
        capstr[x] = nnsp;
      } else {
        capstr[x] = capstr[x].toUpperCase();
      }
    }

    return capstr.join(" ");
  };
  const getState = (locslug) => {
    var stArr = locslug.split("-");
    return stArr[stArr.length - 1].toUpperCase();
  };
  const capMall = (mall) => {
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

    return capmall;
  };
  const bookingAll = bookingList("", slug);

  const data = {
    pagemeta: {
      title:
        "All Escape Rooms in " +
        getLocationSearchNameLw(slug) +
        " - All In Adventures at " +
        capMall(LocActivityData[slug].mall),
      description:
        "All In Adventures, formerly Mystery Room, run live escape rooms and other games in " +
        getLocationSearchNameLw(slug) +
        ". Choose from many escape rooms at " +
        LocActivityData[slug].mall +
        " location.",
      keywords:
        "all games albany, all games " +
        getLocationSearchNameLw(slug).toLowerCase() +
        ", all escape rooms " +
        getLocationSearchNameLw(slug).toLowerCase() +
        ", all escape games " +
        getLocationSearchNameLw(slug).toLowerCase() +
        ", all games crossgates mall, all games " +
        LocActivityData[slug].mall.toLowerCase() +
        ", all escape rooms " +
        LocActivityData[slug].mall.toLowerCase() +
        ", all escape games " +
        LocActivityData[slug].mall.toLowerCase() +
        ", all in adventures all games " +
        LocActivityData[slug].mall.toLowerCase() +
        " " +
        getLocationSearchNameLw(slug).toLowerCase() +
        ", mystery room all games " +
        LocActivityData[slug].mall.toLowerCase() +
        " " +
        getLocationSearchNameLw(slug).toLowerCase(),
      url: "/" + slug + "/activities",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-all-game-page-hero--mobile.jpg",
    },

    pagedata: {
      pagetitle:
        "ALL ESCAPE ROOMS AND ADVENTURE ACTIVITIES IN " + locnameMod(slug),
      location_name: locnameMod(slug),
      locationslug: slug,
      city: getLocSpec(slug).city,
      state: getState(slug),
      mall: capMall(LocActivityData[slug].mall),
      publish_status: getLocTotal(slug).publish_status,
      pagesubtitle:
        "Play the top " +
        cityName(slug) +
        " escape rooms and other adventure games. For 60 minute, experience fun-filled interactive entertainment with friends, family, kids or co-works. Escape normal life, and be the hero of the story!",
      totalLocations: getTotal().totalLocations,
      totalUniqueGames: getLocationActivitySlugList(slug).length,
      totalFiveStarReview: getLocTotal(slug).locTotalReview,
      totalPlayerEscaped: getLocTotal(slug).locToalPlayerEscape,
      private_events: "yes",
      coverimageL:
        "/assets/all-game-desktop-hero/large-all-escape-rooms-and-adventure-activities.jpg",
      coverimageM:
        "/assets/all-game-mobile-hero/all-escape-rooms-and-adventure-activities.jpg",
      coverimageM_alt: "All escape rooms and adventure activities",
      bookingall: {
        shortname: bookingAll.shortname,
        flow: bookingAll.flow,
      },
      eventbooking: {
        shortname: bookingAll.shortname,
        item: bookingAll["party-package"].item,
        flow: bookingAll["party-package"].flow,
        eventstatus: bookingAll["party-package"].eventstatus,
      },
      locdetail: getLocSpec(slug),
    },

    activity_list: LocActivityData[slug].activity_list,
    bookingdata: bookingAll,
    activitylist: getLocationActivitySlugList(slug),
    eventslist: getLocationEventSlugList(slug),
    locationlist: getLocTotal(slug).locationlist,
  };
  return data;
};

const LocActivityData = {
  //********************************************************************************************NY */
  //=========================================================albany-ny list
  "albany-ny": {
    mall: "crossgate mall",
    totalFiveStarReview: "4.5k",
    totalPlayerEscaped: "11k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "56",
        duration: "60",
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "18",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
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
        success_rate: "45",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================albany-ny list end
  //=========================================================Buffalo ny list
  "buffalo-ny": {
    mall: "Walden Galleria",
    totalFiveStarReview: "5.3k",
    totalPlayerEscaped: "9k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "56",
        duration: "60",
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "61",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "18",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "45",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================albany-ny list end
  //=========================================================middletown-ny list
  "middletown-ny": {
    mall: "Galleria at Crystal Run",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "3.8k",
    totalPlayerEscaped: "7k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "56",
        duration: "60",
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "67",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "37",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "42",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "46",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "15",
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
        success_rate: "61",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "18",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "37",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "45",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
      {
        id: 11,
        activity_name: "Wizarding School ",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "4",
        price: [
          {
            teamSize: "1-3",
            perGuest: "39.95",
          },
          {
            teamSize: "4+",
            perGuest: "37.49",
          },
        ],
        duration: "60",
        success_rate: "47",
        activity_desc:
          "You have gotten locked in the headmaster's office! You must put on your thinking cap and find a way out in time for your next class.",
        activity_slug: "wizarding-school",
        activity_cover_image:
          "/assets/all-game-list/wizarding-school-all-in-adventures-escape-room.jpg",
      },

      {
        id: 14,
        activity_name: "Beat The Seat",
        activity_type: "In-person",
        activity_category: "other",
        age: "6-99",
        min_player: "1",
        max_player: "1",
        price: "5",
        duration: "2",
        activity_desc:
          "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
        activity_slug: "beat-the-seat",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-beat-the-seat.jpg",
      },
    ],
  },
  //=========================================================middletown-ny end
  //=========================================================syracuse-ny list
  "syracuse-ny": {
    mall: "Destiny USA",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "6.9k",
    totalPlayerEscaped: "12k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "32",
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
        activity_desc:
          "As a library trustee, you have access to a crew that can help with your escape plan. Will you make it out of your cell, and off this miserable rock?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },

      /* {
        id: 12,
        activity_name: "Locked in the Lift",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "4",
        success_rate: "63",
        price: "29.89",
        duration: "30",
        activity_desc:
          "Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. See if you can piece together how to get things running again.",
        activity_slug: "locked-in-the-lift",
        activity_cover_image:
          "/assets/all-game-list/locked-in-the-lift-all-in-adventures-escape-room.jpg",
      },*/

      {
        id: 14,
        activity_name: "Beat The Seat",
        activity_type: "In person",
        activity_category: "other",
        age: "6-99",
        min_player: 1,
        max_player: 1,
        price: 5,
        duration: 2,
        activity_desc:
          "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
        activity_slug: "beat-the-seat",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-beat-the-seat.jpg",
      },
    ],
  },
  //=========================================================syracuse-ny end
  //=========================================================syracuse-ny list
  "watertown-ny": {
    mall: "Salmon Run Mall",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "3.3k",
    totalPlayerEscaped: "10k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "56",
        duration: "60",
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "61",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "18",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "45",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================watertown-ny end
  //=========================================================west-nyack-ny list
  "west-nyack-ny": {
    mall: "Palisades Center",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "2.9k",
    totalPlayerEscaped: "4.8k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },

      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      /* {
        id: 16,
        activity_name: "Axe Throwing Game",
        activity_type: "In person",
        activity_category: "other",
        age: "13-99",
        min_player: 2,
        max_player: 56,
        groupcat: "Guest Capacity",
        price: "23.89",
        duration: "60",
        activity_desc:
          "Experience the excitement of Axe Throwing! Have a blast with friends and see who has the chops to win. It's the perfect adventure for all.",
        activity_slug: "axe-throwing",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-axe-throwing.jpg",
      },*/
      /* {
        id: 17,
        activity_name: "Axe Throwing Party",
        activity_type: "In person",
        activity_category: "other",
        age: "13-99",
        min_player: 2,
        max_player: 56,
        groupcat: "Guest Capacity",
        price: "75",
        duration: "120",
        bookingSlug: "axe-throwing-party",
        activity_desc:
          "Host an unforgettable Axe Throwing Party with a private room, catering, and a lively setting - perfect for birthdays and team events. Make it a hit!",
        activity_slug: "axe-throwing",
        activity_cover_image:
          "/assets/all-game-list/axe-throwing-party-booking.jpg",
      },*/

      {
        id: 14,
        activity_name: "Beat The Seat",
        activity_type: "In person",
        activity_category: "other",
        age: "6-99",
        min_player: 1,
        max_player: 1,
        price: 5,
        duration: 2,
        activity_desc:
          "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
        activity_slug: "beat-the-seat",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-beat-the-seat.jpg",
      },
      {
        id: 15,
        activity_name: "Game Show Room",
        activity_type: "In person",
        activity_category: "other",
        age: "6-99",
        min_player: 4,
        max_player: 16,
        price: 33,
        duration: 60,
        activity_desc:
          "Always dreamed of being on a game show? Dream no more, you can be the next contestant in this exciting game show experience!",
        activity_slug: "game-show-room",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-game-show-room.jpg",
      },
    ],
  },
  //=========================================================west-nyack-ny end
  //=========================================================poughkeepsie-ny list
  "poughkeepsie-ny": {
    mall: "Poughkeepsie Galleria",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "1.3k",
    totalPlayerEscaped: "2.8k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "4",
        success_rate: "18",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4+",
            perGuest: "29.99",
          },
        ],
        duration: "60",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 16,
        activity_name: "Axe Throwing Game",
        activity_type: "In person",
        activity_category: "other",
        age: "13-99",
        min_player: 2,
        max_player: 24,
        groupcat: "Guest Capacity",
        price: "23.89",
        duration: "60",
        activity_desc:
          "Experience the excitement of Axe Throwing! Have a blast with friends and see who has the chops to win. It's the perfect adventure for all.",
        activity_slug: "axe-throwing",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-axe-throwing.jpg",
      },
      {
        id: 17,
        activity_name: "Axe Throwing Party",
        activity_type: "In person",
        activity_category: "other",
        age: "13-99",
        min_player: 2,
        max_player: 24,
        groupcat: "Guest Capacity",
        price: "75",
        duration: "120",
        bookingSlug: "axe-throwing-party",
        activity_desc:
          "Host an unforgettable Axe Throwing Party with a private room, catering, and a lively setting - perfect for birthdays and team events. Make it a hit!",
        activity_slug: "axe-throwing",
        activity_cover_image:
          "/assets/all-game-list/axe-throwing-party-booking.jpg",
      },
    ],
  },
  //=========================================================poughkeepsie-ny end
  //********************************************************************************************NY END */
  //********************************************************************************************NC */
  //=========================================================raleigh-n list
  "raleigh-nc": {
    mall: "Triangle Town Centerl",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "5.4k",
    totalPlayerEscaped: "8.8k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================raleigh-n end
  //********************************************************************************************NC END*/
  //********************************************************************************************PA */
  //=========================================================bensalem-palist
  "bensalem-pa": {
    mall: "Neshaminy Mall",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "7.3k",
    totalPlayerEscaped: "9.8k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        success_rate: "18",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        duration: "60",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================bensalem-pa end
  //********************************************************************************************PA END */
  //********************************************************************************************MA */
  //=========================================================hadley-ma list
  "hadley-ma": {
    mall: "Hampshire Mall",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "6.5k",
    totalPlayerEscaped: "12k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        success_rate: "56",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        duration: "60",
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================hadley-ma end
  //=========================================================holyoke-ma list
  "holyoke-ma": {
    mall: "Holyoke Mall",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "4.6k",
    totalPlayerEscaped: "9.2k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },

      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================holyoke-ma end
  //=========================================================kingston-ma list
  "kingston-ma": {
    mall: "Kingston Collection",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "5.6k",
    totalPlayerEscaped: "8.7k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        success_rate: "18",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        duration: "60",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },

      {
        id: 10,
        activity_name: "Lost in The Jungle",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "5",
        success_rate: "54",
        price: [
          {
            teamSize: "1-4",
            perGuest: "35.95",
          },
          {
            teamSize: "5+",
            perGuest: "37.99",
          },
        ],
        duration: "60",
        activity_desc:
          "The mysterious sound of drums lure you in, promising adventure. You find yourself trapped in the game, and the only way out is to win!",
        activity_slug: "lost-in-the-jungle",
        activity_cover_image:
          "/assets/all-game-list/lost-in-the-jungle-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================kingston-ma end
  //=========================================================n-attleborough-ma list
  "n-attleborough-ma": {
    mall: "Emerald Square Mall",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "4.2k",
    totalPlayerEscaped: "6.8k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================n-attleborough-ma end
  //********************************************************************************************MA END */

  //********************************************************************************************CT */
  //=========================================================milford-ct list
  "milford-ct": {
    mall: "Connecticut Post Mall",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "3.7k",
    totalPlayerEscaped: "5.2k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },

      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },

      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================milford-ct list end
  //=========================================================manchester-ct list
  "manchester-ct": {
    mall: "The Shoppes at Buckland Hills",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "4.8k",
    totalPlayerEscaped: "7.6.2k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "32",
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
        activity_desc:
          "As a library trustee, you have access to a crew that can help with your escape plan. Will you make it out of your cell, and off this miserable rock?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================manchester-ct list end
  //=========================================================manchester-ct list

  //=========================================================manchester-ct list end
  //********************************************************************************************CT END*/
  //********************************************************************************************MD */
  //=========================================================bowie-md list
  "bowie-md": {
    mall: "Bowie Town Center",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "6.4k",
    totalPlayerEscaped: "12.3k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================bowie-md end
  //=========================================================white-marsh-md list
  "white-marsh-md": {
    mall: "White Marsh Mall",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "4.8k",
    totalPlayerEscaped: "11.7k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================white-marsh-md end
  //********************************************************************************************MD END*/
  //********************************************************************************************NJ */
  //=========================================================east-brunswick-nj list
  "east-brunswick-nj": {
    mall: "Brunswick Square",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "2.7k",
    totalPlayerEscaped: "5.3k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        success_rate: "56",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        duration: "60",
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },

      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        success_rate: "18",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        duration: "60",
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================east-brunswick-nj end
  //=========================================================rockaway-nj list
  "rockaway-nj": {
    mall: "Rockaway Townsquare",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "5.3k",
    totalPlayerEscaped: "10k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "4",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4+",
            perGuest: "29.99",
          },
        ],
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================rockaway-nj end
  //=========================================================woodbridge-nj list
  "woodbridge-nj": {
    mall: "Woodbridge Center",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "7.5k",
    totalPlayerEscaped: "13k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "32",
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
        activity_desc:
          "As a library trustee, you have access to a crew that can help with your escape plan. Will you make it out of your cell, and off this miserable rock?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "12",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================woodbridge-nj end
  //********************************************************************************************NJ END*/
  //********************************************************************************************TX */

  //********************************************************************************************TX END*/
  //********************************************************************************************OH */
  //=========================================================columbus-oh list
  "columbus-oh": {
    mall: "Polaris Fashion Place",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "3.5k",
    totalPlayerEscaped: "8.2k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In-person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
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
        success_rate: "37",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================columbus-oh end

  //********************************************************************************************OH END*/
  //********************************************************************************************VA */
  //=========================================================roanoke-va list
  "roanoke-va": {
    mall: "Valley View Mall ",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "4.7k",
    totalPlayerEscaped: "11.4k+",

    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",

        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 8,
        activity_name: "Special Agent",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        activity_slug: "special-agent",
        activity_cover_image:
          "/assets/all-game-list/special-agent-all-in-adventures-escape-room.jpg",
      },
      {
        id: 9,
        activity_name: "HOLLYWOOD PREMIERE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "45",
        duration: "60",
        activity_desc:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        activity_slug: "hollywood-premiere",
        activity_cover_image:
          "/assets/all-game-list/hollywood-premiere-all-in-adventures-escape-room.jpg",
      },
    ],
  },
  //=========================================================roanoke-va end
  //********************************************************************************************VA END*/
  //********************************************************************************************GA */
  //=========================================================lawrenceville-ga list
  "lawrenceville-ga": {
    mall: "Sugarloaf Mills",
    coverimageL: "/assets/location-hero-bg.jpg",
    coverimageM: "/assets/location-hero.jpg",
    totalFiveStarReview: "3.8k",
    totalPlayerEscaped: "9.4k+",
    activity_list: [
      {
        id: 1,
        activity_name: "Escape from Alcatraz",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "56",
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
        activity_desc:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        activity_slug: "escape-from-alcatraz",
        activity_cover_image:
          "/assets/all-game-list/escape-from-alcatraz-all-in-adventures-escape-room.jpg",
      },
      {
        id: 2,
        activity_name: "Treasure Island",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "67",
        duration: "60",
        activity_desc:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        activity_slug: "treasure-island",
        activity_cover_image:
          "/assets/all-game-list/treasure-island-all-in-adventures-escape-room.jpg",
      },
      {
        id: 3,
        activity_name: "Zombie Apocalypse",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
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
        success_rate: "37",
        duration: "60",
        activity_desc:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        activity_slug: "zombie-apocalypse",
        activity_cover_image:
          "/assets/all-game-list/zombie-apocalypse-all-in-adventures-escape-room.jpg",
      },
      {
        id: 4,
        activity_name: "Sherlock's Library",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "42",
        duration: "60",
        activity_desc:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        activity_slug: "sherlocks-library",
        activity_cover_image:
          "/assets/all-game-list/sherlocks-library-all-in-adventures-escape-room.jpg",
      },
      {
        id: 5,
        activity_name: "Black Ops",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "6",
        price: [
          {
            teamSize: "1-3",
            perGuest: "32.99",
          },
          {
            teamSize: "4-6",
            perGuest: "29.99",
          },
        ],
        success_rate: "46",
        duration: "60",
        activity_desc:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        activity_slug: "black-ops",
        activity_cover_image:
          "/assets/all-game-list/black-ops-all-in-adventures-escape-room.jpg",
      },
      {
        id: 6,
        activity_name: "Superhero's Adventure",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "10",
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
        success_rate: "61",
        duration: "60",
        activity_desc:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        activity_slug: "superheros-adventure",
        activity_cover_image:
          "/assets/all-game-list/superheros-adventure-all-in-adventures-escape-room.jpg",
      },
      {
        id: 7,
        activity_name: "HOUDINI'S MAGIC CELL",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        success_rate: "18",
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
        activity_desc:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        activity_slug: "houdinis-magic-cell",
        activity_cover_image:
          "/assets/all-game-list/houdinis-magic-cell-all-in-adventures-escape-room.jpg",
      },

      {
        id: 14,
        activity_name: "Beat The Seat",
        activity_type: "In person",
        activity_category: "other",
        age: "6-99",
        min_player: 1,
        max_player: 1,
        price: 5,
        duration: 2,
        activity_desc:
          "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
        activity_slug: "beat-the-seat",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-beat-the-seat.jpg",
      },
    ],
  },
  //=========================================================lawrenceville-ga end
  //********************************************************************************************GA END*/
};
