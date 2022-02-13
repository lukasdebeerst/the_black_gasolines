import {useEffect, useRef} from 'react';

const PopupYoutube = ({id, close}) => {

  const popup = useRef();

  useEffect(() => {
    
    const closePopup = (event) => {
      console.log("closePopup");
      if (popup !== event.target || event.key === "Escape") {    
        console.log("clickedyclick")
        close();
        endEvent();
      }
      
    }
    document.addEventListener('click', closePopup);
    document.addEventListener('keydown', closePopup)

    const endEvent = () => {
      console.log("end event")
      document.removeEventListener("click", closePopup);
      document.removeEventListener("keydown", closePopup);

    }
    
  }, [])

  return (
    <div ref={popup} className="fixed top-0 left-0 z-30 w-screen h-screen " >
      <div className="absolute w-full h-full bg-gray-600 opacity-60" ></div>
      <div className="absolute z-40 flex items-center justify-center w-full h-full ">
        <div className="relative w-full px-2 py-4 pt-16 bg-gray-700 md:p-12 md:w-4/5 xl:w-2/4 rounded-xl">
          <svg onMouseDown={close} xmlns="http://www.w3.org/2000/svg" className="absolute w-8 h-8 cursor-pointer fill-white top-3 right-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <div className="w-full aspect-video">
            <iframe className="w-full h-full" src={`https://www.youtube-nocookie.com/embed/${id}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen></iframe>
          </div>          
        </div>
      </div>
    </div>
  )

}

export default PopupYoutube;