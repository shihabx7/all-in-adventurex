import { getTotal } from "./AllDataList/getTotal"
export const getAllEvents=()=>{

    const eventsData={

      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
       "pagemeta":{
        "title":"All Events and Parties - All In Adventures (Formerly Mystery Room)",
        "description":"All In Adventures, formerly Mystery Room, is famous for hosting the most memorable parties and events in the United States. Perfect for all ages.",
        "keywords":"all events, all escape rooms, all escape events, all events all in adventures, all events allinadventures, all events mystery room, all escape events all in adventures, all escape events allinadventures, all escape events mystery room, all escape room events all in adventures, all escape room events allinadventures, all escape room events mystery room, all parties, all escape rooms, all escape parties, all parties all in adventures, all parties allinadventures, all parties mystery room, all escape parties all in adventures, all escape parties allinadventures, all escape parties mystery room, all escape room parties all in adventures, all escape room parties allinadventures, all escape room parties mystery room",
        "url":"/events",
        "metaindex":true,
        "metaimg":"/assets/all-event-mobile-hero/All-Event-Page-Hero-Image.jpg"
      },
           
          "pagedata": {
                        "pagetitle":"PARTIES, EVENTS AND SPECIAL OCCASIONS",
                        "pagesubtitle":"Celebrate any special event at All In Adventures escape rooms! Team up with your family, friends, kids, co-workers, and anybody and everybody for an incredible memory to last forever. Whether they are 6 or 99, we have something for everyone.",
                         
                        "totalLocations": getTotal().totalLocations,
                        "totalUniqueGames": getTotal().uniqueGames,
                        "totalFiveStarReview": getTotal().totalReview,
                        "totalPlayerEscaped": getTotal().toalPlayerEscape,
                        "coverimageL":"/assets/all-event-desktop-hero/All-Event-Page-Hero-Image-desktop.jpg",
                        "coverimageM":"/assets/all-event-mobile-hero/All-Event-Page-Hero-Image.jpg"
          },

          "events_list":[
                            {
                              "id":1,
                              "event_name":"BIRTHDAY PARTIES",
                              "event_desc":"A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
                              "event_slug":"birthday-party",
                              "event_cover_image":"/assets/all-event-list/allinadventures-events-birthday-party-card.jpg",
                             },

                              {
                                "id":2,
                                "event_name":"TEAM BUILDING ",
                                "event_desc":"This fun and exciting interactive form of team building will bring your corporate team closer!",
                                "event_slug":"team-building",
                                "event_cover_image":"/assets/all-event-list/allinadventures-events-team-building-card.jpg",
                            },
                            {
                              "id":3,
                              "event_name":"Corporate Party",
                              "event_desc":"Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
                              "event_slug":"corporate-events",
                              "event_cover_image":"/assets/all-event-list/allinadventures-events-corporate-events-card.jpg",
                           },
                           {
                            "id":4,
                            "event_name":"FAMILY FUN ACTIVITIES",
                            "event_desc":"A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
                            "event_slug":"family-fun-activity",
                            "event_cover_image":"/assets/all-event-list/allinadventures-events-family-fun-activities-card.jpg",
                            },
                             {
                               "id":5,
                               "event_name":"Bachelor Party",
                               "event_desc":"There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
                               "event_slug":"bachelor-party",
                               "event_cover_image":"/assets/all-event-list/allinadventures-events-bachelor-party-card.jpg",
                              },

                               {
                                   "id":6,
                                   "event_name":"BACHELORETTE PARTIES",
                                   "event_desc":"Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
                                   "event_slug":"bachelorette-party",
                                   "event_cover_image":"/assets/all-event-list/allinadventures-events-bachelorette-party-card.jpg",
                               },
                               {
                                "id":7,
                                "event_name":"PROPOSAL PARTY",
                                "event_desc":"A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
                                "event_slug":"proposal-party",
                                "event_cover_image":"/assets/all-event-list/allinadventures-events-proposal-party-card.jpg",
                              },
                              {
                                "id":8,
                                "event_name":"DATE NIGHT / NIGHT OUT",
                                "event_desc":"Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
                                "event_slug":"date-night",
                                "event_cover_image":"/assets/all-event-list/allinadventures-events-date-night-card.jpg",
                              },
            
                              {
                                "id":9,
                                "event_name":"Private Party",
                                "event_desc":"Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
                                "event_slug":"private-party",
                                "event_cover_image":"/assets/all-event-list/allinadventures-events-private-party-card.jpg",
                            },
                            {
                              "id":10,
                              "event_name":"Reunion Party",
                              "event_desc":"Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
                              "event_slug":"reunion-party",
                              "event_cover_image":"/assets/all-event-list/allinadventures-events-reunion-party-card.jpg",
                            },
                            {
                              "id":11,
                              "event_name":"Graduation Party",
                              "event_desc":"Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
                              "event_slug":"graduation-party",
                              "event_cover_image":"/assets/all-event-list/allinadventures-events-graduation-party-card.jpg",
                            },
                            
                                
                              {
                                "id":12,
                                "event_name":"SCHOOL EVENTS / FIELD TRIPS",
                                "event_desc":"Students exercise critical thinking and act to become the super-spies they see in the movies!",
                                "event_slug":"school-events",
                                "event_cover_image":"/assets/all-event-list/allinadventures-events-school-event-card.jpg",
                            },
                          {
                            "id":13,
                            "event_name":"GENDER REVEAL PARTY",
                            "event_desc":"Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
                            "event_slug":"gender-reveal-party",
                            "event_cover_image":"/assets/all-event-list/allinadventures-events-gender-reveal-party-card.jpg",
                          },
        
        
            

          ]
    
}

return eventsData
}