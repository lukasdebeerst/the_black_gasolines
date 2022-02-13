import {tourdates} from "../data/concerts";
import Concerts from "../components/concerts";
import PrimaryButton from "../components/primaryButton";

const Tourdates = () => {

  return (
    <article className="relative py-28">
      <div className="relative z-10">
        <div className="flex flex-col items-center justify-center w-full text-center">
          <p className="lowercase font-title text-secundary">Experience</p>
          <h2 className="text-3xl lowercase font-title ">Upcomming tourdates</h2>
        </div>
        <Concerts concerts={tourdates.slice(0, 4)}  />
        <div className="flex justify-center my-16">
          <PrimaryButton 
            title="Show all tourdates"
            link="/tourdates"
          />
        </div>
      </div>
      <div className="">
        {/* <div className="absolute top-0 z-0 w-screen h-full mt-16 transform -translate-x-1/2 bg-gray-700 md:mt-28 left-1/2 -skew-y-5"></div> */}
        <div className="absolute top-0 z-0 w-screen h-full transform -translate-x-1/2 bg-gray-700 left-1/2"></div>
      </div>
      
    </article>

  )



}

export default Tourdates;