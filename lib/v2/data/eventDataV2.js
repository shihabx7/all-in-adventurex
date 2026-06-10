export const eventDatav2 = {
  "birthday-party": {
    id: 1,
    isActive: true,
    eventSlug: "birthday-party",
    eventName: "Birthday Parties",
    menuLabel: "Birthday Parties",
  },
  "team-building": {
    id: 2,
    isActive: true,
    eventSlug: "team-building",
    eventName: "Team Building & Group Events",
    menuLabel: "Team Building & Group Events",
  },
  "school-events": {
    id: 3,
    isActive: true,
    eventSlug: "school-events",
    eventName: "School Events & Field Trips",
    menuLabel: "School Events & Field Trips",
  },
};
/**============================================================== party package ================================================*/
export const partyPackageListV2 = [
  {
    id: 1,
    partyName: "Escape From Alcatraz",
    isActiveRootPage: true,
    partyCardImage: {
      url: "/assets/event-page-v2/escape-from-alcatraz-game-card.jpg",
      width: 520,
      height: 620,
      alt: "escape from alcatraz party package",
    },
  },
  {
    id: 2,
    partyName: "Treasure Island",
    isActiveRootPage: true,
    partyCardImage: {
      url: "/assets/event-page-v2/treasure-island-game-card.jpg",
      width: 520,
      height: 620,
      alt: "Treasure Island party package",
    },
  },
  {
    id: 3,
    partyName: "Zombie Apocalypse",
    isActiveRootPage: true,
    partyCardImage: {
      url: "/assets/event-page-v2/zombie-apocalypse-game-card.jpg",
      width: 520,
      height: 620,
      alt: "Zombie Apocalypse party package",
    },
  },
  {
    id: 4,
    partyName: "Game Show Room",
    isActiveRootPage: false,
    partyCardImage: {
      url: "/assets/event-page-v2/game-showroom-party-card.jpg",
      width: 520,
      height: 620,
      alt: "Game Show Room party package",
    },
  },
  {
    id: 5,
    partyName: "Superhero's Adventure",
    isActiveRootPage: false,
    partyCardImage: {
      url: "/assets/event-page-v2/superheros-adventure-game-card.jpg",
      width: 520,
      height: 620,
      alt: "Superhero's Adventure party package",
    },
  },
];
export const patyPackageInfoList = {
  "birthday-party": {
    packageIncludeList: [
      {
        id: 1,
        infoTitle: "WHAT'S INCLUDED IN EVERY PACKAGE",
        titleSubText: null,
        infoList: [
          "Game Room Rental for 1 hours",
          "Basic Supplies (Plates, Napkins, Utensils, etc.)",
          "FREE All In Adventures Birthday Invitations (Digital - can be printed)",
        ],
      },
      {
        id: 2,
        infoTitle: "OPTIONAL CATERING ADD-ON ",
        titleSubText: "(ADD AT CHECKOUT)",
        infoList: [
          " Minimum Guest Count: 6 people up to 20, including parents",
          "All In Adventures Catering (Standard Package includes Pizza, Cookie Cake, & unlimited drinks)",
          "Add catering for just $19.99 / person.",
        ],
      },
      {
        id: 3,
        infoTitle: "  GOOD TO KNOW",
        titleSubText: null,
        infoList: [
          "For your safety, no homemade food is allowed and all food and drink items must be store-bought.",
          "Guests may decorate the room but must remove all items after the party.",
        ],
      },
    ],
    cancellationInfo: {
      infoTitle: "CANCELLATIONS & RESCHEDULING",
      titleSubText: null,
      infoList: [
        "All sales are final — no refunds or cancellations",
        "Cancellation Protection is available at checkout for peace of mind — full refund minus an 8% fee if cancelled at least 24 hours before your booking",
        "Most reservations can be rescheduled online through your confirmation email at least 48 hours in advance",
        "Need to reschedule within 48 hours? Contact us directly and we'll do our best",
      ],
    },
    bigPackageInfo: {
      infoTitle: "NEED SOMETHING BIGGER, CUSTOM, OR WITHIN 7 DAYS?",
      titleSubText: null,
      infoHtmlText:
        "<p>Got a bigger crowd or a tight timeline? We've got you. We regularly host groups of 20, 30, 50, and well beyond — multiple rooms running simultaneously so nobody sits out. Our events team handles every detail from logistics to catering.</p>",
    },
  },

  "team-building": [
    {
      id: 1,
      authorName: "Kevin D.",
      occupation: "HR Manager",
      city: null,
      text: "I've organized a lot of team building events and the reaction is usually polite enthusiasm at best. This time people were genuinely excited — texting each other the night before, debriefing in the parking lot after, asking when we're going again. That has never happened before. Ever.",
    },

    {
      id: 2,
      authorName: "Sandra M.",
      occupation: "Team Lead",
      city: null,
      text: "We had 18 people across three departments who had never worked together in the same room before. Forty-five minutes into Zombie Apocalypse they were communicating better than teams who've worked together for years. I don't know what's in those rooms but it works.",
    },

    {
      id: 3,
      authorName: "James R.",
      occupation: "Operations Manager",
      city: null,
      text: "Our team is remote 90% of the time so in-person events are rare and the pressure to get them right is enormous. This was the easiest planning experience I've ever had and the highest-energy event we've ever done. The whole team is still talking about it two months later.",
    },

    {
      id: 4,
      authorName: "Michelle T.",
      occupation: "Director of People Operations",
      city: null,
      text: "I was the skeptic in the room — thought it would be cheesy and forced. Twenty minutes into Escape From Alcatraz I completely forgot I was supposed to be evaluating it. I was just playing. That's when I knew it worked. Already booked our next one.",
    },
    {
      id: 5,
      authorName: "Kayla R.",
      occupation: null,
      city: null,
      text: "Did this for my bachelorette party and it was the best decision I made for the whole weekend. Ten of us in Zombie Apocalypse — screaming, laughing, completely losing our minds. We didn't escape but honestly that made it even funnier. The staff were incredible the whole time.",
    },
    {
      id: 6,
      authorName: "Marcus T.",
      occupation: null,
      city: null,
      text: "Brought my whole family for a reunion — ages 9 to 71. Three rooms running at the same time, everyone playing together, and somehow grandma's team was the one that almost escaped. The debrief dinner at the mall after was the best family conversation we've had in years.",
    },
  ],
  "school-events": [
    {
      id: 1,
      authorName: "Ms. Patricia W.",
      occupation: "5th Grade Teacher",
      city: null,
      text: "I've organized a lot of field trips. This was the first one where I didn't have to manage a single student. They were completely locked in the whole time, working together without being told to, and came out buzzing. My co-teacher and I just looked at each other. This is the one.",
    },
    {
      id: 2,
      authorName: "Mr. Jason T.",
      occupation: "Middle School Social Studies Teacher",
      city: null,
      text: "Getting field trip approval isn't always easy. I used the curriculum connection — Escape From Alcatraz for our history unit — and my principal approved it without a second question. The students made the connection themselves during the debrief. Best money our school has spent on a trip.",
    },
    {
      id: 3,
      authorName: "Mr. David R.",
      occupation: "STEM Program Coordinator",
      city: null,
      text: "We did Zombie Apocalypse with our after-school STEM group and it was an absolute hit. The kids were talking about the scientific process without even realizing it. Three of them asked if they could write a reflection for extra credit. That has never happened before.",
    },
    {
      id: 4,
      authorName: "Mrs. Linda K.",
      occupation: "PTA President",
      city: null,
      text: "Brought 42 students across four rooms and the staff coordinated every single detail. Every group started on time, the kids came out absolutely buzzing, and the chaperones had a great time too. Our PTA has already voted to make this an annual trip.",
    },
    {
      id: 5,
      authorName: "Ms. Rebecca H.",
      occupation: "3rd Grade Teacher",
      city: null,
      text: "We'd never done an escape room as a school group before and I was nervous it would be too hard for the younger students. The Game Master was incredible — patient, encouraging, and kept every single kid involved. My quietest student was the one who cracked the final clue.",
    },
    {
      id: 6,
      authorName: "Ms. Angela S.",
      occupation: "7th Grade Teacher",
      city: null,
      text: "Booked the catering package and it was absolutely the right call. Coordinating lunch for 35 students on a field trip is usually a nightmare. This time everything was ready when they came out of the rooms. Happy, fed students and zero chaos. Would do it again in a heartbeat.",
    },
  ],
};
/**============================================================== birthday party faq ================================================*/
export const eventFaqListDefaultV2 = [
  {
    id: 1,
    faqQuestion: "What exactly is an escape room?",
    faqAnswer:
      "An escape room is a live, interactive adventure where your group works together to solve puzzles, find hidden clues, and complete a mission — all within 60 minutes. Every room has a different theme and storyline, and the clock is always ticking. It's part puzzle, part adventure, and 100% something your group will be talking about long after it's over.",
  },
  {
    id: 2,
    faqQuestion: "Do we need any experience to play?",
    faqAnswer:
      "Not at all. Every game is designed to be enjoyed by first-timers and experienced players alike. Before you start, your Game Master walks the whole group through everything — how it works, what to expect, and the rules. Nobody walks in blind. We make sure everyone feels ready before the clock starts.",
  },
  {
    id: 3,
    faqQuestion: "Is it scary?",
    faqAnswer:
      "Our rooms are themed around adventure and mystery — not horror. There are no jump scares, no actors chasing you, and nothing designed to frighten younger players. Think exciting and thrilling, not scary. Zombie Apocalypse sounds intense but it's more about the race against time than anything frightening.",
  },
  {
    id: 4,
    faqQuestion: "What if we get stuck?",
    faqAnswer:
      "Your Game Master is watching the whole time and will offer hints when your group needs a nudge in the right direction. Nobody gets left completely stumped — we want everyone to have fun, not spend an hour frustrated.",
  },
  {
    id: 5,
    faqQuestion: "How long does the whole experience last?",
    faqAnswer:
      "The escape room itself is 60 minutes. Add in a quick briefing before and your private party room after and you're looking at a total of around 2 to 3 hours — plenty of time for the game, the celebration, and everything in between.",
  },
  {
    id: 6,
    faqQuestion: "What's included in a party package?",
    faqAnswer:
      "Every party package includes a 1-hour private escape room for up to 10 players, 2 hours in your own private party room, basic supplies — plates, napkins, and utensils — FREE printable digital birthday invitations, and a $30 gift card for the birthday guest. Optional catering can be added at checkout.",
  },
  {
    id: 7,
    faqQuestion: "What's the difference between the three packages?",
    faqAnswer:
      "All three packages include the same great experience — the difference is which escape room theme you choose. Pick the adventure that fits your group best: Escape From Alcatraz for a historical thriller, Treasure Island for a beginner-friendly fantasy adventure, or Zombie Apocalypse for the ultimate challenge. Same party room, same inclusions, different adventure.",
  },
  {
    id: 8,
    faqQuestion: "Can we add catering?",
    faqAnswer:
      "Yes — and we highly recommend it. Add our Standard Catering Package at checkout for just $19.99/person (minimum 6 guests) and we'll have pizza, cookie cake, and unlimited drinks ready and waiting when your group walks out of the game. Want more food? Add extra pizzas for $26.99 each or an extra cookie cake for $25.00. For larger groups, call your local store directly.",
  },
  {
    id: 9,
    faqQuestion: "Can we bring our own food?",
    faqAnswer:
      "Absolutely. Store-bought food is always welcome in the party room. The only rule is no homemade food — all food and drinks must be store-bought or commercially prepared for health and safety reasons.",
  },
  {
    id: 10,
    faqQuestion: "Can we bring decorations?",
    faqAnswer:
      "Yes! Feel free to bring your own decorations to personalize the party room. Just make sure everything is taken down and cleared out before you leave.",
  },
  //============================================more
  {
    id: 11,
    faqQuestion: "Is the party room private?",
    faqAnswer:
      "100%. Your party room is exclusively yours for the full 2 hours — no sharing with other groups, no strangers walking through. It's your space to celebrate exactly the way you want.",
  },
  {
    id: 12,
    faqQuestion:
      "Can non-playing guests wait in the party room during the game?",
    faqAnswer:
      "Absolutely. Parents, grandparents, or anyone who prefers to sit out the game are welcome to relax in the private party room the entire time. And the best part — non-playing adults supervising the group get in free.",
  },
  {
    id: 13,
    faqQuestion: "Are the rooms suitable for younger kids?",
    faqAnswer:
      "Yes. Our rooms are designed for all skill levels and ages. Treasure Island is our most beginner-friendly room and works brilliantly for younger players. Your Game Master will make sure every player — no matter their age — feels involved and has a role to play.",
  },
  {
    id: 14,
    faqQuestion: "How many people can play at once?",
    faqAnswer:
      "Each escape room accommodates up to 10 players at a time. For larger groups, we run multiple rooms simultaneously so everyone plays at the same time — nobody waits around.",
  },
  {
    id: 15,
    faqQuestion: "Can you accommodate large groups?",
    faqAnswer:
      "<p>Absolutely. We regularly host groups of 20, 30, 50, and well beyond. Our events team handles all the details — multiple rooms, custom packages, catering, the works. Call us at<a href='tel:844-502-5546' class='font-bold'> 844-502-5546</a> or email <a href='mailto:sales@allinadventures.com' class='font-bold'>sales@allinadventures.com</a> and we'll build the perfect package for your group.</p>",
  },
  {
    id: 16,
    faqQuestion: "How do I book a birthday party?",
    faqAnswer:
      "Simply select your location, choose your party package, and complete your booking online. Catering can be added during checkout. It takes less than five minutes and your date is instantly secured.",
  },
  {
    id: 17,
    faqQuestion: "How far in advance do I need to book?",
    faqAnswer:
      "We recommend booking at least 7 days in advance to guarantee your preferred date and time online. Booking within 7 days? Submit an enquiry and our manager will reach out personally to do everything we can to accommodate your group.",
  },
  {
    id: 18,
    faqQuestion: "Can I just book the escape room without a party package?",
    faqAnswer:
      "Absolutely. If you want the game without the party room or catering, you can book any escape room on its own — same private room, same great experience, no extras attached. Head to any of the mall restaurants right after for a meal and you've got a perfect birthday sorted.",
  },
  {
    id: 19,
    faqQuestion: "What is your cancellation policy?",
    faqAnswer:
      "All bookings are final — we do not offer refunds or cancellations. However, Cancellation Protection is available at checkout for added peace of mind. With this protection, you'll receive a full refund minus an 8% fee if you need to cancel at least 24 hours before your booking. Most reservations can also be rescheduled online through your confirmation email at least 48 hours in advance.",
  },
  {
    id: 20,
    faqQuestion: "What if I need to reschedule?",
    faqAnswer:
      "No problem. Most bookings can be rescheduled online through your confirmation email as long as it's at least 48 hours before your reservation. Need to change within 48 hours? Contact your local store directly and we'll do our best to work something out.",
  },
  {
    id: 21,
    faqQuestion: "What should we wear?",
    faqAnswer:
      "Comfortable clothes and closed-toe shoes. No special gear needed — just show up ready to move, think, and have a great time.",
  },
  {
    id: 22,
    faqQuestion: "What should we bring?",
    faqAnswer:
      "Just your group and your competitive spirit. We provide all the party supplies. If you're adding your own store-bought food, bring that along too. Leave the homemade dishes at home.",
  },
  {
    id: 23,
    faqQuestion: "Is there parking?",
    faqAnswer:
      "Yes — free mall parking is available right outside. Easy in, easy out.",
  },
];
/**============================================================== ================================================*/
export const feedBackSectionHtmlTextList = {
  "birthday-party": [
    "<div class='flex flex-col space-y-3'>",
    "<p>Kids love the adventure. Teens love the challenge. Adults love that it doesn't feel like a kids' party — until they're the loudest ones in the room.</p>",
    "<p><strong>Here's how it works: </strong>Your whole group gets a private themed game room, 60 minutes on the clock, and one mission — solve the puzzles, crack the clues, and escape together before time runs out. No experience needed. No wrong way to play. Just your people, fully locked in, having the time of their lives.</p>",
    "<p>Then your own private party room to celebrate the win after. Trusted by over a million guests across the country. Zero boring birthdays.</p>",
    "<p>Kids as young as 6 are welcome — and any adult supervising without playing gets in FREE.</p>",
    "</div>",
  ],
  "team-building": [
    "<div class='flex flex-col space-y-3'>",
    "<p>No trust falls. No awkward icebreakers. No one checking their phone under the table.</p>",
    "<p>Here's how it works: your whole team gets a private themed room, 60 minutes on the clock, and one mission — solve the puzzles, crack the clues, and escape together before time runs out. No experience needed. No assigned roles. Just your people, fully locked in, working together in a way that no conference room ever made possible.</p>",
    "<p>And here's what makes it work beyond the fun: in 60 minutes you'll see who leads, who listens, who thrives under pressure, and who finds the clue everyone else missed. Real collaboration. Real results. Zero forced participation.</p>",
    "<p>Not a corporate group? No problem. We're the perfect venue for any group looking for something private, genuinely fun, and completely unforgettable — bachelor parties, family reunions, graduation celebrations, date nights, and everything in between.</p>",
    "<p>Trusted by companies, HR teams, and group organizers across the country. Over a million guests served. Zero boring group events.</p>",
    "<p>Non-participating guests and observers are always welcome — and always free.</p>",
    "</div>",
  ],
  "school-events": [
    "<div class='flex flex-col space-y-3'>",
    "<p>Every teacher knows the look. The one where students are completely locked in — not because they have to be, but because they genuinely can't help it.</p>",
    "<p>Here's how it works: your whole group gets a private themed room, 60 minutes on the clock, and one mission — solve the puzzles, crack the clues, and escape together before time runs out. No experience needed. No wrong way to play. Every student gets a role. Every contribution matters.</p>",
    "<p>And the skills they're building while they do it? Critical thinking, communication, problem-solving, and teamwork — the exact skills every educator is trying to develop. They just won't realize they're learning. They'll be too busy trying to escape.</p>",
    "<p>Trusted by schools, youth groups, and educators across the country. Over a million guests served. Zero boring field trips.</p>",
    "<p>Students ages 6 and up are welcome — and any teacher or chaperone supervising without playing gets in FREE.</p>",
    "</div>",
  ],
};

export const feedTestimonialList = {
  "birthday-party": [
    {
      id: 1,
      authorName: "Amanda R.",
      city: null,
      text: "I've planned a lot of birthday parties. This was the first one where I actually had fun too. The kids were locked in the whole time, the party room was ready when we came out, and I didn't clean up a single thing. I'm not going back to Chuck E. Cheese. Ever.",
    },
    {
      id: 2,
      authorName: "Marcus T.",
      city: null,
      text: "My daughter wanted something different for her 10th birthday. Different was an understatement. Her little brother, her teenage cousins, and even my mother-in-law were all working together like their lives depended on it. Best money I've ever spent on a birthday party.",
    },
    {
      id: 3,
      authorName: "Tyler M.",
      city: null,
      text: "We did Escape From Alcatraz for my 16th and it was genuinely the most fun I've had at any birthday… mine or anyone else's. We didn't escape but we got really close and we're already planning a rematch. Highly recommend if you actually want a challenge.",
    },
    {
      id: 4,
      authorName: "Stephanie L.",
      city: null,
      text: "Turned 40 and refused to do a boring dinner. Eight of my closest friends, one escape room and hours of laughing so hard we could barely read the clues. Nobody looked at their phone once. That never happens with our group.",
    },
    {
      id: 5,
      authorName: "Jennifer H.",
      city: null,
      text: "We'd never done an escape room before and I was nervous it would be too hard for the younger kids. The Game Master was incredible — patient, encouraging, and kept everyone involved without giving anything away. My 7-year-old was the one who cracked the final clue.",
    },
    {
      id: 6,
      authorName: "Jennifer H.",
      city: null,
      text: "Booked the catering package and I cannot stress enough how worth it that was. Pizza was hot, drinks were ready, cake was already on the table when we walked in. My only job that day was to sing Happy Birthday. That is the dream.",
    },
    {
      id: 7,
      authorName: "Keisha W.",
      city: null,
      text: "Booked the catering package and I cannot stress enough how worth it that was. Pizza was hot, drinks were ready, cake was already on the table when we walked in. My only job that day was to sing Happy Birthday. That is the dream.",
    },
    {
      id: 8,
      authorName: "David P.",
      city: null,
      text: "Had 22 kids for my son's birthday. Twenty. Two. Kids. They split us into teams, everyone started at the same time, and somehow it was completely organized and totally chaotic in the best possible way. My son said it was the greatest day of his life. I believe him.",
    },
  ],
  "team-building": [
    {
      id: 1,
      authorName: "Kevin D.",
      occupation: "HR Manager",
      city: null,
      text: "I've organized a lot of team building events and the reaction is usually polite enthusiasm at best. This time people were genuinely excited — texting each other the night before, debriefing in the parking lot after, asking when we're going again. That has never happened before. Ever.",
    },

    {
      id: 2,
      authorName: "Sandra M.",
      occupation: "Team Lead",
      city: null,
      text: "We had 18 people across three departments who had never worked together in the same room before. Forty-five minutes into Zombie Apocalypse they were communicating better than teams who've worked together for years. I don't know what's in those rooms but it works.",
    },

    {
      id: 3,
      authorName: "James R.",
      occupation: "Operations Manager",
      city: null,
      text: "Our team is remote 90% of the time so in-person events are rare and the pressure to get them right is enormous. This was the easiest planning experience I've ever had and the highest-energy event we've ever done. The whole team is still talking about it two months later.",
    },

    {
      id: 4,
      authorName: "Michelle T.",
      occupation: "Director of People Operations",
      city: null,
      text: "I was the skeptic in the room — thought it would be cheesy and forced. Twenty minutes into Escape From Alcatraz I completely forgot I was supposed to be evaluating it. I was just playing. That's when I knew it worked. Already booked our next one.",
    },
    {
      id: 5,
      authorName: "Kayla R.",
      occupation: null,
      city: null,
      text: "Did this for my bachelorette party and it was the best decision I made for the whole weekend. Ten of us in Zombie Apocalypse — screaming, laughing, completely losing our minds. We didn't escape but honestly that made it even funnier. The staff were incredible the whole time.",
    },
    {
      id: 6,
      authorName: "Marcus T.",
      occupation: null,
      city: null,
      text: "Brought my whole family for a reunion — ages 9 to 71. Three rooms running at the same time, everyone playing together, and somehow grandma's team was the one that almost escaped. The debrief dinner at the mall after was the best family conversation we've had in years.",
    },
    {
      id: 7,
      authorName: "Brian K.",
      occupation: "CEO",
      city: null,
      text: "Best team building we've done in eight years — and we've tried everything. The catering package made it completely turnkey. We walked in, played, celebrated, and walked out. Our events coordinator said it was the smoothest corporate outing she's ever planned.",
    },
  ],
  "school-events": [
    {
      id: 1,
      authorName: "Ms. Patricia W.",
      occupation: "5th Grade Teacher",
      city: null,
      text: "I've organized a lot of field trips. This was the first one where I didn't have to manage a single student. They were completely locked in the whole time, working together without being told to, and came out buzzing. My co-teacher and I just looked at each other. This is the one.",
    },
    {
      id: 2,
      authorName: "Mr. Jason T.",
      occupation: "Middle School Social Studies Teacher",
      city: null,
      text: "Getting field trip approval isn't always easy. I used the curriculum connection — Escape From Alcatraz for our history unit — and my principal approved it without a second question. The students made the connection themselves during the debrief. Best money our school has spent on a trip.",
    },
    {
      id: 3,
      authorName: "Mr. David R.",
      occupation: "STEM Program Coordinator",
      city: null,
      text: "We did Zombie Apocalypse with our after-school STEM group and it was an absolute hit. The kids were talking about the scientific process without even realizing it. Three of them asked if they could write a reflection for extra credit. That has never happened before.",
    },
    {
      id: 4,
      authorName: "Mrs. Linda K.",
      occupation: "PTA President",
      city: null,
      text: "Brought 42 students across four rooms and the staff coordinated every single detail. Every group started on time, the kids came out absolutely buzzing, and the chaperones had a great time too. Our PTA has already voted to make this an annual trip.",
    },
    {
      id: 5,
      authorName: "Ms. Rebecca H.",
      occupation: "3rd Grade Teacher",
      city: null,
      text: "We'd never done an escape room as a school group before and I was nervous it would be too hard for the younger students. The Game Master was incredible — patient, encouraging, and kept every single kid involved. My quietest student was the one who cracked the final clue.",
    },
    {
      id: 6,
      authorName: "Ms. Angela S.",
      occupation: "7th Grade Teacher",
      city: null,
      text: "Booked the catering package and it was absolutely the right call. Coordinating lunch for 35 students on a field trip is usually a nightmare. This time everything was ready when they came out of the rooms. Happy, fed students and zero chaos. Would do it again in a heartbeat.",
    },
    {
      id: 7,
      authorName: "Coach Marcus B.",
      occupation: "Youth Group Leader",
      city: null,
      text: "I run a youth group and the teenagers — who are notoriously impossible to impress — were competing, laughing, and strategizing from the first minute. Not one phone came out the entire hour. I've already booked next year.",
    },
  ],
};
export const customerReviewList = {
  "birthday-party": [
    {
      id: 1,
      authorName: "Amanda R.",
      city: null,
      text: "I've planned a lot of birthday parties. This was the first one where I actually had fun too. The kids were locked in the whole time, the party room was ready when we came out, and I didn't clean up a single thing. I'm not going back to Chuck E. Cheese. Ever.",
    },
    {
      id: 2,
      authorName: "Marcus T.",
      city: null,
      text: "My daughter wanted something different for her 10th birthday. Different was an understatement. Her little brother, her teenage cousins, and even my mother-in-law were all working together like their lives depended on it. Best money I've ever spent on a birthday party.",
    },
    {
      id: 3,
      authorName: "Tyler M.",
      city: null,
      text: "We did Escape From Alcatraz for my 16th and it was genuinely the most fun I've had at any birthday… mine or anyone else's. We didn't escape but we got really close and we're already planning a rematch. Highly recommend if you actually want a challenge.",
    },
    {
      id: 4,
      authorName: "Stephanie L.",
      city: null,
      text: "Turned 40 and refused to do a boring dinner. Eight of my closest friends, one escape room and hours of laughing so hard we could barely read the clues. Nobody looked at their phone once. That never happens with our group.",
    },
    {
      id: 5,
      authorName: "Jennifer H.",
      city: null,
      text: "We'd never done an escape room before and I was nervous it would be too hard for the younger kids. The Game Master was incredible — patient, encouraging, and kept everyone involved without giving anything away. My 7-year-old was the one who cracked the final clue.",
    },
    {
      id: 6,
      authorName: "Jennifer H.",
      city: null,
      text: "Booked the catering package and I cannot stress enough how worth it that was. Pizza was hot, drinks were ready, cake was already on the table when we walked in. My only job that day was to sing Happy Birthday. That is the dream.",
    },
    {
      id: 7,
      authorName: "Keisha W.",
      city: null,
      text: "Booked the catering package and I cannot stress enough how worth it that was. Pizza was hot, drinks were ready, cake was already on the table when we walked in. My only job that day was to sing Happy Birthday. That is the dream.",
    },
    {
      id: 8,
      authorName: "David P.",
      city: null,
      text: "Had 22 kids for my son's birthday. Twenty. Two. Kids. They split us into teams, everyone started at the same time, and somehow it was completely organized and totally chaotic in the best possible way. My son said it was the greatest day of his life. I believe him.",
    },
  ],
  "team-building": [
    {
      id: 1,
      authorName: "Kevin D.",
      occupation: "HR Manager",
      city: null,
      text: "I've organized a lot of team building events and the reaction is usually polite enthusiasm at best. This time people were genuinely excited — texting each other the night before, debriefing in the parking lot after, asking when we're going again. That has never happened before. Ever.",
    },

    {
      id: 2,
      authorName: "Sandra M.",
      occupation: "Team Lead",
      city: null,
      text: "We had 18 people across three departments who had never worked together in the same room before. Forty-five minutes into Zombie Apocalypse they were communicating better than teams who've worked together for years. I don't know what's in those rooms but it works.",
    },

    {
      id: 3,
      authorName: "James R.",
      occupation: "Operations Manager",
      city: null,
      text: "Our team is remote 90% of the time so in-person events are rare and the pressure to get them right is enormous. This was the easiest planning experience I've ever had and the highest-energy event we've ever done. The whole team is still talking about it two months later.",
    },

    {
      id: 4,
      authorName: "Michelle T.",
      occupation: "Director of People Operations",
      city: null,
      text: "I was the skeptic in the room — thought it would be cheesy and forced. Twenty minutes into Escape From Alcatraz I completely forgot I was supposed to be evaluating it. I was just playing. That's when I knew it worked. Already booked our next one.",
    },
    {
      id: 5,
      authorName: "Kayla R.",
      occupation: null,
      city: null,
      text: "Did this for my bachelorette party and it was the best decision I made for the whole weekend. Ten of us in Zombie Apocalypse — screaming, laughing, completely losing our minds. We didn't escape but honestly that made it even funnier. The staff were incredible the whole time.",
    },
    {
      id: 6,
      authorName: "Marcus T.",
      occupation: null,
      city: null,
      text: "Brought my whole family for a reunion — ages 9 to 71. Three rooms running at the same time, everyone playing together, and somehow grandma's team was the one that almost escaped. The debrief dinner at the mall after was the best family conversation we've had in years.",
    },
  ],
  "school-events": [
    {
      id: 1,
      authorName: "Ms. Patricia W.",
      occupation: "5th Grade Teacher",
      city: null,
      text: "I've organized a lot of field trips. This was the first one where I didn't have to manage a single student. They were completely locked in the whole time, working together without being told to, and came out buzzing. My co-teacher and I just looked at each other. This is the one.",
    },
    {
      id: 2,
      authorName: "Mr. Jason T.",
      occupation: "Middle School Social Studies Teacher",
      city: null,
      text: "Getting field trip approval isn't always easy. I used the curriculum connection — Escape From Alcatraz for our history unit — and my principal approved it without a second question. The students made the connection themselves during the debrief. Best money our school has spent on a trip.",
    },
    {
      id: 3,
      authorName: "Mr. David R.",
      occupation: "STEM Program Coordinator",
      city: null,
      text: "We did Zombie Apocalypse with our after-school STEM group and it was an absolute hit. The kids were talking about the scientific process without even realizing it. Three of them asked if they could write a reflection for extra credit. That has never happened before.",
    },
    {
      id: 4,
      authorName: "Mrs. Linda K.",
      occupation: "PTA President",
      city: null,
      text: "Brought 42 students across four rooms and the staff coordinated every single detail. Every group started on time, the kids came out absolutely buzzing, and the chaperones had a great time too. Our PTA has already voted to make this an annual trip.",
    },
    {
      id: 5,
      authorName: "Ms. Rebecca H.",
      occupation: "3rd Grade Teacher",
      city: null,
      text: "We'd never done an escape room as a school group before and I was nervous it would be too hard for the younger students. The Game Master was incredible — patient, encouraging, and kept every single kid involved. My quietest student was the one who cracked the final clue.",
    },
    {
      id: 6,
      authorName: "Ms. Angela S.",
      occupation: "7th Grade Teacher",
      city: null,
      text: "Booked the catering package and it was absolutely the right call. Coordinating lunch for 35 students on a field trip is usually a nightmare. This time everything was ready when they came out of the rooms. Happy, fed students and zero chaos. Would do it again in a heartbeat.",
    },
  ],
};

/**==============================================================
 
 *    
 * 
 *  ================================================*/
/*==============================================================

==========================================*/
