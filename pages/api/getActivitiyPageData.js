
export const getActivityData=(data)=>{
    const activitiesName=data.toString().split('-').join(' ')
   
   // const locationCity=extractData.slice(0, -1).join(' ')

    const activityData={
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"ALL ESCAPE ROOM AND ACTIVITIES",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"28",
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
            "totalLocations":28,
            "totalUniqueGames":"11",
            "totalFiveStarReview":"90k",
            "totalPlayerEscaped":"60k",
            "activityname":activitiesName,
        },
        "activitydata":{
            "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
            "storyimg":"/assets/game-story.png",
            "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
            "sceneimg":"/assets/game-scene.png",
            "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it’s off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
            "missionimg":"/assets/game-mission.png",
            "videoid":"pfdyF_d4Z40"
            
            },
            "activitygallery":[
                {
                "id":1,
                "img":"/assets/game-gl-1.jpg"
                },
                {
                "id":2,
                "img":"/assets/game-gl-2.jpg"
                },
                {
                "id":3,
                "img":"/assets/game-gl-3.jpg"
                },
                {
                "id":4,
                "img":"/assets/game-gl-4.jpg"
                },
                {
                "id":5,
                "img":"/assets/game-gl-5.jpg"
                },
                {
                "id":6,
                "img":"/assets/game-gl-5.jpg"
                }
                ]


    }

  return activityData


}