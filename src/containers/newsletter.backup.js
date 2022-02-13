import Label from "../components/form/label";
import Input from "../components/form/input";
import {useState} from "react";

const Newsletter = ({title, subtitle}) => {


  const [mail, setMail] = useState("");
  const [submit, setSubmit] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle Submit", mail);
    
    fetch('/api/newsletter', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(mail)
    })
    setSubmit(true);
  }

  return (
    <article className="relative py-28">
      <div class="absolute top-0 z-0 w-screen h-full transform -translate-x-1/2 bg-gray-700 left-1/2"></div>
      <div className="relative">
        <div>
          <div className="relative flex flex-col items-center justify-center w-full mb-12 text-center">
            <h2 className="text-3xl lowercase font-title ">{title}</h2>
            <p className="lowercase font-title text-secundary">{subtitle}</p>
          </div>
        </div>
        {!submit ? (
          <>
          <form 
          className="flex flex-col items-center w-full"
          method="POST"
          action=""
          onSubmit={(e) => handleSubmit(e)}
        >
          <Label className="w-full md:w-1/2" forvalue="mail" content="Your e-mailaddress" />
          <Input 
            className="w-full mb-6 bg-gray-200 md:w-1/2" 
            type="mail" 
            name="mail" 
            placeholder="Your e-mailaddress" 
            onChange={e => setMail(e.currentTarget.value)}
          />
          <input 
            className="col-span-2 row-start-7 px-4 py-2 mt-4 transition-all duration-300 cursor-pointer font-title bg-primary hover:bg-white hover:text-primary"
            type="submit" 
            value="Subscribe" 
          />
        </form>
          </>
        ) : (
          <p className="py-4 text-xl text-center lowercase font-title">Thank you so much for subscribing to our newsletter!</p>
        )}
      </div>
    
      
    </article>

  )

}

export default Newsletter;