import { getTotal } from "./AllDataList/getTotal";
export const geEventPagetData = (slug) => {
  const eventName = slug.toString().split("-").join(" ");

  // const locationCity=extractData.slice(0, -1).join(' ')

  const eventData = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,
    virtualgameListSlug: getTotal().virtualgameSlug,
    pagemeta: eventIndData[slug].pagemeta,

    pagedata: {
      pagetitle: "ESCAPE ROOM " + eventName,
      event_slug: slug,
      event_name: eventName,
      eventname: eventName,
      pagesubtitle: eventIndData[slug].pagesubtitle,
      coverimageL: eventIndData[slug].coverimageL,
      coverimageM: eventIndData[slug].coverimageM,
      coverimageM_alt: eventIndData[slug].coverimageM_alt,
      totalLocations: getTotal().totalLocations,
      totalPlayerEscaped: getTotal().toalPlayerEscape,
      catering: "yes",
      age: eventIndData[slug].age,
      max_players: eventIndData[slug].max_players,
      min_players: eventIndData[slug].min_players,

      totalUniqueGames: getTotal().uniqueGames,
    },
    eventdata: eventIndData[slug].eventdata,

    reviews: eventIndData[slug].reviews,
  };

  return eventData;
};

const eventIndData = {
  //********************************************************birth day parties */
  "birthday-party": {
    pagesubtitle:
      "All In Adventures is famous for hosting the most memorable birthday party in the town. We offer fun-filled escape room experiences and a birthday party venue for all ages and skill levels. Both kids and adults love it!",
    coverimageL:
      "/assets/all-event-desktop-hero/AIA-birthday-party-hero-desktop.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/AIA-birthday-party-hero-mobile.jpg",
    coverimageM_alt: "allinadventures-events-birthday-party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Birthday Party - All In Adventures",
      description:
        "A perfect birthday party venue for the young at heart. No matter your age, get an unforgettable adventure! Book your adventure today!",
      keywords:
        "birthday party escape room, birthday party events, kids birthday party place, birthday party venues, birthday party celebration, birthday party things to do near me, birthday party activities to do near me, birthday party escape room near me, birthday party events near me, kids birthday party place near me, birthday party venues near me, birthday party celebration near me, escape room for birthday party",
      url: "/events/birthday-party",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/AIA-birthday-party-hero-desktop.jpg",
    },

    eventdata: {
      why_book:
        "Nothing beats the excitement of an Escape Room Birthday Party! They're the perfect challenge for celebrating the birthday of your favorite little puzzle-solver, or a unique party experience for adults with adventure still in their hearts! With three difficulty levels, there's something for everyone!",
      why_book_img: "/assets/all-event-details/birthday-party-section-1.png",
      offer:
        "Choose from our two-party package options! Whether you want to bring your own food or have us cater, each option allows you to select one or more escape rooms and get our private party room* for two hours! Don't worry about your plates, napkins, and utensils - we've got you covered with either option! Plus, receive an All in Adventures gift card for your birthday honoree!",
      offer_img: "/assets/all-event-details/birthday-party-section-2.png",
      what_expect:
        "Our family-friendly escape rooms are designed to be challenging and fun activities for all ages and skill levels. Your party will have 50 minutes to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img: "/assets/all-event-details/birthday-party-section-3.png",
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
      "/assets/all-event-desktop-hero/allinadventures-events-team-building-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-team-building-hero.jpg",
    coverimageM_alt: "allinadventures-events-team-building",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Team Building - All In Adventures",
      description:
        "This fun and exciting interactive form of team building will bring your corporate team closer! Book your adventure today!",
      keywords:
        "team building escape room, team building events, corporate team building place, team building venues, team building activities, team building things to do near me, team building activities to do near me, team building escape room near me, team building events near me, corporate team building place near me, team building venues near me, team building activities near me, escape room for team building",
      url: "/events/team-building",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-team-building-hero.jpg",
    },

    eventdata: {
      why_book:
        "We provide the ideal atmosphere to strengthen teamwork, communication, and problem-solving skills! Our escape rooms bring teams together towards a common goal and offer the thrill of collaborative success! Instead of another dreary meeting, why not have an adventure into the unknown?",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-team-building-sec1.jpg",
      offer:
        "Your group can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Looking for lunch? Check out our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next team outing!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-team-building-sec2.jpg",
      what_expect:
        "Our escape rooms are designed to be challenging and fun activities for all ages and skill levels. Your team will have 50 minutes to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-team-building-sec3.jpg",
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
      "Since 2014, thousands of companies have been using our escape rooms and 5-star guest services to foster employee engagement, run meaningful team building events and celebrate company milestones. Instead of a dreary meeting on how to work effectively, why not take a crack at our escape room puzzles?",
    coverimageL:
      "/assets/all-event-desktop-hero/AIA-corporate-event-hero-desktop.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/AIA-corporate-event-hero-mobile.jpg",
    coverimageM_alt: "allinadventures-events-corporate-events",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Corporate Events - All In Adventures",
      description:
        "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle? Book your adventure today!",
      keywords:
        "corporate events near me, corporate party in escape room, escape room for corporate party, corporate party place for fun, corporate party venues, corporate party activities, corporate party things to do near me, corporate party activities to do near me, corporate event party escape room near me, corporate party place near me, events for corporate party place near me, corporate party venues nearbv, corporate party activities near me, escape room for corporate events",
      url: "/events/corporate-events",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/AIA-corporate-event-hero-desktop.jpg",
    },

    eventdata: {
      why_book:
        "Corporate events are frequently held at All In Adventures, and it's no surprise why! We provide a unique atmosphere where communication, leadership, and problem-solving skills will all be put to the test. Our escape rooms bring everyone on the team together to work towards a common goal!",
      why_book_img: "/assets/all-event-details/corporate-event-section-1.png",
      offer:
        "Your group can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Need some brain food? Check out our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next corporate outing!",
      offer_img: "/assets/all-event-details/corporate-event-section-2.png",
      what_expect:
        "Our escape rooms are designed to be challenging and fun activities for all ages and skill levels. With 50 minutes on the clock, your group will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/corporate-event-section-3.png",
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
      "/assets/all-event-desktop-hero/allinadventures-events-family-fun-activities-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-family-fun-activities-hero.jpg",
    coverimageM_alt: "allinadventures-events-family-fun-activitie",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Family Fun Activities - All In Adventures",
      description:
        "A unique family fun activity with intense real-life puzzles where you have to work together to progress! Book your adventure today!",
      keywords:
        "family events in escape room, escape room for family events, family events place for fun, family events venues, family events activities, family events things to do near me, family events activities to do near me, family event party escape room near me, family events place near me, events for family place near me, family events venues nearbv, family events activities near me, escape room for family events",
      url: "/events/family-fun-activity",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-family-fun-activities-hero.jpg",
    },

    eventdata: {
      why_book:
        "Put your incredible family dynamic on display in one of our fun escape rooms! We provide a unique, screen-free atmosphere to spend time together as a family! Kids over 6 can contribute, and ages 10 and up will be active problem-solving participants! Kids under six can play for FREE alongside two or more full-price adults!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-family-fun-activities-sec1.jpg",
      offer:
        "Your family can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Save time in your day by checking out our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next family outing!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-family-fun-activities-sec2.jpg",
      what_expect:
        "Our escape rooms are designed to be challenging and fun activities for all ages and skill levels. With 50 minutes on the clock, your family will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-family-fun-activities-sec3.jpg",
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
      "Are you looking for the most fun, thrilling, and downright nerdy activity for an upcoming bachelor party? Something everyone can participate in? Then play one of our escape rooms. There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
    coverimageL:
      "/assets/all-event-desktop-hero/large-escape-room-bachelor-party.jpg",
    coverimageM: "/assets/all-event-mobile-hero/escape-room-bachelor-party.jpg",
    coverimageM_alt: "Escape room bachelor party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Bachelor Parties - All In Adventures",
      description:
        "There's no better way than to bond with your bachelor party before the big day - no scandals, just nonstop thrills! Book your adventure today!",
      keywords:
        "bachelor party escape room, escape room for bachelor party, bachelor party place for fun, bachelor party venues, bachelor party activities, bachelor party things to do near me, bachelor party activities to do near me, bachelor event party escape room near me, bachelor party place near me, events for bachelor party place near me, bachelor party venues nearbv, bachelor party activities near me, escape room for bachelor party,",
      url: "/events/bachelor-party",
      metaindex: true,
      metaimg: "/assets/all-event-mobile-hero/escape-room-bachelor-party.jpg",
    },

    eventdata: {
      why_book:
        "Our unique escape room experiences are a perfect addition to bachelor parties! Your group of guys will have to come ready to play if you have any chance at escaping! Pick a room theme that best fits your crew and let us know if there's something special you'd like done for the groom-to-be!",
      why_book_img:
        "/assets/all-event-details/escape-room-bachelor-party-all-in-adventure.png",
      why_book_alt: "Escape room bachelor party by Allinadventure",
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
      "Are you planning a bachelorette party for your best friend or family member and looking for something out of the ordinary? Something everyone can participate in? Then play one of our escape rooms. There's no better way to bond with your bachelorette party before the big day — no drama, no scandals, just nonstop thrills!",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-bachelorette-party-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-bachelorette-party-hero.jpg",
    coverimageM_alt: "allinadventures-events-bachelorette-party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Bachelorette Parties - All In Adventures",
      description:
        "Fun-filled bachelorette party without any drama that will be something long remembered by everyone! Book your adventure today!",
      keywords:
        "bachelorette party escape room, escape room for bachelorette party, bachelorette party place for fun, bachelorette party venues, bachelorette party activities, bachelorette party things to do near me, bachelorette party activities to do near me, bachelorette event party escape room near me, bachelorette party place near me, events for bachelorette party place near me, bachelorette party venues nearby, bachelorette party activities near me, escape room for bachelorette party",
      url: "/events/bachelorette-party",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-bachelorette-party-hero.jpg",
    },

    eventdata: {
      why_book:
        "Our unique escape room experiences are a perfect addition to bachelorette parties! Your group of gals will have to come ready to play to have any chance at escaping! Pick a room theme that best fits your bridal party and let us know if there's something special you'd like done for the bride-to-be!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-bachelorette-party-sec1.jpg",
      offer:
        "Your party can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for a post-game tasty treat! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next girls' night out!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-bachelorette-party-sec2.jpg",
      what_expect:
        "We have escape rooms for all skill levels to challenge you and your bridesmaids. With 50 minutes on the clock, your party will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-bachelorette-party-sec3.jpg",
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
      "If you're both into adventures, puzzles, and surprises, then there's no better way than proposing in an escape room! Our escape games are designed to engage and challenge with hidden puzzles and a fully customizable experience. Your partner will never see this coming! Sweep your partner off their feet with a proposal they'll never forget.",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-proposal-party-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-proposal-party-hero.jpg",
    coverimageM_alt: "allinadventures-events-proposal-party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Proposal Party - All In Adventures",
      description:
        "A distinctive marriage proposal where the mystery ends with the ring in the final clue box! Book your adventure today!",
      keywords:
        "proposal party place, proposal party venue, escape room proposal party, proposal party places, proposal party place near me, proposal party venue nearby, proposal party in escape room, proposal party",
      url: "/events/proposal-party",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-proposal-party-hero.jpg",
    },

    eventdata: {
      why_book:
        "It's no mystery: a surprise proposal can be the memory of a lifetime! Our escape rooms are ideal for a unique way to pop the question. Your partner will be so focused on victory, you'll have the perfect chance to drop to one knee! Let us know if you want to customize the game for your proposal and we'll do our best to accommodate your special day!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-proposal-party-sec1.jpg",
      offer:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for a celebratory gathering after your game! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your first date night as fiancés!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-proposal-party-sec2.jpg",
      what_expect:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for a celebratory gathering after your game! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your first date night as fiancés!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-proposal-party-sec3.jpg",
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
      "If you both enjoy adventures, mysteries, and surprises, and looking for a fun date night idea or want to add a little excitement to your relationship, plan your date night to play our escape rooms. They're great for couples who love to work together to solve puzzles and complete challenges.",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-date-night-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-date-night-hero.jpg",
    coverimageM_alt: "allinadventures-events-date-night",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Date Night - All In Adventures",
      description:
        "Work together and find clues to solve the mystery that will ultimately strengthen your relationship! Book your adventure today!",
      keywords:
        "date night ideas, escape room date night, date night places, date night things to do, date night puzzle, escape room date night near me, date night idea",
      url: "/events/date-night",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-date-night-hero.jpg",
    },

    eventdata: {
      why_book:
        "Perfect for double dates, or just some quality time together as a couple, our escape rooms can help strengthen relationships through collaboration, communication, and fun! Use your balance of strengths together to overcome puzzles and gain a new perspective on each other!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-date-night-sec1.jpg",
      offer:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Skip the packed, noisy restaurant and check out our catered party option for a casual, private dining option! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your next date night!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-date-night-sec2.jpg",
      what_expect:
        "We have escape rooms for all skill levels to challenge you and your date. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-date-night-sec3.jpg",
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
      "We offer an array of interactive escape rooms where everyone can participate and become the star of their own action adventure. No matter what occasion you celebrate, escape room party is a great way to bring your family, friends or co-workers together and have enormous fun.",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-private-party-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-private-party-hero.jpg",
    coverimageM_alt: "allinadventures-events-private-party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Private Parties - All In Adventures",
      description:
        "Adventure awaits for all - your family, friends, office, indoor party, church group, fraternity or sorority. Book your adventure today!",
      keywords:
        "private events near me, private party in escape room, escape room for private party, private party place for fun, private party venues, private party activities, private party things to do near me, private party activities to do near me, private event party escape room near me, private party place near me, events for private party place near me, private party venues nearby, private party activities near me, escape room for private party",
      url: "/events/private-party",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-private-party-hero.jpg",
    },

    eventdata: {
      why_book:
        "We work to make each escape room private party a unique experience for you and your guests. Whether you are in a corporate office looking for an exciting team-building activity, or a group of friends looking for a mental workout, our escape rooms give you the challenge you're seeking. All In Adventures is great for all types of groups and is a memorable way to come together for fun!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-private-party-sec1.jpg",
      offer:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Feed your crowd with our catered party option and let us do the work! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card you can use for your visit!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-private-party-sec2.jpg",
      what_expect:
        "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-private-party-sec3.jpg",
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
      "There's no shortage of family reunion activities. But how many of them actually involve teamwork and collaboration? That's the question! Our escape rooms are interactive and have engaging qualities that give your reunion party an epic adventure!",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-reunion-party-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-reunion-party-hero.jpg",
    coverimageM_alt: "allinadventures-events-reunion-party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Reunion Party - All In Adventures",
      description:
        "Each game is interactive and has engaging qualities that give your reunion party an epic adventure! Book your adventure today!",
      keywords:
        "reunion events near me, reunion party in escape room, escape room for reunion party, reunion party place for fun, reunion party venues, reunion party activities, reunion party things to do near me, reunion party activities to do near me, reunion event party escape room near me, reunion party place near me, events for reunion party place near me, reunion party venues nearby, reunion party activities near me, escape room for reunion party",
      url: "/events/reunion-party",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-reunion-party-hero.jpg",
    },

    eventdata: {
      why_book:
        "Bring together your entire extended family for an unforgettable reunion! Whether you all work cooperatively, or pit family versus family in an epic battle of the minds, our escape rooms are a thrilling way to enjoy your time together! With difficulties for all ages and skill levels, All in Adventures is a cross-generational, memory-making experience!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-reunion-party-sec1.jpg",
      offer:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Feed your crowd with our catered party option and let us take care of clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-reunion-party-sec2.jpg",
      what_expect:
        "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-reunion-party-sec3.jpg",
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
      "Graduation is such an exciting time, no matter your age. You deserve to celebrate all that you have achieved. Celebrate your accomplishments in a memorable way with our escape room theme party. Make lasting memories to tell tales to your grandchildren!",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-graduation-party-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-graduation-party-hero.jpg",
    coverimageM_alt: "allinadventures-events-graduation-party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Graduation Party - All In Adventures",
      description:
        "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way. Book your adventure today!",
      keywords:
        "graduation events near me ,graduation party in escape room, escape room for graduation party, graduation party place for fun, graduation party venues, graduation party activities, graduation party things to do near me, graduation party activities to do near me, graduation event party escape room near me, graduation party place near me, events for graduation party place near me, graduation party venues nearby, graduation party activities near me, escape room for graduation party,",
      url: "/events/graduation-party",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-graduation-party-hero.jpg",
    },

    eventdata: {
      why_book:
        "Our unique escape room experiences are a perfect addition to your graduation party! Your school of scholars will have to bring their sharp minds and keen intuition if they're to have any chance at escaping! Pick a room theme that best fits their interest and let us know if there's something special you'd like done for your graduate!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-graduation-party-sec1.jpg",
      offer:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Need to refuel on brain food? Check out our catered party option and let us take care of the clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card for your graduate!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-graduation-party-sec2.jpg",
      what_expect:
        "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, you'll have to solve your mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-graduation-party-sec3.jpg",
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
      "Are you looking for school event ideas that will excite and challenge every student in the classroom or school? Then All In Adventures is a great place for you to bring your student group. Let your students experience a challenging yet fun time at our escape rooms — excellent adventures for any age group.",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-school-events-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-school-events-hero.jpg",
    coverimageM_alt: "allinadventures-events-school-events",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room School Events - All In Adventures",
      description:
        "Students exercise critical thinking and act to become the super-spies they see in the movies! Book your adventure today!",
      keywords:
        "school events near me, school party in escape room, escape room for school party, school party place for fun, school party venues, school party activities, school party things to do near me, school party activities to do near me, school event party escape room near me, school party place near me, events for school party place near me, school party venues nearby, school party activities near me, escape room for school party",
      url: "/events/school-events",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-school-events-hero.jpg",
    },

    eventdata: {
      why_book:
        "Problem-solving, critical thinking, and observational awareness - all important skills for growing young minds to strengthen. Our escape rooms will require your students to work together for an exciting intellectual challenge that's more than your average field trip! With rooms that pair well with historical and literary themes, you can effortlessly weave them into your lesson plan!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-school-events-sec1.jpg",
      offer:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Time for lunch? Check out our catered party option and let us take care of the clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card for your next class trip!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-school-events-sec2.jpg",
      what_expect:
        "We have escape rooms for all skill levels to challenge your class. With 50 minutes on the clock, your students will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-school-events-sec3.jpg",
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
      "All In Adventures is famous for hosting unique gender reveal parties. Escape the wild parties in exchange for an escape room gender reveal party where you look for a box that reveals your secret color. Bring your dearest friends and family as you celebrate a gift from God!",
    coverimageL:
      "/assets/all-event-desktop-hero/allinadventures-events-gender-reveal-party-hero.jpg",
    coverimageM:
      "/assets/all-event-mobile-hero/allinadventures-events-gender-reveal-party-hero.jpg",
    coverimageM_alt: "allinadventures-events-gender-reveal-party",
    age: "6+",
    max_players: "70",
    min_players: "2",

    pagemeta: {
      title: "Escape Room Gender Reveal Party - All In Adventures",
      description:
        "Instead of simply sharing the news of your baby's gender, why not announce it through fun puzzles? Book your adventure today!",
      keywords:
        "gender reveal party place, gender reveal party venue, escape room gender reveal party, gender reveal party places, gender reveal party place near me, gender reveal party venue nearby, gender reveal party in escape room, gender reveal party",
      url: "/events/gender-reveal-party",
      metaindex: true,
      metaimg:
        "/assets/all-event-mobile-hero/allinadventures-events-gender-reveal-party-hero.jpg",
    },

    eventdata: {
      why_book:
        "We provide a unique atmosphere where parents make gender reveal parties a memorable family event. The big surprise awaits your party at the conclusion of your game with the final box being packed with your ideal way of announcing the gender of your baby! Pick a room theme and let us know if there's something special you'd like done for your reveal!",
      why_book_img:
        "/assets/all-event-details/allinadventures-events-gender-reveal-party-sec1.jpg",
      offer:
        "You can choose one or more escape rooms to play and take advantage of our private party room* after you've finished your games. Check out our catered party option for your reveal after-party and let us take care of the clean-up! All party room packages include plates, napkins, and utensils - and an All in Adventures gift card!",
      offer_img:
        "/assets/all-event-details/allinadventures-events-gender-reveal-party-sec2.jpg",
      what_expect:
        "We have escape rooms for all skill levels to challenge your party. With 50 minutes on the clock, your guests will have to solve their mystery and find a way to escape! Crack the code using mysterious clues, hidden keys, and puzzling riddles! Use teamwork, critical thinking, and your sense of adventure to find your way out of the room before the time runs out!",
      what_expect_img:
        "/assets/all-event-details/allinadventures-events-gender-reveal-party-sec3.jpg",
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
