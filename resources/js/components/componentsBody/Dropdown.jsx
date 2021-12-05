import React from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import imagenes from '../../../img/images';

const style= {
  backgroundColor: "#fff",
  border: "0px",
  color:"fff",
}

const dropdown =()=>{
  return (
    <Navbar className="drop-down-menu" collapseOnSelect expand="lg" bg="dark" variant="dark" >
        <img class="header-logo" width="150px" height="150px"  src={imagenes.logo}></img>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="header-menu"/>
      <Navbar.Collapse id="responsive-navbar-nav" >
        <Nav className="mr-auto header-menu" id="items" >
          <Nav.Link href="#features" className="menu-item" >Home</Nav.Link>
          <Nav.Link href="#pricing" className="menu-item" >Shop</Nav.Link>
          <Nav.Link href="#deets" className="menu-item" >Calendar</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default dropdown
