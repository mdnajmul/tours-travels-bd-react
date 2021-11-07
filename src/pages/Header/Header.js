import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
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
              className="ms-3 text-white fw-bold hover text-decoration-none mt-2"
              activeClassName="active"
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className="ms-3 text-white fw-bold text-decoration-none mt-2 hover"
              activeClassName="active"
            >
              About Us
            </NavLink>
            <NavDropdown
              title="Tours"
              className="ms-3 hover"
              activeClassName="active"
            >
              <NavDropdown.Item>
                <Nav.Link
                  as={HashLink}
                  to="/#bangladesh"
                  className="text-secondary fw-bold text-decoration-none hover"
                  activeClassName="active"
                >
                  Bangladesh Packages
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={HashLink}
                  to="/#india"
                  className="text-secondary fw-bold text-decoration-none hover"
                  activeClassName="active"
                >
                  India Packages
                </Nav.Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Nav.Link
                  as={HashLink}
                  to="/#europe"
                  className="text-secondary fw-bold text-decoration-none hover"
                  activeClassName="active"
                >
                  Europe Packages
                </Nav.Link>
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Admin"
              className="ms-3 hover"
              activeClassName="active"
            >
              <NavDropdown.Item>
                <NavLink
                  to="/managetour"
                  className="text-secondary fw-bold text-decoration-none hover"
                  activeClassName="active"
                >
                  Manage Tour Packages
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="/addtour"
                  className="text-secondary fw-bold text-decoration-none hover"
                  activeClassName="active"
                >
                  Add Tour Package
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <NavLink
                  to="/manageorders"
                  className="text-secondary fw-bold text-decoration-none hover"
                  activeClassName="active"
                >
                  Manage Orders
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
            <NavLink
              to="/special"
              className="ms-3 text-white fw-bold text-decoration-none mt-2 hover"
              activeClassName="active"
            >
              Special Packages
            </NavLink>
            <NavLink
              to="/contact"
              className="ms-3 text-white fw-bold text-decoration-none mt-2 hover"
              activeClassName="active"
            >
              Contact Us
            </NavLink>
            {user.displayName && (
              <NavLink
                to="/myorders"
                className="ms-3 text-white fw-bold text-decoration-none mt-2 hover"
                activeClassName="active"
              >
                My Orders
              </NavLink>
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
              <div className="mt-2">
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
