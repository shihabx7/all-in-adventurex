export const getJobPositionPageData=(jobname)=>{
    const jobtitle=()=>{
        return jobname.split('-').join(' ')
    }
    const jobPositionData={
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
        "pagedata":{
            "pagetitle":"APPLY FOR "+jobtitle(),
            "pagesubtitle":"This is a great opportunity for anyone excited for the chance to grow and develop with a startup company that is looking to change the face of how people.",
            "coverimageL":"/assets/home-benar-bg.jpg",
            "coverimageM":"/assets/home-hero.jpg",
            "job_designation":jobtitle()
            
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
    }

    return jobPositionData

}