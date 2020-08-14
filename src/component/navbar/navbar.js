import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-scroll";
import "./navbar.css";

class NavbarPage extends Component {
  render() {
    return (
      <Navbar fixed="top" expand="lg" className="navbar">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" className="NavItems">
              Home
            </Nav.Link>

            <Nav.Link href="/" className="NavItems">
              <Link
                activeClass="active"
                to="cards"
                spy={true}
                smooth={true}
                offset={50}
                duration={1200}
                onSetActive={this.handleSetActive}
              >
                {" "}
                Gallery
              </Link>
            </Nav.Link>
            <Nav.Link href="/About" className="NavItems">
              About
            </Nav.Link>
          </Nav>
          <Navbar.Brand href="/" className="titleNav">
            Tourism
          </Navbar.Brand>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavbarPage;
