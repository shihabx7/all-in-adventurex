import { getLocationsPageData } from "../getLocationsPageData"
import { bookingList } from "./bookingList"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getTotal } from "../AllDataList/getTotal"
import { getLocTotal } from "../AllDataList/getLocTotal"

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
   
   const cityName=(loc)=>{
    var ctname=loc.split("-")
    if(ctname[0]=="n"){ ctname[0]="n."}
    var st=ctname[ctname.length-1].toUpperCase()
    var ct=''

    if(ctname.length>2){
        for(var i=0;i<ctname.length-1 ;i++){
            ct=ct+ctname[i].charAt(0).toUpperCase()+ctname[i].slice(1)+' '
        }
    }
    else{
        ct=ctname[0].charAt(0).toUpperCase()+ctname[0].slice(1)+' '
    }

    return ct+st
}

    const eventsData={

       
        "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "locationlist":getTotal().locationlist,
        "eventlistSlug":getLocTotal(locationslug).eventlistSlug,
        "activitylist":getLocTotal(locationslug).activitylistSlug,
           
          "pagedata": {
                        "pagetitle":"PARTIES, EVENTS AND SPECIAL OCCASIONS IN "+cityName(locationslug),
                        "locationslug":locationslug,
                        "location_name":cityName(locationslug),
                        "mall":getLocSpec(locationslug).mall,
                        "pagesubtitle":"Celebrate any special event at All In Adventures escape rooms in "+cityName(locationslug)+"! Team up with your family, friends, kids, co-workers, and anybody and everybody for an incredible memory to last forever. Whether they are 6 or 99, we have something for everyone.",
                        "totalLocations": getLocTotal(locationslug).totalLocations,
                        "totalUniqueGames": getLocTotal(locationslug).locUniqueGames,
                        "totalFiveStarReview": getLocTotal(locationslug).locTotalReview,
                        "totalPlayerEscaped": getLocTotal(locationslug).locToalPlayerEscape,
                        "coverimageL":"/assets/all-event-desktop-hero/All-Event-Page-Hero-Image-desktop.jpg",
                        "coverimageM":"/assets/all-event-mobile-hero/All-Event-Page-Hero-Image.jpg",
                        "bookingall":{
                          "shortname":bookinglist.shortname,
                          
                      }
                      

          },

          "events_list":allEventlist,
          "contactdata":getLocSpec(locationslug),
         
       
    
}

return eventsData
}


// ============================data set===================================

const allEventlist=[
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
      "event_name":"School Party",
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
//==============================================================west-nyack-ny
"poughkeepsie-ny":{

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