import { getTotal } from "./AllDataList/getTotal";

export const Homepagedata = () => {
  const Homepagedata = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,
    virtualgameListSlug: getTotal().virtualgameSlug,
    pagemeta: {
      title:
        "All In Adventures | " +
        getTotal().totalLocations +
        " Escape Room Venues in U.S.",
      description:
        "All In Adventures, formerly Mystery Room, is a multi-location escape room, game show room, beat the seat, and axe throwing destination in the United States.",
      keywords:
        "all in adventures, allinadventures, all in adventure, allinadventure, mystery room, mysteryroom, mystery rooms, mysteryrooms, escape room near me, escape rooms near me, escape rooms, escaperooms,escape room near by, escape room, escaperoom, escape games, escapegames, escape game, escapegame, family friendly escape rooms, kids friendly escape rooms, birthday party, birthday party places, birthday party venue, team building, team building activities",
      metaindex: true,

      metaimg:
        "/assets/gn-mobile-hero/allinadventures-escape-room-home-hero.jpg",
    },
    homeagedata: {
      totalLocations: getTotal().totalLocations,
      totalUniqueGames: getTotal().uniqueGames,
      age: "6-99",
      private_events: "Yes",
      totalFiveStarReview: getTotal().totalReview,
      totalPlayerEscaped: getTotal().toalPlayerEscape,
      subtitle:
        "All In Adventures (formerly Mystery Room), has kid and family friendly Escape Rooms, Game Show Rooms, Beat the Seat, and Axe Throwing games that are perfect for all ages and skill levels. We host the most exciting birthday parties, team building activities, and private events.",
    },
    inpersongames: [
      {
        id: 1,
        category: "escapegame",
        type: "In-Person",
        success_rate: "56",
        title: "Escape From Alcatraz",
        description:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "escape-from-alcatraz",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-escape-from-alcatraz.jpg",
      },
      {
        id: 2,
        category: "escapegame",
        type: "In-Person",
        title: "Treasure Island",
        success_rate: "67",
        description:
          "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "treasure-island",
        bgimg: "/assets/all-game-slider-bg/allinadventures-treasure-island.jpg",
      },
      {
        id: 3,
        category: "escapegame",
        type: "In-Person",
        title: "Zombie Apocalypse",
        success_rate: "37",
        description:
          "Trapped in a lab lockdown with a growing zombie horde, can you develope a vaccine and escape the facility before it is too late?",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "zombie-apocalypse",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-zombie-apocalypse.jpg",
      },
      {
        id: 4,
        category: "escapegame",
        type: "In-Person",
        title: "Sherlock's Library",
        success_rate: "42",
        description:
          "The great detective Sherlock Holmes has gone missing, but things are not always as they seem. Follow the trail of clues to find him.",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "sherlocks-library",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-sherlocks-library.jpg",
      },

      {
        id: 5,
        category: "escapegame",
        type: "In-Person",
        title: "Black Ops",
        success_rate: "46",
        description:
          "After acquiring all necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer!",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "black-ops",
        bgimg: "/assets/all-game-slider-bg/allinadventures-black-ops.jpg",
      },
      {
        id: 6,
        category: "escapegame",
        type: "In-Person",
        title: "Superhero's Adventure",
        success_rate: "61",
        description:
          "The arch-criminal Matador has devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "superheros-adventure",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-superheros-adventure.jpg",
      },
      {
        id: 7,
        category: "escapegame",
        type: "In-Person",
        title: "Houdini's Magic Cell",
        success_rate: "18",
        description:
          "As a magician, you have always looked up to Houdini and his impressive skills. Prove you have what it takes to be a Master Magician!",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "houdinis-magic-cell",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-houdinis-magic-cell.jpg",
      },

      {
        id: 8,
        category: "escapegame",
        type: "In-Person",
        title: "Special Agent",
        success_rate: "37",
        description:
          "An international jewel thief is about to slip free. Can your team find the clues to stop them from escaping before it is too late?",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "special-agent",
        bgimg: "/assets/all-game-slider-bg/allinadventures-special-agent.jpg",
      },
      {
        id: 9,
        category: "escapegame",
        type: "In-Person",
        title: "Hollywood Premiere",
        success_rate: "45",
        description:
          "You're the next lucky contestant on an exciting Hollywood game show! Solve our puzzles and see if you can name our secret celebrity!",
        age: "6-99",
        duration: "60",
        maxplayers: "10",
        minplayers: "2",
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
        slug: "hollywood-premiere",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-hollywood-premiere.jpg",
      },
      {
        id: 10,
        category: "escapegame",
        type: "In-Person",
        title: "Lost in The Jungle",
        success_rate: "54",
        description:
          "The mysterious sound of drums lure you in, promising adventure. You find yourself trapped in the game, and the only way out is to win!",
        age: "6-99",
        duration: "60",
        maxplayers: "5",
        minplayers: "2",
        price: [
          {
            teamSize: "1-4",
            perGuest: "39.95",
          },
          {
            teamSize: "5+",
            perGuest: "37.99",
          },
        ],
        slug: "lost-in-the-jungle",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-lost-in-the-jungle.jpg",
      },
      {
        id: 11,
        category: "escapegame",
        type: "In-Person",
        title: "Wizarding School",
        success_rate: "47",
        description:
          "You have gotten locked in the headmaster's office! You must put on your thinking cap and find a way out in time for your next class.",
        age: "6-99",
        duration: "60",
        maxplayers: "4",
        minplayers: "2",
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
        slug: "wizarding-school",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-wizarding-school.jpg",
      },
      /*{
        id: 12,
        category: "escapegame",
        type: "In-Person",
        title: "locked in The Lift",
        success_rate: "63",
        description:
          "Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. See if you can piece together how to get things running again.",
        age: "6-99",
        duration: "30",
        maxplayers: "4",
        minplayers: "2",
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
        slug: "locked-in-the-lift",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-locked-in-the-lift-game.jpg",
      },*/

      /* {
        id: 13,
        category: "escapegame",
        type: "In-Person",
        title: "Magic Castle",
        success_rate: "42",
        description:
          "Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. Test your wits, courage, loyalty, and cunning.",
        age: "6-99",
        duration: "60",
        maxplayers: "8",
        minplayers: "2",
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
        slug: "magic-castle",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-magic-castle-game.jpg",
      },*/
    ],
    otherphysicalgames: [
      {
        id: 3,
        category: "other",
        type: "In-Person",
        title: "Axe Throwing",
        description:
          "Experience the excitement of Axe Throwing! Have a blast with friends and see who has the chops to win. It's the perfect adventure for all.",
        age: "13-99",
        duration: "60",
        maxplayers: "56",
        groupcat: "Guest Capacity",
        minplayers: "2",
        price: "23.89",
        slug: "axe-throwing",
        bgimg: "/assets/all-game-slider-bg/allinadventures-axe-throwing.jpg",
      },

      {
        id: 1,
        category: "other",
        type: "In-Person",
        title: "Beat The Seat",
        description:
          "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet.",
        age: "6-99",
        duration: "2",
        maxplayers: "16",
        minplayers: "1",
        price: "5",
        slug: "beat-the-seat",
        bgimg: "/assets/all-game-slider-bg/allinadventures-beat-the-seat.jpg",
      },
      {
        id: 2,
        category: "other",
        type: "In-Person",
        title: "Game Show Room",
        description:
          "Always dreamed of being on a game show? Dream no more, you can be the next contestant in this exciting game show experience!",
        age: "6-99",
        duration: "60",
        maxplayers: "16",
        minplayers: "4",
        price: "33",
        slug: "game-show-room",
        bgimg: "/assets/all-game-slider-bg/allinadventures-game-show-room.jpg",
      },

      /*  {
        id: 4,
        category: "showroom",
        type: "Virtual",
        title: "Virtual Game Show Room",
        description:
          "An interactive live game show experience that players of all ages and backgrounds can come together and play from across the globe",
        age: "6-99",
        duration: "60",
        maxplayers: "12",
        minplayers: "4",
        price: "20",
        booking: {
          shortname: "virtualgameshowroom",
          item: "285707",
          flow: "594928",
        },
        slug: "virtual-games/virtual-game-show-room",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-virtual-game-showroom.jpg",
      },*/
    ],
    events: [
      {
        id: 1,
        category: "event",
        type: "In-Person",
        title: "BIRTHDAY PARTIES",
        description:
          "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
        slug: "birthday-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-birthday-party.jpg",
      },
      {
        id: 2,
        category: "event",
        type: "In-Person",
        title: "TEAM BUILDING",
        description:
          "This fun and exciting interactive form of team building will bring your corporate team closer!",
        slug: "team-building",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-team-building.jpg",
      },
      {
        id: 3,
        category: "event",
        type: "In-Person",
        title: "CORPORATE EVENTS",
        description:
          "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
        slug: "corporate-events",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-corporate-party.jpg",
      },

      {
        id: 4,
        category: "event",
        type: "In-Person",
        title: "FAMILY FUN ACTIVITIES",
        description:
          "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
        slug: "family-fun-activity",
        bgimg: "/assets/all-event-slider-bg/all-in-adventures-family-fun.jpg",
      },
      {
        id: 5,
        category: "event",
        type: "In-Person",
        title: "Bachelor Party",
        description:
          "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
        slug: "bachelor-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-bachelor-party.jpg",
      },
      {
        id: 6,
        category: "event",
        type: "In-Person",
        title: "Bachelorette Party",
        description:
          "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
        slug: "bachelorette-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-bachelorette-party.jpg",
      },
      {
        id: 7,
        category: "event",
        type: "In-Person",
        title: "PROPOSAL PARTY",
        description:
          "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
        slug: "proposal-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-proposal-party.jpg",
      },
      {
        id: 8,
        category: "event",
        type: "In-Person",
        title: "DATE NIGHT / NIGHT OUT",
        description:
          "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
        slug: "date-night",
        bgimg: "/assets/all-event-slider-bg/all-in-adventures-date-night.jpg",
      },
      {
        id: 9,
        category: "event",
        type: "In-Person",
        title: "Private Party",
        description:
          "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
        slug: "private-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-private-party.jpg",
      },
      {
        id: 10,
        category: "event",
        type: "In-Person",
        title: "Reunion Party",
        description:
          "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
        slug: "reunion-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-reunion-party.jpg",
      },
      {
        id: 11,
        category: "event",
        type: "In-Person",
        title: "Graduation Party",
        description:
          "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
        slug: "graduation-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-graduation-party.jpg",
      },

      {
        id: 12,
        category: "event",
        type: "In-Person",
        title: "SCHOOL EVENTS / FIELD TRIPS",
        description:
          "Students exercise critical thinking and act to become the super-spies they see in the movies!",
        slug: "school-events",
        bgimg: "/assets/all-event-slider-bg/all-in-adventures-school-event.jpg",
      },
      {
        id: 13,
        category: "event",
        type: "In-Person",
        title: "GENDER REVEAL PARTY",
        description:
          "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
        slug: "gender-reveal-party",
        bgimg:
          "/assets/all-event-slider-bg/all-in-adventures-gender-reveal-party.jpg",
      },
    ],
    virtualgames: [
      {
        id: 1,
        category: "showroom",
        type: "Virtual",
        title: "Virtual Game Show Room",
        description:
          "An interactive live game show experience that players of all ages and backgrounds can come together and play from across the globe",
        age: "6-99",
        duration: "60",
        maxplayers: "12",
        minplayers: "4",
        price: "20",
        booking: {
          shortname: "virtualgameshowroom",
          item: "285707",
          flow: "594928",
        },
        slug: "virtual-games/virtual-game-show-room",
        bgimg:
          "/assets/all-game-slider-bg/allinadventures-virtual-game-showroom.jpg",
      },
      {
        id: 2,
        category: "game",
        type: "Virtual",
        title: "6 Virtual Escape Rooms",
        description:
          "New generation of escape rooms that are exactly like physical escape rooms, but can be played from anywhere.",
        age: "6-99",
        duration: "60",
        maxplayers: "12",
        minplayers: "2",
        price: "147",
        slug: "virtual-games",
        bgimg: "/assets/all-game-slider-bg/allinadventures-virtual-game.jpg",
        bookinglink: "https://www.virtualmysteryroom.com",
      },
    ],
    homereviews: [
      {
        id: 1,
        star: 5,
        title: "IT WAS SUPER FUN!",
        review_text:
          "I visited All In Adventures with my friend for my first escape room experience, which was super fun! We had a great time and I will definitely return if I am in the area. Highly recommended!",
        author: "Myla S.",
        author_location: "Albany, NY, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-testimonial-11.jpg",
        rev_img_alt: "allinadventures-escape-room-private-party.jpg",
      },
      {
        id: 2,
        star: 5,
        title: "WE HAD A BLAST!",
        review_text:
          "My 8-year-old son and I did the Treasure Island and Alcatraz. We had a blast. Definitely a challenge for both, but not terribly difficult for the two of us! Definitely recommended!",
        author: "Andrew S.",
        author_location: "Buffalo, NY, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-dad-son.jpg",
        rev_img_alt: "escape room in buffalo ny",
      },
      {
        id: 3,
        star: 5,
        title: "HIGHLY RECOMMENDED!",
        review_text:
          "They're so friendly and helpful and made us feel so comfortable! If you're looking for a fun place I'd definitely say this is the place for you and your family. 10/10 highly recommended!",
        author: "Yalayna D.",
        author_location: "Middletown, NY, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-family-activity.jpg",
        rev_img_alt: "escape room in middletown ny",
      },
      {
        id: 4,
        star: 5,
        title: "WILL COME AGAIN!",
        review_text:
          "It was my daughter's birthday! We had a very fun experience. It's a cool place. The game masters were amazing! They have the best personalities, they made it fun. Will come again.",
        author: "Nicole H.",
        author_location: "Lawrenceville, GA, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-kids-birthday-party.jpg",
        rev_img_alt: "escape room in Lawrenceville ga",
      },
      {
        id: 5,
        star: 5,
        title: "THEMED PERFECTLY!",
        review_text:
          "The room and puzzle details were themed perfectly and it was a fun, challenging activity to do as a family. We enjoyed it so much that we can't wait to return to try other rooms.",
        author: "Jamie H.",
        author_location: "Bensalem, PA, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-father-with-family.jpg",
        rev_img_alt: "escape room in Bensalem pa",
      },
      {
        id: 6,
        star: 5,
        title: "HAPPY AND SATISFIED!",
        review_text:
          "The game master made the experience more fun for our group with his humor and was great at providing clues when needed without giving away the answer. Highly recommended for group activity!",
        author: "Jayme W.",
        author_location: "Kingston, MA, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-female-corporate-team-building.jpg",
        rev_img_alt: "escape room in Kingston MA",
      },
      {
        id: 7,
        star: 5,
        title: "LOTS OF ROOMS!",
        review_text:
          "Great thing about this place was lots of rooms and variety to choose from with varying degrees of difficulty. A beginner or an expert could enjoy this place and be able to come multiple times.",
        author: "Ligi J.",
        author_location: "West Nyack, NY, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-team-building.jpg",
        rev_img_alt: "escape room in Milford CT",
      },
      {
        id: 8,
        star: 5,
        title: "EVERYONE LOVED IT",
        review_text:
          "We had a blast at All In Adventures! Escaping with my 10 cousins, ages 6 to 13, was unforgettable. Everyone loved it! Can't wait to go back for more fun!",
        author: "Brittany W.",
        author_location: "Roanoke, VA, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-young-girl-with-friends.jpg",
        rev_img_alt: "escape room in Roanoke va",
      },
      {
        id: 9,
        star: 5,
        title: "HIGHLY RECOMMENDED!",
        review_text:
          "A few days back, we organized a girls' night out at All In Adventures. We played “Escape From Alcatraz” there, and it was really thrilling! The puzzles were challenging from start to finish, and the staff was fantastic. Highly Recommended!",
        author: "Gabriela Y.",
        author_location: "Rockaway, NJ, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-kids-with-family.jpg",
        rev_img_alt: "escape room in Rockaway nj",
      },
      {
        id: 10,
        star: 5,
        title: "planning our next visit!",
        review_text:
          "All In Adventures made our reunion electrifying! Solving puzzles with old pals brought back memories and created new ones. A perfect blend of nostalgia and thrill! We're already planning our next visit!",
        author: "Sandra J.",
        author_location: "Bowie, MD, United States",
        rev_img:
          "/assets/all-testimonials-image/allinadventures-escape-room-testimonials-business-lady-with-team.jpg",
        rev_img_alt: "escape room in Bowie md",
      },
    ],
  };

  return Homepagedata;
};
