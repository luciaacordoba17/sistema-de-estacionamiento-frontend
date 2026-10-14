import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';

const PanelControl = () => {
  const [plazasOcupadas] = useState(8);
  const capacidadTotal = 50;
  const plazasDisponibles = capacidadTotal - plazasOcupadas;
  const porcentajeOcupacion = Math.round((plazasOcupadas / capacidadTotal) * 100);

  return (
    <Container className="py-4">
      {/* Encabezado */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark m-0">Panel de Control</h2>
        <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>
          Vista general de la operación y estado actual de la playa.
        </p>
      </div>

      <Row className="g-3 mb-4">
        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 p-3 h-100 bg-white">
            <Card.Body className="p-0">
              <span className="text-muted small">Ocupación actual</span>
              <h3 className="fw-bold text-dark my-1">{plazasOcupadas} / {capacidadTotal}</h3>
              <span className="text-primary small fw-semibold">{porcentajeOcupacion}% de la capacidad</span>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 p-3 h-100 bg-white">
            <Card.Body className="p-0">
              <span className="text-muted small">Espacios disponibles</span>
              <h3 className="fw-bold text-dark my-1">{plazasDisponibles}</h3>
              <span className="text-muted small">Libres en playa</span>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 p-3 h-100 bg-white">
            <Card.Body className="p-0">
              <span className="text-muted small">Abonos activos</span>
              <h3 className="fw-bold text-dark my-1">8</h3>
              <span className="text-success small fw-semibold">Ubicados en Planta Baja</span>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} sm={6} lg={3}>
          <Card className="border-0 shadow-sm rounded-4 p-3 h-100 bg-white">
            <Card.Body className="p-0">
              <span className="text-muted small">Estado del sistema</span>
              <h3 className="fw-bold text-success my-1">En línea</h3>
              <span className="text-success small fw-semibold">Sincronizado con JSON</span>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Tabla de Control de Accesos */}
      <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
        <h5 className="fw-bold text-dark mb-3">Control de accesos activos</h5>
        <div className="table-responsive">
          <Table hover align="middle" className="mb-0 small">
            <thead className="table-light text-muted">
              <tr>
                <th>SECTOR</th>
                <th>DESCRIPCIÓN</th>
                <th>CANTIDAD</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="fw-bold text-dark">Sector A (Planta Baja - Techado)</td>
                <td>
                  <Badge bg="secondary" className="bg-opacity-10 text-dark fw-semibold px-2 py-1">
                    Disponible general (Abonados ubicados aquí)
                  </Badge>
                </td>
                <td className="fw-bold text-primary">8 ocupados</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card>
    </Container>
  );
};

export default PanelControl;