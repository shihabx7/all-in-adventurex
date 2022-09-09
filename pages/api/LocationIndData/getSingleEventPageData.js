
import { getLocationsPageData } from "../getLocationsPageData"
import { getLocationsEventList } from "./getLocationsEventList"
import { bookingList } from "./bookingList"
import { getLocationActivitySlugList } from "./getLocationActivitySlugList"
import { getLocationEventSlugList } from "./getLocationEventSlugList"


export const getSingleEventPageData=(eventslug,locationslug)=>{
     const bookinglist=bookingList('',locationslug)  
    const eventName=eventslug.toString().split('-').join(' ')
  
    const bookingdata=getLocationsEventList(locationslug)
   
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
   const getLocationSearchName=(slug)=>{
      var locs=slug.split("-")
      var st=locs[locs.length-1].toString()
      locs=locs.slice(0,-1)
      locs=locs.join(' ')

      return locs+", "+st
   }

 
     const eventData={
         "pagemeta":eventlocdata[eventslug].pagemeta,
            
         "pagedata":{
             "pagetitle":"Adventure "+eventlocdata[eventslug].eventname,
             "locationslug":locationslug,
             "mall":getLocSpec(locationslug).mall,
             "location_name":locationslug.split('-').join(' '),
             "location_serach_name":getLocationSearchName(locationslug),
             "slug":eventslug,
             "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
             "totalLocation":"28",
             "coverimageL":eventlocdata[eventslug].coverimageL,
             "coverimageM":eventlocdata[eventslug].coverimageM,
             "totalLocations":totalLocation(),
             "price":eventlocdata[eventslug].price,
             "duration":eventlocdata[eventslug].duration,
             "max_players":eventlocdata[eventslug].max_players,
             "min_players":eventlocdata[eventslug].min_players,
             "eventname":eventName,
             "bookingall":{
              "shortname":bookinglist.shortname,
              
          }
         },
         "eventdata":eventlocdata[eventslug].eventdata,
 
          "reviews": eventlocdata[eventslug].reviews,  
          "contactdata":getLocSpec(locationslug) ,
          "activitylist":getLocationActivitySlugList(locationslug),
          "eventlist":getLocationEventSlugList(locationslug),   
 
 
     }
 
   return eventData
}


const eventlocdata={
//===========================================================birthday party==========
    "birthday-party":{
            "eventname":"Birthday Party",
            "coverimageL":"/assets/home-benar-bg.jpg",
             "coverimageM":"/assets/home-hero.jpg",
             "price":35,
             "duration":50,
             "max_players":10,
             "min_players":2,

        "pagemeta":{
 
            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
        "eventdata":{
            "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
            "why_book_img":"/assets/event-dt-img1.jpg",
            "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
            "offer_img":"/assets/event-dt-img2.jpg",
            "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
            "what_expect_img":"/assets/event-dt-img3.jpg",
            "videoid":"pfdyF_d4Z40"
            
            },

         "reviews":        [
                {   "id"  : 1,
                     "star":5,
                    "tilte": "Really enjoyed it!",
                     "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                     "author" :"Margarida R.",
                     "author_location" :"West Nyack, NY",
                     "rev_img":"/assets/reviews/rev-img-1.jpg"
                   },
                   {   "id"  : 2,
                     "star":5,
                    "tilte": "Really enjoyed it!",
                     "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                     "author" :"Margarida R.",
                     "author_location" :"West Nyack, NY",
                     "rev_img":"/assets/reviews/rev-img-1.jpg"
                   },
                   {   "id"  : 3,
                     "star":5,
                    "tilte": "Really enjoyed it!",
                     "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                     "author" :"Margarida R.",
                     "author_location" :"West Nyack, NY",
                     "rev_img":"/assets/reviews/rev-img-1.jpg"
                   },
                   {   "id"  : 4,
                     "star":5,
                    "tilte": "Really enjoyed it!",
                     "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                     "author" :"Margarida R.",
                     "author_location" :"West Nyack, NY",
                     "rev_img":"/assets/reviews/rev-img-1.jpg"
                   },
                   {   "id"  : 5,
                     "star":5,
                    "tilte": "Really enjoyed it!",
                     "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                     "author" :"Margarida R.",
                     "author_location" :"West Nyack, NY",
                     "rev_img":"/assets/reviews/rev-img-1.jpg"
                   },
                   {   "id"  : 6,
                     "star":5,
                    "tilte": "Really enjoyed it!",
                     "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                     "author" :"Margarida R.",
                     "author_location" :"West Nyack, NY",
                     "rev_img":"/assets/reviews/rev-img-1.jpg"
                   },
                   {   "id"  : 7,
                     "star":5,
                    "tilte": "Really enjoyed it!",
                     "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                     "author" :"Margarida R.",
                     "author_location" :"West Nyack, NY",
                     "rev_img":"/assets/reviews/rev-img-1.jpg"
                   },

                 ]
    },
    //===========================================================birthday party end==========
    //===========================================================team-building==========
    "team-building":{
        "eventname":"Physical Team Building",
        "coverimageL":"/assets/home-benar-bg.jpg",
         "coverimageM":"/assets/home-hero.jpg",
         "price":35,
         "duration":50,
         "max_players":10,
         "min_players":2,

    "pagemeta":{

        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
    "eventdata":{
        "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
        "why_book_img":"/assets/event-dt-img1.jpg",
        "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
        "offer_img":"/assets/event-dt-img2.jpg",
        "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
        "what_expect_img":"/assets/event-dt-img3.jpg",
        "videoid":"pfdyF_d4Z40"
        
        },

     "reviews":        [
            {   "id"  : 1,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 2,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 3,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 4,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 5,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 6,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },
               {   "id"  : 7,
                 "star":5,
                "tilte": "Really enjoyed it!",
                 "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                 "author" :"Margarida R.",
                 "author_location" :"West Nyack, NY",
                 "rev_img":"/assets/reviews/rev-img-1.jpg"
               },

             ]
},
//===========================================================team-building end==========
 //===========================================================family-events==========
 "family-events":{
    "eventname":"Physical Team Building",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================family-events end==========
 //===========================================================bachelor-party==========
 "bachelor-party":{
    "eventname":"Bachelor Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================bachelor-party end==========
//===========================================================bachelorette-party==========
"bachelorette-party":{
    "eventname":"Bachelorette Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================bachelorette-party end==========
//===========================================================corporate-events==========
"corporate-events":{
    "eventname":"Corporate Events",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================corporate-events end==========
//===========================================================school-events==========
"school-events":{
    "eventname":"School Events",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================school-events end==========
//===========================================================private-party==========
"private-party":{
    "eventname":"Private Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================private-party end==========
//===========================================================reunion-party==========
"reunion-party":{
    "eventname":"Reunion Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================reunion-party end==========
//===========================================================graduation-party==========
"graduation-party":{
    "eventname":"Graduation Party",
    "coverimageL":"/assets/home-benar-bg.jpg",
     "coverimageM":"/assets/home-hero.jpg",
     "price":35,
     "duration":50,
     "max_players":10,
     "min_players":2,

"pagemeta":{

    "matatilte":"title",
    "metakeyword":"keywords",
    "metadescription":"metadescription"
  },
"eventdata":{
    "why_book":"Welcome to the world of Adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
    "why_book_img":"/assets/event-dt-img1.jpg",
    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
    "offer_img":"/assets/event-dt-img2.jpg",
    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
    "what_expect_img":"/assets/event-dt-img3.jpg",
    "videoid":"pfdyF_d4Z40"
    
    },

 "reviews":        [
        {   "id"  : 1,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 2,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 3,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 4,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 5,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 6,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },
           {   "id"  : 7,
             "star":5,
            "tilte": "Really enjoyed it!",
             "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
             "author" :"Margarida R.",
             "author_location" :"West Nyack, NY",
             "rev_img":"/assets/reviews/rev-img-1.jpg"
           },

         ]
},
//===========================================================reunion-party end==========
 

}