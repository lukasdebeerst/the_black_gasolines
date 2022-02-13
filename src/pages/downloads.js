
import Navigation from "../containers/navigation";
import Links from '../containers/links';
import Footer from "../containers/footer";

import {files} from "../data/download";
import DownloadImages from '../components/downloads/downlaodImages';
import {useState} from "react";
import PopupYoutube from '../components/popup/popup-youtube';



export default function Downloads() {
  
  const [popup, openPopup] = useState(false);

  return (



    <div className="text-white bg-gray-600">
      <div className="container min-h-screen">
        <Links />
        <Navigation />
        <div className='min-h-screen'>
          <article className="grid items-center grid-cols-1 pb-12 pt-36 md:grid-cols-12 md:gap-8">
            <div className="pb-8 md:col-span-7">
              <p className="lowercase font-title text-secundary">Downloads</p>
              <h2 className="text-3xl lowercase font-title">Whatever you need</h2>
              <p>Do you want to write a review or an article about The Black Gasolines? Do you need some good quality pictures? We can help you a little further! On this page, you can find all the background info and pictures you will need. Please be aware of the copyright mentions when publishing some of our materials. Enjoy!</p>
            </div>
            <div className="grid cursor-pointer md:col-span-4 md:col-start-9" onClick={() => openPopup("gju0YsPTODw")}>
              <div className="col-start-1 col-end-1 row-start-1 row-end-1">
                <img alt="Downloads" src="/images/tourdates.png" width="500" height="500" />
              </div>
              <div className="z-10 flex items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-28 w-28 fill-white">
                  <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z"/>
                </svg>  
              </div>    
            </div>
          </article>
          <DownloadImages />
  
          <article className="py-4">
            <h2 className="mb-4 text-2xl lowercase font-title">Files</h2>
              {files.map(file => (
                <a key={file.src} href={`/download/files${file.src}`} download className="">
                  {console.log(file.src)}
                  <div className="flex items-center hover:border-white hover:underline">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <p className="py-2 ml-1 lowercase font-title">{file.title}</p>
                  </div>
                </a>
              ))}
            
          </article>
          
        </div>
        
        <Footer />
      </div>
      {popup && (<PopupYoutube id={popup}  close={() => openPopup(false)}/>)}

    </div>
  )
}