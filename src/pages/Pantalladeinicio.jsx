import Container from "react-bootstrap/Container";
import { Button, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import imagenFondo from "../imagenes/imagen1.avif";
import "../App.css";

const Pantalladeinicio = () => {
  return (
    <Container
      fluid
      className="pantalla-inicio-fullscreen d-flex align-items-center justify-content-center py-5"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 25, 45, 0.48), rgba(10, 25, 45, 0.48)), url(${imagenFondo})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Row className="w-100 justify-content-center">
        <Col xs={12} md={8} lg={7}>
          <Card className="shadow-sm border-0 rounded-4 p-4 p-md-5 bg-light text-center">
            <Card.Body className="p-0">
              <div className="text-primary fs-1 mb-4">
                <i className="bi bi-p-square-fill display-3"></i>
              </div>
              
              <Card.Title className="mb-3 fw-bold text-primary display-6">
                Sistema de Estacionamiento
              </Card.Title>
              
              <Card.Text className="text-muted mb-4 fs-5">
                Bienvenido al panel de gestión y control vehicular.
              </Card.Text>

              <Button 
                as={Link}
                to="/panel"
                variant="primary" 
                size="lg" 
                className="px-5 py-3 fw-semibold rounded-3 w-100 shadow-sm"
              >
                Ingresar al sistema
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Pantalladeinicio;