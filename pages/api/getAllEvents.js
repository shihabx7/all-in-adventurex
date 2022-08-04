export const getAllEvents=()=>{

    const eventsData={

       
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
          "pagedata": {
                        "pagetitle":"ALL GROUP EVENTS AND PARTIES",
                        "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
                         "totalLocation":"28",
                        "totalLocations": "28",
                        "totalUniqueGames": "11",
                        "totalFiveStarReview": "60k+",
                        "totalPlayerEscaped": "90k+",
                        "coverimageL":"/assets/home-benar-bg.jpg",
                        "coverimageM":"/assets/home-hero.jpg"
          },

          "events_list":[

            {
                "id":1,
                "event_name":"BACHELORETTE PARTIES",
                "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
                "event_slug":"bachelorette-parties",
                "event_cover_image":"/assets/event-cover-1.jpg",
            },
            {
              "id":2,
              "event_name":"PHYSICAL TEAM BUILDING ACTIVITES",
              "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
              "event_slug":"physical-team-building-activites",
              "event_cover_image":"/assets/event-cover-3.jpg",
          },
          {
            "id":3,
            "event_name":"BIRTHDAY PARTIES",
            "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
            "event_slug":"birthday-parties",
            "event_cover_image":"/assets/event-cover-2.jpg",
        },
        {
          "id":4,
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"earties and-events-for-families",
          "event_cover_image":"/assets/event-cover-4.jpg",
      },
      {
        "id":5,
        "event_name":"virtual team builidng activites",
        "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
        "event_slug":"virtual-team-builidng-activites",
        "event_cover_image":"/assets/event-cover-5.jpg",
    },
    {
      "id":6,
      "event_name":"Office party",
      "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
      "event_slug":"office-party",
      "event_cover_image":"/assets/event-cover-2.jpg",
  },
        
            

          ]
    
}

return eventsData
}