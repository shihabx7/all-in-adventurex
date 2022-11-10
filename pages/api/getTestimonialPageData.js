import { getTotal } from "./AllDataList/getTotal"
export const getTestimonialPageData=()=>{

    const testimonialPgaeData={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"ALL IN ADVENTURES TESTIMONIALS",
            "pagesubtitle":"Our escape room games have fueled epic adventures all across the United States. Just listen to the fascinating stories from families, friends and corporate players. ",
         
            "coverimageL":"/assets/gn-desktop-hero/allinadventures-testimonials-hero.jpg",
            "coverimageM":"/assets/gn-mobile-hero/allinadventures-testimonials-hero.jpg",
            "totalLocations":getTotal().totalLocations,
            
        },
        "testimonials":[
            {
                "id":1,
                "category":"escaperoom",
                "img":"/assets/reviews/allinadventures-escape room-customers-testimonial-1.jpg",
                "title":"Great Fun For Kids, Young Adults, And Adults!",
                "description":"Great fun for kids, young adults, and adults who have an hour to spend. We played the Escape from Alcatraz room. It was our first time so we didn't really know what we were doing, but it was still a lot of fun and now we are hooked. The staff was friendly and helpful, especially Moly. Highly recommended!",
                "location":"Albany, NY",
                "author":"Cassie Palmer"
                
            },
            {
                "id":2,
                "category":"escaperoom",
                "img":"/assets/reviews/allinadventures-escape room-customers-testimonial-2.jpg",
                "title":"Perfect For Our Family Of Mixed Ages!",
                "description":"We had a wonderful family experience. The superhero room was perfect for our family of mixed ages. Our 4 year old loved that she could participate. Matt was exceptional and very helpful. We cannot wait to come back!",
                "location":"Albany, NY",
                "author":"Caidyn"
                
            },
            {
                "id":3,
                "category":"escaperoom",
                "img":"/assets/reviews/allinadventures-escape room-customers-testimonial-3.jpg",
                "title":"First Time Doing An Escape Room!",
                "description":"This was our first time doing an escape room, and this one was super fun! We completed “Escape from Alcatraz,” which was entertaining and the right amount of challenging. Thanks to Dimitri for the encouragement and clues!",
                "location":"Buffalo, NY",
                "author":"Madeleine Ward-Schultz"
                
            },
            {
                "id":4,
                "category":"escaperoom",
                "img":"/assets/reviews/allinadventures-escape room-customers-testimonial-4.jpg",
                "title":"We Have Come Here 4 Times!",
                "description":"Elijah was amazing, welcoming and helpful. We did the Jungle room and had the best time. It was interactive and fun. We have come here 4 times for family fun nights and they never disappoint. Our family is working towards completing all the rooms and we are already planning our next adventure.",
                "location":"Albany, NY",
                "author":"Margarida R."
                
            },
            {
                "id":5,
                "category":"escaperoom",
                "img":"/assets/reviews/allinadventures-escape room-customers-testimonial-5.jpg",
                "title":"We're Very Impressed!",
                "description":"This was my first time at an escape room with my husband for date night. We tried two escape rooms and we're very impressed with the game room themes. I also have to add that the hosts made our visit that much more enjoyable!",
                "location":"Albany, NY",
                "author":"Margarida R."
                
            },
            // ====================birthday party testimonials
            {
                "id":6,
                "category":"birthday",
                "img":"/assets/reviews/allinadventures-birthday party- customer-testimonials-1.jpg",
                "title":"They Had Such A Fun Time!",
                "description":"Booked the superhero room for my 9yr old niece's birthday party. They had such a fun time! Almost all parents have said that this was the first time for their kids. Game hosts were amazing and went above and beyond! Thank you so much for a wonderful experience!!!",
                "location":"Albany, NY",
                "author":"Traci McBride"
                
            },
            {
                "id":7,
                "category":"birthday",
                "img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-1.jpg",
                "title":"Did A Great Job Planning Everything!",
                "description":"We had my daughter's 8th birthday here and they were incredibly easy to work with and did a great job planning everything. It was honestly one of the easiest parties I have ever done. The kids had a great time and I would not hesitate to go back again!",
                "location":"Albany, NY",
                "author":"Melissa Mc"
                
            },
            {
                "id":8,
                "category":"birthday",
                "img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-5.jpg",
                "title":"Will Definitely Come Again!",
                "description":"I came for a birthday party and had a lot of fun! We did the Hollywood escape room which was really good. Game host was very friendly and helpful to us during the entire experience. I will definitely come again! ",
                "location":"Albany, NY",
                "author":"Elizabeth Higgins"
                
            },
            {
                "id":9,
                "category":"birthday",
                "img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-4.jpg",
                "title":"Great Birthday Mystery Room!",
                "description":"Sierra was an awesome host. She helped us when we just had a few minutes left. It was a great birthday mystery room and we had a lot of fun. Just when we thought we couldn't handle another lock, she encouraged us and gave us great hints.",
                "location":"Albany, NY",
                "author":"Tori Moskowitz"
                
            },
            {
                "id":10,
                "category":"birthday",
                "img":"/assets/all-testimonials-image/allinadventures-events-birthday-party-testimonials-2.jpg",
                "title":"Celebrated Two 40 Year Old Birthdays!",
                "description":"We had an amazing time at the Alcatraz Escape Room. We celebrated two 40 year old birthdays. Serina was an amazing hostess; she gave us clues but let us figure out the puzzles ourselves. It was a very challenging and exciting experience.",
                "location":"Albany, NY",
                "author":"Shannon Whitney"
                
            },
            // ====================team bulidings testimonials
            {
                "id":11,
                "category":"team",
                "img":"/assets/reviews/allinadventures-corporate team building- customer-testimonials-1.jpg",
                "title":"Everything Was Seamless!",
                "description":"Such a fun team activity! We did the Escape From Alcatraz Room and it was AWESOME! Our host was Kristine and she was excellent. All In Adventures team was super responsive for planning the event, and everything was seamless. Already planning our next one!",
                "location":"Albany, NY",
                "author":"Eric Kneidel"
                
            },
            {
                "id":12,
                "category":"team",
                "img":"/assets/reviews/allinadventures-corporate team building- customer-testimonials-2.jpg",
                "title":"Puzzles Were Fun To Solve Together!",
                "description":"We had a fun team activity that everyone could easily participate in. I was pleased that nobody on the team needed any special knowledge to participate. Escape room puzzles were fun to solve together. By the end of the hour, we were all talking and laughing. Definitely recommend.",
                "location":"Albany, NY",
                "author":"Jonathan Amar"
                
            },
            {
                "id":13,
                "category":"team",
                "img":"/assets/reviews/allinadventures-corporate team building- customer-testimonials-3.jpg",
                "title":"Great Team Building Experience!",
                "description":"Bridget and Victoria were both incredibly helpful, cheerful and professional. It was a great team building experience that we would recommend to others. Our team will be coming again to try the other rooms!",
                "location":"Albany, NY",
                "author":"Francesco Perez"
                
            },
            {
                "id":14,
                "category":"team",
                "img":"/assets/reviews/allinadventures-corporate team building- customer-testimonials-4.jpg",
                "title":"Great For A Corporate Team Building!",
                "description":"We had a team of 40+ and everyone had a great time. They kept it tight to the hour, which is great for a corporate team building event. Game hosts did a wonderful job taking care of us.",
                "location":"Albany, NY",
                "author":"Victor H"
                
            },
            {
                "id":15,
                "category":"team",
                "img":"/assets/reviews/allinadventures-corporate team building- customer-testimonials-5.jpg",
                "title":"10/10 Would Recommend it!",
                "description":"Hosts did a great job moderating our escape room for a team building event! We've never done escape room before so I honestly didn’t have very high expectations, but it ended up being a ton of fun. The puzzles were great and there were no tech issues. 10/10 would recommend it.",
                "location":"Albany, NY",
                "author":"Maryum Raheem"
                
            },
            // ====================privates party testimonials
            {
                "id":16,
                "category":"party",
                "img":"/assets/reviews/allinadventures-private party-customers-testimonial-1.jpg",
                "title":"Our Group Had Such A Great Time!",
                "description":"Sierra was an absolutely amazing hostess for our daughter's birthday party. She was super accommodating and made sure everything went smoothly with the group working on Escape from Alcatraz. Our group had such a great time and we will definitely return in the future. I would highly recommend Escape the Mystery Room for your next birthday party or group outing.",
                "location":"Albany, NY",
                "author":"Danielle L."
                
            },
            {
                "id":17,
                "category":"party",
                "img":"/assets/reviews/allinadventures-private party-customers-testimonial-2.jpg",
                "title":"Super Friendly Staff. Very Accommodating And Clean!",
                "description":"Super friendly staff. Very accommodating and clean, the 8, 12 year old girls we brought for our daughters party had a blast. I highly recommend it.",
                "location":"Albany, NY",
                "author":"Tim Bender"
                
            },
            {
                "id":18,
                "category":"party",
                "img":"/assets/reviews/allinadventures-private party-customers-testimonial-3.jpg",
                "title":"Daughter's 11th Birthday Party!",
                "description":"We had our daughter's 11th birthday party here and it was a blast! Hailey took care of us and from the first phone call to the very last detail (even keeping me company with conversation while the kids played) she was kind, polite and helpful. 10/10 will be back. The party room was already set up when we got there. We just had to put our food out & they offered to clean the room for us as well afterward. Hailey - thank you for making my daughter's day so special - you're an asset to this location.",
                "location":"Albany, NY",
                "author":"Lisa Podhayny"
                
            },
            {
                "id":19,
                "category":"party",
                "img":"/assets/reviews/allinadventures-private party-customers-testimonial-4.jpg",
                "title":"The Party Room Was Great!",
                "description":"Dimitry was extremely accommodating. We had rescheduled due to a snowstorm and were able to get in the next day. The party room was great for 9 teenagers. Offered to help set up and clean up too., which is great for a corporate team building event. Game hosts did a wonderful job taking care of us.",
                "location":"Albany, NY",
                "author":"Christine R."
                
            },
            {
                "id":20,
                "category":"party",
                "img":"/assets/reviews/allinadventures-private party-customers-testimonial-5.jpg",
                "title":"Perfect Family Activity For An Afternoon!",
                "description":"The pirate escape room was so fun! Perfect family activity for an afternoon. It was challenging but a lot of fun. The staff is awesome and they really know the rooms/puzzles very well! We will check out another room in the future!",
                "location":"Albany, NY",
                "author":"Kim Glenn"
                
            },
            // ====================game show room  testimonials
            {
                "id":21,
                "category":"gameshowroom",
                "img":"/assets/reviews/allinadventures-game-show-room-customers-testimonial-1.jpg",
                "title":"The Hosts Did An Excellent Job!",
                "description":"If you have ever wanted to play game show games against family, friends, or coworkers, this is the place! It was a lot of fun and the hosts did an excellent job of creating that game show like atmosphere! The lighting and stage setup was fun and everyone got a chance to win! We definitely recommend you play!",
                "location":"Albany, NY",
                "author":"Micheal Yonkers"
                
            },
            {
                "id":22,
                "category":"gameshowroom",
                "img":"/assets/reviews/allinadventures-game-show-room-customers-testimonial-2.jpg",
                "title":"We Really Enjoyed Ourselves!",
                "description":"What a wonderful fun time we had. It was a new experience for us. We really enjoyed ourselves, it was worth it. The host was amazing.",
                "location":"Albany, NY",
                "author":"Kelisha Powell"
                
            },
            {
                "id":23,
                "category":"gameshowroom",
                "img":"/assets/reviews/allinadventures-game-show-room-customers-testimonial-3.jpg",
                "title":"That Was Truly Epic, Fun And Super Awesome!",
                "description":"Our host Steve was AWESOME!! We had a group of 14 and had a BLAST! So much fun, can't wait to do it again!! That was truly epic, fun and super awesome to play with the whole team.",
                "location":"Albany, NY",
                "author":"Ed Ahearn"
                
            },
            {
                "id":24,
                "category":"gameshowroom",
                "img":"/assets/reviews/allinadventures-game-show-room-customers-testimonial-4.jpg",
                "title":"Clean Family Fun For All Ages!",
                "description":"Fun time all around! We did the game show experience for our daughter's 19 birthday and let me tell you it was hilarious, fun and just all around amazing! We definitely recommend you give it a try. This is the place to go if you are looking for clean family fun for all ages.",
                "location":"Albany, NY",
                "author":"Christine R."
                
            },
            {
                "id":25,
                "category":"gameshowroom",
                "img":"/assets/reviews/allinadventures-game-show-room-customers-testimonial-5.jpg",
                "title":"Awesome Experience and Great Games!",
                "description":"A live game show experience with enthusiastic hosts and lots of games to play. Fun for all ages! We had so much fun. Awesome experience and great games. Highly recommended!!!",
                "location":"Albany, NY",
                "author":"Seethal Thomas"
                
            },

        ]

    }

    return testimonialPgaeData
}