import { getTotal } from "./AllDataList/getTotal"
export const getJobDisclaimerPageData=()=>{

    const jobDisclaimer={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
       "pagemeta":{
  
                  "title":"Job Application Disclaimer Policy | All In Adventures ",
                  "description":"Employment at All in Adventures is contingent upon a background check, which is required for all staff members. If the background check reveals a conviction or misconduct relevant to the position, or if an individual refuses to give consent for a background check, the individual may be disqualified from holding the position.",
                  "keywords":"escape room job, escape room job application, escape game job escape room job application",
                  "url":"/job-application-disclaimer-policy",
                  "metaindex":false,
                  "metaimg":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
                },
           
          "pagedata": {
                        
            "pagetitle":"job application disclaimer policy",
            "pagesubtitle":"",
           
            "coverimageL":"/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
            "coverimageM":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
            "totalLocations": getTotal().totalLocations,
          }
    }

    return jobDisclaimer

}