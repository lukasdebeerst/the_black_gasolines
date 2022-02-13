import {releases} from "../../data/releases";
import Release from "./release";
import { useRef } from "react";

import Arrows from "../../components/Arrows";

const Releases = () => {

  const slider = useRef();


  return (
    <article className="py-28 ">
      <div className="relative flex flex-col items-center justify-center w-full mb-16 text-center">
        <p className="lowercase font-title text-secundary">Releases</p>
        <h2 className="text-3xl lowercase font-title ">Our pride and joy</h2>
        <Arrows reference={slider} value={600} />
      </div>
      <div ref={slider} className="z-10 flex w-full pb-4 mb-4 space-x-8 overflow-x-auto zrelative lg:pb-8 scrollbar scrollbar-thumb-white scrollbar-track-gray-100 scrollbar-thin scroll-smooth">
        {releases.map(release => (
          <Release release={release} />
        ))}
        
      </div>
    </article>
 
  )         
}

export default Releases;