import {images} from "../../data/download";
import PopupImage from '../popup/popup-image';
import {useState, useRef} from "react";

import Arrows from "../Arrows";

const DownloadImages = () => {

  const [popup, showPopup] = useState(false);
  const slider = useRef();


  return (
    <>
    <article className="">
      <div className="relative">
        <h2 className="text-2xl lowercase font-title">Images</h2>
        <Arrows reference={slider} value={600} />
      </div>
     
      <div ref={slider} className="flex pb-4 mb-4 space-x-8 overflow-x-auto lg:pb-8 scrollbar scrollbar-thumb-white scrollbar-track-gray-100 scrollbar-thin scroll-smooth">
        {images.map(image => (
          <ShowImage image={image} popUp={() => showPopup(image)}/>
        ))}
      </div>
    </article>
    {popup && (
      <PopupImage image={popup}  close={() => showPopup(false)}/>
    )}
  </>
  )
}

const ShowImage = ({image, popUp}) => {
  

  return (
    <>
    <div className="relative flex-shrink-0 w-2/4 cursor-pointer h-52 md:w-1/4 lg:w-1/5" onClick={popUp}>
      <img  src={`/download/images${image.src}`} alt={image.title} />
    </div>
   
    </>
    
  )

}

export default DownloadImages;