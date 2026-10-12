import { useEffect, useRef } from 'react';
import { Container, Table, Badge, Card } from 'react-bootstrap';
import Swal from 'sweetalert2';
import abonados from '../datos/abonados.json';
import './Abonados.css';

const Abonados = () => {
  const alertaMostrada = useRef(false);

  useEffect(() => {
    if (alertaMostrada.current) return;

    alertaMostrada.current = true;
    void Swal.fire({
      title: '¡Datos cargados!',
      text: `Se cargaron correctamente ${abonados.length} abonados.`,
      icon: 'success',
      confirmButtonText: 'Aceptar',
    });
  }, []);

  return (
    <Container fluid className="abonados-page">
      <div className="abonados-heading mb-4">
        <div>
          <h2 className="fw-bold text-dark m-0">Abonados</h2>
          <p className="text-muted m-0">
            Administra los abonados, sus vehículos y estado de membresía.
          </p>
        </div>
      </div>

      <Card className="abonados-card border-0 shadow-sm rounded-4 overflow-hidden">
        <Card.Body className="p-0">
          <Table hover responsive className="abonados-table align-middle mb-0">
            <thead>
              <tr>
                <th>#</th>
                <th>NOMBRE</th>
                <th>DNI</th>
                <th>VEHÍCULO</th>
                <th>PATENTE</th>
                <th>TIPO DE ABONO</th>
                <th>ESTADO</th>
              </tr>
            </thead>
            <tbody>
              {abonados.map((abonado) => (
                <tr key={abonado.id}>
                  <td className="abonados-id">{abonado.id}</td>
                  <td className="fw-bold text-dark">{abonado.nombre}</td>
                  <td>{abonado.dni}</td>
                  <td>{abonado.vehiculo}</td>
                  <td>
                    <Badge bg="light" text="dark" className="abonados-patente border font-monospace">
                      {abonado.patente}
                    </Badge>
                  </td>
                  <td>{abonado.tipoAbono}</td>
                  <td>
                    <span className={`abonados-estado ${abonado.estado === 'Activo' ? 'abonados-estado-activo' : 'abonados-estado-inactivo'}`}>
                      {abonado.estado}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Abonados;