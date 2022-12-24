import { getTotal } from "./AllDataList/getTotal"
export const getFranchiseContactPageData=()=>{

    const FranchiseContactPageData={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,
         "pagemeta":{
  
            "title":"Franchise Contact | All In Adventures",
            "description":"All In Adventures will save you time and money by avoiding common mistakes and helping set up thriving venues. Need more information? Fill out the required fields below.",
            "keywords":"all in adventures franchise contact, mystery room franchise contact,",
            "url":"/franchise-contact",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-corporate-contact-hero.jpg"
          },
           
          "pagedata": {
                        "pagetitle":"FRANCHISE CONTACT",
                        "pagesubtitle":"All In Adventures will save you time and money by avoiding common mistakes and helping set up thriving venues, systems, and processes. Need more information? Simply fill out the required fields below.",
                         "totalLocation":"28",
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-corporate-contact-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-corporate-contact-hero.jpg"
          },
    }

    return FranchiseContactPageData

}