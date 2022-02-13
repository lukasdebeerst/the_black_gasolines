import Navigation from "../containers/navigation";
import Links from '../containers/links';
import Form from "../components/form";
import Footer from "../containers/footer";

const Contact = () => {


  return (
    <div className="text-white bg-gray-600">
      <div className="container">
        <Links />
        <Navigation />
        <article className="flex items-center min-h-screen pb-8 pt-28">
          <div className="w-full py-28">
            <div className="pb-8">
              <p className="lowercase font-title text-secundary">Contact Us</p>
              <h2 className="text-3xl lowercase font-title">Get in touch</h2>
              <p>Please contact us via the contactform or mail to <a className="text-secundary" href="mailto:info@theblackgasolines.com">info@theblackgasolines.com</a></p>
            </div>
            <div className="">
              <Form />
            </div>
          </div>
          
        </article>
        <Footer />
      </div>
    </div>
  )

}

export default Contact;