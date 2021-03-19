import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="px-md-5 py-3">
      <Navbar expand="lg">
        <Navbar.Brand href="#home">BEST TOWNISH RIDERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Destination</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
          </Nav>
          <Link to="/login"><Button variant="success"> Login</Button></Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
