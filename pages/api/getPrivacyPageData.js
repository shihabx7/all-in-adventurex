import { getTotal } from "./AllDataList/getTotal"
export const getPrivacyPageData=()=>{

    const privacyPageData={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
       "pagemeta":{
  
                  "title":"Privacy Policy | All In Adventures | Formerly Mystery Room",
                  "description":"Our Privacy Policy explains how we handle Personal Information provided to us through our Games (including our online virtual experience) and websites.",
                  "keywords":"escape room privacy policy, all in adventures privacy policy, mystery room privacy policy,",
                  "url":"/privacy-policy",
                  "metaindex":false,
                  "metaimg":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
                },
           
          "pagedata": {
                        
            "pagetitle":"PRIVACY POLICY",
            "pagesubtitle":"",
           
            "coverimageL":"/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
            "coverimageM":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
            "totalLocations": getTotal().totalLocations,
          }
    }

    return privacyPageData

}