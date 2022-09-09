export const getVirtualGamePageDetailData=(gameslug)=>{
    const activitiesName=gameslug.toString().split('-').splice(3, 4).join(' ')

    const VirtualGamePageDetailData={
        "pagemeta":{

            "matatilte":activitiesName,
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":vGameData[gameslug].activityname+" Virtual escape room",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"26",
            "coverimageL":vGameData[gameslug].coverimageL,
            "coverimageM":vGameData[gameslug].coverimageM,
            "coverimageM_alt":vGameData[gameslug].coverimageM_alt,
            "totalLocations":26,
            "price":vGameData[gameslug].price,
            "duration":vGameData[gameslug].duration,
            "max_players":vGameData[gameslug].max_players,
            "min_players":vGameData[gameslug].min_players,
            "activityname":vGameData[gameslug].activityname,
        },
        "vgamedata":vGameData[gameslug].vgamedata,
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

const vGameData={
    //====================================================== vartual game madness
    "virtual-escape-rooms-madness":{
                        "activityname":"Madness",
                        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-madness.jpg",
                        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-madness.jpg",
                        "coverimageM_alt":"allinadventures-virtual-escape-room-madness",
                        "price":42,
                        "duration":50,
                        "max_players":10,
                        "min_players":2,
                        "pagemeta":{

                            "title":"meta title",
                            "metakeyword":"keywords",
                            "metadescription":"metadescription"
                          },

                        "vgamedata":{
                            "story":"Madness Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                            "storyimg":"/assets/vgame-img/game-story.png",
                            "scene":"Madness Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
                            "sceneimg":"/assets/game-scene.png",
                            "mission":"Madness Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
                            "missionimg":"/assets/game-mission.png",
                            "videoid":"YsuE-m_VEjc",
                            "booking":"#"

                            },
                        


                         },
    //====================================================== vartual game madness end
    //====================================================== virtual-escape-rooms-zombie-apocalypse
    "virtual-escape-rooms-zombie-apocalypse":{
        "activityname":"Zombie Apocalypse",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-zombie-apocalypse.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-zombie-apocalypse.jpg",
        "coverimageM_alt":"allinadventures-virtual-escape-room-zombie-apocalypse",
        "price":42,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "pagemeta":{

            "title":"meta title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },

        "vgamedata":{
            "story":"Madness Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
            "storyimg":"/assets/vgame-img/game-story.png",
            "scene":"Madness Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
            "sceneimg":"/assets/game-scene.png",
            "mission":"Madness Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
            "missionimg":"/assets/game-mission.png",
            "videoid":"YsuE-m_VEjc",
            "booking":"#"

            },
        


         },
//====================================================== virtual-escape-rooms-zombie-apocalypse end
  //====================================================== virtual-escape-rooms-bomb
  "virtual-escape-rooms-bomb":{
                         "activityname":"Bomb",
                         "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-bomb.jpg",
                         "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-bomb.jpg",
                         "coverimageM_alt":"allinadventures-virtual-escape-room-bomb",
                         "price":42,
                         "duration":50,
                         "max_players":10,
                         "min_players":2,
                         "pagemeta":{

                             "title":"meta title",
                             "metakeyword":"keywords",
                             "metadescription":"metadescription"
                           },

                         "vgamedata":{
                             "story":"Madness Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
                             "storyimg":"/assets/vgame-img/game-story.png",
                             "scene":"Madness Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
                             "sceneimg":"/assets/game-scene.png",
                             "mission":"Madness Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
                             "missionimg":"/assets/game-mission.png",
                             "videoid":"YsuE-m_VEjc",
                             "booking":"#"

                             },
    


     },
//====================================================== virtual-escape-rooms-bomb end
  //====================================================== virtual-escape-rooms-prison
  "virtual-escape-rooms-prison":{
    "activityname":"Prison",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-prison.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-prison.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-prison",
    "price":42,
    "duration":50,
    "max_players":10,
    "min_players":2,
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        "story":"Madness Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "scene":"Madness Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
        "sceneimg":"/assets/game-scene.png",
        "mission":"Madness Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
        "missionimg":"/assets/game-mission.png",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },



},
//====================================================== virtual-escape-rooms-prisone end
//====================================================== virtual-escape-rooms-aztec
"virtual-escape-rooms-aztec":{
    "activityname":"Aztec",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-aztec.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-aztec.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-aztec",
    "price":42,
    "duration":50,
    "max_players":10,
    "min_players":2,
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        "story":"Madness Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "scene":"Madness Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
        "sceneimg":"/assets/game-scene.png",
        "mission":"Madness Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
        "missionimg":"/assets/game-mission.png",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },



},
//====================================================== virtual-escape-rooms-aztec end
//====================================================== virtual-escape-rooms-japan
"virtual-escape-rooms-japan":{
    "activityname":"Japan",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-japan",
    "price":42,
    "duration":50,
    "max_players":10,
    "min_players":2,
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        "story":"Madness Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "scene":"Madness Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
        "sceneimg":"/assets/game-scene.png",
        "mission":"Madness Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
        "missionimg":"/assets/game-mission.png",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },



},
//====================================================== virtual-escape-rooms-prisone end
//====================================================== virtual-escape-rooms-japan
"virtual-game-show-room":{
    "activityname":"Virtual Game Show Room",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-japan",
    "price":42,
    "duration":50,
    "max_players":10,
    "min_players":2,
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        "story":"Madness Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "scene":"Madness Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society. Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded.",
        "sceneimg":"/assets/game-scene.png",
        "mission":"Madness Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius. ",
        "missionimg":"/assets/game-mission.png",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },



},
//====================================================== virtual-game-show-room end

}