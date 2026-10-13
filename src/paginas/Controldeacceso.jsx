import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Badge, Table, Tabs, Tab } from 'react-bootstrap';
import Swal from 'sweetalert2';

const TARIFAS_POR_HORA = {
  Auto: 2400,
  Moto: 1200,
  Camioneta: 3500,
};

function obtenerTarifaPorHora(tipoVehiculo) {
  const tarifasGuardadas = localStorage.getItem('tarifasEstacionamiento');
  if (!tarifasGuardadas) return TARIFAS_POR_HORA[tipoVehiculo];

  const tarifa = JSON.parse(tarifasGuardadas).find(
    (item) => item.tipo === tipoVehiculo,
  );
  if (!tarifa) return TARIFAS_POR_HORA[tipoVehiculo];

  const valor = Number(
    String(tarifa.valor)
      .replace(/\$/g, '')
      .replace(/\s/g, '')
      .replace(/\./g, '')
      .replace(',', '.'),
  );
  return Number.isFinite(valor) ? valor : TARIFAS_POR_HORA[tipoVehiculo];
}

function obtenerHoraActual() {
  return new Date().toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

const ControlAcceso = () => {
  const [patenteIngreso, setPatenteIngreso] = useState('');
  const [tipoVehiculo, setTipoVehiculo] = useState('Auto');
  const [condicionVehiculo, setCondicionVehiculo] = useState('Ocasional'); // Ocasional o Abonado
  const [sectorDestino, setSectorDestino] = useState('Planta Alta (Sector B - General)');
  const [horaIngresoManual, setHoraIngresoManual] = useState(obtenerHoraActual);
  
  const [vehiculos, setVehiculos] = useState([]);
  const [patenteEgreso, setPatenteEgreso] = useState('');
  const [horaEgresoManual, setHoraEgresoManual] = useState('10:00');

  const convertirAMinutos = (horaStr) => {
    if (!horaStr) return 0;
    const normalizada = horaStr.toString().trim().replace('.', ':');
    const partes = normalizada.split(':');
    const horas = parseInt(partes[0], 10) || 0;
    const minutos = parseInt(partes[1], 10) || 0;
    return horas * 60 + minutos;
  };

  const registrarIngreso = (e) => {
    e.preventDefault();
    if (!patenteIngreso) return;

    const horaLimpia = horaIngresoManual.replace('.', ':');
    const minIngreso = convertirAMinutos(horaLimpia);

    const nuevoVehiculo = {
      id: Date.now(),
      patente: patenteIngreso.toUpperCase(),
      tipo: tipoVehiculo,
      condicion: condicionVehiculo,
      sector: sectorDestino,
      horaIngreso: horaLimpia,
      minutosIngreso: minIngreso,
      horaEgreso: '-',
      tarifa: '-',
      estado: 'Estacionado',
    };

    setVehiculos([nuevoVehiculo, ...vehiculos]);
    setPatenteIngreso('');

    Swal.fire({
      title: '¡Ingreso registrado!',
      text: `Vehículo ${nuevoVehiculo.patente} (${tipoVehiculo} - ${condicionVehiculo}) registrado a las ${horaLimpia}.`,
      icon: 'success',
      timer: 1500,
      showConfirmButton: false,
    });
  };

  const registrarEgreso = (e) => {
    e.preventDefault();
    if (!patenteEgreso) return;

    const patenteBuscada = patenteEgreso.toUpperCase();
    const vehiculoEncontrado = vehiculos.find(v => v.patente === patenteBuscada && v.estado === 'Estacionado');

    if (!vehiculoEncontrado) {
      Swal.fire({
        title: 'Error',
        text: `No se encontró un vehículo activo con la patente ${patenteBuscada}.`,
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const horaSalidaLimpia = horaEgresoManual.replace('.', ':');
    const minIngreso = vehiculoEncontrado.minutosIngreso;
    const minEgreso = convertirAMinutos(horaSalidaLimpia);

    if (minEgreso <= minIngreso) {
      Swal.fire({
        title: 'Error de horario',
        text: 'La hora de egreso no puede ser menor o igual a la hora de ingreso.',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const diferenciaMinutos = minEgreso - minIngreso;
    const horasTotales = Math.floor(diferenciaMinutos / 60);
    const minutosRestantes = diferenciaMinutos % 60;
    
    const tiempoTexto = horasTotales > 0 
      ? `${horasTotales}h ${minutosRestantes > 0 ? minutosRestantes + 'm' : ''}` 
      : `${minutosRestantes} minutos`;

    // CÁLCULO ESTRICTO POR HORA Y TIPO DE VEHÍCULO
    let descripcionTarifa = '';

    if (vehiculoEncontrado.condicion === 'Abonado') {
      descripcionTarifa = `Abono Mensual ($0) - (${tiempoTexto})`;
    } else {
      const precioPorHora = obtenerTarifaPorHora(vehiculoEncontrado.tipo);
      const totalPagar = Math.round((diferenciaMinutos / 60) * precioPorHora);
      
      descripcionTarifa = `$ ${totalPagar.toLocaleString('es-AR')} (${tiempoTexto})`;
    }

    setVehiculos(vehiculos.map(v => 
      v.patente === patenteBuscada && v.estado === 'Estacionado'
        ? { ...v, estado: 'Retirado', horaEgreso: horaSalidaLimpia, tarifa: descripcionTarifa }
        : v
    ));

    setPatenteEgreso('');

    Swal.fire({
      title: '¡Egreso procesado!',
      html: `Vehículo: <b>${patenteBuscada}</b> (${vehiculoEncontrado.tipo})<br/>Estadía: <b>${tiempoTexto}</b><br/><h4 class="text-success mt-2">Total a cobrar: ${descripcionTarifa}</h4>`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  };

  return (
    <Container className="py-4">
      <div className="mb-4">
        <h2 className="fw-bold text-dark m-0">Control de Acceso y Egresos</h2>
        <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>
          Gestión manual de horarios con cálculo automático de tarifas según tipo de vehículo y tiempo.
        </p>
      </div>

      <Row className="g-4">
        <Col xs={12} lg={4}>
          <Card className="border-0 shadow-sm rounded-4 p-4 bg-white">
            <Tabs defaultActiveKey="ingreso" id="tabs-acceso" className="mb-3 custom-tabs">
              
              <Tab eventKey="ingreso" title="Ingreso">
                <Form onSubmit={registrarIngreso}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-muted">Patente</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: AB 123 CD"
                      value={patenteIngreso}
                      onChange={(e) => setPatenteIngreso(e.target.value)}
                      required
                      className="rounded-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-muted">Tipo de vehículo</Form.Label>
                    <Form.Select
                      value={tipoVehiculo}
                      onChange={(e) => setTipoVehiculo(e.target.value)}
                      className="rounded-3"
                    >
                      <option value="Auto">Auto (${obtenerTarifaPorHora('Auto').toLocaleString('es-AR')} / h)</option>
                      <option value="Moto">Moto (${obtenerTarifaPorHora('Moto').toLocaleString('es-AR')} / h)</option>
                      <option value="Camioneta">Camioneta (${obtenerTarifaPorHora('Camioneta').toLocaleString('es-AR')} / h)</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-muted">Condición</Form.Label>
                    <Form.Select
                      value={condicionVehiculo}
                      onChange={(e) => setCondicionVehiculo(e.target.value)}
                      className="rounded-3"
                    >
                      <option value="Ocasional">Ocasional (Paga tarifa)</option>
                      <option value="Abonado">Abonado Mensual (Sin cargo)</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-muted">Sector</Form.Label>
                    <Form.Select
                      value={sectorDestino}
                      onChange={(e) => setSectorDestino(e.target.value)}
                      className="rounded-3"
                    >
                      <option value="Planta Baja (Sector A - General)">Planta Baja (Sector A - General)</option>
                      <option value="Planta Alta (Sector B - General)">Planta Alta (Sector B - General)</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-muted">Hora de ingreso</Form.Label>
                    <Form.Control
                      type="time"
                      value={horaIngresoManual}
                      onChange={(e) => setHoraIngresoManual(e.target.value)}
                      required
                      className="rounded-3"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" className="w-100 rounded-3 fw-semibold py-2 mt-2">
                    <i className="bi bi-box-arrow-in-right me-1"></i> Registrar ingreso
                  </Button>
                </Form>
              </Tab>

              <Tab eventKey="egreso" title="Egreso">
                <Form onSubmit={registrarEgreso}>
                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-muted">Patente a retirar</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: AB 123 CD"
                      value={patenteEgreso}
                      onChange={(e) => setPatenteEgreso(e.target.value)}
                      required
                      className="rounded-3"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <Form.Label className="small fw-semibold text-muted">Hora de egreso (HH:MM)</Form.Label>
                    <Form.Control
                      type="text"
                      value={horaEgresoManual}
                      onChange={(e) => setHoraEgresoManual(e.target.value)}
                      required
                      className="rounded-3"
                    />
                  </Form.Group>

                  <div className="p-3 bg-light rounded-3 border mb-3 small text-muted">
                    <i className="bi bi-calculator me-1 text-primary"></i> 
                    El sistema calcula automáticamente el total multiplicando las horas por la tarifa del vehículo.
                  </div>

                  <Button variant="danger" type="submit" className="w-100 rounded-3 fw-semibold py-2 mt-2">
                    <i className="bi bi-box-arrow-right me-1"></i> Calcular y procesar egreso
                  </Button>
                </Form>
              </Tab>

            </Tabs>
          </Card>
        </Col>

        <Col xs={12} lg={8}>
          <Card className="border-0 shadow-sm rounded-4 p-4 bg-white h-100">
            <h5 className="fw-bold text-dark mb-3">Historial de movimientos</h5>
            <div className="table-responsive">
              <Table hover align="middle" className="mb-0 small">
                <thead className="table-light text-muted">
                  <tr>
                    <th>PATENTE</th>
                    <th>TIPO / COND.</th>
                    <th>H. ING.</th>
                    <th>H. EGR.</th>
                    <th>TARIFA / ESTADÍA</th>
                    <th>ESTADO</th>
                  </tr>
                </thead>
                <tbody>
                  {vehiculos.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="text-center text-muted py-4">
                        No hay movimientos registrados en la sesión actual.
                      </td>
                    </tr>
                  ) : (
                    vehiculos.map((item) => (
                      <tr key={item.id}>
                        <td className="fw-bold text-dark">{item.patente}</td>
                        <td className="text-muted" style={{ fontSize: '0.8rem'}}>
                          {item.tipo} <br />
                          <Badge bg={item.condicion === 'Abonado' ? 'primary' : 'secondary'} className="mt-1" style={{ fontSize: '0.7rem' }}>
                            {item.condicion}
                          </Badge>
                        </td>
                        <td><span className="text-success fw-semibold">{item.horaIngreso}</span></td>
                        <td><span className="text-danger fw-semibold">{item.horaEgreso}</span></td>
                        <td className="fw-bold text-dark">{item.tarifa}</td>
                        <td>
                          <Badge 
                            bg={item.estado === 'Estacionado' ? 'success' : 'secondary'} 
                            className="bg-opacity-10 text-dark fw-semibold px-2 py-1"
                          >
                            {item.estado}
                          </Badge>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ControlAcceso;