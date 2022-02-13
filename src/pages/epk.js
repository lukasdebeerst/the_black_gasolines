import styles from '../styles/Home.module.css'

import Navigation from "../containers/navigation";
import Header from "../containers/header";
import Aboutus from '../containers/aboutus';
import Tourdates from '../containers/tourdates';
import Links from '../containers/links';
import Releases from '../containers/releases';
import AboutUsHeader from '../containers/aboutus-header';
import TextImage from '../containers/textImage';
import Timeline from '../containers/highlights';
import Quotes from '../containers/Quotes';
import Footer from '../containers/footer';


const EPK = () => {

  return (
    <div className="text-white bg-gray-600">
      <div className="container">
        <Links />
        <Navigation />
        <article className="grid items-center grid-cols-1 pt-40 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <p className="lowercase font-title text-secundary">The Black Gasolines</p>
            <h2 className="mb-8 text-3xl lowercase font-title">Electronic press Kit</h2>
            <p className="mb-8">We are The Black Gasolines, a theatrical rock band founded by Lukas Debeerst and Bradley Remorie in 2016. After our debut EP “Dopamine Rush” in 2018, we’ve changed our drummer to Justin Bruggeman and went on a quest to play as much as possible. We played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London and released 2 singles “Long Way Suicide” and “Kangaroo Days”. </p>
            <p className="py-4 text-xl lowercase font-title">All Data is free to use with mentioning</p>
          </div>
          <div className="md:col-start-8 md:col-span-4">
            <img alt="about us" src="/images/aboutus.png" width="364" height="528" />
          </div>
        </article>
        <Aboutus />
        <Releases />
        <Tourdates />
        <Footer />
      </div>
    </div>
  );

}

export default EPK;