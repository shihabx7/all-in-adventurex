import { getTotal } from "../AllDataList/getTotal"

export const getVirtualGamePageDetailData=(gameslug)=>{
    const activitiesName=gameslug.toString().split('-').splice(3, 4).join(' ')

    const salt=(cat)=>{
      var ret="Virtual escape game"
        if(cat=="showroom")
        {
            ret=""
        }
        return ret
    }

    const VirtualGamePageDetailData={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":activitiesName,
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":vGameData[gameslug].activityname+" "+ salt(vGameData[gameslug].category),
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
            "notice":vGameData[gameslug].notice? vGameData[gameslug].notice:false,
            "shortname":vGameData[gameslug].shortname? vGameData[gameslug].shortname:false,
            "category":vGameData[gameslug].category? vGameData[gameslug].category:false,
            
        },
        "vgamedata":vGameData[gameslug].vgamedata,
            "vgamegallery":vGameData[gameslug].vgamegallery


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
                        "vgamegallery":[
                              {
                              "id":1,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-madness-gallery-1.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-madness-gallery-1"
                              },
                              {
                              "id":2,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-madness-gallery-2.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-madness-gallery-2"
                              },
                              {
                              "id":3,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-madness-gallery-3.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-madness-gallery-3"
                              },
                              {
                              "id":4,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-madness-gallery-4.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-madness-gallery-4"
                              },
                              {
                              "id":5,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-madness-gallery-5.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-madness-gallery-5"
                              },
                              {
                              "id":6,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-madness-gallery-6.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-madness-gallery-6"
                              }
                              ]
                        


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
            "storyimg":"/assets/all-game-details/allinadventures-virtual-escape-room-zombie-apocalypse-storyline.png",
            "storyimg_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-storyline",
            "scene":"It is  already too late, as the vapors are wafting throughout the building via the air conditioning. After falling where they stood, the workers slowly regained life - but not in human form. The virus has transformed them into mindless zombies.",
            "sceneimg":"/assets/all-game-details/allinadventures-virtual-escape-room-zombie-apocalypse-plot.png",
            "sceneimg_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-plot",
            "mission":"Somewhere in the lab complex is an antidote. With the help of your team, look for clues as to where it's kept. You have just one hour. Failure is not an option.",
            "missionimg":"/assets/all-game-details/allinadventures-virtual-escape-room-zombie-apocalypse-mission.png",
            "missionimg_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-mission",
            "videoid":"YsuE-m_VEjc",
            "booking":"#"

            },
            "vgamegallery":[
              {
              "id":1,
              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-1.jpg",
              "img_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-gallery-1"
              },
              {
              "id":2,
              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-2.jpg",
              "img_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-gallery-2"
              },
              {
              "id":3,
              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-3.jpg",
              "img_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-gallery-3"
              },
              {
              "id":4,
              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-4.jpg",
              "img_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-gallery-4"
              },
              {
              "id":5,
              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-5.jpg",
              "img_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-gallery-5"
              },
              {
              "id":6,
              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-zombie-apocalypse-gallery-6.jpg",
              "img_alt":"allinadventures-virtual-escape-room-zombie-apocalypse-gallery-6"
              }
              ]
        


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
                             "storyimg":"/assets/all-game-details/allinadventures-virtual-escape-room-bomb-storyline.png",
                             "storyimg_alt":"allinadventures-virtual-escape-room-bomb-storyline",
                             "scene":"We locate his headquarters deep underground. But he's a true doomsday believer and determined to see this through to the very end. The first agent we sent in is in trouble and communication has been lost. So we're sending you in.",
                             "sceneimg":"/assets/all-game-details/allinadventures-virtual-escape-room-bomb-plot.png",
                             "sceneimg_alt":"allinadventures-virtual-escape-room-bomb-plot",
                             "mission":"You're our last hope. The clock is ticking and the fate of humanity depends on your every move. Locate the bomb and defuse it before the plan can be completed. Good luck!",
                             "missionimg":"/assets/all-game-details/allinadventures-virtual-escape-room-bomb-mission.png",
                             "missionimg_alt":"allinadventures-virtual-escape-room-bomb-mission",
                             "videoid":"YsuE-m_VEjc",
                             "booking":"#"

                             },
                             "vgamegallery":[
                              {
                              "id":1,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-bomb-gallery-1.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-bomb-gallery-1"
                              },
                              {
                              "id":2,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-bomb-gallery-2.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-bomb-gallery-2"
                              },
                              {
                              "id":3,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-bomb-gallery-3.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-bomb-gallery-3"
                              },
                              {
                              "id":4,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-bomb-gallery-4.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-bomb-gallery-4"
                              },
                              {
                              "id":5,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-bomb-gallery-5.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-bomb-gallery-5"
                              },
                              {
                              "id":6,
                              "img":"/assets/game-gallery/allinadventures-virtual-escape-room-bomb-gallery-6.jpg",
                              "img_alt":"allinadventures-virtual-escape-room-bomb-gallery-6"
                              }
                              ]
    


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
        "storyimg":"/assets/all-game-details/allinadventures-virtual-escape-room-prison-storyline.png",
        "storyimg_alt":"allinadventures-virtual-escape-room-prison-storyline",
        "scene":"The key turns, locking your cell door firmly shut. The sound of the guard's echoing footsteps fades into the darkness. You sit heavily on your thin mattress. Of course you're innocent. But you'll need to escape from this prison to be able to prove it. Standing up in front of the bars, you try and look one way and then the other down the corridor. There appears to be no one else here in this wing. The air is heavy with expectation. And dread. There's something else going on here.",
        "sceneimg":"/assets/all-game-details/allinadventures-virtual-escape-room-prison-plot.png",
        "sceneimg_alt":"allinadventures-virtual-escape-room-prison-plot",
        "mission":"The guard will return in one hour. You need to move yourself and find all the clues that'll lead to the key and freedom.",
        "missionimg":"/assets/all-game-details/allinadventures-virtual-escape-room-prison-mission.png",
        "missionimg_alt":"allinadventures-virtual-escape-room-prison-mission",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },
        "vgamegallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-prison-gallery-1.jpg",
          "img_alt":"allinadventures-virtual-escape-room-prison-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-prison-gallery-2.jpg",
          "img_alt":"allinadventures-virtual-escape-room-prison-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-prison-gallery-3.jpg",
          "img_alt":"allinadventures-virtual-escape-room-prison-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-prison-gallery-4.jpg",
          "img_alt":"allinadventures-virtual-escape-room-prison-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-prison-gallery-5.jpg",
          "img_alt":"allinadventures-virtual-escape-room-prison-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-prison-gallery-6.jpg",
          "img_alt":"allinadventures-virtual-escape-room-prison-gallery-6"
          }
          ]



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
        "storyimg":"/assets/all-game-details/allinadventures-virtual-escape-room-aztec-storyline.png",
        "storyimg_alt":"allinadventures-virtual-escape-room-aztec-storyline",
        "scene":"Among the jewels is the mythical Crystal Skull. But the city is not what it first seems. Not only must you decipher all the clues and puzzles, but it turns out that finding the treasure is only half the problem. The other half is how to escape with it. Buena suerte!",
        "sceneimg":"/assets/all-game-details/allinadventures-virtual-escape-room-aztec-plot.png",
        "sceneimg_alt":"escape room",
        "mission":"Wade through the puzzles of the jungle to locate the jewels. Once you are able to find the jewels, you will have a very limited time to formulate a plan on how to escape with them!",
        "missionimg":"/assets/all-game-details/allinadventures-virtual-escape-room-aztec-mission.png",
        "missionimg_alt":"allinadventures-virtual-escape-room-aztec-mission",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },

        "vgamegallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-aztec-gallery-2.jpg",
          "img_alt":"allinadventures-virtual-escape-room-aztec-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-aztec-gallery-2.jpg",
          "img_alt":"allinadventures-virtual-escape-room-aztec-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-aztec-gallery-3.jpg",
          "img_alt":"allinadventures-virtual-escape-room-aztec-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-aztec-gallery-4.jpg",
          "img_alt":"allinadventures-virtual-escape-room-aztec-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-aztec-gallery-5.jpg",
          "img_alt":"allinadventures-virtual-escape-room-aztec-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-aztec-gallery-6.jpg",
          "img_alt":"allinadventures-virtual-escape-room-aztec-gallery-6"
          }
          ]



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
        "storyimg":"/assets/all-game-details/allinadventures-virtual-escape-room-japan-storyline.png",
        "storyimg_alt":"escape room",
        "scene":"We know that within these walls of fine rice paper, and woven bamboo matting, the shogun keeps a closely guarded treasure....the Ashikaga Samurai sword. But there's been a commotion. The Geisha are whispering that it's been stolen!",
        "sceneimg":"/assets/all-game-details/allinadventures-virtual-escape-room-madness-plot.png",
        "sceneimg_alt":"allinadventures-virtual-escape-room-madness-plot",
        "mission":"In order to find it, you'll need to move with stealth and speed, collecting coins and tokens along the way. You have only one hour to sort through all the clues. Failure means saying Sayonara with the sharp edge of a Katana. Ganbatte!",
        "missionimg":"/assets/all-game-details/allinadventures-virtual-escape-room-japan-mission.png",
        "missionimg_alt":"allinadventures-virtual-escape-room-japan-mission",
        "videoid":"YsuE-m_VEjc",
        "booking":"#"

        },

        "vgamegallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-japan-gallery-1.jpg",
          "img_alt":"allinadventures-virtual-escape-room-japan-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-japan-gallery-2.jpg",
          "img_alt":"allinadventures-virtual-escape-room-japan-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-japan-gallery-3.jpg",
          "img_alt":"allinadventures-virtual-escape-room-japan-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-japan-gallery-4.jpg",
          "img_alt":"allinadventures-virtual-escape-room-japan-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-japan-gallery-5.jpg",
          "img_alt":"allinadventures-virtual-escape-room-japan-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-virtual-escape-room-japan-gallery-6.jpg",
          "img_alt":"allinadventures-virtual-escape-room-japan-gallery-6"
          }
          ]



},
//====================================================== virtual-escape-rooms-prisone end
//====================================================== virtual-escape-rooms-japan
"virtual-game-show-room":{
    "activityname":"BOOK YOUR VIRTUAL GAME SHOW EXPERIENCE WITH A LIVE HOST",
    "shortname":"Virtual game show room",
    "notice":"If you see online booking isn't available, please call us at <a href=\"tel:+1 844-502-5546\" class=\"text-gold font-medium md:text-lg\">+1 844-502-5546.</a> We can surely manage a spot for you and your team.",
    "pagesubtitle":"Are you looking for an entertaining way to connect and have fun when family, friends, and co-workers are in distant locations? Well, now you can! Enjoy our Virtual Game Show Room with friends and family from all different parts of the world without needing to gather in person. It's like a game show you've seen on TV.",
    "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-escape-room-japan.jpg",
    "coverimageM_alt":"allinadventures-virtual-escape-room-japan",
    "price":"20",
    "duration":"60",
    "max_players":"12",
    "min_players":"4",
    "category":"showroom",
    "pagemeta":{

        "title":"meta title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },

    "vgamedata":{
        
        "story":"Virtual Game Show Room is created specifically to bring small and mid-sized groups of people together during a live, online game show experience. You have the option to choose from a family, kid or adult experience. Once logged in, players will become instant game show contestants led by a professional virtual host who will guide online players through a series of interactive games.",
        "storyimg":"/assets/vgame-img/game-story.png",
        "scene":"For one (1) jam-packed hour, players get to experience a live game show - similar to popular shows seen on TV! Our games range from on-the-spot trivia to a hilarious home scavenger hunt that will keep everyone on their toes. Players are sure to have a blast seeing their friends, family, or co-workers try to outwit each other while playing 3-4 of our unique games!",
        "sceneimg":"/assets/game-scene.png",
        "mission":"Our Virtual Game Show Room is designed to be an interactive live game show experience for online players of all ages and backgrounds to enjoy. It's a perfect way to connect when corporate teams are spread out remotely or when friends and families live long distances from one another. It's also a great way for any group to spend time together when it's either too wet or too cold outside to interact with each other.",
        "missionimg":"/assets/game-mission.png",
        "videoid":"YsuE-m_VEjc",
        "booking":"#",
        "faqlist":[
          {
                 "id":1,
                 "category":"games",
                 "group":"game-show-room",
                  "ques":"How does it work?",
                 "ans":["The Virtual Game Show Room gives you the opportunity to try our exciting live game show without leaving your home. We bring you and your friends, families or co-workers an exhilarating experience of getting together without violating the social distancing principles. We will have a live host who will take you through several fun and exciting games as you try to beat the other players in some friendly competition."],
                 

           },
           {
            "id":2,
                 "category":"games",
                 "group":"game-show-room",
                  "ques":"Can I play alone?",
                 "ans":["While studies show that 66% of online gamers prefer to game alone, the Game Show Room is designed to be a fun, group-oriented activity you share with other live players. Players can be made up of your own group, or you could find your team playing with - or competing against - other players in this interactive setting. In other words, rooms that are not booked to full capacity have spots available so that other players may join in on the fun!"],
             

              },
              {
                 "id":4,
                 "category":"games",
                 "group":"game-show-room",
                 "ques":"How do I book a Private room?",
                 "ans":["Private Room bookings are designed for those looking to guarantee their game show experience will be played by players within their own group – without other outside players. Once you book this type of room, this means other customers will not be permitted to reserve a spot in your studio."],
                 

                  },
                  {
                     "id":5,
                     "category":"games",
                     "group":"game-show-room",
                     "ques":"How many people do I need on my team?",
                     "ans":["Our games are designed so that a minimum of four (4) players is required in a room. This equates to two (2) players per team."],
                  },
                 {
                   "id":6,
                   "category":"games",
                    "group":"game-show-room",
                   "ques":"Is there an age requirement?",
                   "ans":["The minimum player age is 16 years old. Participants under the age of 16 are permitted to play as long as their team has an adult player, in addition to a signed participation waiver on file with the venue. With two (2) teams per game, this means there must be a minimum of two (2) adults playing (i.e. one adult per team)."],
                         
     
                 },
                 {
                  "id":7,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"Do I need to make a reservation?",
                  "ans":["Yes, an advance reservation is required to book a game show room. You can make reservations online, in-store, or by telephone. Reservations must be made at least 48 hours in advance for all bookings."],
                        
    
                },
                {
                  "id":8,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"How much time do I need to do this?",
                  "ans":["The Game Show Room experience takes one (1) hour. Don't forget to allow an extra 20 minutes before your game - to get your team prepared for the experience."],
                 },
                 {
                  "id":9,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"How early should we arrive for our reservation?",
                  "ans":["All game-playing guests should strive to arrive at least 20 minutes before your reservation. This gives your Game Show Host time to review the rules and answer any questions you may have before the games begin."],
                        
    
                },
                {
                  "id":10,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"Can I wait to pay when I arrive?",
                  "ans":["All game show rooms must be paid-in-full at the time they are booked or reserved."],
                        
    
                },
                {
                  "id":11,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"How much time do I need to do this?",
                  "ans":["The Game Show Room experience takes one (1) hour. Don't forget to allow an extra 20 minutes before your game - to get your team prepared for the experience."],
                        
    
                },
                {
                  "id":12,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"Is there a prize handed out at the end?",
                  "ans":["Bragging rights are your main prize - especially if your team manages to make the Game Show Room Leader Board which broadcasts top scoring teams who achieve the highest possible scores in each game. Overall, we’re certain you’ll walk away with long-lasting memories of your time as a contestant in our live Game Show Room!"],
                        
    
                },
                {
                  "id":13,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"Can I wait to pay when I arrive?",
                  "ans":["All game show rooms must be paid-in-full at the time they are booked or reserved."],
                        
    
                },
                {
                  "id":14,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"What is your cancellation policy?",
                  "ans":["Our company does not accommodate refunds once game show rooms are reserved and paid for, however, we will do our very best to reschedule your booking based on the availability of rooms."],
                        
    
                },
                {
                  "id":15,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"Can I choose my own set of games to play?",
                  "ans":["As with most professional game shows, the experience is pre-designed, but with you in mind. Our game show designers have developed an awesome game show lineup for you – ensuring the games have a good mix of hands-on and mentally challenging activities. All you have to do is show up . . . ready to play and our professional Game Show Room Hosts will guide you through each game to ensure your satisfaction!"],
                        
    
                },
                {
                  "id":16,
                  "category":"games",
                   "group":"game-show-room",
                  "ques":"Is there a dress code?",
                  "ans":["You don't have to show up in formal attire, but we won't turn you away if you do! We suggest out contestants wear comfortable clothing and footwear that will allow them to move freely during the games. For everyone’s enjoyment, we ask that players avoid wearing clothing which displays offensive/inappropriate language, or anything that goes against the mall dress code."],
                        
    
                }
              ],

        },
        "vgamegallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-virtual-game-show-room-gallery-1.jpg",
          "img_alt":"allinadventures-virtual-game-show-room-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-virtual-game-show-room-gallery-2.jpg",
          "img_alt":"allinadventures-virtual-game-show-room-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-virtual-game-show-room-gallery-3.jpg",
          "img_alt":"allinadventures-virtual-game-show-room-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-virtual-game-show-room-gallery-4.jpg",
          "img_alt":"allinadventures-virtual-game-show-room-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-virtual-game-show-room-gallery-5.jpg",
          "img_alt":"allinadventures-virtual-game-show-room-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-virtual-game-show-room-gallery-6.jpg",
          "img_alt":"allinadventures-virtual-game-show-room-gallery-6"
          }
          ]



},
//====================================================== virtual-game-show-room end

}