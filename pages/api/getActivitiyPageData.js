
export const getActivityData=(activitySlug)=>{
    const activitiesName=activitySlug.toString().split('-').join(' ')
   
   // const locationCity=extractData.slice(0, -1).join(' ')

    const activityData={
        "pagemeta":activityDataset[activitySlug].pagemeta,
           
        "pagedata":{
            "pagetitle":activityDataset[activitySlug].activityname+" escape room",
            "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today. ",
            "totalLocation":"26",
            "coverimageL":activityDataset[activitySlug].coverimageL,
            "coverimageM":activityDataset[activitySlug].coverimageM,
            "coverimageM_alt":activityDataset[activitySlug].coverimageM_alt,
            "totalLocations":26,
            "price":activityDataset[activitySlug].price,
            "duration":activityDataset[activitySlug].duration,
            "max_players":activityDataset[activitySlug].min_players,
            "min_players":activityDataset[activitySlug].min_players,
            "activityname":activityDataset[activitySlug].activityname,
        },
        "activitydata":activityDataset[activitySlug].activitydata,
            "activitygallery":activityDataset[activitySlug].activitygallery


    }

  return activityData


}

const activityDataset={
  //============================================escape-from-alcatraz 1
    "escape-from-alcatraz":{
      "activityname":"Escape From Alcatraz",
      "price":30,
      "duration":60,
      "max_players":12,
      "min_players":2,
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-escape-from-alcatraz.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-escape-from-alcatraz.jpg",
      "coverimageM_alt":"escape from alcatraz allinadventures ",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
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
    },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island":{
      "activityname":"Treasure Island",
      "price":35,
      "duration":50,
      "max_players":10,
      "min_players":2,
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-treasure-island.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-treasure-island.jpg",
      "coverimageM_alt":"allinadventures treasure island",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
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
    },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure":{
      "activityname":"Superhero's Adventure",
      "price":35,
      "duration":50,
      "max_players":10,
      "min_players":2,
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-superheros-adventure.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-superheros-adventure.jpg",
      "coverimageM_alt":"allinadventures superheros adventure",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
      "activitydata":{
        "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
        "storyimg":"/assets/game-story.png",
        "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
        "sceneimg":"/assets/game-scene.png",
        "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse":{
      "activityname":"Zombie Apocalypse",
      "price":35,
      "duration":50,
      "max_players":10,
      "min_players":2,
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-zombie-apocalypse.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-zombie-apocalypse.jpg",
      "coverimageM_alt":"allinadventures zombie apocalypse",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
      "activitydata":{
        "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
        "storyimg":"/assets/game-story.png",
        "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
        "sceneimg":"/assets/game-scene.png",
        "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
    },
    //============================================zombie-apocalypse end4
      //============================================special-agent5
      "special-agent":{
        "activityname":"Special Agent",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-special-agent.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-special-agent.jpg",
        "coverimageM_alt":"allinadventures special agent",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================special-agent end5
       //============================================hollywood-premiere 6
       "hollywood-premiere":{
        "activityname":"Hollywood Premiere",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-hollywood-premiere.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-hollywood-premiere.jpg",
        "coverimageM_alt":"allinadventures hollywood premiere",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================hollywood-premiere 6
       //============================================sherlocks-library 7
       "sherlocks-library":{
        "activityname":"Sherlock's Library",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-sherlocks-library.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-sherlocks-library.jpg",
        "coverimageM_alt":"allinadventures sherlocks library",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================hollywood-premiere 7
       //============================================houdinis-magic-cell 8
       "houdinis-magic-cell":{
        "activityname":"Houdini's Magic Cell",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-houdinis-magic-cell.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-houdinis-magic-cell.jpg",
        "coverimageM_alt":"allinadventures-houdinis-magic-cell",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================houdinis-magic-cell 8
       //============================================magic-castle 9
       "magic-castle":{
        "activityname":"Magic Castle",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-magic-castle.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-magic-castle.jpg",
        "coverimageM_alt":"allinadventures magic castle",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================houdinis-magic-cell 9
      //============================================black-ops 10
      "black-ops":{
        "activityname":"Black Ops",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-black-ops.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-black-ops.jpg",
        "coverimageM_alt":"allinadventures black ops",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================black-ops 10
      //============================================lost-in-the-jungle 11
      "lost-in-the-jungle":{
        "activityname":"Lost in The jungle",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-lost-in-the-jungle.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-lost-in-the-jungle.jpg",
        "coverimageM_alt":"allinadventures lost in the jungle",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================lost-in-the-jungle end 11
      //============================================virtual-reality 12
      "virtual-reality":{
        "activityname":"Virtual Reality",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-virtual-reality.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-virtual-reality.jpg",
        "coverimageM_alt":"allinadventures virtual reality",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================virtual-reality end 12
       //============================================wizarding-school 13
       "wizarding-school":{
        "activityname":"Wizarding School",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-wizarding-school.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-wizarding-school.jpg",
        "coverimageM_alt":"allinadventures wizarding school",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================wizarding-school end 13
      //============================================locked-in-the-Lift 14
      "locked-in-the-lift":{
        "activityname":"Locked in the Lift",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-locked-in-the-lift.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-locked-in-the-lift.jpg",
        "coverimageM_alt":"allinadventures locked in the lift",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================locked-in-the-lift end 14
      //============================================game-show-room 15
      "game-show-room":{
        "activityname":"Game Show Room",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-game-show-room.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-game-show-room.jpg",
        "coverimageM_alt":"allinadventures-game-show-room",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================game-show-room end 15
      //============================================axe-throwing 16
      "axe-throwing":{
        "activityname":"Axe Throwing",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-axe-throwing.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-axe-throwing.jpg",
        "coverimageM_alt":"allinadventures-axe-throwing",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================axe-throwing end 16
       //============================================beat-the-seat 17
       "beat-the-seat":{
        "activityname":"Beat The Seat",
        "price":35,
        "duration":50,
        "max_players":10,
        "min_players":2,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-beat-the-seat.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-beat-the-seat.jpg",
        "coverimageM_alt":"allinadventures-beat-the-seat",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/game-story.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/game-scene.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
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
      },
      //============================================beat-the-seat end 17
  }