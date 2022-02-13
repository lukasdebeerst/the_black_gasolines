import {useState} from "react";

import Navigation from "../containers/navigation";
import Links from '../containers/links';
import Concerts from "../components/concerts";
import {tourdates} from "../data/concerts";
import PopupYoutube from '../components/popup/popup-youtube';
import Footer from '../containers/footer';

const Tourdates = () => {
  
  const [popup, openPopup] = useState(false);

  return (
    <>
    <div className="text-white bg-gray-600">
      <div className="container">
        <Links />
        <Navigation />
        <article className="grid items-center grid-cols-1 pb-20 pt-36 md:grid-cols-12 md:gap-8">
          <div className="pb-8 md:col-span-7">
            <p className="lowercase font-title text-secundary">Tourdates</p>
            <h2 className="text-3xl lowercase font-title">Come to a concert!</h2>
            <p>For all our followers, listeners and all the die-hard fans: here you can find all our upcoming shows! Wherever you might be, we hope to come and play somewhere near you, so you can experience The Black Gasolines in a live environment. Hope to see you all there!</p>
          </div>
          <div className="grid cursor-pointer md:col-span-4 md:col-start-9" onClick={() => openPopup("gju0YsPTODw")}>
            <div className="col-start-1 col-end-1 row-start-1 row-end-1">
              <img alt="The Black Gasolines - Tourdates" src="/images/tourdates.png" width="500" height="500" />
            </div>
            {/* <div className="z-10 flex items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1 ">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="h-28 w-28 fill-white">
                <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z"/>
              </svg>  
            </div>     */}
          </div>
        </article>
        <article className="relative pb-40 mt-4 md:pt-16">
          <div className="relative z-10 pt-8">
            <Concerts concerts={tourdates}  />
          </div>
          <div className="">
            {/* <div className="absolute top-0 z-0 w-screen h-full mt-16 transform -translate-x-1/2 bg-gray-700 md:mt-28 left-1/2 -skew-y-5"></div> */}
            <div className="absolute top-0 z-0 w-screen h-full transform -translate-x-1/2 bg-gray-700 left-1/2"></div>
          </div>
        </article>   
        <Footer />   
      </div>
    </div>
    {popup && (<PopupYoutube id={popup}  close={() => openPopup(false)}/>)}
    </>
  )

}

export default Tourdates;