import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar fixed="top" className="header" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/" className="mx-5">
          <img
            alt=""
            src="./logo.png"
            width="200"
            height="45"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavLink
              to="/home"
              className="ms-5 text-white fw-bold hover text-decoration-none mt-1"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="ms-5 text-white fw-bold text-decoration-none mt-1 hover"
              activeClassName="active"
            >
              About Us
            </NavLink>
            <NavDropdown
              title="Tours"
              className="drop-text hover"
              activeClassName="active"
            >
              <NavDropdown.Item href="#action/3.1">
                Bangladesh Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                India Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Europe Packages
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Admin"
              className="drop-text hover"
              activeClassName="active"
            >
              <NavDropdown.Item href="#action/3.1">
                Manage Tour Packages
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Add Tour Package
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">
                Manage Orders
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="/special"
              className="ms-3 text-white fw-bold text-decoration-none mt-1 hover"
              activeClassName="active"
            >
              Special Packages
            </NavLink>
            <NavLink
              to="/contact"
              className="ms-3 text-white fw-bold text-decoration-none mt-1 hover"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
            {user.displayName && (
              <span className="ms-5 text-white fw-bold mt-1">
                Hello ! {user.displayName}
              </span>
            )}
            {user.displayName ? (
              <div className="my-auto">
                <button
                  className="text-decoration-none ms-3 logout-btn"
                  onClick={logOut}
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="my-auto">
                <NavLink
                  className="text-decoration-none me-3 header-top-btn"
                  style={{ marginLeft: "120px" }}
                  to="/login"
                >
                  Login
                </NavLink>
                <NavLink
                  className="text-decoration-none header-top-btn"
                  to="/register"
                >
                  Register
                </NavLink>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
