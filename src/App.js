import {
  Routes,
  Route
} from "react-router-dom";


import Home from "./pages/home";
import Aboutus from "./pages/about-us";
import Contact from "./pages/contact";
import Tourdates from "./pages/tourdates";
import Watch from "./pages/watch";

function App() {
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route path="/watch" element={<Watch />} />
      <Route path="/about-us" element={<Aboutus />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/tourdates" element={<Tourdates />} />
    </Routes>
  );
}

export default App;
