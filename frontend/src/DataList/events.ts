
// import img1 from "@/Assets/Images/music.jpg"


export const eventData =[
    {
        id: 1,
        name: "Music",
        link: "event/music",
        nameLink: "music",
        color: "#faa307",
        bgImage: "/src/Assets/Images/music-1.jpg",
        // bgImageMobile: require("../utils/images/categories/music/eventlistmbg-music.webp"),
        bgGradientColor: {
          background:
            "linear-gradient(0deg, rgba(83,6,39,1) 0%, rgba(0,0,0,1) 70%)",
        },
        eventColor: { backgroundColor: "#770c39" },
        // eventImg: require("../utils/images/categories/music/eventlistcard-music.webp"),
        eventGradient: {
          background:
            "linear-gradient(90deg, rgba(119,12,57,1) 5%, rgba(0,0,0,0) 50%)",
        },
        // eventHeading: require("../utils/images/categories/music/text-music.webp"),
        eventText: "feel the beat",
        eventTextClr: { color: "#fa207c" },
        events: [
            {
              id: "11",
              eventLink: "event/music/11",
      
              title: "Daw Master Music Production",
              eventName: "Daw Master",
              date: "",
              time: "",
              venue: "",
              isSrmEvent: true,
              // description: '',
              // category: '',
              teamsize: "solo",
              mode: "Online",
              timelimit: "60 minutes (live, online event hosted on Meet/Zoom)",
              judgingcriteria:
                "Judging Will be based on several criteria Which include creativity, skills, methods used etc.",
              rules: [
                "1. Participants will be sent samples at the start of the event.",
                "2. No samples/acapellas other than those given on the spot by the judge/moderator would be allowed to be used.",
                "3. Create a minute-long track using the given samples, no restrictions on genres.",
                "4. You are free to modify the given samples in any way, such as manipulating the tempo, key, using them as Chops, etc.",
                "5. Participants may be asked to screen-share if required.",
                "6. Participants are allowed to use any music production software (DAW) that they are Comfortable with.",
                "7. Failure to comply with the rules will lead to disqualification.",
                "8. Decision of the judges will be final and binding.",
              ],
              note: "Further details and procedure will be notified, to the people who register, prior to the event.",
              contact: [
                {
                  name: "Raghav",
                  contact: "+91 87696 77759",
                },
                {
                  name: "Kimberley",
                  contact: "+91 98312 90910",
                },
              ],
              quote: "WHERE WORDS FAIL MUSIC SPEAKS.",
            },
            {
              eventLink: "event/music/12",
              id: "12",
              title: "Spin Back DJ battle",
              eventName: "spin back",
              date: "03/03/2023",
              time: "10:00AM - 12:00PM",
              venue: "TECH PARK STAIRS",
              isSrmEvent: true,
              description:
                "An event to showcase disc jockey's skills and techniques to enthuse the audience",
              // category: '',
              teamsize: "solo",
              mode: "offline",
              timelimit: "10 minutes showcase +1 min setup",
              judgingcriteria:
                "Gear used, Track Selection, Technical Skills, Transitions, Creativity, Crowd response",
              rules: [
                "1. All Participants are expected to carry their music in Pen Drives. (Laptop iS also permitted to connect with the industry standard gear provided).",
                "2. Participants are free to use remixes however use of pre-mixes, pre edited and mashups are strictly not permitted.",
                "3. Participants are free to USe Acapella, SFX, Hot cues.",
                "4. Decision Of the judges will be final and binding,",
                "5. In the case ot a stoppage ot the performance by the participant, the following rules Will apply:",
                "-If the stoppage is due to equipment failure and not due to the fault Of the participant, the participant will be allowed to perform the set in its entirety from the beginning.",
                "-If the stoppage is due to equipment failure which is due to the fault of the participant, Participant may be allowed to readjust the equipment and continue the set where the equipment broke down.",
              ],
              note: "NOTE Further details and procedure (also regarding the equipment Which Will be provided) Will benotified, to the people Who register, prior to the event.",
              contact: [
                {
                  name: "Raghav",
                  contact: "+91 87696 77759",
                },
                {
                  name: "Kimberley",
                  contact: "+91 98312 90910",
                },
              ],
              quote: "I'M A DJ. I GET THE PARTY STARTED.",
            }]
    }
]