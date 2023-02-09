import { getTotal } from "../AllDataList/getTotal"
export const getSingleBlogData=(slug)=>{


    const getSingleBlog={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,
         "pagemeta":{
  
            "title":blogData[slug].pagedata.pagetitle,
            "description":blogData[slug].pagemeta.description,
            "keywords":blogData[slug].pagemeta.keywords,
            "url":"/blog/"+slug,
            "metaindex":true,
            "metaimg":blogData[slug].pagedata.ftimg
          },
         "pagedata":{
            "pagetitle":blogData[slug].pagedata.pagetitle,
            "ftimg":blogData[slug].pagedata.ftimg,
            "description":blogData[slug].pagedata.description,
            "totalLocations":blogData[slug].pagedata.totalLocations,
            "shareurl":"/blog/"+slug,
         },
        "bloginfo":blogData[slug].bloginfo,
        "blogdesc":blogData[slug].blogdesc,
        "relatedblogdata":blogData[slug].relatedblogdata,
       
        
    
    }

    return  getSingleBlog
}

const blogData={
    "why-you-should-book-the-escape-game-for-your-company":{
        "pagemeta":{
  
            "title":"Blogs | All In Adventures | Formerly Mystery Room",
            "description":"We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
            "keywords":"escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
            "url":"/blog/blog-one",
            "metaindex":true,
            "metaimg":"/assets/blogs/blog-bg-l.jpg"
          },
          "pagedata":{
            "pagetitle":"Why You Should Book The Escape Game for Your Company's",
            "description":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
            "ftimg":"/assets/blogs/blog-ft.jpg",
            
            "totalLocations":getTotal().totalLocations,
          
            
        },
        "bloginfo":{
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022",
                
        },
        "blogdesc":[
            "<div class=\"sbl-block\"><p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better... </p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure! Teams compete against each other as they race to solve a crime. Easy to book (think one Zoom link for an infinite number of participants) and heavy on excitement, Unlocked For Teams is ideal for groups of 15 or more and is a prime example of how hosted events create strong bonds, with participants working together to achieve a shared goal.</p></div>",
            "<div class=\"sbl-block\"> <h2>Why You Should Book The Escape Game for Your Company's Virtual Holiday Events</h2>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p><img src=\"/assets/blogs/blog-ft.jpg\"/></p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p></div>",
        ],
        "relatedblogdata":[
            {
                "id":"1",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022"
            },
            {
                "id":"2",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"1. What kind of leaf is this What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"May 18, 2022"
            },
           
           
    
        ],
    },
    "why-you-should-book-the-escape-game":{
        "pagemeta":{
  
            "title":"Blogs | All In Adventures | Formerly Mystery Room",
            "description":"We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
            "keywords":"escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
            "url":"/blog/blog-one",
            "metaindex":true,
            "metaimg":"/assets/blogs/blog-bg-l.jpg"
          },
          "pagedata":{
            "pagetitle":"Why You Should Book The Escape Game for Your Company's",
            "description":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
            "ftimg":"/assets/blogs/blog-ft.jpg",
            
            "totalLocations":getTotal().totalLocations,
          
            
        },
        "bloginfo":{
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022",
                
        },
        "blogdesc":[
            "<div class=\"sbl-block\"><p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better... </p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure! Teams compete against each other as they race to solve a crime. Easy to book (think one Zoom link for an infinite number of participants) and heavy on excitement, Unlocked For Teams is ideal for groups of 15 or more and is a prime example of how hosted events create strong bonds, with participants working together to achieve a shared goal.</p></div>",
            "<div class=\"sbl-block\"> <h2>Why You Should Book The Escape Game for Your Company's Virtual Holiday Events</h2>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p><img src=\"/assets/blogs/blog-ft.jpg\"/></p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p></div>",
        ],
        "relatedblogdata":[
            {
                "id":"1",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022"
            },
            {
                "id":"2",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"1. What kind of leaf is this What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"May 18, 2022"
            },
           
           
    
        ],
    },
    "why-you-should-book":{
        "pagemeta":{
  
            "title":"Blogs | All In Adventures | Formerly Mystery Room",
            "description":"We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
            "keywords":"escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
            "url":"/blog/blog-one",
            "metaindex":true,
            "metaimg":"/assets/blogs/blog-bg-l.jpg"
          },
          "pagedata":{
            "pagetitle":"Why You Should Book The Escape Game for Your Company's",
            "description":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
            "ftimg":"/assets/blogs/blog-ft.jpg",
            
            "totalLocations":getTotal().totalLocations,
          
            
        },
        "bloginfo":{
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022",
                
        },
        "blogdesc":[
            "<div class=\"sbl-block\"><p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better... </p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure! Teams compete against each other as they race to solve a crime. Easy to book (think one Zoom link for an infinite number of participants) and heavy on excitement, Unlocked For Teams is ideal for groups of 15 or more and is a prime example of how hosted events create strong bonds, with participants working together to achieve a shared goal.</p></div>",
            "<div class=\"sbl-block\"> <h2>Why You Should Book The Escape Game for Your Company's Virtual Holiday Events</h2>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p><img src=\"/assets/blogs/blog-ft.jpg\"/></p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p></div>",
        ],
        "relatedblogdata":[
            {
                "id":"1",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022"
            },
            {
                "id":"2",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"1. What kind of leaf is this What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"May 18, 2022"
            },
           
           
    
        ],
    },
    "why-you-should":{
        "pagemeta":{
  
            "title":"Blogs | All In Adventures | Formerly Mystery Room",
            "description":"We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
            "keywords":"escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
            "url":"/blog/blog-one",
            "metaindex":true,
            "metaimg":"/assets/blogs/blog-bg-l.jpg"
          },
          "pagedata":{
            "pagetitle":"Why You Should Book The Escape Game for Your Company's",
            "description":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
            "ftimg":"/assets/blogs/blog-ft.jpg",
            
            "totalLocations":getTotal().totalLocations,
          
            
        },
        "bloginfo":{
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022",
                
        },
        "blogdesc":[
            "<div class=\"sbl-block\"><p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better... </p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure! Teams compete against each other as they race to solve a crime. Easy to book (think one Zoom link for an infinite number of participants) and heavy on excitement, Unlocked For Teams is ideal for groups of 15 or more and is a prime example of how hosted events create strong bonds, with participants working together to achieve a shared goal.</p></div>",
            "<div class=\"sbl-block\"> <h2>Why You Should Book The Escape Game for Your Company's Virtual Holiday Events</h2>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p><img src=\"/assets/blogs/blog-ft.jpg\"/></p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p></div>",
        ],
        "relatedblogdata":[
            {
                "id":"1",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022"
            },
            {
                "id":"2",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"1. What kind of leaf is this What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"May 18, 2022"
            },
           
           
    
        ],
    },
    "why-you-should-book-escape-game":{
        "pagemeta":{
  
            "title":"Blogs | All In Adventures | Formerly Mystery Room",
            "description":"We're incredibly passionate about placing great people in their dream roles and believe in serving our guests and each other every day. Join us.",
            "keywords":"escape room blog, all in adventures blog, mystery room blog, escape room news, all in adventures news, mystery room articles,",
            "url":"/blog/blog-one",
            "metaindex":true,
            "metaimg":"/assets/blogs/blog-bg-l.jpg"
          },
          "pagedata":{
            "pagetitle":"Why You Should Book The Escape Game for Your Company's",
            "description":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
            "ftimg":"/assets/blogs/blog-ft.jpg",
            
            "totalLocations":getTotal().totalLocations,
          
            
        },
        "bloginfo":{
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022",
                
        },
        "blogdesc":[
            "<div class=\"sbl-block\"><p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better... </p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure! Teams compete against each other as they race to solve a crime. Easy to book (think one Zoom link for an infinite number of participants) and heavy on excitement, Unlocked For Teams is ideal for groups of 15 or more and is a prime example of how hosted events create strong bonds, with participants working together to achieve a shared goal.</p></div>",
            "<div class=\"sbl-block\"> <h2>Why You Should Book The Escape Game for Your Company's Virtual Holiday Events</h2>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>Get ready to go on an action-packed adventure filled with twists and turns! A Game Guide in the room with a live camera feed acts as your team's eyes, ears, hands, and feet. Your experience also features a host who's there to help guide your team through the adventure!</p>",
            "<p><img src=\"/assets/blogs/blog-ft.jpg\"/></p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p>",
            "<p>You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better...</p></div>",
        ],
        "relatedblogdata":[
            {
                "id":"1",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"April 02, 2022"
            },
            {
                "id":"2",
                "slug":"what-kind-of-leaf-is-this",
                "ftimg":"/assets/blogs/blog-ft.jpg",
                "title":"1. What kind of leaf is this What kind of leaf is this?",
                "blogdesc":"You'd better baylieve that the game is going to get harder from here! You'd better baylieve that the game is going to get harder from here! You'd better",
                "authimg":"/assets/blogs/blog-auth1.png",
                "authname":"by Brian Capps",
                "blogcategory":[
                    {
                        "id":"1",
                        "name":"Escape Room",
                        "slug":"escape-room"
                    },
                    {
                        "id":"2",
                        "name":"Team Building",
                        "slug":"team-building"
                    },
                
                ],
                "lastupdate":"May 18, 2022"
            },
           
           
    
        ],
    }
}