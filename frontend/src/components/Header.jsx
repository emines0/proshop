import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../assets/logo.png';

/**
 * Renders the header component with a navigation bar.
 * @returns {JSX.Element} The rendered header component.
 */
const Header = () => {
  return (
    <header>
      <Navbar
        bg="dark"
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        <Container>
          {/* Navbar.Brand is the brand/logo of the navigation bar */}
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src={logo}
                alt="proshop"
              />
              ProShop
            </Navbar.Brand>
          </LinkContainer>
          {/* Navbar.Toggle is the hamburger menu button */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* Navbar.Collapse is the collapsible content of the navigation bar */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Navbar.Text is the text in the navigation bar */}
            {/* The "ms-auto" class is a Bootstrap class that stands for "margin start auto". It is used to align the Nav component to the right side of its container */}
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/login">
                <Nav.Link>
                  <FaUser /> Sign In
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
