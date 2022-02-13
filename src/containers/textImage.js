

const TextImage = ({title, subtitle, content, image, reverse}) => {

  return (
    <article className={`grid grid-cols-1 md:grid-cols-12 md:gap-8 py-8`}>
      <div className={`mb-8 md:mb-0 md:col-span-7 ${reverse && "md:col-start-7"}`}>
        <p className="lowercase font-title text-secundary">{subtitle}</p>
        <h2 className="pb-8 text-2xl lowercase font-title">{title}</h2>
        <p>{content}</p>
      </div>
      <div className={`md:col-span-4 ${reverse ? "md:col-start-1 md:row-start-1" : "md:col-start-9"}`}>
        <img  width="364" height="528" src={image} alt={title} />
      </div>
    </article>
  )

}

export default TextImage;