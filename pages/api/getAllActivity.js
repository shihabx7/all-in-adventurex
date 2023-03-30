
import { getTotal } from "./AllDataList/getTotal"
export const getAllActivity=()=>{

    const allActivityList={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,
       
            "pagemeta":{
                "title":"All Escape Rooms - All In Adventures (Formerly Mystery Room)",
                "description":"All In Adventures, formerly Mystery Room, run live escape rooms and other games. Choose from a number of escape rooms at our centers across the United States.",
                "keywords":"all games, all escape rooms, all escape games, all games all in adventures, all games allinadventures, all games mystery room, all escape games all in adventures, all escape games allinadventures, all escape games mystery room, all escape room games all in adventures, all escape room games allinadventures, all escape room games mystery room,",
                "url":"/activities",
                "metaindex":true,
                "metaimg":"/assets/all-game-mobile-hero/allinadventures-all-game-page-hero--mobile.jpg"
              },
               
              "pagedata": {

                           "pagetitle":"ALL ESCAPE ROOMS AND ADVENTURE ACTIVITIES",
                           "pagesubtitle":"Play the top escape rooms and other adventure games. For 50-60 minutes, experience fun-filled interactive entertainment with friends, family, kids or co-works. Escape normal life, and be the hero of the story!",
                            "totalLocations": getTotal().totalLocations,
                            "totalUniqueGames": getTotal().uniqueGames,
                           "totalFiveStarReview":  getTotal().totalReview,
                          "totalPlayerEscaped":  getTotal().toalPlayerEscape,
                            "coverimageL":"/assets/all-game-desktop-hero/allinadventures-all-game-page-hero.jpg",
                            "coverimageM":"/assets/all-game-mobile-hero/allinadventures-all-game-page-hero--mobile.jpg"
              },

              "activity_list":[

                {
                    "id":1,
                    "activity_name":"Escape from Alcatraz",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You are prison guards at Alcatraz and the Warden's keys have gone missing on your watch! Can you find them before this turns into an escape attempt?",
                    "activity_slug":"escape-from-alcatraz",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-escape-from-alcatraz.jpg",
                    
                    
                },
                {
                    "id":2,
                    "activity_name":"Treasure Island",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                    "activity_slug":"treasure-island",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-treasure-island.jpg",
                    
                },
                {
                    "id":3,
                    "activity_name":"Zombie Apocalypse",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                    "activity_slug":"zombie-apocalypse",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-zombie-apocalypse.jpg",
                    
                },
                {
                    "id":4,
                    "activity_name":"Sherlock's Library",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                    "activity_slug":"sherlocks-library",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-sherlocks-library.jpg",
                   
                },
                {
                    "id":5,
                    "activity_name":"Black Ops",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                    "activity_slug":"black-ops",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-black-ops.jpg",
                    
                },
                {
                    "id":6,
                    "activity_name":"Superhero's Adventure",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"The arch-criminal Matador and his team of henchmen have devised an evil plan to take over the city. You must use your superhero powers to help save the day!",
                    "activity_slug":"superheros-adventure",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-superheros-adventure.jpg",
                    
                },
                {
                    "id":7,
                    "activity_name":"HOUDINI'S MAGIC CELL",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you have what it takes to be a Master Magician!",
                    "activity_slug":"houdinis-magic-cell",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-houdinis-magic-cell.jpg",
                    
                },
                
                {
                    "id":8,
                    "activity_name":"Special Agent",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"An international jewel thief is about to slip free, can you and your team stop them from escaping before it is too late?",
                    "activity_slug":"special-agent",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-special-agent.jpg",
                    
                },
                {
                    "id":9,
                    "activity_name":"HOLLYWOOD PREMIERE",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"10",
                    "price":"29.89",
                    "duration":"50",
                    "activity_desc":"Live from Hollywood, California, you're the next lucky contestant on our exciting game show! Solve our puzzles and see if you can name our secret celebrity!",
                    "activity_slug":"hollywood-premiere",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-hollywood-premiere.jpg",
                   
                },
                
                
               
                {
                    "id":10,
                    "activity_name":"Lost in The Jungle",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"5",
                    "price":"39.95",
                    "duration":"60",
                    "activity_desc":"Having heard the mysterious sound of drums coming from the roof, you and your friends decided to check it out. Drawn by the beat, you find yourself trapped in the game!",
                    "activity_slug":"lost-in-the-jungle",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-lost-in-the-jungle.jpg",
                    
                },
               
                
                {
                    "id":11,
                    "activity_name":"Wizarding School ",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"4",
                    "price":"39.95",
                    "duration":"60",
                    "activity_desc":"Your Potions lesson will begin in 60 minutes and you have gotten locked in the headmaster's office! You must put on your thinking cap and find a way to get out in time…",
                    "activity_slug":"wizarding-school ",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-wizarding-school.jpg",
                    
                },
                {
                    "id":12,
                    "activity_name":"Locked in the Lift",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"4",
                    "price":"29.89",
                    "duration":"30",
                    "activity_desc":"Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. See if you can piece together how to get things running again.",
                    "activity_slug":"locked-in-the-lift",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-locked-in-the-lift.jpg",
                    
                },
                
                {
                    "id":13,
                    "activity_name":"MAGIC CASTLE",
                    "activity_type":"In person",
                    "activity_category":"escapegame",
                    "age":"All Ages (6+)",
                    "min_player":"2",
                    "max_player":"8",
                    "price":"29.89",
                    "duration":"60",
                    "activity_desc":"Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards. Test your wits, courage, loyalty, and cunning.",
                    "activity_slug":"magic-castle",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-magic-castle.jpg",
                    
                },
                
                {
                    "id":14,
                    "activity_name":"Beat The Seat",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"All Ages (6+)",
                    "min_player":1,
                    "max_player":1,
                    "price":5,
                    "duration":2,
                    "activity_desc":"It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet. ",
                    "activity_slug":"beat-the-seat",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-beat-the-seat.jpg",
                    
                },
                {
                    "id":15,
                    "activity_name":"Game Show Room",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"All Ages (6+)",
                    "min_player":4,
                    "max_player":16,
                    "price":33,
                    "duration":60,
                    "activity_desc":"Have you always dreamed of being a contestant on a TV game show? Well, dream no more because we've brought the game show experience to you!",
                    "activity_slug":"game-show-room",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-game-show-room.jpg",
                    
                },
                {
                    "id":16,
                    "activity_name":"Axe Throwing",
                    "activity_type":"In person",
                    "activity_category":"other",
                    "age":"All Ages (13+)",
                    "min_player":2,
                    "max_player":4,
                    "price":"23.89",
                    "duration":"60",
                    "activity_desc":"Having a bad day? Don't worry! We have an awesome way to burn off that negativity and get you back to your stress-free fun self! Come throw some axes at our exciting interactive targets with your friends and family!",
                    "activity_slug":"axe-throwing",
                    "activity_cover_image":"/assets/all-game-list/allinadventures-axe-throwing.jpg",
                    
                },
               
                
                
                
    
              ]
        
    }

    return allActivityList

}