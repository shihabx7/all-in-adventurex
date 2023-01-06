import { getTotal } from "./AllDataList/getTotal"
export const getFranchisePageData=()=>{

    const FranchisepageData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
          "pagemeta":{
  
            "title":"Become an Escape Room Franchise Owner | All In Adventures",
            "description":"Starting an escape room business can be challenging, but our partnership can surely help you avoid costly mistakes. Inquire Now",
            "keywords":"escape room franchise, all in adventures franchise, mystery room franchise, become an escape room franchise owner, escape room business, escape room franchise, escape room franchise cost, the escape game franchise, escape room franchise opportunities, escape franchise, mystery room franchise, paniq room franchise, best escape room franchise, panic room franchise, buy an escape room franchise, breakout games franchise, escapology franchise, escape room business model,",
            "url":"/franchise",
            "metaindex":true,
            "metaimg":"/assets/gn-mobile-hero/allinadventures-franchise-hero.jpg"
          },
           
          "pagedata": {
                        "pagetitle":"BECOME AN ESCAPE ROOM FRANCHISE OWNER",
                        "pagesubtitle":"Starting an escape room business can be challenging, but our partnership can surely help you avoid costly mistakes. Since 2014 All In Adventures escape room centers have been hyper-profitable and already working on every level, from venue development to game setup to branding to operation to advertising.",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-franchise-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-franchise-hero.jpg"
          },
    }

    return FranchisepageData

}