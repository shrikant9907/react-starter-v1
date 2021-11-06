import React, { Component } from 'react';
import './Navbar.css';

import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

import { Link } from "react-router-dom";
import Image from "../images/Images";

class BsNavbar extends Component {

    constructor(props) {
      super(props);
      
      this.state = {
        logotype: this.props.logotype,
        logosrc: this.props.logosrc,
        logoalt: 'Company Site Logo'
      }

    }

    render(){ 

      let logo;
      if (this.state.logotype==='image') {
        logo = <Image src={this.state.logosrc} classes="logo-image img-fluid" alt={this.state.logoalt} />
      } else {
        logo = <div className="brand-name">{this.props.brandname}</div>
      }

      return(
        
            <>
                  <Navbar className={ this.props.classes } bg="light" expand="lg">
                    <Container>
                      <Navbar.Brand>
                        <Link className="text-dark text-decoration-none" to='/'>
                          { logo ? logo :  process.env.REACT_APP_NAME}
                        </Link>
                      </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
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

            </>
        );
    }
 }
 
 export default BsNavbar;
 