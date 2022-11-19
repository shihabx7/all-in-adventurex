import { getTotal } from "./AllDataList/getTotal"
export const getAnswerPageData=()=>{

    const ansdata={
        "locationlist":getTotal().locationlist,
         "activitylistSlug":getTotal().activitylistSlug,
          "eventlistSlug":getTotal().eventlistSlug,
          "virtualgameListSlug":getTotal().virtualgameSlug,
        "pagemeta":{

            "matatilte":"title",
            "metakeyword":"keywords",
            "metadescription":"metadescription"
          },
           
          "pagedata": {
                        "pagetitle":"ANSWERS",
                        "pagesubtitle":"At All In Adventures, we believe volunteering is a two-way street that benefits both the organization and the volunteer. It is an instrumental force in promoting positive and sustainable growth within communities.",
                         
                        "totalLocations": getTotal().totalLocations,
                        "coverimageL":"/assets/gn-desktop-hero/All-In-Adventures-Generic-Hero-Image-Desktop.jpg",
                        "coverimageM":"/assets/gn-mobile-hero/All-In-Adventures-Generic-Hero-Image-Mobile.jpg"
          },
          "hintlist":[
            {
                "id":1,
                "ques":"What kind of leaf is this?",
                "hint":"You'd better baylieve that the game is going to get harder from here!",
                "ans":"The leaf is a bay leaf.",
            },
            {
                "id":2,
                "ques":"I don't understand what this bestiary is for…",
                "hint":"I don't know about you, but unlike this guy I prefer my snacks to have flavor! I don't want to eat a salad…",
                "ans":"The Minotaur loves bay leaves as a snack, maybe you should try opening the envelope with his rune on it?",
            },
            {
                "id":3,
                "ques":"What is an anagram?",
                "hint":"An anagram is an enigma of annunciation that affixes the appropriate analog answer out of another word. Put simply, it rearranges a word into another word.",
                "ans":"If we go back to the bay leaf and the bestiary, we see that Abel Fay is an anagram for Bay Leaf. Maybe we should open his rune's envelope next?",
            },
            {
                "id":4,
                "ques":"I'm confused about the magical type symbols and the historical wizards.",
                "hint":"Consider the following- I, the magician, am one of the three historical wizards on the page. If I practice a certain type of magic, that would be the proper type of magic's symbol to open next. What magic do I practice?",
                "ans":"Merlin is the magician the hint is referring to, so you should use the rune on the fire symbol, since he practices pyromancy. Houdini is a false path here, as he may have been considered a magician, but Merlin was referred to as a magician.",
            },
            {
                "id":5,
                "ques":"I'm stuck on the third envelope with the rune sheet inside it.",
                "hint":"Take a closer look at the correct envelopes you've opened up until here, maybe their order will provide an answer?",
                "ans":"The runes on the envelopes need to be deciphered. The three envelopes that are the correct envelopes are numbered in order for 1, 2 and 3, as the runes to place in their matching spots on the small envelope. The two incorrect envelopes are fakes.",
            },
            {
                "id":6,
                "ques":"I didn't write the final spell on the back of the mini envelope before I opened it.",
                "hint":"",
                "ans":"That's ok! If you solved it and found out what order to put the runes in in English, then you have won the game. The important part is that you had fun figuring it out!",
            },
            {
                "id":7,
                "ques":"I found a “red herring” card and it led me here.",
                "hint":"",
                "ans":"Sorry! If you found a red herring card that means you fell for one of the fake envelopes. The envelopes with the red herring cards in them are entirely fake and are not used in the final spell for the game.",
            },
            {
                "id":8,
                "ques":"I accidentally opened up all the envelopes out of order before I started playing…",
                "hint":"",
                "ans":"Oh no! Unfortunately, there is no easy way to guide the player to put the correct papers back into the correct envelopes. If you like, you can send an email to help@allinadventures.com for outside assistance on the game. Otherwise, enjoy your escape room vouchers when you get the chance!",
            },
          ]

    }

    return ansdata

}