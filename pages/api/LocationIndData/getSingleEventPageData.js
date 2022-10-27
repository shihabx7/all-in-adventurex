
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
 

}