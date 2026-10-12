import { useState } from "react";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import Swal from "sweetalert2";

function Controldeacceso() {
  const [patente, setPatente] = useState("");
  const [tipoVehiculo, setTipoVehiculo] = useState("auto");
  const [accion, setAccion] = useState("ingreso");

  const registrarAcceso = (event) => {
    event.preventDefault();

    if (!patente.trim()) {
      Swal.fire({
        icon: "warning",
        title: "Campo requerido",
        text: "Por favor, ingresa el número de patente.",
      });
      return;
    }

    // Alerta de éxito limpia y directa
    Swal.fire({
      title: accion === "ingreso" ? "¡Ingreso registrado!" : "¡Egreso registrado!",
      icon: "success",
      text: `Se registró correctamente el ${accion} de la patente ${patente.toUpperCase()}.`,
      draggable: true
    });

    // Limpiamos el formulario después de registrar
    setPatente("");
  };

  return (
    <div className="p-4 bg-light min-vh-100">
      {/* Cabecera estilo Figma */}
      <div className="mb-4">
        <h2 className="fw-bold text-dark m-0">Control de acceso</h2>
        <p className="text-muted m-0" style={{ fontSize: '0.9rem' }}>Registrá ingresos, gestioná salidas y mantené el flujo en movimiento.</p>
      </div>

      <Card className="border-0 shadow-sm rounded-4 p-4">
        <Form onSubmit={registrarAcceso}>
          <Row className="g-3">
            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">Tipo de vehículo</Form.Label>
                <Form.Select 
                  value={tipoVehiculo} 
                  onChange={(e) => setTipoVehiculo(e.target.value)}
                  className="rounded-3 py-2"
                >
                  <option value="auto">Auto</option>
                  <option value="moto">Moto</option>
                  <option value="camioneta">Camioneta</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">Acción</Form.Label>
                <Form.Select 
                  value={accion} 
                  onChange={(e) => setAccion(e.target.value)}
                  className="rounded-3 py-2"
                >
                  <option value="ingreso">Ingreso</option>
                  <option value="egreso">Egreso</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col xs={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">Número de patente</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ej: AB 123 CD"
                  value={patente}
                  onChange={(e) => setPatente(e.target.value)}
                  className="rounded-3 py-2 text-uppercase font-monospace"
                  required
                />
              </Form.Group>
            </Col>

            <Col xs={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">Hora de ingreso</Form.Label>
                <Form.Control type="time" className="rounded-3 py-2" />
              </Form.Group>
            </Col>

            <Col xs={12} md={4}>
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold text-secondary">Hora de egreso</Form.Label>
                <Form.Control type="time" className="rounded-3 py-2" />
              </Form.Group>
            </Col>

            <Col xs={12} className="mt-4">
              <Button
                type="submit"
                className="w-100 py-2 fw-semibold text-white border-0 rounded-3 shadow-sm"
                style={{ backgroundColor: '#fd7e14' }}
              >
                Confirmar {accion === "ingreso" ? "Ingreso" : "Egreso"}
              </Button>
            </Col>

            <Col xs={12} className="mt-4">
              <div className="p-4 bg-light rounded-4 border">
                <h5 className="fw-bold text-dark mb-1">Cobro</h5>
                <p className="text-muted m-0">
                  Total a pagar: <span className="fw-bold text-success fs-5">$ 0.00</span>
                </p>
              </div>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}

export default Controldeacceso;