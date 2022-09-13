import { getTotal } from "./AllDataList/getTotal"
export const geEventPagetData=(slug)=>{
    const eventName=slug.toString().split('-').join(' ')
   
   // const locationCity=extractData.slice(0, -1).join(' ')

    const eventData={
      "locationlist":getTotal().locationlist,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"Adventure "+eventName,
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "coverimageL":eventIndData[slug].coverimageL,
            "coverimageM":eventIndData[slug].coverimageM,
            "coverimageM_alt":eventIndData[slug].coverimageM_alt,
            "totalLocations":getTotal().totalLocations,
            "price":eventIndData[slug].price,
            "duration":eventIndData[slug].duration,
            "max_players":eventIndData[slug].max_players,
            "min_players":eventIndData[slug].min_players,
            "eventname":eventName,
        },
        "eventdata":eventIndData[slug].eventdata,

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


    }

  return eventData


}

const eventIndData={
//********************************************************birth day parties */
  "birthday-party":{

                 "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-birthday-party-hero.jpg",
                 "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-birthday-party-hero.jpg",
                 "coverimageM_alt":"allinadventures-events-birthday-party",
                 "price":"40",
                  "duration":"40",
                 "max_players":"16",
                 "min_players":"4",

                "pagemeta":{

                  "matatilte":"title",
                  "metakeyword":"keywords",
                  "metadescription":"metadescription"
                },

                 "eventdata":{
                  "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                  "why_book_img":"/assets/event-dt-img1.jpg",
                  "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                  "offer_img":"/assets/event-dt-img2.jpg",
                  "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                  "what_expect_img":"/assets/event-dt-img3.jpg",
                  "videoid":"pfdyF_d4Z40"
                  
                  },
                 },
  //********************************************************birth day parties end*/
  //********************************************************team-building */
  "team-building":{

                      "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-team-building-hero.jpg",
                      "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-team-building-hero.jpg",
                      "coverimageM_alt":"allinadventures-events-team-building",
                      "price":"44",
                       "duration":"60",
                      "max_players":"16",
                      "min_players":"4",
                    
                     "pagemeta":{
                    
                       "matatilte":"title",
                       "metakeyword":"keywords",
                       "metadescription":"metadescription"
                     },
                    
                      "eventdata":{
                       "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                       "why_book_img":"/assets/event-dt-img1.jpg",
                       "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                       "offer_img":"/assets/event-dt-img2.jpg",
                       "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                       "what_expect_img":"/assets/event-dt-img3.jpg",
                       "videoid":"pfdyF_d4Z40"
                      
                       },
                      },
//********************************************************team-building end */
 //********************************************************corporate-events */
 "corporate-events":{

                    "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-corporate-events-hero.jpg",
                    "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-corporate-events-hero.jpg",
                    "coverimageM_alt":"allinadventures-events-corporate-events",
                    "price":"40",
                     "duration":"40",
                    "max_players":"16",
                    "min_players":"4",

                   "pagemeta":{
                  
                     "matatilte":"title",
                     "metakeyword":"keywords",
                     "metadescription":"metadescription"
                   },
                 
                    "eventdata":{
                     "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                     "why_book_img":"/assets/event-dt-img1.jpg",
                     "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                     "offer_img":"/assets/event-dt-img2.jpg",
                     "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                     "what_expect_img":"/assets/event-dt-img3.jpg",
                     "videoid":"pfdyF_d4Z40"
                    
                     },
                    },
//********************************************************corporate-events end */
//********************************************************family-fun-activity */
"family-fun-activity":{

                      "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-family-fun-activities-hero.jpg",
                      "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-family-fun-activities-hero.jpg",
                      "coverimageM_alt":"allinadventures-events-family-fun-activitie",
                      "price":"40",
                       "duration":"40",
                      "max_players":"16",
                      "min_players":"4",

                     "pagemeta":{
                    
                       "matatilte":"title",
                       "metakeyword":"keywords",
                       "metadescription":"metadescription"
                     },
                   
                      "eventdata":{
                       "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                       "why_book_img":"/assets/event-dt-img1.jpg",
                       "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                       "offer_img":"/assets/event-dt-img2.jpg",
                       "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                       "what_expect_img":"/assets/event-dt-img3.jpg",
                       "videoid":"pfdyF_d4Z40"
                      
                       },
                      },
//********************************************************family-fun-activity end */
//********************************************************bachelor-party  */
"bachelor-party":{

                  "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-bachelor-party-hero.jpg",
                  "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-bachelor-party-hero.jpg",
                  "coverimageM_alt":"allinadventures-events-bachelor-party",
                  "price":"40",
                   "duration":"40",
                  "max_players":"16",
                  "min_players":"4",

                 "pagemeta":{
                
                   "matatilte":"title",
                   "metakeyword":"keywords",
                   "metadescription":"metadescription"
                 },
               
                  "eventdata":{
                   "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                   "why_book_img":"/assets/event-dt-img1.jpg",
                   "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                   "offer_img":"/assets/event-dt-img2.jpg",
                   "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                   "what_expect_img":"/assets/event-dt-img3.jpg",
                   "videoid":"pfdyF_d4Z40"
                  
                   },
             },
//********************************************************bachelor-party end */
//********************************************************bachelorette-party  */
"bachelorette-party":{

                    "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-bachelorette-party-hero.jpg",
                    "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-bachelorette-party-hero.jpg",
                    "coverimageM_alt":"allinadventures-events-bachelorette-party",
                    "price":"40",
                     "duration":"40",
                    "max_players":"16",
                    "min_players":"4",

                   "pagemeta":{
                  
                     "matatilte":"title",
                     "metakeyword":"keywords",
                     "metadescription":"metadescription"
                   },
                 
                    "eventdata":{
                     "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                     "why_book_img":"/assets/event-dt-img1.jpg",
                     "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                     "offer_img":"/assets/event-dt-img2.jpg",
                     "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                     "what_expect_img":"/assets/event-dt-img3.jpg",
                     "videoid":"pfdyF_d4Z40"
                    
                     },
                  },
//********************************************************bachelorette-party end */
//********************************************************proposal-party */
"proposal-party":{

                      "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-proposal-party-hero.jpg",
                      "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-proposal-party-hero.jpg",
                      "coverimageM_alt":"allinadventures-events-proposal-party",
                      "price":"40",
                       "duration":"40",
                      "max_players":"16",
                      "min_players":"4",

                     "pagemeta":{
                    
                       "matatilte":"title",
                       "metakeyword":"keywords",
                       "metadescription":"metadescription"
                     },
                   
                      "eventdata":{
                       "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                       "why_book_img":"/assets/event-dt-img1.jpg",
                       "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                       "offer_img":"/assets/event-dt-img2.jpg",
                       "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                       "what_expect_img":"/assets/event-dt-img3.jpg",
                       "videoid":"pfdyF_d4Z40"
                      
                       },
                    },
//********************************************************proposal-party end */
//********************************************************date-night*/
"date-night":{

              "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-date-night-hero.jpg",
              "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-date-night-hero.jpg",
              "coverimageM_alt":"allinadventures-events-date-night",
              "price":"40",
               "duration":"40",
              "max_players":"16",
              "min_players":"4",

             "pagemeta":{
            
               "matatilte":"title",
               "metakeyword":"keywords",
               "metadescription":"metadescription"
             },
           
              "eventdata":{
               "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
               "why_book_img":"/assets/event-dt-img1.jpg",
               "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
               "offer_img":"/assets/event-dt-img2.jpg",
               "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
               "what_expect_img":"/assets/event-dt-img3.jpg",
               "videoid":"pfdyF_d4Z40"
              
               },
},
//********************************************************date-night end */
//*******************************************************private-party*/
"private-party":{

  "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-private-party-hero.jpg",
  "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-private-party-hero.jpg",
  "coverimageM_alt":"allinadventures-events-private-party",
  "price":"40",
   "duration":"40",
  "max_players":"16",
  "min_players":"4",

 "pagemeta":{

   "matatilte":"title",
   "metakeyword":"keywords",
   "metadescription":"metadescription"
 },

  "eventdata":{
   "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
   "why_book_img":"/assets/event-dt-img1.jpg",
   "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
   "offer_img":"/assets/event-dt-img2.jpg",
   "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
   "what_expect_img":"/assets/event-dt-img3.jpg",
   "videoid":"pfdyF_d4Z40"
  
   },
},
//********************************************************date-night end */
//********************************************************reunion-party*/
"reunion-party":{

                "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-reunion-party-hero.jpg",
                "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-reunion-party-hero.jpg",
                "coverimageM_alt":"allinadventures-events-reunion-party",
                "price":"40",
                 "duration":"40",
                "max_players":"16",
                "min_players":"4",

               "pagemeta":{
              
                 "matatilte":"title",
                 "metakeyword":"keywords",
                 "metadescription":"metadescription"
               },
             
                "eventdata":{
                 "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                 "why_book_img":"/assets/event-dt-img1.jpg",
                 "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                 "offer_img":"/assets/event-dt-img2.jpg",
                 "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                 "what_expect_img":"/assets/event-dt-img3.jpg",
                 "videoid":"pfdyF_d4Z40"
                
                 },
                },
//********************************************************reunion-party end */
//********************************************************graduation-party*/
"graduation-party":{

                  "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-graduation-party-hero.jpg",
                  "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-graduation-party-hero.jpg",
                  "coverimageM_alt":"allinadventures-events-graduation-party",
                  "price":"40",
                   "duration":"40",
                  "max_players":"16",
                  "min_players":"4",

                 "pagemeta":{
                
                   "matatilte":"title",
                   "metakeyword":"keywords",
                   "metadescription":"metadescription"
                 },
               
                  "eventdata":{
                   "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                   "why_book_img":"/assets/event-dt-img1.jpg",
                   "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                   "offer_img":"/assets/event-dt-img2.jpg",
                   "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                   "what_expect_img":"/assets/event-dt-img3.jpg",
                   "videoid":"pfdyF_d4Z40"
                  
                   },
                  },
//********************************************************graduation-party end */
//********************************************************school-events*/
"school-events":{

                    "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-school-events-hero.jpg",
                    "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-school-events-hero.jpg",
                    "coverimageM_alt":"allinadventures-events-school-events",
                    "price":"40",
                     "duration":"40",
                    "max_players":"16",
                    "min_players":"4",

                   "pagemeta":{
                  
                     "matatilte":"title",
                     "metakeyword":"keywords",
                     "metadescription":"metadescription"
                   },
                 
                    "eventdata":{
                     "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                     "why_book_img":"/assets/event-dt-img1.jpg",
                     "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                     "offer_img":"/assets/event-dt-img2.jpg",
                     "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                     "what_expect_img":"/assets/event-dt-img3.jpg",
                     "videoid":"pfdyF_d4Z40"
                    
                     },
                    },
//********************************************************school-events end */
//********************************************************school-events*/
"gender-reveal-party":{

                   "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-gender-reveal-party-hero.jpg",
                   "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-gender-reveal-party-hero.jpg",
                   "coverimageM_alt":"allinadventures-events-gender-reveal-party",
                   "price":"40",
                    "duration":"40",
                   "max_players":"16",
                   "min_players":"4",

                  "pagemeta":{
                  
                    "matatilte":"title",
                    "metakeyword":"keywords",
                    "metadescription":"metadescription"
                  },
                
                   "eventdata":{
                    "why_book":"Welcome to the world of adventure. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
                    "why_book_img":"/assets/event-dt-img1.jpg",
                    "offer":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
                    "offer_img":"/assets/event-dt-img2.jpg",
                    "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
                    "what_expect_img":"/assets/event-dt-img3.jpg",
                    "videoid":"pfdyF_d4Z40"
                  
                    },
                   },
//********************************************************school-events end */
}