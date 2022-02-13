
import {useState} from "react";

const MemberImage = ({member, index}) => {
    
  const paddingTops = ["md:pt-0", "md:pt-32", "md:pb-32", "md:pt-16"];
  const [data, showData] = useState(false);

  return (
    <a 
      key={member.name} 
      className={`${paddingTops[index]} grid grid-cols-1 grid-rows-1 justify-center items-center py-4 md:py-0 md:col-span-3`} 
      onMouseEnter={() => showData(true)} 
      onMouseLeave={() => showData(false)}
      href={`/about-us#${member.name}`}
    >
      <div className={`col-start-1 col-end-1 row-start-1 row-end-1 flex justify-center items-center transition-all ${data && 'opacity-60'} `}>
        <img src={member.image_01} width="269" height="402" alt={member.name} />
      </div>
      <div className={`hidden z-10 lg:flex flex-col items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1 transition-all duration-500 opacity-0 ${data && "opacity-100"}`}>
        <p className="px-2 text-2xl lowercase font-title">{member.name}</p>
        <p className="px-2 font-title text-secundary">{member.role}</p>
      </div>
      <div className="lg:hidden">
        <p className="px-2 text-2xl lowercase font-title">{member.name}</p>
        <p className="px-2 font-title text-secundary">{member.role}</p>
      </div>
    </a>
  )

}

export default MemberImage;