import { useState, useEffect } from 'react';
import { Container, Table, Badge, Button, Modal, Form, Spinner } from 'react-bootstrap';
import axios from 'axios';
import Swal from 'sweetalert2';

const URL_ABONADOS = import.meta.env.VITE_API_URL || '/abonados.json';

const Abonados = () => {
  const [listaAbonados, setListaAbonados] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState('');
  const [ventanitaAbierta, setVentanitaAbierta] = useState(false);
  const [nombre, setNombre] = useState('');
  const [dni, setDni] = useState('');
  const [vehiculo, setVehiculo] = useState('');
  const [patente, setPatente] = useState('');
  
  useEffect(() => {
    const obtenerAbonados = async () => {
      try {
        const respuesta = await axios.get(URL_ABONADOS)
        setListaAbonados(respuesta.data)
        Swal.fire({
          title: '¡Datos cargados!',
          text: `Se cargaron correctamente ${respuesta.data.length} abonados desde el archivo JSON.`,
          icon: 'success',
          confirmButtonText: 'Aceptar',
        })
      } catch (errorSolicitud) {
        console.error('Error al cargar los abonados:', errorSolicitud)
        setError('No se pudieron cargar los abonados. Intentá nuevamente más tarde.')
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar los abonados del archivo.',
          icon: 'error',
          confirmButtonText: 'Aceptar',
        })
      } finally {
        setCargando(false)
      }
    }

    obtenerAbonados()
  }, [])

  // Función para guardar el nuevo abonado
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

    setListaAbonados([nuevoAbonado, ...listaAbonados]);
    setVentanitaAbierta(false);

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
          {cargando ? (
            <tr>
              <td colSpan="7" className="text-center py-4">
                <Spinner animation="border" size="sm" className="me-2" />
                Cargando abonados...
              </td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="7" className="text-center text-danger py-4">{error}</td>
            </tr>
          ) : listaAbonados.length === 0 ? (
            <tr>
              <td colSpan="7" className="text-center text-muted py-4">No hay abonados registrados.</td>
            </tr>
          ) : listaAbonados.map((abonado) => (
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