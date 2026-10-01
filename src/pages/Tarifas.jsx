import Container from "react-bootstrap/Container";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row, Table } from "react-bootstrap";

const tarifasPredeterminadas = [
    { tipo: "automovil", nombre: "Automóvil", monto: 2500 },
    { tipo: "motocicleta", nombre: "Motocicleta", monto: 15000 },
    { tipo: "camioneta", nombre: "Camioneta", monto: 3500 },
];

const CLAVE_TARIFAS = "tarifas-estacionamiento";

function cargarTarifas() {
    const tarifasGuardadas = localStorage.getItem(CLAVE_TARIFAS);

    if (!tarifasGuardadas) {
        return tarifasPredeterminadas;
    }

    try {
        const tarifasParseadas = JSON.parse(tarifasGuardadas);
        if (!Array.isArray(tarifasParseadas)) {
            throw new Error("El formato guardado de las tarifas no es válido.");
        }

        return tarifasPredeterminadas.map((tarifaPredeterminada) => {
            const tarifaGuardada = tarifasParseadas.find(
                (tarifa) => tarifa.tipo === tarifaPredeterminada.tipo
            );

            if (
                !tarifaGuardada ||
                typeof tarifaGuardada.monto !== "number" ||
                !Number.isFinite(tarifaGuardada.monto) ||
                tarifaGuardada.monto <= 0
            ) {
                throw new Error(`El monto guardado para ${tarifaPredeterminada.nombre} no es válido.`);
            }

            return { ...tarifaPredeterminada, monto: tarifaGuardada.monto };
        });
    } catch (error) {
        console.error("No se pudieron cargar las tarifas guardadas.", error);
        return tarifasPredeterminadas;
    }
}

function Tarifas() {
    const [tarifas, setTarifas] = useState(cargarTarifas);
    const [tipoSeleccionado, setTipoSeleccionado] = useState("automovil");
    const [monto, setMonto] = useState(() => {
        const tarifaAutomovil = cargarTarifas().find((tarifa) => tarifa.tipo === "automovil");
        return String(tarifaAutomovil.monto);
    });
    const [mensaje, setMensaje] = useState("");

    useEffect(() => {
        localStorage.setItem(CLAVE_TARIFAS, JSON.stringify(tarifas));
    }, [tarifas]);

    function seleccionarVehiculo(event) {
        const tipo = event.target.value;
        const tarifa = tarifas.find((item) => item.tipo === tipo);
        setTipoSeleccionado(tipo);
        setMonto(String(tarifa.monto));
        setMensaje("");
    }

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

    const formatoMoneda = new Intl.NumberFormat("es-AR", {
        style: "currency",
        currency: "ARS",
        minimumFractionDigits: 2,
    });

    return (
        <Container as="section" className="py-5" id="tarifas">
            <Card className="shadow-sm border-0 rounded-4 p-4 p-md-5 bg-light text-center">
                <Card.Body className="p-0">
                    <Card.Title className="mb-3 fw-bold text-primary display-6">
                        Tarifas
                    </Card.Title>
                    <Card.Text className="text-muted mb-4 fs-5">
                        Listas de tarifas para los diferentes tipos de vehículos.
                    </Card.Text>
                </Card.Body>
                <Form className="p-4 border rounded shadow-sm bg-white text-start" onSubmit={actualizarTarifa}>
                    <Row className="g-3 align-items-end">
                        <Col xs={12} md={5}>
                            <Form.Group controlId="tipoVehiculoTarifa">
                                <Form.Label className="fw-semibold text-primary">Tipo de vehículo</Form.Label>
                                <Form.Select value={tipoSeleccionado} onChange={seleccionarVehiculo}>
                                    {tarifas.map((tarifa) => (
                                        <option key={tarifa.tipo} value={tarifa.tipo}>{tarifa.nombre}</option>
                                    ))}
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={4}>
                            <Form.Group controlId="montoTarifa">
                                <Form.Label className="fw-semibold text-primary">Monto por hora</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="0.01"
                                    step="0.01"
                                    value={monto}
                                    onChange={(event) => {
                                        setMonto(event.target.value);
                                        setMensaje("");
                                    }}
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={3}>
                            <Button type="submit" variant="primary" className="w-100 fw-semibold">
                                Actualizar tarifa
                            </Button>
                        </Col>
                    </Row>
                    {mensaje && (
                        <div
                            className={`alert ${mensaje.startsWith("La tarifa") ? "alert-success" : "alert-danger"} mt-3 mb-0`}
                            role="status"
                        >
                            {mensaje}
                        </div>
                    )}
                </Form>
                <div className="mt-3">
                     <h5 className="text-primary fw-bold">Tarifas actuales</h5>
                     <div className="table-responsive">
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Tipo de Vehículo</th>
                                    <th>Monto por hora </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tarifas.map((tarifa) => (
                                    <tr key={tarifa.tipo}>
                                        <td>{tarifa.nombre}</td>
                                        <td>{formatoMoneda.format(tarifa.monto)} por hora</td>
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