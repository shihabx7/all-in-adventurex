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
                    "ques":"How can I get a discount?",
                   "ans":["Glad you asked! Our best offers come from our VIP Rewards Program where you will receive points each time you play that you can use to redeem free experiences and receive additional surprise offers every month! In addition, we offer many other discounts such as our Play It Again offer or our military or mall employee discounts."],
                   

             },
             {
               "id":2,
               "category":"deals",
               "group":"deals",
               "ques":"How do I use my discounts?",
               "ans":["Many offers will have a promotional code that can be applied to your cart during the checkout process. Some promotions are only available in-store and must be applied by one of our team members. If you have any issues, please contact your local All In Adventures store for further assistance."],
               

                },
                {
                   "id":3,
                   "category":"deals",
                   "group":"deals",
                   "ques":"It's my birthday! Do you have any discounts for me?",
                   "ans":["Yes! By signing up for our VIP Rewards Program, you will earn a FREE admission on your birthday each year! Choose a location here to sign up."],
                   

                    },
                    {
                       "id":4,
                       "category":"deals",
                       "group":"deals",
                       "ques":"I am already a VIP Rewards Member. How many discounts can I use at one time?",
                       "ans":["Yes! By signing up for our VIP Rewards Program, you will earn a FREE admission on your birthday each year! Choose a location here to sign up."],
                    },
                   {
                     "id":5,
                     "category":"deals",
                     "group":"deals",
                     "ques":"What if we need help during the game?",
                     "ans":["You can only use one offer at a time per transaction."],
                           
       
                   },
                   {
                    "id":6,
                    "category":"deals",
                    "group":"deals",
                    "ques":"Do you have any discounts for first responders?",
                    "ans":["Absolutely! We invite you to take advantage of our Military discount. Just show proof of employment upon arriving for your booking!"],
                          
      
                  },
                   {
                    "id":7,
                    "category":"deals",
                    "group":"deals",
                    "ques":"What if we need help during the game?",
                    "ans":["We do! Please check out our events page here for more information and group rates. Have more questions? Reach out to us at <a href=\"mailto:sales@allinadventures.com\" class=\"text-gold hover:text-blue-700\"> sales@allinadventures.com</a> for additional help."],
                          
      
                  },
                
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