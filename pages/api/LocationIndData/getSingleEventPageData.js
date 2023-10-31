import { getLocationsPageData } from "../getLocationsPageData";
import { getLocationsEventList } from "./getLocationsEventList";
import { bookingList } from "./bookingList";
import { getLocationActivitySlugList } from "./getLocationActivitySlugList";
import { getLocationEventSlugList } from "./getLocationEventSlugList";
import { getTotal } from "../AllDataList/getTotal";
import { getLocTotal } from "../AllDataList/getLocTotal";

export const getSingleEventPageData = (eventslug, locationslug) => {
  const bookinglist = bookingList("", locationslug);
  const eventName = eventslug.toString().split("-").join(" ");

  const bookingdata = getLocationsEventList(locationslug);

  const totalLocation = () => {
    var locdata = getLocationsPageData().states;
    var total = 0;

    for (var i = 0; i < locdata.length; i++) {
      total = total + locdata[i].cities.length;
    }

    return total;
  };

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
  const locnameMod = (locname) => {
    var spLoc = locname.split("-");
    if (spLoc[0] == "n") {
      spLoc[0] = spLoc[0] + ".";
    }
    var st = spLoc[spLoc.length - 1].toString().toUpperCase();
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
  const getLocationSearchName2 = (slug) => {
    var locs = slug.split("-");
    var st = locs[locs.length - 1].toString();
    locs = locs.slice(0, -1);
    locs = locs.join(" ");

    return locs + " " + st;
  };
  const cityName = (loc) => {
    var ctname = loc.split("-");
    var st = ctname[ctname.length - 1].toUpperCase();
    var ct = "";

    if (ctname.length > 2) {
      for (var i = 0; i < ctname.length - 2; i++) {
        ct = ctname[i].charAt(0).toUpperCase() + ctname[i].slice(1) + " ";
      }
    } else {
      ct = ctname[0].charAt(0).toUpperCase() + ctname[0].slice(1) + " ";
    }

    return ct + st;
  };

  // all events data
  const eventlocdata = {
    //********************************************************birth day parties */
    "birthday-party": {
      pagesubtitle:
        'All In Adventures is famous for hosting the most memorable birthday party in <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span>. We offer fun-filled escape room experiences and a birthday party venue for all ages and skill levels. Both kids and adults love it!",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-birthday-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-birthday-party.jpg",
      coverimageM_alt: "Escape room birthday party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Birthday Party in CITY - All In Adventures",
        description:
          "Join us at MALL. A perfect birthday party venue for the young at heart. No matter your age, get an unforgettable adventure! Book Now",
        keywords:
          "birthday party escape room CITY, birthday party events CITY, kids birthday party place CITY, birthday party venues MALL, birthday party celebration CITY, birthday party things to do near me CITY, birthday party activities to do near me MALL, birthday party escape room near me CITY, birthday party events near me CITY, kids birthday party place near me MALL, birthday party venues near me MALL, birthday party celebration near me CITY, escape room for birthday party CITY",
        url: "/events/birthday-party",
        metaindex: true,

        metaimg: "/assets/all-event-mobile-hero/escape-room-birthday-party.jpg",
      },

      eventdata: {
        why_book:
          "Nothing beats the excitement of an Escape Room Birthday Party! They're the perfect challenge for celebrating the birthday of your favorite little puzzle-solver, or a unique party experience for adults with adventure still in their hearts! With three difficulty levels, there's something for everyone!",
        why_book_img:
          "/assets/all-event-details/escape-room-birthday-party-all-in-adventures.png",
        why_book_alt: "Escape room birthday party All In Adventures",
        offer:
          "Choose from our two-party package options! Whether you want to bring your own food or have us cater, each option allows you to select one or more escape rooms and get our private party room* for two hours! Don't worry about your plates, napkins, and utensils - we've got you covered with either option! Plus, receive an All in Adventures gift card for your birthday honoree!",
        offer_img:
          "/assets/all-event-details/escape-room-birthday-party-memories.png",

        offer_alt: "Escape room birthday party memories",
        what_expect:
          "Our family-friendly escape rooms are designed to be challenging and fun activities for all ages and skill levels. Your party will have 50 minutes to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-birthday-party-expectation.png",
        what_expect_alt: "Escape room birthday party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "WE HAD SO MUCH FUN!",
          review_text:
            "We were a group of 8 for the Game Room, and we had so much fun! We were celebrating a birthday, and the team at this location was great! We will come here again for sure.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Lisa Podhayny",
          author_location: "Holyoke, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-1.jpg",
          rev_img_alt: "escape room in Holyoke, MA",
        },
        {
          id: 2,
          star: 5,
          title: "IT WAS PERFECT!",
          review_text:
            "As a birthday party starter, it was perfect, the balance of challenge and achievement was just right, and our hostess was excellent. I really enjoyed my birthday party there with my loved one.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Ashley Barrett",
          author_location: "Buffalo, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-2.jpg",
          rev_img_alt: "escape room in Buffalo, NY",
        },
        {
          id: 3,
          star: 5,
          title: "SUPER FRIENDLY STAFF!",
          review_text:
            "The staff was super friendly and super helpful! We loved accomplishing the treasure hunt room even though we couldn't finish the master level. Would love to go back and try out the other rooms they have.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Shannon Whitney",
          author_location: "Mentor, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-3.jpg",
          rev_img_alt: "escape room in Lawrenceville ga",
        },
        {
          id: 4,
          star: 5,
          title: "HIGHLY RECOMMENDED!",
          review_text:
            "I visited this Escape Room for a birthday party. The host was very attentive when we needed help, and we solved it. I would definitely recommend a group visit! Highly Recommended.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Mousse",
          author_location: "Albany, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-4.jpg",
          rev_img_alt: "escape room in Bensalem pa",
        },
        {
          id: 5,
          star: 5,
          title: "CAN'T WAIT TO GO BACK!",
          review_text:
            "It was such a fun time at the Mystery Room for the birthday party! Can't wait to go back again! (And I might have to go back for my birthday as well!!). Too Much Fun.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Jen Westervelt",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-5.jpg",
          rev_img_alt: "escape room in Kingston MA",
        },

        {
          id: 6,
          star: 5,
          title: "PERFECT GIRLS PARTY!",
          review_text:
            "Tried the Sherlock Room here for my Birthday and WOW, it was hard, but also very fun! Suggest giving it a try if you like escape rooms. The two hosts who helped (and gave some hints) were very friendly.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Jenny Brescia",
          author_location: "Roanoke, VA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-6.jpg",
          rev_img_alt: "escape room in Rockaway nj",
        },
        {
          id: 7,
          star: 5,
          title: "EXPERIENCE WAS AMAZING!",
          review_text:
            "Our experience was amazing!!! Dayna was an awesome host and helped to provide a memorable experience for my son's birthday. Two thumbs up and will definitely go back again.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Jonathan Barnes",
          author_location: "Lawrenceville, GA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-7.jpg",
          rev_img_alt: "escape room in ga ",
        },
      ],
    },
    //********************************************************birth day parties end*/
    //********************************************************team-building */
    "team-building": {
      pagesubtitle:
        "Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",

      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-team-building.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-team-building.jpg",
      coverimageM_alt: "Escape room team building",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Team Building in CITY - All In Adventures",
        description:
          "Join us at MALL. This fun and exciting interactive form of team building will bring your corporate team closer! Book Now",
        keywords:
          "team building escape room CITY, team building events CITY, corporate team building place MALL, team building venues MALL, team building activities CITY, team building things to do near me CITY, team building activities to do near me MALL, team building escape room near me CITY, team building events near me CITY, corporate team building place near me CITY, team building venues near me CITY, team building activities near me CITY, escape room for team building MALL",
        url: "/events/team-building",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/escape-room-team-building.jpg",
      },

      eventdata: {
        why_book:
          "We provide the ideal atmosphere to strengthen teamwork, communication, and problem-solving skills! Our escape rooms bring teams together towards a common goal and offer the thrill of collaborative success! Instead of another dreary meeting, why not have an adventure into the unknown?",
        why_book_img:
          "/assets/all-event-details/escape-room-team-building-all-in-adventures.png",
        why_book_alt: "escape Room Team Building All In Adventures",
        offer:
          "Your group can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Looking for lunch? Check out our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next team outing!",
        offer_img:
          "/assets/all-event-details/escape-room-team-building-memories.png",
        offer_alt: "Escape room team building memories",
        what_expect:
          "Our escape rooms are designed to be challenging and fun activities for all ages and skill levels. Your team will have 50 minutes to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-team-building-expectation.png",
        what_expect_alt: "Escape room team building expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "KNOWLEDGEABLE AND KIND!",
          review_text:
            "Our group had a great time at that location. The room setup was really cool, the clues were definitely tricky but they was knowledgeable and kind! We will definitely be back.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Amanda Wilson",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-team-building-testimonials-1.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },
        {
          id: 2,
          star: 5,
          title: "ABSOLUTELY AMAZING!",
          review_text:
            "Steve was absolutely amazing! A kind welcoming host 10/10 would recommend. Very easy to talk to, helpful and communicative. Our Team Loved his energy and the rooms!",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Autumn Clouse",
          author_location: "Manchester, CT, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-team-building-testimonials-2.jpg",
          rev_img_alt: "escape room in Manchester, CT, United States",
        },
        {
          id: 3,
          star: 5,
          title: "I WOULD DO IT AGAIN!",
          review_text:
            "It was so much fun! I brought my real estate team for a team building event with 9 of us. We did the Black Ops escape room and needed clues but we enjoyed it a lot. I would do it again.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Avery Lugo",
          author_location: "Mentor, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-team-building-testimonials-3.jpg",
          rev_img_alt: "escape room in Syracuse, NY, United States",
        },

        {
          id: 4,
          star: 5,
          title: "TEAM HAD A GREAT TIME!",
          review_text:
            "Our Team had a great time after office on Allinadventures. The room setup was really cool, the clues were tricky but we solved it. Other team & we will surely be back for sure soon.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Amanda Wilson",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-team-building-testimonials-4.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },

        {
          id: 5,
          star: 5,
          title: "CHEERFUL AND PROFESSIONAL!",
          review_text:
            "Bridget and Victoria were both incredibly helpful, cheerful and professional. It was overall a great experience that we would recommend to others. We will be coming again to try the other rooms! ",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Francesco Perez",
          author_location: "Bensalem, PA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-team-building-testimonials-5.jpg",
          rev_img_alt: "escape room in Bensalem, PA, United States",
        },
        {
          id: 6,
          star: 5,
          title: "WON AS BEST TEAM!",
          review_text:
            "Nora was the best host for team-building activities !! She made the entire experience so much fun, and better and her high energy is infectious, So we won. We will definitely come back again!",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Nen Lord",
          author_location: "Milford, CT, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-team-building-testimonials-6.jpg",
          rev_img_alt: "escape room in Milford, CT, United States ",
        },
        {
          id: 7,
          star: 5,
          title: "SUPER TEAM ENGAGING!",
          review_text:
            "We had a great time in the Hollywood Premiere room today. Our game masters were very helpful, and the facility was clean. The clues were challenging. We look forward to our next visit. Super team engaging!",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Shelley C",
          author_location: "Rockaway, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-team-building-testimonials-7.jpg",
          rev_img_alt: "escape room in Rockaway, NJ, United States",
        },
      ],
    },
    //********************************************************team-building end */
    //********************************************************corporate-events */
    "corporate-events": {
      pagesubtitle:
        'Since 2014, thousands of companies have been using our escape rooms and 5-star guest services to foster employee engagement, run meaningful team building events and celebrate company milestones. Instead of a dreary meeting on how to work effectively, why not take a crack at our <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span> escape room puzzles?",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-corporate-event.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-corporate-event.jpg",
      coverimageM_alt: "Escape room corporate event",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Corporate Events in CITY - All In Adventures",
        description:
          "Join us at MALL. Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle? Book Now",
        keywords:
          "corporate events near me CITY, corporate party in escape room CITY, escape room for corporate party MALL, corporate party place for fun CITY, corporate party venues MALL, corporate party activities CITY, corporate party things to do near me CITY, corporate party activities to do near me CITY, corporate event party escape room near me CITY, corporate party place near me CITY, events for corporate party place near me CITY, corporate party venues nearby CITY, corporate party activities near me MALL, escape room for corporate events CITY",
        url: "/events/corporate-events",
        metaindex: true,
        metaimg:
          "/assets/all-event-mobile-hero/escape-room-corporate-event.jpg",
      },

      eventdata: {
        why_book:
          "Corporate events are frequently held at All In Adventures, and it's no surprise why! We provide a unique atmosphere where communication, leadership, and problem-solving skills will all be put to the test. Our escape rooms bring everyone on the team together to work towards a common goal!",
        why_book_img:
          "/assets/all-event-details/escape-room-corporate-event-all-in-adventures.png",
        why_book_alt: "Escape room corporate event All In Adventures",
        offer:
          "Your group can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Need some brain food? Check out our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next corporate outing!",
        offer_img:
          "/assets/all-event-details/escape-room-corporate-event-memories.png",
        offer_alt: "Escape room corporate event memories",
        what_expect:
          "Our escape rooms are designed to be challenging and fun activities for all ages and skill levels. With 50 minutes on the clock, your group will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-corporate-event-expectations.png",
        what_expect_alt: "Escape room corporate event expectations",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "WE HAD A GREAT TIME!",
          review_text:
            "We had a great time in the Sherlock Holmes room today. Our game masters were very helpful and the facility was clean. The clues were challenging. We look forward to our next visit.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Shelley C",
          author_location: "Rockaway, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-corporate-events-testimonials-1.jpg",
          rev_img_alt: "escape room in Rockaway, NJ, United States",
        },
        {
          id: 2,
          star: 5,
          title: "HIGH ENERGY IS INFECTIOUS!",
          review_text:
            "Allinadventures was perfect for our team bonding events. We made the entire experience so much better, and Their high energy is infectious! I will definitely come back again & bring more!",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Nen Lord",
          author_location: "Milford, CT, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-corporate-events-testimonials-2.jpg",
          rev_img_alt: "escape room in Milford, CT, United States",
        },
        {
          id: 3,
          star: 5,
          title: "GREAT EXPERIENCE!",
          review_text:
            "Bridget and Victoria were both incredibly helpful, cheerful and professional for the event. It was overall a great experience that we would recommend to others. We will be coming again to try the other rooms!",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Francesco Perez",
          author_location: "Bensalem, PA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-corporate-events-testimonials-3.jpg",
          rev_img_alt: "escape room in Bensalem, PA, United States",
        },

        {
          id: 4,
          star: 5,
          title: "SETUP WAS REALLY COOL!",
          review_text:
            "Perfect for corporate events & The room setup was really cool, the clues were definitely tricky and the staff member was knowledgeable and kind! Don't miss their escape room winner surprises.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Amanda Wilson",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-corporate-events-testimonials-4.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },

        {
          id: 5,
          star: 5,
          title: "ABSOLUTELY AMAZING!",
          review_text:
            "Escape Room events were absolutely amazing! A kind welcoming host 10/10 would recommend. Very easy to talk to, helpful and communicative. Our Team Loved his energy and the rooms!",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Autumn Clouse",
          author_location: "Manchester, CT, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-corporate-events-testimonials-5.jpg",
          rev_img_alt: "escape room in Manchester, CT, United States",
        },
        {
          id: 6,
          star: 5,
          title: "VISITED FOR THE 1ST TIME!",
          review_text:
            "We Visited for the 1st time, and it was so interesting to attend, A new experience. You need to be very attentive and to think logically. But it is very exciting game! Recommend to all my colleagues!",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Avery Lugo",
          author_location: "Syracuse, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-corporate-events-testimonials-6.jpg",
          rev_img_alt: "escape room in Syracuse, NY, United States",
        },
        {
          id: 7,
          star: 5,
          title: "DEFINITELY BE BACK!",
          review_text:
            "We will definitely be back. Our group had a great time at the West Nyack allinadventures. A perfect setup for the corporate officers for the team building events. We enjoyed ourselves a lot. It was fun.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Amanda Wilson",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-corporate-events-testimonials-7.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },
      ],
    },
    //********************************************************corporate-events end */
    //********************************************************family-fun-activity */
    "family-fun-activity": {
      pagesubtitle:
        "Our family-friendly escape rooms provide a way to experience a story where you become part of the story rather than just observing. It's a safe and fun way to have a real adventure, where you and your team (your family in this case) enter into a puzzle room and solve different puzzles to ESCAPE!",
      coverimageL:
        "/assets/all-event-desktop-hero/large-family-fun-activity.jpg",
      coverimageM: "/assets/all-event-mobile-hero/family-fun-activity.jpg",
      coverimageM_alt: "Escape room Family fun activity",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Family Activities in CITY - All In Adventures",
        description:
          "Join us at MALL. A unique family fun activity with intense real-life puzzles where you have to work together to progress! Book Now",
        keywords:
          "family events in escape room CITY, escape room for family events CITY, family events place for fun MALL, family events venues MALL, family events activities MALL, family events things to do near me CITY, family events activities to do near me CITY, family event party escape room near me MALL, family events place near me CITY, events for family place near me CITY, family events venues nearby MALL, family events activities near me CITY, escape room for family events MALL",
        url: "/events/family-fun-activity",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/family-fun-activity.jpg",
      },

      eventdata: {
        why_book:
          "Put your incredible family dynamic on display in one of our fun escape rooms! We provide a unique, screen-free atmosphere to spend time together as a family! Kids over 6 can contribute, and ages 10 and up will be active problem-solving participants! Kids under six can play for FREE alongside two or more full-price adults!",
        why_book_img:
          "/assets/all-event-details/escape-room-family-fun-activity-all-in-adventures.png",
        why_book_alt: "Escape room family fun activity All In Adventures",
        offer:
          "Your family can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Save time in your day by checking out our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next family outing!",
        offer_img:
          "/assets/all-event-details/escape-room-family-fun-activity-memories.png",
        offer_alt: "escape room family fun activity memories",
        what_expect:
          "Our escape rooms are designed to be challenging and fun activities for all ages and skill levels. With 50 minutes on the clock, your family will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-family-fun-activity-expectation.png",
        what_expect_alt: "escape room family fun activity expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "SUPER FRIENDLY!",
          review_text:
            "They are super friendly and super helpful! We loved accomplishing the treasure hunt room even though we couldn't finish the master level. We Family members Would love to go back again.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Shannon Whitney",
          author_location: "Mentor, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-family-fun-activities-testimonials-1.jpg",
          rev_img_alt: "escape room in Mentor, OH, United States",
        },
        {
          id: 2,
          star: 5,
          title: "WE & I ENJOYED!",
          review_text:
            "Went for an escape room with my family, We & i enjoyed our time so much that we just had to go for an extra adventure. Victoria was an ABSOLUTE dear, and made the experience much more enjoyable.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Katie Tropy",
          author_location: "Columbus, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-family-fun-activities-testimonials-2.jpg",
          rev_img_alt: "escape room in Columbus, OH, United States",
        },
        {
          id: 3,
          star: 5,
          title: "100% COMING BACK AGAIN!",
          review_text:
            "This was such a blast! Very much recommend for a fun game night for friends and/or family. We are 100% coming back again!!!!! Steve was a great game show host and such a great guy.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Lucia Ferrera",
          author_location: "Kingston, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-family-fun-activities-testimonials-3.jpg",
          rev_img_alt: "Kingston, MA, United States",
        },

        {
          id: 4,
          star: 5,
          title: "WONDERFUL EXPERIENCE!",
          review_text:
            "OMG such a wonderful experience so fun, and the crew were wonderful and even egged us on when we almost gave up! such a supportive and fun experience 10/10 would recommend it.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Megsy Hubbard",
          author_location: "Waterbury, CT, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-family-fun-activities-testimonials-4.jpg",
          rev_img_alt: "escape room in Waterbury, CT, United States",
        },

        {
          id: 5,
          star: 5,
          title: "TOP PLACE TO GO!",
          review_text:
            "We all had such a wonderful time. We are definitely coming back again. Steve was a great host! He deserves a raise!!! Our family will never forget this place, we will come again soon with more.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Manuel Alvia",
          author_location: "East Brunswick, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-family-fun-activities-testimonials-5.jpg",
          rev_img_alt: "escape room in East Brunswick, NJ, United States",
        },
        {
          id: 6,
          star: 5,
          title: "ENTHUSIASTIC AND HELPFUL!",
          review_text:
            "Lots of fun. Victoria and Bridget were enthusiastic and really helpful. We were able to escape with some help. Really enjoyed the experience! Never experienced this with a full family like this.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Drew Birmingham",
          author_location: "Dayton, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-family-fun-activities-testimonials-6.jpg",
          rev_img_alt: "escape room in Dayton, OH, United States",
        },
        {
          id: 7,
          star: 5,
          title: "PLEASANT AND HELPFUL!",
          review_text:
            "First time doing an escape room and what a blast I had. My family & my hosts and they where so pleasant and helpful. They made my experience, even more, the worthwhile. Best Ever.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Brooklyn Zombie",
          author_location: "Bensalem, PA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-family-fun-activities-testimonials-7.jpg",
          rev_img_alt: "escape room in Bensalem, PA, United States",
        },
      ],
    },
    //********************************************************family-fun-activity end */
    //********************************************************bachelor-party  */
    "bachelor-party": {
      pagesubtitle:
        'Are you looking for the most fun, thrilling, and downright nerdy activity for an upcoming bachelor party? Something everyone can participate in? Then play one of our escape rooms in <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span>. There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-bachelor-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-bachelor-party.jpg",
      coverimageM_alt: "Escape room bachelor party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Bachelor Parties in CITY - All In Adventures",
        description:
          "Join us at MALL. There's no better way than to bond with your bachelor party before the big day - no scandals, just nonstop thrills! Book Now",
        keywords:
          "bachelor party escape room MALL, escape room for bachelor party CITY, bachelor party place for fun CITY, bachelor party venues CITY, bachelor party activities CITY, bachelor party things to do near me CITY, bachelor party activities to do near me CITY, bachelor event party escape room near me MALL, bachelor party place near me MALL, events for bachelor party place near me MALL, bachelor party venues nearby CITY, bachelor party activities near me MALL, escape room for bachelor party MALL",
        url: "/events/bachelor-party",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/escape-room-bachelor-party.jpg",
      },

      eventdata: {
        why_book:
          "Our unique escape room experiences are a perfect addition to bachelor parties! Your group of guys will have to come ready to play if you have any chance at escaping! Pick a room theme that best fits your crew and let us know if there's something special you'd like done for the groom-to-be!",
        why_book_img:
          "/assets/all-event-details/escape-room-bachelor-party-all-in-adventures.png",
        why_book_alt: "Escape room bachelor party by All in Adventures",
        offer:
          "Your party can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option and let us satisfy your need to feed! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next guys' night out!",
        offer_img:
          "/assets/all-event-details/escape-room-bachelor-party-memories.png",
        offer_alt: "Escape room bachelor party memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge you and your groomsmen. With 50 minutes on the clock, your party will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-bachelor-party-expectation.png",
        what_expect_alt: "Escape room bachelor party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "THE PARTY WAS LIT!",
          review_text:
            "We Bachelors all had such a wonderful time. We are definitely coming back again. Steve was a great host! He deserves a raise!!! The party was lit and the escape games as well. Recommended.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Manuel Alvia",
          author_location: "East Brunswick, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelor-parties-testimonials-1.jpg",
          rev_img_alt: "escape room in East Brunswick, NJ, United States",
        },
        {
          id: 2,
          star: 5,
          title: "THE NIGHT WAS EPIC!",
          review_text:
            "The night was epic and unforgettable. Escape room was a lot of fun! Sherlock's Library was a challenge, in a good way. The host/clue-giver was super nice and helpful! We Boys Will be back.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Brooklyn Zombie",
          author_location: "Bensalem, PA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelor-parties-testimonials-2.jpg",
          rev_img_alt: "escape room in Bensalem, PA, United States",
        },
        {
          id: 3,
          star: 5,
          title: "FIRST TIME DOING!",
          review_text:
            "First time doing an escape room for the bachelor party and what a blast I had. They were so pleasant and helpful. They made my experience even more exciting.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Brooklyn Zombie",
          author_location: "Bensalem, PA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelor-parties-testimonials-3.jpg",
          rev_img_alt: "escape room in Bensalem, PA, United States",
        },

        {
          id: 4,
          star: 5,
          title: "DEFINITELY TRICKY!",
          review_text:
            "Our group of boys & girls had a great time at the escape room location. The room setup was really cool, the clues were definitely tricky and the staff member was knowledgeable and kind!",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Amanda Wilson",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelor-parties-testimonials-4.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },

        {
          id: 5,
          star: 5,
          title: "ENDED UP DOING 3!",
          review_text:
            "We went in only wanting to try one room, and ended up doing three in a row! Victoria was able to accommodate all our requests, and was helpful throughout the games. I would definitely be returning.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Avery Lugo",
          author_location: "Syracuse, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelor-parties-testimonials-5.jpg",
          rev_img_alt: "escape room in Syracuse, NY, United States",
        },
        {
          id: 6,
          star: 5,
          title: "FANTASTIC & INTERESTING!",
          review_text:
            "The escape room was fantastic & pretty interesting because we want to have best moment and we did it. We had a blast definitely try it again the SUPERHERO WAS AWESOME!! Thank You.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Michelle G",
          author_location: "Woodbridge, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelor-parties-testimonials-6.jpg",
          rev_img_alt: "escape room in Woodbridge, NJ, United States",
        },
        {
          id: 7,
          star: 5,
          title: "PERFECT FOR ALL!",
          review_text:
            "Lots of fun. Some locks didn't want to open but we got it just in time with some time left to do the extra stuff. Victoria was an assumed narrator!!! Absolutely made my night. Perfect for all.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Hey Shea",
          author_location: "Raleigh, NC, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelor-parties-testimonials-7.jpg",
          rev_img_alt: "escape room in Raleigh, NC, United States",
        },
      ],
    },
    //********************************************************bachelor-party end */
    //********************************************************bachelorette-party  */
    "bachelorette-party": {
      pagesubtitle:
        'Are you planning a bachelorette party for your best friend or family member and looking for something out of the ordinary? Something everyone can participate in? Then play one of our escape rooms in <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span>. There's no better way to bond with your bachelorette party before the big day — no drama, no scandals, just nonstop thrills!",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-bachelorette-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-bachelorette-party.jpg",
      coverimageM_alt: "escape room bachelorette party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Bachelorette Parties in CITY - All In Adventures",
        description:
          "Join us at MALL. Fun-filled bachelorette party without any drama that will be something long remembered by everyone! Book Now",
        keywords:
          "bachelorette party escape room MALL, escape room for bachelorette party MALL, bachelorette party place for fun MALL, bachelorette party venues MALL, bachelorette party activities MALL, bachelorette party things to do near me CITY, bachelorette party activities to do near me CITY, bachelorette event party escape room near me CITY, bachelorette party place near me CITY, events for bachelorette party place near me CITY, bachelorette party venues nearby CITY, bachelorette party activities near me CITY, escape room for bachelorette party CITY",
        url: "/events/bachelorette-party",
        metaindex: true,
        metaimg:
          "/assets/all-event-mobile-hero/escape room bachelorette party.jpg",
      },

      eventdata: {
        why_book:
          "Our unique escape room experiences are a perfect addition to bachelorette parties! Your group of gals will have to come ready to play to have any chance at escaping! Pick a room theme that best fits your bridal party and let us know if there's something special you'd like done for the bride-to-be!",
        why_book_img:
          "/assets/all-event-details/escape-room-bachelorette-party-all-in-adventures.png",
        why_book_alt: "Escape room bachelorette party All In Adventures",
        offer:
          "Your party can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for a post-game tasty treat! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next girls' night out!",
        offer_img:
          "/assets/all-event-details/escape-room-bachelorette-party-memories.png",
        offer_alt: "Escape room bachelorette party memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge you and your bridesmaids. With 50 minutes on the clock, your party will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-bachelorette-party-expectation.png",
        what_expect_alt: "escape room bachelorette party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "WENT WITH A HUGE GROUP!",
          review_text:
            "Went with a huge group of people for my friend's bachelorette. We almost made it out, were on the last clue when the time went off. The staff was great and the puzzles challenging. Would definitely go here again.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Megsy Hubbard",
          author_location: "Waterbury, CT, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelorette-parties-testimonials-1.jpg",
          rev_img_alt: "escape room in Waterbury, CT, United States",
        },
        {
          id: 2,
          star: 5,
          title: "BEST PARTY PLACE!",
          review_text:
            "Lots of fun. Some locks didn't want to open but we got it just in time with some time left to do the extra stuff. Victoria was an assume narrator!! We did all those thing which we wanted. Best party place.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Hey Shea",
          author_location: "Raleigh, NC, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelorette-parties-testimonials-2.jpg",
          rev_img_alt: "escape room in Raleigh, NC, United States",
        },
        {
          id: 3,
          star: 5,
          title: "PARTY WAS AWESOME!",
          review_text:
            "Party was AWESOME!! The escape room fantasy. We had a blast definitely try it again the BACHELORETTE EVENTS WAS AWESOME!! Enjoyed with friends and mates after long time.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Michelle G",
          author_location: "Woodbridge, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelorette-parties-testimonials-3.jpg",
          rev_img_alt: "escape room in Woodbridge, NJ, United States",
        },

        {
          id: 4,
          star: 5,
          title: "GIRLS ACHIEVEMENT!",
          review_text:
            "Our group had a great time at the bachelorette party. The room setup was really cool, the clues were definitely tricky and the staff member (Nora, I believe) was knowledgeable and kind! We will definitely be back.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Amanda Wilson",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelorette-parties-testimonials-4.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },

        {
          id: 5,
          star: 5,
          title: "CLUES WERE CHALLENGING!",
          review_text:
            "We had a great time in the Sherlock Holmes room today. Our game masters were very helpful and the facility was clean. The clues were challenging & event was lit. We look forward to our next visit.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Shelley C",
          author_location: "Rockaway, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelorette-parties-testimonials-5.jpg",
          rev_img_alt: "Rockaway, NJ, United States",
        },
        {
          id: 6,
          star: 5,
          title: "SUCH A WONDERFUL TIME!",
          review_text:
            "We all had such a wonderful time. We are definitely coming back again. Steve was a great host! He deserves a raise!!! They made the night special for all of the guests & we really enjoyed it a lot.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Manuel Alvia",
          author_location: "East Brunswick, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelorette-parties-testimonials-6.jpg",
          rev_img_alt: "escape room in East Brunswick, NJ, United States",
        },
        {
          id: 7,
          star: 5,
          title: "ADVENTUROUS ROOM!",
          review_text:
            "Had so much fun at mystery room! Victoria and Emmy were awesome game masters. Can't wait to go again! Event & parties arrangement were perfectly setup for the guests and players.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Molly Minogue",
          author_location: "N. Attleborough, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-bachelorette-parties-testimonials-7.jpg",
          rev_img_alt: "escape room in N. Attleborough, MA, United States",
        },
      ],
    },
    //********************************************************bachelorette-party end */
    //********************************************************proposal-party */
    "proposal-party": {
      pagesubtitle:
        "If you're both into adventures, puzzles, and surprises, then there's no better way than proposing in an escape room! Our <span class=\"capitalize\">" +
        locnameMod(locationslug) +
        "</span> escape games are designed to engage and challenge with hidden puzzles and a fully customizable experience. Your partner will never see this coming! Sweep your partner off their feet with a proposal they'll never forget.",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-proposal-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-proposal-party.jpg",
      coverimageM_alt: "Escape room proposal party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Proposal Party in CITY- All In Adventures",
        description:
          "Join us at MALL. A distinctive marriage proposal where the mystery ends with the ring in the final clue box! Book Now",
        keywords:
          "proposal party place CITY, proposal party venue CITY, escape room proposal party CITY, proposal party places MALL, proposal party place near me MALL, proposal party venue nearby MALL, proposal party in escape room MALL, proposal party CITY",
        url: "/events/proposal-party",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/escape-room-proposal-party.jpg",
      },

      eventdata: {
        why_book:
          "It's no mystery: a surprise proposal can be the memory of a lifetime! Our escape rooms are ideal for a unique way to pop the question. Your partner will be so focused on victory, you'll have the perfect chance to drop to one knee! Let us know if you want to customize the game for your proposal and we'll do our best to accommodate your special day!",
        why_book_img:
          "/assets/all-event-details/escape-room-proposal-party-all-in-adventures.png",
        why_book_alt: "Escape room proposal party All In Adventures",
        offer:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for a celebratory gathering after your game! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your first date night as fiancés!",
        offer_img:
          "/assets/all-event-details/escape-room-proposal-party-memories.png",
        offer_alt: "Escape room proposal party memories",
        what_expect:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for a celebratory gathering after your game! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your first date night as fiancés!",
        what_expect_img:
          "/assets/all-event-details/escape-room-proposal-party-expectation.png",
        what_expect_alt: "Escape proposal party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "COME AND ENJOY!",
          review_text:
            "Had a great time at mystery room. Victoria and Dayna were amazing and we were able to escape Alcatraz! Come and enjoy your special night with the special person, mark my word.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Moishe Singer",
          author_location: "East Brunswick, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-proposal-party-testimonials-1.jpg",
          rev_img_alt: "escape room in East Brunswick, NJ, United States",
        },
        {
          id: 2,
          star: 5,
          title: "EMPLOYEES WERE AMAZING!",
          review_text:
            "Proposal west surprisingly well & we know what it takes to say yes. Awesome place can't wait to come back and try the other rooms. Employees were amazing, very knowledgeable and helpful.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Ben Cintron",
          author_location: "Rockaway, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-proposal-party-testimonials-2.jpg",
          rev_img_alt: "escape room in Rockaway, NJ, United States",
        },
        {
          id: 3,
          star: 5,
          title: "GONNA BE COMING BACK!",
          review_text:
            "Had a while bunch of fun at this place with me and my girlfriend for our 6 month anniversary. Gonna be coming back here with more friends for sure in next month and enjoy with others.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Mikey R",
          author_location: "N. Attleborough, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-proposal-party-testimonials-3.jpg",
          rev_img_alt: "escape room in N. Attleborough, MA, United States",
        },

        {
          id: 4,
          star: 5,
          title: "MORE FUN THAN YOU THINK!",
          review_text:
            "Oh my goodness! I wanted to find a fun place for my girlfriend and I to bring her 12 year old daughter to enjoy on short notice and came across this place, and WOW!! It's more fun than you think it would be.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Wise Guy",
          author_location: "Dayton, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-proposal-party-testimonials-4.jpg",
          rev_img_alt: "escape room in Dayton, OH, United States",
        },

        {
          id: 5,
          star: 5,
          title: "HE PROPOSED ME!",
          review_text:
            "We had a ton of fun! Molly and Nora were excellent hosts and we made it out with some time to spare! We will try the next level next time we go, but it was challenging and we had to use our hints!",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Kami Smith",
          author_location: "Columbus, OH, United States ",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-proposal-party-testimonials-5.jpg",
          rev_img_alt: "escape room in Columbus, OH, United States ",
        },
        {
          id: 6,
          star: 5,
          title: "HAD A LOVELY EXPERIENCE!",
          review_text:
            "Awesome time. Great thing to do on your birthday. Had a lovely experience, thanks to Steve! And, Nicole added t9 the fun with her stoic sense of humor. Cannot wait to do it again.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Cat Silvestri",
          author_location: "Middletown, NY, United States ",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-proposal-party-testimonials-6.jpg",
          rev_img_alt: "escape room in Middletown, NY, United States  ",
        },
        {
          id: 7,
          star: 5,
          title: "MADE ME THINKING HARD!",
          review_text:
            "I had so much fun! The whole setting was so intriguing and really made me thinking hard, which is so needed for me! Haha The staff was very helpful and super kind! Will visit here again.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Erin Kim",
          author_location: "Watertown, NY, United States ",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-proposal-party-testimonials-7.jpg",
          rev_img_alt: "escape room in Watertown, NY, United States ",
        },
      ],
    },
    //********************************************************proposal-party end */
    //********************************************************date-night*/
    "date-night": {
      pagesubtitle:
        'If you both enjoy adventures, mysteries, and surprises, and looking for a fun date night idea or want to add a little excitement to your relationship, plan your date night to play our <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span> escape rooms. They're great for couples who love to work together to solve puzzles and complete challenges. ",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-date-night.jpg",
      coverimageM: "/assets/all-event-mobile-hero/escape-room-date-night.jpg",
      coverimageM_alt: "escape room date night",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Date Night in CITY - All In Adventures",
        description:
          "Join us at MALL. Work together and find clues to solve the mystery that will ultimately strengthen your relationship! Book Now",
        keywords:
          "date night ideas MALL, escape room date night MALL, date night places MALL, date night things to doCITY, date night puzzle CITY, escape room date night near me CITY, date night idea CITY",
        url: "/events/date-night",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/escape-room-date-night.jpg",
      },

      eventdata: {
        why_book:
          "Perfect for double dates, or just some quality time together as a couple, our escape rooms can help strengthen relationships through collaboration, communication, and fun! Use your balance of strengths together to overcome puzzles and gain a new perspective on each other!",
        why_book_img:
          "/assets/all-event-details/escape-room-date-night-all-in-adventures.png",
        why_book_alt: "Escape room date night All In Adventures",
        offer:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Skip the packed, noisy restaurant and check out our catered party option for a casual, private dining option! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next date night!",
        offer_img:
          "/assets/all-event-details/escape-room-date-night-memories.png",
        offer_alt: "Escape room date night memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge you and your date. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-date-night-expectation.png",
        what_expect_alt: "Escape date night expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "RECOMMENDED TO EVERYONE!",
          review_text:
            "Had a while bunch of fun at this place with me and my girlfriend for our 6 month anniversary. Gonna be coming back here with more friends for sure! Recommended to everyone.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Mikey R",
          author_location: "N. Attleborough, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-date-night-testimonials-1.jpg",
          rev_img_alt: "escape room in N. Attleborough, MA, United States",
        },
        {
          id: 2,
          star: 5,
          title: "HELPFUL AND SUPER KIND!",
          review_text:
            "The whole setting was so intriguing and really made me thinking hard, which is so needed for me! Haha they were very helpful and super kind! Will visit here again for another adventure ",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Erin Kim",
          author_location: "Watertown, NY, United States ",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-date-night-testimonials-2.jpg",
          rev_img_alt: "escape room in Watertown, NY, United States ",
        },
        {
          id: 3,
          star: 5,
          title: "PERFECT NIGHT OUT!",
          review_text:
            "We had a ton of fun! Molly and Nora were excellent hosts and we made it out with some time to spare! We will try the next level next time we go, but it was challenging and we had to use our hints! ",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Kami Smith ",
          author_location: "Columbus, OH, United States ",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-date-night-testimonials-3.jpg",
          rev_img_alt: "escape room in Columbus, OH, United States ",
        },

        {
          id: 4,
          star: 5,
          title: "LOVELY DATE NIGHT!",
          review_text:
            "Awesome place can't wait to come back and try the other rooms. Employees were amazing, very knowledgeable and helpful. Bring your loved one and you won't regret it for sure.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Ben Cintron",
          author_location: "Rockaway, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-date-night-testimonials-4.jpg",
          rev_img_alt: "escape room in Rockaway, NJ, United States",
        },

        {
          id: 5,
          star: 5,
          title: "CANT WAIT TO DO AGAIN!",
          review_text:
            "Awesome time. Great thing to do on your birthday. Had a lovely experience, thanks to Steve! And, Nicole added t9 the fun with her stoic sense of humor. I cannot wait to do it again. Peace out.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Cat Silvestri",
          author_location: "Middletown, NY, United States ",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-date-night-testimonials-5.jpg",
          rev_img_alt: "escape room in Middletown, NY, United States ",
        },
        {
          id: 6,
          star: 5,
          title: "BEST NIGHT EVER!",
          review_text:
            "I would definitely recommend this for some family/ Date night fun. Oh my goodness! I wanted to find a fun place for my girlfriend to enjoy on short notice and came across this place, and WOW!!",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Wise Guy",
          author_location: "Dayton, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-date-night-testimonials-6.jpg",
          rev_img_alt: "escape room in Dayton, OH, United States ",
        },
        {
          id: 7,
          star: 5,
          title: "6 MONTH CELEBRATION!",
          review_text:
            "Gonna be coming back here with more friends for sure! Had a while bunch of fun at this place with me and my girlfriend for our 6 month anniversary. Literally we enjoyed every second of escape room.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Mikey R",
          author_location: "N. Attleborough, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-date-night-testimonials-7.jpg",
          rev_img_alt: "escape room in N. Attleborough, MA, United States",
        },
      ],
    },
    //********************************************************date-night end */
    //*******************************************************private-party*/
    "private-party": {
      pagesubtitle:
        'We offer an array of interactive escape rooms where everyone can participate and become the star of their own action adventure. No matter what occasion you celebrate, <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span> escape room party is a great way to bring your family, friends or co-workers together and have enormous fun.",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-parivate-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-parivate-party.jpg",
      coverimageM_alt: "Escape room parivate party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Private Parties in CITY - All In Adventures",
        description:
          "Join us at MALL. Adventure awaits for all - your family, friends, office, indoor party, church group, fraternity or sorority. Book Now",
        keywords:
          "private events near me MALL, private party in escape room MALL, escape room for private party MALL, private party place for fun MALL, private party venues MALL, private party activities MALL, private party things to do near me MALL, private party activities to do near me MALL, private event party escape room near me CITY, private party place near me CITY, events for private party place near me CITY, private party venues nearby CITY, private party activities near me CITY, escape room for private party CITY",
        url: "/events/private-party",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/escape-room-parivate-party.jpg",
      },

      eventdata: {
        why_book:
          "We work to make each escape room private party a unique experience for you and your guests. Whether you are in a corporate office looking for an exciting team-building activity, or a group of friends looking for a mental workout, our escape rooms give you the challenge you're seeking. All In Adventures is great for all types of groups and is a memorable way to come together for fun!",
        why_book_img:
          "/assets/all-event-details/escape-room-private-party-all-in-adventures.png",
        why_book_alt: "Escape room private party All In Adventures",
        offer:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Feed your crowd with our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your visit!",
        offer_img:
          "/assets/all-event-details/escape-room-private-party-memories.png",
        offer_alt: "Escape room private party memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-private-party-expectation.png",
        what_expect_alt: "Escape room private party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "SUPER FUN EXPERIENCE!",
          review_text:
            "Escape the Room allinadventures was a super fun experience that I would 100% recommend! Perfect for private parties and hosting an event in here. Best thing is in the escape room.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Mikey R",
          author_location: "N. Attleborough, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-private-parties-testimonials-1.jpg",
          rev_img_alt: "escape room in N. Attleborough, MA, United States",
        },
        {
          id: 2,
          star: 5,
          title: "TWO THUMBS UP!",
          review_text:
            "Our experience was amazing!!! Dayna was an awesome host and helped to provide a memorable experience for my son's birthday. Two thumbs up and will definitely go back again.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Jonathan Barnes",
          author_location: "Lawrenceville, GA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-private-parties-testimonials-2.jpg",
          rev_img_alt: "escape room in Lawrenceville, GA, United States",
        },
        {
          id: 3,
          star: 5,
          title: "I'LL BE RETURNING SOON!",
          review_text:
            "Your team is great here, and I think this experience is something everyone should do. I'll be returning soon. I want to figure out the Sherlock room. Thank you again to Steve and Victoria.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Ashley Barrett",
          author_location: "Buffalo, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-private-parties-testimonials-3.jpg",
          rev_img_alt: "escape room in Buffalo, NY, United States",
        },

        {
          id: 4,
          star: 5,
          title: "SUPER EXCITING!",
          review_text:
            "I visited this Escape Room for a birthday party. The host was very attentive when we needed help and we solved it. Would definitely recommend for a group visit 7 private parties events for all.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Mousse",
          author_location: "Albany, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-private-parties-testimonials-4.jpg",
          rev_img_alt: "escape room in Albany, NY, United States",
        },

        {
          id: 5,
          star: 5,
          title: "FACILITY WAS CLEAN!",
          review_text:
            "We had a great time with teams in the Sherlock Holmes room today. Our game masters were very helpful and the facility was clean. The clues were challenging. We look forward to our next visit.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Shelley C",
          author_location: "Rockaway, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-private-parties-testimonials-5.jpg",
          rev_img_alt: "escape room in Rockaway, NJ, United States",
        },
        {
          id: 6,
          star: 5,
          title: "HELPFUL THROUGHOUT GAMES!",
          review_text:
            "Having done 5 escape rooms before, we thought we'd try out the new room - mixed-up minds. Victoria was able to accommodate all our requests, and was helpful throughout the games.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Avery Lugo",
          author_location: "Syracuse, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-private-parties-testimonials-6.jpg",
          rev_img_alt: "escape room in Syracuse, NY, United States",
        },
        {
          id: 7,
          star: 5,
          title: "FUN GAME NIGHT FOR ALL!",
          review_text:
            "This was such a blast! Very much recommended for a fun game night for friends and/or family. We are 100% coming back again!!!!! Steve was a great game show host and such a great guy. ",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Lucia Ferrera",
          author_location: "Kingston, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-private-parties-testimonials-7.jpg",
          rev_img_alt: "escape room in Kingston, MA, United States",
        },
      ],
    },
    //********************************************************date-night end */
    //********************************************************reunion-party*/
    "reunion-party": {
      pagesubtitle:
        "There's no shortage of family reunion activities. But how many of them actually involve teamwork and collaboration? That's the question! Our <span class=\"capitalize\">" +
        locnameMod(locationslug) +
        "</span> escape rooms are interactive and have engaging qualities that give your reunion party an epic adventure!",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-reunion-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-reunion-party.jpg",
      coverimageM_alt: "escape room reunion party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Reunion Party in CITY - All In Adventures",
        description:
          "Join us at MALL. Each game is interactive and has engaging qualities that give your reunion party an epic adventure! Book Now",
        keywords:
          "reunion events near me MALL, reunion party in escape room MALL, escape room for reunion party MALL, reunion party place for fun MALL, reunion party venues MALL, reunion party activities MALL, reunion party things to do near me MALL, reunion party activities to do near me MALL, reunion event party escape room near me CITY, reunion party place near me CITY, events for reunion party place near me CITY, reunion party venues nearby CITY, reunion party activities near me CITY, escape room for reunion party CITY",
        url: "/events/reunion-party",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/escape-room-reunion-party.jpg",
      },

      eventdata: {
        why_book:
          "Bring together your entire extended family for an unforgettable reunion! Whether you all work cooperatively, or pit family versus family in an epic battle of the minds, our escape rooms are a thrilling way to enjoy your time together! With difficulties for all ages and skill levels, All in Adventures is a cross-generational, memory-making experience!",
        why_book_img:
          "/assets/all-event-details/escape-room-reunion-party-all-in-adventures.png",
        why_book_alt: "Escape room reunion party All In Adventures",
        offer:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Feed your crowd with our catered party option and let us take care of clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card!",
        offer_img:
          "/assets/all-event-details/escape-room-reunion-party-memories.png",
        offer_alt: "Escape room reunion party memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-reunion-party-expectation.png",
        what_expect_alt: "Escape room reunion party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "FUN REUNION NIGHT!",
          review_text:
            "This was such a blast! Very much recommended for a fun reunion night for friends and/or family. We are 100% coming back again!!!!! Steve was a great game show host and such a great guy. ",
          revlink: "https://g.co/kgs/givxmA",
          author: "Lucia Ferrera",
          author_location: "Kingston, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-reunion-party-testimonials-1.jpg",
          rev_img_alt: "escape room in Kingston, MA, United States",
        },
        {
          id: 2,
          star: 5,
          title: "CELEBRATING A REUNION!",
          review_text:
            "We were a group of 8 for the Game Room and we had so much fun! We were celebrating a reunion Afterward we were all talking about how we want to come back soon to play again! Definitely recommend. ",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Lisa Podhayny",
          author_location: "Holyoke, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-reunion-party-testimonials-2.jpg",
          rev_img_alt: "escape room in Manchester, CT, United States",
        },
        {
          id: 3,
          star: 5,
          title: "FRIENDS GET-TOGETHER!",
          review_text:
            "Me and my friends we super duper excited & We were able to escape with some help. Really enjoyed the experience! Thanks, allinadventures for the memorable night we really cannot forget.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Drew Birmingham",
          author_location: "Dayton, OH, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-reunion-party-testimonials-3.jpg",
          rev_img_alt: "escape room in Syracuse, NY, United States",
        },

        {
          id: 4,
          star: 5,
          title: "100% SATISFIED WITH GAMES!",
          review_text:
            "This was such a blast! Very much recommend for a fun game night for friends and/or family. We are 100% satisfied with the games!!!!!",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Lucia Ferrera",
          author_location: "Kingston, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-reunion-party-testimonials-4.jpg",
          rev_img_alt: "escape room in Kingston, MA, United States",
        },

        {
          id: 5,
          star: 5,
          title: "PRIVATE FAMILY PARTY!",
          review_text:
            "We went in only wanting to try one room, and ended up doing three in a row! They were able to accommodate all our requests, and was helpful throughout the games. I would definitely be returning.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Avery Lugo",
          author_location: "Syracuse, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-reunion-party-testimonials-5.jpg",
          rev_img_alt: "escape room in Syracuse, NY, United States",
        },
        {
          id: 6,
          star: 5,
          title: "A TOP-NOTCH GROUP!",
          review_text:
            "I gave my daughter a private party at the escape room yesterday. I have to give a big thank you to the manager, I truly appreciated everything that they did. A top-notch group!!! Thanks again!!! ",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Melodie Brewington",
          author_location: "Bowie, MD, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-reunion-party-testimonials-6.jpg",
          rev_img_alt: "escape room in Bowie, MD, United States",
        },
        {
          id: 7,
          star: 5,
          title: "SUPER SIBLINGS PARTY!",
          review_text:
            "We had a great time in the Sherlock Holmes room today. Our game masters were very helpful and the facility was clean. The clues were challenging. It was super siblings party.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Shelley C",
          author_location: "Rockaway, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-reunion-party-testimonials-7.jpg",
          rev_img_alt: "escape room in Rockaway, NJ, United States",
        },
      ],
    },
    //********************************************************reunion-party end */
    //********************************************************graduation-party*/
    "graduation-party": {
      pagesubtitle:
        'Graduation is such an exciting time, no matter your age. You deserve to celebrate all that you have achieved. Celebrate your accomplishments in a memorable way with our <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span> escape room theme party. Make lasting memories to tell tales to your grandchildren!",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-graduation-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-graduation-party.jpg",
      coverimageM_alt: "Escape room graduation party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Graduation Party in CITY - All In Adventures",
        description:
          "Join us at MALL. Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way. Book Now",
        keywords:
          "graduation events near me MALL, graduation party in escape room MALL, escape room for graduation party MALL, graduation party place for fun MALL, graduation party venues MALL, graduation party activities MALL, graduation party things to do near me MALL, graduation party activities to do near me MALL, graduation event party escape room near me MALL, graduation party place near me CITY, events for graduation party place near me CITY, graduation party venues nearby CITY, graduation party activities near me CITY, escape room for graduation party CITY",
        url: "/events/graduation-party",
        metaindex: true,
        metaimg:
          "/assets/all-event-mobile-hero/escape-room-graduation-party.jpg",
      },

      eventdata: {
        why_book:
          "Our unique escape room experiences are a perfect addition to your graduation party! Your school of scholars will have to bring their sharp minds and keen intuition if they're to have any chance at escaping! Pick a room theme that best fits their interest and let us know if there's something special you'd like done for your graduate!",
        why_book_img:
          "/assets/all-event-details/escape-room-graduation-party-all-in-adventures.png",
        why_book_alt: "Escape room graduation party All In Adventures",
        offer:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Need to refuel on brain food? Check out our catered party option and let us take care of the clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card for your graduate!",
        offer_img:
          "/assets/all-event-details/escape-room-graduation-party-memories.png",
        offer_alt: "escape room graduation party memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-graduation-party-expectation.png",
        what_expect_alt: "Escape room graduation party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "FUN GRADUATION NIGHT!",
          review_text:
            "This was such a blast! Very much recommend for a fun game for graduation night with friends. We are 100% coming back again!!!!! Steve was a great game show host and such a great guy.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Lucia Ferrera",
          author_location: "Kingston, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-graduation-party-testimonials-1.jpg",
          rev_img_alt: "escape room in Kingston, MA, United States",
        },
        {
          id: 2,
          star: 5,
          title: "FUN AND ENTERTAINING!",
          review_text:
            "It was a very fun and entertaining game and it was very cleverly designed. We only got out with two minutes to spare. There were a lot of padlocks, keys and codes. I really enjoyed my party there.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Lucia Ferrera",
          author_location: "Kingston, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-graduation-party-testimonials-2.jpg",
          rev_img_alt: "escape room in Kingston, MA, United States",
        },
        {
          id: 3,
          star: 5,
          title: "AWESOME CLASSMATES!",
          review_text:
            "Went with awesome classmates for the party. We almost made it out, were on the last clue when the time went off. The staff was great and the puzzles challenging. Would definitely go here again.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Avery Lugo",
          author_location: "Syracuse, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-graduation-party-testimonials-3.jpg",
          rev_img_alt: "escape room in Syracuse, NY, United States",
        },

        {
          id: 4,
          star: 5,
          title: "WE ALL HAD A BLAST!",
          review_text:
            "What a terrific experience we had today!! Six of us, ages 10 to adult booked our own escape room… Zombie Apocalypse!!! We all had a blast. He made it an enjoyable and memorable experience! ",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Linda S",
          author_location: "Roanoke, VA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-graduation-party-testimonials-4.jpg",
          rev_img_alt: "escape room in Roanoke, VA, United States",
        },

        {
          id: 5,
          star: 5,
          title: "CHILLOUT EVENTS!",
          review_text:
            "I gave my graduation party at the escape room yesterday. They were all very accommodating, genuine, pleasant and thoughtful. It was a chillout events!!! Thanks again!!! ",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Melodie Brewington",
          author_location: "Bowie, MD, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-graduation-party-testimonials-5.jpg",
          rev_img_alt: "escape room in Bowie, MD, United States",
        },
        {
          id: 6,
          star: 5,
          title: "GALA NIGHT SPECIAL!",
          review_text:
            "This place was absolutely fun for gala night event, me and my friend did the sherlocks library but we did not finish it, we got many clues along the way and had so much fun trying to complete it!",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Cameron Burns",
          author_location: "Hadley, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-graduation-party-testimonials-6.jpg",
          rev_img_alt: "escape room in Hadley, MA, United States",
        },
        {
          id: 7,
          star: 5,
          title: "10/10 WOULD RECOMMEND!",
          review_text:
            "FANTASTIC!!! Steve and Dayna made this experience unforgettable. Team Robin will forever be in my memory. 10/10 would recommend it. Definitely coming back with my new friends from college.",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Faith Orzeck",
          author_location: "White Marsh, MD, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-graduation-party-testimonials-7.jpg",
          rev_img_alt: "escape room in White Marsh, MD, United States",
        },
      ],
    },
    //********************************************************graduation-party end */
    //********************************************************school-events*/
    "school-events": {
      pagesubtitle:
        'Are you looking for school event ideas that will excite and challenge every student in the classroom or school? Then All In Adventures <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span> is a great place for you to bring your student group. Let your students experience a challenging yet fun time at our escape rooms — excellent adventures for any age group.",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-school-event.jpg",
      coverimageM: "/assets/all-event-mobile-hero/escape-room-school-event.jpg",
      coverimageM_alt: "Escape room school event",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room School Events in CITY - All In Adventures",
        description:
          "Join us at MALL. Students exercise critical thinking and act to become the super-spies they see in the movies! Book Now",
        keywords:
          "school events near me MALL, school party in escape room MALL, escape room for school party MALL, school party place for fun MALL, school party venues MALL, school party activities MALL, school party things to do near me MALL, school party activities to do near me MALL, school event party escape room near me CITY, school party place near me CITY, events for school party place near me CITY, school party venues nearby CITY, school party activities near me CITY, escape room for school party CITY",
        url: "/events/school-events",
        metaindex: true,
        metaimg: "/assets/all-event-mobile-hero/escape-room-school-event.jpg",
      },

      eventdata: {
        why_book:
          "Problem-solving, critical thinking, and observational awareness - all important skills for growing young minds to strengthen. Our escape rooms will require your students to work together for an exciting intellectual challenge that's more than your average field trip! With rooms that pair well with historical and literary themes, you can effortlessly weave them into your lesson plan!",
        why_book_img:
          "/assets/all-event-details/escape-room-school-event-all-in-adventures.png",
        why_book_alt: "Escape room school event All In Adventures",
        offer:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Time for lunch? Check out our catered party option and let us take care of the clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card for your next class trip!",
        offer_img:
          "/assets/all-event-details/escape-room-school-event-memories.png",
        offer_alt: "Escape room school event memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge your class. With 50 minutes on the clock, your students will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/escape-room-school-event-expectation.png",
        what_expect_alt: "Escape room school event expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "DEFINITELY GOING AGAIN!",
          review_text:
            "This place was absolutely so fun, me and my friend did the escape room but we did not finish it, we got many clues along the way and had so much fun trying to complete it! I am definitely going again.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Cameron Burns",
          author_location: "Hadley, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-school-events-testimonials-1.jpg",
          rev_img_alt: "escape room in Hadley, MA, United States",
        },
        {
          id: 2,
          star: 5,
          title: "EVERYONE SHOULD DO!",
          review_text:
            "Our school team is great here and I think this experience is something everyone should do. I'll be returning soon I want to figure out the Sherlock room. Thank you again to Steve and Victoria.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Ashley Barrett",
          author_location: "Buffalo, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-school-events-testimonials-2.jpg",
          rev_img_alt: "escape room in Buffalo, NY, United States",
        },
        {
          id: 3,
          star: 5,
          title: "SUPER FANTASTIC!",
          review_text:
            "SUPER FANTASTIC & EXCITING !!! Steve and Dayna made this experience unforgettable. Team will forever be in my memory.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Faith Orzeck",
          author_location: "White Marsh, MD, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-school-events-testimonials-3.jpg",
          rev_img_alt: "escape room in White Marsh, MD, United States",
        },

        {
          id: 4,
          star: 5,
          title: "AWESOME PLACE FOR FUN!",
          review_text:
            "Awesome place for fun, me and my friend did the events, I am definitely going to come here again to try a different room. Escape room especially really nice shout out to escape from alcatraz.",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Cameron Burns",
          author_location: "Hadley, MA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-school-events-testimonials-4.jpg",
          rev_img_alt: "escape room in Hadley, MA, United States",
        },

        {
          id: 5,
          star: 5,
          title: "HELPFUL TO FIND CLUE!",
          review_text:
            "Was such a fun time at the Mystery Room! The players were great and super helpful to find clue. All kids did the Zombie Apocalypse room and it was a blast!!! ",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Jen Westervelt",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-school-events-testimonials-5.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },
        {
          id: 6,
          star: 5,
          title: "BEST FOR EVENTS!",
          review_text:
            "We all had such a wonderful time. We are definitely coming back again. Steve was a great host! He deserves a raise!!! Thumbs Up to the allinadventures managers and masters for the help.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Manuel Alvia",
          author_location: "East Brunswick, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-school-events-testimonials-6.jpg",
          rev_img_alt: "escape room in East Brunswick, NJ, United States",
        },
        {
          id: 7,
          star: 5,
          title: "WE MADE IT THROUGH!",
          review_text:
            "This was a thought-provoking and exciting experience. They made the event come alive and cheered us on! We made it out and had a terrific time doing it! We will treasure the adorable winning picture he",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Esther Fishman",
          author_location: "Albany, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-school-events-testimonials-7.jpg",
          rev_img_alt: "escape room in Albany, NY, United States",
        },
      ],
    },
    //********************************************************school-events end */
    //********************************************************school-events*/
    "gender-reveal-party": {
      pagesubtitle:
        'All In Adventures is famous for hosting unique gender reveal parties in <span class="capitalize">' +
        locnameMod(locationslug) +
        "</span>.  Escape the wild parties in exchange for an escape room gender reveal party where you look for a box that reveals your secret color. Bring your dearest friends and family as you celebrate a new arrival!",
      coverimageL:
        "/assets/all-event-desktop-hero/large-escape-room-gender-reveal-party.jpg",
      coverimageM:
        "/assets/all-event-mobile-hero/escape-room-gender-reveal-party.jpg",
      coverimageM_alt: "Escape room gender reveal party",
      age: "6+",
      max_players: "70",
      min_players: "2",

      pagemeta: {
        title: "Escape Room Gender Reveal Party in CITY - All In Adventures",
        description:
          "Join us at MALL. Instead of simply sharing the news of your baby's gender, why not announce it through fun puzzles? Book Now",
        keywords:
          "gender reveal party place MALL, gender reveal party venue MALL, escape room gender reveal party MALL, gender reveal party places MALL, gender reveal party place near me MALL, gender reveal party venue nearby CITY, gender reveal party in escape room CITY, gender reveal party CITY",
        url: "/events/gender-reveal-party",
        metaindex: true,
        metaimg:
          "/assets/all-event-mobile-hero/escape-room-gender-reveal-party.jpg",
      },

      eventdata: {
        why_book:
          "We provide a unique atmosphere where parents make gender reveal parties a memorable family event. The big surprise awaits your party at the conclusion of your game with the final box being packed with your ideal way of announcing the gender of your baby! Pick a room theme and let us know if there's something special you'd like done for your reveal!",
        why_book_img:
          "/assets/all-event-details/esccape-room-gender-reveal-party-all-in-adventures.png",
        why_book_alt: "Esccape room gender reveal party All In Adventures",
        offer:
          "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for your reveal after-party and let us take care of the clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card!",
        offer_img:
          "/assets/all-event-details/esccape-room-gender-reveal-party-memories.png",
        offer_alt: "Esccape room gender reveal party memories",
        what_expect:
          "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, your guests will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
        what_expect_img:
          "/assets/all-event-details/esccape-room-gender-reveal-party-expectation.png",
        what_expect_alt: "esccape room gender reveal party expectation",
        videoid: "pfdyF_d4Z40",
      },
      reviews: [
        {
          id: 1,
          star: 5,
          title: "OUR SURPRISE PLAN!",
          review_text:
            "I gave my daughter a gender reveal party at the escape room yesterday. I have to give a big thank you to the manager Joe and to Sophia who did an excellent job in taking care of us when we were there.",
          revlink: "https://g.co/kgs/givxmA",
          author: "Melodie Brewington",
          author_location: "Bowie, MD, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-gender-reveal-party-testimonials-1.jpg",
          rev_img_alt: "escape room in Bowie, MD, United States",
        },
        {
          id: 2,
          star: 5,
          title: "GREAT AND HELPFUL!",
          review_text:
            "The actors were great and helpful. The kids were very determined to make it out. They did with 42 seconds left on the clock. It was a fun day for us and all of those who came to the party.",
          revlink: "https://g.co/kgs/ZFdQL6",
          author: "Faith Orzeck",
          author_location: "White Marsh, MD, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-gender-reveal-party-testimonials-2.jpg",
          rev_img_alt: "escape room in White Marsh, MD, United States",
        },
        {
          id: 3,
          star: 5,
          title: "RECOMMEND FOR PARTY!",
          review_text:
            "OMG such a wonderful experience, so much fun & exciting, even egged us on when we almost gave up! such a supportive and fun experience 10/10 would recommend for party & events.",
          revlink: "https://g.co/kgs/8sD4bh",
          author: "Megsy Hubbard",
          author_location: "Waterbury, CT, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-gender-reveal-party-testimonials-3.jpg",
          rev_img_alt: "escape room in Waterbury, CT, United States",
        },

        {
          id: 4,
          star: 5,
          title: "UNFORGETTABLE MOMENT!",
          review_text:
            "My family did the zombie apocalypse room and we beat the master level! Awesome time and really fun puzzles. We revealed our future baby's gender to all. An unforgettable moment for us. ",
          revlink: "https://g.co/kgs/hzd2vr",
          author: "Manuel Alvia",
          author_location: "East Brunswick, NJ, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-gender-reveal-party-testimonials-4.jpg",
          rev_img_alt: "escape room in East Brunswick, NJ, United States",
        },

        {
          id: 5,
          star: 5,
          title: "EXPERIENCE WAS AMAZING!",
          review_text:
            "Our experience was amazing!!! They helped to provide a memorable experience for my son's birthday & Next baby reveal. Two thumbs up and will definitely go back again with a new one.",
          revlink: "https://g.co/kgs/HUdAAw",
          author: "Jonathan Barnes",
          author_location: "Lawrenceville, GA, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-gender-reveal-party-testimonials-5.jpg",
          rev_img_alt: "escape room in Lawrenceville, GA, United States",
        },
        {
          id: 6,
          star: 5,
          title: "GREAT FAMILY ACTIVITY!",
          review_text:
            "My family and I had a great time. We did the superhero escape room. We booked it through Groupon. It was a great family activity. Super escape room for the party and games to play.",
          revlink: "https://g.co/kgs/CFerYB",
          author: "Rachel Lichter",
          author_location: "Austin, TX, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-gender-reveal-party-testimonials-6.jpg",
          rev_img_alt: "escape room in Austin, TX, United States ",
        },
        {
          id: 7,
          star: 5,
          title: "5 STARS WELL DESERVED!",
          review_text:
            "Overall this place is amazing! 5 stars well deserved! They want to come back! The place has very friendly staff. The place is clean, It's affordable, and a perfect place to have fun with friends and family. ",
          revlink: "https://g.co/kgs/N17pvA",
          author: "Jen Westervelt",
          author_location: "West Nyack, NY, United States",
          rev_img:
            "/assets/all-testimonials-image/allinadventures-events-gender-reveal-party-testimonials-7.jpg",
          rev_img_alt: "escape room in West Nyack, NY, United States",
        },
      ],
    },
    //********************************************************school-events end */
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
  const lowCityMAll = (str, slug, mall) => {
    var locn = slug.split("-");
    if (locn[0] == "n" || locn[0] == "N") {
      locn[0] = "North";
    }
    var upmall = mall.toLowerCase();
    var upcity = locn.join(" ");

    return str.replaceAll("CITY", upcity).replaceAll("MALL", upmall);
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
  // return page data  events data
  const eventData = {
    //"pagemeta":eventlocdata[eventslug].pagemeta,
    pagemeta: {
      title: capCity(eventlocdata[eventslug].pagemeta.title, locationslug),
      description: capMall(
        eventlocdata[eventslug].pagemeta.description,
        getLocSpec(locationslug).mall
      ),
      keywords: lowCityMAll(
        eventlocdata[eventslug].pagemeta.keywords,
        locationslug,
        getLocSpec(locationslug).mall
      ),
      url: "/" + locationslug + eventlocdata[eventslug].pagemeta.url,
      metaindex: eventlocdata[eventslug].pagemeta.metaindex,
      metaimg: eventlocdata[eventslug].pagemeta.metaimg,
    },
    locationlist: getLocTotal(locationslug).locationlist,
    eventlistSlug: getLocTotal(locationslug).eventlistSlug,

    pagedata: {
      pagetitle: "ESCAPE ROOM " + eventName + " in " + locnameMod(locationslug),
      publish_status: getLocTotal(locationslug).publish_status,
      event_name: eventName,
      eventname: eventName,
      event_slug: eventslug,
      locationslug: locationslug,
      mall: getLocSpec(locationslug).mall,
      city: getLocSpec(locationslug).city,
      state: getState(locationslug),
      location_name: locnameMod(locationslug),
      location_serach_name: getLocationSearchName(locationslug),
      slug: eventslug,
      pagesubtitle: eventlocdata[eventslug].pagesubtitle,
      coverimageL: eventlocdata[eventslug].coverimageL,
      coverimageM: eventlocdata[eventslug].coverimageM,
      totalLocations: getLocTotal(locationslug).totalLocations,
      totalUniqueGames: getLocTotal(locationslug).locUniqueGames,
      totalPlayerEscaped: getLocTotal(locationslug).locToalPlayerEscape,
      age: eventlocdata[eventslug].age,
      catering: "YES",
      max_players: eventlocdata[eventslug].max_players,
      min_players: eventlocdata[eventslug].min_players,

      bookingall: {
        shortname: bookinglist.shortname,
      },
      eventbooking: {
        shortname: bookinglist.shortname,
        item: bookinglist["party-package"].item,
        flow: bookinglist["party-package"].flow,
        eventstatus: bookinglist["party-package"].eventstatus,
      },
      locdetail: getLocSpec(locationslug),
    },
    eventdata: eventlocdata[eventslug].eventdata,

    reviews: eventlocdata[eventslug].reviews,
    contactdata: getLocSpec(locationslug),
    activitylist: getLocationActivitySlugList(locationslug),
    eventlist: getLocationEventSlugList(locationslug),
  };

  return eventData;
};

/*
const eventlocdata={
//===========================================================birthday party==========
"birthday-party":{

  "pagesubtitle":"All In Adventures is famous for hosting the most memorable birthday party in the town. We offer fun-filled escape room experiences and a birthday party venue for all ages and skill levels. Both kids and adults love it!",
   "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-birthday-party-hero.jpg",
   "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-birthday-party-hero.jpg",
   "coverimageM_alt":"allinadventures-events-birthday-party",
   
    "age":"6+",
   "max_players":"70",
   "min_players":"2",

  "pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },

   "eventdata":{
    "why_book":"Your birthday is coming up and you're googling birthday party venues near me, wondering what to do for one of the most important occasions of the year. Well, celebrate it in style with our escape room birthday party, where every one of your guests, including yourself, is guaranteed to have fun. You can tailor and personalize your experience from many different escape room themes. There are no logistical nightmares, no stress of arrangements. If you wanted memorable, you've got it!",
    "why_book_img":"/assets/all-event-details/allinadventures-events-birthday-party-sec1.jpg",
    "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
    "offer_img":"/assets/all-event-details/allinadventures-events-birthday-party-sec2.jpg",
    "what_expect":"Our kids and family friendly escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any birthday party event at All In Adventures, your team will have a set time of 50-60 minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
    "what_expect_img":"/assets/all-event-details/allinadventures-events-birthday-party-sec3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },
    "reviews": [
      
         {   "id"  : 1,
           "star":5,
          "title": "BEST BIRTHDAY EVER!",
           "review_text": "We were a group of 8 for the Game Room and we had so much fun! We were celebrating a birthday and the team at this location were great! Afterward we were all talking about how we want to come back soon to play again! Definitely recommend.",
           "revlink":"https://g.co/kgs/givxmA",
           "author" :"Lisa Podhayny",
           "author_location" :"Holyoke, MA, United States",
           "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-1.jpg",
           "rev_img_alt":"escape room in Holyoke, MA"
         },
         {   "id"  : 2,
           "star":5,
          "title": "ADVENTURE OVERLOADED!",
           "review_text": "I traveled all the way from Brooklyn for a mall day. Steve was so charismatic he definitely sold my group on the Zombie room. Upon checking in Victoria was amazing she explained how the experience would go and even took a great photo before we left. Your team is great here and I think this experience is something everyone should do. I'll be returning soon I want to figure out the Sherlock room. Thank you again to Steve and Victoria",
           "revlink":"https://g.co/kgs/ZFdQL6",
           "author" :"Ashley Barrett",
           "author_location" :"Buffalo, NY, United States",
           "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-2.jpg",
           "rev_img_alt":"escape room in Buffalo, NY"
         },
         {   "id"  : 3,
           "star":5,
          "title": "HIGHLY RECOMMENDED!",
           "review_text": "Staff was super friendly and super helpful! We loved accomplishing the treasure hunt room even though we couldn't finish the master level. Would love to go back and try out the other rooms they have.",
           "revlink":"https://g.co/kgs/8sD4bh",
           "author" :"Shannon Whitney",
           "author_location" :"Mentor, OH, United States",
           "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-3.jpg",
           "rev_img_alt":"escape room in Lawrenceville ga"
         },
         {   "id"  : 4,
           "star":5,
          "title": "IT WAS SUPER EXCITING!",
           "review_text": "I visited this Escape Room for a birthday party. We had a booking issue when we first arrived on our end but the manager, Steve, helped us reschedule and fix it! Overall, it very fun visit. We played the Sherlock room and escaped the level 2 stage. The equipment was in good shape. There was a lot of evidence given at the start so it was a little difficult determining which pieces would be most important but the host was very attentive when we needed help and we solved it. Would definitely recommend for a group visit!",
           "revlink":"https://g.co/kgs/N17pvA",
           "author" :"Mousse",
           "author_location" :"Albany, NY, United States",
           "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-4.jpg",
           "rev_img_alt":"escape room in Bensalem pa"
         },
         {   "id"  : 5,
           "star":5,
          "title": "BEST ESCAPE ROOM EVER!",
           "review_text": "Was such a fun time at the Mystery Room in West Nyack! The employees were great and super helpful. My family did the Zombie Apocalypse room and it was a blast!!! We beat the regular room and was ONE CLUE AWAY from beating Master level - but we still had fun beating the normal level! Can't wait to go back again! (And I might have to go back for my birthday!!)",
           "revlink":"https://g.co/kgs/hzd2vr",
           "author" :"Jen Westervelt",
           "author_location" :"West Nyack, NY, United States",
           "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-5.jpg",
           "rev_img_alt":"escape room in Kingston MA"
         },
         
         {   "id"  : 6,
           "star":5,
          "title": "PERFECT GIRLS ESCAPE PARTY!",
           "review_text": "Tried the Sherlock Room here and WOW it was hard, but also very fun! Suggest giving it a try if you like escape rooms. The two hosts who helped (and gave some hints) were very nice.",
           "revlink":"https://g.co/kgs/HUdAAw",
           "author" :"Jenny Brescia",
           "author_location" :"Roanoke, VA, United States",
           "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-6.jpg",
           "rev_img_alt":"escape room in Rockaway nj"
         },
         {   "id"  : 7,
           "star":5,
          "title": "INSANE ESCAPE ROOM BIRTHDAY!",
           "review_text": "Our experience was amazing!!! Dayna was an awesome host and helped to provide a memorable experience for my son's birthday.  Two thumbs up and will definitely go back again.",
           "revlink":"https://g.co/kgs/CFerYB",
           "author" :"Jonathan Barnes",
           "author_location" :"Lawrenceville, GA, United States",
           "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-7.jpg",
           "rev_img_alt":"escape room in ga "
         },

       ]
   },
    //===========================================================birthday party end==========
    //===========================================================team-building==========
    "team-building":{
        "eventname":"Physical Team Building",
        "coverimageL":"/assets/home-benar-bg.jpg",
         "coverimageM":"/assets/home-hero.jpg",
         "price":35,
         "duration":50,
         "max_players":10,
         "min_players":2,

    "pagemeta":{

        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
    "eventdata":{
        "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
        "why_book_img":"/assets/event-dt-img1.jpg",
        "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
        "offer_img":"/assets/event-dt-img2.jpg",
        "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
        "what_expect_img":"/assets/event-dt-img3.jpg",
        "videoid":"pfdyF_d4Z40"
        
        },

     "reviews":        [
            {   "id"  : 1,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 2,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 3,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 4,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 5,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 6,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 7,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },

             ]
},
//===========================================================team-building end==========
 //===========================================================family-events==========
 "family-events":{
    "eventname":"Physical Team Building",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================family-events end==========
 //===========================================================bachelor-party==========
 "bachelor-party":{
    "eventname":"Bachelor Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================bachelor-party end==========
//===========================================================bachelorette-party==========
"bachelorette-party":{
    "eventname":"Bachelorette Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================bachelorette-party end==========
//===========================================================corporate-events==========
"corporate-events":{
    "eventname":"Corporate Events",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================corporate-events end==========
//===========================================================school-events==========
"school-events":{
    "eventname":"School Events",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================school-events end==========
//===========================================================private-party==========
"private-party":{
    "eventname":"Private Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================private-party end==========
//===========================================================reunion-party==========
"reunion-party":{
    "eventname":"Reunion Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================reunion-party end==========
//===========================================================graduation-party==========
"graduation-party":{
    "eventname":"Graduation Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================reunion-party end==========
 

}*/
