import { getTotal } from "./AllDataList/getTotal"
export const getGiftCardPageData=()=>{

    const giftcardData={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,

         "pagemeta":{
  
            "title":"Escape Room Gift Cards - All In Adventures",
            "description":"Whether it's someone's birthday, anniversary or a holiday such as Christmas - an All In Adventures Gift Card is a perfect present for any occasion.",
            "keywords":"escape room gift cards, escape room gift card, escape room gift certificate, escape room gift certificates, escape room gift vouchers, escape room gift voucher, all in adventures gift cards, all in adventures gift card, mystery room gift cards, mystery room gift card",
            "url":"/gift-cards",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-gift-cards-hero-mobile.jpg"
                    },
        "pagedata":{
            "pagetitle":"BUY GIFT CARDS",
            "pagesubtitle":"We've got your gift needs covered for birthdays, holidays, special surprises, and just about everything else in between. You'll be pleased to know that unlike a lot of other gift programs, our Gift Cards never expire! To buy or redeem Gift Cards, visit the location-specific Gift Card page to find a local store near you.",
            
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-gift-cards-hero-desktop.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-gift-cards-hero-mobile.jpg",
            "totalLocations":getTotal().totalLocations,
           
        },
        "gift_faq":[
            {
                        "id":1,
                        "group":"GIFT_CARDS",
                        "category":"gift",
                        "ques":"How to purchase your Gift Cards?",
                        "ans":[
                            "Choose the Location. Then, select the Gift Card amount, fill out the requested details, add it to your cart, and checkout. ",
                            "<p class=\"mt-2 lg:mt-3\">Once you complete your purchase, you will be sent an email with the Gift Card number. If you are giving the card as a gift, follow the directions in your confirmation email to send them through email directly to the recipient. If you prefer a physical Gift Card, please visit your local store.</p>",
                            "<p class=\"mt-2 lg:mt-3\"><span class=\"underline underline-offset-4 font-medium\">Please note:</span> If you have not received your Gift Card(s), please check your spam folder.</p>"
                        ]
                        

                  },
                  {
                    "id":2,
                    "group":"GIFT_CARDS",
                    "category":"gift",
                    "ques":"How do I redeem the Gift Cards?",
                    "ans":[
                        "Gift card holders can redeem the card online at www.allinadventures.com or directly in-store where the Gift Card was purchased. Contact us directly at your local store or call our customer service team at ",
                        "<a href=\"tel:844-502-5546\" class=\"text-red-600 hover:text-red-700\">844-502-5546</a> to redeem it over the phone."
                    ]
                    

                },
                 {
                "id":3,
                "group":"GIFT_CARDS",
                "category":"gift",
                "ques":"Do Gift Cards expire?",
                "ans":[
                    "Our Gift Cards never expire from the day of issue."
                ]
                

                 },
                 {
                    "id":4,
                    "group":"GIFT_CARDS",
                    "category":"gift",
                    "ques":"Do we need to make a reservation to use a Gift Card?",
                    "ans":[
                        "No reservation is needed but we always suggest making a reservation beforehand to ensure you get the experience and time slot that you prefer. Walk-ins are available but availability is not guaranteed."
                    ]
                    
    
                     },
                     {
                        "id":5,
                        "group":"GIFT_CARDS",
                        "category":"gift",
                        "ques":"What happens if I prepay for my reservation in advance?",
                        "ans":[
                            "If you prepaid for your reservation, your payment will be refunded when you present your Gift Card on Location."
                        ]
                        
        
                         },
                         {
                            "id":6,
                            "group":"GIFT_CARDS",
                            "category":"gift",
                            "ques":"Can I get a physical Gift Card instead of an electronic one?",
                            "ans":[
                                "Physical Gift Cards can be provided at our Location."
                            ]
                            
            
                             },
                     
        ]
    }

    return giftcardData
}