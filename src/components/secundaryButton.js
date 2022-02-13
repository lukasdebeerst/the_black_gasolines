const SecundaryButton = ({title, link, className}) => {

  return (
    <a href={link} className={`inline-block bg-gray-200 py-2 px-8 transition-all duration-300 hover:bg-white hover:text-gray-200 ${className} `}>
      {title}
    </a>
  )

}

export default SecundaryButton;