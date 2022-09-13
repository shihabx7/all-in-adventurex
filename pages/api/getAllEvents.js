import { getTotal } from "./AllDataList/getTotal"
export const getAllEvents=()=>{

    const eventsData={

       "locationlist":getTotal().locationlist,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
          "pagedata": {
                        "pagetitle":"ALL GROUP EVENTS AND PARTIES",
                        "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
                         
                        "totalLocations": getTotal().totalLocations,
                        "totalUniqueGames": getTotal().uniqueGames,
                        "totalFiveStarReview": getTotal().totalReview,
                        "totalPlayerEscaped": getTotal().toalPlayerEscape,
                        "coverimageL":"/assets/home-benar-bg.jpg",
                        "coverimageM":"/assets/home-hero.jpg"
          },

          "events_list":[

            {
                "id":1,
                "event_name":"BACHELORETTE PARTIES",
                "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
                "event_slug":"bachelorette-party",
                "event_cover_image":"/assets/event-cover-1.jpg",
            },
            {
              "id":2,
              "event_name":"Bachelor Party",
              "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
              "event_slug":"bachelor-party",
              "event_cover_image":"/assets/event-cover-1.jpg",
          },
            {
              "id":3,
              "event_name":"PHYSICAL TEAM BUILDING ACTIVITES",
              "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
              "event_slug":"team-building",
              "event_cover_image":"/assets/event-cover-3.jpg",
          },
          {
            "id":4,
            "event_name":"BIRTHDAY PARTIES",
            "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
            "event_slug":"birthday-party",
            "event_cover_image":"/assets/event-cover-2.jpg",
        },
        {
          "id":5,
          "event_name":"FAMILY FUN ACTIVITIES",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-fun-activity",
          "event_cover_image":"/assets/event-cover-4.jpg",
      },
      {
        "id":6,
        "event_name":"School Party",
        "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
        "event_slug":"school-events",
        "event_cover_image":"/assets/event-cover-5.jpg",
    },
    {
      "id":7,
      "event_name":"Corporate Party",
      "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
      "event_slug":"corporate-events",
      "event_cover_image":"/assets/event-cover-2.jpg",
  },
  {
    "id":8,
    "event_name":"Private Party",
    "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
    "event_slug":"private-party",
    "event_cover_image":"/assets/event-cover-2.jpg",
},
{
  "id":9,
  "event_name":"Reunion Party",
  "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
  "event_slug":"reunion-party",
  "event_cover_image":"/assets/event-cover-2.jpg",
},
{
  "id":10,
  "event_name":"Graduation Party",
  "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
  "event_slug":"graduation-party",
  "event_cover_image":"/assets/event-cover-2.jpg",
},
{
  "id":11,
  "event_name":"PROPOSAL PARTY",
  "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
  "event_slug":"proposal-party",
  "event_cover_image":"/assets/event-cover-2.jpg",
},
{
  "id":12,
  "event_name":"DATE NIGHT / NIGHT OUT",
  "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
  "event_slug":"date-night",
  "event_cover_image":"/assets/event-cover-2.jpg",
},
{
  "id":13,
  "event_name":"GENDER REVEAL PARTY",
  "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
  "event_slug":"gender-reveal-party",
  "event_cover_image":"/assets/event-cover-2.jpg",
},
        
        
            

          ]
    
}

return eventsData
}