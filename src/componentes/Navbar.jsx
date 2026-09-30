import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function CustomNavbar() {
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand href="#inicio" className="fw-bold">
                        Sistema de Estacionamiento
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarEstacionamiento" aria-label="Mostrar navegación" />
                    <Navbar.Collapse id="navbarEstacionamiento">
                        <Nav className="ms-auto">
                            <Nav.Link href="#inicio">Panel de Control</Nav.Link>
                            <Nav.Link href="#control-acceso">Control de Acceso</Nav.Link>
                            <Nav.Link href="#espacios">Espacios y Sectores</Nav.Link>
                            <Nav.Link href="#abonados">Abonados</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
export default CustomNavbar;