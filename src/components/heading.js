const Heading = ({subtitle, title, className}) => {

  return (
    <div className={className}>
      <p className="lowercase text-secundary font-title">{subtitle}</p>
      <h2 className="text-4xl lowercase font-title">{title}</h2>
    </div>
  )

}

export default Heading;