import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function CustomNavbar() {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/" className="fw-bold">
            Sistema de Estacionamiento
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarEstacionamiento"
            aria-label="Mostrar navegación"
          />
          <Navbar.Collapse id="navbarEstacionamiento">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Inicio
              </Nav.Link>
              <Nav.Link as={Link} to="/panel">
                Panel de Control
              </Nav.Link>
              <Nav.Link as={Link} to="/acceso">
                Control de Acceso
              </Nav.Link>
              <Nav.Link as={Link} to="/espacios">
                Espacios y Sectores
              </Nav.Link>
              <Nav.Link as={Link} to="/abonados">
                Abonados
              </Nav.Link>
              <Nav.Link as={Link} to="/tarifas">
                Tarifas
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
export default CustomNavbar;
