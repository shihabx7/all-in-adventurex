import { getTotal } from "./AllDataList/getTotal"
export const getActivityData=(activitySlug)=>{
    const activitiesName=activitySlug.toString().split('-').join(' ')
   
   // const locationCity=extractData.slice(0, -1).join(' ')
   const actSalt=(cat)=>{
    var ret="escape room"
    if (cat=="other"){
        ret=" "
    }
    return ret

   }

    const activityData={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":activityDataset[activitySlug].pagemeta,
           
        "pagedata":{
            "pagetitle":activityDataset[activitySlug].activityname+" "+actSalt(activityDataset[activitySlug].activitydata.category),
            "pagesubtitle":activityDataset[activitySlug].pagesubtitle,
            "totalLocation":getTotal().totalLocations,
            "coverimageL":activityDataset[activitySlug].coverimageL,
            "coverimageM":activityDataset[activitySlug].coverimageM,
            "coverimageM_alt":activityDataset[activitySlug].coverimageM_alt,
            "totalLocations":getTotal().totalLocations,
            "price":activityDataset[activitySlug].price,
            "duration":activityDataset[activitySlug].duration,
            "max_players":activityDataset[activitySlug].max_players,
            "min_players":activityDataset[activitySlug].min_players,
            "activityname":activityDataset[activitySlug].shortname? activityDataset[activitySlug].shortname:activityDataset[activitySlug].activityname,
            "notice":activityDataset[activitySlug].notice? activityDataset[activitySlug].notice:false
            
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
      
      "pagesubtitle":"You are prison guards at the maximum security prison, Alcatraz, and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
      "price":"29.89",
      "duration":"50",
      "max_players":"10",
      "min_players":"2",
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-escape-from-alcatraz.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-escape-from-alcatraz.jpg",
      "coverimageM_alt":"escape from alcatraz allinadventures ",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
      "activitydata":{
        "category":"escapegames",
        "story":"The federal prison of Alcatraz, surrounded by the waters of San Francisco Bay, housed some of America's most dangerous and notorious felons. Escaping Alcatraz is no easy feat, and the few that have tried were unsuccessful. As guards in the nation's strongest prison, it is your duty to uphold Alcatraz's stalwart reputation.",
        "storyimg":"/assets/all-game-details/allinadventures-escape-from-alcatraz-storyline.png",
        "storyimg_alt":"allinadventures-escape-from-alcatraz-storyline",
        "scene":"After returning to his office, the Warden discovers that all ten keys to the prison have gone missing! He has summoned you and his most fearless guards to help find the missing keys before any prisoners use them to attempt an escape. Retrace the Warden's steps to find the keys and save Alcatraz from going into full lockdown.",
        "sceneimg":"/assets/all-game-details/allinadventures-escape-from-alcatraz-plot.png",
        "sceneimg_alt":"allinadventures-escape-from-alcatraz-plot",
        "mission":"Prison protocol indicates that you have 50 minutes to locate and return all of the Warden's keys or the prison will have to go into lockdown. If you are able to find the keys in time, you will have to complete an additional investigation to find the prisoner who stole the keys, and make sure they pay for their crime.",
        "missionimg":"/assets/all-game-details/allinadventures-escape-from-alcatraz-mission.png",
        "missionimg_alt":"allinadventures-escape-from-alcatraz-mission",
        "videoid":"pfdyF_d4Z40",
        "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
        
        },
        "activitygallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-1.jpg",
          "img_alt":"allinadventures-escape-from-alcatraz-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-2.jpg",
          "img_alt":"allinadventures-escape-from-alcatraz-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-3.jpg",
          "img_alt":"allinadventures-escape-from-alcatraz-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-4.jpg",
          "img_alt":"allinadventures-escape-from-alcatraz-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-5.jpg",
          "img_alt":"allinadventures-escape-from-alcatraz-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-escape-from-alcatraz-gallery-6.jpg",
          "img_alt":"allinadventures-escape-from-alcatraz-gallery-6"
          }
          ]
                           },
    //============================================escape-from-alcatraz end 1
    //============================================treasure-island 2
    "treasure-island":{
      "activityname":"Treasure Island",
    
      "pagesubtitle":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
      "price":"29.89",
      "duration":"50",
      "max_players":"10",
      "min_players":"2",
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-treasure-island.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-treasure-island.jpg",
      "coverimageM_alt":"allinadventures treasure island",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
      "activitydata":{
        "category":"escapegames",
        "story":"Welcome aboard the vessel of the dread pirate, Captain Jake Hawkins - the most feared pirate who has ever sailed the seven seas. Hawkins and his crew continue to loot and capture without remorse, and you are no exception to his evil ways. You must find a way to break free from his clutches but take heed - your only way out may be to find a way in!",
        "storyimg":"/assets/all-game-details/allinadventures-treasure-island-storyline.png",
        "storyimg_alt":"allinadventures-treasure-island-storyline",
        "scene":"After a long trek out at sea, you were captured by the captain and his crew. Hawkins has looted your ship and directed his crew to feed you to the sharks. However, in a rare show of kindness, Hawkins has given you a chance at mercy. He is looking for highly skilled crew members to man his ship, and he is giving you the chance to prove your sea-worthiness.",
        "sceneimg":"/assets/all-game-details/allinadventures-treasure-island-plot.png",
        "sceneimg_alt":"allinadventures-treasure-island-plot",
        "mission":"In order to survive, you have 50 minutes to prove to the crew that you are good enough to keep alive. Failure to follow the directions from the crew and you will be fed to the sharks! If you can prove you are worthy of Jake Hawkin's leadership, show him you can navigate these dangerous seas, and a promotion may be in order for you!",
        "missionimg":"/assets/all-game-details/allinadventures-treasure-island-mission.png",
        "missionimg_alt":"allinadventures-treasure-island-mission",
        "videoid":"pfdyF_d4Z40",
        "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
        
        },
        "activitygallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-treasure-island-gallery-1.jpg",
          "img_alt":"allinadventures-treasure-island-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-treasure-island-gallery-2.jpg",
          "img_alt":"allinadventures-treasure-island-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-treasure-island-gallery-3.jpg",
          "img_alt":"allinadventures-treasure-island-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-treasure-island-gallery-4.jpg",
          "img_alt":"allinadventures-treasure-island-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-treasure-island-gallery-5.jpg",
          "img_alt":"allinadventures-treasure-island-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-treasure-island-gallery-6.jpg",
          "img_alt":"allinadventures-treasure-island-gallery-6"
          }
          ]
                      },
    //============================================treasure-island end 2
    //============================================superheros-adventure3
    "superheros-adventure":{
      "activityname":"Superhero's Adventure",
   
      "pagesubtitle":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
      "price":"29.89",
      "duration":"50",
      "max_players":"10",
      "min_players":"2",
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-superheros-adventure.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-superheros-adventure.jpg",
      "coverimageM_alt":"allinadventures superheros adventure",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
      "activitydata":{
        "category":"escapegames",
        "story":"Darkover City is home to the prestigious Grand Central Bank - housing and securing millions of dollars worth of gold. Superheroes across the universe have been called to protect the bank after its blueprint has mysteriously gone missing. You suspect the infamous Matador and his crew of minions have something to do with it.",
        "storyimg":"/assets/all-game-details/allinadventures-superheros-adventure-storyline.png",
        "storyimg_img":"allinadventures-superheros-adventure-storyline",
        "scene":"Entrusted by the citizens of Darkover City, your team of superheroes rush to answer their call for help and work together to recover the stolen blueprint before it's too late. You must hurry because the Matador has now threatened to contaminate the gold and crash the stock market if you don't pay his hefty ransom.",
        "sceneimg":"/assets/all-game-details/allinadventures-superheros-adventure-plot.png",
        "sceneimg_alt":"allinadventures-superheros-adventure-plot",
        "mission":"The Matador has hinted that he hid the blueprint in one of the city's streets, so his plan proceeds even if he is captured. You have 50 minutes to use your superpowers to recover the stolen blueprint, and if you have time, find a way to stop his plan before time runs out!",
        "missionimg":"/assets/all-game-details/allinadventures-superheros-adventure-mission.png",
        "missionimg_alt":"allinadventures-superheros-adventure-mission",
        "videoid":"pfdyF_d4Z40",
        "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
        
        },
        "activitygallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-superheros-adventure-gallery-1.jpg",
          "img_alt":"allinadventures-superheros-adventure-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-superheros-adventure-gallery-2.jpg",
          "img_alt":"allinadventures-superheros-adventure-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-superheros-adventure-gallery-3.jpg",
          "img_alt":"allinadventures-superheros-adventure-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-superheros-adventure-gallery-4.jpg",
          "img_alt":"allinadventures-superheros-adventure-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-superheros-adventure-gallery-5.jpg",
          "img_alt":"allinadventures-superheros-adventure-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-superheros-adventure-gallery-6.jpg",
          "img_alt":"allinadventures-superheros-adventure-gallery-6"
          }
          ]
    },
    //============================================superheros-adventure end3
    //============================================zombie-apocalypse4
    "zombie-apocalypse":{
      "activityname":"Zombie Apocalypse",
      
      "pagesubtitle":"The zombification virus has mutated, and it is up to you to save humanity! Double check your research, create an immunity chemical test, and quickly develop the vaccine!",
      "price":"29.89",
      "duration":"50",
      "max_players":"10",
      "min_players":"2",
      "coverimageL":"/assets/all-game-desktop-hero/allinadventures-zombie-apocalypse.jpg",
      "coverimageM":"/assets/all-game-mobile-hero/allinadventures-zombie-apocalypse.jpg",
      "coverimageM_alt":"allinadventures zombie apocalypse",
      
      "pagemeta":{
  
        "matatilte":"title",
        "metakeyword":"keywords",
        "metadescription":"metadescription"
      },
      "activitydata":{
        "category":"escapegames",
        "story":" You are in Paris, France, the place where the zombification of the human race began.. At first, the virus was unstoppable; anyone who came into contact with the virus was guaranteed to turn. However, your recent research shows the virus has mutated into two weaker strains. Now is the time to develop a vaccine and save humanity.",
        "storyimg":"/assets/all-game-details/allinadventures-zombie-apocalypse-storyline.png",
        "storyimg_alt":"allinadventures-zombie-apocalypse-storyline",
        "scene":"Based on your research, we now know the virus is weakening and it is time to take advantage of these lesser mutations. It seems that 49% of the population is immune to Strain A while 49% are immune to Strain B. Only 2% are immune to both strains. We must make a chemical test quickly to determine how to proceed with developing the vaccine.",
        "sceneimg":"/assets/all-game-details/allinadventures-zombie-apocalypse-plot.png",
        "sceneimg_alt":"allinadventures-zombie-apocalypse-plot",
        "mission":"You have 50 minutes to look over your research and create a chemical test to determine the genetic traits of those who are naturally immune. If you are able to create this test in time, you can use it to develop a vaccine to distribute to the other 98% of the population. Can you finish development before attracting the zombie horde?",
        "missionimg":"/assets/all-game-details/allinadventures-zombie-apocalypse-mission.png",
        "missionimg_alt":"",
        "videoid":"pfdyF_d4Z40",
        "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
        
        },
        "activitygallery":[
          {
          "id":1,
          "img":"/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-1.jpg",
          "img_alt":"allinadventures-zombie-apocalypse-gallery-1"
          },
          {
          "id":2,
          "img":"/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-2.jpg",
          "img_alt":"allinadventures-zombie-apocalypse-gallery-2"
          },
          {
          "id":3,
          "img":"/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-3.jpg",
          "img_alt":"allinadventures-zombie-apocalypse-gallery-3"
          },
          {
          "id":4,
          "img":"/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-4.jpg",
          "img_alt":"allinadventures-zombie-apocalypse-gallery-4"
          },
          {
          "id":5,
          "img":"/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-5.jpg",
          "img_alt":"allinadventures-zombie-apocalypse-gallery-5"
          },
          {
          "id":6,
          "img":"/assets/game-gallery/allinadventures-zombie-apocalypse-gallery-6.jpg",
          "img_alt":"allinadventures-zombie-apocalypse-gallery-6"
          }
          ]
    },
    //============================================zombie-apocalypse end4
      //============================================special-agent5
      "special-agent":{
        "activityname":"Special Agent",
        
        "pagesubtitle":"After bringing down an international money launderer, your team is in pursuit of one of his known associates, the master forger, Danielson. Can your team stop him before the clock runs out?",
        "price":"29.89",
        "duration":"50",
        "max_players":"10",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-special-agent.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-special-agent.jpg",
        "coverimageM_alt":"allinadventures special agent",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":"Spiegel was, at least in the underground criminal world, the most respected money launderer in the business. Recently, we were able to track him down and infiltrate his operations with one of our agents. This eventually led to his capture, but unfortunately for us, we discovered he had an entire global network of operations. It is now your sole mission to stop his laundering empire.",
          "storyimg":"/assets/all-game-details/allinadventures-special-agent-storyline.png",
          "storyimg_alt":"allinadventures-special-agent-Story",
          "scene":"After the capture of Spiegel, one of his associates stepped up to fill his role - Danielson. It seems Danielson doesn't use the same distribution networks and doesn't forge the same notes. We will have to start over, but we must do it quickly, as Danielson knows we are closing in on him.",
          "sceneimg":"/assets/all-game-details/allinadventures-special-agent-plot.png",
          "sceneimg_alt":"escape room",
          "mission":"We have two objectives here, agents: figure out which note Danielson plans on forging, and if we complete that in time, find his new distribution network. Once we are able to accomplish those, that will stop Danielson from committing future laundering and destroy the foundation of his criminal empire.",
          "missionimg":"/assets/all-game-details/allinadventures-special-agent-mission.png",
          "missionimg_alt":"allinadventures-special-agent-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-special-agent-gallery-1.jpg",
            "img_alt":"allinadventures-special-agent-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-special-agent-gallery-2.jpg",
            "img_alt":"allinadventures-special-agent-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-special-agent-gallery-3.jpg",
            "img_alt":"allinadventures-special-agent-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-special-agent-gallery-4.jpg",
            "img_alt":"allinadventures-special-agent-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-special-agent-gallery-5.jpg",
            "img_alt":"allinadventures-special-agent-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-special-agent-gallery-6.jpg",
            "img_alt":"allinadventures-special-agent-gallery-6"
            }
            ]
      },
      //============================================special-agent end5
       //============================================hollywood-premiere 6
       "hollywood-premiere":{
        "activityname":"Hollywood Premiere",
      
        "pagesubtitle":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
        "price":"29.89",
        "duration":"50",
        "max_players":"10",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-hollywood-premiere.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-hollywood-premiere.jpg",
        "coverimageM_alt":"allinadventures hollywood premiere",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":'The newest and hottest game show, "Name That Celebrity", started back in 2019. Since then, contestants have been booked constantly as they await their chance to compete and win. Recently, they completed a casting call and chose a brand new round of contestants. Much to your surprise, you were chosen to compete!',
          "storyimg":"/assets/all-game-details/allinadventures-hollywood-premiere-storyline.png",
          "storyimg_alt":"allinadventures-hollywood-premiere-storyline",
          "scene":"You will have to use your keen senses and pop-culture knowledge to get ahead. Search the theater and see what clues might lead you to the identity of the hidden celebrity. However, that is only one part of the game. There is a much loved bonus round in which you will have to identify which booth the celebrity is hiding in!",
          "sceneimg":"/assets/all-game-details/allinadventures-hollywood-premiere-plot.png",
          "sceneimg_alt":"allinadventures-hollywood-premiere-plot",
          "mission":"It's "+ 'time for "Name that Celebrity"! You have 50 minutes to identify our secret celebrity, and if '+ "you're "+ 'really good, go on for the Bonus Prize by also correctly identifying which booth they are hiding in!',
          "missionimg":"/assets/all-game-details/allinadventures-hollywood-premiere-mission.png",
          "missionimg_alt":"allinadventures-hollywood-premiere-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-hollywood-premiere-gallery-1.jpg",
            "img_alt":"allinadventures-hollywood-premiere-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-hollywood-premiere-gallery-2.jpg",
            "img_alt":"allinadventures-hollywood-premiere-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-hollywood-premiere-gallery-3.jpg",
            "img_alt":"allinadventures-hollywood-premiere-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-hollywood-premiere-gallery-4.jpg",
            "img_alt":"allinadventures-hollywood-premiere-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-hollywood-premiere-gallery-5.jpg",
            "img_alt":"allinadventures-hollywood-premiere-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-hollywood-premiere-gallery-6.jpg",
            "img_alt":"allinadventures-hollywood-premiere-gallery-6"
            }
            ]
      },
      //============================================hollywood-premiere 6
       //============================================sherlocks-library 7
       "sherlocks-library":{

        "pagesubtitle":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. Detectives work with Watson to solve the mystery and name the guilty suspect responsible for the crimes committed.",
        "activityname":"Sherlock's Library",
        "category":"escapegames",
        "price":"29.89",
        "duration":"50",
        "max_players":"10",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-sherlocks-library.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-sherlocks-library.jpg",
        "coverimageM_alt":"allinadventures sherlocks library",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":"While attending a concert with London's elite, Sherlock Holmes heard a tale of a scheme created by a secret aristocrat. They are laundering money, erasing gambling debts, and selling lesser titles of nobility to unsavory characters. Holmes is preparing to play his violin to solve the current case.",
          "storyimg":"/assets/all-game-details/allinadventures-sherlocks-library-storyline.png",
          "storyimg_alt":"allinadventures-sherlocks-library-storyline",
          "scene":"Holmes is sending his partner, Watson, to investigate the office of an accountant favored by London's aristocracy. Watson has asked you to go undercover with him to find any clues linked to the case without being caught. Time is sensitive, but you are sure there has to be evidence hidden or locked in a local office that will reveal the prime suspects.",
          "sceneimg":"/assets/all-game-details/allinadventures-sherlocks-library-plot.png",
          "sceneimg_alt":"allinadventures-sherlocks-library-plot",
          "mission":"In 50 minutes, you must help Watson search this accountant's office to pick up any clues that will solve the case. Find the case files for all suspects in question and determine who the guilty culprit is and if they had help from a potential co-conspirator.",
          "missionimg":"/assets/all-game-details/allinadventures-sherlocks-library-mission.png",
          "missionimg_alt":"allinadventures-sherlocks-library-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-sherlocks-library-gallery-1.jpg",
            "img_alt":"allinadventures-sherlocks-library-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-sherlocks-library-gallery-2.jpg",
            "img_alt":"allinadventures-sherlocks-library-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-sherlocks-library-gallery-3.jpg",
            "img_alt":"allinadventures-sherlocks-library-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-sherlocks-library-gallery-4.jpg",
            "img_alt":"allinadventures-sherlocks-library-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-sherlocks-library-gallery-5.jpg",
            "img_alt":"allinadventures-sherlocks-library-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-sherlocks-library-gallery-6.jpg",
            "img_alt":"allinadventures-sherlocks-library-gallery-6"
            }
            ]
      },
      //============================================hollywood-premiere 7
       //============================================houdinis-magic-cell 8
       "houdinis-magic-cell":{
        "activityname":"Houdini's Magic Cell",
        
        "pagesubtitle":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
        "price":"29.89",
        "duration":"50",
        "max_players":"10",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-houdinis-magic-cell.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-houdinis-magic-cell.jpg",
        "coverimageM_alt":"allinadventures-houdinis-magic-cell",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":'The famous Hungarian American magician, Houdini, performed many tricks during his lifetime; some were even death defying. Houdini was adept at all tricks ranging from simple card tricks to the most daring escape from an unbelievable scenario. There is one trick in particular that you have always wanted to outperform: the "Houdini Upside Down" - the trick involving Houdini trapped upside down, handcuffed at the feet, submerged in water. Death was just minutes away.',
          "storyimg":"/assets/all-game-details/allinadventures-houdinis-magic-cell-storyline.png",
          "storyimg_alt":"allinadventures-houdinis-magic-cell-storyline",
          "scene":"While you may want to outperform Houdini's most outlandish trick, you must start with the basics - playing cards. Prove you can fool even the most skilled magician, and only then, will you be able to move on to the biggest challenge yet: locks and handcuffs. Are you able to outplay the master himself in his own proving grounds?",
          "sceneimg":"/assets/all-game-details/allinadventures-houdinis-magic-cell-plot.png",
          "sceneimg_alt":"escape room",
          "mission":"You will have 50 minutes to complete your act. First, perform a series of tricks with multiple sets of playing cards. Once you have mastered the art of cards, it will be time to perform your ultimate act and escape from multiple types of locks and handcuffs.",
          "missionimg":"/assets/all-game-details/allinadventures-houdinis-magic-cell-mission.png",
          "missionimg_alt":"allinadventures-houdinis-magic-cell-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-1.jpg",
            "img_alt":"allinadventures-houdinis-magic-cell-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-2.jpg",
            "img_alt":"allinadventures-houdinis-magic-cell-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-3.jpg",
            "img_alt":"allinadventures-houdinis-magic-cell-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-4.jpg",
            "img_alt":"allinadventures-houdinis-magic-cell-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-5.jpg",
            "img_alt":"allinadventures-houdinis-magic-cell-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-houdinis-magic-cell-gallery-6.jpg",
            "img_alt":"allinadventures-houdinis-magic-cell-gallery-6"
            }
            ]
      },
      //============================================houdinis-magic-cell 8
      
      //============================================black-ops 10
      "black-ops":{
        "activityname":"Black Ops",
       
        "pagesubtitle":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
        "price":"29.89",
        "duration":"50",
        "max_players":"10",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-black-ops.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-black-ops.jpg",
        "coverimageM_alt":"allinadventures black ops",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":"As a member of an elite military unit, you are no stranger to dangerous missions - this mission will be no different. Previous operations have allowed us to obtain all the evidence necessary to initiate the capture of the international arms dealer known as The Hawk. We have located the HQ of The Hawk, and it is time to raid the bunker and bring The Hawk in for questioning.",
          "storyimg":"/assets/all-game-details/allinadventures-black-ops-storyline.png",
          "storyimg_alt":"allinadventures-black-ops-storyline",
          "scene":"The bunker raid has begun, but you realize it's a trap. The Hawk was anticipating your arrival, and the bunker has been booby-trapped and is rigged to explode in 50 minutes! There is no way you can make it out in time and must defuse all explosives. We can't let The Hawk get away with this either - continue to search the bunker for information that will certainly lead to their future capture.",
          "sceneimg":"/assets/all-game-details/allinadventures-black-ops-plot.png",
          "sceneimg_alt":"allinadventures-black-ops-plot",
          "mission":"You must make it out alive. In 50 minutes, you must defuse all booby-traps to save your squad. However, you cannot lose sight of the main mission - capturing The Hawk. If you are able to disarm all traps, you must search the bunker to find additional information that will help us discover The Hawk's true location so we can continue the hunt.",
          "missionimg":"/assets/all-game-details/allinadventures-black-ops-mission.png",
          "missionimg_alt":"allinadventures-black-ops-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-black-ops-gallery-1.jpg",
            "img_alt":"allinadventures-black-ops-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-black-ops-gallery-2.jpg",
            "img_alt":"allinadventures-black-ops-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-black-ops-gallery-3.jpg",
            "img_alt":"allinadventures-black-ops-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-black-ops-gallery-4.jpg",
            "img_alt":"allinadventures-black-ops-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-black-ops-gallery-5.jpg",
            "img_alt":"allinadventures-black-ops-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-black-ops-gallery-6.jpg",
            "img_alt":"allinadventures-black-ops-gallery-6"
            }
            ]
                 },
      //============================================black-ops 10
      //============================================lost-in-the-jungle 11
      "lost-in-the-jungle":{
        "activityname":"Lost In The Jungle",
        
        "pagesubtitle":"Having heard the mysterious sound of drums coming from the roof, you and your friends decided to check it out. Drawn by the beat, you find yourself trapped in the game!",
        "price":"39.95",
        "duration":"60",
        "max_players":5,
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
          "category":"escapegames",
          "story":"It was just a normal day in suburbia and you were with your friends getting ready to enjoy the weekend. One of your favorite things to do was to tell stories at night, and this night, you had a special story - one about animals coming to life and taking over the city. You had no idea what would come next…",
          "storyimg":"/assets/all-game-details/allinadventures-lost-in-the-jungle-storyline.png",
          "storyimg_alt":"allinadventures-lost-in-the-jungle-storyline",
          "scene":"During the middle of your story, you hear a strange knocking on your roof. You and your friends decide to investigate the noise and what you discover is unbelievable. Your story has come to life, and all around you are bizarre animals and puzzles. You must pass the game to save yourself and the future of humanity!",
          "sceneimg":"/assets/all-game-details/allinadventures-lost-in-the-jungle-plot.png",
          "sceneimg_alt":"allinadventures-lost-in-the-jungle-plot",
          "mission":"You must outsmart the jungle! Prove you are worthy by beating the jungle creatures at their own game. Solve the puzzles, decipher the riddles, and put together clues and finish the game in time to put the world back in normal order.",
          "missionimg":"/assets/all-game-details/allinadventures-lost-in-the-jungle-mission.png",
          "missionimg_alt":"allinadventures-lost-in-the-jungle-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-1.jpg",
            "img_alt":"allinadventures-lost-in-the-jungle-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-2.jpg",
            "img_alt":"allinadventures-lost-in-the-jungle-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-3.jpg",
            "img_alt":"allinadventures-lost-in-the-jungle-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-4.jpg",
            "img_alt":"allinadventures-lost-in-the-jungle-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-5.jpg",
            "img_alt":"allinadventures-lost-in-the-jungle-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-lost-in-the-jungle-gallery-6.jpg",
            "img_alt":"allinadventures-lost-in-the-jungle-gallery-6"
            }
            ]
      },
      //============================================lost-in-the-jungle end 11
      
       //============================================wizarding-school 13
       "wizarding-school":{
        "activityname":"Wizarding School",
        
        "pagesubtitle":"Your Potions lesson will begin in 60 minutes, and you have gotten locked in the headmaster's office! You must put on your thinking cap and find a way to get out in time…",
        "price":"39.95",
        "duration":"60",
        "max_players":"4",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-wizarding-school.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-wizarding-school.jpg",
        "coverimageM_alt":"allinadventures wizarding school",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":"Wizarding School is the most revered school for magic in the land. With an admission rate of only 1%, you were extremely lucky to get into the school. You were placed in a house that cares highly about their reputation, and they won't allow anyone in the group who may cost them their standing. You want to live up to their expectations and it all starts with your first lesson - Potions!",
          "storyimg":"/assets/all-game-details/allinadventures-wizarding-school-storyline.png",
          "storyimg_alt":"allinadventures-wizarding-school-storyline",
          "scene":"You studied and studied for your lessons but failed to learn one thing - the layout of the school. On your way to your potions lesson, you must have taken a wrong turn and found your way into the office of the school's highest ranking wizard! Unfortunately for you, the door locked behind you and you must use all of your wizarding knowledge to escape!",
          "sceneimg":"/assets/all-game-details/allinadventures-wizarding-school-plot.png",
          "sceneimg_alt":"allinadventures-wizarding-school",
          "mission":"You studied right? RIGHT?! Oh, alright then, good! Use your knowledge of wizarding and escape this office! You must locate and solve all puzzles located in the wizard's office and get to class on time so your faculty doesn't lose points this semester!",
          "missionimg":"/assets/all-game-details/allinadventures-wizarding-school-mission.png",
          "missionimg_alt":"allinadventures-wizarding-school-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-wizarding-school-gallery-1.jpg",
            "img_alt":"allinadventures-wizarding-school-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-wizarding-school-gallery-2.jpg",
            "img_alt":"allinadventures-wizarding-school-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-wizarding-school-gallery-3.jpg",
            "img_alt":"allinadventures-wizarding-school-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-wizarding-school-gallery-4.jpg",
            "img_alt":"allinadventures-wizarding-school-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-wizarding-school-gallery-5.jpg",
            "img_alt":"allinadventures-wizarding-school-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-wizarding-school-gallery-6.jpg",
            "img_alt":"allinadventures-wizarding-school-gallery-6"
            }
            ]
      },
      //============================================wizarding-school end 13
       //============================================magic-castle 9
       "magic-castle":{
        "activityname":"Magic Castle",
        
        "pagesubtitle":"Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. Test your wits, courage, loyalty, and cunning.",
        "price":"29.89",
        "duration":"50",
        "max_players":"10",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-magic-castle.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-magic-castle.jpg",
        "coverimageM_alt":"allinadventures magic castle",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":"The Magic Castle is known as one of the toughest entrance exams any wizard can take. Any aspiring wizard who wants to get out of the muggle world must take this exam. The waiting list spans years, and you have just received your entrance letter giving you your chance at the test.",
          "storyimg":"/assets/all-game-details/allinadventures-magic-castle-storyline.png",
          "storyimg_alt":"allinadventures-magic-castle-storyline",
          "scene":"While it is exciting, you must take this test seriously. Failing this test means returning to the muggle world and getting put at the bottom of the waitlist. You have 60 minutes to take the exam and complete all tasks. Now is the time to show off all of your studying!",
          "sceneimg":"/assets/all-game-details/allinadventures-magic-castle-plot.png",
          "storyimg_alt":"allinadventures-magic-castle-plot",
          "mission":"Pass the exam and earn your spot in the Magic Castle! Your exam is timed and the 60 minutes will be up before you know it. Listen closely to all directions and complete all tasks in time to secure your place.",
          "missionimg":"/assets/all-game-details/allinadventures-houdinis-magic-cell-mission.png",
          "missionimg_alt":"allinadventures-houdinis-magic-cell-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-magic-castle-gallery-1.jpg",
            "img_alt":"allinadventures-magic-castle-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-magic-castle-gallery-2.jpg",
            "img_alt":"allinadventures-magic-castle-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-magic-castle-gallery-3.jpg",
            "img_alt":"allinadventures-magic-castle-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-magic-castle-gallery-4.jpg",
            "img_alt":"allinadventures-magic-castle-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-magic-castle-gallery-5.jpg",
            "img_alt":"allinadventures-magic-castle-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-magic-castle-gallery-6.jpg",
            "img_alt":"allinadventures-magic-castle-gallery-6"
            }
            ]
      },
      //============================================magic-castle end 9
      //============================================locked-in-the-Lift 14
      "locked-in-the-lift":{
        "activityname":"Locked In The Lift",
        
        "pagesubtitle":"Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. See if you can piece together how to get things running again.",
        "price":"29.89",
        "duration":"30",
        "max_players":"4",
        "min_players":"2",
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-locked-in-the-lift.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-locked-in-the-lift.jpg",
        "coverimageM_alt":"allinadventures locked in the lift",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"escapegames",
          "story":"As a famous actor in the 40's, you were given luxuries that most couldn't imagine possessing. A fancy car? Check. Nice house? Check. Debt? Of course not. There was one place all the VIPs wanted to visit—the luxurious hotel on Main Street to take the elusive lift to the second floor. You just received your invite in the mail - time to get ready!",
          "storyimg":"/assets/all-game-details/allinadventures-locked-in-the-lift-storyline.png",
          "storyimg_alt":"allinadventures-locked-in-the-lift-storyline",
          "scene":"You arrive at the hotels and cameras are flashing, the crowd is cheering, and fans are asking for your autograph. As you make your way into the hotel, you see the elevator and make your way in. As the elevator begins to ascend, you hear a loud crashing noise, and the elevator comes to a hard stop. You are all alone and must find a way out!",
          "sceneimg":"/assets/all-game-details/allinadventures-locked-in-the-lift-plot.png",
          "sceneimg_alt":"allinadventures-locked-in-the-lift-plot",
          "mission":"The emergency phone is out, and no help is coming. You must remain calm and use logic to escape the trapped lift. But hurry up, the lift will only remain secure for 60 minutes. We don't want to find out what happens after that…",
          "missionimg":"/assets/all-game-details/allinadventures-locked-in-the-lift-mission.png",
          "missionimg_alt":"allinadventures-locked-in-the-lift-mission",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-1.jpg",
            "img_alt":"allinadventures-locked-in-the-lift-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-2.jpg",
            "img_alt":"allinadventures-locked-in-the-lift-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-3.jpg",
            "img_alt":"allinadventures-locked-in-the-lift-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-4.jpg",
            "img_alt":"allinadventures-locked-in-the-lift-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-5.jpg",
            "img_alt":"allinadventures-locked-in-the-lift-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-locked-in-the-lift-gallery-6.jpg",
            "img_alt":"allinadventures-locked-in-the-lift-gallery-6"
            }
            ]
      },
      //============================================locked-in-the-lift end 14
      //============================================game-show-room 15
      "game-show-room":{
        "activityname":"A LIVE GAME SHOW EXPERIENCE AS SEEN ON TV",
        "shortname":"Game Show Room",
        "notice":"48 HOURS ADVANCE BOOKING REQUIRED. If you see online booking isn't available, please call us at <a href=\"tel:+1 844-502-5546\" class=\"text-medium text-gold hover:text-blue-700\">+1 844-502-5546</a>. We can surely manage a spot for you and your team.",
        "pagesubtitle":"Have you always dreamed of being a contestant on a tv game show? Well, dream no more because we've brought the game show experience to you! We offer a unique, unpredictable, family-friendly live game show experience for guests of all different ages, backgrounds and group sizes.",
        "price":33,
        "duration":60,
        "max_players":16,
        "min_players":4,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-game-show-room.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-game-show-room.jpg",
        "coverimageM_alt":"allinadventures-game-show-room",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"other",
          "story":"Our real-life Game Show Room is created to bring friends, family or co-workers together. It's a fun, group-oriented activity you share with other live players. You have the option to choose from a family, kid or adult experience. Once your group come in, players will become instant game show contestants led by a professional game host who will guide players through a series of interactive games.",
          "storyimg":"/assets/all-game-details/allinadventures-game-show-room-sec1.png",
          "scene":"For one (1) fun-filled hour, you get to experience a live game show - similar to popular shows seen on TV! Our game ranges from a variety of mentally challenging puzzles to on-the-spot trivia and quiz questions. Plus, we even offer games which will challenge your group's physical skills and talents! As a Game Show Room contestant, you'll have a blast and make long-lasting memories while actively participating in an amusing, uber challenging live-game show setting!",
          "sceneimg":"/assets/all-game-details/allinadventures-game-show-room-sec2.png",
          "mission":"This is the perfect pastime for those looking for a highly energetic, super entertaining corporate team building event, birthday party, bachelor / bachelorette party, church / family reunion or an outing with friends or family!",
          "missionimg":"/assets/all-game-details/allinadventures-game-show-room-sec3.png",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg",
          "faqlist":[
            {
                   "id":1,
                   "category":"games",
                   "group":"game-show-room",
                    "ques":"Can I play alone?",
                   "ans":["While studies show that 66% of online gamers prefer to game alone, the Game Show Room is designed to be a fun, group-oriented activity you share with other live players. Players can be made up of your own group, or you could find your team playing with - or competing against - other players in this interactive setting. In other words, rooms that are not booked to full capacity have spots available so that other players may join in on the fun!"],
                   

             },
             {
              "id":2,
                   "category":"games",
                   "group":"game-show-room",
                    "ques":"How do I book a Private room?",
                   "ans":["Private Room bookings are designed for those looking to guarantee their game show experience will be played by players within their own group - without other outside players. Once you book this type of room, this means other customers will not be permitted to reserve a spot in your studio."],
               

                },
                {
                   "id":4,
                   "category":"games",
                   "group":"game-show-room",
                   "ques":"How many people do I need on my team?",
                   "ans":["Our games are designed so that a minimum of four (4) players is required in a room. This equates to two (2) players per team."],
                   

                    },
                    {
                       "id":5,
                       "category":"games",
                       "group":"game-show-room",
                       "ques":"Is there an age requirement?",
                       "ans":["The minimum player age is 16 years old. Participants under the age of 16 are permitted to play as long as their team has an adult player, in addition to a signed participation waiver on file with the venue. With two (2) teams per game, this means there must be a minimum of two (2) adults playing (i.e. one adult per team)."],
                    },
                   {
                     "id":6,
                     "category":"games",
                      "group":"game-show-room",
                     "ques":"Do I need to make a reservation?",
                     "ans":["Yes, an advance reservation is required to book a game show room. You can make reservations online, in-store, or by telephone. Reservations must be made at least 48 hours in advance for all bookings."],
                           
       
                   },
                   {
                    "id":7,
                    "category":"games",
                     "group":"game-show-room",
                    "ques":"How early should we arrive for our reservation?",
                    "ans":["All game-playing guests should strive to arrive at least 20 minutes before your reservation. This gives your Game Show Host time to review the rules and answer any questions you may have before the games begin."],
                          
      
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
                    "ques":"Is there a prize handed out at the end?",
                    "ans":["Bragging rights are your main prize - especially if your team manages to make the Game Show Room Leader Board which broadcasts top scoring teams who achieve the highest possible scores in each game. Overall, we're certain you'll walk away with long-lasting memories of your time as a contestant in our live Game Show Room!"],
                          
      
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
                    "ques":"What is your cancellation policy?",
                    "ans":["Our company does not accommodate refunds once game show rooms are reserved and paid for, however, we will do our very best to reschedule your booking based on the availability of rooms."],
                          
      
                  },
                  {
                    "id":12,
                    "category":"games",
                     "group":"game-show-room",
                    "ques":"Can I choose my own set of games to play?",
                    "ans":["As with most professional game shows, the experience is pre-designed, but with you in mind. Our game show designers have developed an awesome game show lineup for you – ensuring the games have a good mix of hands-on and mentally challenging activities. All you have to do is show up . . . ready to play and our professional Game Show Room Hosts will guide you through each game to ensure your satisfaction!"],
                          
      
                  },
                  {
                    "id":13,
                    "category":"games",
                     "group":"game-show-room",
                    "ques":"Is there a dress code?",
                    "ans":["You don't have to show up in formal attire, but we won't turn you away if you do! We suggest out contestants wear comfortable clothing and footwear that will allow them to move freely during the games. For everyone’s enjoyment, we ask that players avoid wearing clothing which displays offensive/inappropriate language, or anything that goes against the mall dress code."],
                          
      
                  }
                ],
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-game-show-room-gallery-1.jpg",
            "img_alt":"allinadventures-game-show-room-gallery-1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-game-show-room-gallery-2.jpg",
            "img_alt":"allinadventures-game-show-room-gallery-2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-game-show-room-gallery-3.jpg",
            "img_alt":"allinadventures-game-show-room-gallery-3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-game-show-room-gallery-4.jpg",
            "img_alt":"allinadventures-game-show-room-gallery-4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-game-show-room-gallery-5.jpg",
            "img_alt":"allinadventures-game-show-room-gallery-5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-game-show-room-gallery-6.jpg",
            "img_alt":"allinadventures-game-show-room-gallery-6"
            }
            ]
          
      },
      //============================================game-show-room end 15
      //============================================axe-throwing 16
      "axe-throwing":{
        "activityname":"Axe Throwing",
        
        "pagesubtitle":"#1 Place for fun adventure activities and events with escape games, axe throwing, virtual reality, game show room, beat the seat. Bring your friend & family today.",
        "price":29.89,
        "duration":60,
        "max_players":4,
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
          "category":"other",
          "story":"Welcome to the world of Treasure Island. Your adventure begins in a shadowy storage room aboard a weathered pirate ship. Once you find your way out you will be able to explore the entire ship while the pirates are on the island for the rest of the gold. Keep an eye out for the gold already aboard.",
          "storyimg":"/assets/all-game-details/allinadventures-axe-throwing-sec1.png",
          "scene":"You are part of the crew aboard HMS Lion, currently hunting the pirate ship The Dancing Lady believed operating in the Caribbean. Wreckage found last month from the merchant ship Salty Dog indicates The Dancing Lady is be trying to bury their loot on one of the many islands in the area.",
          "sceneimg":"/assets/all-game-details/allinadventures-axe-throwing-sec2.png",
          "mission":"You and yer mateys need to solve the mystery and escape the island before they return. Or it's off with yer heads! There is a treasure map hidden in the tavern that leads to Captain Flint's Treasure! Find the map, and the treasure could be yours. You must find it fast for there are bloodthirsty pirates!",
          "missionimg":"/assets/all-game-details/allinadventures-axe-throwing-sec3.png",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          "activitygallery":[
            {
            "id":1,
            "img":"/assets/game-gallery/allinadventures-axe-throwing-gallery-1.jpg",
            "img_alt":"allinadventures-axe-throwing 1"
            },
            {
            "id":2,
            "img":"/assets/game-gallery/allinadventures-axe-throwing-gallery-2.jpg",
            "img_alt":"allinadventures-axe-throwing 2"
            },
            {
            "id":3,
            "img":"/assets/game-gallery/allinadventures-axe-throwing-gallery-3.jpg",
            "img_alt":"allinadventures-axe-throwing 3"
            },
            {
            "id":4,
            "img":"/assets/game-gallery/allinadventures-axe-throwing-gallery-4.jpg",
            "img_alt":"allinadventures-axe-throwing 4"
            },
            {
            "id":5,
            "img":"/assets/game-gallery/allinadventures-axe-throwing-gallery-5.jpg",
            "img_alt":"allinadventures-axe-throwing 5"
            },
            {
            "id":6,
            "img":"/assets/game-gallery/allinadventures-axe-throwing-gallery-6.jpg",
            "img_alt":"allinadventures-axe-throwing 6"
            }
            ]

          
      },
      //============================================axe-throwing end 16
       //============================================beat-the-seat 17
       "beat-the-seat":{
        "activityname":"Beat The Seat",
       
        "pagesubtitle":"Beat the Seat is a two-minute, fun-filled, exhilarating experience where you'll test your endurance, coordination, and ability to think on your feet. Can you handle it? Do you have the skills to beat the seat? Well, let's find out!",
        "price":5,
        "duration":2,
        "max_players":1,
        "min_players":1,
        "coverimageL":"/assets/all-game-desktop-hero/allinadventures-beat-the-seat.jpg",
        "coverimageM":"/assets/all-game-mobile-hero/allinadventures-beat-the-seat.jpg",
        "coverimageM_alt":"allinadventures-beat-the-seat",
        
        "pagemeta":{
    
          "matatilte":"title",
          "metakeyword":"keywords",
          "metadescription":"metadescription"
        },
        "activitydata":{
          "category":"other",
          "story":"Beat The Seat is an intense and challenging fun game! You'll be required to solve several different challenges and combinations while holding down the button on the seat, and this must be completed within two minutes. If that sounds simple, well, just wait till you're in there, and you may think a little differently.",
          "storyimg":"/assets/all-game-details/allinadventures-beat-the-seat-sec1.png",
          "scene":"It's the game of ultimate fast-paced challenge. This fun and exciting game will test your endurance, coordination and ability to think on your feet. Literally! The best part is you can play over and over again and always be challenged as the sequencing in the games change every time. You can even try to beat your fastest time or a friend's time.",
          "sceneimg":"/assets/all-game-details/allinadventures-beat-the-seat-sec2.png",
          "mission":"The great thing is that it can be played by anyone 8 years and older as we have a child mode too! Anyone can play it over and over again as the sequencing of the game changes every time. Try to beat the best times or compete with your friends and family in this new and unique experience.",
          "missionimg":"/assets/all-game-details/allinadventures-beat-the-seat-sec3.png",
          "videoid":"pfdyF_d4Z40",
          "videothumb":"/assets/video-thumb/allinadventures-treasure-island-thumb.jpg"
          
          },
          
            "activitygallery":[
              {
              "id":1,
              "img":"/assets/game-gallery/allinadventures-beat-the-seat-gallery-1.jpg",
              "img_alt":"allinadventures-beat-the-seat-gallery-1"
              },
              {
              "id":2,
              "img":"/assets/game-gallery/allinadventures-beat-the-seat-gallery-2.jpg",
              "img_alt":"allinadventures-beat-the-seat-gallery-2"
              },
              {
              "id":3,
              "img":"/assets/game-gallery/allinadventures-beat-the-seat-gallery-3.jpg",
              "img_alt":"allinadventures-beat-the-seat-gallery-3"
              },
              {
              "id":4,
              "img":"/assets/game-gallery/allinadventures-beat-the-seat-gallery-4.jpg",
              "img_alt":"allinadventures-beat-the-seat-gallery-4"
              },
              {
              "id":5,
              "img":"/assets/game-gallery/allinadventures-beat-the-seat-gallery-5.jpg",
              "img_alt":"allinadventures-beat-the-seat-gallery-5"
              },
              {
              "id":6,
              "img":"/assets/game-gallery/allinadventures-beat-the-seat-gallery-6.jpg",
              "img_alt":"allinadventures-beat-the-seat-gallery-6"
              }
              ]
      },
      //============================================beat-the-seat end 17
      //============================================virtual-reality 12
      
      //============================================virtual-reality end 12
  }