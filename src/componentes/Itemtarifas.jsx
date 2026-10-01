import { Card, Col } from "react-bootstrap";

// Este componente recibe "tipo" y "monto" como props
function ItemTarifa({ tipo, monto }) {
    return (
        <Col xs={12} md={4}>
            <Card className="shadow-sm border-0 text-center p-3 bg-light h-100">
                <Card.Body className="d-flex flex-column justify-content-between">
                    <Card.Title className="fw-bold text-primary">{tipo}</Card.Title>
                    <Card.Text className="fs-4 fw-semibold text-success my-2">
                        {monto}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default ItemTarifa;