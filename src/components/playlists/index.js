import { useEffect, useState } from 'react';
import Playlist from './playlist';
import Highlighted from './highlighted';
import env from "react-dotenv";


const Playlists = () => {

  const [playlists, setPlaylists] = useState(false);

  useEffect(async () => {

    const res = await fetch(`https://www.googleapis.com/youtube/v3/playlists?part=snippet&key=${process.env.REACT_APP_YOUTUBE_KEY}&channelId=UCj5EZpl_2-9aw4-YeoW3P3A`);
  
    const data = res.json().then(data => {
      setPlaylists(data.items);
      console.log(data);
    })

  }, [])

  return (
    <>
    {playlists && (
      <article >
        <div className="flex flex-col items-center justify-between md:flex-row">
          <h2 className="text-4xl lowercase font-title">Watch</h2>
          <div className="flex flex-col items-center justify-between md:flex-row">
            <a href="https://www.youtube.com/channel/UCj5EZpl_2-9aw4-YeoW3P3A" target="_blank" className="flex items-center px-8 py-2 mb-4 text-center lowercase transition-all duration-300 transform bg-primary font-title hover:scale-105 md:mb-0 md:mr-2">
              <svg className="w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              <p>Go to youtube</p>
            </a>
            <a href="https://www.youtube.com/channel/UCj5EZpl_2-9aw4-YeoW3P3A?sub_confirmation=1" target="_blank" className="flex items-center px-8 py-2 lowercase transition-all duration-300 transform bg-gray-200 hover:scale-105 font-title">
              <svg className="w-6 h-6 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
              <p>Subscribe</p>
            </a>
          </div>
        </div>
        <Highlighted />
        {playlists.map((playlist, index) => (
          <Playlist id={playlist.id} title={playlist.snippet.title} index={index + 1}/>
        ))}

        <p>Hey</p>
      </article>
    )}
  
    </>
  )


}

export default Playlists;