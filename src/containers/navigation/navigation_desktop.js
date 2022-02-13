import {useRef, useEffect, useState} from "react";



const NavigationDesktop = ({items}) => {

  const navigationRef = useRef();
  const [path, setPath] = useState();

  useEffect(() => {
    setPath(window.location.pathname);
  
  });
  

  return (
    <div  className="top-0 z-30 hidden w-screen transform -translate-x-1/2 bg-gray-600 lg:block md:fixed h-28 left-1/2">
      <div className="container flex items-center justify-between h-full">
        <a href="/">
          <h1 className="hidden">The Black Gasolines</h1>
          <img alt="The Black Gasolines - Theatrical Rock band" src="/images/logo.svg" width="200" height="200" />          
        </a>
        <nav >
          <ul className={"flex justify-between items-center"}>
            {items.map(item => (
              <li key={item.link} >
                <a href={item.link} className={`mx-4 text-base hover:border-b-2 font-title lowercase font-light hover:border-white transition-all ${item.highlighted && 'hover:bg-white border hover:text-gray-700 border-white px-4 py-2'} ${path === item.link && "border-b-2 border-white"}`}>
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )

}

export default NavigationDesktop;