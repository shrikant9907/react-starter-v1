import React from 'react'; 
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./layouts/home";
import About from "./layouts/about";
import Blog from "./layouts/blog";
import Shop from "./layouts/shop";
import Contact from "./layouts/contact";

import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <Router>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand><Link className="text-dark text-decoration-none" to='/'>{ process.env.REACT_APP_NAME }</Link></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link className="nav-link" to='/'>Home</Link>
              <Link className="nav-link" to='/about'>About</Link>
              <Link className="nav-link" to='/blog'>Blog</Link>
              <Link className="nav-link" to='/shop'>Shop</Link>
              <Link className="nav-link" to='/contact'>Contact Us</Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

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
