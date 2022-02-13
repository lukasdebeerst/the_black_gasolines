import Heading from "../components/heading";
import PrimaryButton from "../components/primaryButton";
import { members } from "../data/members";
import MemberImage from "../components/members/member_image";
import { useRef } from "react";

import Arrows from "../components/Arrows";

const Aboutus = () => {
  const slider = useRef();


  return (
    <article className="py-28">
      <div className="grid items-center justify-center grid-cols-1 pb-8 lg:grid-cols-12 lg:gap-8">
        <div className="mb-8 lg:col-span-6 lg:col-start-4">
          <Heading 
            title="Meet The Band"
            subtitle="Who are we?"
            className="pb-4 text-center"
          />
          <p className="pb-4 text-justify">
            The Black Gasolines is a belgian theatrical/art rock band founded by Lukas Debeerst and Bradley Remorie in 2016. 
            After their debut EP “Dopamine Rush” in 2018, they changed their drummer to Justin Bruggeman and went on a quest to play as much as possible. They played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London. they released 2 singles,  “Long Way Suicide” (2019)  and “Kangaroo Days” (2020).     
            With the introduction of Matthias Depraetere as the new piano player, they released their first album ‘It Took a Lifetime’ at the beginning of october 2021.
          </p>
          <div className="flex justify-center py-4">
            <PrimaryButton 
              link="/about-us"
              title="Get to know us"
              className=""
            /> 
          </div>
        </div>
      </div>
      <div className={"lg:grid hidden md:grid-cols-12 items-center justify-center md:gap-8"}>
        {members.map((member, index) => (
          <MemberImage member={member} index={index} />
        ))}
      </div>
      <div className="relative lg:hidden">
        <Arrows reference={slider} value={600} />
        <div ref={slider} className="flex pb-4 mb-4 space-x-8 overflow-x-auto lg:pb-8 scrollbar scrollbar-thumb-white scrollbar-track-gray-100 scrollbar-thin scroll-smooth">
          {members.map((member, index) => (
            <div key={index} className="flex-shrink-0 md:w-1/4 lg:w-1/5">
              <MemberImage member={member} index={index} />
            </div>
          ))} 
        </div>
      </div>

    </article>
  )


}

export default Aboutus;