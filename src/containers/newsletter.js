import Label from "../components/form/label";
import Input from "../components/form/input";
import {useState} from "react";

const Newsletter = ({title, subtitle}) => {

  const [submit, setSubmit] = useState(false)

  return (
    <article className="relative py-10">
      <div className="absolute top-0 z-0 w-screen h-full transform -translate-x-1/2 bg-gray-700 left-1/2"></div>
      <div className="relative">
        <div>
          <div className="relative flex flex-col items-center justify-center w-full mb-8 text-center">
            <h2 className="text-3xl lowercase font-title ">{title}</h2>
            <p className="lowercase font-title text-secundary">{subtitle}</p>
          </div>
        </div>
        {!submit ? (
          <>
          <form 
          className="flex flex-col items-center w-full"
          method="POST"
          name="newsletter-form"
          action="contact/?success=true"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={() => setSubmit(true)}
        >
          <Label className="w-full md:w-1/2" forvalue="mail" content="Your e-mailaddress" />
          <Input className="w-full bg-gray-200 md:w-1/2" type="mail" name="mail" placeholder="Your e-mailaddress" />
          <input 
            className="col-span-2 row-start-7 px-4 py-2 mt-4 transition-all duration-300 cursor-pointer bg-primary hover:bg-white hover:text-primary"
            type="submit" 
            value="Subscribe" 
          />
        </form>
          </>
        ) : (
          <p className="py-4 text-3xl text-center lowercase font-title">Thank you so much for subscribing to our newsletter!</p>
        )}
      </div>
    
      
    </article>

  )

}

export default Newsletter;