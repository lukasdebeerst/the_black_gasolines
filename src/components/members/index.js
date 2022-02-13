import {members} from "../../data/members";
import MemberDetail from "./member";

const Members = () => {

  return (
    <div className="py-28">
      <div className="flex flex-col items-center justify-center w-full pb-8 text-center">
        <p className="lowercase font-title text-secundary">Who are we?</p>
        <h2 className="text-5xl lowercase font-title ">The Band</h2>
      </div>
    {members.map((member, index) => (
      <div key={index}>
        <MemberDetail member={member} reverse={index % 2 == 0} />
      </div>
    ))}
    </div>
  )

}

export default Members;