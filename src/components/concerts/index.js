import Concert from "./Concert";
import PrimaryButton from "../primaryButton";

const Concerts = ({concerts}) => {

  return (
    <div className="md:pt-28">
      {concerts.map((concert, index) => (
        <div key={concert.title} className="grid grid-cols-1 py-4 lg:py-0 md:grid-cols-12">
          <div className={ `md:col-span-6 lg:col-span-4 ${index % 2 !== 0 ? "md:col-start-7 lg:col-start-7" : "lg:col-start-3"}`}>
            <Concert concert={concert} reverse={index % 2 !== 0}/>
          </div>
        </div>
      ))}
      
    </div>
  )

}

export default Concerts;