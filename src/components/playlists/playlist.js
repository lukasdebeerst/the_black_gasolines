import { useEffect, useState } from 'react';
import Video from './video';
import PopupYoutube from '../popup/popup-youtube';
import env from "react-dotenv";


const Playlist = ({id, title, index}) => {

  const [videos, setVideos] = useState(false);
  const [popup, openPopup] = useState(false);



  useEffect(async () => {

    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails&key=${process.env.REACT_APP_YOUTUBE_KEY}&playlistId=${id}`);
  
    const data = res.json().then(data => {
      setVideos(data.items);
      // console.log(videos);
    })

  }, [])


  return (
    <>
    {videos && (
      <article className={`relative py-8`}>
        {index % 2 === 0 && (
          <div className="absolute top-0 w-screen h-full transform -translate-x-1/2 bg-gray-700 left-1/2"></div>   
        )}
        <div className="relative">
          <h2 className="z-20 pb-4 text-xl lowercase font-title">{title}</h2>
          <div className="flex pb-4 mb-4 space-x-8 overflow-x-auto lg:pb-8 scrollbar scrollbar-thumb-white scrollbar-track-gray-100 scrollbar-thin">
          {videos.map(video => (
           <>
              <Video id={video.contentDetails.videoId} popUp={() => !popup && openPopup(video.contentDetails.videoId)}/>
           </>
          ))}
          </div> 
        </div>
    
     </article> 
    )}
    {popup && (<PopupYoutube id={popup}  close={() => openPopup(false)}/>)}
  
    </>
  )


}

export default Playlist;