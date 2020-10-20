import React from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import Logo from "../../images/logo.svg";
import "./Nav.css";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navigation() {
  return (
    <>
      <div className="padding" />
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            alt=""
            src={Logo}
            width="30"
            height="30"
            className="d-inline-block"
          />{" "}
          <p className="cloud-text cloud-title d-inline-block">Techy</p>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link
              active={window.location.pathname === "/" ? true : false}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              active={window.location.pathname === "/quizes" ? true : false}
              href="/quizes"
            >
              Quizes
            </Nav.Link>
          </Nav>

          <Nav className="ml-auto">
          <Nav.Link
              active={window.location.pathname === "/login" ? true : false}
              href="/login"
            >
              <span title="حسابك"><FontAwesomeIcon icon={faUser} color="#6DB65B" size="2x" className="p-1"/></span>
            </Nav.Link>
          </Nav>

          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
