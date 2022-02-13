import PrimaryButton from "../components/primaryButton";
import {useRef, useEffect} from "react";


const Header = () => {

  const videoRef = useRef();
  const contentRef = useRef();

  return (
    <article className="relative h-screen pt-8 md:pt-12 lg:pt-28 md:h-auto">
      <div ref={videoRef} className="relative flex items-center justify-center h-full overflow-hidden">
        <video playsInline autoPlay loop muted className="object-cover w-full h-full" >
          <source src="/videos/header.mp4#t=0.1" type="video/mp4" />
        </video>     
      </div>
      <div ref={contentRef} className="absolute flex flex-col items-center justify-center w-full transform -translate-x-1/2 -translate-y-1/2 md:w-auto top-1/2 left-1/2">
        <div className="flex flex-col items-center pb-8 text-center text-white font-title ">
          <h2 className="text-3xl lowercase md:text-6xl font-title">Theatrical rock reinvented</h2> 
        </div>
        <div className="flex items-center space-x-4">   
          <a href="https://www.youtube.com/watch?v=dc_0CU9hsTs" className="flex items-center justify-center px-8 py-4 transition-all duration-500 bg-primary group font-title">              
            <p className="mt-1">Watch The Livesession</p>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-4 transition-all duration-500 transform group-hover:translate-x-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  )

}

export default Header;
