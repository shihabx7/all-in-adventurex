import { getTotal } from "./AllDataList/getTotal"
export const getFranchisePageData=()=>{

    const FranchisepageData={
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
                        "pagetitle":"BECOME AN ESCAPE ROOM FRANCHISE OWNER",
                        "pagesubtitle":"Starting an escape room business can be challenging, but our partnership can surely help you avoid costly mistakes. Since 2014 All In Adventures escape room franchise model has been hyper-profitable and already working on every level, from venue development to game setup to branding to operation to advertising",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-franchise-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-franchise-hero.jpg"
          },
    }

    return FranchisepageData

}