import {useState} from "react";

const Release = ({release}) => {

  const [hover, setHover] = useState(false);

  return (
    <div 
      className="flex-shrink-0 w-3/4 md:w-2/5 lg:w-1/4 xl:w-1/5"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="grid w-[250px]">
        <div className={`col-start-1 col-end-1 row-start-1 row-end-1 transition-all ${hover && 'opacity-60'}`}>
          <img alt={release.title}  src={release.image} width="250" height="250" />
        </div>
        <div className={`z-10 flex flex-col items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1 transition-all duration-300 opacity-0 ${hover && "opacity-100"}`}>
          <p className="pb-4 lowercase font-title">Stream or buy on</p>
          <div className="grid grid-cols-4 gap-4">
            <a href={release.spotify}>
              <svg className="w-8 h-8 fill-white hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.1 8 0 119.1 0 256s111.1 248 248 248 248-111.1 248-248S384.9 8 248 8zm100.7 364.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"/></svg>
            </a>
            <a href={release.apple}>
              <svg className="w-8 h-8 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="white" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/></svg>
            </a>
            <a href={release.youtube}>
              <svg className="w-8 h-8 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="white" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg>
            </a>
            <a href={release.bandcamp}>
              <svg className="w-8 h-8 hover:scale-110" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path fill="white" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm48.2 326.1h-181L199.9 178h181l-84.7 156.1z"/></svg>            
            </a>
          </div>
        </div>
      </div>
      <p className="text-xl lowercase font-title">{release.title}</p>
      <p className="text-secundary">{release.year}</p>

    </div>
  )

}

export default Release;