import { getLocationsPageData } from "../getLocationsPageData"
import { bookingList } from "./bookingList"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getLocationEventSlugList } from "./getLocationEventSlugList"

export const getLocationsEventList=(locationslug)=>{

  const bookinglist=bookingList('',locationslug)
    const locname=locationslug
    const totalLocation=()=>{
            var locdata= getLocationsPageData().states
            var total=0
            
            for(var i=0;i<locdata.length;i++){
                    total=total+locdata[i].cities.length
            }

            return total

    }
    
    const locData=getLocationsPageData()

    const getLocSpec=(slug)=>{
      var i=0
      var j=0
      for(i=0;i<locData.states.length;i++){
        for(j=0;j<locData.states[i].cities.length;j++){
          if(locData.states[i].cities[j].slug==slug){
            return locData.states[i].cities[j]
          }
         
        }
        
      }
   }
   


    const eventsData={

       
        "pagemeta":eventdatalist[locname].pagemeta,
           
          "pagedata": {
                        "pagetitle":"ALL GROUP EVENTS AND PARTIES",
                        "locationslug":locationslug,
                        "location_name":locationslug.split('-').join(' '),
                        "mall":getLocSpec(locationslug).mall,
                        "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
                         "totalLocation":totalLocation(),
                        "totalLocations": "2",
                        "totalUniqueGames": "11",
                        "totalFiveStarReview": "60k+",
                        "totalPlayerEscaped": "90k+",
                        "coverimageL":eventdatalist[locname].coverimageL,
                        "coverimageM":eventdatalist[locname].coverimageM,
                        "bookingall":{
                          "shortname":bookinglist.shortname,
                          
                      }
                      

          },

          "events_list":eventdatalist[locname].events_list,
          "contactdata":getLocSpec(locationslug),
          "activitylist":getLocationActivitySlugList(locationslug),
          "eventlist":getLocationEventSlugList(locationslug)
    
}

return eventsData
}


// ============================data set===================================

const eventdatalist={
  //====================================********************************************NY=====================
//======================================abany-ny=======
"albany-ny":{

        "mall":"crossgate mall",
        "storeemail":"store100@allinadventure.com",
        "coverimageL":"/assets/home-benar-bg.jpg",
        "coverimageM":"/assets/home-hero.jpg",
        
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
    ]

    },
    //==============================================================albany ny end
//==============================================================buffalo ny
"buffalo-ny":{

        "mall":"crossgate mal",
        "coverimageL":"/assets/home-benar-bg.jpg",
        "coverimageM":"/assets/home-hero.jpg",
        
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
    ]

    },
    //==============================================================buffalo ny
    //==============================================================middletown-ny
"middletown-ny":{

      "mall":"crossgate mal",
      "coverimageL":"/assets/home-benar-bg.jpg",
      "coverimageM":"/assets/home-hero.jpg",
      
      "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
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
              "event_name":"Parties & Events For Families",
              "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
              "event_slug":"family-events",
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
  ]

  },
  //==============================================================middletown-ny
  //==============================================================syracuse-ny
  "syracuse-ny":{

    "mall":"crossgate mal",
    "coverimageL":"/assets/home-benar-bg.jpg",
    "coverimageM":"/assets/home-hero.jpg",
    
    "pagemeta":{

        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
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
            "event_name":"Parties & Events For Families",
            "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
            "event_slug":"family-events",
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
]

},
//==============================================================syracuse-ny
//==============================================================watertown-ny
"watertown-ny":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//==============================================================watertown-ny
//==============================================================west-nyack-ny
"west-nyack-ny":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//==============================================================west-nyack-ny
//==================================================================*****************NY===================== end
//==================================================================*****************NC===================== 
//=============================================================raleigh-nc
"raleigh-nc":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//==============================================================raleigh-nc
//==================================================================*****************NC===================== end
//==================================================================*****************PA===================== 
//=============================================================bensalem-pa
"bensalem-pa":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//==============================================================bensalem-pa
//==================================================================*****************PA===================== end
//==================================================================*****************MA===================== 
//=============================================================hadley-ma
"hadley-ma":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================hadley-ma
//=============================================================holyoke-ma
"holyoke-ma":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================holyoke-ma
//=============================================================kingston-ma
"holyoke-ma":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================kingston-ma
//=============================================================n-attleborough-ma
"n-attleborough-ma":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================n-attleborough-ma
//==================================================================*****************MA===================== end
//==================================================================*****************CT===================== 
//=============================================================milford-ct
"milford-ct":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================milford-ct
//=============================================================manchester-ct
"manchester-ct":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================manchester-ct
//=============================================================waterbury-ct
"waterbury-ct":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================waterbury-ct
//==================================================================*****************CT===================== end
//==================================================================*****************MD===================== 
//=============================================================bowie-md
"bowie-md":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================bowie-md
//============================================================white-marsh-md
"white-marsh-md":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================white-marsh-md end

//=============================================================waterbury-ct
//==================================================================*****************MD===================== end
//==================================================================*****************NJ===================== 
//=============================================================bowie-md
"east-brunswick-nj":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================bowie-md
//============================================================white-marsh-md
"rockaway-nj":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================white-marsh-md end
//=============================================================waterbury-ct
"woodbridge-nj":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================waterbury-ct
//==================================================================*****************NJ===================== end
//==================================================================*****************NJ===================== 
//=============================================================dayton-oh
"dayton-oh":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================dayton-oh
//============================================================mentor-oh -md
"mentor-oh":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================mentor-oh end
//=============================================================columbus-oh
"columbus-oh":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================columbus-oh
//==================================================================*****************OH===================== end
//==================================================================*****************TX===================== 
//============================================================austin-tx
"austin-tx":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================austin-tx
//==================================================================*****************TX===================== end
//==================================================================*****************VA===================== 
//============================================================roanoke-va
"roanoke-va":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================roanoke-va
//==================================================================*****************VA===================== end
//==================================================================*****************VA===================== 
//============================================================roanoke-va
"lawrenceville-ga":{

  "mall":"crossgate mal",
  "coverimageL":"/assets/home-benar-bg.jpg",
  "coverimageM":"/assets/home-hero.jpg",
  
  "pagemeta":{

      "matatilte":"title",
      "metakeyword":"keywords",
      "metadescription":"metadescription"
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
          "event_name":"Parties & Events For Families",
          "event_desc":"Select the number of participants fill out the details. fill out the number of details.",
          "event_slug":"family-events",
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
]

},
//=============================================================lawrenceville-ga
//==================================================================*****************GA===================== end
}