

const MemberDetail = ({member, reverse}) => {

  return (
    <article id={member.name} className={`grid grid-cols-1 md:grid-cols-12 md:gap-8 py-10`}>
      <div className={`md:col-span-9 ${reverse && ""}`}>
        <p className="lowercase font-title text-secundary">{member.role}</p>
        <h2 className="pb-8 text-2xl lowercase font-title">{member.name}</h2>
        <p className="leading-relaxed">{member.bio}</p>
        <div className="py-8">
          <p className="text-xl italic lowercase font-title">{member.quote}</p>
          <p>- {member.name}</p>
        </div>
      </div>
      <div className={`md:col-span-3 ${reverse ? "md:col-start-1 md:row-start-1" : "md:col-end-13"}`}>
        <img width="364" height="528" src={member.image_01} alt={member.name} />
      </div>
    </article>
  )

}

export default MemberDetail;