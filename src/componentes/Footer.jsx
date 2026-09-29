import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <footer className="bg-dark text-white py-4 mt-5 border-top border-secondary">
            <Container>
                <Row className="align-items-center justify-content-between g-3">
                    
                    <Col xs={12} md={6} className="text-center text-md-start">
                        <p className="mb-2 text-light small">&copy; 2026 Sistema de Estacionamiento. Todos los derechos reservados.</p>
                        <span className="text-secondary text-uppercase fw-bold d-block mb-1" style={{ fontSize: '0.75rem', letterSpacing: '1px' }}>
                            Desarrollado por:
                        </span>
                        
                        {/* Ignacio Lazarte */}
                        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2 mb-2">
                            <span className="fw-semibold small">IGNACIO LAZARTE</span>
                            <a href="https://github.com/ignaciolazarte" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none d-flex align-items-center gap-1">
                                <i className="bi bi-github fs-6"></i> <span className="small">GitHub</span>
                            </a>
                        </div>

                        {/* Lucia Cordoba */}
                        <div className="d-flex flex-column flex-md-row align-items-center align-items-md-start gap-2">
                            <span className="fw-semibold small">LUCIA CORDOBA</span>
                            <a href="https://github.com/luciaacordoba17" target="_blank" rel="noreferrer" className="text-secondary text-decoration-none d-flex align-items-center gap-1">
                                <i className="bi bi-github fs-6"></i> <span className="small">GitHub</span>
                            </a>
                        </div>
                    </Col>

                </Row>
            </Container>
        </footer>
    );
}

export default Footer;