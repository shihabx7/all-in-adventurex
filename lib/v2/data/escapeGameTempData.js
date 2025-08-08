export const escapeGameThemeList = [
  "Adventure",
  "Mystery",
  "Prison Break",
  "Detective",
  "Horror",
];
export const escapeGameRecommendList = [
  "Beginners",
  "Kids",
  "Family",
  "Adults",
  "Big Group",
  "Small Group",
];
// =============================================================game data
export const escapeGameData = {
  "escape-from-alcatraz": {
    id: 1,
    gameType: "Escape Game",
    gameName: "Escape From Alcatraz",
    slug: "escape-from-alcatraz",
    activeAll: true,
    pageHeroData: {
      pageTitle: "ESCAPE FROM ALCATRAZ ESCAPE ROOM",
      pageSubTitle:
        "<p>You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/escape-from-alcatraz.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game escape from alcatraz page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_escape_from_alcatraz_theme_prison_break.svg",
        alt: "All in adventure escape game theme prison break",
        width: "205",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "64",
      price: "26.99",
      gameTheme: ["Prison Break", "Thriller", "Survival"],
      recommendFor: ["Beginners", "Small Group", "Family", "Adults"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/escape-from-alcatraz.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-escape-from-alcatraz-card-bg.png",
        alt: "all in adventures escape from alcatraz",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "treasure-island": {
    id: 2,
    gameType: "Escape Game",
    gameName: "Treasure Island",
    slug: "treasure-island",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Adventure", "Mystery"],
      recommendFor: ["Kids", "Family", "Big Group"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
        alt: "all in adventures escape game treasure island poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/treasure-island.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-treasure-island-card-bg.png",
        alt: "all in adventures treasure island card bg",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "zombie-apocalypse": {
    id: 3,
    gameType: "Escape Game",
    gameName: "Zombie Apocalypse",
    slug: "zombie-apocalypse",
    activeAll: true,
    pageHeroData: {
      pageTitle: "ZOMBIE APOCALYPSE ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Horror", "Mystery", "Survival"],
      recommendFor: ["Beginners", "Family", "Big Group"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
        alt: "all in adventures escape game zombie apocalypse poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/zombie-apocalypse.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-zombie-apoclypes-card-bg.png",
        alt: "all in adventures zombie-apocalypse alcatraz",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "sherlocks-library": {
    id: 4,
    gameType: "Escape Game",
    gameName: "Sherlock's Library...",
    slug: "sherlocks-library",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle: "<p>SHERLOCK'S LIBRARY ESCAPE ROOM</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Detective", "Thriller", "Mystery"],
      recommendFor: ["Beginners", "Kids", "Small Group"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
        alt: "all in adventures escape game sherlock's library poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/sherlocks-library.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-sherlock-library-card-bg.png",
        alt: "all in adventures sherlock's library",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "black-ops": {
    id: 5,
    gameType: "Escape Game",
    gameName: "Black Ops",
    slug: "black-ops",
    activeAll: true,
    pageHeroData: {
      pageTitle: "BLACK OPS ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Adventure", "Thriller", "Survival"],
      recommendFor: ["Beginners", "Big Group", "Kids"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
        alt: "all in adventures escape game black ops poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/black-ops.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-black-ops-card-bg.png",
        alt: "all in adventures black ops",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "superheros-adventure": {
    id: 6,
    gameType: "Escape Game",
    gameName: "Superhero's Adventure",
    slug: "superheros-adventure",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Adventure", "Mystery"],
      recommendFor: ["Beginners", "Kids", "Family"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
        alt: "all in adventures escape game superheros adventures poster",
        width: "640",
        height: "763",
      },

      video: {
        //url: "/assets/escape-games/videos/superheros-adventure.mp4",
        url: "/assets/escape-games/videos/escape-from-alcatraz.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-superheros-adventure-card-bg.png",
        alt: "all in adventures superheros adventures card bg",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "houdinis-prestige": {
    id: 7,
    gameType: "Escape Game",
    gameName: "Houdinis Prestige",
    slug: "houdinis-prestige",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Mystery", "Horror"],
      recommendFor: ["Family", "Kids", "Small Group"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
        alt: "all in adventures escape game hudinis prestige poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/houdinis-prestige.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-hudinis-prestige-card-bg.png",
        alt: "all in adventures hudinis prestige card bg",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "special-agent": {
    id: 8,
    gameType: "Escape Game",
    gameName: "Special Agent",
    slug: "special-agent",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Detective", "Thriller"],
      recommendFor: ["Beginners", "Small Group", "Kids"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
        alt: "all in adventures escape game special agent poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/special-agent.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-special-agent-card-bg.png",
        alt: "all in adventures special agent card bg",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "hollywood-premiere": {
    id: 9,
    gameType: "Escape Game",
    gameName: "Hollywood Premiere",
    slug: "hollywood-premiere",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Thriller", "Mystery"],
      recommendFor: ["Adults", "Big Group", "Beginners"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
        alt: "all in adventures escape game hollywood premire poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/escape-from-alcatraz.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-hollywood-premiere-card-bg.png",
        alt: "all in adventures escape hollywood premire bg",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "reel-of-fortune": {
    id: 14,
    gameType: "Escape Game",
    gameName: "Reel of Fortune",
    slug: "reel-of-fortune",
    activeAll: true,
    pageHeroData: {
      pageTitle: "REEL OF FORTUNE ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Thriller", "Mystery"],
      recommendFor: ["Adults", "Big Group", "Beginners"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
        alt: "all in adventures escape game hollywood premire poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/escape-from-alcatraz.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-hollywood-premiere-card-bg.png",
        alt: "all in adventures escape hollywood premire bg",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  //============================== special games
  "lost-in-the-jungle": {
    id: 10,
    gameType: "Escape Game",
    gameName: "Lost in the Jungle",
    slug: "lost-in-the-jungle",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Thriller", "Horror", "Survival", "Extreme"],
      recommendFor: ["Large Groups", "Post-game Wrap-up", "Experts"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
        alt: "all in adventures escape game lost in the jungle poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/escape-from-alcatraz.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-lost-in-the-jungle-card-bg.png",
        alt: "all in adventures lost in the jungle card bg",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  "wizarding-school": {
    id: 11,
    gameType: "Escape Game",
    gameName: "Wizarding School",
    slug: "wizarding-school",
    activeAll: true,
    pageHeroData: {
      pageTitle: "TREASURE ISLAND ESCAPE ROOM",
      pageSubTitle:
        "<p>You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!</p>",
      heroBgVideo: {
        video: {
          url: "/assets/escape-games/video-bg/treasure-sland.mp4",
        },
        videoScreen: {
          url: "/assets/escape-games/video-bg/all-in-adventure-escape-room-page-hero.jpg",
          alt: "all in adventures escape game Treasure Island page hero",
          width: "1920",
          height: "1080",
        },
      },
      themeImage: {
        url: "/assets/escape-games/theme/all_in_adventures_escape_room_treasure_island_theme_pirate_adventure.svg",
        alt: "All in adventure escape game theme pirate adventure",
        width: "274",
        height: "44",
      },
    },
    gameInfo: {
      teamSize: "2-10",
      teamSizeLabel: "Team",
      age: "6+",
      duration: "60",
      successRate: "72",
      price: "26.99",
      gameTheme: ["Thriller", "Horror", "Survival", "Extreme"],
      recommendFor: ["Large Groups", "Post-game Wrap-up", "Experts"],
      storyLineTitle: "Breakout or Bust!",
      storyLine:
        "<p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.</p><p>The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.</p>",
      storyLineBgImage: {
        url: "/assets/escape-games/storyline/escape-from-alcatraz-storyline-bg.jpg",
        alt: "Escape from alcatraz storyline",
      },
    },
    gallerySectionData: {
      galleryImages: [
        {
          id: 1,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-1.jpg",
          alt: "All in adventure escape room gallery image 1",
          width: "",
          height: "",
        },
        {
          id: 2,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-2.jpg",
          alt: "All in adventure escape room gallery image 2",
          width: "",
          height: "",
        },
        {
          id: 3,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-3.jpg",
          alt: "All in adventure escape room gallery image 3",
          width: "",
          height: "",
        },
        {
          id: 4,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-4.jpg",
          alt: "All in adventure escape room gallery image 4",
          width: "",
          height: "",
        },
        {
          id: 5,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-5.jpg",
          alt: "All in adventure escape room gallery image 5",
          width: "",
          height: "",
        },
        {
          id: 6,
          url: "/assets/escape-games/gallery/escape-from-alcatraz-gallery-6.jpg",
          alt: "All in adventure escape room gallery image 6",
          width: "",
          height: "",
        },
      ],
    },
    carouselSectionData: {
      sectionTitle: "More Escape Rooms",
      sectionSubTitle:
        "<p>More than just our Escape Rooms, many of our locations offer other experiences that your group can do as well. Check with your local venue to see what adventures await you!</p>",
      gameCarouselData: [
        {
          id: 1,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
            alt: "all in adventures escape game escape from alcatraz",
            width: "",
            height: "",
          },
          slug: "escape-from-alcatraz",
        },
        {
          id: 2,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-treasure-island-poster.jpg",
            alt: "all in adventures escape game treasure island",
            width: "",
            height: "",
          },
          slug: "treasure-island",
        },
        {
          id: 3,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-zombie-apocalypse-poster.jpg",
            alt: "all in adventures escape game zombie apocalypse",
            width: "",
            height: "",
          },
          slug: "zombie-apocalypse",
        },
        {
          id: 4,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-sherlocks-library-poster.jpg",
            alt: "all in adventures escape game sherlock's library",
            width: "",
            height: "",
          },
          slug: "sherlocks-library",
        },
        {
          id: 5,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-black-ops-poster.jpg",
            alt: "all in adventures escape game black ops",
            width: "",
            height: "",
          },
          slug: "black-ops",
        },
        {
          id: 6,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-superheros-adventures-poster.jpg",
            alt: "all in adventures escape game Superheros Adventures",
            width: "",
            height: "",
          },
          slug: "superheros-adventures",
        },
        {
          id: 7,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hudinis-prestige-poster.jpg",
            alt: "all in adventures escape game hudinis prestige",
            width: "",
            height: "",
          },
          slug: "hudinis-prestige",
        },
        {
          id: 8,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-special-agent-poster.jpg",
            alt: "all in adventures escape game special agent",
            width: "",
            height: "",
          },
          slug: "special-agent",
        },
        {
          id: 9,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-hollywood-premire-poster.jpg",
            alt: "all in adventures escape game hollywood premire",
            width: "",
            height: "",
          },
          slug: "hollywood-premire",
        },
        {
          id: 10,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-lost-in-the-jungle-poster.jpg",
            alt: "all in adventures escape game lost in the jungle",
            width: "",
            height: "",
          },
          slug: "lost-in-the-jungle",
        },
        {
          id: 11,
          carouselImage: {
            url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
            alt: "all in adventures escape game wizarding school",
            width: "",
            height: "",
          },
          slug: "wizarding-school",
        },
      ],
    },
    gameCardData: {
      poster: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-wizarding-school-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },

      video: {
        url: "/assets/escape-games/videos/escape-from-alcatraz.mp4",
        width: "",
        height: "",
      },
      cardBgImage: {
        url: "/assets/escape-games/card-bg/all-in-adventures-wizarding-school-card-bg.png",
        alt: "all in adventures escape from alcatraz",
        width: "794",
        height: "509",
      },
      text: "The Warden's keys are missing! As rookie guards, you have 60 minutes to find them, prevent a prison break, and stop a lockdown. Search the prison, solve the mystery, and secure Alcatraz's reputation. Can you succeed, or will the inmates escape?",
    },
    seoData: {
      metaTitle: "Escape From Alcatraz Escape Room | All In Adventures",
      metaDescription:
        "Escape From Alcatraz, our thrilling prison break escape room at All In Adventures! Solve puzzles, find clues, and escape before time runs out. BOOK NOW!",
      keywords:
        "escape from alcatraz, escape from alcatraz escape room, prison break escape room, prison break escape room at all in adventures, all in adventures prison break escape room,  jail break escape room, all in adventures escape from alcatraz, mystery room escape from alcatraz, alcatraz escape room, prison themed escape room, prison break escape room near me, jail break escape room near me, escape from alcatraz escape room near me, prison break escape room in us",
      metaImage: {
        url: "/assets/escape-games/poster/all-in-adventures-escape-game-escape-from-alcatraz-poster.jpg",
        alt: "all in adventures escape game escape from alcatraz poster",
        width: "640",
        height: "763",
      },
      canonicalURL:
        "https://allinadventures.com/activities/escape-from-alcatraz",
      metaRobots: null,
      structuredData: [
        {
          url: "https://allinadventures.com/activities/escape-from-alcatraz",
          name: "Escape from Alcatraz",
          "@type": "Service",
          image: [
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_1_7064c50972.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_2_f6fab78cc6.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_3_9999a30160.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_4_b529f9be2d.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_5_b499fdbd19.jpg",
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_gallery_6_6d84de0842.jpg",
          ],
          "@context": "https://schema.org",
          provider: {
            url: "https://allinadventures.com/",
            logo: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
            name: "All In Adventures",
            "@type": "Organization",
            image:
              "https://cdn.allinadventures.com/uploads/allinadventures-escape-room-hero.jpg",
            makesOffer: [
              {
                name: "1-3 Guests",
                "@type": "Offer",
                price: "32.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 3,
                  minValue: 1,
                },
              },
              {
                name: "4-6 Guests",
                "@type": "Offer",
                price: "29.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  maxValue: 6,
                  minValue: 4,
                },
              },
              {
                name: "7+ Guests",
                "@type": "Offer",
                price: "26.99",
                priceCurrency: "USD",
                eligibleQuantity: {
                  "@type": "QuantitativeValue",
                  minValue: 7,
                },
              },
            ],
            priceRange: "$26.99-$32.99",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+1-844-502-5546",
              contactType: "Customer Service",
              availableLanguage: "English",
            },
          },
          description:
            "You are prison guards at Alcatraz and the Warden's keys have gone missing! Can you find them before there is an escape attempt?",
          serviceType: "Escape Room Experience",
          additionalType: "http://www.productontology.org/id/Escape_room",
          additionalProperty: [
            {
              name: "Team Size",
              "@type": "PropertyValue",
              value: "2-10",
            },
            {
              name: "Duration",
              "@type": "PropertyValue",
              value: "60 minutes",
            },
            {
              name: "Success Rate",
              "@type": "PropertyValue",
              value: "64%",
            },
          ],
        },
        {
          name: "ESCAPE FROM ALCATRAZ ESCAPE ROOM GAME TRAILER | ALL IN ADVENTURES",
          "@type": "VideoObject",
          "@context": "https://schema.org",
          duration: "PT2M30S",
          embedUrl: "https://youtu.be/TlhTN4eqIK0?si=b1-pyqCY-DmtgBDe",
          publisher: {
            logo: {
              url: "https://allinadventures.com/assets/svg/All-In-Adventures-Logo.svg",
              "@type": "ImageObject",
            },
            name: "All In Adventures",
            "@type": "Organization",
          },
          contentUrl: "https://www.youtube.com/watch?v=TlhTN4eqIK0",
          uploadDate: "2023-09-01T08:00:00-04:00",
          description:
            "The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful.",
          thumbnailUrl:
            "https://cdn.allinadventures.com/uploads/allinadventures_escape_from_alcatraz_video_39cd7ec18f.jpg",
        },
        {
          "@type": "BreadcrumbList",
          "@context": "https://schema.org",
          itemListElement: [
            {
              item: "https://allinadventures.com/",
              name: "Home",
              "@type": "ListItem",
              position: 1,
            },
            {
              item: "https://allinadventures.com/activities",
              name: "Activities",
              "@type": "ListItem",
              position: 2,
            },
            {
              item: "https://allinadventures.com/activities/escape-from-alcatraz",
              name: "Escape from Alcatraz",
              "@type": "ListItem",
              position: 3,
            },
          ],
        },
      ],
    },
  },
  //============================== other games
};
