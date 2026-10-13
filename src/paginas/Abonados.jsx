import { useState, useEffect, useRef } from 'react';
import { Container, Table, Badge, Button, Modal, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import abonadosIniciales from '../datos/abonados.json';

const Abonados = () => {
  const alarmaMostrada = useRef(false);

  //Guardamos la lista en un estado para poder sumarle nuevos
  const [listaAbonados, setListaAbonados] = useState(abonadosIniciales);

  const [ventanitaAbierta, setVentanitaAbierta] = useState(false);
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [patente, setPatente] = useState('');

  useEffect(() => {
    if (alarmaMostrada.current) return;

    alarmaMostrada.current = true;
    Swal.fire({
      title: '¡Datos cargados!',
      text: `Se cargaron correctamente ${listaAbonados.length} abonados.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }, [listaAbonados.length]);

  //Función para guardar el nuevo abonado
  const agregarAbonado = (e) => {
    e.preventDefault();

    const nuevoAbonado = {
      id: listaAbonados.length + 1,
      nombre,
      dni,
      vehiculo,
      patente: patente.toUpperCase(),
      tipoAbono: 'Mensual',
      estado: 'Activo'
    };

    // Sumamos el nuevo a la lista y cerramos la ventana
    setListaAbonados([nuevoAbonado, ...listaAbonados]);
    setVentanitaAbierta(false);

    // Limpiamos los campos
    setNombre('');
    setDni('');
    setVehiculo('');
    setPatente('');

    Swal.fire({
      title: '¡Éxito!',
      text: 'Abonado agregado correctamente.',
      icon: 'success',
      timer: 1500,
      showConfirmButton: false
    });
  };

  return (
    <Container className="py-4">
      {/* Botón para abrir la ventana */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="text-dark fw-bold m-0">Gestión de Abonados</h2>
          <p className="text-muted m-0" style={{ fontSize: '0.95rem' }}>
            Listado general de los titulares y vigencia de sus abonos.
          </p>
        </div>
        <Button 
          variant="primary" 
          size="sm" 
          className="fw-semibold px-3 py-2 rounded-3 shadow-sm"
          onClick={() => setVentanitaAbierta(true)}
        >
          <i className="bi bi-plus-lg me-1"></i> Nuevo abonado
        </Button>
      </div>
      
      <Table striped bordered hover responsive className="shadow-sm align-middle bg-white rounded-4 overflow-hidden border-0">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>DNI</th>
            <th>Vehículo</th>
            <th>Patente</th>
            <th>Tipo de Abono</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {listaAbonados.map((abonado) => (
            <tr key={abonado.id}>
              <td>{abonado.id}</td>
              <td className="fw-semibold">{abonado.nombre}</td>
              <td>{abonado.dni}</td>
              <td>{abonado.vehiculo}</td>
              <td>
                <Badge bg="secondary" className="font-monospace px-2 py-1">
                  {abonado.patente}
                </Badge>
              </td>
              <td>{abonado.tipoAbono}</td>
              <td>
                <Badge bg={abonado.estado === 'Activo' ? 'success' : 'danger'} className="px-2 py-1">
                  {abonado.estado}
                </Badge>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Ventana flotante (Modal) */}
      <Modal show={ventanitaAbierta} onHide={() => setVentanitaAbierta(false)} centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="fw-bold text-dark fs-5">Agregar nuevo abonado</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={agregarAbonado}>
            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">Nombre y Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Juan Pérez"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
                className="rounded-3"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">DNI</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: 32.123.456"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
                required
                className="rounded-3"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">Vehículo</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Toyota Corolla"
                value={vehiculo}
                onChange={(e) => setVehiculo(e.target.value)}
                required
                className="rounded-3"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label className="small fw-semibold text-muted">Patente</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: AB 123 CD"
                value={patente}
                onChange={(e) => setPatente(e.target.value)}
                required
                className="rounded-3"
              />
            </Form.Group>

            <div className="d-flex justify-content-end gap-2 mt-4">
              <Button variant="secondary" size="sm" onClick={() => setVentanitaAbierta(false)} className="rounded-3">
                Cancelar
              </Button>
              <Button variant="primary" size="sm" type="submit" className="rounded-3 fw-semibold">
                Guardar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Abonados;