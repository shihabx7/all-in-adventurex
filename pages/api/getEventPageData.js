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

         "reviews": [
          {   "id"  : 1,
               "star":5,
              "title": "IT WAS SUPER FUN!",
               "review_text": "I visited All In Adventures with my friend for my first escape room experience, which was super fun! We had a great time and I will definitely return if I am in the area. Highly recommended!",
               "author" :"Myla S.",
               "author_location" :"Albany, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-private-party.jpg",
               "rev_img_alt":"allinadventures-escape-room-private-party.jpg"
             },
             {   "id"  : 2,
               "star":5,
              "title": "WE HAD A BLAST!",
               "review_text": "My 8-year-old son and I did the Treasure Island and Alcatraz. We had a blast. Definitely a challenge for both, but not terribly difficult for the two of us! Definitely recommended!",
               "author" :"Andrew S.",
               "author_location" :"Buffalo, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-dad-son.jpg",
               "rev_img_alt":"escape room in buffalo ny"
             },
             {   "id"  : 3,
               "star":5,
              "title": "HIGHLY RECOMMENDED!",
               "review_text": "They're so friendly and helpful and made us feel so comfortable! If you're looking for a fun place I'd definitely say this is the place for you and your family. 10/10 highly recommended!",
               "author" :"Yalayna D.",
               "author_location" :"Middletown, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-family-activity.jpg",
               "rev_img_alt":"escape room in middletown ny"
             },
             {   "id"  : 4,
               "star":5,
              "title": "WILL COME AGAIN!",
               "review_text": "It was my daughter's birthday! We had a very fun experience. It's a cool place. The game masters were amazing! They have the best personalities, they made it fun. Will come again.",
               "author" :"Nicole H.",
               "author_location" :"Lawrenceville, GA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-kids-birthday-party.jpg",
               "rev_img_alt":"escape room in Lawrenceville ga"
             },
             {   "id"  : 5,
               "star":5,
              "title": "THEMED PERFECTLY!",
               "review_text": "The room and puzzle details were themed perfectly and it was a fun, challenging activity to do as a family. We enjoyed it so much that we can't wait to return to try other rooms.",
               "author" :"Jamie H.",
               "author_location" :"Bensalem, PA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-father-with-family.jpg",
               "rev_img_alt":"escape room in Bensalem pa"
             },
             {   "id"  : 6,
               "star":5,
              "title": "HAPPY AND SATISFIED!",
               "review_text": "The game master made the experience more fun for our group with his humor and was great at providing clues when needed without giving away the answer. Highly recommended for group activity!",
               "author" :"Jayme W.",
               "author_location" :"Kingston, MA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-female-corporate-team-building.jpg",
               "rev_img_alt":"escape room in Kingston MA"
             },
             {   "id"  : 7,
               "star":5,
              "title": "LOTS OF ROOMS!",
               "review_text": "Great thing about this place was lots of rooms and variety to choose from with varying degrees of difficulty. A beginner or an expert could enjoy this place and be able to come multiple times.",
               "author" :"Ligi J.",
               "author_location" :"West Nyack, NY, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-team-building.jpg",
               "rev_img_alt":"escape room in Milford CT"
             },
             {   "id"  : 8,
               "star":5,
              "title": "10/10 RECOMMENDED!",
               "review_text": "As the bride to be, this was the perfect start to my bachelorette party! Staffs were amazing at getting us started and celebrating our win with us! 10/10 absolutely recommended!",
               "author" :"Brittany W.",
               "author_location" :"Roanoke, VA, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-young-girl-with-friends.jpg",
               "rev_img_alt":"escape room in Roanoke va"
             },
             {   "id"  : 9,
               "star":5,
              "title": "GREAT FAMILY ACTIVITY!",
               "review_text": "We had a great time at All In Adventures! The Super Hero escape room was such a great family activity. Our group ranged from 6 years old to 42 and everyone had a blast!",
               "author" :"Gabriela Y.",
               "author_location" :"Rockaway, NJ, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-kids-with-family.jpg",
               "rev_img_alt":"escape room in Rockaway nj"
             },
             {   "id"  : 10,
               "star":5,
              "title": "TEAM BUILDING EVENT!",
               "review_text": "It was so much fun! I brought my real estate team for a team building event and it was 9 of us. We did the Black Ops escape room and needed clues but we enjoyed it a lot. Would do it again.",
               "author" :"India H.",
               "author_location" :"Bowie, MD, United States",
               "rev_img":"/assets/all-testimonials-image/allinadventures-escape-room-testimonials-business-lady-with-team.jpg",
               "rev_img_alt":"escape room in Bowie md"
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