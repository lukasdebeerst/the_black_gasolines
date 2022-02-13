import {useEffect, useRef} from "react";

const PopupImage = ({image, close}) => {

  const popup = useRef();

  useEffect(() => {
    
    const closePopup = (event) => {
      console.log("closePopup");
      if (popup !== event.target || event.key === "Escape") {    
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
          <svg onMouseDown={close} xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 fill-white absolute top-3 right-3 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-xl lowercase font-title">{image.description}</p>
              <a href={`/download/images/${image.src}`} download className="flex items-center justify-between underline cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="ml-1">Download</p>
              </a>
            </div>
            <div className="relative w-full h-80 md:h-[50vh] ">
              <img alt={image.src} priority={true} src={`/download/images${image.src}`} />
            </div>
            <p className="mt-4 text-sm text-center">This image can be used for public purposes <br/> with mentioning The Black Gasolines and {image.credits}</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default PopupImage;