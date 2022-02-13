import {useState} from "react";

const NavigationMobile = ({items}) => {

  const [menu, openMenu] = useState(false)


  return (
    <div className="fixed top-0 z-30 w-screen transform -translate-x-1/2 bg-gray-600 left-1/2 lg:hidden">
      <div className="">
        <div className="container relative z-10 flex items-center justify-between py-4 ">
          <a href="/">
            <h1 className="hidden">The Black Gasolines</h1>          
            <img alt="The Black Gasolines - Theatrical Rock band" src="/images/logo.svg" width="104" height="35"  />
          </a>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 cursor-pointer" onClick={() => menu ? openMenu(false) : openMenu(true)} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>   
        </div>
        <nav className={`absolute top-0 w-screen pt-20 transition-all duration-300 transform -translate-x-1/2 bg-gray-600 left-1/2 overflow-hidden ${menu ? 'h-screen' : 'h-0'} `}>
          <ul className={"flex flex-col items-center justify-between"}>
            {items.map(item => (
              <li key={item.link} className={"py-4 font-xl"}>
                <a href={item.link}>{item.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>

 

    
  )

}

export default NavigationMobile;