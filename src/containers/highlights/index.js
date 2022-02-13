import { highlights } from "../../data/highlights";
import Highlight from "./highlight";
import { useRef } from "react";

import Arrows from "../../components/Arrows";

const Timeline  = () => {

  const slider = useRef();


  return (
    <article className="relative py-28">
      <div className="absolute top-0 z-0 w-screen h-full transform -translate-x-1/2 bg-gray-700 left-1/2"></div>
      <div className="relative flex flex-col items-center justify-center w-full py-10 text-center ">
        <p className="lowercase font-title text-secundary">Our journey</p>
        <h2 className="text-3xl lowercase font-title ">Highlights</h2>
        <Arrows reference={slider} value={600} />

      </div>

      <div ref={slider} className="flex py-4 mb-4 overflow-x-auto lg:pb-8 scrollbar scrollbar-thumb-white scrollbar-track-white scrollbar-thin scrollbar-default scroll-smooth" >

        {highlights.map((highlight, index) => (
          <div key={highlight.title}>
            <Highlight highlight={highlight} index={index} /> 
          </div>
          ) )}
      </div>
    </article>
  )


}

export default Timeline;