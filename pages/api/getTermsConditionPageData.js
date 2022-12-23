import { getTotal } from "./AllDataList/getTotal"
export const getTermsConditionPageData=()=>{

    const termsConditionPageData={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
       "pagemeta":{
  
                 "title":"Terms of Services | All In Adventures | Formerly Mystery Room",
                 "description":"Our Terms of Services sets out the general terms and conditions on your use of our Games (including our online virtual experience) and websites.",
                 "keywords":"escape room terms of services, all in adventures terms of services, mystery room terms of services,",
                 "url":"/terms-of-services",
                 "metaindex":false,
                 "metaimg":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
               },
           
          "pagedata": {
                        
            "pagetitle":"TERMS OF SERVICES",
            "pagesubtitle":"",
            
            "coverimageL":"/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
            "coverimageM":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
            "totalLocations": getTotal().totalLocations,
          }
    }

    return termsConditionPageData

}