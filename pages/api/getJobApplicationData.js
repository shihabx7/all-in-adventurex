import { getTotal } from "./AllDataList/getTotal"
export const getJobApplicationData=()=>{

    const getJobApplicationData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
          "pagemeta":{
  
            "title":"Apply for job | All In Adventures | Formerly Mystery Room",
            "description":"We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
            "keywords":"escape room careers, all in adventures careers, mystery room careers, escape room jobs, all in adventures jobs, mystery room jobs,",
            "url":"/careers/apply",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-career-hero.jpg"
          },
           
          "pagedata": {
                        "pagetitle":"Employment Application",
                        "pagesubtitle":"Interested in joining our super engaged, guest-centric team of associates?",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-hero.jpg",
          },

    }

    return getJobApplicationData

}