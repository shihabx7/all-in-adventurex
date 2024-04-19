import { getTotal } from "./AllDataList/getTotal";
export const getAllActivity = () => {
  const allActivityList = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,
    virtualgameListSlug: getTotal().virtualgameSlug,

    pagemeta: {
      title: "All Escape Rooms - All In Adventures (Formerly Mystery Room)",
      description:
        "All In Adventures, formerly Mystery Room, run live escape rooms and other games. Choose from a number of escape rooms at our centers across the United States.",
      keywords:
        "all games, all escape rooms, all escape games, all games all in adventures, all games allinadventures, all games mystery room, all escape games all in adventures, all escape games allinadventures, all escape games mystery room, all escape room games all in adventures, all escape room games allinadventures, all escape room games mystery room,",
      url: "/activities",
      metaindex: true,
      metaimg:
        "/assets/all-game-mobile-hero/allinadventures-all-game-page-hero--mobile.jpg",
    },

    pagedata: {
      pagetitle: "ALL ESCAPE ROOMS AND ADVENTURE ACTIVITIES",
      pagesubtitle:
        "Play the top escape rooms and other adventure games. For 60 minute, experience fun-filled interactive entertainment with friends, family, kids or co-works. Escape normal life, and be the hero of the story!",
      totalLocations: getTotal().totalLocations,
      totalUniqueGames: getTotal().uniqueGames,
      totalFiveStarReview: getTotal().totalReview,
      totalPlayerEscaped: getTotal().toalPlayerEscape,
      private_events: "YES",
      coverimageL:
        "/assets/all-game-desktop-hero/large-all-escape-rooms-and-adventure-activities.jpg",
      coverimageM:
        "/assets/all-game-mobile-hero/all-escape-rooms-and-adventure-activities.jpg",
      coverimageM_alt: "All escape rooms and adventure activities",
    },

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
            perGuest: "32.99",
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

      {
        id: 11,
        activity_name: "Wizarding School ",
        activity_type: "In person",
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
        success_rate: "47",
        duration: "60",
        activity_desc:
          "You have gotten locked in the headmaster's office! You must put on your thinking cap and find a way out in time for your next class.",
        activity_slug: "wizarding-school ",
        activity_cover_image:
          "/assets/all-game-list/wizarding-school-all-in-adventures-escape-room.jpg",
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

      /*  {
        id: 13,
        activity_name: "MAGIC CASTLE",
        activity_type: "In person",
        activity_category: "escapegame",
        age: "6-99",
        min_player: "2",
        max_player: "8",
        price: "29.89",
        success_rate: "42",
        duration: "60",
        activity_desc:
          "Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. Test your wits, courage, loyalty, and cunning.",
        activity_slug: "magic-castle",
        activity_cover_image:
          "/assets/all-game-list/magic-castle-all-in-adventures-escape-room.jpg",
      },*/

      {
        id: 14,
        activity_name: "Beat The Seat",
        activity_type: "In person",
        activity_category: "other",
        age: "6-99",
        min_player: 1,
        max_player: 1,
        price: 2,
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
      {
        id: 16,
        activity_name: "Axe Throwing",
        activity_type: "In person",
        gorupcat: "Guest Capacity",
        activity_category: "other",
        age: "13-99",
        min_player: 2,
        max_player: 56,
        price: "23.89",
        duration: "60",
        activity_desc:
          "Experience the excitement of Axe Throwing! Have a blast with friends and see who has the chops to win. It's the perfect adventure for all.",
        activity_slug: "axe-throwing",
        activity_cover_image:
          "/assets/all-game-list/allinadventures-axe-throwing.jpg",
      },
    ],
  };

  return allActivityList;
};
