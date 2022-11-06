import { getTotal } from "./AllDataList/getTotal"
export const getJobPositionPageData=(jobname)=>{
    const jobtitle=()=>{
        return jobname.split('-').join(' ')
    }
    const jobPositionData={
        "locationlist":getTotal().locationlist,
        "activitylistSlug":getTotal().activitylistSlug,
         "eventlistSlug":getTotal().eventlistSlug,
         "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":jobData[jobname].pagemeta,
           
        "pagedata":{
            "pagetitle":"APPLY FOR "+jobtitle(),
            "pagesubtitle":jobData[jobname].pagesubtitle,
            "coverimageL":jobData[jobname].coverimageL,
            "coverimageM":jobData[jobname].coverimageM,
            "job_designation":jobtitle(),
            "totalLocations":getTotal().totalLocations,

            
        },

        "job_roles":jobData[jobname].job_roles,
        "key_competencies":jobData[jobname].key_competencies,
        "desired_traits":jobData[jobname].desired_traits,
        "requirements":jobData[jobname].requirements,
    }

    return jobPositionData

}

const jobData={

    "associate":{

        "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-associate-hero.jpg",
        "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-associate-hero.jpg",
        "pagesubtitle":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people.",
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
        "job_roles":[
            {
                "id":1,
                "role":"Greet new guests as they arrive for their scheduled appointments, or simply stop in to inquire about the experience"
            },
            {
                "id":2,
                "role":"Good verbal skills are important as you will be informing guests about the overall experience, theme options, and safety rules and regulations"
            },
            {
                "id":3,
                "role":"Good manners will go a long way as you guide each guest to their selected escape room"
            },
            {
                "id":4,
                "role":"Even if they beg, you won’t give away clues, but you could be asked to interpret a theme’s overall mission to help our guests get moving"
            },
            {
                "id":5,
                "role":"After guests exit their selected rooms and desire to share their experiences, you will be there to support, encourage and affirm their game strategy, plus invite them back in the future"
            },
            {
                "id":6,
                "role":"Support the daily operations of the facility; including the quick, accurate recovery of each mystery room immediately after use"
            },
            {
                "id":7,
                "role":"Have an open ear to any guests who may express any dissatisfaction with their experience; escalate those grievances to the appropriate manager"
            },
            {
                "id":8,
                "role":"Assist with the arrangement of furniture, backdrops, props or window displays, as outlined by company standards"
            },
            {
                "id":9,
                "role":"Ensure signage, written game clues, etc. reflect appropriate changes in themed promotions and upholds company guidelines"
            },
            {
                "id":10,
                "role":"Perform daily end-of-day register tasks"
            },
                 ],
                 
        "key_competencies":[

            {
                "id":1,
                "competency":"Sales Orientation"

            },
            {
                "id":2,
                "competency":"Teamwork"

            },
            {
                "id":3,
                "competency":"Verbal Communication"

            },
            {
                "id":4,
                "competency":"Instills Trust/High Integrity"

            },
            {
                "id":5,
                "competency":"A Positive “All In” Attitude"

            },
            {
                "id":6,
                "competency":"Friendliness/Professionalism"

            },
            {
                "id":7,
                "competency":"Attention to Detail"

            },
            {
                "id":8,
                "competency":" Dependability"

            },
            {
                "id":9,
                "competency":"Independence"

            },
        ],
        "desired_traits":[
            {
                "id":1,
                "trait":"No clue or puzzle solving experience necessary, but previous sales, customer service, guest service, hospitality, theme park, retail or restaurant experience a plus."
            },
            {
                "id":2,
                "trait":"Training will be provided to all new hires. You just need a positive attitude, a willingness to provide outstanding guest service, and a desire to succeed."
            }
        ],
        "requirements":[
            {
                "id":1,
                "requirement":"Must be at least 18 years of age"
            },
            {
                "id":2,
                "requirement":"Able to lift up to 50 lbs"
            },
            {
                "id":3,
                "requirement":"May be required to pass company background screen and reference check"
            },
            {
                "id":4,
                "requirement":"Able to work a flexible schedule, including nights, weekends and holidays"
            },
            {
                "id":5,
                "requirement":"Must have reliable transportation"
            },
        ]


    },
    "store-lead":{

        "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-store-lead-hero.jpg",
        "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-store-lead-hero.jpg",
        "pagesubtitle":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people.",
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
        "job_roles":[
            {
                "id":1,
                "role":"Assist the Store Manager in inspiring the team to achieve success by ensuring the overall satisfaction of our guests"
            },
            {
                "id":2,
                "role":"Provide outstanding guest satisfaction using professional communication"
            },
            {
                "id":3,
                "role":"Help drive the engagement and development of the store's team of associates to ensure goals are met"
            },
            {
                "id":4,
                "role":"You and the team will greet new guests as they arrive for their scheduled appointments, or simply stop in to inquire about the experience"
            },
            {
                "id":5,
                "role":"Good verbal skills are important as you will be informing guests about the overall experience, theme options, and safety rules and regulations"
            },
            {
                "id":6,
                "role":"Model good manners as you and the team guide each guest to their selected escape room"
            },
            {
                "id":7,
                "role":"Even if they beg, you won't give away clues, but you could be asked to interpret a theme's overall mission to help our guests get moving"
            },
            {
                "id":8,
                "role":"After guests exit their selected rooms and desire to share their experiences, you will be there to support, encourage and affirm their game strategy, plus invite them back in the future"
            },
            {
                "id":9,
                "role":"Participate in and support all daily operations of the facility; including the quick, accurate recovery of each mystery room immediately after use"
            },
            {
                "id":10,
                "role":"Have an open ear to any guests who may express any dissatisfaction with their experience; escalating issues to the Store Manager for quick resolution"
            },
            {
                "id":11,
                "role":"Assist the team with the process of arranging furniture, backdrops, props or window displays, as outlined by company standards"
            },
            {
                "id":12,
                "role":"Ensure signage, written game clues, etc. reflect appropriate changes in themed promotions and upholds company guidelines"
            },
            {
                "id":13,
                "role":"Perform daily end-of-day register tasks"
            },
                 ],

        "key_competencies":[

            {
                "id":1,
                "competency":"Attention to Detail"

            },
            {
                "id":2,
                "competency":"Delegation"

            },
            {
                "id":3,
                "competency":"Friendliness/Professionalism"

            },
            {
                "id":4,
                "competency":"Dependability"

            },
            {
                "id":5,
                "competency":"Teamwork"

            },
            {
                "id":6,
                "competency":"Instills Trust/High Integrity"

            },
            {
                "id":7,
                "competency":"A Positive “All In” Attitude"

            },
            {
                "id":8,
                "competency":"Verbal Communication"

            },
            {
                "id":9,
                "competency":"Service & Sales Orientation"

            },
        ],
        "desired_traits":[
            {
                "id":1,
                "trait":"No clue or puzzle solving experience necessary, but previous sales, customer service, guest service, hospitality, theme park, retail or restaurant experience a plus."
            },
            {
                "id":2,
                "trait":"Training will be provided to all new hires. You just need a positive attitude, a willingness to provide outstanding guest service, and a desire to succeed."
            }
        ],
        "requirements":[
            {
                "id":1,
                "requirement":"High School diploma or equivalent 1 year of previous supervisor or management experience"
            },
            {
                "id":2,
                "requirement":"Able to lift up to 50lbs"
            },
            {
                "id":3,
                "requirement":"Must pass company background screen and reference check"
            },
            {
                "id":4,
                "requirement":"Able to work a flexible schedule (30 - 40 hrs/wk), including nights, weekends and holidays"
            },
            {
                "id":5,
                "requirement":"Must have reliable transportation"
            },
            {
                "id":6,
                "requirement":"Ability to adapt to a fast-paced work environment"
            },
            {
                "id":7,
                "requirement":"Solid problem solving skills"
            },
            {
                "id":8,
                "requirement":"Excellent verbal and written skills"
            },
            {
                "id":9,
                "requirement":"Ability to adapt to a fast-paced work environmentProficiency with Microsoft Office tools"
            },
            {
                "id":10,
                "requirement":"Multi-tasking capability and time management skills"
            },
        ]


    },
    "assistant-manager":{

        "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-assistant-manager-hero.jpg",
        "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-assistant-manager-hero.jpg",
        "pagesubtitle":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people.",
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
        "job_roles":[
            {
                "id":1,
                "role":"Assist the Store Manager in inspiring the team to achieve success by ensuring the overall satisfaction of our guests"
            },
            {
                "id":2,
                "role":"Provide outstanding guest satisfaction using professional communication"
            },
            {
                "id":3,
                "role":"Help drive the engagement and development of the store's team of associates to ensure goals are met"
            },
            {
                "id":4,
                "role":"You and the team will greet new guests as they arrive for their scheduled appointments, or simply stop in to inquire about the experience"
            },
            {
                "id":5,
                "role":"Good verbal skills are important as you will be informing guests about the overall experience, theme options, and safety rules and regulations"
            },
            {
                "id":6,
                "role":"Model good manners as you and the team guide each guest to their selected escape room"
            },
            {
                "id":7,
                "role":"Even if they beg, you won't give away clues, but you could be asked to interpret a theme's overall mission to help our guests get moving"
            },
            {
                "id":8,
                "role":"After guests exit their selected rooms and desire to share their experiences, you will be there to support, encourage and affirm their game strategy, plus invite them back in the future"
            },
            {
                "id":9,
                "role":"Participate in and support all daily operations of the facility; including the quick, accurate recovery of each mystery room immediately after use"
            },
            {
                "id":10,
                "role":"Have an open ear to any guests who may express any dissatisfaction with their experience; escalating issues to the Store Manager for quick resolution"
            },
            {
                "id":11,
                "role":"Assist the team with the process of arranging furniture, backdrops, props or window displays, as outlined by company standards"
            },
            {
                "id":12,
                "role":"Ensure signage, written game clues, etc. reflect appropriate changes in themed promotions and upholds company guidelines"
            },
            {
                "id":13,
                "role":"Perform daily end-of-day register tasks"
            },
                 ],

        "key_competencies":[

            {
                "id":1,
                "competency":"Attention to Detail"

            },
            {
                "id":2,
                "competency":"Delegation"

            },
            {
                "id":3,
                "competency":"Friendliness/Professionalism"

            },
            {
                "id":4,
                "competency":"Dependability"

            },
            {
                "id":5,
                "competency":"Teamwork"

            },
            {
                "id":6,
                "competency":"Instills Trust/High Integrity"

            },
            {
                "id":7,
                "competency":"A Positive “All In” Attitude"

            },
            {
                "id":8,
                "competency":"Verbal Communication"

            },
            {
                "id":9,
                "competency":"Service & Sales Orientation"

            },
        ],
        "desired_traits":[
            {
                "id":1,
                "trait":"No clue or puzzle solving experience necessary, but previous sales, customer service, guest service, hospitality, theme park, retail or restaurant experience a plus."
            },
            {
                "id":2,
                "trait":"Training will be provided to all new hires. You just need a positive attitude, a willingness to provide outstanding guest service, and a desire to succeed."
            }
        ],
        "requirements":[
            {
                "id":1,
                "requirement":"High School diploma or equivalent 1 year of previous supervisor or management experience"
            },
            {
                "id":2,
                "requirement":"Able to lift up to 50lbs"
            },
            {
                "id":3,
                "requirement":"Must pass company background screen and reference check"
            },
            {
                "id":4,
                "requirement":"Able to work a flexible schedule (30 - 40 hrs/wk), including nights, weekends and holidays"
            },
            {
                "id":5,
                "requirement":"Must have reliable transportation"
            },
            {
                "id":6,
                "requirement":"Ability to adapt to a fast-paced work environment"
            },
            {
                "id":7,
                "requirement":"Solid problem solving skills"
            },
            {
                "id":8,
                "requirement":"Excellent verbal and written skills"
            },
            {
                "id":9,
                "requirement":"Ability to adapt to a fast-paced work environmentProficiency with Microsoft Office tools"
            },
            {
                "id":10,
                "requirement":"Multi-tasking capability and time management skills"
            },
        ]


    },
    "store-manager":{

        "coverimageL":"/assets/gn-desktop-hero/allinadventures-career-store-manager-hero.jpg",
        "coverimageM":"/assets/gn-mobile-hero/allinadventures-career-store-manager-hero.jpg",
        "pagesubtitle":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people.",
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
        "job_roles":[
            {
                "id":1,
                "role":"Inspire your team to achieve success by ensuring the overall satisfaction of our guests"
            },
            {
                "id":2,
                "role":"Manage the day-to-day operations and nancial success of the store including growing sales through local store marketing efforts"
            },
            {
                "id":3,
                "role":"Provide outstanding guest satisfaction using professional communication"
            },
            {
                "id":4,
                "role":"Drive the engagement and development of your store team of associates to ensure goals are met"
            },
            {
                "id":5,
                "role":"You and your team will greet new guests as they arrive for their scheduled appointments, or simply stop in to inquire about the experience"
            },
            {
                "id":6,
                "role":"Good verbal skills are important as you will be informing guests about the overall experience, theme options, and safety rules and regulations"
            },
            {
                "id":7,
                "role":"Model good manners as you and your team guide each guest to their selected escape room"
            },
            {
                "id":8,
                "role":"Even if they beg, you won't give away clues, but you could be asked to interpret a theme's overall mission to help our guests get moving"
            },
            {
                "id":9,
                "role":"After guests exit their selected rooms and desire to share their experiences, you will be there to support, encourage and affirm their game strategy, plus invite them back in the future"
            },
            {
                "id":10,
                "role":"Guide daily operations of the facility; including the quick, accurate recovery of each mystery room immediately after use; manage the performance of associates who fall short of these practices"
            },
            {
                "id":11,
                "role":"Have an open ear to any guests who may express any dissatisfaction with their experience; resolve their grievances with the company's mission statement top of mind"
            },
            {
                "id":12,
                "role":"Lead your team through the process of arranging furniture, backdrops, props or window displays, as outlined by company standards"
            },
            {
                "id":13,
                "role":"Ensure signage, written game clues, etc. reflect appropriate changes in themed promotions and upholds company guidelines"
            },
            {
                "id":14,
                "role":"Perform daily end-of-day register tasks"
            },
                 ],

        "key_competencies":[

            {
                "id":1,
                "competency":"Attention to Detail"

            },
            {
                "id":2,
                "competency":"Decision Quality"

            },
            {
                "id":3,
                "competency":"Delegation"

            },
            {
                "id":4,
                "competency":"Develops Others"

            },
            {
                "id":5,
                "competency":"Motivation"

            },
            {
                "id":6,
                "competency":"Instills Trust/High Integrity"

            },
            {
                "id":7,
                "competency":"A Positive “All In” Attitude"

            },
            {
                "id":8,
                "competency":"Performance Management"

            },
            {
                "id":9,
                "competency":"Team Development"

            },
            {
                "id":10,
                "competency":"Service & Sales Orientation"

            },
            {
                "id":11,
                "competency":"Planning & Organization"

            },
            
            
        ],
        "desired_traits":[
            {
                "id":1,
                "trait":"Previous supervisory or sales management, retail management, hospitality management, event management, restaurant management experience a plus."
            },
            {
                "id":2,
                "trait":"Training will be provided to all new hires. (The flexibility to travel to a nearby training store for one week is required.)"
            },
            {
                "id":3,
                "trait":"We’re eager to talk to you if you possess a positive attitude, the enthusiasm and energy to inspire others to do their very best, and a desire to grow and succeed with an exciting new company"
            }
        ],
        "requirements":[
            {
                "id":1,
                "requirement":"High School diploma (college degree preferred) 3 years of previous supervisor or management experience"
            },
            {
                "id":2,
                "requirement":"Able to lift up to 50lbs"
            },
            {
                "id":3,
                "requirement":"Must pass company background screen and reference check"
            },
            {
                "id":4,
                "requirement":"Able to work a flexible schedule (30 - 40 hrs/wk), including nights, weekends and holidays"
            },
            {
                "id":5,
                "requirement":"Must have reliable transportation"
            },
            {
                "id":6,
                "requirement":"Ability to adapt to a fast-paced work environment"
            },
            {
                "id":7,
                "requirement":"Solid problem solving skills"
            },
            {
                "id":8,
                "requirement":"Excellent verbal and written skills"
            },
            {
                "id":9,
                "requirement":"Ability to adapt to a fast-paced work environmentProficiency with Microsoft Office tools"
            },
            {
                "id":10,
                "requirement":"Multi-tasking capability and time management skills"
            },
        ]


    }
    


}