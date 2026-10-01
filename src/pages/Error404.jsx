import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <Container className="text-center py-5">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2 className="mb-3">Página no encontrada</h2>
      <p className="text-muted mb-4">La ruta a la que intentás ingresar no existe.</p>
      <Button as={Link} to="/" variant="primary">
        Volver al Inicio
      </Button>
    </Container>
  );
};

export default Error404;