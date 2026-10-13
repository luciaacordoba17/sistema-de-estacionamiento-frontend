import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";

function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5 border-top border-secondary">
      <Container>
        <Row className="align-items-center justify-content-between g-4">
          
          {/* Columna 1: Desarrolladores y Links de GitHub */}
          <Col xs={12} md={4} className="text-center text-md-start">
            <span
              className="text-secondary text-uppercase fw-bold d-block mb-2"
              style={{ fontSize: "0.75rem", letterSpacing: "1px" }}
            >
              Desarrollado por:
            </span>

            <div className="d-flex flex-column gap-1">
              {/* Ignacio Lazarte */}
              <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2">
                <span className="fw-semibold small text-light">IGNACIO LAZARTE</span>
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
                <span className="fw-semibold small text-light">LUCIA CORDOBA</span>
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

          {/* Columna 2: Estado del sistema (Detalle clave para defensa) */}
          <Col xs={12} md={4} className="text-center">
            <div className="d-inline-block bg-secondary bg-opacity-10 border border-secondary border-opacity-25 px-3 py-2 rounded-3">
              <div className="d-flex align-items-center gap-2">
                <span className="spinner-grow spinner-grow-sm text-success" role="status"></span>
                <span className="small text-light fw-medium">Sistema Operativo</span>
                <Badge bg="success" className="ms-1" style={{ fontSize: '0.65rem' }}>ONLINE</Badge>
              </div>
            </div>
          </Col>

          {/* Columna 3: Copyright e Institución */}
          <Col xs={12} md={4} className="text-center text-md-end">
            <p className="mb-1 text-light small fw-medium">
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