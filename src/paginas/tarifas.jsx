import { useState } from 'react';
import { Container, Row, Col, Card, Table, Badge, Button, Form, Modal } from 'react-bootstrap';

const TARIFAS_INICIALES = [
  { id: 1, tipo: 'Auto', categoria: 'Por hora', valor: '$ 2.400', sector: 'General / Ocasional', estado: 'Vigente' },
  { id: 2, tipo: 'Moto', categoria: 'Por hora', valor: '$ 1.200', sector: 'General / Ocasional', estado: 'Vigente' },
  { id: 3, tipo: 'Camioneta', categoria: 'Por hora', valor: '$ 3.500', sector: 'General / Ocasional', estado: 'Vigente' },
  { id: 4, tipo: 'Estadía', categoria: 'Hasta 12 horas', valor: '$ 14.000', sector: 'General / Ocasional', estado: 'Vigente' },
  { id: 5, tipo: 'Abono Mensual', categoria: 'Mensual (Sector A)', valor: '$ 180.000', sector: 'Sector A (Techado)', estado: 'Vigente' },
];

const Tarifas = () => {
  const [tarifas, setTarifas] = useState(TARIFAS_INICIALES);
  const [abierto, setAbierto] = useState(false);
  const [idSeleccionado, setIdSeleccionado] = useState(null);
  const [textoPrecio, setTextoPrecio] = useState('');

  
  const prepararEdicion = (tarifa) => {
    setIdSeleccionado(tarifa.id);
    setTextoPrecio(tarifa.valor);
    setAbierto(true); 

  
  const guardarCambios = (e) => {
    e.preventDefault();
    
    
    const tarifasActualizadas = tarifas.map((tarifa) =>
      tarifa.id === idSeleccionado
        ? { ...tarifa, valor: textoPrecio }
        : tarifa,
    );
    
    setTarifas(tarifasActualizadas);
    setAbierto(false);
  };

  return (
    <Container className="py-4">
      <div className="mb-4">
        <h2 className="fw-bold text-dark m-0">Tarifas vigentes</h2>
        <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>
          Gestión de valores y costos por hora, estadías y abonos mensuales.
        </p>
      </div>

      <Row className="g-4">
        <Col xs={12} lg={8}>
          <Card className="border-0 shadow-sm rounded-4 p-4 bg-white mb-4">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h5 className="fw-bold text-dark m-0">Esquema de precios</h5>
              <span className="text-muted small">Actualizado al periodo actual</span>
            </div>

            <div className="table-responsive">
              <Table hover align="middle" className="mb-0 small">
                <thead className="table-light text-muted">
                  <tr>
                    <th>TIPO DE VEHÍCULO</th>
                    <th>CATEGORÍA</th>
                    <th>VALOR</th>
                    <th>SECTOR</th>
                    <th>ESTADO</th>
                    <th className="text-end">ACCIÓN</th>
                  </tr>
                </thead>
                <tbody>
                  {tarifas.map((t) => (
                    <tr key={t.id}>
                      <td className="fw-bold text-dark">{t.tipo}</td>
                      <td className="text-muted">{t.categoria}</td>
                      <td className="fw-bold text-primary">{t.valor}</td>
                      <td>{t.sector}</td>
                      <td>
                        <Badge bg="success" className="bg-opacity-10 text-success px-2 py-1">
                          {t.estado}
                        </Badge>
                      </td>
                      <td className="text-end">
                        <Button
                          variant="outline-primary"
                          size="sm"
                          className="rounded-3 py-1 px-2"
                          style={{ fontSize: '0.75rem' }}
                          onClick={() => prepararEdicion(t)}
                        >
                          Editar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>

        <Col xs={12} lg={4}>
          <Card className="border-0 shadow-sm rounded-4 p-4 bg-white h-100 d-flex flex-column justify-content-between">
            <div>
              <h5 className="fw-bold text-dark mb-3">Información general</h5>
              <p className="text-muted small mb-3">
                Las tarifas se aplican de manera automática según el tipo de ingreso registrado en barrera.
              </p>
              
              <div className="p-3 bg-light rounded-3 border mb-3">
                <span className="fw-bold text-dark d-block mb-1 small"><i className="bi bi-clock me-1 text-primary"></i> Tolerancia de salida</span>
                <span className="text-muted small">15 minutos libres posteriores al pago de la estadía o ticket por hora.</span>
              </div>

              <div className="p-3 bg-light rounded-3 border">
                <span className="fw-bold text-dark d-block mb-1 small"><i className="bi bi-shield-check me-1 text-success"></i> Abonados mensuales</span>
                <span className="text-muted small">Acceso preferencial asegurado en Planta Baja (Sector A) sin costo adicional por estadía.</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-top text-center text-muted small">
              <i className="bi bi-info-circle me-1"></i> Sistema tarifario operativo.
            </div>
          </Card>
        </Col>
      </Row>

      {/* Ventanita flotante para editar */}
      <Modal show={abierto} onHide={() => setAbierto(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-dark fs-5">Actualizar valor de tarifa</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={guardarCambios}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">Nuevo monto ($)</Form.Label>
              <Form.Control
                type="text"
                value={textoPrecio}
                onChange={(e) => setTextoPrecio(e.target.value)}
                required
                className="rounded-3"
                autoFocus
              />
            </Form.Group>
            <div className="d-flex justify-content-end gap-2">
              <Button variant="secondary" size="sm" onClick={() => setAbierto(false)} className="rounded-3">
                Cancelar
              </Button>
              <Button variant="primary" size="sm" type="submit" className="rounded-3 fw-semibold">
                Guardar cambios
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
}
export default Tarifas; 