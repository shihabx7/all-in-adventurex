export const getVirtualGamePageDetailData=(data)=>{
    const activitiesName=data.toString().split('-').splice(3, 4).join(' ')

    const VirtualGamePageDetailData={
        "pagemeta":{

            "matatilte":activitiesName,
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":activitiesName+" Virtual escape room",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"28",
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
            "totalLocations":26,
            "price":35,
            "duration":50,
            "max_players":10,
            "min_players":2,
            "activityname":activitiesName,
        },
        "vgamedata":{
            "story":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
            "storyimg":"/assets/vgame-img/game-story.png",
            "scene":"Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
            "sceneimg":"/assets/game-scene.png",
            "mission":"Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
            "missionimg":"/assets/game-mission.png",
            "videoid":"YsuE-m_VEjc",
            "booking":"#"
            
            },
            "vgamegallery":[
                {
                "id":1,
                "img":"/assets/vgame-img/madness-gmae1.jpg",
                "alt":"All in adventure virtual escape games"
                },
                {
                "id":2,
                "img":"/assets/vgame-img/madness-gmae2.jpg",
                "alt":"All in adventure virtual escape games"
                },
                {
                "id":3,
                "img":"/assets/vgame-img/madness-gmae3.jpg",
                "alt":"All in adventure virtual escape games"
                },
                {
                "id":4,
                "img":"/assets/vgame-img/madness-gmae4.jpg",
                "alt":"All in adventure virtual escape games"
                },
                {
                "id":5,
                "img":"/assets/vgame-img/madness-gmae5.jpg",
                "alt":"All in adventure virtual escape games"
                },
                {
                "id":6,
                "img":"/assets/vgame-img/madness-game6.jpg",
                "alt":"All in adventure virtual escape games"
                }
                ]


    }
    return VirtualGamePageDetailData
}