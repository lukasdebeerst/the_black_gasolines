import Navigation from "../containers/navigation";
import Links from '../containers/links';
import Playlists from '../components/playlists';
import Footer from "../containers/footer";

const Watch = () => {

  return (
    <div className="text-white bg-gray-600">
      <div className="container">
        <Links />
        <Navigation />
        <div className="pt-32">
          <Playlists />
          
        </div>
        <Footer />    
      </div>
    </div>
  )

}



export default Watch;