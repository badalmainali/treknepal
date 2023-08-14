import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaFacebook, FaInstagram } from 'react-icons/fa'; // Import Font Awesome icons if needed
import './Navbar.css'; // Create a CSS file for styling
import logo from '../../logo.png'

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
      <div className="brand-wrapper">
      <img src={logo} alt="Logo" className="logo" />
          <div className="brand-text">
          
            <div className="brand-line1">Trip Nepal Trek &</div>
            <div className="brand-line2">Expedition</div>
          </div>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/tours">Tours</Nav.Link>
            <Nav.Link href="/about">About Us</Nav.Link>
            <Nav.Link href="/contact">Contact Us</Nav.Link>
          </Nav>
          <Nav className="social-icons">
            <Nav.Link href="https://www.facebook.com">
              <FaFacebook className="icon" />
            </Nav.Link>
            <Nav.Link href="https://www.instagram.com">
              <FaInstagram className="icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
