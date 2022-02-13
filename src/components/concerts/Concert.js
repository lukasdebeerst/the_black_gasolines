import PrimaryButton from "../primaryButton";
import SecundaryButton from "../heading";

const Concert = ({concert, reverse}) => {

return (
  <div className="py-8">
    <p className={`lowercase mb-4 font-title ${reverse && 'md:text-right'}`}>{concert.date}</p>
    <h3 className={`text-2xl mb-4 lowercase font-title ${reverse && 'md:text-right'}`} >{concert.title}</h3>
    <div className='flex items-center mb-8 space-x-8'>
      <div className="flex items-center space-x-2 ">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>        
        <p className={`font-title ${reverse && 'md:text-right'}`}>{concert.city}</p>
      </div>
      <div className={`flex items-center space-x-2 ${reverse && "justify-end"} `}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="white">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <p className={`font-title ${reverse && 'md:text-right'}`}>{concert.time}</p>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-8 text-center">
      {concert.information && (
        <>
          <a href={concert.information} className="px-4 py-2 space-x-4 bg-gray-200 font-title" >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4"><path fill="white" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm0-338c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/></svg> */}
            <p>More information</p>
          </a>
        </>
      )}
      {concert.tickets && (
        <>
          <a href={concert.tickets} className="px-4 py-2 space-x-4 font-title bg-primary" >
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="w-4 h-4"><path fill="white" d="M400 208v96H176v-96h224m24-48H152c-13.255 0-24 10.745-24 24v144c0 13.255 10.745 24 24 24h272c13.255 0 24-10.745 24-24V184c0-13.255-10.745-24-24-24zm144 56h8V112c0-26.51-21.49-48-48-48H48C21.49 64 0 85.49 0 112v104h8c22.091 0 40 17.909 40 40s-17.909 40-40 40H0v104c0 26.51 21.49 48 48 48h480c26.51 0 48-21.49 48-48V296h-8c-22.091 0-40-17.909-40-40s17.909-40 40-40zm-40-38.372c-28.47 14.59-48 44.243-48 78.372s19.53 63.782 48 78.372V400H48v-65.628c28.471-14.59 48-44.243 48-78.372s-19.529-63.782-48-78.372V112h480v65.628z"/></svg> */}
            <p>Tickets</p>
          </a>
        </>
      )}
    </div>
  </div>
)

}

export default Concert;