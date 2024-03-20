import React, { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";

function Header() {
  const [state, setState] = useState({ isLogOut: false });
  const handleLogOut = () => {
    sessionStorage.clear();
    setState({ isLogOut: true });
  };
  if (state.isLogOut) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <Navbar expand="lg" bg="success" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#wtf">Contact</Nav.Link>
          </Nav>
          {(null !== sessionStorage.getItem("username")) &
          ("" !== sessionStorage.getItem("username")) ? (
            <Nav>
              <Navbar.Text>
                Hi:{" "}
                <a href="#user" style={{ textDecoration: "none" }}>
                  {sessionStorage.getItem("username")}
                </a>
              </Navbar.Text>
              <Nav.Link href="#link" onClick={() => handleLogOut()}>
                logout
              </Nav.Link>
            </Nav>
          ) : (
            <Nav>
              <Link to="/login">Login</Link>
              {"/ "}
              <Link to="/register">Register</Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
