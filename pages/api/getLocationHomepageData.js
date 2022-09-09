
import { getLocationsPageData } from "./getLocationsPageData";
import { getLocationActivitySlugList } from "./LocationIndData/getLocationActivitySlugList";
import { getLocationEventSlugList } from "./LocationIndData/getLocationEventSlugList";
import { bookingList } from "./LocationIndData/bookingList"


 export const getLocationHomepageData =  (locationslug) => {

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
   

    const extractData=locationslug.toString().split('-')
    const locattionstate=extractData[extractData.length-1].toUpperCase()
    const locationCity=extractData.slice(0, -1).join(' ')
    
    const bookingGame=bookingList('',locationslug)

   const locationHomedata=
       {
        "locationlist":getLocationsPageData().states,
        "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitylist":getLocationActivitySlugList(locationslug),
        "eventlist":getLocationEventSlugList(locationslug),
        "bookingData":bookingGame,
        "pagedata": {
                      "locationstate":locattionstate,
                      "locationcity":getLocSpec(locationslug).city,
                      "slug":locationslug,
                      "totalLocations": "28",
                      "locationaddress":getLocSpec(locationslug).mall,
                      "totalUniqueGames": "11",
                      "totalFiveStarReview": "60k+",
                      "totalPlayerEscaped": "90k+",
                      "coverimageL":locPagedata[locationslug].coverimageL,
                      "coverimageM":locPagedata[locationslug].coverimageM,
                      "coverimageM_alt":locPagedata[locationslug].coverimageM_alt,
                      "bookingall":{
                        "shortname":bookingGame.shortname,
                      },
                "locdetail":getLocSpec(locationslug)
                      
        },
        "inpersongames":locPagedata[locationslug].inpersongames,
        "otherphysicalgames":locPagedata[locationslug].otherphysicalgames ,
        "events": locPagedata[locationslug].events,
        "virtualgames": [
          {
            "id":1,
            "category":"virtual",
            "type": "Virtual",
            "title": "Virtual Game Show Room",
            "description": "Select the number of participants fill out the details. fill out the number of details.",
            "age":"8+",
            "duration":"30",
            "maxplayers":"4",
            "minplayers":"2",
            "price":"20",
            
            "slug"  :"virtual-games/virtual-game-show-room",
            "bgimg" :"/assets/vr-game-1.jpg"
           },
           {
            "id":2,
            "category":"virtual",
            "type": "Virtual",
            "title": "Virtual Escape Rooms",
            "description": "Select the number of participants fill out the details. fill out the number of details.",
            "age":"8+",
            "duration":"30",
            "maxplayers":"4",
            "minplayers":"2",
            "price":"20",
            "slug"  :"virtual-games",
            "bgimg" :"/assets/vr-game-2.jpg"
           },
         
                 ],
         "locationreviews":        [
                               {   "id"  : 1,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT! (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 2,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT! (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 3,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 4,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 5,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 6,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 7,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },

                                ]
                            }
                            
    

      

      return  locationHomedata


};

const locPagedata={
//==================================NY==============================
  //=====================================================================albany ny
     "albany-ny":{
                  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg",
                   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-albany-ny-crossgates-mall-hero.jpg",
                   "coverimageM_alt":"allinadventures escape room albany ny crossgates mall-hero",
                   "pagemeta":{

                          "matatilte":"title",
                          "metakeyword":"keywords",
                          "metadescription":"metadescription"
                   },
                "inpersongames":[
                                   {
                                     "id":1,
                                     "category":"escapegame",
                                     "type": "Inperson",
                                      "title": "Escape from alcatraz",
                                      "description": "harness real-time escape Escape from alcatraz",
                                      "age":"all age",
                                      "duration":"50",
                                      "maxplayers":"10",
                                      "minplayers":"2",
                                      "price":"30",
                                      "slug"  :"escape-from-alcatraz",
                                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                                    },
                                    {
                                     "id":2,
                                     "category":"escapegame",
                                      "type": "Inperson",
                                      "title": "Treasure Island",
                                      "description": "harness real-time escape Treasure Island",
                                      "age":"all age",
                                      "duration":"50",
                                      "maxplayers":"10",
                                      "minplayers":"2",
                                      "price":"30",
                                      "slug"  :"treasure-island",
                                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                                    },
                                    {
                                     "id":3,
                                     "category":"escapegame",
                                     "type": "In person",
                                     "title": "Superhero's Adventure",
                                     "description": "harness real-time escape Superhero's Adventure",
                                     "age":"all age",
                                     "duration":"40",
                                     "maxplayers":"10",
                                     "minplayers":"2",
                                     "price":"30",
                                     "slug"  :"superheros-adventure",
                                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                                    },
                                    {
                                     "id":4,
                                     "category":"escapegame",
                                     "type": "In person",
                                     "title": "Zombie Apocalypse",
                                     "description": "harness real-time escape",
                                     "age":"all age",
                                     "duration":"40",
                                     "maxplayers":"10",
                                     "minplayers":"2",
                                     "price":"30",
                                     "slug"  :"zombie-apocalypse",
                                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                                    },
                                    {
                                     "id":5,
                                     "category":"escapegame",
                                     "type": "In person",
                                     "title": "Special Agent",
                                     "description": "harness real-time escape Special Agent",
                                     "age":"all age",
                                     "duration":"40",
                                     "maxplayers":"10",
                                     "minplayers":"2",
                                     "price":"30",
                                     "slug"  :"special-agent",
                                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                                    },
                                    {
                                     "id":6,
                                     "category":"escapegame",
                                     "type": "In person",
                                     "title": "Hollywood Premiere",
                                     "description": "harness real-time escape Hollywood Premiere",
                                     "age":"all age",
                                     "duration":"40",
                                     "maxplayers":"10",
                                     "minplayers":"2",
                                     "price":"30",
                                     "slug"  :"hollywood-premiere",
                                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                                    },
                                    {
                                     "id":7,
                                     "category":"escapegame",
                                     "type": "In person",
                                     "title": "Sherlock's Library",
                                     "description": "harness real-time escape Sherlock's Library",
                                     "age":"all age",
                                     "duration":"40",
                                     "maxplayers":"10",
                                     "minplayers":"2",
                                     "price":"30",
                                     "slug"  :"sherlocks-library",
                                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                                    },
                                    {
                                     "id":8,
                                     "category":"escapegame",
                                     "type": "In person",
                                     "title": "Houdini's Magic Cell",
                                     "description": "harness real-time escape Houdinis Magic Cell",
                                     "age":"all age",
                                     "duration":"40",
                                     "maxplayers":"10",
                                     "minplayers":"2",
                                     "price":"30",
                                     "slug"  :"houdinis-magic-cell",
                                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                                    },
                                    {
                                      "id":9,
                                      "category":"escapegame",
                                      "type": "In person",
                                      "title": "Black Ops",
                                      "description": "harness real-time escape Black Ops",
                                      "age":"all age",
                                      "duration":"40",
                                      "maxplayers":"10",
                                      "minplayers":"2",
                                      "price":"30",
                                      "slug"  :"black-ops",
                                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                                     },
                                     {
                                      "id":10,
                                      "category":"escapegame",
                                      "type": "In person",
                                      "title": "Lost in The jungle",
                                      "description": "harness real-time escape Black Ops Lost in The jungle",
                                      "age":"all age",
                                      "duration":"40",
                                      "maxplayers":"10",
                                      "minplayers":"2",
                                      "price":"30",
                                      "slug"  :"lost-in-the-jungle",
                                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                                     },
                                     {
                                      "id":11,
                                      "category":"escapegame",
                                      "type": "In person",
                                      "title": "Lost in The jungle",
                                      "description": "harness real-time escape Black Ops Lost in The jungle",
                                      "age":"all age",
                                      "duration":"40",
                                      "maxplayers":"10",
                                      "minplayers":"2",
                                      "price":"30",
                                      "slug"  :"wizarding-school",
                                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                                     },
                                     {
                                      "id":12,
                                      "category":"escapegame",
                                      "type": "In person",
                                      "title": "Locked in the Lift",
                                      "description": "harness real-time escape Black Ops Lost in The jungle",
                                      "age":"all age",
                                      "duration":"40",
                                      "maxplayers":"10",
                                      "minplayers":"2",
                                      "price":"30",
                                      "slug"  :"locked-in-the-lift",
                                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                                     },
                                     {
                                      "id":13,
                                      "category":"escapegame",
                                      "type": "In person",
                                      "title": "Magic Castle",
                                      "description": "harness real-time escape Black Ops Lost in The jungle",
                                      "age":"all age",
                                      "duration":"40",
                                      "maxplayers":"10",
                                      "minplayers":"2",
                                      "price":"30",
                                      "slug"  :"magic-castle",
                                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                                     },

                                  ],
                "otherphysicalgames":[
                                    {
      
                                        "id":1,
                                        "category":"other",
                                        "type": "In person",
                                        "title": "Virtual Reality",
                                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                                        "age":"all age",
                                        "duration":"20",
                                        "maxplayers":"10",
                                        "minplayers":"2",
                                        "price":"25",
                                        "slug"  :"virtual-reality",
                                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                                       },
                                      {
      
                                          "id":2,
                                          "category":"other",
                                          "type": "In person",
                                          "title": "Game Show Room",
                                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                                          "age":"all age",
                                          "duration":"30",
                                          "maxplayers":"10",
                                          "minplayers":"2",
                                          "price":"30",
                                          "slug"  :"game-show-room",
                                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                                         },
                                      {
                                        
                                          "id":3,
                                          "category":"other",
                                          "type": "In person",
                                          "title": "Axe throwing",
                                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                                          "age":"all age",
                                          "duration":"20",
                                          "maxplayers":"10",
                                          "minplayers":"2",
                                          "price":"20",
                                          "slug"  :"axe-throwing",
                                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                                         },
                                      {
                                        
                                      "id":4,
                                      "category":"other",
                                      "type": "In person",
                                      "title": "Beat the Seat",
                                      "description": "harness real-time escape Beat the Seat",
                                      "age":"all age",
                                      "duration":"20",
                                      "maxplayers":"4",
                                      "minplayers":"1",
                                      "price":"24",
                                      "slug"  :"beat-the-seat",
                                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                                     },
                                     
                                    ],
                  "events": [
                                        {
                                          "id":1,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Birthday Party",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"birthday-party",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                                         },
                                         {
                                          "id":2,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Physical Team Building",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"team-building",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                                         },
                                         {
                                          "id":3,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Family Events",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"family-events",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                                         },
                                         {
                                          "id":4,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Bachelor Party",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"bachelor-party",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                                         },
                                         {
                                          "id":5,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Bachelorette Party",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"bachelorette-party",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                                         },
                                         {
                                          "id":6,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Corporate Events",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"corporate-events",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                                         },
                                         {
                                          "id":7,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "School Events",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"school-events",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                                         },
                                         {
                                          "id":8,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Private Party",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"private-party",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                                         },
                                         {
                                          "id":9,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Reunion Party",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"reunion-party",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                                         },
                                         {
                                          "id":10,
                                          "category":"event",
                                           "type": "In person",
                                           "title": "Graduation Party",
                                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                                           "slug"  :"graduation-party",
                                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                                         }
          
                              ],
    
                  },
    //=====================================================================albany ny end
    //=====================================================================buffalo ny
    "buffalo-ny":{
      "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg",
       "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-buffalo-ny-walden-galleria-mall-hero.jpg",
       "coverimageM_alt":"allinadventures escape room buffalo ny walden galleria mall hero",
       "pagemeta":{

              "matatilte":"title",
              "metakeyword":"keywords",
              "metadescription":"metadescription"
       },
    "inpersongames":[
                       {
                         "id":1,
                         "category":"escapegame",
                         "type": "Inperson",
                          "title": "Escape from alcatraz",
                          "description": "harness real-time escape Escape from alcatraz",
                          "age":"all age",
                          "duration":"50",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"escape-from-alcatraz",
                          "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                        },
                        {
                         "id":2,
                         "category":"escapegame",
                          "type": "Inperson",
                          "title": "Treasure Island",
                          "description": "harness real-time escape Treasure Island",
                          "age":"all age",
                          "duration":"50",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"treasure-island",
                          "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                        },
                        {
                         "id":3,
                         "category":"escapegame",
                         "type": "In person",
                         "title": "Superhero's Adventure",
                         "description": "harness real-time escape Superhero's Adventure",
                         "age":"all age",
                         "duration":"40",
                         "maxplayers":"10",
                         "minplayers":"2",
                         "price":"30",
                         "slug"  :"superheros-adventure",
                         "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                        },
                        {
                         "id":4,
                         "category":"escapegame",
                         "type": "In person",
                         "title": "Zombie Apocalypse",
                         "description": "harness real-time escape",
                         "age":"all age",
                         "duration":"40",
                         "maxplayers":"10",
                         "minplayers":"2",
                         "price":"30",
                         "slug"  :"zombie-apocalypse",
                         "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                        },
                        {
                         "id":5,
                         "category":"escapegame",
                         "type": "In person",
                         "title": "Special Agent",
                         "description": "harness real-time escape Special Agent",
                         "age":"all age",
                         "duration":"40",
                         "maxplayers":"10",
                         "minplayers":"2",
                         "price":"30",
                         "slug"  :"special-agent",
                         "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                        },
                        {
                         "id":6,
                         "category":"escapegame",
                         "type": "In person",
                         "title": "Hollywood Premiere",
                         "description": "harness real-time escape Hollywood Premiere",
                         "age":"all age",
                         "duration":"40",
                         "maxplayers":"10",
                         "minplayers":"2",
                         "price":"30",
                         "slug"  :"hollywood-premiere",
                         "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                        },
                        {
                         "id":7,
                         "category":"escapegame",
                         "type": "In person",
                         "title": "Sherlock's Library",
                         "description": "harness real-time escape Sherlock's Library",
                         "age":"all age",
                         "duration":"40",
                         "maxplayers":"10",
                         "minplayers":"2",
                         "price":"30",
                         "slug"  :"sherlocks-library",
                         "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                        },
                        {
                         "id":8,
                         "category":"escapegame",
                         "type": "In person",
                         "title": "Houdini's Magic Cell",
                         "description": "harness real-time escape Houdinis Magic Cell",
                         "age":"all age",
                         "duration":"40",
                         "maxplayers":"10",
                         "minplayers":"2",
                         "price":"30",
                         "slug"  :"houdinis-magic-cell",
                         "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                        },
                        {
                          "id":9,
                          "category":"escapegame",
                          "type": "In person",
                          "title": "Black Ops",
                          "description": "harness real-time escape Black Ops",
                          "age":"all age",
                          "duration":"40",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"black-ops",
                          "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                         },
                         {
                          "id":10,
                          "category":"escapegame",
                          "type": "In person",
                          "title": "Lost in The jungle",
                          "description": "harness real-time escape Black Ops Lost in The jungle",
                          "age":"all age",
                          "duration":"40",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"lost-in-the-jungle",
                          "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                         },
                         {
                          "id":11,
                          "category":"escapegame",
                          "type": "In person",
                          "title": "Lost in The jungle",
                          "description": "harness real-time escape Black Ops Lost in The jungle",
                          "age":"all age",
                          "duration":"40",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"wizarding-school",
                          "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                         },
                         {
                          "id":12,
                          "category":"escapegame",
                          "type": "In person",
                          "title": "Locked in the Lift",
                          "description": "harness real-time escape Black Ops Lost in The jungle",
                          "age":"all age",
                          "duration":"40",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"locked-in-the-lift",
                          "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                         },
                         {
                          "id":13,
                          "category":"escapegame",
                          "type": "In person",
                          "title": "Magic Castle",
                          "description": "harness real-time escape Black Ops Lost in The jungle",
                          "age":"all age",
                          "duration":"40",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"magic-castle",
                          "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                         },

                      ],
    "otherphysicalgames":[
                        {

                            "id":1,
                            "category":"other",
                            "type": "In person",
                            "title": "Virtual Reality",
                            "description": "Select the number of participants fill out the details. fill out the number of details.",
                            "age":"all age",
                            "duration":"20",
                            "maxplayers":"10",
                            "minplayers":"2",
                            "price":"25",
                            "slug"  :"virtual-reality",
                            "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                           },
                          {

                              "id":2,
                              "category":"other",
                              "type": "In person",
                              "title": "Game Show Room",
                              "description": "Select the number of participants fill out the details. fill out the number of details.",
                              "age":"all age",
                              "duration":"30",
                              "maxplayers":"10",
                              "minplayers":"2",
                              "price":"30",
                              "slug"  :"game-show-room",
                              "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                             },
                          {
                            
                              "id":3,
                              "category":"other",
                              "type": "In person",
                              "title": "Axe throwing",
                              "description": "Select the number of participants fill out the details. fill out the number of details.",
                              "age":"all age",
                              "duration":"20",
                              "maxplayers":"10",
                              "minplayers":"2",
                              "price":"20",
                              "slug"  :"axe-throwing",
                              "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                             },
                          {
                            
                          "id":4,
                          "category":"other",
                          "type": "In person",
                          "title": "Beat the Seat",
                          "description": "harness real-time escape Beat the Seat",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"4",
                          "minplayers":"1",
                          "price":"24",
                          "slug"  :"beat-the-seat",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                         },
                         
                        ],
      "events": [
                            {
                              "id":1,
                              "category":"event",
                               "type": "In person",
                               "title": "Birthday Party",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"birthday-party",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                             },
                             {
                              "id":2,
                              "category":"event",
                               "type": "In person",
                               "title": "Physical Team Building",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"team-building",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                             },
                             {
                              "id":3,
                              "category":"event",
                               "type": "In person",
                               "title": "Family Events",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"family-events",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                             },
                             {
                              "id":4,
                              "category":"event",
                               "type": "In person",
                               "title": "Bachelor Party",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"bachelor-party",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                             },
                             {
                              "id":5,
                              "category":"event",
                               "type": "In person",
                               "title": "Bachelorette Party",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"bachelorette-party",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                             },
                             {
                              "id":6,
                              "category":"event",
                               "type": "In person",
                               "title": "Corporate Events",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"corporate-events",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                             },
                             {
                              "id":7,
                              "category":"event",
                               "type": "In person",
                               "title": "School Events",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"school-events",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                             },
                             {
                              "id":8,
                              "category":"event",
                               "type": "In person",
                               "title": "Private Party",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"private-party",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                             },
                             {
                              "id":9,
                              "category":"event",
                               "type": "In person",
                               "title": "Reunion Party",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"reunion-party",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                             },
                             {
                              "id":10,
                              "category":"event",
                               "type": "In person",
                               "title": "Graduation Party",
                               "description": "harness real-time escape harness real-time escape harness real-time escape",
                               "slug"  :"graduation-party",
                               "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                             }

                  ],

      },
//=====================================================================buffalo ny end
//=====================================================================middletown ny
"middletown-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-middletown-ny-galleria-at-crystal-run-mall-hero.jpg",
   "coverimageM_alt":"allinadventures escape room middletown ny galleria at crystal run mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },

//=====================================================================middletown ny end
//=====================================================================syracuse-ny ny
"syracuse-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-syracuse-ny-destiny-usa-mall-hero.jpg",
   "coverimageM_alt":"allinadventures escape room syracuse ny destiny usa mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================syracuse-ny end
//=====================================================================watertown-ny
"watertown-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-watertown-ny-salmon-run-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-watertown-ny-salmon-run-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================watertown-ny end
//=====================================================================west-nyack-ny
"west-nyack-ny":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-west-nyack-ny-palisades-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-west-nyack-ny-palisades-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================west-nyack-ny end

//====================================================================================NY end==============================

//******************************************************************************************NC ==============================
//=====================================================================raleigh-nc
"raleigh-nc":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-raleigh-nc-triangle-town-center-mall-hero",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================raleigh-nc end

//******************************************************************************************NC end==============================
//******************************************************************************************PA ==============================

//=====================================================================bensalem-pa
"bensalem-pa":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-bensalem-pa-neshaminy-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-bensalem-pa-neshaminy-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================bensalem-pa end

//******************************************************************************************PA end==============================
//******************************************************************************************MA ==============================

//=====================================================================hadley-ma
"hadley-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-hadley-ma-hampshire-mall-hero.jpg",
   "coverimageM_alt":"allinadventures escape room hadley ma hampshire mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================hadley-ma end
//=====================================================================holyoke-ma
"holyoke-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-holyoke-ma-holyoke-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-holyoke-ma-holyoke-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================holyoke-ma end
//=====================================================================kingston-ma
"kingston-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-kingston-ma-kingston-collection-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-kingston-ma-kingston-collection-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================kingston-ma end
//=====================================================================n-attleborough-ma
"n-attleborough-ma":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-north-attleborough-ma-emerald-square-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================n-attleborough-ma end

//******************************************************************************************MA end==============================

//****************************************************************************************** TX==============================
//=====================================================================austin-tx
"austin-tx":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-north-attleborough-ma-emerald-square-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-north-attleborough-ma-emerald-square-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================austin-tx end

//******************************************************************************************TX end==============================
//****************************************************************************************** CT==============================
//=====================================================================milford-ct
"milford-ct":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-milford-ct-connecticut-post-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-milford-ct-connecticut-post-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//=====================================================================milford-ct end
//=====================================================================manchester-ct
"manchester-ct":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-manchester-ct-buckland-hills-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-manchester-ct-buckland-hills-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================manchester-ct end
//=====================================================================waterbury-ct
"waterbury-ct":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-waterbury-ct-brass-mills-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-milford-ct-connecticut-post-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================waterbury-ct end
//******************************************************************************************CT end==============================

//******************************************************************************************NJ ==============================
//=====================================================================rockaway-nj
"rockaway-nj":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-rockaway-nj-rockaway-townsquare-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================rockaway-nj end
//=====================================================================east-brunswick-nj
"east-brunswick-nj":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-east-brunswick-nj-brunswick-square-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================east-brunswick-nj end
//=====================================================================woodbridge-nj
"woodbridge-nj":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-woodbridge-nj-woodbridge-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-woodbridge-nj-woodbridge-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================woodbridge-nj end

//******************************************************************************************NJ end==============================


//******************************************************************************************MD==============================
//=====================================================================bowie-md
"bowie-md":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-bowie-md-bowie-town-center-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-bowie-md-bowie-town-center-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================bowie-md end
//=====================================================================white-marsh-md
"white-marsh-md":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-white-marsh-md-white-marsh-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-white-marsh-md-white-marsh-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================white-marsh-md end

//******************************************************************************************MD end==============================


//******************************************************************************************VA==============================
//=====================================================================roanoke-va
"roanoke-va":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-roanoke-va-valley-view-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-roanoke-va-valley-view-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================roanoke-va end

//******************************************************************************************VA end==============================


//******************************************************************************************GA==============================
//=====================================================================lawrenceville-ga
"lawrenceville-ga":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================lawrenceville-ga end

//******************************************************************************************GA end==============================
//******************************************************************************************OH==============================
//=====================================================================columbus-oh
"columbus-oh":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-columbus-oh-polaris-fashion-place-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-lawrenceville-ga-sugarloaf-mills-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================columbus-oh end
//=====================================================================mentor-oh
"mentor-oh":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-mentor-oh-great-lakes-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-mentor-oh-great-lakes-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-mentor-oh-great-lakes-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                },
//====================================================================mentor-oh end
//=====================================================================dayton-oh
"dayton-oh":{
  "coverimageL":"/assets/all-location-desktop-hero/allinadventures-escape-room-dayton-oh-dayton-mall-hero.jpg",
   "coverimageM":"/assets/all-location-mobile-hero/allinadventures-escape-room-dayton-oh-dayton-mall-hero.jpg",
   "coverimageM_alt":"allinadventures-escape-room-dayton-oh-dayton-mall",
   "pagemeta":{

          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
   },
"inpersongames":[
                   {
                     "id":1,
                     "category":"escapegame",
                     "type": "Inperson",
                      "title": "Escape from alcatraz",
                      "description": "harness real-time escape Escape from alcatraz",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"escape-from-alcatraz",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                    },
                    {
                     "id":2,
                     "category":"escapegame",
                      "type": "Inperson",
                      "title": "Treasure Island",
                      "description": "harness real-time escape Treasure Island",
                      "age":"all age",
                      "duration":"50",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"treasure-island",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":3,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Superhero's Adventure",
                     "description": "harness real-time escape Superhero's Adventure",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"superheros-adventure",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":4,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Zombie Apocalypse",
                     "description": "harness real-time escape",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"zombie-apocalypse",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                     "id":5,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Special Agent",
                     "description": "harness real-time escape Special Agent",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"special-agent",
                     "bgimg" :"/assets/all-game-slider-bg/game-5.jpg"
                    },
                    {
                     "id":6,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Hollywood Premiere",
                     "description": "harness real-time escape Hollywood Premiere",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"hollywood-premiere",
                     "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                    },
                    {
                     "id":7,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Sherlock's Library",
                     "description": "harness real-time escape Sherlock's Library",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"sherlocks-library",
                     "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                    },
                    {
                     "id":8,
                     "category":"escapegame",
                     "type": "In person",
                     "title": "Houdini's Magic Cell",
                     "description": "harness real-time escape Houdinis Magic Cell",
                     "age":"all age",
                     "duration":"40",
                     "maxplayers":"10",
                     "minplayers":"2",
                     "price":"30",
                     "slug"  :"houdinis-magic-cell",
                     "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                    },
                    {
                      "id":9,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Black Ops",
                      "description": "harness real-time escape Black Ops",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"black-ops",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":10,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"lost-in-the-jungle",
                      "bgimg" :"/assets/all-game-slider-bg/game-2.jpg"
                     },
                     {
                      "id":11,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Lost in The jungle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"wizarding-school",
                      "bgimg" :"/assets/all-game-slider-bg/game-1.jpg"
                     },
                     {
                      "id":12,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Locked in the Lift",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"locked-in-the-lift",
                      "bgimg" :"/assets/all-game-slider-bg/game-4.jpg"
                     },
                     {
                      "id":13,
                      "category":"escapegame",
                      "type": "In person",
                      "title": "Magic Castle",
                      "description": "harness real-time escape Black Ops Lost in The jungle",
                      "age":"all age",
                      "duration":"40",
                      "maxplayers":"10",
                      "minplayers":"2",
                      "price":"30",
                      "slug"  :"magic-castle",
                      "bgimg" :"/assets/all-game-slider-bg/game-3.jpg"
                     },

                  ],
"otherphysicalgames":[
                    {

                        "id":1,
                        "category":"other",
                        "type": "In person",
                        "title": "Virtual Reality",
                        "description": "Select the number of participants fill out the details. fill out the number of details.",
                        "age":"all age",
                        "duration":"20",
                        "maxplayers":"10",
                        "minplayers":"2",
                        "price":"25",
                        "slug"  :"virtual-reality",
                        "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                       },
                      {

                          "id":2,
                          "category":"other",
                          "type": "In person",
                          "title": "Game Show Room",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"30",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"30",
                          "slug"  :"game-show-room",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-2.jpg"
                         },
                      {
                        
                          "id":3,
                          "category":"other",
                          "type": "In person",
                          "title": "Axe throwing",
                          "description": "Select the number of participants fill out the details. fill out the number of details.",
                          "age":"all age",
                          "duration":"20",
                          "maxplayers":"10",
                          "minplayers":"2",
                          "price":"20",
                          "slug"  :"axe-throwing",
                          "bgimg" :"/assets/all-game-slider-bg/py-game-3.jpg"
                         },
                      {
                        
                      "id":4,
                      "category":"other",
                      "type": "In person",
                      "title": "Beat the Seat",
                      "description": "harness real-time escape Beat the Seat",
                      "age":"all age",
                      "duration":"20",
                      "maxplayers":"4",
                      "minplayers":"1",
                      "price":"24",
                      "slug"  :"beat-the-seat",
                      "bgimg" :"/assets/all-game-slider-bg/py-game-1.jpg"
                     },
                     
                    ],
  "events": [
                        {
                          "id":1,
                          "category":"event",
                           "type": "In person",
                           "title": "Birthday Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"birthday-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-1.jpg"
                         },
                         {
                          "id":2,
                          "category":"event",
                           "type": "In person",
                           "title": "Physical Team Building",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"team-building",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":3,
                          "category":"event",
                           "type": "In person",
                           "title": "Family Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"family-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-3.jpg"
                         },
                         {
                          "id":4,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelor Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelor-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":5,
                          "category":"event",
                           "type": "In person",
                           "title": "Bachelorette Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"bachelorette-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-4.jpg"
                         },
                         {
                          "id":6,
                          "category":"event",
                           "type": "In person",
                           "title": "Corporate Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"corporate-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":7,
                          "category":"event",
                           "type": "In person",
                           "title": "School Events",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"school-events",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":8,
                          "category":"event",
                           "type": "In person",
                           "title": "Private Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"private-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":9,
                          "category":"event",
                           "type": "In person",
                           "title": "Reunion Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"reunion-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         },
                         {
                          "id":10,
                          "category":"event",
                           "type": "In person",
                           "title": "Graduation Party",
                           "description": "harness real-time escape harness real-time escape harness real-time escape",
                           "slug"  :"graduation-party",
                           "bgimg" :"/assets/all-event-slider-bg/sl-event-2.jpg"
                         }

              ],

                }
//====================================================================dayton-oh end

//******************************************************************************************OH end==============================
}