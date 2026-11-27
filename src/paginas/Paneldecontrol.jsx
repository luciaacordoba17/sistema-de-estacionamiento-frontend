import { Container, Row, Col, Card, Table, Badge } from 'react-bootstrap';

const PanelControl = ({ vehiculos = [] }) => {
  const vehiculosEstacionados = vehiculos.filter((vehiculo) => vehiculo.estado === 'Estacionado');
  const plazasOcupadas = 8 + vehiculosEstacionados.length;
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
                <th>PATENTE</th>
                <th>TIPO / CONDICIÓN</th>
                <th>SECTOR</th>
                <th>HORA DE INGRESO</th>
              </tr>
            </thead>
            <tbody>
              {vehiculosEstacionados.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center text-muted py-4">
                    No hay vehículos ingresados.
                  </td>
                </tr>
              ) : vehiculosEstacionados.map((vehiculo) => (
                <tr key={vehiculo.id}>
                  <td className="fw-bold text-dark">{vehiculo.patente}</td>
                  <td>
                    {vehiculo.tipo}{' '}
                    <Badge bg={vehiculo.condicion === 'Abonado' ? 'primary' : 'secondary'}>
                      {vehiculo.condicion}
                    </Badge>
                  </td>
                  <td>{vehiculo.sector}</td>
                  <td className="text-success fw-semibold">{vehiculo.horaIngreso}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Container>
  );
};

export default PanelControl;