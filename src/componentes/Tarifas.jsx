import Container from "react-bootstrap/Container";
import { Form, Button, Row, Col, Card, Table } from "react-bootstrap";
import { useState } from "react";

function Tarifas() {
    const [tarifas, setTarifas] = useState([
        { tipo: "automovil", nombre: "Automóvil", monto: null },
        { tipo: "moto", nombre: "Moto", monto: null },
        { tipo: "camioneta", nombre: "Camioneta", monto: null },
    ]);
    const [tipoSeleccionado, setTipoSeleccionado] = useState("automovil");
    const [monto, setMonto] = useState("");
    const [mensaje, setMensaje] = useState("");

    function actualizarTarifa(event) {
        event.preventDefault();
        const nuevoMonto = Number(monto);

        if (!Number.isFinite(nuevoMonto) || nuevoMonto <= 0) {
            setMensaje("Ingresá un monto mayor que cero.");
            return;
        }

        setTarifas((tarifasActuales) =>
            tarifasActuales.map((tarifa) =>
                tarifa.tipo === tipoSeleccionado
                    ? { ...tarifa, monto: nuevoMonto }
                    : tarifa
            )
        );
        setMensaje("La tarifa se actualizó correctamente.");
    }

    return (
        <Container as="section" id="tarifas" className="py-5">
            <Card className="shadow-sm border-0 rounded-4 p-4 p-md-5">
                <Card.Body className="text-center p-0 mb-4">
                    <Card.Title className="mb-2 fw-bold text-primary display-6">
                        Tarifas
                    </Card.Title>
                    <Card.Text className="text-muted fs-5">
                        Configuracion y Actualizacion de las tarifas del estacionamiento.
                    </Card.Text>
                </Card.Body>
                <Form className="p-4 border rounded shadow-sm bg-light" onSubmit={actualizarTarifa}>
                    <Row className="g-4">
                        <Col xs={12} md={6}>
                            <Form.Group controlId="tipoVehiculoTarifa">
                                <Form.Label className="fw-semibold text-primary">Tipo de Vehículo</Form.Label>
                                <Form.Select
                                    value={tipoSeleccionado}
                                    onChange={(event) => {
                                        setTipoSeleccionado(event.target.value);
                                        setMensaje("");
                                    }}
                                >
                                    <option value="automovil">Automóvil</option>
                                    <option value="moto">Moto</option>
                                    <option value="camioneta">Camioneta</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={6}>
                            <Form.Group controlId="montoTarifa">
                                <Form.Label className="fw-semibold text-primary">Monto por hora</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="0.01"
                                    step="0.01"
                                    placeholder="Ingrese el monto de la tarifa"
                                    value={monto}
                                    onChange={(event) => {
                                        setMonto(event.target.value);
                                        setMensaje("");
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} className="text-center">
                            <Button type="submit" variant="primary" className="px-4 py-2 fw-semibold">
                                Actualizar Tarifa
                            </Button>
                        </Col>
                    </Row>
                    {mensaje && (
                        <div className={`alert ${mensaje.startsWith("La tarifa") ? "alert-success" : "alert-danger"} mt-3 mb-0`} role="status">
                            {mensaje}
                        </div>
                    )}
                </Form>
                <div className="mt-5">
                    <h5 className="text-primary fw-bold mb-3">Tarifas Actuales</h5>
                    <div className="table-responsive">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Tipo de Vehículo</th>
                                    <th>Monto por Hora</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tarifas.map((tarifa) => (
                                    <tr key={tarifa.tipo}>
                                        <td>{tarifa.nombre}</td>
                                        <td>{tarifa.monto === null ? "Indefinido" : `$${tarifa.monto.toFixed(2)}`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </div>
                </div>
            </Card>
        </Container>
    );
}

export default Tarifas;