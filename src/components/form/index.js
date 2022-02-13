import Input from "./input";
import Label from "./label";
import {useState} from "react";

const Form = () => {

  const [submit, setSubmit] = useState(false)

  return (
    <>
    {!submit ? (
    <form
      className="grid grid-cols-1 md:grid-cols-12"
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={() => setSubmit(true)}
    >
      <p hidden>
        <label>
          Dont fill this out: <input name="bot-field" />
        </label>
      </p>
      <input type="hidden" name="form-name" value="contact-form" />
      <Label className="col-span-5 mb-2" forValue="fname" content="Your name" />
      <Input className="col-span-8 mb-4" type="text" id="fname" name="full name" placeholder="Your name" />
      <Label className="col-span-5 mb-2" forValue="mail" content="Your e-mailaddress" />
      <Input className="col-span-8 mb-4" type="mail" id="mail" name="email" placeholder="Your e-mailaddress" />   
      <Label className="col-span-5 mb-2" forValue="message" content="Your message" />
      <textarea 
        className="col-span-8 p-2 mb-4 text-white bg-gray-700 outline-0"
        id="message" 
        name="message" 
        placeholder="Write something"
        rows="8"
      >
      </textarea> 
        <input 
          className="col-span-2 row-start-7 px-4 py-2 transition-all duration-300 cursor-pointer bg-primary hover:bg-white hover:text-primary "
          type="submit" 
          value="Submit" 
        />
      
    </form>   
    ) : (
      <p className="py-4 text-3xl text-center lowercase font-title">Thank you for contacting us. We will get back to you as soon as possible.</p>
    )}
    
    
    </>
      
  )


}

export default Form;