import { getTotal } from "./AllDataList/getTotal"
export const getTermsConditionPageData=()=>{

    const termsConditionPageData={
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
                        
            "pagetitle":"TERMS OF SERVICES",
            "pagesubtitle":"",
            
            "coverimageL":"/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
            "coverimageM":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg",
            "totalLocations": getTotal().totalLocations,
          }
    }

    return termsConditionPageData

}