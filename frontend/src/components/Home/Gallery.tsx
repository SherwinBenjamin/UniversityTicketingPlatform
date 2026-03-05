"use client";
import { LayoutGrid } from "../ui/layout-grid";
import ContactCard from "./ContactCard";

export function Gallery() {
  return (
    <div className="bg-[#070717] homeGallery pb-[30px] ">
      <h3 className="font-extrabold font-[montserrat] text-[#e53a5f] text-[5rem] text-center  py-[3rem] uppercase ">
        #Milan Pulse
      </h3>
      <div className="h-[120rem] md:h-[70rem]  w-full">
        <LayoutGrid cards={cards} />
      </div>
      <section>
        <h3 className="text-[3rem] text-center  font-['montserrat'] font-bold ">
          Contact Us
        </h3>
        <div className=" flex flex-col md:flex-row justify-center gap-y-[3rem] py-[63px] ">
          <ContactCard
            title="Publicity"
            description={
              "Connect with our dedicated publicity team to spread the word about our event."
            }
            mail={"publicity.studentaffairs@srmist.edu.in"}
          />
          <ContactCard
            title="Sponsorship"
            description={
              "Let our sponsorship team guide you through the opportunities to partner with our event"
            }
            mail={"partnership.sa@srmist.edu.in"}
          />
        </div>
      </section>
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2020</p>

      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The fest was fashioned with over 150 events transcending from music,
        dance and many more with everlasting performances from Salim-Suleiman,
        Jonita Gandhi, Ritviz, comedians Rohan Joshi and Saurav Mehta,
        international electronic dance music duo Bassjackers.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2018</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Vijay Deverakonda Inaugurated Milan and Amit Trivedi, Nucleya was the
        special attraction of Milan'18 as it had entered decennial year with
        success in reaching the legacy of Milan. It conducted various events
        with formal and informal along with the valedictory ceremony at the end.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2017</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Milan 2017 was as energetic and entertaining as it could be; Aditya Roy
        Kapoor, the nation’s heart throb, inaugurated the fest and R Sarathkumar
        was the guest of honour. It was held from 9th - 12th March 2017 and it
        exceeded everyone’s expectations.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2016</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The phrase Live The Change is accurate in its literal sense because it
        expresses exactly what the pupils must learn. Bollywood actor John
        Abraham served as the chief guests at the inaugural event on March 3.
        All the proceeds from this enthralling fest went towards the cause.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2015</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        It had no less than extravagant performances from renowned K-pop band
        N-Sonic, Between Recess and aerobatics great Gunther Gold from
        Austria.Popular actor turned politician Sarath Kumar was the chief
        guest. It ended with a stunningly beautiful sight of a firework lit up
        sky.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2014</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Milan 2014 reached heights beyond imagination; that year, Catherine
        Tresa and Karthi were the special guests. It was held from the 29th of
        January to the 1st of February 2014 and stunned everyone!
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2010</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        There was numerous events with music and dance, also informal events as
        literary skills in writing, shipwreck, etc.., It ended with Valedictory
        ceremony with national anthem.
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2009</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Students flocked from more than 70 colleges from all across the country
        to participate in the event. There were performances from students such
        as kathak, Odissi and many more to display unity of art and the states
        of India.
      </p>
    </div>
  );
};
const SkeletonNine = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">2008</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        The first edition of SRM Institute of Science of Technology commenced in
        March with flying colours: the three Chief Guests of the event were
        legendary singer Asha Bhosle, actor Tamannaah and actor Reema Sen.
        Eventhough the fest had only 25 events, it became a landmark in the
        history of the institution.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "col-span-1 max-sm:min-h-[5rem]",
    thumbnail: "/Images/timeline/1milan20.jpg",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "md:col-span-2 max-sm:min-h-[5rem]",
    thumbnail: "/Images/timeline/1milan18.jpg",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "md:col-span-2 max-sm:min-h-[5rem]",

    thumbnail: "/Images/timeline/1milan17.jpg",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "col-span-1 max-sm:min-h-[5rem]",
    thumbnail: "/Images/timeline/1milan16.jpg",
  },

  {
    id: 6,
    content: <SkeletonFive />,
    className: "col-span-1 max-sm:min-h-[5rem]",
    thumbnail: "/Images/timeline/2milan14.jpg",
  },
  {
    id: 5,
    content: <SkeletonSix />,
    className: "md:col-span-2 max-sm:min-h-[5rem]",

    thumbnail: "/Images/timeline/1milan15.jpg",
  },
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "col-span-1 max-sm:min-h-[5rem]",
    thumbnail: "/Images/timeline/1milan10.jpg",
  },

  {
    id: 8,
    content: <SkeletonEight />,
    className: "col-span-1 max-sm:min-h-[5rem]",
    thumbnail: "/Images/timeline/1milan9.jpg",
  },
  {
    id: 9,
    content: <SkeletonNine />,
    className: "col-span-1 max-sm:min-h-[5rem]",

    thumbnail: "/Images/timeline/1milan8.jpg",
  },
];
