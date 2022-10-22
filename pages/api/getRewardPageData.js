import { getTotal } from "./AllDataList/getTotal"
export const getRewardPageData=()=>{

    const rewardPageData={
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
                        "pagetitle":"ALL IN ADVENTURES REWARDS PROGRAM",
                        "pagesubtitle":"In partnership with FIVESTARS, our all-new rewards program offers you to earn points for all experiences, free experience on birthdays, surprise offers, and much more. To join go to READY TO SIGN UP section below. ",
                         "totalLocation":"28",
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-reward-program-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-reward-program-hero.jpg"
          },

          "faqlist":[
            {
                   "id":1,
                   "category":"reward",
                   "group":"reward",
                    "ques":"Does the program cost anything?",
                   "ans":"The VIP program is FREE to join.",
                   

             },
             {
               "id":2,
               "category":"reward",
               "group":"reward",
               "ques":"Can I join online?",
               "ans":"Yes, you can! Just visit the Rewards Program page and go to READY TO SIGN UP section, then click on CHOOSE YOUR LOCATION, and you'll be redirected to fivestars.com site for your selected All In Adventures location.",
               

                },
                {
                   "id":4,
                   "category":"reward",
                   "group":"reward",
                   "ques":"How old do you have to be to join?",
                   "ans":"There is no age limit to join.",
                   

                    },
                    {
                       "id":5,
                       "category":"reward",
                       "group":"reward",
                       "ques":"What if I already purchased an Adventure Club Passport?",
                       "ans":"You can bring your physical passport into the store and exchange it to be added into the new program as a VIP member for NO additional cost.",
                    },
                   {
                     "id":6,
                     "category":"reward",
                     "group":"reward",
                     "ques":"What happens to the stamps I have already collected?",
                     "ans":"All unused stamps will be converted at a rate of 50 points per stamp.",
                           
       
                   },
                   {
                    "id":7,
                    "category":"reward",
                    "group":"reward",
                    "ques":"Will I continue to receive $5 off every visit?",
                    "ans":"The new program does not include this benefit going forward. However, the new program allows you to accumulate points at a much faster rate which you can use to redeem free admissions much quicker.",
                          
      
                  },
                  {
                    "id":7,
                    "category":"reward",
                    "group":"reward",
                    "ques":"Can I redeem points online?",
                    "ans":"You will have to redeem all points physically in the store.",
                          
      
                  }
                ]
    }

    return rewardPageData

}