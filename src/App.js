import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./layouts/home";
import About from "./layouts/about";
import Blog from "./layouts/blog";
import Shop from "./layouts/shop";
import Contact from "./layouts/contact";
import BsNavbar from './components/navbar/Navbar';


const App = () => {
  return (
    <Router>

      <BsNavbar />
      
      <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route path="/about" element={ <About /> }/>
        <Route path="/blog" element={ <Blog /> }/>
        <Route path="/shop" element={ <Shop /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>

    </Router>
  );
}

export default App;   

 