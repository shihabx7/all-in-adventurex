import { getTotal } from "./AllDataList/getTotal"
export const geEventPagetData=(slug)=>{
    const eventName=slug.toString().split('-').join(' ')
   
   // const locationCity=extractData.slice(0, -1).join(' ')

    const eventData={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },

           
        "pagedata":{
            "pagetitle":"ESCAPE ROOM "+eventName,
            "pagesubtitle":eventIndData[slug].pagesubtitle,
            "coverimageL":eventIndData[slug].coverimageL,
            "coverimageM":eventIndData[slug].coverimageM,
            "coverimageM_alt":eventIndData[slug].coverimageM_alt,
            "totalLocations":getTotal().totalLocations,
            "age":eventIndData[slug].age,
            "max_players":eventIndData[slug].max_players,
            "min_players":eventIndData[slug].min_players,
            "eventname":eventName,
            "totalUniqueGames":getTotal().uniqueGames
        },
        "eventdata":eventIndData[slug].eventdata,

        "reviews": eventIndData["birthday-party"].reviews,


    }

  return eventData


}

const eventIndData={
//********************************************************birth day parties */
  "birthday-party":{

                "pagesubtitle":"All In Adventures is famous for hosting the most memorable birthday party in the town. We offer fun-filled escape room experiences and a birthday party venue for all ages and skill levels. Both kids and adults love it!",
                 "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-birthday-party-hero.jpg",
                 "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-birthday-party-hero.jpg",
                 "coverimageM_alt":"allinadventures-events-birthday-party",
                  "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

                "pagemeta":{

                  "matatilte":"title",
                  "metakeyword":"keywords",
                  "metadescription":"metadescription"
                },

                 "eventdata":{
                  "why_book":"Your birthday is coming up and you're googling birthday party venues near me, wondering what to do for one of the most important occasions of the year. Well, celebrate it in style with our escape room birthday party, where every one of your guests, including yourself, is guaranteed to have fun. You can tailor and personalize your experience from many different escape room themes. There are no logistical nightmares, no stress of arrangements. If you wanted memorable, you've got it!",
                  "why_book_img":"/assets/all-event-details/allinadventures-events-birthday-party-sec1.jpg",
                  "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                  "offer_img":"/assets/all-event-details/allinadventures-events-birthday-party-sec2.jpg",
                  "what_expect":"Our kids and family friendly escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any birthday party event at All In Adventures, your team will have a set time of 50-60 minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                  "what_expect_img":"/assets/all-event-details/allinadventures-events-birthday-party-sec3.jpg",
                  "videoid":"pfdyF_d4Z40"
                  
                  },
                  "reviews": [
                    
                       {   "id"  : 1,
                         "star":5,
                        "title": "BEST BIRTHDAY EVER!",
                         "review_text": "We were a group of 8 for the Game Room and we had so much fun! We were celebrating a birthday and the team at this location were great! Afterward we were all talking about how we want to come back soon to play again! Definitely recommend.",
                         "revlink":"https://g.co/kgs/givxmA",
                         "author" :"Lisa Podhayny",
                         "author_location" :"Holyoke, MA, United States",
                         "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-1.jpg",
                         "rev_img_alt":"escape room in Holyoke, MA"
                       },
                       {   "id"  : 2,
                         "star":5,
                        "title": "ADVENTURE OVERLOADED!",
                         "review_text": "I traveled all the way from Brooklyn for a mall day. Steve was so charismatic he definitely sold my group on the Zombie room. Upon checking in Victoria was amazing she explained how the experience would go and even took a great photo before we left. Your team is great here and I think this experience is something everyone should do. I'll be returning soon I want to figure out the Sherlock room. Thank you again to Steve and Victoria",
                         "revlink":"https://g.co/kgs/ZFdQL6",
                         "author" :"Ashley Barrett",
                         "author_location" :"Buffalo, NY, United States",
                         "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-2.jpg",
                         "rev_img_alt":"escape room in Buffalo, NY"
                       },
                       {   "id"  : 3,
                         "star":5,
                        "title": "HIGHLY RECOMMENDED!",
                         "review_text": "Staff was super friendly and super helpful! We loved accomplishing the treasure hunt room even though we couldn't finish the master level. Would love to go back and try out the other rooms they have.",
                         "revlink":"https://g.co/kgs/8sD4bh",
                         "author" :"Shannon Whitney",
                         "author_location" :"Mentor, OH, United States",
                         "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-3.jpg",
                         "rev_img_alt":"escape room in Lawrenceville ga"
                       },
                       {   "id"  : 4,
                         "star":5,
                        "title": "IT WAS SUPER EXCITING!",
                         "review_text": "I visited this Escape Room for a birthday party. We had a booking issue when we first arrived on our end but the manager, Steve, helped us reschedule and fix it! Overall, it very fun visit. We played the Sherlock room and escaped the level 2 stage. The equipment was in good shape. There was a lot of evidence given at the start so it was a little difficult determining which pieces would be most important but the host was very attentive when we needed help and we solved it. Would definitely recommend for a group visit!",
                         "revlink":"https://g.co/kgs/N17pvA",
                         "author" :"Mousse",
                         "author_location" :"Albany, NY, United States",
                         "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-4.jpg",
                         "rev_img_alt":"escape room in Bensalem pa"
                       },
                       {   "id"  : 5,
                         "star":5,
                        "title": "BEST ESCAPE ROOM EVER!",
                         "review_text": "Was such a fun time at the Mystery Room in West Nyack! The employees were great and super helpful. My family did the Zombie Apocalypse room and it was a blast!!! We beat the regular room and was ONE CLUE AWAY from beating Master level - but we still had fun beating the normal level! Can't wait to go back again! (And I might have to go back for my birthday!!)",
                         "revlink":"https://g.co/kgs/hzd2vr",
                         "author" :"Jen Westervelt",
                         "author_location" :"West Nyack, NY, United States",
                         "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-5.jpg",
                         "rev_img_alt":"escape room in Kingston MA"
                       },
                       
                       {   "id"  : 6,
                         "star":5,
                        "title": "PERFECT GIRLS ESCAPE PARTY!",
                         "review_text": "Tried the Sherlock Room here and WOW it was hard, but also very fun! Suggest giving it a try if you like escape rooms. The two hosts who helped (and gave some hints) were very nice.",
                         "revlink":"https://g.co/kgs/HUdAAw",
                         "author" :"Jenny Brescia",
                         "author_location" :"Roanoke, VA, United States",
                         "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-6.jpg",
                         "rev_img_alt":"escape room in Rockaway nj"
                       },
                       {   "id"  : 7,
                         "star":5,
                        "title": "INSANE ESCAPE ROOM BIRTHDAY!",
                         "review_text": "Our experience was amazing!!! Dayna was an awesome host and helped to provide a memorable experience for my son's birthday.  Two thumbs up and will definitely go back again.",
                         "revlink":"https://g.co/kgs/CFerYB",
                         "author" :"Jonathan Barnes",
                         "author_location" :"Lawrenceville, GA, United States",
                         "rev_img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-7.jpg",
                         "rev_img_alt":"escape room in ga "
                       },
          
                     ]
                 },
  //********************************************************birth day parties end*/
  //********************************************************team-building */
  "team-building":{
                      "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",

                      "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-team-building-hero.jpg",
                      "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-team-building-hero.jpg",
                      "coverimageM_alt":"allinadventures-events-team-building",
                      "age":"6+",
                       "max_players":"70",
                       "min_players":"2",
                    
                     "pagemeta":{
                    
                       "matatilte":"title",
                       "metakeyword":"keywords",
                       "metadescription":"metadescription"
                     },
                    
                      "eventdata":{
                       "why_book":"We provide the ideal atmosphere for working together as a team and solving even what may seem like the most unsolvable escape room puzzles you've ever experienced. Our escape rooms are perfect for unique and fun team building activities, and they bring everyone on the team working towards a common goal. Instead of a dreary meeting on how to work effectively as a team, why not take a crack at any of our escape room puzzles?",
                       "why_book_img":"/assets/all-event-details/allinadventures-events-team-building-sec1.jpg",
                       "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                       "offer_img":"/assets/all-event-details/allinadventures-events-team-building-sec2.jpg",
                       "what_expect":"We supply many uniquely themed real life escape rooms for group size small to large. Your team will have a set time of 50-60 minutes to solve the puzzle located within the game room. There will be mysterious objects, riddles, locks, keys, maps, clues and more, all inside the escape room, ready for your team to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out. Finally, when the game is over, your team will have plenty of time to chat and reflect on their experiences.",
                       "what_expect_img":"/assets/all-event-details/allinadventures-events-team-building-sec3.jpg",
                       "videoid":"pfdyF_d4Z40"
                      
                       },
                      },
//********************************************************team-building end */
 //********************************************************corporate-events */
 "corporate-events":{
  "pagesubtitle":"Since 2014, thousands of companies have been using our escape rooms and 5-star guest services to foster employee engagement, run meaningful team building events and celebrate company milestones. Instead of a dreary meeting on how to work effectively, why not take a crack at our escape room puzzles?",
                    "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-corporate-events-hero.jpg",
                    "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-corporate-events-hero.jpg",
                    "coverimageM_alt":"allinadventures-events-corporate-events",
                    "age":"6+",
                     "max_players":"70",
                     "min_players":"2",

                   "pagemeta":{
                  
                     "matatilte":"title",
                     "metakeyword":"keywords",
                     "metadescription":"metadescription"
                   },
                 
                    "eventdata":{
                     "why_book":"Corporate events are frequently held at All In Adventures, and it's no surprise why! We provide a unique atmosphere where communication, leadership, and problem solving skills will all be put to the test. Our escape rooms are perfect for creative and fun team building activities, and they bring everyone on the team working towards a common goal. You can tailor and personalize your experience from many different escape room themes. There are no logistical nightmares, no stress of arrangements. If you wanted memorable, you've got it!",
                     "why_book_img":"/assets/all-event-details/allinadventures-events-corporate-events-sec1.jpg",
                     "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                     "offer_img":"/assets/all-event-details/allinadventures-events-corporate-events-sec2.jpg",
                     "what_expect":"Our corporate escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any event at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                     "what_expect_img":"/assets/all-event-details/allinadventures-events-corporate-events-sec3.jpg",
                     "videoid":"pfdyF_d4Z40"
                    
                     },
                    },
//********************************************************corporate-events end */
//********************************************************family-fun-activity */
"family-fun-activity":{
                    "pagesubtitle":"Our family-friendly escape rooms provide a way to experience a story where you become part of the story rather than just observing. It's a safe and fun way to have a real adventure, where you and your team (your family in this case) enter into a puzzle room and solve different puzzles to ESCAPE!",
                      "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-family-fun-activities-hero.jpg",
                      "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-family-fun-activities-hero.jpg",
                      "coverimageM_alt":"allinadventures-events-family-fun-activitie",
                      "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

                     "pagemeta":{
                    
                       "matatilte":"title",
                       "metakeyword":"keywords",
                       "metadescription":"metadescription"
                     },
                   
                      "eventdata":{
                       "why_book":"Family activities are frequently held at All In Adventures, and it's easy to see why. We provide a unique atmosphere where you can spend time with family members doing something completely different from normal life. Our escape games engage kids and adults of all ages. Kids from 10 years old will actively participate in puzzle solving and have a wonderful time. Kids 6-9 years old will need a little support from the adults but will definitely enjoy the fun experience. Kids under 6 years old can play for FREE with two or more adults paying full price.",
                       "why_book_img":"/assets/all-event-details/allinadventures-events-family-fun-activities-sec1.jpg",
                       "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                       "offer_img":"/assets/all-event-details/allinadventures-events-family-fun-activities-sec2.jpg",
                       "what_expect":"Our family-friendly escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any family activity at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                       "what_expect_img":"/assets/all-event-details/allinadventures-events-family-fun-activities-sec3.jpg",
                       "videoid":"pfdyF_d4Z40"
                      
                       },
                      },
//********************************************************family-fun-activity end */
//********************************************************bachelor-party  */
"bachelor-party":{
                 "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
                  "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-bachelor-party-hero.jpg",
                  "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-bachelor-party-hero.jpg",
                  "coverimageM_alt":"allinadventures-events-bachelor-party",
                  "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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
                    "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
                    "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-bachelorette-party-hero.jpg",
                    "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-bachelorette-party-hero.jpg",
                    "coverimageM_alt":"allinadventures-events-bachelorette-party",
                    "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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
                    "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
                      "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-proposal-party-hero.jpg",
                      "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-proposal-party-hero.jpg",
                      "coverimageM_alt":"allinadventures-events-proposal-party",
                      "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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
             "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
              "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-date-night-hero.jpg",
              "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-date-night-hero.jpg",
              "coverimageM_alt":"allinadventures-events-date-night",
              "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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
  "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
  "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-private-party-hero.jpg",
  "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-private-party-hero.jpg",
  "coverimageM_alt":"allinadventures-events-private-party",
  "age":"6+",
    "max_players":"70",
    "min_players":"2",

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
                "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
                "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-reunion-party-hero.jpg",
                "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-reunion-party-hero.jpg",
                "coverimageM_alt":"allinadventures-events-reunion-party",
                "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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
                "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
                  "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-graduation-party-hero.jpg",
                  "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-graduation-party-hero.jpg",
                  "coverimageM_alt":"allinadventures-events-graduation-party",
                  "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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
  "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
                    "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-school-events-hero.jpg",
                    "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-school-events-hero.jpg",
                    "coverimageM_alt":"allinadventures-events-school-events",
                    "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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
                  "pagesubtitle":"Our escape rooms are designed to be collaborative, integrated team building experiences that leave teams stronger than when they started. Bring your groups, employees, students or volunteers to create exciting memories while strengthening the relationship as a team.",
                   "coverimageL":"/assets/all-event-desktop-hero/allinadventures-events-gender-reveal-party-hero.jpg",
                   "coverimageM":"/assets/all-event-mobile-hero/allinadventures-events-gender-reveal-party-hero.jpg",
                   "coverimageM_alt":"allinadventures-events-gender-reveal-party",
                   "age":"6+",
                 "max_players":"70",
                 "min_players":"2",

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