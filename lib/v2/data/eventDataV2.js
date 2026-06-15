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
          "1-hour private escape room (your group only — no strangers)",
          "Up to 10 players in the game",
          "2-hour private party room",
          "Basic supplies — plates, napkins, and utensils",
          "FREE digital birthday invitations (printable)",
          "$30 gift card for the birthday guest",
        ],
      },
      {
        id: 2,
        infoTitle: "OPTIONAL CATERING ADD-ON",
        titleSubText: "(add at checkout)",
        infoList: [
          "Standard Package: Pizza, cookie cake & unlimited drinks — $19.99/person (min. 6 guests)",
          "Extra Pizza — $26.99 each",
          "Extra Cookie Cake — $25.00 each",
          "Big group? Contact your local store and we'll handle it",
        ],
      },
      {
        id: 3,
        infoTitle: "GOOD TO KNOW",
        titleSubText: null,
        infoList: [
          "Store-bought food is welcome — no homemade food permitted for health and safety",
          "Guests may bring decorations but must take everything down after the party",
          "Kids 13 and under must have at least one adult (18+) in the room during the game",
          "Non-playing adults supervising the group get in FREE",
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
      ctaBtnLabel: "TELL US ABOUT YOUR PARTY",
    },
  },

  "team-building": {
    packageIncludeList: [
      {
        id: 1,
        infoTitle: "WHAT'S INCLUDED IN EVERY PACKAGE",
        titleSubText: null,
        infoList: [
          "1-hour private escape room (your group only — no strangers)",
          "Up to 10 players per room",
          "2-hour private room for debrief and celebration",
          "Basic supplies — plates, napkins, and utensils",
          "Non-participating observers always welcome and always free",
        ],
      },
      {
        id: 2,
        infoTitle: "OPTIONAL CATERING ADD-ON ",
        titleSubText: "(add at checkout)",
        infoList: [
          "Standard Package: Pizza, cookie cake & unlimited drinks — $19.99/person (min. 6 guests)",
          "Extra Pizza — $26.99 each",
          "Extra Cookie Cake — $25.00 each",
          "Big group? Contact your local store and we'll handle it",
        ],
      },
      {
        id: 3,
        infoTitle: "GOOD TO KNOW",
        titleSubText: null,
        infoList: [
          "All rooms are 100% private — your group only, no strangers",
          "Store-bought food is welcome — no homemade food permitted for health and safety",
          "Non-participating observers are always welcome at no charge",
          "Players 13 and under require at least one adult (18+) in the room during the game",
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
  "school-events": {
    packageIncludeList: [
      {
        id: 1,
        infoTitle: "WHAT'S INCLUDED IN EVERY PACKAGE",
        titleSubText: null,
        infoList: [
          "1-hour private escape room (your group only — no strangers)",
          "Up to 10 players per room",
          "2-hour private room for debrief and celebration",
          "Basic supplies — plates, napkins, and utensils",
          "Teachers and chaperones who sit out play for FREE",
        ],
      },
      {
        id: 2,
        infoTitle: "OPTIONAL CATERING ADD-ON ",
        titleSubText: "(add at checkout)",
        infoList: [
          "Standard Package: Pizza, cookie cake & unlimited drinks — $19.99/person (min. 6 guests)",
          "Extra Pizza — $26.99 each",
          "Extra Cookie Cake — $25.00 each",
          "Big group? Contact your local store and we'll handle it",
        ],
      },
      {
        id: 2,
        infoTitle: "GOOD TO KNOW",
        titleSubText: null,
        infoList: [
          "Store-bought food is welcome — no homemade food permitted for health and safety",
          "Students 13 and under must have at least one adult (18+) in the room during the game",
          "Non-playing teachers and chaperones supervising the group get in FREE",
          "Multiple rooms run simultaneously for larger groups — no one waits around",
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
      infoHtmlText:
        "<p>Bringing a full class, multiple grades, or a large youth group? We've got you. We regularly host school groups of 20, 30, 50, and well beyond — multiple rooms running simultaneously so every student plays at the same time. Our events team handles every detail from room coordination to catering.</p>",
      ctaBtnLabel: "TELL US ABOUT YOUR SCHOOL EVENT",
    },
  },
};

/**============================================================== testimonials================================================*/
export const feedBackSectionHtmlTextList = {
  "birthday-party": [
    "<div class='flex flex-col space-y-3'>",
    "<p>Kids love the adventure. Teens love the challenge. Adults love that it doesn't feel like a kids' party — until they're the loudest ones in the room.</p>",
    "<p><strong>Here's how it works:</strong> Your whole group gets a private themed game room, 60 minutes on the clock, and one mission — solve the puzzles, crack the clues, and escape together before time runs out. No experience needed. No wrong way to play. Just your people, fully locked in, having the time of their lives.</p>",
    "<p>Then your own private party room to celebrate the win after. Trusted by over a million guests across the country. Zero boring birthdays.</p>",
    "<p>Kids as young as 6 are welcome — and any adult supervising without playing gets in FREE.</p>",
    "</div>",
  ],
  "team-building": [
    "<div class='flex flex-col space-y-3'>",
    "<p>No trust falls. No awkward icebreakers. No one checking their phone under the table.</p>",
    "<p><strong>Here's how it works:</strong> your whole team gets a private themed room, 60 minutes on the clock, and one mission — solve the puzzles, crack the clues, and escape together before time runs out. No experience needed. No assigned roles. Just your people, fully locked in, working together in a way that no conference room ever made possible.</p>",
    "<p>And here's what makes it work beyond the fun: in 60 minutes you'll see who leads, who listens, who thrives under pressure, and who finds the clue everyone else missed. Real collaboration. Real results. Zero forced participation.</p>",
    "<p>Not a corporate group? No problem. We're the perfect venue for any group looking for something private, genuinely fun, and completely unforgettable — bachelor parties, family reunions, graduation celebrations, date nights, and everything in between.</p>",
    "<p>Trusted by companies, HR teams, and group organizers across the country. Over a million guests served. Zero boring group events.</p>",
    "<p>Non-participating guests and observers are always welcome — and always free.</p>",
    "</div>",
  ],
  "school-events": [
    "<div class='flex flex-col space-y-3'>",
    "<p>Every teacher knows the look. The one where students are completely locked in — not because they have to be, but because they genuinely can't help it.</p>",
    "<p><strong>Here's how it works:</strong> your whole group gets a private themed room, 60 minutes on the clock, and one mission — solve the puzzles, crack the clues, and escape together before time runs out. No experience needed. Every student gets a role. Every contribution matters.</p>",
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
      city: null,
      authorName: "Rachel M.",
      text: "Third year in a row doing birthdays here. My kids refuse to go anywhere else and honestly I get it. Every room feels fresh, the staff is fantastic, and the private party room means I'm not fighting for table space anywhere. We're locked in for life.",
    },
    {
      id: 2,
      city: null,
      authorName: "Brian K.",
      text: "My 12-year-old was convinced it would be lame and spent the entire car ride complaining. He was the last one who wanted to leave. He's already recruited three friends to come for their birthdays. I've never been so happy to be proven right.",
    },
    {
      id: 3,
      city: null,
      authorName: "Sofia R.",
      text: "Just the two of us for my boyfriend's birthday. Wasn't sure a small group would work. It was honestly perfect. Intimate, competitive, and we learned a lot about how each other thinks under pressure. Turns out he's brilliant. I'm better under pressure. Great team.",
    },
    {
      id: 4,
      city: null,
      authorName: "Tanya S.",
      text: "Was worried about the cost for our group size. Completely reasonable, way less than I expected for everything you get. Better value than bowling or a movie and ten times more memorable. We talked about it the whole drive home.",
    },
    {
      id: 5,
      city: null,
      authorName: "Carol B.",
      text: "My granddaughter wanted her birthday here and I'll be honest… I planned to just watch. Twenty minutes in I was the one shouting at everyone to look behind the painting. I'm 67. I have never felt cooler in my life.",
    },
    {
      id: 6,
      city: null,
      authorName: "Ashley M.",
      text: "My kids are 7 and 11 and I wasn't sure the younger one would keep up. Within ten minutes she was leading the whole group, solving clues that had the adults completely stumped. This is our birthday tradition now. No question.",
    },
    {
      id: 7,
      city: null,
      authorName: "Danielle K.",
      text: "My son has sensory sensitivities and I always stress about new venues. The staff were so patient and attentive the entire time. He came out of that room absolutely beaming. As a mom that's all I ever want. We'll be back.",
    },
    {
      id: 8,
      city: null,
      authorName: "Tanya R.",
      text: "Three kids with three completely different opinions on what makes a good birthday. First time all three agreed it was the best one yet. My youngest is already planning her birthday here and it's six months away.",
    },
    {
      id: 9,
      city: null,
      authorName: "Nicole B.",
      text: "I was the mom who planned to sit in the party room and scroll my phone. Ended up being the one who found the hidden key in the Alcatraz room. My kids have never looked at me the same way since haha in the absolute best way.",
    },
    {
      id: 10,
      city: null,
      authorName: "Jaylen F.",
      text: "Our whole friend group has wildly different interests and it's always hard to agree on anything. This was the first time in years everyone said it was the best night. No arguments. No phones. Just us completely losing our minds trying to escape a zombie apocalypse.",
    },
  ],
  "team-building": [
    {
      id: 1,
      city: null,
      authorName: "Priya S.",
      occupation: "People & Culture Manager",
      text: "What I loved most was what it revealed about my team. Who stays calm under pressure, who takes initiative, who holds the group together when things get overwhelming. Better insight than any personality test I've ever given them — and infinitely more fun.",
    },

    {
      id: 2,
      city: null,
      authorName: "David L.",
      occupation: "VP of Sales",
      text: "Brought 30 people from our sales team. Three rooms running simultaneously, everyone finished within minutes of each other. The debrief conversation afterward was one of our best team discussions all year.",
    },

    {
      id: 3,
      city: null,
      authorName: "James R.",
      occupation: "Operations Manager",
      text: "Remote team, rare in-person event, enormous pressure to get it right. Easiest planning experience I've ever had. Highest-energy event we've ever done. Still talking about it two months later.",
    },
    {
      id: 4,
      city: null,
      authorName: "Chris V.",
      occupation: "Marketing Director",
      text: "I walked in completely skeptical. I walked out planning our next one. The Alcatraz room had us completely stumped then something just clicked. Genuinely one of the best nights our team has had together as adults.",
    },
    {
      id: 5,
      city: null,
      authorName: "Kayla R.",
      text: "Bachelorette party of ten. Zombie Apocalypse. We didn't escape and it was the funniest, most chaotic, most memorable thing we've done together in years. The staff made it absolutely perfect from start to finish.",
    },
    {
      id: 6,
      city: null,
      authorName: "Marcus T.",
      text: "Family reunion, ages 9 to 71, three rooms at the same time. Grandma's team almost won. The conversation at dinner after was the best our family has had in years. We're already planning next year.",
    },

    {
      id: 7,
      city: null,
      authorName: "Tanya S.",
      occupation: "Office Manager",
      text: "Was worried about the cost for our group size. Way less than expected for everything included. Better value than a dinner out and ten times more memorable. The team is already asking when we're going back.",
    },

    {
      id: 8,
      city: null,
      authorName: "Brian K.",
      occupation: "CEO",
      text: "Eight years of team building events. This was the best one. Not even close. Catering package made it completely turnkey. Our events coordinator said it was the smoothest outing she's ever run. Already locked in next year's date. ",
    },
    {
      id: 9,
      city: null,
      authorName: "Jaylen F.",
      text: "Our friend group has wildly different interests and it's always impossible to agree. This was the first time in years everyone said it was the best night. No arguments. No phones. Just us losing our minds trying to escape together.",
    },

    {
      id: 10,
      city: null,
      authorName: "Sofia R.",
      text: "Did this for my boyfriend's birthday — just the two of us. Intimate, competitive, and we learned more about how each other thinks under pressure than we have in two years together. Turns out he's brilliant. I'm better under pressure. Great team.",
    },
  ],
  "school-events": [
    {
      id: 1,
      city: null,
      authorName: "Ms. Patricia W.",
      occupation: "5th Grade Teacher",
      text: "I've been teaching for 14 years. I've never seen my students that engaged on a field trip. The quietest kid in my class found the key that unlocked the final puzzle. The look on his face is something I won't forget.",
    },
    {
      id: 2,
      city: null,
      authorName: "Mr. Jason T.",
      occupation: "Social Studies Teacher",
      text: "The curriculum connection made admin approval simple. My principal said yes without a second question. The students debriefed on their own on the bus ride back. That never happens.",
    },

    {
      id: 3,
      city: null,
      authorName: "Ms. Angela S.",
      occupation: "Special Education Teacher",
      text: "Mixed abilities, mixed grades, mixed energy levels. The Game Master handled every single student with patience and enthusiasm. Every kid came out proud of something they contributed. That's everything.",
    },

    {
      id: 4,
      city: null,
      authorName: "Coach Marcus B.",
      occupation: "Youth Group Leader",
      text: "Teenagers who are impossible to impress. Not one phone came out the entire hour. They were collaborating, strategizing, and genuinely having the time of their lives. Already booked next year.",
    },

    {
      id: 5,
      city: null,
      authorName: "Ms. Rebecca H.",
      occupation: "7th Grade Teacher",
      text: "The catering package saved my life. Feeding 35 students on a field trip is usually a logistical nightmare. This time it was just — done. Highly recommend.",
    },

    {
      id: 6,
      city: null,
      authorName: "Mr. Kevin D.",
      occupation: "Assistant Principal",
      text: "Completely reasonable for what you get. Way more memorable than a museum trip and the students were talking about it weeks later. Our whole grade is coming back next semester.",
    },

    {
      id: 7,
      city: null,
      authorName: "Mrs. Linda K.",
      occupation: "PTA President",
      text: "Three rooms running at the same time, 42 students, zero chaos. The staff coordinated everything flawlessly. Our PTA voted unanimously to make this our annual trip. That's never happened before either.",
    },

    {
      id: 8,
      authorName: "Mr. David R.",
      occupation: "STEM Coordinator",
      city: null,
      text: "My STEM students asked to write reflections about the Zombie Apocalypse room for extra credit. Extra credit. On a Friday. I didn't even offer it — they asked. Book this immediately.",
    },

    {
      id: 9,
      authorName: "Ms. Jennifer H.",
      occupation: "6th Grade Teacher",
      city: null,
      text: "The kids came out of that room working together in a way I hadn't seen all semester. Something clicked in there. I don't know exactly what — but I'm coming back to find out.",
    },
    {
      id: 10,
      city: null,
      authorName: "Sarah M.",
      occupation: "Youth Program Director",
      text: "Our youth group does an annual outing and this was the best one yet by a mile. Every single kid was locked in from start to finish. The staff were incredible and made the whole thing completely effortless to organize.",
    },
  ],
};

/*============= birthday party faq ================================================*/
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
      "<p>Absolutely. We regularly host groups of 20, 30, 50, and well beyond. Our events team handles all the details — multiple rooms, custom packages, catering, the works. Call us at <a href='tel:[PHONE]' class='font-bold'>[PHONE]</a> or email <a href='mailto:[EMAIL]' class='font-bold'>[EMAIL]</a> and we'll build the perfect package for your group.</p>",
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

export const eventFaqListV2 = {
  "birthday-party": [
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
        "<p>Absolutely. We regularly host groups of 20, 30, 50, and well beyond. Our events team handles all the details — multiple rooms, custom packages, catering, the works. Call us at <a href='tel:[PHONE]' class='font-bold'>[PHONE]</a> or email <a href='mailto:[EMAIL]' class='font-bold'>[EMAIL]</a> and we'll build the perfect package for your group.</p>",
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
  ],
  "team-building": [
    {
      id: 1,
      faqQuestion: "What exactly is an escape room?",
      faqAnswer:
        "An escape room is a live, immersive challenge where your group works together to solve puzzles, find hidden clues, and complete a mission — all within 60 minutes. Every room has a unique theme and storyline, and the clock is always ticking. It's part puzzle, part team challenge, and 100% something your group will be talking about long after it's over.",
    },
    {
      id: 2,
      faqQuestion: "Do we need any prior experience?",
      faqAnswer:
        "Not at all. Every game is designed for first-timers and experienced players alike. Before the clock starts, your Game Master walks the entire group through how it works, what to expect, and the rules. Everyone starts on equal footing — which is exactly what makes it such a powerful experience for any kind of group.",
    },
    {
      id: 3,

      faqQuestion: "Is it competitive or collaborative?",
      faqAnswer:
        "Both — and that's what makes it so effective. Your group competes against the clock, not each other. Every person's contribution matters and the whole team either escapes together or doesn't. There's no individual winner or loser — just a shared experience that brings people together whether they win or come agonizingly close.",
    },
    {
      id: 4,
      faqQuestion: "Is it suitable for all fitness levels and abilities?",
      faqAnswer:
        "The escape room itself is 60 minutes. Add the pre-game briefing and room time after and you're looking at 2 to 3 hours total — easy to fit into a workday, an after-hours event, or a full day out",
    },
    /* ====================
    {
      id: 5,
      faqQuestion: "Is it suitable for all fitness levels and abilities?",
      faqAnswer:
        "Yes. Our rooms are mentally challenging, not physically demanding. There's no running, climbing, or anything strenuous. If you have specific accessibility concerns, contact your local store directly and we'll make sure everyone is accommodated.",
    },
   ===================================== */
    {
      id: 6,
      faqQuestion: "What makes escape rooms effective for team building?",
      faqAnswer:
        "Escape rooms put your team in a situation where every real workplace skill is tested in real time — communication, leadership, problem-solving, time management, and collaboration. There's no way to fake it and no way to opt out. The results are visible, immediate, and they stick long after the event is over.",
    },
    {
      id: 7,
      faqQuestion: "What's included in a group package?",
      faqAnswer:
        "Every package includes a 1-hour private escape room for up to 10 players per room, 2 hours in your own private room after, and basic supplies — plates, napkins, and utensils. Non-participating observers always get in free. Optional catering can be added at checkout.",
    },
    {
      id: 8,
      faqQuestion: "What's the difference between the three packages?",
      faqAnswer:
        "All three packages include the same great experience — the difference is the escape room theme your group chooses. Escape From Alcatraz for a historical thriller, Treasure Island for a beginner-friendly adventure great for first-timers, or Zombie Apocalypse for groups ready for a genuine challenge. Same inclusions, different adventure.",
    },

    {
      id: 9,
      faqQuestion: "Can we add catering?",
      faqAnswer:
        "Yes — and for group events it makes the whole day completely effortless. Add our Standard Catering Package at checkout for just $19.99/person (minimum 6 guests) and we'll have pizza, cookie cake, and unlimited drinks ready when your group walks out. Add extra pizzas for $26.99 each or an extra cookie cake for $25.00. For larger groups, contact your local store directly.",
    },
    {
      id: 10,
      faqQuestion: "Can we bring our own food?",
      faqAnswer:
        "Yes. Store-bought food is always welcome. The only rule is no homemade food — all food and drinks must be store-bought or commercially prepared for health and safety reasons.",
    },
    {
      id: 11,
      faqQuestion: "Is the room private?",
      faqAnswer:
        "100%. Your room is exclusively yours — no sharing with other groups, no strangers walking through. Your team only.",
    },
    {
      id: 12,
      faqQuestion: "Can non-participating guests wait during the game?",
      faqAnswer:
        "Absolutely. Team members, observers, or anyone who prefers to sit out are welcome to relax in the private room the entire time — at no additional charge. Nobody is ever pressured to play.",
    },
    /*   =========================
    {
      id: 13,
      faqQuestion: "Can non-participating guests wait during the game?",
      faqAnswer:
        "Absolutely. Team members, observers, or anyone who prefers to sit out are welcome to relax in the private room the entire time — at no additional charge. Nobody is ever pressured to play.",
    },
  ===================================  */
    {
      id: 14,
      faqQuestion: "Do you host events other than corporate team building?",
      faqAnswer:
        "Absolutely. While team building is our most popular group experience, we regularly host all kinds of private group events — bachelor and bachelorette parties, family reunions, graduation celebrations, date nights, private parties, and more. Same private room, same great experience, different occasion.",
    },
    {
      id: 15,
      faqQuestion: "Do you offer Mobile Mystery — can you come to us?",
      faqAnswer:
        "Yes! At select locations, our Mobile Mystery option brings the full escape room experience directly to your office, conference room, or event venue. No travel required for your team. Contact our events team to check availability in your area.",
    },

    {
      id: 16,

      faqQuestion: "What is the minimum age to play?",
      faqAnswer:
        "Players as young as 6 are welcome. For players 13 and under, at least one adult (18+) must be present in the room during the game. Non-participating adults supervising the group always get in free.",
    },
    {
      id: 17,
      faqQuestion: "How many people can play at once?",
      faqAnswer:
        "Each room holds up to 10 players at a time. For larger groups we run multiple rooms simultaneously — everyone plays at the same time, nobody waits around. We regularly host groups of 50, 100, and beyond.",
    },

    {
      id: 18,
      faqQuestion: "Is there a minimum group size?",
      faqAnswer:
        "Our rooms accommodate as few as 2 players. For the most engaging team building experience we recommend at least 4 to 6 people per room.",
    },
    {
      id: 19,
      faqQuestion: "Can you accommodate our entire company?",
      faqAnswer:
        "Absolutely. We run multiple rooms simultaneously for groups of any size — 20, 30, 50, and well beyond — so everyone plays at the same time. Contact our events team at <a class='font-bold' href='tel:[PHONE]'>[PHONE]</a> or <a class='font-bold' href='mailto:[EMAIL]'>[EMAIL]</a> and we'll build a package around your headcount, schedule, and budget.",
    },
    {
      id: 20,
      faqQuestion: "How do I book a group event?",
      faqAnswer:
        "Simply select your location, choose your package, and complete your booking online. Catering can be added at checkout. For groups larger than 10, custom packages, Mobile Mystery, or bookings within 7 days, contact our events team directly.",
    },
    {
      id: 21,

      faqQuestion: "How far in advance should we book?",
      faqAnswer:
        "At least 7 days in advance to guarantee your preferred date and time online. For larger groups or custom events, the earlier the better — popular dates fill quickly. Need it sooner? Submit an enquiry below and our manager will reach out personally as quickly as possible.",
    },
    {
      id: 22,
      faqQuestion: "What is your cancellation policy?",
      faqAnswer:
        "All bookings are final — we do not offer refunds or cancellations. Cancellation Protection is available at checkout for peace of mind — full refund minus an 8% fee if cancelled at least 24 hours before your booking. Most reservations can be rescheduled online through your confirmation email at least 48 hours in advance.",
    },
    {
      id: 23,

      faqQuestion: "What if we need to reschedule?",
      faqAnswer:
        "Most bookings can be rescheduled online through your confirmation email at least 48 hours before your event. Need to change within 48 hours? Contact your local store directly and we'll do our best to work something out.",
    },
    {
      id: 24,
      faqQuestion: "What should the group wear?",
      faqAnswer:
        "Comfortable, casual clothes and closed-toe shoes. No special equipment or preparation needed — just show up ready to think fast and work together.",
    },
    {
      id: 25,
      faqQuestion: "What should we bring?",
      faqAnswer:
        "Just your group and your competitive spirit. We provide all the supplies. If you're adding store-bought food, bring that along too.",
    },
    {
      id: 26,
      faqQuestion: "Is there parking?",

      faqAnswer:
        "Yes — free mall parking is available right outside with plenty of space for larger groups. Easy in, easy out. If you have specific needs for buses or large vehicles, contact your local store in advance and we'll coordinate.",
    },
  ],
  "school-events": [
    {
      id: 1,
      faqQuestion: "What exactly is an escape room?",
      faqAnswer:
        "An escape room is a live, hands-on adventure where your group works together to solve puzzles, find hidden clues, and complete a mission — all within 60 minutes. Every room has a unique theme and storyline, and the clock is always ticking. It's part puzzle, part adventure, and 100% something your students will be talking about long after the bell rings.,",
    },

    {
      id: 2,
      faqQuestion: "Do students need any prior experience?",
      faqAnswer:
        "Not at all. Every game is designed for first-timers of all ages and skill levels. Before the clock starts, your Game Master walks the entire group through how it works, what to expect, and the rules. Every student starts on equal footing — which is part of what makes it such a powerful experience for a school group.",
    },
    {
      id: 3,
      faqQuestion: "Is it scary or appropriate for all ages?",
      faqAnswer:
        "Completely appropriate. Our rooms are built around adventure, mystery, and problem-solving — not fear. There are no jump scares, no horror elements, and nothing designed to frighten younger students. Even Zombie Apocalypse is about science and racing the clock, not anything frightening. Students ages 6 and up are welcome.",
    },
    {
      id: 4,
      faqQuestion: "What if a student gets stuck or frustrated?",
      faqAnswer:
        "Your Game Master monitors the room throughout and steps in with hints whenever the group needs a nudge. Nobody gets left stuck or frustrated — we want every student to walk out with a win. Our staff are experienced at keeping the energy positive for all ages and skill levels.",
    },
    {
      id: 5,
      faqQuestion: "How long does the whole event last?",
      faqAnswer:
        "The escape room runs 60 minutes. Add the pre-game briefing and room time after and you're looking at 2 to 3 hours total — easy to plan around a school schedule or after-school program.",
    },
    {
      id: 6,
      faqQuestion: "How does this connect to our curriculum?",
      faqAnswer:
        "Several rooms align directly with core subject areas. Escape From Alcatraz connects to history and social studies. Treasure Island ties into literature and narrative. Zombie Apocalypse pairs naturally with science and biology. Sherlock's Library (at select locations) supports logical reasoning and reading comprehension. All rooms develop critical thinking, communication, collaboration, and problem-solving — skills that connect to every subject and grade level.",
    },
    {
      id: 7,
      faqQuestion:
        "Can I use this to justify the trip to my principal or parents?",
      faqAnswer:
        "Absolutely — and many teachers do exactly that. The skills students develop align with Common Core and 21st Century Learning standards. We're happy to provide any supporting information you need to help get your trip approved.",
    },
    {
      id: 8,
      faqQuestion: "What's included in a group package?",
      faqAnswer:
        "Every package includes a 1-hour private escape room for up to 10 students per room, 2 hours in your own private room after, basic supplies — plates, napkins, and utensils — and free entry for all non-playing teachers and chaperones. Optional catering can be added at checkout.",
    },
    {
      id: 9,
      faqQuestion: "What's the difference between the three packages?",
      faqAnswer:
        "All three packages include the same great experience — the difference is the escape room theme your group chooses. Escape From Alcatraz for a historical thriller, Treasure Island for a beginner-friendly adventure perfect for younger students, or Zombie Apocalypse for older groups ready for a real challenge. Same inclusions, different adventure.",
    },
    {
      id: 10,
      faqQuestion: "Can we add catering?",
      faqAnswer:
        "Yes — and for school groups it makes the day completely effortless. Add our Standard Catering Package at checkout for just $19.99/person (minimum 6 guests) and we'll have pizza, cookie cake, and unlimited drinks ready when your group walks out. Add extra pizzas for $26.99 each or an extra cookie cake for $25.00. For larger groups, contact your local store directly.",
    },
    {
      id: 11,
      faqQuestion: "Can we bring our own food?",
      faqAnswer:
        "Yes. Store-bought food is always welcome. The only rule is no homemade food — all food and drinks must be store-bought or commercially prepared for health and safety reasons.",
    },

    {
      id: 12,
      faqQuestion: "Is the room private?",
      faqAnswer:
        "100%. Your group's room is exclusively yours — no sharing with other groups, no strangers. It's your students' space for the full duration.",
    },
    {
      id: 13,
      faqQuestion: "Can teachers and chaperones wait during the game?",
      faqAnswer:
        "Absolutely. Teachers and chaperones who aren't playing are welcome to relax in the private room the entire time — and they always get in free.",
    },
    {
      id: 14,
      faqQuestion: "What is the minimum age to play?",
      faqAnswer:
        "Students as young as 6 can play. For students 13 and under, at least one adult (18+) must be present in the room during the game. Non-participating adults supervising the group always get in free.",
    },

    {
      id: 15,
      faqQuestion: "Is this suitable for all grade levels?",
      faqAnswer:
        "Yes. We recommend Treasure Island for elementary students for its beginner-friendly design and 72% success rate. Escape From Alcatraz works well from middle school up. Zombie Apocalypse and Sherlock's Library are best suited for middle and high school groups ready for a genuine challenge.",
    },
    {
      id: 16,
      faqQuestion: "How many students can play at once?",
      faqAnswer:
        "Each room holds up to 10 players at a time. For larger groups we run multiple rooms simultaneously — every student plays at the same time, nobody waits around. We regularly host school groups of 50, 100, and beyond.",
    },
    {
      id: 17,
      faqQuestion: "Is parental permission required?",
      faqAnswer:
        "This follows your school's standard field trip process. We recommend using your existing permission slip template. If you need any information about our experience to include in your permission materials, we're happy to help.",
    },
    {
      id: 18,
      faqQuestion: "Can you accommodate an entire grade level?",
      faqAnswer:
        "Absolutely. We've coordinated full grade-level events with multiple rooms running simultaneously so every student plays at the same time. Contact our events team at <a class='font-bold' href='tel:[PHONE]'>[PHONE]</a> or <a class='font-bold' href='mailto:[EMAIL]'>[EMAIL]</a> and we'll build a plan around your school day.",
    },
    {
      id: 19,
      faqQuestion: "What if we can't transport students off campus?",
      faqAnswer:
        "That's exactly what our Mobile Mystery option is for. We bring the full escape room experience directly to your school — gym, cafeteria, or common area. Available at select locations. Contact our events team to check availability.",
    },
    {
      id: 20,
      faqQuestion: "How do I book a school group?",
      faqAnswer:
        "Simply select your location, choose your package, and complete your booking online. Catering can be added at checkout. For groups larger than 10, custom packages, or bookings within 7 days, contact our events team directly.",
    },
    {
      id: 21,
      faqQuestion: "How far in advance should we book?",
      faqAnswer:
        "At least 7 days in advance to secure your preferred date online. For large school groups, the earlier the better — popular dates fill fast. Need it sooner? Submit an enquiry below and our manager will reach out as quickly as possible.",
    },
    {
      id: 22,
      faqQuestion: "What is your cancellation policy?",
      faqAnswer:
        "All bookings are final — we do not offer refunds or cancellations. Cancellation Protection is available at checkout — full refund minus an 8% fee if cancelled at least 24 hours before your event. Most reservations can be rescheduled online through your confirmation email at least 48 hours in advance.",
    },
    {
      id: 23,
      faqQuestion: "What if we need to reschedule?",
      faqAnswer:
        "Most bookings can be rescheduled online through your confirmation email at least 48 hours before your event. Need to change within 48 hours? Contact your local store directly and we'll do our best.",
    },
    {
      id: 24,
      faqQuestion: "What should students wear?",
      faqAnswer:
        "Comfortable clothes and closed-toe shoes. No special gear needed — just show up ready to think, move, and work together.",
    },
    {
      id: 25,
      faqQuestion: "What should we bring?",
      faqAnswer:
        "Just your group and your competitive spirit. We provide all the supplies. If you're adding store-bought food, bring that along too.",
    },
    {
      id: 26,
      faqQuestion: "Is there parking for school buses?",
      faqAnswer:
        "Yes — mall parking is available with plenty of space including room for buses and larger vehicles. If you have specific drop-off needs for a large group, contact your local store in advance and we'll coordinate.",
    },
  ],
};

/*================


//=============================================


=================================*/
