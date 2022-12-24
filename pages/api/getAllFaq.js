import { getTotal } from "./AllDataList/getTotal"
export const getAllFaq=()=>{

    const faqList={
      "locationlist":getTotal().locationlist,
      "activitylistSlug":getTotal().activitylistSlug,
       "eventlistSlug":getTotal().eventlistSlug,
       "virtualgameListSlug":getTotal().virtualgameSlug,

       "pagemeta":{
  
                    "title":"Frequently Asked Questions | All In Adventures",
                    "description":"Browse through these FAQs to find answers to commonly raised questions. If you don't see what's on your mind, reach out to us anytime on phone or email.",
                    "keywords":"escape room faqs, escape room faq, escape room frequently asked questions, all in adventures faqs, all in adventures faq, all in adventures frequently asked questions, mystery room faqs, mystery room faq, mystery room frequently asked questions,",
                    "url":"/faqs",
                    "metaindex":true,
                    "metaimg":"/assets/gn-mobile-hero/allinadventures-faq-hero.jpg"
                  },
       
        "pagedata":{
            "pagetitle":"FREQUENTLY ASKED QUESTIONS",
            "pagesubtitle":"Have you ever wished, just for a moment, you could live inside an adventure movie? Want to be the hero that solves the mystery or saves the world? Well, now you can! Book your adventures today! ",
           
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-faq-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-faq-hero.jpg",
            "totalLocations":getTotal().totalLocations,
            
           
        },
        "faqlist":[
          // ---- getting started=======
                 {
                        "id":1,
                        "group":"getting_started",
                        "category":"all",
                        "ques":"What changes have you made post Covid-19?",
                        "ans":["We clean and disinfect high-touch surfaces daily in our games and lobby.",
                              "For Covid-19 updates <a href=\"/covid-19\" class=\"text-gold hover:text-blue-700\"> click here</a>."],
                        

                  },
                  {
                    "id":2,
                    "category":"all",
                    "group":"getting_started",
                    "ques":"What exactly is All In Adventures?",
                    "ans":[
                      "We've changed our name from Mystery Room to All In Adventures.",
                       "Your favorite fun activity center is now more than an escape room place.",
                       "Come join us to experience more fun activities, including Escape Rooms,",
                        "Game Show Rooms, Beat the Seat & Axe Throwing with locations throughout the U.S.",
                         "<p class=\"mt-2 lg:mt-3\"> All In Adventures is your chance to be a real-life detective.",
                          "You and your team are in an escape room for 50 minutes, and you must find clues,",
                          "solve puzzles, and decipher hidden codes to escape one of our themed rooms.</p>",
                    ],
                    

                     },
                     {
                        "id":3,
                        "category":"all",
                        "group":"getting_started",
                        "ques":"Is All In Adventures scary?",
                        "ans":[
                          "No, our rooms and games are designed to be fun for all ages.",
                           "We do not have any flashing lights, loud sounds, or live characters in our rooms.",
                            "In addition, we offer an open-air plan so folks with claustrophobia or anxiety can also",
                             "enjoy our escape room experience without any worry."
                        ]
                        
    
                         },
                         {
                            "id":4,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Am I really locked in a room?",
                            "ans":[
                              "No. Fire marshals would never allow that.",
                               "You will definitely &quot;feel&quot; like you are locked ",
                               "in but if you ever need to step out of the game room, then you can.",
                                "You will be so immersed in the game that you won't even think about it!"
                            ]
                         },
                        {
                          "id":5,
                          "category":"all",
                          "group":"getting_started",
                          "ques":"Is All In Adventures physically challenging?",
                          "ans":[
                            "Absolutely not. All In Adventures escape rooms are activities for your mind and not your muscles.",
                             "Opening locks and boxes is about the extent of your physical activity.",
                              "That is another reason why it is such a great team-building activity."
                          ]
                                
            
                        },
                        {
                            "id":6,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Is All In Adventures wheelchair accessible?",
                            "ans":["Yes all our locations and rooms are accessible."],
                                  
              
                          },
                          {
                            "id":7,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Are your games wheelchair accessible?",
                            "ans":[
                              "Yes. We pride ourselves on having totally accessible games.",
                              "There maybe occasional puzzles that require additional assistance but ",
                              "in general everyone can play an active part in all aspects of the games."
                            ],
                                  
              
                          },
                          {
                            "id":8,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Is there a dress code?",
                            "ans":[
                              "Just come as you are! Just make sure you are comfortable as all of your senses ",
                              "will be on high alert and monitored by a game master! There is no dress code but ",
                              "we recommend wearing clothing that you will be able to comfortably move around in while playing."
                            ],
                                  
              
                          },
                          {
                            "id":9,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Is there a minimum age requirement?",
                            "ans":[
                              "No, players of all ages are welcome. We have a variety of levels of difficulty, ",
                              "making it fun for all ages. A paying adult, 18 or older, must participate with anyone ",
                              "that is 13 and under. Also, any participants under the age of 18 will need an adult to ",
                              "sign their waiver."
                            ],
                                  
              
                          },
                          {
                            "id":11,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Can I bring my small child with me?",
                            "ans":[
                              "Yes! Any child that is age 6 and under can come along with you and will be free of charge.<p class=\"mt-2 lg:mt-3\"> <b>Note:</b> please let us know before making your reservation",
                               "so that we can add their spot to your reservation,",
                             "due to each game having a maximum capacity for space/players.</p>",
                            ],
                                  
              
                          },
                          {
                            "id":12,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Do I need to make reservations?",
                            "ans":[
                              "It's not mandatory. But reservations are highly recommended as our rooms get filled up quickly during busy times.<p class=\"mt-2 lg:mt-3\"> Walk-ins are welcome based on instant availability.</p>"
                            ],
                                  
              
                          },
                          {
                            "id":13,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Will other people be in the room with us?",
                            "ans":[
                              "For your Health and Safety all bookings will be private room bookings regardless of your group size!"
                            ],
                                  
              
                          },
                          {
                            "id":14,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Can you accommodate large groups?",
                            "ans":[
                              "Yes, we offer a variety of Corporate Team Building and Party Packages."
                            ],
                                  
              
                          },
                          {
                            "id":15,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Can I bring outside food and/or drinks?",
                            "ans":[
                              "Food and drink packages are available with special events, and guests ",
                               "are permitted to bring their own store-bought or commercially prepared foods ",
                                "with the rental of the party room. Please contact us for more information."
                            ],
                                  
              
                          },
                          {
                            "id":16,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"When should I arrive?",
                            "ans":[
                              "Please arrive 15 minutes prior to your scheduled reservation time. This will ensure you have ample time to check in and read our rules."
                            ],
                                  
              
                          },
                          {
                            "id":17,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Do I need to bring anything with me to escape?",
                            "ans":[
                              "Just your team and a winning spirit! You will only need the clues within ",
                               "the rooms to escape. Before your game, we'll ask you to fill out a quick waiver. To save ",
                                "time, please fill out this waiver prior to arriving. Check your email/SMS after the online reservation."
                            ],
                                  
              
                          },
                          {
                            "id":18,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Are there cameras in the escape rooms?",
                            "ans":[
                              "Yes. In some locations cameras are used to monitor the location",
                               
                            ],
                                  
              
                          },
                          {
                            "id":19,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Are mobile phones permitted?",
                            "ans":[
                              "No! Mobile phones are not allowed to be used in the room. ",
                              "The use of electronic devices or any outside tools are strictly prohibited. ",
                              "We provide a safe place in each game room for you to store your phone and belongings while you play! ",
                               
                            ],
                                  
              
                          },
                          {
                            "id":20,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Can I take photos or video while playing the escape games?",
                            "ans":[
                              "Sorry, but we ask that you refrain from taking photos or videos in the escape rooms. You will get to take a photo with your group after the game is complete.",
                               
                            ],
                                  
              
                          },
                          {
                            "id":21,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"How do I get my pictures of our group after we finished All In Adventures?",
                            "ans":[
                              "Each player that filled out a waiver and added a valid email will receive a link 24 hours after the event to the Facebook page where you can download your photos.",
                               
                            ],
                                  
              
                          },
                          {
                            "id":22,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"What room(s) would you recommend for children?",
                            "ans":[
                              "All of our games are children friendly.  Superhero’s Adventure is very popular and great for kids.  Treasure Island is great for families.",
                               
                            ],
                                  
              
                          },
                          {
                            "id":23,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"Can you do a room with only 2-people?",
                            "ans":[
                              "Yes. All of our games are made so even as little as 2 people can have a great time. We have many repeat customers that sometimes even come in and play by themselves.",
                               
                            ],
                                  
              
                          },
                          {
                            "id":24,
                            "category":"all",
                            "group":"getting_started",
                            "ques":"How can I work at The Escape Game?",
                            "ans":[
                              "Please visit <a href=\"/careers\" class=\"text-blue-600 hover:text-blue-700 \"> allinadventures.com/careers</a>",
                              " to view all available positions.",
                               
                            ],
                                  
              
                          },

                          // =======================================escape rooms faqs
                          {
                            "id":25,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"What's an escape room?",
                            "ans":[
                              "Escape rooms are immersive adventure games where teams work together to complete",
                              " a mission (and escape a room) before time runs out. To progress through the game, ",
                              "teams must find clues and solve puzzles.",
                            ]
                                  
              
                          },
                          {
                            "id":26,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"Are Escape Rooms scary?",
                            "ans":[
                              "Our escape rooms are not scary and designed in a way so that everyone has a blast. ",
                               "It is totally safe and tons of fun. It will be suspenseful and thrilling but nothing",
                                " at All In Adventures will be scary or horror-themed.",
                            ]
                                  
              
                          },
                          {
                            "id":27,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"How can I play escape the room?",
                            "ans":[
                              "Gather your friends, family, or coworkers and book the room of your choice. ",
                              "Each room has a wholly immersive atmosphere and story to set the stage for your adventure. ",
                              "Escape rooms are the perfect chance to put your puzzle-solving skills to the test and have fun!",
                              "<p class=\"mt-3 lg:mt-4 font-medium golden-text\">Our top 3 tips:</p>",
                              "<p class=\"mt-3 lg:mt-4 \"><span class=\"font-medium underline underline-offset-4 \">Communicate:</span> Make your entire team aware of anything you find in the room.</p>",
                              "<p class=\"mt-2 lg:mt-2 \"><span class=\"font-medium underline underline-offset-4 \">Create an inventory of clues:</span> If you find critical objects and clues in the room, keep them together in one place so they are easy to access when needed.</p>",
                              "<p class=\"mt-2 lg:mt-2 \"><span class=\"font-medium underline underline-offset-4 \">Ask for clue:</span> If you get stuck, ask your Game Master for a clue.</p>",
                            ]
                                  
              
                          },
                          {
                            "id":28,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"How long does an escape room last?",
                            "ans":[
                              "Most escape rooms are 50-60-minutes in length.",
                            ]
                                  
              
                          },
                          {
                            "id":29,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"What skills do I need to play?",
                            "ans":[
                              "No special skills or knowledge are required to play the escape room games, apart from a decent understanding of English.",
                            ]
                                  
              
                          },
                          {
                            "id":30,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"May I leave the room in the middle of the game?",
                            "ans":[
                              "It is better for your experience to stay in the game until you escape, although in an emergency, you can always leave the game.",
                            ]
                                  
              
                          },
                          {
                            "id":31,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"What if we need help during the game?",
                            "ans":[
                              "You can simply press the call button and one of our Game Masters will be notified to come help you.  If you are stuck you may ask them for a hint!",
                            ]
                                  
              
                          },
                          {
                            "id":32,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"What happens if we don't solve anything?",
                            "ans":[
                              "Our game masters will provide clues if you get stuck _ after all, we want you to have fun! Remember, it's not only about trying to escape the room; it's about the fun experience. But if you're just dying to break out, we do have some tips and tactics as well as suggestions on when to ask for a hint.",
                            ]
                                  
              
                          },
                          {
                            "id":33,
                            "category":"escape",
                            "group":"escape_rooms",
                            "ques":"It's my first escape room. Any advice?",
                            "ans":[
                              "Watch this quick video for a few tips and guidelines for our first-time escapees!",
                            ]
                                  
              
                          },
                        
                          
                          //PRICING, DISCOUNTS AND COUPONS
                          
                          {
                            "id":34,
                            "category":"pricing",
                            "group":"PRICING,_DISCOUNTS_AND_COUPONS",
                            "ques":"How much does it cost?",
                            "ans":[
                              "The standard cost is $29.89/person (plus tax and fees in those states that it applies) for one escape room experience. We do provide a discount for full-room bookings. Children 6 and under are free with a paying adult.",
                            ]
                                  
              
                          },
                          
                          {
                            "id":35,
                            "category":"pricing",
                            "group":"PRICING,_DISCOUNTS_AND_COUPONS",
                            "ques":"My friends and family are joining, how can they pay for the same game?",
                            "ans":[
                              "Please give us a call if your group is paying separately. We can split the payments into different cards over the phone.",
                            ]
                                  
              
                          },
                          // RESCHEDULE_/_REFUND_/_CANCELATIONS
                          {
                            "id":36,
                            "category":"pricing",
                            "group":"RESCHEDULE_/_REFUND_/_CANCELATIONS",
                            "ques":"What is the cancellation policy?",
                            "ans":[
                              "We understand that plans change, but there are no refunds or cancellations. All bookings are final.",
                              "<p class=\"mt-2 lg:mt-3\">If you contact us 48 hours prior to your reservation time, we will do our best to reschedule your reservation.</p>"
                            ]
                                  
              
                          },
                          {
                            "id":37,
                            "category":"pricing",
                            "group":"RESCHEDULE_/_REFUND_/_CANCELATIONS",
                            "ques":"Can I reschedule?",
                            "ans":[
                              "We can reschedule games up to 48 hours before your reservation time. Within 48 hours of the start time, the game is non-refundable.",
                              
                            ]
                                  
              
                          },
                          {
                            "id":38,
                            "category":"pricing",
                            "group":"RESCHEDULE_/_REFUND_/_CANCELATIONS",
                            "ques":"What if I am late for my reservation?",
                            "ans":[
                              "Your time starts at the reserved time. If you arrive past that, you will still have the same ending time. We have to respect the reservations of the others who have booked with us as well. Please make sure to allow plenty of time for travel and parking so we can start your group on time.",
                              
                            ]
                                  
              
                          },
                          
                          //================event_and_parties
                          {
                            "id":39,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"Can you accommodate large parties or corporate events?",
                            "ans":[
                              "Absolutely! We love hosting large parties and corporate events. We have a full-time team dedicated to helping coordinate all of the details for you.",
                              "<p class=\"mt-2 lg:mt-3\">You can reach our guest experience team by calling ", 
                              "<a href=\"tel:844-502-5546\" class=\" font-medium text-blue-600 hover:text-blue-700\">844-502-5546 ex. 709</a> or by emailing ", 
                              "<a href=\"mailto:sales@allinadventures.com\" class=\" font-medium text-blue-600 hover:text-blue-700\">sales@allinadventures.com</a></p>",
                              "<p class=\"mt-3 lg:mt-4 font-medium golden-text\">Here's how the events and parties work: </p>",
                              "<p class=\"mt-1 lg:mt-2\">Firstly, you choose which themed room you are interested in (rooms may vary in their capacity). Many of our guests choose one room to start with for the first round, then take a break for food and drinks, and then choose a second room for the second round. The standard price is $29.89 per person plus applicable taxes and fees for one round of the escape room experience. Private room discounts are available - if you are maxing out the room capacity, be sure to book a private room for additional savings! </p>",
                            ]
                                  
              
                          },
                          {
                            "id":40,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"What are the packages?",
                            "ans":[
                             
                              "<p class=\"mt-2 lg:mt-3\"><span class=\"golden-text font-medium\">Package 1: </span> You can reserve our party room for ",
                               "a flat fee and cater your own food for your event! We will also supply basic supplies such as plates, ",
                              "napkins, and utensils. Package includes:</p>",
                              "<ul class=\"star-list  pl-4 lg:pl-4 mt-4\">",
                              "<li class=\"my-2 lg:my-2\">Party Room Rental for 2 hours</>",
                              "<li class=\"my-2 lg:my-2\">Basic Supplies (Plates, Napkins, Utensils, etc.)</>",
                              "<li class=\"my-2 lg:my-2\">FREE All In Adventures Birthday Invitations (Digital - can be printed)</>",
                              "<li class=\"my-2 lg:my-2\">$30 Gift Card for Birthday Child</>",
                              "</ul>",
                              "<p class=\"mt-4 lg:mt-6\"><span class=\"golden-text font-medium\">Package 2: </span> Let us do the work! We will order and pick up your food plus prepare your event!",
                               "Our Standard Package includes Pizza, Cookie Cake, and a drink for each guest (may vary by ",
                               "Location based on item availability). In addition, we will also still supply basic supplies such as plates, napkins, and utensils. Full package includes:",
                              "napkins, and utensils. Package includes:</p>",
                              "<ul class=\"star-list  pl-4 lg:pl-4 mt-4\">",
                              "<li class=\"my-2 lg:my-2\">Party Room Rental for 2 hours</>",
                              "<li class=\"my-2 lg:my-2\">Basic Supplies (Plates, Napkins, Utensils, etc.)</>",
                              "<li class=\"my-2 lg:my-2\">FREE All In Adventures Birthday Invitations (Digital - can be printed)</>",
                              "<li class=\"my-2 lg:my-2\">All In Adventures Catering (Standard Package</>",
                              "<li class=\"my-2 lg:my-2\">$35 Gift Card for Birthday Child</>",
                              "<li class=\"my-2 lg:my-2\">Minimum Guest Count: 6 people</>",
                              "</ul>",
                              "<p class=\"mt-2 lg:mt-3\">For more information or to further customize your event, you can reach our guest experience team by calling ", 
                              "<a href=\"tel:844-502-5546\" class=\" font-medium text-blue-600 hover:text-blue-700\">844-502-5546 ex. 709</a> or by emailing ", 
                              "<a href=\"mailto:sales@allinadventures.com\" class=\" font-medium text-blue-600 hover:text-blue-700\">sales@allinadventures.com</a></p>",
                              "<p class=\"mt-2 lg:mt-3\">We understand this is your special day, so let us handle all of the little details while you immerse yourself in all of the fun.</p>",
                              "<p class=\"mt-2 lg:mt-3\">To book online, start by selecting your Location. Choose the &quot;BOOK YOUR EVENT&quot; button and follow the steps.</p>",
                            ]
                                  
              
                          },
                          {
                            "id":41,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"How long is a party?",
                            "ans":[
                              "A typical party can last anywhere between 2-3 hours. We are flexible to tailor the experience for any duration and budget that fits your needs.",
                              
                            ]
                                  
              
                          },
                          {
                            "id":42,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"How many people can you accommodate?",
                            "ans":[
                              "Each of our locations has anywhere from 6 to 10 individual rooms and, in most cases, a separate party room. While we may not be able to accommodate your entire group into one escape room, we can set your party up into multiple teams to start all at the same time.",
                              
                            ]
                                  
              
                          },
                          {
                            "id":43,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"Can I bring my own food?",
                            "ans":[
                              "<p>In most locations, we offer our standard pizza package option and can also offer ",
                              "a custom sandwich platter package or catering option in our separate party room ",
                              "for your party to enjoy after their escape room experience.</p>",
                              "<p class=\"mt-2 lg:mt-3\">Guests are permitted to bring their own store-bought or commercially prepared foods with the rental of the party room. Please contact us for more information.</p>",
                              
                            ]
                                  
              
                          },
                          {
                            "id":44,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"Can I bring my own decorations?",
                            "ans":[
                              "<p>We already have some basic decorations in the party room, but if you have any special requests, please give us a call!</p>",
                              
                              
                            ]
                                  
              
                          },
                          {
                            "id":45,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"What is the age limit?",
                            "ans":[
                              "<p>All In Adventures birthday parties are perfect for all ages! For the safety of our players, kids 13 and under will need to have an adult, 18 or above, from your party in the room</p>",
                              
                              
                            ]
                                  
              
                          },
                          {
                            "id":46,
                            "category":"event",
                            "group":"event_and_parties",
                            "ques":"How do I book a party?",
                            "ans":[
                              "<p>You can book online! To start, simply begin by selecting your Location. Choose the &quot;BOOK YOUR EVENT&quot; button and follow the steps. Please note that only stores with an available party room can accept party reservations online. If your store does not have the option available, please contact the store directly to build your package.</p>",
                              
                              
                            ]
                                  
              
                          },
                          // ====================gift cards
                          {
                            "id":47,
                            "category":"event",
                            "group":"CORPORATE_EVENTS",
                            "ques":"Can you accommodate large groups?",
                            "ans":[
                              "Yes. While we may not be able to accommodate your entire group into one room, we can set your group up into multiple teams to start all at the same time. Full facility capacity varies by Location, but we have successfully hosted groups as large as several hundred people!",
                            ]
                                  
              
                          },
                          {
                            "id":48,
                            "category":"event",
                            "group":"CORPORATE_EVENTS",
                            "ques":"We want to play the game as our team-building activity for a small group. How can we do that?",
                            "ans":[
                              "You can book out a whole room online or call us and we can put your team-building package together.",
    
                            ]
                                  
              
                          },
                          {
                            "id":49,
                            "category":"event",
                            "group":"CORPORATE_EVENTS",
                            "ques":"What types of organizations typically book your venue?",
                            "ans":[
                              "Our clients have included companies, schools, universities, churches, charity organizations, retailers, police departments, etc.",
    
                            ]
                                  
              
                          },
                          {
                            "id":50,
                            "category":"event",
                            "group":"CORPORATE_EVENTS",
                            "ques":"Can we bring our own food? What food options do you offer?",
                            "ans":[
                              "In most locations, we offer our standard pizza package option and can also offer a custom sandwich platter package or catering option in our separate party room for your party to enjoy after their escape room experience.",
    
                            ]
                                  
              
                          },
                          {
                            "id":51,
                            "category":"event",
                            "group":"CORPORATE_EVENTS",
                            "ques":"Can my company book the event/party without purchasing food or the escape room experience?",
                            "ans":[
                              "Sure. Simply contact your local store for details and pricing options.",
                            ]
                                  
              
                          },
                          {
                            "id":52,
                            "category":"event",
                            "group":"CORPORATE_EVENTS",
                            "ques":"How much does it cost?",
                            "ans":[
                              "Since each event may require different needs, we are not able to quote a blanket rate for your event, but our corporate sales team will be happy to walk you through everything and provide you with an upfront cost before you book the event with us.",
                            ]
                                  
              
                          },
                          
                          // ===========gift cards
                          {
                            "id":54,
                            "category":"gift",
                            "group":"GIFT_CARDS",
                            "ques":"How to purchase your gift cards?",
                            "ans":[
                              "<p>Choose the Location. Then, select the gift card amount, fill out the requested details and purchase the gift card.</p>",
                             "<p class=\"mt-2 lg:mt-3\">Once you complete your purchase, you will be sent an email with the gift card number. If you are giving the card as a gift, follow the directions in your confirmation email to send them through email directly to the recipient. If you prefer a physical gift card, please visit your local store.</p>",
                             "<p class=\"mt-2 lg:mt-3\"><span class=\"font-medium underline underline-offset-4\">Please note: </span>If you have not received your gift card(s), please check your spam folder.</p>",
                            ]
                                  
              
                          },{
                            "id":55,
                            "category":"gift",
                            "group":"GIFT_CARDS",
                            "ques":"How do I redeem the gift cards?",
                            "ans":[
                              "Gift card holders can redeem the card online at www.allinadventures.com or directly in-store where the gift card was purchased. Contact us directly at your local store or call our customer service team at ",
                            "<a href=\"tel:844-502-5546\" class=\"text-blue-600 hover:text-blue-700 \">844-502-5546.</a> to redeem it over the phone.",
                            ]
                                  
              
                          },
                          {
                            "id":56,
                            "category":"gift",
                            "group":"GIFT_CARDS",
                            "ques":"Do gift cards expire?",
                            "ans":[
                              "Our gift cards never expire from the day of issue.",
                            ]
                                  
              
                          },
                          {
                            "id":57,
                            "category":"gift",
                            "group":"GIFT_CARDS",
                            "ques":"Do we need to make a reservation to use a gift card?",
                            "ans":[
                              "No reservation is needed but we always suggest making a reservation beforehand to ensure you get the experience and time slot that you prefer. Walk-ins are available but availability is not guaranteed.",
                            ]
                                  
              
                          },
                          {
                            "id":58,
                            "category":"gift",
                            "group":"GIFT_CARDS",
                            "ques":"What happens if I prepay for my reservation in advance?",
                            "ans":[
                              "If you prepaid for your reservation, your payment will be refunded when you present your gift card on Location.",
                            ]
                                  
              
                          },
                          {
                            "id":59,
                            "category":"gift",
                            "group":"GIFT_CARDS",
                            "ques":"Can I get a physical gift card instead of an electronic one?",
                            "ans":[
                              "Physical gift cards can be provided at our Location.",
                            ]
                          },  
                          // =========== reward programm
                         
                         
                          {
                            "id":61,
                            "category":"rewards",
                            "group":"REWARDS_PROGRAM",
                            "ques":"Can I join online?",
                            "ans":[
                              "Yes, you can! Just visit the Rewards Program page and go to <a href=\"/rewards-program#ready-to-signup\" class=\"text-blue-600 hover:text-blue-700\">READY TO SIGN UP</a> section",
                               "then click on CHOOSE YOUR LOCATION, and you'll be redirected to fivestars.com site for your selected All In Adventures location."
                              
                            ]
                          },   
                          {
                            "id":62,
                            "category":"rewards",
                            "group":"REWARDS_PROGRAM",
                            "ques":"How old do you have to be to join?",
                            "ans":[
                              "There is no age limit to join."
                              
                            ]
                          },
                          {
                            "id":63,
                            "category":"rewards",
                            "group":"REWARDS_PROGRAM",
                            "ques":"What if I already purchased an Adventure Club Passport?",
                            "ans":[
                              "You can bring your physical passport into the store and exchange it to be added into the new program as a VIP member for NO additional cost."
                              
                            ]
                          },  
                          {
                            "id":64,
                            "category":"rewards",
                            "group":"REWARDS_PROGRAM",
                            "ques":"What happens to the stamps I have already collected?",
                            "ans":[
                              "All unused stamps will be converted at a rate of 50 points per stamp."
                              
                            ]
                          },
                          {
                            "id":65,
                            "category":"rewards",
                            "group":"REWARDS_PROGRAM",
                            "ques":"Will I continue to receive $5 off every visit?",
                            "ans":[
                              "The new program does not include this benefit going forward. However, the new program allows you to accumulate points at a much faster rate which you can use to redeem free admissions much quicker."
                              
                            ]
                          },
                          {
                            "id":65,
                            "category":"rewards",
                            "group":"REWARDS_PROGRAM",
                            "ques":"Can I redeem points online?",
                            "ans":[
                              "You will have to redeem all points physically in the store."
                              
                            ]
                          },
                 ]

        
        
    }

    return faqList


}