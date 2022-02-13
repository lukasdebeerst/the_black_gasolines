
import Navigation from "../containers/navigation";
import Links from '../containers/links';
import AboutUsHeader from '../containers/aboutus-header';
import TextImage from '../containers/textImage';
import Timeline from '../containers/highlights';
import Members from "../components/members";
import Story from '../containers/story';
import Footer from '../containers/footer';
import Quotes from '../components/quotes';

export default function AboutUs() {
  return (
    <div className="text-white bg-gray-600">
      <div className="container">
        <Links />
        <Navigation />
        <AboutUsHeader />
        <TextImage 
          subtitle="About us"
          title="Biography"
          image="/images/aboutus.png"
          content=" The Black Gasolines is a belgian theatrical/art rock band founded by Lukas Debeerst and Bradley Remorie in 2016. 
          After their debut EP “Dopamine Rush” in 2018, they changed their drummer to Justin Bruggeman and went on a quest to play as much as possible. They played more than 45 concerts each year with stops in Ghent, Antwerp, Amsterdam and London. they released 2 singles,  “Long Way Suicide” (2019)  and “Kangaroo Days” (2020).     
          With the introduction of Matthias Depraetere as the new piano player, they released their first album ‘It Took a Lifetime’ at the beginning of october 2021.
          "
          />
        <Timeline />
        <Quotes />
        <Story />
        <Members />
        <Footer />
      </div>
    </div>
  );
}