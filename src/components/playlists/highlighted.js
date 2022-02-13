
import {useState, useEffect} from "react";

import PopupYoutube from "../popup/popup-youtube";
import PrimaryButton from "../primaryButton";
import SecundaryButton from "../secundaryButton";

const Highlighted = () => {
  
  const [popup, openPopup] = useState(false);
  const [video, setVideo] = useState(false);


  // useEffect(async () => {

  //   const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}&id=${id}`);
  
  //   const data = res.json().then(data => {
  //     setVideo(data.items[0].snippet);
  //     console.log("video", video);
  //   })

  // }, [])


  return (
    <>
    <article >
     
      {/* <div className="grid grid-cols-1 py-8 lg:grid-cols-2 md:gap-8">
        <div className="cursor-pointer group" onClick={() => openPopup("Z7V2HQCdjWY")}>
          <div className="relative aspect-video">
            <Image alt="The Black Gasolines - The Worlds End (Live In Track)" priority={true} src="/download/images/image_01.png" layout='fill' objectFit='contain' />
          </div>
          <p className="py-4 text-2xl font-title group-hover:underline">The Black Gasolines - The Worlds End (Live In Track)</p>
        </div>
        <div className="">
          <div className="flex flex-col items-center justify-between mb-8 cursor-pointer md:flex-row group" onClick={() => openPopup("0geqsas-BvI")}>
            <div className="relative w-full md:mr-8 aspect-video md:w-96 ">
              <Image alt="The Black Gasolines - Furthermore (Live In Track)" priority={true} src="/download/images/image_05.png" layout='fill' objectFit='contain' />              
            </div>
            <p className="mt-2 font-title w-80 group-hover:underline md:mt-0">The Black Gasolines - Furthermore (Live In Track)</p>
          </div>
          <div className="flex flex-col items-center justify-between cursor-pointer group md:flex-row" onClick={() => openPopup("teHaURfPAII")}>
            <div className="relative w-full md:mr-8 aspect-video md:w-96">
              <Image alt="The Black Gasolines - The Worlds End (Live In Track)" priority={true} src="/download/images/image_04.png" layout='fill' objectFit='contain' />
            </div>
            <p className="mt-2 font-title w-80 group-hover:underline md:mt-0">The Black Gasolines - Night Shop Invaders (Live In Track)</p>
          </div>
        </div>
      </div> */}
 
    </article>
    {popup && (<PopupYoutube id={popup}  close={() => openPopup(false)}/>)}
    </>
  )

}

export default Highlighted