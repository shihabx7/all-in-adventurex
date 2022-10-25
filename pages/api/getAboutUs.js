import { getTotal } from "./AllDataList/getTotal"
export const getAboutUs=()=>{
    

    const aboutPageData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"ABOUT ALL IN ADVENTURES",
            "pagesubtitle":"Experience fun activities, escape rooms, game show rooms, beat the seat and axe throwing with locations throughout the U.S.",
           
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-about-us-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-about-us-hero.jpg",
            "totalLocations":getTotal().totalLocations,
        },
        "team_members":[
            {
                "id":1,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":2,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":3,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":4,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":5,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":6,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":7,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":8,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":9,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },
            {
                "id":10,
                "name":"Leo Michael A.",
                "designation":"CEO",
                "img":"/assets/team-img-1.png"
            },

        ]
    }
    return aboutPageData

}