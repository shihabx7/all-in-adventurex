
export const geEventPagetData=(data)=>{
    const eventName=data.toString().split('-').join(' ')
   
   // const locationCity=extractData.slice(0, -1).join(' ')

    const eventData={
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"Adventure "+eventName,
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"28",
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
            "totalLocations":28,
            "price":35,
            "duration":50,
            "max_players":10,
            "min_players":2,
            "eventname":eventName,
        },
        "eventdata":{
            "why_book":"Welcome to the world of "+eventName+". Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
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


    }

  return eventData


}