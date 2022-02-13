import Navigation from "../containers/navigation";
import Header from "../containers/header";
import Aboutus from '../containers/aboutus';
import Tourdates from '../containers/tourdates';
import Links from '../containers/links';
import Releases from '../containers/releases';
import Highlighted from "../components/playlists/highlighted";
import Footer from '../containers/footer';
import Newsletter from '../containers/newsletter';


const Home = () => {
  return (
    <div className="text-white bg-gray-600">
      <div className="container">
        <Links />
        <Navigation />
        <Header />
        <Aboutus />
        <Newsletter 
          title="Subscribe to our newsletter"  
          subtitle="Subscribe to our newsletter to keep up to date with gigs, releases and merch!"
        />
        <Releases />
        <Highlighted />
        <Tourdates />
        <Footer />
      </div>
    </div>
  )
}

export default Home;