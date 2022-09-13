import { getTotal } from "../AllDataList/getTotal"

export const getVirtualGamePageDetailData=(gameslug)=>{
    const activitiesName=gameslug.toString().split('-').splice(3, 4).join(' ')

    const VirtualGamePageDetailData={
        "locationlist":getTotal().locationlist,
        "pagemeta":{

            "matatilte":activitiesName,
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":vGameData[gameslug].activityname+" Virtual escape room",
            "pagesubtitle":vGameData[gameslug].pagesubtitle,
            "totalLocation":"26",
            "coverimageL":vGameData[gameslug].coverimageL,
            "coverimageM":vGameData[gameslug].coverimageM,
            "coverimageM_alt":vGameData[gameslug].coverimageM_alt,
            "totalLocations":getTotal().totalLocations,
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
                        "pagesubtitle":"Discover the secrets of a deranged professor and expose his twisted ways! Fail and suffer the results of his wicked ways!",
                        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-madness.jpg",
                        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-madness.jpg",
                        "coverimageM_alt":"allinadventures-virtual-escape-room-madness",
                        "price":"147",
                        "duration":"30",
                        "max_players":"6",
                        "min_players":"2",
                        "pagemeta":{

                            "title":"meta title",
                            "metakeyword":"keywords",
                            "metadescription":"metadescription"
                          },

                        "vgamedata":{
                            "story":"Test patients go in....but no one has ever come back out! Welcome to the mysterious and dark world of the deranged professor. Once famed for his psychiatric breakthroughs, he grew distrustful of those around him, and gradually withdrew from society.",
                            "storyimg":"/assets/all-game-details/allinadventures-virtual-escape-room-madness-storyline.png",
                            "storyimg_alt":"allinadventures-virtual-escape-room-madness-storyline",
                            "scene":"Slowly he descended into madness, with his penchant for experimenting on himself causing untold damage. But his methods remain closely guarded. His office must be infiltrated and the professor must be exposed for he truly is.",
                            "sceneimg":"/assets/all-game-details/allinadventures-virtual-escape-room-madness-plot.png",
                            "sceneimg_alt":"escape room",
                            "mission":"Your job is to stealthily discover the morbid secrets of his laboratory. Time is against you and failure would mean facing an unknown and unwelcome fate at the hands of this mad genius.",
                            "missionimg":"/assets/all-game-details/allinadventures-virtual-escape-room-madness-mission.png",
                            "missionimg_alt":"allinadventures-virtual-escape-room-madness-mission",
                            "videoid":"YsuE-m_VEjc",
                            "booking":"#"

                            },
                        


                                    },
    //====================================================== vartual game madness end
    //====================================================== virtual-escape-rooms-zombie-apocalypse
    "virtual-escape-rooms-zombie-apocalypse":{
        "activityname":"Zombie Apocalypse",
        "pagesubtitle":"A scientist carrying a deadly virus drops the vial, spreading the virus through the A/C system. Search the lab for the antidote and distribute it before it's too late!",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-zombie-apocalypse.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-zombie-apocalypse.jpg",
        "coverimageM_alt":"allinadventures-virtual-escape-room-zombie-apocalypse",
        "price":"147",
        "duration":"30",
        "max_players":"6",
        "min_players":"2",
        "pagemeta":{

            "title":"meta title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },

        "vgamedata":{
            "story":"The test tube containing a clear blue liquid virus accidentally slipped from the hand of the lab assistant and fell to the floor, shattering into thousands of pieces. Seconds later, the alarm sounds as the laboratory goes into automatic lock-down.",
            "storyimg":"/assets/vgame-img/game-story.png",
            "storyimg_alt":"virtual escape room",
            "scene":"It is  already too late, as the vapors are wafting throughout the building via the air conditioning. After falling where they stood, the workers slowly regained life - but not in human form. The virus has transformed them into mindless zombies.",
            "sceneimg":"/assets/game-scene.png",
            "sceneimg_alt":"virtual escape room",
            "mission":"Somewhere in the lab complex is an antidote. With the help of your team, look for clues as to where it's kept. You have just one hour. Failure is not an option.",
            "missionimg":"/assets/game-mission.png",
            "missionimg_alt":"virtual escape room",
            "videoid":"YsuE-m_VEjc",
            "booking":"#"

            },
        


                                              },
//====================================================== virtual-escape-rooms-zombie-apocalypse end
  //====================================================== virtual-escape-rooms-bomb
  "virtual-escape-rooms-bomb":{
                         "activityname":"Bomb",
                         "pagesubtitle":"After a nuclear peace treaty was signed, one rogue agent stole a thermonuclear warhead and is planning to end the world! Figure out his plan, defuse the bomb, and save the world!",
                         "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-bomb.jpg",
                         "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-bomb.jpg",
                         "coverimageM_alt":"allinadventures-virtual-escape-room-bomb",
                         "price":"147",
                         "duration":"30",
                         "max_players":"6",
                         "min_players":"2",
                         "pagemeta":{

                             "title":"meta title",
                             "metakeyword":"keywords",
                             "metadescription":"metadescription"
                           },

                         "vgamedata":{
                             "story":"The dire threat of a cold war nuclear holocaust is slowly deescalating. Both East and West have agreed to back down. The world can breathe again. But then, without warning, a rogue agent has deserted and taken a thermonuclear warhead with him.",
                             "storyimg":"/assets/vgame-img/game-story.png",
                             "storyimg_alt":"escape room",
                             "scene":"We locate his headquarters deep underground. But he's a true doomsday believer and determined to see this through to the very end. The first agent we sent in is in trouble and communication has been lost. So we're sending you in.",
                             "sceneimg":"/assets/game-scene.png",
                             "sceneimg_alt":"escape room",
                             "mission":"You're our last hope. The clock is ticking and the fate of humanity depends on your every move. Locate the bomb and defuse it before the plan can be completed. Good luck!",
                             "missionimg":"/assets/game-mission.png",
                             "missionimg_alt":"escape room",
                             "videoid":"YsuE-m_VEjc",
                             "booking":"#"

                             },
    


                              },
//====================================================== virtual-escape-rooms-bomb end
  //====================================================== virtual-escape-rooms-prison
  "virtual-escape-rooms-prison":{
    "activityname":"Prison",
    "pagesubtitle":"A case of simple misidentification has led to your wrongful conviction. You must find the key to escape this awful prison and prove your innocence!",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-prison.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-prison.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-prison",
    "price":"147",
    "duration":"30",
    "max_players":"6",
    "min_players":"2",
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        "story":"A strong shove in the back and you're pushed into a tiny prison cell. The cold iron door clangs shut. You hear yourself pleading that this has all been a terrible mistake. You haven't done anything wrong. You've been set up to take the fall for someone else. You've been framed. But all your pleas fall on deaf ears.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "storyimg_alt":"escape room",
        "scene":"The key turns, locking your cell door firmly shut. The sound of the guard's echoing footsteps fades into the darkness. You sit heavily on your thin mattress. Of course you're innocent. But you'll need to escape from this prison to be able to prove it. Standing up in front of the bars, you try and look one way and then the other down the corridor. There appears to be no one else here in this wing. The air is heavy with expectation. And dread. There's something else going on here.",
        "sceneimg":"/assets/game-scene.png",
        "sceneimg_alt":"escape room",
        "mission":"The guard will return in one hour. You need to move yourself and find all the clues that'll lead to the key and freedom.",
        "missionimg":"/assets/game-mission.png",
        "missionimg_alt":"escape room",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },



                                },
//====================================================== virtual-escape-rooms-prisone end
//====================================================== virtual-escape-rooms-aztec
"virtual-escape-rooms-aztec":{
    "activityname":"Aztec",
    "pagesubtitle":"Hidden deep within an ancient city is the Lost City of Gold. Find the city, uncover the jewels, and find a way to escape with your treasures!",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-aztec.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-aztec.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-aztec",
    "price":"147",
    "duration":"30",
    "max_players":"6",
    "min_players":"2",
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        "story":"The year is 1519 and you find yourself in the jungle near the Mexican capital city of Tenochtitlan, as a Spanish conquistador. You have already have heard the natives speak of the treasure of the Lost City of Gold. There the Emperor Tlatoani Montezuma has hidden jewels from his palace of Axayacati.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "storyimg_alt":"escape room",
        "scene":"Among the jewels is the mythical Crystal Skull. But the city is not what it first seems. Not only must you decipher all the clues and puzzles, but it turns out that finding the treasure is only half the problem. The other half is how to escape with it. Buena suerte!",
        "sceneimg":"/assets/game-scene.png",
        "sceneimg_alt":"escape room",
        "mission":"Wade through the puzzles of the jungle to locate the jewels. Once you are able to find the jewels, you will have a very limited time to formulate a plan on how to escape with them!",
        "missionimg":"/assets/game-mission.png",
        "missionimg_alt":"escape room",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },



},
//====================================================== virtual-escape-rooms-aztec end
//====================================================== virtual-escape-rooms-japan
"virtual-escape-rooms-japan":{
    "activityname":"Japan",
    "pagesubtitle":"The revered Samurai sword has been stolen! Use your samurai skills to locate and recover the sword in time or face your unfortunate fate.",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-japan",
    "price":"147",
    "duration":"30",
    "max_players":"6",
    "min_players":"2",
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        "story":"We find ourselves transported back to feudal Japan in the twelfth century at the house of a Kamakura shogun. As usual the house is full of Samurai who act as guards. The daimyo are visiting and have bought not only their own Samurai, but also the dreaded Ninja spies.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "storyimg_alt":"escape room",
        "scene":"We know that within these walls of fine rice paper, and woven bamboo matting, the shogun keeps a closely guarded treasure....the Ashikaga Samurai sword. But there's been a commotion. The Geisha are whispering that it's been stolen!",
        "sceneimg":"/assets/game-scene.png",
        "sceneimg_alt":"escape room",
        "mission":"In order to find it, you'll need to move with stealth and speed, collecting coins and tokens along the way. You have only one hour to sort through all the clues. Failure means saying Sayonara with the sharp edge of a Katana. Ganbatte!",
        "missionimg":"/assets/game-mission.png",
        "missionimg_alt":"escape room",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },



},
//====================================================== virtual-escape-rooms-prisone end
//====================================================== virtual-escape-rooms-japan
"virtual-game-show-room":{
    "activityname":"Virtual Game Show Room",
    "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today.",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-japan",
    "price":"140",
    "duration":"30",
    "max_players":"6",
    "min_players":"2",
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