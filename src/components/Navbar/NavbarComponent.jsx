import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavbarComponent.css';
import img from '../../assets/images/logo.png';

export const NavbarComponent = () => {
  return (
    <Navbar expand="lg" className="navbar navbar-blur fixed-top navbar-dark ">
      <Container>
        <Navbar.Brand href="/">
          <img src={img} width={80} alt="logo" /> SALE FULBACHO
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav d-flex justify-content-start">
          <Nav className="ml-auto seccion-links">
            <Nav.Link href="/">Inicio</Nav.Link>
            <Nav.Link href="/about">Nosotros</Nav.Link>
            <Nav.Link href="/galeria">Galería</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
