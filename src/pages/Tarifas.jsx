import Container from "react-bootstrap/Container";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useState } from "react";

const tarifasPredeterminadas = [
    { tipo: "automovil", nombre: "Automóvil", monto: 2500 },
    { tipo: "moto", nombre: "Moto", monto: 1500 },
    { tipo: "camioneta", nombre: "Camioneta", monto: 3500 },
];

function Tarifas() {
    const [tarifas, setTarifas] = useState(tarifasPredeterminadas);
    const [tipoSeleccionado, setTipoSeleccionado] = useState("automovil");
    const [monto, setMonto] = useState("2500");
    const [mensaje, setMensaje] = useState("");

    function seleccionarVehiculo(event) {
        const tipo = event.target.value;
        const tarifa = tarifas.find((item) => item.tipo === tipo);
        setTipoSeleccionado(tipo);
        setMonto(tarifa.monto);
        setMensaje("");
    }

    function actualizarTarifa(event) {
        event.preventDefault();

        if (monto <= 0 || monto === "") {
            setMensaje("Ingresá un monto mayor que cero.");
            return;
        }

        setTarifas(
            tarifas.map((tarifa) => {
                if (tarifa.tipo === tipoSeleccionado) {
                    return { ...tarifa, monto: Number(monto) };
                }
                return tarifa;
            })
        );

        setMensaje("¡Tarifa actualizada correctamente!");
    }

    return (
        <Container as="section" className="py-5" id="tarifas">
            <Card className="shadow-sm border-0 rounded-4 p-4 p-md-5">
                <Card.Body className="text-center p-0 mb-4">
                    <Card.Title className="mb-2 fw-bold text-primary display-6">
                        Gestión de Tarifas
                    </Card.Title>
                    <Card.Text className="text-muted fs-5">
                        Administración y actualización de tarifas del estacionamiento.
                    </Card.Text>
                </Card.Body>

                <Form className="p-4 border rounded shadow-sm bg-light" onSubmit={actualizarTarifa}>
                    <Row className="g-4">
                        <Col md={6} xs={12}>
                            <Form.Group controlId="tipoVehiculoTarifa">
                                <Form.Label className="fw-semibold text-primary">Tipo de Vehículo</Form.Label>
                                <Form.Select value={tipoSeleccionado} onChange={seleccionarVehiculo}>
                                    {tarifas.map((tarifa) => (
                                        <option key={tarifa.tipo} value={tarifa.tipo}>
                                            {tarifa.nombre}
                                        </option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col md={6} xs={12}>
                            <Form.Group controlId="montoTarifa">
                                <Form.Label className="fw-semibold text-primary">Monto por hora</Form.Label>
                                <Form.Control
                                    type="number"
                                    placeholder="Ingrese el monto"
                                    value={monto}
                                    onChange={(event) => {
                                        setMonto(event.target.value);
                                        setMensaje("");
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col className="text-center" xs={12}>
                            <Button className="px-4 py-2 fw-semibold" type="submit" variant="primary">
                                Actualizar Tarifa
                            </Button>
                        </Col>
                    </Row>
                    {mensaje && (
                        <div className={`alert ${mensaje.startsWith("¡") ? "alert-success" : "alert-danger"} mt-3 mb-0`} role="status">
                            {mensaje}
                        </div>
                    )}
                </Form>

                <div className="mt-5">
                    <h5 className="text-primary fw-bold mb-3">Tarifas Vigentes</h5>
                    <ul className="list-group">
                        {tarifas.map((tarifa) => (
                            <li key={tarifa.tipo} className="list-group-item d-flex justify-content-between align-items-center">
                                <span>{tarifa.nombre}</span>
                                <span className="fw-bold text-success">${tarifa.monto}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>
        </Container>
    );
}

export default Tarifas;