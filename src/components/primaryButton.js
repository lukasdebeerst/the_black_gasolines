const PrimaryButton = ({title, link, className}) => {

  return (
    <a href={link} className={`inline-block bg-primary font-title lowercase py-2 px-8 transition-all duration-300 hover:bg-white hover:text-primary text-center ${className} `}>
      {title}
    </a>
  )

}

export default PrimaryButton;