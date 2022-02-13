const Quote = ({quote}) => {

  return (
    <div className="py-2">
      <a href={quote.link} >
        <p className="text-xl font-title">{quote.title}</p>
        <p>- {quote.author}</p>
      </a>
    </div>
 
  )

}

export default Quote;