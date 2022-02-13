import { members } from "../data/members";
import MemberImage from "../components/members/member_image";
import { useRef } from "react";

import Arrows from "../components/Arrows";

const AboutUsHeader = () => {
  const slider = useRef();

  return (
    <article className="pt-20 md:pt-40 md:pb-8">
      <div className="flex flex-col items-center justify-center w-full pb-8 text-center">
        <p className="lowercase font-title text-secundary">Who are we?</p>
        <h2 className="text-5xl lowercase font-title ">Meet the band</h2>
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

export default AboutUsHeader;