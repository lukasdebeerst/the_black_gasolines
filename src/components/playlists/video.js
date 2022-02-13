import { useEffect, useState } from 'react';
import 'reactjs-popup/dist/index.css';

const Video = ({id, popUp}) => {

  const [video, setVideo] = useState(false);
  // const [popup, openPopup] = useState(false);
  const [link, setLink] = useState(false)

  useEffect(async () => {

    const res = await fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&key=${process.env.REACT_APP_YOUTUBE_KEY}&id=${id}`);
  
    const data = res.json().then(data => {
      setVideo(data.items[0].snippet);
      console.log("video", video);
    })
  
    setLink(`https://www.youtube.com/watch?v=${id}`)

  }, [])


  return (
    <>
    {video && (
      <>
      {/* <div className="flex-shrink-0 w-2/4 cursor-pointer md:w-1/4 lg:w-1/5" onClick={popUp} >
       <Image alt={video.title} priority={true} src={video.thumbnails.medium.url} width={video.thumbnails.medium.width}  height={video.thumbnails.medium.height} />
       <p className="pt-4 lowercase font-title">{video.title}</p>
      </div> */}
      {console.log(video)}
      <a className="flex-shrink-0 w-2/4 cursor-pointer md:w-1/4 lg:w-1/5" href={link}>
       <img alt={video.title} src={video.thumbnails.medium.url} width={video.thumbnails.medium.width}  height={video.thumbnails.medium.height} />
       <p className="pt-4 lowercase font-title">{video.title}</p>
      </a>
      </>
    )}
    {/* {popup && (<Popup id={id}  close={() => openPopup(false)}/>)} */}
    
    </>
  )


}

export default Video;