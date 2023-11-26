import { getTotal } from "./AllDataList/getTotal";
export const getGiftCardPageData = () => {
  const giftcardData = {
    locationlist: getTotal().locationlist,
    activitylistSlug: getTotal().activitylistSlug,
    eventlistSlug: getTotal().eventlistSlug,
    virtualgameListSlug: getTotal().virtualgameSlug,

    pagemeta: {
      title: "Escape Room Gift Cards - All In Adventures",
      description:
        "Whether it's someone's birthday, anniversary or a holiday such as Christmas - an All In Adventures Gift Card is a perfect present for any occasion.",
      keywords:
        "escape room gift cards, escape room gift card, escape room gift certificate, escape room gift certificates, escape room gift vouchers, escape room gift voucher, all in adventures gift cards, all in adventures gift card, mystery room gift cards, mystery room gift card",
      url: "/gift-cards",
      metaindex: true,
      metaimg:
        "/assets/gn-mobile-hero/allinadventures-gift-cards-hero-mobile.jpg",
    },
    pagedata: {
      pagetitle: "BUY GIFT CARDS",
      pagesubtitle:
        "We've got your gift needs covered for birthdays, holidays, special surprises, and just about everything else in between. You'll be pleased to know that unlike a lot of other gift programs, our Gift Cards never expire! To buy or redeem Gift Cards, visit the location-specific Gift Card page to find a local store near you.",

      coverimageL:
        "/assets/gn-desktop-hero/allinadventures-gift-cards-hero-desktop.jpg",
      coverimageM:
        "/assets/gn-mobile-hero/allinadventures-gift-cards-hero-mobile.jpg",
      totalLocations: getTotal().totalLocations,
    },
    gift_faq: [
      {
        id: 1,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "How to purchase your Gift Cards?",
        ans: [
          "Pick your location, choose the amount, fill in details, add to the cart, and checkout. You'll get an email with the Gift Card number. For gifts, follow the email instructions. For physical cards, Visit your local store. ",
          '<p class="mt-2 lg:mt-3"><i><b>Note:</b> Check your spam folder if you haven&quot;t received your Gift Card(s).</i></p>',
        ],
      },
      {
        id: 2,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "How do I redeem the Gift Cards?",
        ans: [
          "Gift card holders can redeem online at <a href='https://allinadventures.com' class='text-red-600 hover:text-red-700'>www.allinadventures.com</a> or in-store where purchased. For assistance, contact your local store or call our customer service at <a href='tel:844-502-5546' class='text-red-600 hover:text-red-700'>844-502-5546</a>",
        ],
      },
      {
        id: 3,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Do Gift Cards expire?",
        ans: ["Our Gift Cards never expire and last forever."],
      },
      {
        id: 4,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Do we need to make a reservation to use a Gift Card?",
        ans: [
          "While reservations aren't required, we recommend booking in advance for your preferred experience and time slot. Walk-ins are welcome, but availability is not guaranteed.",
        ],
      },
      {
        id: 5,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "What happens if I prepay for my reservation in advance?",
        ans: [
          "For prepaid reservations, your payment will be refunded upon presenting your Gift Card at the store location.",
        ],
      },
      {
        id: 6,
        group: "GIFT_CARDS",
        category: "gift",
        ques: "Can I get a physical Gift Card instead of an electronic one?",
        ans: ["Physical Gift Cards are available at our location."],
      },
    ],
    redeemgames: [
      {
        id: 1,
        category: "escapegame",
        type: "In-Person",
        success_rate: "56",
        title: "Escape From Alcatraz",
        description:
          "You are prison guards at Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
        age: "6-99",
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "escape-from-alcatraz",
        bgimg:
          "/assets/gift-slider/allinadventures-escape-from-alcatraz-game.jpg",
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
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "treasure-island",
        bgimg: "/assets/gift-slider/allinadventures-treasure-island-game.jpg",
      },
      {
        id: 3,
        category: "escapegame",
        type: "In-Person",
        title: "Zombie Apocalypse",
        success_rate: "37",
        description:
          "You are trapped in a lab lockdown with a growing zombie horde and need to find your way out before it is too late!",
        age: "6-99",
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "zombie-apocalypse",
        bgimg: "/assets/gift-slider/allinadventures-zombie-apocalypse-game.jpg",
      },
      {
        id: 4,
        category: "escapegame",
        type: "In-Person",
        title: "Sherlock's Library",
        success_rate: "42",
        description:
          "London's top detective duo, Sherlock Holmes and Dr. John H. Watson, have been called upon to solve their next big case.",
        age: "6-99",
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "sherlocks-library",
        bgimg: "/assets/gift-slider/allinadventures-sherlocks-library-game.jpg",
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
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "black-ops",
        bgimg: "/assets/gift-slider/allinadventures-black-ops-game.jpg",
      },
      {
        id: 6,
        category: "escapegame",
        type: "In-Person",
        title: "Superhero's Adventure",
        success_rate: "61",
        description:
          "The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
        age: "6-99",
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "superheros-adventure",
        bgimg:
          "/assets/gift-slider/allinadventures-superheros-Adventure-game.jpg",
      },
      {
        id: 7,
        category: "escapegame",
        type: "In-Person",
        title: "Houdini's Magic Cell",
        success_rate: "18",
        description:
          "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
        age: "6-99",
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "houdinis-magic-cell",
        bgimg:
          "/assets/gift-slider/allinadventures-houdinis-magic-cell-game.jpg",
      },

      {
        id: 8,
        category: "escapegame",
        type: "In-Person",
        title: "Special Agent",
        success_rate: "37",
        description:
          "An international jewel thief is about to slip free, can you and your team stop them from escaping before it is too late?",
        age: "6-99",
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "special-agent",
        bgimg: "/assets/gift-slider/allinadventures-special-agent-game.jpg",
      },
      {
        id: 9,
        category: "escapegame",
        type: "In-Person",
        title: "Hollywood Premiere",
        success_rate: "45",
        description:
          "Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
        age: "6-99",
        duration: "50",
        maxplayers: "10",
        minplayers: "2",
        price: "29.89",
        slug: "hollywood-premiere",
        bgimg:
          "/assets/gift-slider/allinadventures-hollywood-premiere-game.jpg",
      },
      {
        id: 10,
        category: "escapegame",
        type: "In-Person",
        title: "Lost in The Jungle",
        success_rate: "54",
        description:
          "Having heard the mysterious sound of drums coming from the roof, you and your friends decided to check it out. Drawn by the beat, you find yourself trapped in the game! ",
        age: "6-99",
        duration: "60",
        maxplayers: "5",
        minplayers: "2",
        price: "39.95",
        slug: "lost-in-the-jungle",
        bgimg:
          "/assets/gift-slider/allinadventures-lost-in-the-jungle-game.jpg",
      },
      {
        id: 11,
        category: "escapegame",
        type: "In-Person",
        title: "Wizarding School ",
        success_rate: "47",
        description:
          "Your Potions lesson will begin in 60 minutes and you have gotten locked in the headmaster's office! You must put on your thinking cap and find a way to get out in time…",
        age: "6-99",
        duration: "60",
        maxplayers: "4",
        minplayers: "2",
        price: "39.95",
        slug: "wizarding-school",
        bgimg: "/assets/gift-slider/allinadventures-wizarding-school-game.jpg",
      },
      {
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
        price: "29.89",
        slug: "locked-in-the-lift",
        bgimg:
          "/assets/gift-slider/allinadventures-locked-in-the-lift-game.jpg",
      },

      {
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
        price: "29.89",
        slug: "magic-castle",
        bgimg: "/assets/gift-slider/allinadventures-magic-castle-game.jpg",
      },
    ],
  };

  return giftcardData;
};
