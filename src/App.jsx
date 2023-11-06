import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home, Speakers, Earphones, Headphones, Cart, ErrorPage} from './Pages/index';
import NavigationBar from "./Components/NavigationBar";

import LocomotiveScroll from "locomotive-scroll";

function App() {
  const locomotiveScroll = new LocomotiveScroll(); // Smooth scrolling effect

  return (
    <Router>
      <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/headphones" element={<Headphones/>}/>
        <Route path="/speakers" element={<Speakers/>}/>
        <Route path="/earphones" element={<Earphones/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
