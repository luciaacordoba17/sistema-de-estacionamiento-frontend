import Card from "react-bootstrap/Card";
import { Form, Button, Row, Col, Table } from "react-bootstrap";

const Abonados = () => {
  return (
    <section id="abonados" className="py-5">
      <Card className="shadow-sm border-0 rounded-4 p-4 p-md-5">
        <Card.Body className="text-center p-0 mb-4">
          <Card.Title className="mb-2 fw-bold text-primary display-6">
            Abonados
          </Card.Title>
          <Card.Text className="text-muted fs-5">
            Gestión y registro de usuarios abonados del estacionamiento.
          </Card.Text>
        </Card.Body>
        <Form className="p-4 border rounded shadow-sm bg-light">
          <Row className="g-3 align-items-end">
            <Col xs={12} md={6}>
              <Form.Group controlId="nombreAbonado">
                <Form.Label>Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingrese el nombre del abonado"
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="emailAbonado">
                <Form.Label className="fw-semibold text-primary">
                  Email
                </Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Ingrese el email del abonado"
                  required
                />
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="planAbonado">
                <Form.Label className="fw-semibold text-primary">
                  Plan
                </Form.Label>
                <Form.Select>
                  <option value="mensual">Mensual</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xs={12} md={6}>
              <Form.Group controlId="vencimientoAbonado">
                <Form.Label className="fw-semibold text-primary">
                  Fecha de vencimiento
                </Form.Label>
                <Form.Control type="date" name="vencimiento" />
              </Form.Group>
            </Col>
            <Col
              xs={12}
              className="d-flex flex-column flex-sm-row justify-content-end gap-2 pt-2"
            >
              <Button
                type="submit"
                variant="primary"
                className="px-4 py-2 fw-semibold"
              >
                Registrar Abonado
              </Button>
              <Button
                as="a"
                href="mailto:cliente@email.com?subject=Aviso%20de%20Vencimiento%20de%20Abono&body=Hola,%20le%20escribimos%20para%20avisarle%20que%20su%20abono%20está%20próximo%20a%20vencer."
                variant="outline-success"
                className="px-3 py-2 fw-semibold text-decoration-none"
              >
                Enviar Email
              </Button>
            </Col>
          </Row>
        </Form>
        <div className="mt-5">
          <h5 className="text-primary fw-bold mb-3">Lista de Abonados</h5>
          <div className="table-responsive">
            <Table striped bordered hover responsive className="align-middle">
              <thead>
                <tr>
                  <th>Nombre y Apellido</th>
                  <th>Email</th>
                  <th>Plan</th>
                  <th>Vencimiento</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Juan Pérez</td>
                  <td>juan.perez@example.com</td>
                  <td>Mensual</td>
                  <td>31/10/2026</td>
                  <td>
                    <span className="badge bg-success">Activo</span>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Abonados;
