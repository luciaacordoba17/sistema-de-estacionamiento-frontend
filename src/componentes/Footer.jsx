import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function Footer() {
  return (
    <footer style={{ backgroundColor: '#121212', color: '#adb5bd' }} className="py-4 mt-auto border-top border-dark">
      <Container>
        <Row className="align-items-center justify-content-between g-4">
          
          {/* Desarrolladores */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <span
              className="text-warning text-uppercase fw-bold d-block mb-2"
              style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
            >
              Desarrollado por:
            </span>

            <div className="d-flex flex-column gap-1">
              {/* Ignacio Lazarte */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span className="fw-semibold small text-white">IGNACIO LAZARTE</span>
                <a
                  href="https://github.com/ignaciolazarte"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary text-decoration-none d-flex align-items-center gap-1"
                >
                  <i className="bi bi-github fs-6"></i>
                  <span className="small">GitHub</span>
                </a>
              </div>

              {/* Lucia Cordoba */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span className="fw-semibold small text-white">LUCIA CORDOBA</span>
                <a
                  href="https://github.com/luciaacordoba17"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary text-decoration-none d-flex align-items-center gap-1"
                >
                  <i className="bi bi-github fs-6"></i>
                  <span className="small">GitHub</span>
                </a>
              </div>
            </div>
          </Col>

          
          <Col xs={12} md={4} className="text-center">
            <div className="d-inline-block bg-black border border-secondary border-opacity-25 px-3 py-2 rounded-3">
              <div className="d-flex align-items-center gap-2">
                <span className="spinner-grow spinner-grow-sm text-warning" role="status"></span>
                <span className="small text-light fw-medium">Sistema Operativo</span>
                <Badge bg="warning" text="dark" className="ms-1" style={{ fontSize: '0.65rem' }}>ONLINE</Badge>
              </div>
            </div>
          </Col>

          
          <Col xs={12} md={4} className="text-center text-md-end">
            <p className="mb-1 text-white small fw-medium">
              Sistema de Estacionamiento &copy; {new Date().getFullYear()}
            </p>
            <span className="text-secondary small d-block">
              UTN - Facultad Regional Tucumán
            </span>
          </Col>

        </Row>
      </Container>
    </footer>
  );
}

export default Footer;