import { getTotal } from "./AllDataList/getTotal"
export const getCareerHomePageData=()=>{


    const careerPageData={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,
         "pagemeta":{
  
            "title":"Careers | All In Adventures | Formerly Mystery Room",
            "description":"We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
            "keywords":"escape room careers, all in adventures careers, mystery room careers, escape room jobs, all in adventures jobs, mystery room jobs,",
            "url":"/careers",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-career-hero.jpg"
          },
           
        "pagedata":{
            "pagetitle":"CAREERS AT ALL IN ADVENTURES",
            "pagesubtitle":"Passion led us here! We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. We love our awesome team! Join us.",
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
            "totalLocations":getTotal().totalLocations,
          
            
        },
        "jobs":[
            {
                "id":1,
                "job_slug":"associate",
                "job_title":"ASSOCIATE",
                "short_desc":"The Associate is the guest experience specialist, who is each guest's first and last impression of All In Adventures! This position serves as the vitally important liaison between our guests and our team. The ideal candidate will greet new guests as they arrive and inquire about the experience after the game."
               
            },
            {
                "id":2,
                "job_slug":"store-lead",
                "job_title":"STORE LEAD",
                "short_desc":"Our Store Lead positions exist to inspire, serve, and empower their team to uphold our outstanding services and hospitality standards. They are ultimately responsible for the success or failure of the store. The ideal candidate is eager to be flexible and creative in a fast-paced, high-stress environment."
               
            },
            {
                "id":3,
                "job_slug":"assistant-manager",
                "job_title":"ASSISTANT MANAGER",
                "short_desc":"Our Assistant Manager assists the Store Manager in encouraging the team to achieve success by ensuring our guests' overall satisfaction. The ideal candidates need positive attitude, willingness to provide outstanding guest service, and a desire to succeed. They must utilize their communication skills."
               
            },
            {
                "id":4,
                "job_slug":"store-manager",
                "job_title":"STORE MANAGER",
                "short_desc":"The Store Manager position inspires your team to achieve success by ensuring the overall satisfaction of our guests. This position requires managing the store's day-to-day operations and financial success, including growing sales through local store marketing efforts."
               
            },
    
        ]
    
    }

    return  careerPageData
}

