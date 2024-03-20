import React from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { MdHome } from "react-icons/md";
import "./Header.scss";
import { RiLock2Fill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import UserInfo from "./UserInfo";

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" />
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
        </Form>

        <Nav className="me-auto">
          <Link to="/" className="nav-link">
            <MdHome style={{ fontSize: "22px" }} />
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About us
          </Link>
          <Link to="/products" className="nav-link">
            products
          </Link>
          <Nav.Link href="#link">New & Events</Nav.Link>
        </Nav>

        <Nav>
          <Link to="/login2" className="nav-link">
            <RiLock2Fill />
            Login
          </Link>
          <Nav.Link href="#link">
            <FaUser />
            Register
          </Nav.Link>
        </Nav>
      </Container>
      <UserInfo />
    </Navbar>
  );
}

export default Header;
