import { Container, Row, Col, Card, Badge, ProgressBar } from 'react-bootstrap';

const EspaciosSectores = ({ vehiculos = [] }) => {
  const vehiculosEstacionados = vehiculos.filter((vehiculo) => vehiculo.estado === 'Estacionado');
  const vehiculosPlantaBaja = vehiculosEstacionados.filter((vehiculo) =>
    vehiculo.sector && vehiculo.sector.startsWith('Planta Baja')
  );
  const vehiculosPlantaAlta = vehiculosEstacionados.filter((vehiculo) =>
    vehiculo.sector && vehiculo.sector.startsWith('Planta Alta')
  );

  const plantaBaja = {
    nombre: 'Sector A (Planta Baja - Techado)',
    total: 25,
    ocupados: 8 + vehiculosPlantaBaja.length,
    tipo: 'General / Abonados'
  };

  const plantaAlta = {
    nombre: 'Sector B (Planta Alta - Ocasional)',
    total: 25,
    ocupados: vehiculosPlantaAlta.length,
    tipo: 'General por Hora'
  };

  const totalOcupados = plantaBaja.ocupados + plantaAlta.ocupados;
  const capacidadTotal = plantaBaja.total + plantaAlta.total;
  const porcentajeTotal = Math.min(100, Math.round((totalOcupados / capacidadTotal) * 100));

  const porcentajePB = Math.round((plantaBaja.ocupados / plantaBaja.total) * 100);
  const porcentajePA = Math.round((plantaAlta.ocupados / plantaAlta.total) * 100);

  return (
    <Container className="py-4">
      <div className="mb-4">
        <h2 className="fw-bold text-dark m-0">Gestión de Sectores y Espacios</h2>
        <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>
          Monitoreo de ocupación en tiempo real por niveles y sectores de la playa.
        </p>
      </div>

      {/* Tarjeta de Resumen General */}
      <Card className="border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-bold text-dark m-0">Ocupación global de la playa</h5>
          <span className="fw-bold text-primary">{totalOcupados} / {capacidadTotal} espacios</span>
        </div>
        <ProgressBar 
          now={porcentajeTotal} 
          label={`${porcentajeTotal}%`} 
          className="rounded-pill" 
          style={{ height: '20px', fontSize: '0.85rem', fontWeight: 'bold' }} 
        />
      </Card>

      {/* Detalle por Sectores */}
      <Row className="g-4">
        {/* Planta Baja */}
        <Col xs={12} lg={6}>
          <Card className="border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="fw-bold text-dark mb-1">{plantaBaja.nombre}</h5>
                <Badge bg="primary" className="bg-opacity-10 text-primary fw-semibold px-2 py-1">
                  {plantaBaja.tipo}
                </Badge>
              </div>
              <span className="fw-bold text-dark fs-5">{plantaBaja.ocupados} / {plantaBaja.total}</span>
            </div>

            <p className="text-muted small mb-3">
              Sector cubierto en planta baja. Incluye 8 espacios asignados a abonados y los vehículos ingresados en este sector.
            </p>

            <div className="mb-3">
              <div className="d-flex justify-content-between small text-muted mb-1">
                <span>Ocupación del sector</span>
                <span>{porcentajePB}%</span>
              </div>
              <ProgressBar now={porcentajePB} variant="primary" className="rounded-pill" style={{ height: '10px' }} />
            </div>

            <div className="p-3 bg-light rounded-3 border mt-auto">
              <span className="fw-bold text-dark d-block mb-1 small">
                <i className="bi bi-info-circle me-1 text-primary"></i> Estado actual
              </span>
              <span className="text-muted small">
                8 espacios asignados a abonados y{' '}
                {vehiculosPlantaBaja.length === 1
                  ? '1 vehículo ingresado'
                  : `${vehiculosPlantaBaja.length} vehículos ingresados`}. Restan {plantaBaja.total - plantaBaja.ocupados} libres.
              </span>
            </div>
          </Card>
        </Col>

        {/* Planta Alta */}
        <Col xs={12} lg={6}>
          <Card className="border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="fw-bold text-dark mb-1">{plantaAlta.nombre}</h5>
                <Badge bg="success" className="bg-opacity-10 text-success fw-semibold px-2 py-1">
                  {plantaAlta.tipo}
                </Badge>
              </div>
              <span className="fw-bold text-dark fs-5">{plantaAlta.ocupados} / {plantaAlta.total}</span>
            </div>

            <p className="text-muted small mb-3">
              Sector superior destinado a estadías temporales, tarifas por hora y rotación general de vehículos.
            </p>

            <div className="mb-3">
              <div className="d-flex justify-content-between small text-muted mb-1">
                <span>Ocupación del sector</span>
                <span>{porcentajePA}%</span>
              </div>
              <ProgressBar now={porcentajePA} variant="success" className="rounded-pill" style={{ height: '10px' }} />
            </div>

            <div className="p-3 bg-light rounded-3 border mt-auto">
              <span className="fw-bold text-dark d-block mb-1 small">
                <i className="bi bi-info-circle me-1 text-success"></i> Estado actual
              </span>
              <span className="text-muted small">
                {vehiculosPlantaAlta.length === 0
                  ? 'Sin vehículos ingresados.'
                  : vehiculosPlantaAlta.length === 1
                    ? '1 vehículo ingresado.'
                    : `${vehiculosPlantaAlta.length} vehículos ingresados.`}{' '}
                Restan {plantaAlta.total - plantaAlta.ocupados} espacios libres.
              </span>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default EspaciosSectores;