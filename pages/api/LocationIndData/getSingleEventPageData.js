
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

   const insertLoc=(text)=>{
      
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
             "price":20,
             "duration":16,
             "max_players":eventlocdata[eventslug].max_players,
             "min_players":eventlocdata[eventslug].min_players,
             "eventname":eventName,
             "bookingall":{
              "shortname":bookinglist.shortname,
              
          }
         },
         "eventdata":eventlocdata[eventslug].eventdata,
 
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

          ],  
          "contactdata":getLocSpec(locationslug) ,
          "activitylist":getLocationActivitySlugList(locationslug),
          "eventlist":getLocationEventSlugList(locationslug),   
 
 
     }
 
   return eventData
}

/*
const eventlocdata={
//===========================================================birthday party==========
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
 

}*/
const eventlocdata={
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
                   "pagesubtitle":"Are you looking for the most fun, thrilling, and downright nerdy activity for an upcoming bachelor party? Something everyone can participate in? Then play one of our escape rooms. There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
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
                     "why_book":"We offer a unique escape game experience perfect for bachelor parties, where every one of your guests, including yourself, is guaranteed to have fun. Your group will enter into a puzzle room and have to work together to solve riddles and find clues to ESCAPE! You can tailor and personalize your experience from many different escape room themes. If you like to plan something extra for the bachelor, just let us know. There are no logistical nightmares, no stress of arrangements. If you wanted memorable, you've got it!",
                     "why_book_img":"/assets/all-event-details/allinadventures-events-bachelor-party-sec1.jpg",
                     "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                     "offer_img":"/assets/all-event-details/allinadventures-events-bachelor-party-sec2.jpg",
                     "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any bachelor party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out",
                     "what_expect_img":"/assets/all-event-details/allinadventures-events-bachelor-party-sec3.jpg",
                     "videoid":"pfdyF_d4Z40"
                    
                     },
               },
  //********************************************************bachelor-party end */
  //********************************************************bachelorette-party  */
  "bachelorette-party":{
                      "pagesubtitle":"Are you planning a bachelorette party for your best friend or family member and looking for something out of the ordinary? Something everyone can participate in? Then play one of our escape rooms. There's no better way to bond with your bachelorette party before the big day — no drama, no scandals, just nonstop thrills!",
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
                       "why_book":"We offer a unique escape game experience ideal for bachelorette parties, where every one of your guests, including yourself, is guaranteed to have fun. Your group will enter into a puzzle room and have to work together to solve riddles and find clues to ESCAPE! You can tailor and personalize your experience from many different escape room themes. If you like to plan something extra for the bride, just let us know. There are no logistical nightmares, no stress of arrangements. If you wanted memorable, you've got it!",
                       "why_book_img":"/assets/all-event-details/allinadventures-events-bachelorette-party-sec1.jpg",
                       "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                       "offer_img":"/assets/all-event-details/allinadventures-events-bachelorette-party-sec2.jpg",
                       "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any bachelorette party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                       "what_expect_img":"/assets/all-event-details/allinadventures-events-bachelorette-party-sec3.jpg",
                       "videoid":"pfdyF_d4Z40"
                      
                       },
                    },
  //********************************************************bachelorette-party end */
  //********************************************************proposal-party */
  "proposal-party":{
                      "pagesubtitle":"If you're both into adventures, puzzles, and surprises, then there's no better way than proposing in an escape room! Our escape games are designed to engage and challenge with hidden puzzles and a fully customizable experience. Your partner will never see this coming! Sweep your partner off their feet with a proposal they'll never forget.",
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
                         "why_book":"There's nothing more romantic than a surprise proposal. Our themed escape games are ideal for romantic proposals and declarations of love. Your partner will be so distracted looking for clues, that you can get down on one knee while she discovers the ring inside an existing puzzle. Bam! Surprise! A win for you. Totally out of the blue for her. Memories forever. Also, our escape rooms are great bonding activities as you work together to solve mysterious puzzles. Let us know if you want to customize your game for a proposal party. We'll do our best to accommodate your special day for groups of all sizes.",
                         "why_book_img":"/assets/all-event-details/allinadventures-events-proposal-party-sec1.jpg",
                         "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                         "offer_img":"/assets/all-event-details/allinadventures-events-proposal-party-sec2.jpg",
                         "what_expect":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any proposal party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                         "what_expect_img":"/assets/all-event-details/allinadventures-events-proposal-party-sec3.jpg",
                         "videoid":"pfdyF_d4Z40"
                        
                         },
                      },
  //********************************************************proposal-party end */
  //********************************************************date-night*/
  "date-night":{
               "pagesubtitle":"If you both enjoy adventures, mysteries, and surprises, and looking for a fun date night idea or want to add a little excitement to your relationship, plan your date night to play our escape rooms. They're great for couples who love to work together to solve puzzles and complete challenges.",
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
                 "why_book":"Whether you are looking for a unique date night idea or a fun night out with friends and family, our escape rooms provide an experience that your group will never forever. We offer many different escape room themes, and you'll surely find a perfect game that interests your group. In all its fun, escape rooms have an even more meaningful benefit when it comes to date night - strengthening your relationship. In order to escape, you'll need to communicate with your partner and work together to solve mysterious puzzles. In addition, this communication also leads to you both sharing ideas and different perspectives, building your bond.",
                 "why_book_img":"/assets/all-event-details/allinadventures-events-date-night-sec1.jpg",
                 "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                 "offer_img":"/assets/all-event-details/allinadventures-events-date-night-sec2.jpg",
                 "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any date night party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                 "what_expect_img":"/assets/all-event-details/allinadventures-events-date-night-sec3.jpg",
                 "videoid":"pfdyF_d4Z40"
                
                 },
  },
  //********************************************************date-night end */
  //*******************************************************private-party*/
  "private-party":{
    "pagesubtitle":"We offer an array of interactive escape rooms where everyone can participate and become the star of their own action adventure. No matter what occasion you celebrate, escape room party is a great way to bring your family, friends or co-workers together and have enormous fun.",
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
     "why_book":"We tailor each escape room private party to your unique celebration and number of guests. Whether you are a corporate office looking for a fun team-building activity or a group of friends looking for a mental challenge, our escape games give you the challenge you desire. Your group will work together to uncover hidden clues, solve puzzles, and discover secret messages in order to escape before time runs out. All In Adventures is great for families, friends and co-workers, and our out-of-the-box experience is a memorable and exciting way to bond and increase communication.",
     "why_book_img":"/assets/all-event-details/allinadventures-events-private-party-sec1.jpg",
     "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
     "offer_img":"/assets/all-event-details/allinadventures-events-private-party-sec2.jpg",
     "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any private party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
     "what_expect_img":"/assets/all-event-details/allinadventures-events-private-party-sec3.jpg",
     "videoid":"pfdyF_d4Z40"
    
     },
  },
  //********************************************************date-night end */
  //********************************************************reunion-party*/
  "reunion-party":{
                  "pagesubtitle":"There's no shortage of family reunion activities. But how many of them actually involve teamwork and collaboration? That's the question! Our escape rooms are interactive and have engaging qualities that give your reunion party an epic adventure!",
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
                   "why_book":"You can improve your ability to work with your family members during an escape room reunion party, where everyone will work together to achieve a common goal. This interactive event will lead you on how to overcome difficulties, work well with others, and have fun doing it. Your team will have to cooperate to get out of a trapped space and learn more about working together in a pressure-filled situation. Afterward, you can debrief, celebrate, and revel in your successes. It's safe and requires no special skills! Perfect fun activity for every age group.",
                   "why_book_img":"/assets/all-event-details/allinadventures-events-reunion-party-sec1.jpg",
                   "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                   "offer_img":"/assets/all-event-details/allinadventures-events-reunion-party-sec2.jpg",
                   "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any reunion party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                   "what_expect_img":"/assets/all-event-details/allinadventures-events-reunion-party-sec3.jpg",
                   "videoid":"pfdyF_d4Z40"
                  
                   },
                  },
  //********************************************************reunion-party end */
  //********************************************************graduation-party*/
  "graduation-party":{
                  "pagesubtitle":"Graduation is such an exciting time, no matter your age. You deserve to celebrate all that you have achieved. Celebrate your accomplishments in a memorable way with our escape room theme party. Make lasting memories to tell tales to your grandchildren!",
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
                     "why_book":"There's no shortage of graduation party ideas. But how many of them actually involve teamwork and collaboration between friends? That's the question! You can escape the same old graduation party and start cracking interactive puzzles to celebrate your graduation in style. Our escape rooms are interactive and have engaging qualities that give your graduation party an epic adventure! There are no logistical nightmares, no stress of arrangements. If you wanted memorable, you've got it!",
                     "why_book_img":"/assets/all-event-details/allinadventures-events-graduation-party-sec1.jpg",
                     "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                     "offer_img":"/assets/all-event-details/allinadventures-events-graduation-party-sec2.jpg",
                     "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any graduation party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                     "what_expect_img":"/assets/all-event-details/allinadventures-events-graduation-party-sec3.jpg",
                     "videoid":"pfdyF_d4Z40"
                    
                     },
                    },
  //********************************************************graduation-party end */
  //********************************************************school-events*/
  "school-events":{
    "pagesubtitle":"Are you looking for school event ideas that will excite and challenge every student in the classroom or school? Then All In Adventures is a great place for you to bring your student group. Let your students experience a challenging yet fun time at our escape rooms — excellent adventures for any age group.",
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
                       "why_book":"It's a well-known fact that escape rooms provide the perfect activity for school events and team building, and they are also ideal for kids activities such as school trips. At All In Adventures, we provide a unique escape room environment where students develop essential key skills like team working, problem-solving and communication. Our escape rooms are incredibly fun and encourage careful and deliberate thinking in order to solve the puzzles inside the game room. Our games can also be highly educational, serve the purpose of team-building between students, and increase cooperation between classmates and teachers.",
                       "why_book_img":"/assets/all-event-details/allinadventures-events-school-events-sec1.jpg",
                       "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                       "offer_img":"/assets/all-event-details/allinadventures-events-school-events-sec2.jpg",
                       "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any school events / field trips at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                       "what_expect_img":"/assets/all-event-details/allinadventures-events-school-events-sec3.jpg",
                       "videoid":"pfdyF_d4Z40"
                      
                       },
                      },
  //********************************************************school-events end */
  //********************************************************school-events*/
  "gender-reveal-party":{
                    "pagesubtitle":"All In Adventures is famous for hosting unique gender reveal parties. Escape the wild parties in exchange for an escape room gender reveal party where you look for a box that reveals your secret color. Bring your dearest friends and family as you celebrate a gift from God!",
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
                      "why_book":"We provide a unique atmosphere where parents make gender reveal parties a memorable family event. They spend time with friends and family doing something completely different from ordinary parties to solve riddles to unleash the grand secret! Reveal the gender of their baby through a series of puzzles as they find them and accomplish the tasks to open a box filled with surprises! We pack a locked box full of colored balloons and candies, cookies, or anything you would like to be locked in a box for your team to find and figure out how to open it in any of our escape room themes!",
                      "why_book_img":"/assets/all-event-details/allinadventures-events-gender-reveal-party-sec1.jpg",
                      "offer":"Your group can choose one or multiple escape rooms to play. The standard price is $29.89 + Tax per person for one round of the escape room experience.",
                      "offer_img":"/assets/all-event-details/allinadventures-events-gender-reveal-party-sec2.jpg",
                      "what_expect":"Our escape rooms are designed to be challenging but perfect fun activities for all ages and skill levels. Like any gender reveal party at All In Adventures, your team will have a set time of 50-minutes to solve the puzzle located within the escape room. There will be mysterious objects, locks, keys, clues, maps, riddles and more, all inside the escape room, ready for your group to crack the codes. All you need is teamwork, critical thinking and a fun attitude in order to find your way out of the escape room before the time runs out.",
                      "what_expect_img":"/assets/all-event-details/allinadventures-events-gender-reveal-party-sec3.jpg",
                      "videoid":"pfdyF_d4Z40"
                    
                      },
                     },
  //********************************************************school-events end */
  }