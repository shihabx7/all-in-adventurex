import { getTotal } from "./AllDataList/getTotal"
export const getFranchiseContactPageData=()=>{

    const FranchiseContactPageData={
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
                        "pagetitle":"FRANCHISE CONTACT",
                        "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, game show room, beat the seat. Bring your friend & family today. ",
                         "totalLocation":"28",
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-corporate-contact-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-corporate-contact-hero.jpg"
          },
    }

    return FranchiseContactPageData

}