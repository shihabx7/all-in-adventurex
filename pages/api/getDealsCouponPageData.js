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
                        "pagesubtitle":"Check out the best discounts on escape rooms and other fun games for any All In Adventures location. Grab the deal using the promo codes below!",
                         
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
                        "coupon_desc" :"Like us on Facebook and follow us on Instagram to get $2 OFF for each person in your party. Use coupon code at checkout to get your savings, and have everyone show us their Facebook Like or Instagram Follow on their phone when everyone checks-in at the store.",
                        "social":"show",
                        "coupon_offer_off":"$2",
                        "offer_per":"PER PERSON",
                        "coupon_code" :"FACEBOOK",
                        
                    },
                    {
                        "id":2,
                        "coupon_title":"Mall Employee Discount",
                        "coupon_desc" :"All mall employees receive $5 OFF for each person in their party when booking with us. Use coupon code at checkout to get your savings, and show us your valid employee ID or nametag when you check-in at the store.",
                        
                        "coupon_offer_off":"$5",
                        "offer_per":"PER PERSON",
                        "coupon_code" :"EMPLOYEE",
                        
                    },
                    {
                        "id":3,
                        "coupon_title":"Military Discount",
                        "coupon_desc" :"All active & retired military personnel receive $5 OFF for each person in their party when booking with us.  Use coupon code at checkout to get your savings, and show us your valid military ID when you check-in at the store.",
                        
                        "coupon_offer_off":"$5",
                        "offer_per":"PER PERSON",
                        "coupon_code" :"MILITARY",
                        
                    },
                ]

    }


    return dealsCouponPageData

}