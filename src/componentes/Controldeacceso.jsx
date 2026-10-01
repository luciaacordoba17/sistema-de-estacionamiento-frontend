import Container from "react-bootstrap/Container";
import { Form, Button, Row, Col } from "react-bootstrap";

function Controldeacceso() {
    return (
        <section id="control-acceso" className="py-5">
            <h2 className="text-center mb-4">Control de Acceso</h2>
            <Form className="p-4 border rounded shadow-sm bg-light">
                <Row className="g-4">
                    <Col xs={12} md={6}>
                        <div className="p-3 bg-white rounded-3 border-start border-3 border-info shadow-sm">
                        <Form.Label htmlFor="tipo-vehiculo" className="fw-semibold text-primary">
                        Tipo de Vehículo:
                        </Form.Label>
                            <Form.Select id="tipo-vehiculo" name="tipo-vehiculo">
                            <option value="auto">Auto</option>
                            <option value="moto">Moto</option>
                            <option value="camioneta">Camioneta</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="p-3 bg-white rounded-3 border-start border-3 border-info shadow-sm">
                        <Form.Label htmlFor="accion" className="fw-semibold text-primary">
                        Acción:
                        </Form.Label>
                            <Form.Select id="accion" name="accion">
                            <option value="ingreso">Ingreso</option>
                            <option value="egreso">Egreso</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="p-3 bg-white rounded-3 border-start border-3 border-info shadow-sm">
                            <Form.Label htmlFor="numero-patente" className="fw-semibold text-primary">
                                Número de Patente:
                            </Form.Label>
                            <Form.Control type="text" id="numero-patente" name="numero-patente" placeholder="Ingrese el número de patente" />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="p-3 bg-white rounded-3 border-start border-3 border-info shadow-sm">
                            <Form.Label htmlFor="hora.ingreso" className="fw-semibold text-primary">
                                Hora de Ingreso:
                            </Form.Label>
                            <Form.Control type="time" id="hora.ingreso" name="hora.ingreso" />
                        </div>
                    </Col>
                    <Col xs={12} md={4}>
                        <div className="p-3 bg-white rounded-3 border-start border-3 border-info shadow-sm">
                            <Form.Label htmlFor="hora.egreso" className="fw-semibold text-primary"> 
                                Hora de Egreso:
                            </Form.Label>
                            <Form.Control type="time" id="hora.egreso" name="hora.egreso" />
                        </div>
                    </Col>
                    <Col xs={12} className="text-center">
                        <Button type="submit" variant="primary" className="px-4 py-2 fw-semibold">
                            Registrar Acceso
                        </Button>
                    </Col>
                    <div className="cobro mt-4 p-4 bg-white rounded-4 border-start border-3 border-info shadow-sm">
                        <h4 className="text-primary">Cobro</h4>
                        <p className="lead">Total a pagar: $<span id="total-cobro">0.00</span></p>
                    </div>
                </Row>
            </Form>
        </section>
    );
}

export default Controldeacceso;