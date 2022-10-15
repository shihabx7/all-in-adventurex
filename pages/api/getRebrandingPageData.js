import { getTotal } from "./AllDataList/getTotal"
export const getRebrandingPageData=()=>{

    const getRebrandingPageData={
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
                        "pagetitle":"MYSTERY ROOM IS NOW ALL IN ADVENTURES",
                        "pagesubtitle":"We're changing our name from Mystery Room to All In Adventures. Your favorite fun activity center is now more than an escape room place. Come join us to experience more fun activities, including Escape Rooms, Game Show Rooms, Beat the Seat & Axe Throwing with locations throughout the U.S.",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/allinadventures-volunteering-hero.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/allinadventures-volunteering-hero.jpg"
          },

    }

    return getRebrandingPageData

}