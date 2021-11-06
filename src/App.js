import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./layouts/home";
import About from "./layouts/about";
import Blog from "./layouts/blog";
import Shop from "./layouts/shop";
import Contact from "./layouts/contact";



const App = () => {
  return (
    <Router>
      <nav className="navui1">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/blog'>Blog</Link></li>
          <li><Link to='/shop'>Shop</Link></li>
          <li><Link to='/contact'>Contact Us</Link></li>
        </ul>
      </nav>

      <div className="pagewr">
        <Routes>
          <Route exact path="/" component={ Home } />
          <Route path="/about" component={ About }/>
          <Route path="/blog" component={ Blog }/>
          <Route path="/shop" component={ Shop }/>
          <Route path="/contact" component={ Contact }/>
        </Routes>
      </div>

    </Router>
  );
}

export default App;   
