import { getTotal } from "./AllDataList/getTotal"
export const getPricingPageData=()=>{

    const pricingPageData={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
          "pagedata": {
                        "pagetitle":"ALL IN ADVENTURES PRICING",
                        "pagesubtitle":"How much does an Escape Room cost? Nowadays, It's a very common question! Escape Room prices vary based on the group size. We offer affordable and innovative pricing for all our games and activities to appeal to groups of all sizes. ",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-pricing-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-pricing-hero.jpg"
          },

          "faqlist":[
            {
                   "id":1,
                   "category":"deals",
                   "group":"deals",
                    "ques":"Does the program cost anything?",
                   "ans":"All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes.",
                   

             },
             {
               "id":2,
               "category":"deals",
               "group":"deals",
               "ques":"Can I join online?",
               "ans":["All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes."],
               

                },
                {
                   "id":4,
                   "category":"deals",
                   "group":"deals",
                   "ques":"What skills do I need to play?",
                   "ans":["All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes."],
                   

                    },
                    {
                       "id":5,
                       "category":"deals",
                       "group":"deals",
                       "ques":"May I leave the room in the middle of the game?",
                       "ans":["All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes."],
                    },
                   {
                     "id":6,
                     "category":"deals",
                     "group":"deals",
                     "ques":"What if we need help during the game?",
                     "ans":["All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes."],
                           
       
                   }
                ],
          "inpersonpricing":[
                    {
                      "id":1,
                      "group_size":"Per Player",
                      "group_text":"Minimum 2 players",
                      "price":"29.89",
                      "person":"Per Person"
                    },
                    {
                      "id":2,
                      "group_size":"4 Players",
                      "group_text":"Full private room",
                      "price":"99.00",
                      "person":"4 Person"
                    },
                    {
                      "id":3,
                      "group_size":"6 Players",
                      "group_text":"Full private room",
                      "price":"149.00",
                      "person":"6 Person"
                    },
                    {
                      "id":4,
                      "group_size":"8 Players",
                      "group_text":"Full private room",
                      "price":"209.00",
                      "person":"8 Person"
                    },
                    {
                      "id":5,
                      "group_size":"10 Players",
                      "group_text":"Full private room",
                      "price":"269.00",
                      "person":"10 Person"
                    },
                    {
                      "id":6,
                      "group_size":"12 Players",
                      "group_text":"Full private room",
                      "price":"329.00",
                      "person":"12 Person"
                    },
                  ],
          "nextgenpricing":[
                    {
                      "id":1,
                      "group_size":"Per Player",
                      "group_text":"Minimum 2 players",
                      "price":"39.95",
                      "person":"Per Person"
                    },
                    {
                      "id":2,
                      "group_size":"4 Players",
                      "group_text":"Full private room",
                      "price":"149.95",
                      "person":"4 Person"
                    },
                    
                  ],
          "questgenpricing":[
                    {
                      "id":1,
                      "group_size":"Per Player",
                      "group_text":"Minimum 2 players",
                      "price":"29.89",
                      "person":"Per Person"
                    },
                    {
                      "id":2,
                      "group_size":"8 Players",
                      "group_text":"Full private room",
                      "price":"209.00",
                      "person":"8 Person"
                    },
                    
                  ],

    }

    return pricingPageData

}