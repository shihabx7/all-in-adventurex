

import { getTotal } from "./AllDataList/getTotal";

 export const Homepagedata =  () => {

  

    const Homepagedata=
       {
         "locationlist":getTotal().locationlist,
        "homeagedata": {
                      "totalLocations": getTotal().totalLocations,
                      "totalUniqueGames": getTotal().uniqueGames,
                      "totalFiveStarReview": getTotal().totalReview,
                      "totalPlayerEscaped": getTotal().toalPlayerEscape,
                      "subtitle":"Experience family and kids friendly escape rooms, game show rooms, beat the seat, axe throwing and VR games for all skill levels. We host the most exciting birthday parties, team building activities and private events."
        },
        "inpersongames":[
                              {
                                "id":1,
                                "category":"escapegame",
                                "type": "In person",
                                 "title": "Escape From Alcatraz",
                                 "description": "You are prison guards at the maximum security prison, Alcatraz. The Warden's keys have gone missing! Find them all before the prisoners make their escape.",
                                 "age":"All age",
                                 "duration":"50",
                                 "maxplayers":"10",
                                 "minplayers":"2",
                                 "price":"29.89",
                                 "slug"  :"escape-from-alcatraz",
                                 "bgimg" :"/assets/game-1.jpg"
                               },
                               {
                                "id":2,
                                "category":"escapegame",
                                 "type": "In person",
                                 "title": "Treasure Island",
                                 "description": "You've been captured by a notorious gang of pirates. Prove you're worthy of becoming part of the crew or prepare to walk the plank!",
                                 "age":"all age",
                                 "duration":"50",
                                 "maxplayers":"10",
                                 "minplayers":"2",
                                 "price":"30",
                                 "slug"  :"treasure-island",
                                 "bgimg" :"/assets/game-2.jpg"
                               },
                               {
                                "id":3,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Superhero's Adventure",
                                "description": "The arch-criminal, Matador, and his team of henchmen have devised an evil plan to take over the city. As protectors of Darkover City, you must use your superhero powers to stop the Matador and his henchmen from carrying out their evil plan.",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"superheros-adventure",
                                "bgimg" :"/assets/game-3.jpg"
                               },
                               {
                                "id":4,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Zombie Apocalypse",
                                "description": "The zombification virus has mutated and it is up to you to save humanity! Double check your research, create an immunity chemical test and quickly develop the vaccine!",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"zombie-apocalypse",
                                "bgimg" :"/assets/game-4.jpg"
                               },
                               {
                                "id":5,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Special Agent",
                                "description": "After the capture of one of the world's most infamous money launderers, one of his associates is planning to distribute forged notes across the globe. Discover his plans and stop him in his tracks!",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"special-agent",
                                "bgimg" :"/assets/game-5.jpg"
                               },
                               {
                                "id":6,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Hollywood Premiere",
                                "description": 'Live from Hollywood, California, You are the next lucky contestant on our exciting game show called "Name That Celebrity"! To win the game, name our secret celebrity and discover which booth they are hiding behind!',
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"hollywood-premiere",
                                "bgimg" :"/assets/game-2.jpg"
                               },
                               {
                                "id":7,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Sherlock's Library",
                                "description": "London's top detective duo, Sherlock Holmes & Dr. John H. Watson, have been called upon to solve their next case. As detectives work with Watson to solve the mystery and name the guilty suspect responsible for these crimes committed.",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"sherlocks-library",
                                "bgimg" :"/assets/game-3.jpg"
                               },
                               {
                                "id":8,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Houdini's Magic Cell",
                                "description": "As an aspiring magician, you have always looked up to Houdini and his impressive skills. Now, it is your chance to prove you are better than Houdini himself!",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"houdinis-magic-cell",
                                "bgimg" :"/assets/game-4.jpg"
                               },
                               {
                                "id":9,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Black Ops",
                                "description": "After acquiring all the necessary evidence, it is time to execute your mission. Infiltrate the enemy bunker and apprehend the arms dealer known as The Hawk.",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"black-ops",
                                "bgimg" :"/assets/game-4.jpg"
                               },
                               {
                                "id":10,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Lost in The Jungle",
                                "description": "After hearing some strange noises on your roof, you decide to investigate. Your future is dependent on learning more about the strange noises and…bizarre animals?!",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"lost-in-the-jungle",
                                "bgimg" :"/assets/game-3.jpg"
                               },
                               {
                                "id":11,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "locked in The Lif",
                                "description": "Welcome to the 40's! You are trapped in a luxurious lift meant only for the most exclusive VIPs. You must save yourself as it's better to not think about what will happen if you don't",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"locked-in-the-lift",
                                "bgimg" :"/assets/game-3.jpg"
                               },
                               {
                                "id":12,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Wizarding School ",
                                "description": "Lost in the Wizarding School, locked in the office and late for class - this is not the key to success. Find your way out of the office and get to class on time!",
                                "age":"all age",
                                "duration":"40",
                                "maxplayers":"10",
                                "minplayers":"2",
                                "price":"30",
                                "slug"  :"wizarding-school",
                                "bgimg" :"/assets/game-3.jpg"
                               },
                               {
                                  
                                "id":13,
                                "category":"escapegame",
                                "type": "In person",
                                "title": "Magic Castle",
                                "description": "Welcome to the Magic Castle! Pass your entrance exam to prove you belong among the most prestigious wizards.",
                                "age":"all age",
                                "duration":"60",
                                "maxplayers":"12",
                                "minplayers":"4",
                                "price":"42",
                                "slug"  :"magic-castle",
                                "bgimg" :"/assets/py-game-2.jpg"
                               }

                             ],
        "otherphysicalgames": [
                              {

                                  "id":1,
                                  "category":"other",
                                  "type": "In person",
                                  "title": "Beat The Seat",
                                  "description": "It's a 2 minute fun filled, exhilarating experience where you will test your endurance, coordination and ability to think on your feet.",
                                  "age":"All age (6+)",
                                  "duration":"2",
                                  "maxplayers":"",
                                  "minplayers":"1",
                                  "price":"5",
                                  "slug"  :"beat-the-seat",
                                  "bgimg" :"/assets/py-game-1.jpg"
                                 },
                                {

                                    "id":2,
                                    "category":"other",
                                    "type": "In person",
                                    "title": "Game Show Room",
                                    "description": "Have you always dreamed of being a contestant on a TV game show? Well, dream no more because we've brought the game show experience to you!",
                                    "age":"All age (6+)",
                                    "duration":"60",
                                    "maxplayers":"16",
                                    "minplayers":"4",
                                    "price":"33",
                                    "slug"  :"game-show-room",
                                    "bgimg" :"/assets/py-game-2.jpg"
                                   },
                                {
                                  
                                    "id":3,
                                    "category":"other",
                                    "type": "In person",
                                    "title": "Axe Throwing",
                                    "description": "Having a bad day? Come and throw axes. It involves a competitor throwing an axe at a target, attempting to hit the bullseye as near as possible.",
                                    "age":"All age",
                                    "duration":"20",
                                    "maxplayers":"10",
                                    "minplayers":"2",
                                    "price":"20",
                                    "slug"  :"axe-throwing",
                                    "bgimg" :"/assets/py-game-3.jpg"
                                   },
                                {
                                  
                                "id":4,
                                "category":"other",
                                "type": "In person",
                                "title": "Virtual Reality",
                                "description": "Transport yourself into the magical world of Virtual Reality with multiple fully dynamic and interactive game experiences to choose from for people of all ages.",
                                "age":"All age",
                                "duration":"10 - 60",
                                "maxplayers":"4",
                                "minplayers":"1",
                                "price":"8",
                                "slug"  :"virtual-reality",
                                "bgimg" :"/assets/py-game-1.jpg"
                               }
                              
                                ],
        "events":             [
                              {
                                "id":1,
                                "category":"event",
                                 "type": "In person",
                                 "title": "BIRTHDAY PARTIES",
                                 "description": "A perfect party venue for the young at heart. No matter your age, get an unforgettable adventure!",
                                 "slug"  :"birthday-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-birthday-party.jpg"
                               },
                              {
                                "id":2,
                                "category":"event",
                                 "type": "In person",
                                 "title": "TEAM BUILDING",
                                 "description": "This fun and exciting interactive form of team building will bring your corporate team closer!",
                                 "slug"  :"team-building",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-team-building.jpg"
                               },
                               {
                                "id":3,
                                "category":"event",
                                 "type": "In person",
                                 "title": "CORPORATE EVENTS",
                                 "description": "Instead of a dreary meeting on how to work effectively, why not take a crack at a puzzle?",
                                 "slug"  :"corporate-events",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-corporate-events.jpg"
                               },
                               
                               {
                                "id":4,
                                "category":"event",
                                 "type": "In person",
                                 "title": "FAMILY FUN ACTIVITIES",
                                 "description": "A unique family fun activity with intense real-life puzzles where you have to work together to progress!",
                                 "slug"  :"family-fun-activity",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-family-fun-activities.jpg"
                               },
                               {
                                "id":5,
                                "category":"event",
                                 "type": "In person",
                                 "title": "Bachelor Party",
                                 "description": "There's no better way to bond with your bachelor party before the big day — no scandals, just nonstop thrills!",
                                 "slug"  :"bachelor-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelor-party.jpg"
                               },
                               {
                                "id":6,
                                "category":"event",
                                 "type": "In person",
                                 "title": "Bachelorette Party",
                                 "description": "Fun-filled bachelorette party without any drama that will be something long remembered by everyone!",
                                 "slug"  :"bachelorette-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-bachelorette-party.jpg"
                               },
                               {
                                "id":7,
                                "category":"event",
                                 "type": "In person",
                                 "title": "PROPOSAL PARTY",
                                 "description": "A distinctive way to propose marriage where the mystery game ends with the ring in the final clue box!",
                                 "slug"  :"proposal-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-proposal-party.jpg"
                               },
                               {
                                "id":8,
                                "category":"event",
                                 "type": "In person",
                                 "title": "DATE NIGHT / NIGHT OUT",
                                 "description": "Work together and find clues to solve the mystery that will ultimately strengthen your relationship!",
                                 "slug"  :"date-night",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-date-night.jpg"
                               },
                               {
                                "id":9,
                                "category":"event",
                                 "type": "In person",
                                 "title": "Private Party",
                                 "description": "Adventure awaits for all — your family, friends, office, indoor party, church group, fraternity or sorority.",
                                 "slug"  :"private-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-private-party.jpg"
                               },
                               {
                                "id":10,
                                "category":"event",
                                 "type": "In person",
                                 "title": "Reunion Party",
                                 "description": "Each game is interactive and has engaging qualities that give your reunion party an epic adventure!",
                                 "slug"  :"reunion-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-reunion-party.jpg"
                               },
                               {
                                "id":11,
                                "category":"event",
                                 "type": "In person",
                                 "title": "Graduation Party",
                                 "description": "Graduation is such an exciting time, no matter your age and you deserve to celebrate it in a memorable way",
                                 "slug"  :"graduation-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-graduation-party.jpg"
                               },
                               
                               {
                                "id":12,
                                "category":"event",
                                 "type": "In person",
                                 "title": "SCHOOL EVENTS / FIELD TRIPS",
                                 "description": "Students exercise critical thinking and act to become the super-spies they see in the movies!",
                                 "slug"  :"school-events",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-school-event.jpg"
                               },
                               {
                                "id":13,
                                "category":"event",
                                 "type": "In person",
                                 "title": "GENDER REVEAL PARTY",
                                 "description": "Instead of simply sharing the news of your baby's gender, why not a fun way to announce it through puzzles?",
                                 "slug"  :"gender-reveal-party",
                                 "bgimg" :"/assets/all-event-slider-bg/allinadventures-events-gender-reveal-party-event.jpg"
                               },


                             ],
    "virtualgames": [
                      {
                        "id":1,
                        "category":"virtual",
                        "type": "Virtual",
                        "title": "Virtual Game Show Room",
                        "description": "It's designed to be an interactive live game show experience for online players of all ages and backgrounds to enjoy.",
                        "age":"8+",
                        "duration":"30",
                        "maxplayers":"4",
                        "minplayers":"2",
                        "price":"20",
                        
                        "slug"  :"virtual-games/virtual-game-show-room",
                        "bgimg" :"/assets/all-game-slider-bg/allinadventures-virtual-game-showroom.jpg"
                       },
                       {
                        "id":2,
                        "category":"virtual",
                        "type": "Virtual",
                        "title": "6 Virtual Escape Roomss",
                        "description": "New generation of escape rooms that are exactly like physical escape rooms, but can be played from anywhere.",
                        "age":"8+",
                        "duration":"30",
                        "maxplayers":"4",
                        "minplayers":"2",
                        "price":"20",
                        "slug"  :"virtual-games",
                        "bgimg" :"/assets/all-game-slider-bg/allinadventures-virtual-game.jpg"
                       },
                     
                             ],
         "homereviews":        [
                               {   "id"  : 1,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "(the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 2,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 3,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 4,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 5,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 6,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },
                                  {   "id"  : 7,
                                    "star":5,
                                   "title": "Really enjoyed it!",
                                    "review_text": "I took my son into the Ops adventure Room for his birthday (the kid LOVES military stuff!). It was definitely challengingbut he absolutely LOVED IT!",
                                    "author" :"Margarida R.",
                                    "author_location" :"West Nyack, NY",
                                    "rev_img":"/assets/reviews/rev-img-1.jpg"
                                  },

                                ]
                            }
      
    

      

      return Homepagedata

};

