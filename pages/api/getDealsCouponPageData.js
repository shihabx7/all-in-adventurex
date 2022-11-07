import { getTotal } from "./AllDataList/getTotal"
export const getDealsCouponPageData=()=>{

    const dealsCouponPageData={
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
                        "pagetitle":"DEALS AND COUPONS",
                        "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-deals-and-coupon-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-deals-and-coupon-hero.jpg"
          },

          "faqlist":[
            {
                   "id":1,
                   "category":"deals",
                   "group":"deals",
                    "ques":"Does the program cost anything?",
                   "ans":["All In Adventure is the world's No. 1 fastest growing escape-the-room franchise. It is a high adrenaline escape game where players are locked inside a themed room and must complete their mission before time runs out. During the 60-minute experience players are immersed into a real-life adventure where they must find hidden clues, crack codes."],
                   

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

                "couponlist":[
                    {
                        "id":1,
                        "coupon_title":"FACEBOOK & INSTAGRAM",
                        "coupon_desc" :"Like us on Facebook and follow us on Instagram to get $2 off!",
                        "social":"show",
                        "coupon_offer_off":"2%",
                        "coupon_code" :"LIKE2022",
                        
                    },
                    {
                        "id":2,
                        "coupon_title":"MALL EMPLOYEE DISCOUNT",
                        "coupon_desc" :"All mall employees get $5 off when booking with us. Use coupon code at checkout to get your savings, and bring your valid employee ID or nametag when you check-in at the store.",
                        
                        "coupon_offer_off":"5%",
                        "coupon_code" :"AIAMIL20",
                        
                    },
                    {
                        "id":3,
                        "coupon_title":"MILITARY DISCOUNT",
                        "coupon_desc" :"All active & retired military personnel receive a discount of $5 OFF! Use coupon code at checkout to get $5 off your admission.",
                        
                        "coupon_offer_off":"5%",
                        "coupon_code" :"AIAMIL25",
                        
                    },
                ]

    }


    return dealsCouponPageData

}