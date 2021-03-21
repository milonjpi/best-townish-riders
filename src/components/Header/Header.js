import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";

const Header = () => {
  const [loggedInUser] = useContext(UserContext);
  return (
    <div className="px-md-5 py-3">
      <Navbar expand="lg">
        <Navbar.Brand href="/">BEST TOWNISH RIDERS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto nav-align">
            <Link to="/home">Home</Link>
            <Link>Destination</Link>
            <Link>Blog</Link>
            <Link>Contact</Link>
            {
              loggedInUser.isLoggedIn ? <Link className="text-danger">{loggedInUser.displayName}</Link> : <Link className="btn btn-success text-white px-4" to="/login">Login</Link>
            }            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
