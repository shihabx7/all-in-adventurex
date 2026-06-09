import {
  feedBackSectionHtmlTextList,
  feedTestimonialList,
  customerReviewList,
} from "./eventDataV2";
export const eventPageDataV2 = {
  "birthday-party": {
    id: 1,
    PageHeroData: {
      eyeBrewText: "ESCAPE ROOM BIRTHDAY PARTY",
      title: "THE BIRTHDAY PARTY THEY'LL BE TALKING ABOUT ALL YEAR",
      partyRiboon: true,
      description:
        "Pick one of our 3 party packages — private escape room, party room, and optional catering all sorted. Prefer to keep it simple? Book just the game and head to the mall restaurants after. Either way, one booking and zero stress.",
      videoData: {
        videoUrl:
          "/assets/event-page-v2/birthday/birthday-party-hero-video.mp4",
        videoType: "video/mp4",
        poster: {
          url: "/assets/event-page-v2/birthday/birthday-party-hero-video-poster.jpg",
          width: 800,
          height: 450,
          alt: "birthday party Hero Video Poster",
        },
      },
    },
    FeedBackTestimonialSliderData: {
      title: "THE BIRTHDAY PARTY THAT WORKS FOR EVERY AGE ON THE GUEST LIST",
      descriptionHtml: feedBackSectionHtmlTextList["birthday-party"]
        ? feedBackSectionHtmlTextList["birthday-party"].join("")
        : null,
      eventPoster: {
        url: "/assets/event-page-v2/birthday/birthday-party-celebration.png",
        width: 560,
        height: 564,
        alt: "birthday party celebration",
      },

      testimonialData: feedTestimonialList["birthday-party"],
    },
    CheckOutPartyPackagesData: {
      title: "PICK YOUR PACKAGE AND LEAVE THE REST TO US",
      description:
        "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
    },
    EventPageEscapeRoomCarouselData: {
      sectionTitle: "SKIP THE PACKAGE — JUST BOOK THE GAME",
      sectionSubTitle:
        " No package, no extras — just 60 minutes of pure escape room fun. Book any of our rooms the same way our regular players do, grab a bite at any of the mall restaurants right after, and call it a great group outing. Simple, flexible, no fuss.",
    },
    MobileMysterySectionData: {
      showCardSection: false,
      sectionTitle: "Can't Come to Us? We'll Bring the Adventure to You.",
      sectionSubTitle:
        "Introducing Mobile Mystery — our portable escape room experience that comes directly to your office, conference room, or event venue. No travel. No logistics. No coordinating transportation for your entire team. Same immersive, high-energy team building challenge — delivered right to your door.",
    },
    EventPageGalleryData: {
      title: "ESCAPE ROOM BIRTHDAY PARTY GALLERY ",
      description:
        "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
      galleryImages: [
        {
          id: 1,
          url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
          width: 400,
          height: 400,
          alt: "birthday party Gallery Image 1",
        },
        {
          id: 2,
          url: "/assets/event-page-v2/birthday/birthday-parties-gallery-02.png",
          width: 400,
          height: 400,
          alt: "birthday party Gallery Image 2",
        },
        {
          id: 3,
          url: "/assets/event-page-v2/birthday/birthday-parties-gallery-03.png",
          width: 400,
          height: 400,
          alt: "birthday party Gallery Image 3",
        },
        {
          id: 4,
          url: "/assets/event-page-v2/birthday/birthday-parties-gallery-04.png",
          width: 400,
          height: 400,
          alt: "birthday party Gallery Image 4",
        },
        {
          id: 5,
          url: "/assets/event-page-v2/birthday/birthday-parties-gallery-05.png",
          width: 400,
          height: 400,
          alt: "birthday party Gallery Image 5",
        },
        {
          id: 6,
          url: "/assets/event-page-v2/birthday/birthday-parties-gallery-06.png",
          width: 400,
          height: 400,
          alt: "birthday party Gallery Image 6",
        },
      ],
    },
    CustomerLoveTestimonialCarouselData: {
      title: "DON'T TAKE OUR WORD FOR IT.",
      description:
        "We could talk about how great our parties are all day. But these guests said it better than we ever could. Real birthdays, real groups, real reviews — straight from the people who've been there.",
      reviewList: customerReviewList["birthday-party"],
    },
    EventPageFaqsData: {
      title: "GOT QUESTIONS? WE'VE GOT ANSWERS",
      description:
        "Never done an escape room before? Not sure which package is right for you? We've covered everything below so you can stop wondering and start planning the best birthday party they've ever had.",
    },
  },
  "team-building": {
    id: 2,
    PageHeroData: {
      eyeBrewText: "TEAM BUILDING & GROUP EVENTS",
      title: "THE TEAM BUILDING EVENT YOUR TEAM WILL ACTUALLY LOOK FORWARD TO.",
      partyRiboon: false,
      description:
        "Choose from our group packages — private escape room, party room, and optional catering all sorted. Celebrating something else? Book just the game and head to the mall restaurants after. Either way, one booking and zero logistics headache.",
      videoData: {
        videoUrl:
          "/assets/event-page-v2/corporate-events-and-team-building/team-building-and-group-events-hero-video.mp4",
        videoType: "video/mp4",
        poster: {
          url: "/assets/event-page-v2/corporate-events-and-team-building/team-building-and-group-events-hero-video-poster.jpg",
          width: 800,
          height: 450,
          alt: "corporate event and team building hero video poster",
        },
      },
    },
    FeedBackTestimonialSliderData: {
      title: "THE ONLY TEAM BUILDING ACTIVITY NOBODY GROANS ABOUT.",
      descriptionHtml: feedBackSectionHtmlTextList["team-building"]
        ? feedBackSectionHtmlTextList["team-building"].join("")
        : null,
      eventPoster: {
        url: "/assets/event-page-v2/corporate-events-and-team-building/team-building-and-group-event-poster.png",
        width: 560,
        height: 564,
        alt: "team building",
      },
      testimonialData: feedTestimonialList["team-building"],
    },
    CheckOutPartyPackagesData: {
      title: "Check Out Our Party Packages",
      description:
        "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
    },
    EventPageEscapeRoomCarouselData: {
      sectionTitle: "SKIP THE PACKAGE — JUST BOOK THE GAME",
      sectionSubTitle:
        " No package, no extras — just 60 minutes of pure escape room fun. Book any of our rooms the same way our regular players do, grab a bite at any of the mall restaurants right after, and call it a great group outing. Simple, flexible, no fuss.",
    },
    MobileMysterySectionData: {
      showCardSection: true,
      sectionTitle: "Can't Come to Us? We'll Bring the Adventure to You.",
      sectionSubTitle:
        "Introducing Mobile Mystery — our portable escape room experience that comes directly to your office, conference room, or event venue. No travel. No logistics. No coordinating transportation for your entire team. Same immersive, high-energy team building challenge — delivered right to your door.",
    },
    EventPageGalleryData: {
      title: "ESCAPE ROOM Corporate Event & Team Building GALLERY ",
      description:
        "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
      galleryImages: [
        {
          id: 1,
          url: "/assets/event-page-v2/corporate-events-and-team-building/corporate-event-and-team-building-gallery-1.png",
          width: 400,
          height: 400,
          alt: "corporate Event team building Page Gallery Image 1",
        },
        {
          url: "/assets/event-page-v2/corporate-events-and-team-building/corporate-event-and-team-building-gallery-2.png",
          width: 400,
          height: 400,
          alt: "corporate Event team building Page Gallery Image 2",
        },
        {
          id: 3,
          url: "/assets/event-page-v2/corporate-events-and-team-building/corporate-event-and-team-building-gallery-3.png",
          width: 400,
          height: 400,
          alt: "corporate Event team building Page Gallery Image 3",
        },
        {
          id: 4,
          url: "/assets/event-page-v2/corporate-events-and-team-building/corporate-event-and-team-building-gallery-4.png",
          width: 400,
          height: 400,
          alt: "corporate Event team building Page Gallery Image 4",
        },
        {
          id: 5,
          url: "/assets/event-page-v2/corporate-events-and-team-building/corporate-event-and-team-building-gallery-5.png",
          width: 400,
          height: 400,
          alt: "corporate Event team building Page Gallery Image 5",
        },
        {
          id: 6,
          url: "/assets/event-page-v2/corporate-events-and-team-building/corporate-event-and-team-building-gallery-6.png",
          width: 400,
          height: 400,
          alt: "corporate Event team building Page Gallery Image 6",
        },
      ],
    },
    CustomerLoveTestimonialCarouselData: {
      title: "DON'T TAKE OUR WORD FOR IT.",
      description:
        "Over 57,000 guests have shared their All In Adventures experience — corporate teams, friend groups, families, and everything in between. Here's what real groups from across the country had to say.",
      reviewList: customerReviewList["birthday-party"],
    },
    EventPageFaqsData: {
      title: "GOT QUESTIONS? WE'VE GOT ANSWERS",
      description:
        "Never done an escape room before? Not sure which package is right for you? We've covered everything below so you can stop wondering and start planning the best birthday party they've ever had.",
    },
  },
  "school-events": {
    id: 3,
    PageHeroData: {
      eyeBrewText: "School Events &Field Trips ",
      title: "THE FIELD TRIP KIDS WILL ACTUALLY BEG TO GO ON.",
      partyRiboon: false,
      description:
        "Choose from our 3 group packages — private escape room, party room, and optional catering all sorted. Prefer to keep it simple? Book just the game and head to the mall restaurants after. Either way, one booking and zero planning stress.",
      videoData: {
        videoUrl:
          "/assets/event-page-v2/field-trips-and-school-event/school-events-and-field-trips-hero-video.mp4",
        videoType: "video/mp4",
        poster: {
          url: "/assets/event-page-v2/field-trips-and-school-event/school-events-and-field-trips-hero-video-poster.jpg",
          width: 800,
          height: 450,
          alt: "birthday party Hero Video Poster",
        },
      },
    },
    FeedBackTestimonialSliderData: {
      title: "THE FIELD TRIP THAT TEACHES WITHOUT FEELING LIKE SCHOOL.",
      descriptionHtml: feedBackSectionHtmlTextList["school-events"]
        ? feedBackSectionHtmlTextList["school-events"].join("")
        : null,
      eventPoster: {
        url: "/assets/event-page-v2/field-trips-and-school-event/school-events-and-field-trip-event-poster.png",
        width: 560,
        height: 564,
        alt: "birthday party celebration",
      },
      testimonialData: feedTestimonialList["school-events"],
    },
    CheckOutPartyPackagesData: {
      title: "Check Out Our Party Packages",
      description:
        "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
    },
    EventPageEscapeRoomCarouselData: {
      sectionTitle: "SKIP THE PACKAGE — JUST BOOK THE GAME",
      sectionSubTitle:
        " No package, no extras — just 60 minutes of pure escape room fun. Book any of our rooms the same way our regular players do, grab a bite at any of the mall restaurants right after, and call it a great group outing. Simple, flexible, no fuss.",
    },
    MobileMysterySectionData: {
      showCardSection: true,
      sectionTitle: "Can't Come to Us? We'll Bring the Adventure to You.",
      sectionSubTitle:
        "Introducing Mobile Mystery — our portable escape room experience that comes directly to your office, conference room, or event venue. No travel. No logistics. No coordinating transportation for your entire team. Same immersive, high-energy team building challenge — delivered right to your door.",
    },
    EventPageGalleryData: {
      title: "ESCAPE ROOM Field Trips & School Events GALLERY",
      description:
        "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
      galleryImages: [
        {
          id: 1,
          url: "/assets/event-page-v2/field-trips-and-school-event/field-trips-and-school-events-gallery-01.jpg",
          width: 400,
          height: 400,
          alt: "Event Page Gallery Image 1",
        },
        {
          url: "/assets/event-page-v2/field-trips-and-school-event/field-trips-and-school-events-gallery-02.jpg",
          width: 400,
          height: 400,
          alt: "Event Page Gallery Image 2",
        },
        {
          id: 3,
          url: "/assets/event-page-v2/field-trips-and-school-event/field-trips-and-school-events-gallery-03.jpg",
          width: 400,
          height: 400,
          alt: "Event Page Gallery Image 3",
        },
        {
          id: 4,
          url: "/assets/event-page-v2/field-trips-and-school-event/field-trips-and-school-events-gallery-04.jpg",
          width: 400,
          height: 400,
          alt: "Event Page Gallery Image 4",
        },
        {
          id: 5,
          url: "/assets/event-page-v2/field-trips-and-school-event/field-trips-and-school-events-gallery-05.jpg",
          width: 400,
          height: 400,
          alt: "Event Page Gallery Image 5",
        },
        {
          id: 6,
          url: "/assets/event-page-v2/field-trips-and-school-event/field-trips-and-school-events-gallery-06.jpg",
          width: 400,
          height: 400,
          alt: "Event Page Gallery Image 6",
        },
      ],
    },
    CustomerLoveTestimonialCarouselData: {
      title: "DON'T TAKE OUR WORD FOR IT.",
      description:
        "OTeachers, school administrators, and youth group leaders across the country have brought their students to All In Adventures — and they keep coming back. Here's what they had to say.",
      reviewList: customerReviewList["birthday-party"],
    },
    EventPageFaqsData: {
      title: "GOT QUESTIONS? WE'VE GOT ANSWERS",
      description:
        "Never done an escape room before? Not sure which package is right for you? We've covered everything below so you can stop wondering and start planning the best birthday party they've ever had.",
      faqList: [
        {
          id: 1,
          faqQuestion: "What does it cost to join?",
          faqAnswer:
            "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
        },
        {
          id: 2,
          faqQuestion: 'How do I earn "Punches" on my digital card?',
          faqAnswer:
            "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
        },
        {
          id: 3,
          faqQuestion: "Do my rewards work at all locations?",
          faqAnswer:
            "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
        },
        {
          id: 4,
          faqQuestion: 'How do I redeem my "Free" reward?',
          faqAnswer:
            "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
        },

        {
          id: 5,
          faqQuestion:
            "Can I use additional discounts on top of my membership discounts?",
          faqAnswer:
            "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
        },

        {
          id: 6,
          faqQuestion: "Do my monthly and seasonal offers expire?",
          faqAnswer:
            'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
        },
        {
          id: 7,
          faqQuestion: "Does every game count toward my punches?",
          faqAnswer:
            "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
        },

        {
          id: 8,
          faqQuestion: "What happens if I have to cancel?",
          faqAnswer:
            "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
        },
        {
          id: 9,
          faqQuestion: "Does the Member actually have to be there?",
          faqAnswer:
            "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
        },
      ],
    },
  },
};

export const locationEventPageDataV2 = {
  "albany-ny": {
    "birthday-party": {
      id: 1,
      pageHeroData: {
        eyeBrewText: "ESCAPE ROOM BIRTHDAY PARTY",
        title: "Easiest Birthday Ever Private escape room + party Room.",
        partyRiboon: true,
        description:
          "Make your party epic with just a few clicks of the mouse. We'll bring the food, serve the drinks and even clean up afterward. All you need to do is pick your plan and invite the lucky guests.",
      },
      FeedBackTestimonialSliderData: {
        title: "All In Adventures birthday parties are perfect for all ages.",
        description:
          "With exciting escape room challenges to keep everyone engaged and a private party space to celebrate together, there's something for every guest to enjoy. From start to finish, we take care of all the details—so you can relax and enjoy a fun, memorable, and completely stress-free party!",
        eventPoster: {
          url: "/assets/event-page-v2/birthday/birthday-party-celebration.png",
          width: 560,
          height: 564,
          alt: "birthday party celebration",
        },
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            feedback:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "Jane Smith",
            city: "Buffelo, NY",
            feedback:
              "I can't believe how easy it was to plan this party. The team took care of everything and we had a blast!",
          },
          {
            id: 3,
            author: "Emily Johnson",
            city: "Rochester, NY",
            feedback:
              "The escape room was challenging but so rewarding. My friends and I had a great time working together to solve the puzzles.",
          },
        ],
      },
      CheckOutPartyPackagesData: {
        title: "Check Out Our Party Packages",
        description:
          "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
      },
      EventPageEscapeRoomCarouselData: {
        sectionTitle: "Book Escape Room Only",
        sectionSubTitle:
          "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure.",
      },
      EventPageGalleryData: {
        title: "ESCAPE ROOM BIRTHDAY PARTY GALLERY ",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        galleryImages: [
          {
            id: 1,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 1",
          },
          {
            id: 2,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-02.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 2",
          },
          {
            id: 3,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-03.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 3",
          },
          {
            id: 4,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-04.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 4",
          },
          {
            id: 5,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-05.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 5",
          },
          {
            id: 6,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-06.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 6",
          },
        ],
      },
      CustomerLoveTestimonialCarouselData: {
        title: "CUSTOMERS LOVE ALL IN ADVENTURES",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 3,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 4,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 5,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
        ],
      },
      EventPageFaqsData: {
        title: "FREQUENTLY ASKED QUESTIONS",
        description:
          "Got questions? We've got answers to help you plan the perfect team-building adventure!",
        faqList: [
          {
            id: 1,
            faqQuestion: "What does it cost to join?",
            faqAnswer:
              "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
          },
          {
            id: 2,
            faqQuestion: 'How do I earn "Punches" on my digital card?',
            faqAnswer:
              "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
          },
          {
            id: 3,
            faqQuestion: "Do my rewards work at all locations?",
            faqAnswer:
              "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
          },
          {
            id: 4,
            faqQuestion: 'How do I redeem my "Free" reward?',
            faqAnswer:
              "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
          },

          {
            id: 5,
            faqQuestion:
              "Can I use additional discounts on top of my membership discounts?",
            faqAnswer:
              "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
          },

          {
            id: 6,
            faqQuestion: "Do my monthly and seasonal offers expire?",
            faqAnswer:
              'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
          },
          {
            id: 7,
            faqQuestion: "Does every game count toward my punches?",
            faqAnswer:
              "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
          },

          {
            id: 8,
            faqQuestion: "What happens if I have to cancel?",
            faqAnswer:
              "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
          },
          {
            id: 9,
            faqQuestion: "Does the Member actually have to be there?",
            faqAnswer:
              "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
          },
        ],
      },
    },
    "corporate-event-and-team-building": {
      id: 2,
      pageHeroData: {
        eyeBrewText: "Corporate Event & Team Building",
        title: "BUILD STRONGER TEAMS WITH PRIVATE ESCAPE ROOM EVENTS",
        partyRiboon: false,
        description:
          "Bring your team together with exciting challenges, immersive puzzles, and unforgettable fun. Our private escape room events boost teamwork, communication, and morale in an exciting way.",
      },
      FeedBackTestimonialSliderData: {
        title: "All In Adventures TEAM BUILDING THAT ACTUALLY FEELS FUN..",
        description:
          "Whether you're planning a company outing, leadership event, employee celebration, or team bonding experience, our escape rooms create the perfect mix of teamwork, problem-solving, and excitement. From start to finish, we handle the details so your group can focus on having an amazing time together.",
        eventPoster: {
          url: "/assets/event-page-v2/birthday/all-inadventure-birthday-party-celebration.png",
          width: 560,
          height: 564,
          alt: "birthday party celebration",
        },
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            feedback:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "Jane Smith",
            city: "Buffelo, NY",
            feedback:
              "I can't believe how easy it was to plan this party. The team took care of everything and we had a blast!",
          },
          {
            id: 3,
            author: "Emily Johnson",
            city: "Rochester, NY",
            feedback:
              "The escape room was challenging but so rewarding. My friends and I had a great time working together to solve the puzzles.",
          },
        ],
      },
      CheckOutPartyPackagesData: {
        title: "Check Out Our Party Packages",
        description:
          "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
      },
      EventPageEscapeRoomCarouselData: {
        sectionTitle: "Book Escape Room Only",
        sectionSubTitle:
          "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure.",
      },
      EventPageGalleryData: {
        title: "ESCAPE ROOM Corporate Event & Team Building GALLERY ",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        galleryImages: [
          {
            id: 1,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 3,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 4,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 5,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 6,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
        ],
      },
      CustomerLoveTestimonialCarouselData: {
        title: "CUSTOMERS LOVE ALL IN ADVENTURES",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 3,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 4,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 5,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
        ],
      },
      EventPageFaqsData: {
        title: "FREQUENTLY ASKED QUESTIONS",
        description:
          "Got questions? We've got answers to help you plan the perfect team-building adventure!",
        faqList: [
          {
            id: 1,
            faqQuestion: "What does it cost to join?",
            faqAnswer:
              "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
          },
          {
            id: 2,
            faqQuestion: 'How do I earn "Punches" on my digital card?',
            faqAnswer:
              "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
          },
          {
            id: 3,
            faqQuestion: "Do my rewards work at all locations?",
            faqAnswer:
              "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
          },
          {
            id: 4,
            faqQuestion: 'How do I redeem my "Free" reward?',
            faqAnswer:
              "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
          },

          {
            id: 5,
            faqQuestion:
              "Can I use additional discounts on top of my membership discounts?",
            faqAnswer:
              "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
          },

          {
            id: 6,
            faqQuestion: "Do my monthly and seasonal offers expire?",
            faqAnswer:
              'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
          },
          {
            id: 7,
            faqQuestion: "Does every game count toward my punches?",
            faqAnswer:
              "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
          },

          {
            id: 8,
            faqQuestion: "What happens if I have to cancel?",
            faqAnswer:
              "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
          },
          {
            id: 9,
            faqQuestion: "Does the Member actually have to be there?",
            faqAnswer:
              "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
          },
        ],
      },
    },
    "field-trip-and-school-events": {
      id: 3,
      pageHeroData: {
        eyeBrewText: "Field Trips & School Events",
        title: "ESCAPE ROOMS PERFECT FOR STUDENT GROUPS",
        partyRiboon: true,
        description:
          "Give students an unforgettable experience filled with teamwork, critical thinking, and exciting challenges. Our private escape room adventures are perfect for school field trips, youth groups, and educational events.",
      },
      FeedBackTestimonialSliderData: {
        title:
          "All In Adventures FUN FIELD TRIPS STUDENTS WILL ACTUALLY REMEMBER.",
        description:
          "Our escape rooms encourage communication, creativity, and collaboration in a fun and immersive environment. Perfect for schools, clubs, camps, and student organizations looking for a unique group activity.",
        eventPoster: {
          url: "/assets/event-page-v2/birthday/all-inadventure-birthday-party-celebration.png",
          width: 560,
          height: 564,
          alt: "birthday party celebration",
        },
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            feedback:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "Jane Smith",
            city: "Buffelo, NY",
            feedback:
              "I can't believe how easy it was to plan this party. The team took care of everything and we had a blast!",
          },
          {
            id: 3,
            author: "Emily Johnson",
            city: "Rochester, NY",
            feedback:
              "The escape room was challenging but so rewarding. My friends and I had a great time working together to solve the puzzles.",
          },
        ],
      },
      CheckOutPartyPackagesData: {
        title: "Check Out Our Party Packages",
        description:
          "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
      },
      EventPageEscapeRoomCarouselData: {
        sectionTitle: "Book Escape Room Only",
        sectionSubTitle:
          "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure.",
      },
      EventPageGalleryData: {
        title: "ESCAPE ROOM Field Trips & School Events GALLERY",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        galleryImages: [
          {
            id: 1,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 3,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 4,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 5,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 6,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
        ],
      },
      CustomerLoveTestimonialCarouselData: {
        title: "CUSTOMERS LOVE ALL IN ADVENTURES",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 3,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 4,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 5,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
        ],
      },
      EventPageFaqsData: {
        title: "FREQUENTLY ASKED QUESTIONS",
        description:
          "Got questions? We've got answers to help you plan the perfect team-building adventure!",
        faqList: [
          {
            id: 1,
            faqQuestion: "What does it cost to join?",
            faqAnswer:
              "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
          },
          {
            id: 2,
            faqQuestion: 'How do I earn "Punches" on my digital card?',
            faqAnswer:
              "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
          },
          {
            id: 3,
            faqQuestion: "Do my rewards work at all locations?",
            faqAnswer:
              "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
          },
          {
            id: 4,
            faqQuestion: 'How do I redeem my "Free" reward?',
            faqAnswer:
              "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
          },

          {
            id: 5,
            faqQuestion:
              "Can I use additional discounts on top of my membership discounts?",
            faqAnswer:
              "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
          },

          {
            id: 6,
            faqQuestion: "Do my monthly and seasonal offers expire?",
            faqAnswer:
              'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
          },
          {
            id: 7,
            faqQuestion: "Does every game count toward my punches?",
            faqAnswer:
              "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
          },

          {
            id: 8,
            faqQuestion: "What happens if I have to cancel?",
            faqAnswer:
              "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
          },
          {
            id: 9,
            faqQuestion: "Does the Member actually have to be there?",
            faqAnswer:
              "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
          },
        ],
      },
      faqList: [
        {
          id: 1,
          faqQuestion: "What does it cost to join?",
          faqAnswer:
            "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
        },
        {
          id: 2,
          faqQuestion: 'How do I earn "Punches" on my digital card?',
          faqAnswer:
            "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
        },
        {
          id: 3,
          faqQuestion: "Do my rewards work at all locations?",
          faqAnswer:
            "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
        },
        {
          id: 4,
          faqQuestion: 'How do I redeem my "Free" reward?',
          faqAnswer:
            "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
        },

        {
          id: 5,
          faqQuestion:
            "Can I use additional discounts on top of my membership discounts?",
          faqAnswer:
            "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
        },

        {
          id: 6,
          faqQuestion: "Do my monthly and seasonal offers expire?",
          faqAnswer:
            'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
        },
        {
          id: 7,
          faqQuestion: "Does every game count toward my punches?",
          faqAnswer:
            "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
        },

        {
          id: 8,
          faqQuestion: "What happens if I have to cancel?",
          faqAnswer:
            "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
        },
        {
          id: 9,
          faqQuestion: "Does the Member actually have to be there?",
          faqAnswer:
            "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
        },
      ],
    },
  },
  "middletown-ny": {
    "birthday-party": {
      id: 1,
      pageHeroData: {
        eyeBrewText: "ESCAPE ROOM BIRTHDAY PARTY",
        title: "Easiest Birthday Ever Private escape room + party Room.",
        partyRiboon: true,
        description:
          "Make your party epic with just a few clicks of the mouse. We'll bring the food, serve the drinks and even clean up afterward. All you need to do is pick your plan and invite the lucky guests.",
      },
      FeedBackTestimonialSliderData: {
        title: "All In Adventures birthday parties are perfect for all ages.",
        description:
          "With exciting escape room challenges to keep everyone engaged and a private party space to celebrate together, there's something for every guest to enjoy. From start to finish, we take care of all the details—so you can relax and enjoy a fun, memorable, and completely stress-free party!",
        eventPoster: {
          url: "/assets/event-page-v2/birthday/birthday-party-celebration.png",
          width: 560,
          height: 564,
          alt: "birthday party celebration",
        },
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            feedback:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "Jane Smith",
            city: "Buffelo, NY",
            feedback:
              "I can't believe how easy it was to plan this party. The team took care of everything and we had a blast!",
          },
          {
            id: 3,
            author: "Emily Johnson",
            city: "Rochester, NY",
            feedback:
              "The escape room was challenging but so rewarding. My friends and I had a great time working together to solve the puzzles.",
          },
        ],
      },
      CheckOutPartyPackagesData: {
        title: "Check Out Our Party Packages",
        description:
          "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
      },
      EventPageEscapeRoomCarouselData: {
        sectionTitle: "Book Escape Room Only",
        sectionSubTitle:
          "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure.",
      },
      EventPageGalleryData: {
        title: "ESCAPE ROOM BIRTHDAY PARTY GALLERY ",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        galleryImages: [
          {
            id: 1,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 1",
          },
          {
            id: 2,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-02.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 2",
          },
          {
            id: 3,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-03.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 3",
          },
          {
            id: 4,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-04.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 4",
          },
          {
            id: 5,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-05.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 5",
          },
          {
            id: 6,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-06.png",
            width: 400,
            height: 400,
            alt: "birthday party Gallery Image 6",
          },
        ],
      },
      CustomerLoveTestimonialCarouselData: {
        title: "CUSTOMERS LOVE ALL IN ADVENTURES",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 3,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 4,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 5,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
        ],
      },
      EventPageFaqsData: {
        title: "FREQUENTLY ASKED QUESTIONS",
        description:
          "Got questions? We've got answers to help you plan the perfect team-building adventure!",
        faqList: [
          {
            id: 1,
            faqQuestion: "What does it cost to join?",
            faqAnswer:
              "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
          },
          {
            id: 2,
            faqQuestion: 'How do I earn "Punches" on my digital card?',
            faqAnswer:
              "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
          },
          {
            id: 3,
            faqQuestion: "Do my rewards work at all locations?",
            faqAnswer:
              "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
          },
          {
            id: 4,
            faqQuestion: 'How do I redeem my "Free" reward?',
            faqAnswer:
              "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
          },

          {
            id: 5,
            faqQuestion:
              "Can I use additional discounts on top of my membership discounts?",
            faqAnswer:
              "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
          },

          {
            id: 6,
            faqQuestion: "Do my monthly and seasonal offers expire?",
            faqAnswer:
              'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
          },
          {
            id: 7,
            faqQuestion: "Does every game count toward my punches?",
            faqAnswer:
              "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
          },

          {
            id: 8,
            faqQuestion: "What happens if I have to cancel?",
            faqAnswer:
              "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
          },
          {
            id: 9,
            faqQuestion: "Does the Member actually have to be there?",
            faqAnswer:
              "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
          },
        ],
      },
    },
    "corporate-event-and-team-building": {
      id: 2,
      pageHeroData: {
        eyeBrewText: "Corporate Event & Team Building",
        title: "BUILD STRONGER TEAMS WITH PRIVATE ESCAPE ROOM EVENTS",
        partyRiboon: false,
        description:
          "Bring your team together with exciting challenges, immersive puzzles, and unforgettable fun. Our private escape room events boost teamwork, communication, and morale in an exciting way.",
      },
      FeedBackTestimonialSliderData: {
        title: "All In Adventures TEAM BUILDING THAT ACTUALLY FEELS FUN..",
        description:
          "Whether you're planning a company outing, leadership event, employee celebration, or team bonding experience, our escape rooms create the perfect mix of teamwork, problem-solving, and excitement. From start to finish, we handle the details so your group can focus on having an amazing time together.",
        eventPoster: {
          url: "/assets/event-page-v2/birthday/all-inadventure-birthday-party-celebration.png",
          width: 560,
          height: 564,
          alt: "birthday party celebration",
        },
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            feedback:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "Jane Smith",
            city: "Buffelo, NY",
            feedback:
              "I can't believe how easy it was to plan this party. The team took care of everything and we had a blast!",
          },
          {
            id: 3,
            author: "Emily Johnson",
            city: "Rochester, NY",
            feedback:
              "The escape room was challenging but so rewarding. My friends and I had a great time working together to solve the puzzles.",
          },
        ],
      },
      CheckOutPartyPackagesData: {
        title: "Check Out Our Party Packages",
        description:
          "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
      },
      EventPageEscapeRoomCarouselData: {
        sectionTitle: "Book Escape Room Only",
        sectionSubTitle:
          "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure.",
      },
      EventPageGalleryData: {
        title: "ESCAPE ROOM Corporate Event & Team Building GALLERY ",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        galleryImages: [
          {
            id: 1,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 3,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 4,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 5,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 6,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
        ],
      },
      CustomerLoveTestimonialCarouselData: {
        title: "CUSTOMERS LOVE ALL IN ADVENTURES",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 3,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 4,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 5,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
        ],
      },
      EventPageFaqsData: {
        title: "FREQUENTLY ASKED QUESTIONS",
        description:
          "Got questions? We've got answers to help you plan the perfect team-building adventure!",
        faqList: [
          {
            id: 1,
            faqQuestion: "What does it cost to join?",
            faqAnswer:
              "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
          },
          {
            id: 2,
            faqQuestion: 'How do I earn "Punches" on my digital card?',
            faqAnswer:
              "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
          },
          {
            id: 3,
            faqQuestion: "Do my rewards work at all locations?",
            faqAnswer:
              "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
          },
          {
            id: 4,
            faqQuestion: 'How do I redeem my "Free" reward?',
            faqAnswer:
              "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
          },

          {
            id: 5,
            faqQuestion:
              "Can I use additional discounts on top of my membership discounts?",
            faqAnswer:
              "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
          },

          {
            id: 6,
            faqQuestion: "Do my monthly and seasonal offers expire?",
            faqAnswer:
              'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
          },
          {
            id: 7,
            faqQuestion: "Does every game count toward my punches?",
            faqAnswer:
              "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
          },

          {
            id: 8,
            faqQuestion: "What happens if I have to cancel?",
            faqAnswer:
              "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
          },
          {
            id: 9,
            faqQuestion: "Does the Member actually have to be there?",
            faqAnswer:
              "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
          },
        ],
      },
    },
    "field-trip-and-school-events": {
      id: 3,
      pageHeroData: {
        eyeBrewText: "Field Trips & School Events",
        title: "ESCAPE ROOMS PERFECT FOR STUDENT GROUPS",
        partyRiboon: true,
        description:
          "Give students an unforgettable experience filled with teamwork, critical thinking, and exciting challenges. Our private escape room adventures are perfect for school field trips, youth groups, and educational events.",
      },
      FeedBackTestimonialSliderData: {
        title:
          "All In Adventures FUN FIELD TRIPS STUDENTS WILL ACTUALLY REMEMBER.",
        description:
          "Our escape rooms encourage communication, creativity, and collaboration in a fun and immersive environment. Perfect for schools, clubs, camps, and student organizations looking for a unique group activity.",
        eventPoster: {
          url: "/assets/event-page-v2/birthday/all-inadventure-birthday-party-celebration.png",
          width: 560,
          height: 564,
          alt: "birthday party celebration",
        },
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            feedback:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "Jane Smith",
            city: "Buffelo, NY",
            feedback:
              "I can't believe how easy it was to plan this party. The team took care of everything and we had a blast!",
          },
          {
            id: 3,
            author: "Emily Johnson",
            city: "Rochester, NY",
            feedback:
              "The escape room was challenging but so rewarding. My friends and I had a great time working together to solve the puzzles.",
          },
        ],
      },
      CheckOutPartyPackagesData: {
        title: "Check Out Our Party Packages",
        description:
          "Parties must be booked 7 days in advance. If you are booking less than 7 days in advance, please call the store at 518-313-7956 and we will do our best to accommodate your group.",
      },
      EventPageEscapeRoomCarouselData: {
        sectionTitle: "Book Escape Room Only",
        sectionSubTitle:
          "Skip the party packages and book 60 minutes of pure escape room fun — no party room, no catering, just the game. Perfect for small groups, last-minute plans, or anyone looking to celebrate with nonstop adventure.",
      },
      EventPageGalleryData: {
        title: "ESCAPE ROOM Field Trips & School Events GALLERY",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        galleryImages: [
          {
            id: 1,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 3,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 4,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
          {
            id: 5,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 1",
          },
          {
            id: 6,
            url: "/assets/event-page-v2/birthday/birthday-parties-gallery-01.png",
            width: 800,
            height: 600,
            alt: "Event Page Gallery Image 2",
          },
        ],
      },
      CustomerLoveTestimonialCarouselData: {
        title: "CUSTOMERS LOVE ALL IN ADVENTURES",
        description:
          "Our Game Masters are passionate and always work to ensure everyone feels like a rockstar while playing! Over 25,000 guests have raved about their experience at All In Adventures!",
        testimonials: [
          {
            id: 1,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 2,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 3,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 4,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
          {
            id: 5,
            author: "John Doe",
            city: "Albany, NY",
            reviewText:
              "This was the best birthday party ever! The escape room was so much fun and the staff was amazing.",
          },
        ],
      },
      EventPageFaqsData: {
        title: "FREQUENTLY ASKED QUESTIONS",
        description:
          "Got questions? We've got answers to help you plan the perfect team-building adventure!",
        faqList: [
          {
            id: 1,
            faqQuestion: "What does it cost to join?",
            faqAnswer:
              "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
          },
          {
            id: 2,
            faqQuestion: 'How do I earn "Punches" on my digital card?',
            faqAnswer:
              "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
          },
          {
            id: 3,
            faqQuestion: "Do my rewards work at all locations?",
            faqAnswer:
              "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
          },
          {
            id: 4,
            faqQuestion: 'How do I redeem my "Free" reward?',
            faqAnswer:
              "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
          },

          {
            id: 5,
            faqQuestion:
              "Can I use additional discounts on top of my membership discounts?",
            faqAnswer:
              "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
          },

          {
            id: 6,
            faqQuestion: "Do my monthly and seasonal offers expire?",
            faqAnswer:
              'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
          },
          {
            id: 7,
            faqQuestion: "Does every game count toward my punches?",
            faqAnswer:
              "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
          },

          {
            id: 8,
            faqQuestion: "What happens if I have to cancel?",
            faqAnswer:
              "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
          },
          {
            id: 9,
            faqQuestion: "Does the Member actually have to be there?",
            faqAnswer:
              "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
          },
        ],
      },
      faqList: [
        {
          id: 1,
          faqQuestion: "What does it cost to join?",
          faqAnswer:
            "Absolutely nothing! The All In Rewards program is a free loyalty club designed to reward our most frequent players.",
        },
        {
          id: 2,
          faqQuestion: 'How do I earn "Punches" on my digital card?',
          faqAnswer:
            "It's simple: every time you book a full-price admission, you earn one punch. Once you hit five punches, your next admission is 100% free for you!",
        },
        {
          id: 3,
          faqQuestion: "Do my rewards work at all locations?",
          faqAnswer:
            "Because each of our locations features unique experiences, punches and rewards are currently location-specific.",
        },
        {
          id: 4,
          faqQuestion: 'How do I redeem my "Free" reward?',
          faqAnswer:
            "Once you've earned your reward, you'll see it available during your next booking. When booking your next adventure, simply enter your Member ID in during checkout.",
        },

        {
          id: 5,
          faqQuestion:
            "Can I use additional discounts on top of my membership discounts?",
          faqAnswer:
            "We love your enthusiasm, but our system only allows one promo code or reward per booking. We recommend saving your biggest discount for your largest group!",
        },

        {
          id: 6,
          faqQuestion: "Do my monthly and seasonal offers expire?",
          faqAnswer:
            'Yes. Our special offers are designed to be "use it or lose it." Be sure to check your email for our announcements so you don&quot;t miss out!',
        },
        {
          id: 7,
          faqQuestion: "Does every game count toward my punches?",
          faqAnswer:
            "To keep the rewards flowing, only full-price admissions count toward your Free Admission. Games booked using a deep discount, seasonal offer, or a free reward code do not earn additional punches.",
        },

        {
          id: 8,
          faqQuestion: "What happens if I have to cancel?",
          faqAnswer:
            "We get it—life happens! However, if you book using a discount and don't show up (or cancel with less than 24 hours' notice), that reward is considered used.",
        },
        {
          id: 9,
          faqQuestion: "Does the Member actually have to be there?",
          faqAnswer:
            "Yes! To use your membership discounts or rewards, the account holder must be present at check-in and may be asked to present a valid ID. Memberships are nontransferable.",
        },
      ],
    },
  },

  "syracuse-ny": {
    shortName: "mysteryroom-syracuse",
    flow: "1462567",
    //https://fareharbor.com/embeds/book/mysteryroom-syracuse/?full-items=yes&flow=1462567
  },
  "watertown-ny": {
    shortName: "mysteryroom-watertown",
    flow: "1462572",
    //https://fareharbor.com/embeds/book/mysteryroom-watertown/?full-items=yes&flow=1462572
  },
  "west-nyack-ny": {
    shortName: "mysteryroom-westnyack",
    flow: "1462578",
    //https://fareharbor.com/embeds/book/mysteryroom-westnyack/?full-items=yes&flow=1462578
  },
  "poughkeepsie-ny": {
    shortName: "allinadventures-poughkeepsie",
    flow: "1462530",
    //https://fareharbor.com/embeds/book/allinadventures-poughkeepsie/?full-items=yes&flow=1462530
  },

  "raleigh-nc": {
    shortName: "allinadventures-raleigh",
    flow: "1457392",
    //https://fareharbor.com/embeds/book/allinadventures-raleigh/?full-items=yes&flow=1457392
  },

  "hadley-ma": {
    shortName: "allinadventures-hadley",
    flow: "1462488",
    //https://fareharbor.com/embeds/book/allinadventures-hadley/?full-items=yes&flow=1462488
  },
  "holyoke-ma": {
    shortName: "allinadventures-holyoke",
    flow: "1462493",
    // https://fareharbor.com/embeds/book/allinadventures-holyoke/?full-items=yes&flow=1462493
  },
  "kingston-ma": {
    shortName: "mysteryroom-kingston",
    flow: "1462546",
    // https://fareharbor.com/embeds/book/mysteryroom-kingston/?full-items=yes&flow=1462546
  },
  "n-attleborough-ma": {
    shortName: "mysteryroom-attleboro",
    flow: "1462558",
    //https://fareharbor.com/embeds/book/mysteryroom-attleboro/?full-items=yes&flow=1462558
  },

  "milford-ct": {
    shortName: "mysteryroom-milford",
    flow: "1462507",
    // https://fareharbor.com/embeds/book/mysteryroom-milford/?full-items=yes&flow=1462507
  },
  "manchester-ct": {
    shortName: "allinadventures-manchester",
    flow: "1462503",
    //https://fareharbor.com/embeds/book/allinadventures-manchester/?full-items=yes&flow=1462503
  },

  "bowie-md": {
    shortName: "allinadventures-bowie",
    flow: "1462479",
    //https://fareharbor.com/embeds/book/allinadventures-bowie/?full-items=yes&flow=1462479
  },
  "white-marsh-md": {
    shortName: "allinadventures-whitemarsh",
    flow: "1462538",
    //https://fareharbor.com/embeds/book/allinadventures-whitemarsh/?full-items=yes&flow=1462538
  },

  "rockaway-nj": {
    shortName: "mysteryroom-rockaway",
    flow: "1462562",
    //https://fareharbor.com/embeds/book/mysteryroom-rockaway/?full-items=yes&flow=1462562
  },
  "woodbridge-nj": {
    shortName: "allinadventures-woodbridge",
    flow: "1462542",
    //https://fareharbor.com/embeds/book/allinadventures-woodbridge/?full-items=yes&flow=1462542
  },

  "roanoke-va": {
    shortName: "allinadventures-roanoke",
    flow: "1462534",
    //https://fareharbor.com/embeds/book/allinadventures-roanoke/?full-items=yes&flow=1462534
  },
  "lawrenceville-ga": {
    shortName: "mysteryroom-lawrenceville",
    flow: "1462550",
    //hhttps://fareharbor.com/embeds/book/mysteryroom-lawrenceville/?full-items=yes&flow=1462550
  },
  "columbus-oh": {
    shortName: "allinadventures-columbus-oh",
    flow: "1462484",
    //https://fareharbor.com/embeds/book/allinadventures-columbus-oh/?full-items=yes&flow=1462484
  },
};
