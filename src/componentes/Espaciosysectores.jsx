import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

const EspaciosSectores = () => {
  return (
    <section id="espacios" className="container py-5">
      <Card className="shadow-sm border-0 rounded-4 p-4 p-md-5">
        <Card.Body className="text-center p-0 mb-4">
          <Card.Title className="mb-2 fw-bold text-primary display-6">
            Espacios y Sectores
          </Card.Title>
          <Card.Text className="text-muted fs-5">
            Gestión de los espacios disponibles y los sectores del estacionamiento.
          </Card.Text>
        </Card.Body>

        <Row className="g-4">
          <Col xs={12} lg={6}>
            <div className="p-4 border rounded-4 bg-light h-100">
              <h5 className="text-primary fw-bold mb-3">Sectores</h5>
              <Row className="g-3">
                <Col xs={12} sm={6}>
                  <div className="bg-white p-3 rounded-3 text-center shadow-sm border">
                    <span className="text-primary fs-3 mb-1 d-block">
                      <i className="bi bi-p-square"></i>
                    </span>
                    <span className="fw-semibold d-block text-dark">Sector A</span>
                    <Badge bg="success" className="mt-2 px-3 py-1">Disponible</Badge>
                  </div>
                </Col>
                <Col xs={12} sm={6}>
                  <div className="bg-white p-3 rounded-3 text-center shadow-sm border">
                    <span className="text-primary fs-3 mb-1 d-block">
                      <i className="bi bi-p-square"></i>
                    </span>
                    <span className="fw-semibold d-block text-dark">Sector B</span>
                    <Badge bg="success" className="mt-2 px-3 py-1">Disponible</Badge>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="p-4 border rounded-4 bg-light h-100 d-flex flex-column justify-content-between">
              <h5 className="text-primary fw-bold mb-3">Espacios disponibles</h5>
              <>
                <div className="bg-white p-3 rounded-3 shadow-sm border d-flex align-items-center justify-content-between mb-3">
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-primary fs-4"><i className="bi bi-car-front-fill"></i></span>
                    <span className="fw-semibold text-dark">Espacios ocupados</span>
                  </div>
                  <span className="badge bg-danger fs-6 px-3 py-2">0</span>
                </div>
                <div className="bg-white p-3 rounded-3 shadow-sm border d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-3">
                    <span className="text-primary fs-4"><i className="bi bi-p-square-fill"></i></span>
                    <span className="fw-semibold text-dark">Espacios disponibles</span>
                  </div>
                  <span className="badge bg-success fs-6 px-3 py-2">50</span>
                </div>
              </>
            </div>
          </Col>
        </Row>
      </Card>
    </section>
  );
};

export default EspaciosSectores;