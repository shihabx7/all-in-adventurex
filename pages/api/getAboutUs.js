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
                "name":"Reichel, John",
                "designation":"Founder/CEO",
                "img":"/assets/team-member/John-Reichel.png"
            },
            {
                "id":2,
                "name":"Patel, Chetan",
                "designation":"President",
                "img":"/assets/team-member/Chetan-Patel.png"
            },
            {
                "id":3,
                "name":"Reshoft, Sara",
                "designation":"Vice President of Planning and Facilities",
                "img":"/assets/team-member/Sara-Reshoft.png"
            },
            {
                "id":4,
                "name":"Reichel, Jennifer",
                "designation":"Human Resources Specialist",
                "img":"/assets/team-member/Jen-Reichel.png"
            },
            {
                "id":5,
                "name":"Palmer, Beth",
                "designation":"Director of Employee Development",
                "img":"/assets/team-member/Beth-Palmer.png"
            },
            {
                "id":6,
                "name":"Reshoft, John",
                "designation":"Director of Construction and Facilities",
                "img":"/assets/team-member/John-Reshoft.png"
            },
            {
                "id":7,
                "name":"Capps, Brian",
                "designation":"Director of Game Development",
                "img":"/assets/team-member/Brian-Capps.png"
            },
            {
                "id":8,
                "name":"Pursell, Jordan",
                "designation":"Regional Manager",
                "img":"/assets/team-member/Jordan-Pursell.png"
            },
            {
                "id":9,
                "name":"Seide, Bruce",
                "designation":"Regional Manager",
                "img":"/assets/team-member/Bruce-Seide.png"
            },
            {
                "id":10,
                "name":"Spink, Adam",
                "designation":"Regional Manager",
                "img":"/assets/team-member/Adam-Spink.png"
            },

        ]
    }
    return aboutPageData

}