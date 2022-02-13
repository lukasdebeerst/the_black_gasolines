import Quote from "../components/quotes/quote"
import { quotes } from "../data/quotes"

const Quotes = () => {

  return (
    <article className="py-28">
      <div className="flex flex-col items-center justify-center w-full text-center ">
        <p className="lowercase font-title text-secundary">Reviews</p>
        <h2 className="text-5xl lowercase font-title ">What other people think.</h2>
      </div>
      {quotes.map((quote, index) => (
        <>
        <div key={quote.title} className="grid grid-cols-1 md:grid-cols-12">
          <div className={ `md:col-span-4 ${index % 2 !== 0 ? "md:col-start-7" : "md:col-start-3"}`}>
            <Quote quote={quote}  />
          </div>
        </div>
        </>
      ))}

    </article>
  )

}

export default Quotes;