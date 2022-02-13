import {useState} from "react";

const Arrows = ({reference, value}) => {

  const [scrollWidth, setScrollwidth] = useState(0)

  
  const handleScroll = (direction) => {
    if(direction === "left"){
      reference.current.scrollLeft -= value;
    } else if(direction === "right") {
      reference.current.scrollLeft += value; 
    }
    
    setScrollwidth(reference.current.scrollLeft + value)
    handleArrowStates()
  }
  
  const handleArrowStates = () => {
    console.log(reference.current.scrollLeft)

    
  }
  
  return (
    <div className="top-0 right-0 h-full mt-4 md:mt-0 lg:absolute">
      <div className="flex items-center justify-center h-full md:justify-between">
          <svg onClick={() => handleScroll("left")} xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 mr-2 transition-all duration-300 transform cursor-pointer md:w-6 md:h-6 hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <svg onClick={() => handleScroll("right")} xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 transition-all duration-300 transform cursor-pointer md:w-6 md:h-6 hover:scale-105" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>

      </div>
      
    </div>

  )

}

export default Arrows;