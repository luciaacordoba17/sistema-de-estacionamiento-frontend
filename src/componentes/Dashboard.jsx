import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Dashboard() {
    return (
        <main>
            {/* PANEL DE CONTROL */}
            <section id="inicio" className="container py-5">
                <div className="dashboard-header mb-4">
                    <span className="dashboard-etiqueta">PANEL DE CONTROL</span>
                    <h2>Estado del Estacionamiento</h2>
                    <p>Información actualizada sobre la disponibilidad y ocupación.</p>
                </div>

                <Row className="g-4">
                    {/*Espacios Disponibles */}
                    <Col xs={12} md={4}>
                        <article className="dashboard-card h-100">
                            <div className="dashboard-icon">
                                <i className="bi bi-p-square-fill"></i>
                            </div>
                            <div className="dashboard-content">
                                <span className="dashboard-label">ESPACIOS DISPONIBLES</span>
                                <p id="espacios-disponibles" className="dashboard-number">50 / 50</p>
                                <small>Espacios libres actualmente</small>
                            </div>
                        </article>
                    </Col>

                    {/* Vehículos Actuales */}
                    <Col xs={12} md={4}>
                        <article className="dashboard-card h-100">
                            <div className="dashboard-icon">
                                <i className="bi bi-car-front-fill"></i>
                            </div>
                            <div className="dashboard-content">
                                <span className="dashboard-label">VEHÍCULOS ACTUALES</span>
                                <p id="vehiculos-actuales" className="dashboard-number">0</p>
                                <small>Vehículos dentro del estacionamiento</small>
                            </div>
                        </article>
                    </Col>

                    {/* Estado del Sistema */}
                    <Col xs={12} md={4}>
                        <article className="dashboard-card dashboard-card-estado h-100">
                            <div className="dashboard-icon">
                                <i className="bi bi-percent"></i>
                            </div>
                            <div className="dashboard-content">
                                <span className="dashboard-label">ESTADO DEL SISTEMA</span>
                                <p id="estado-sistema" className="estado-texto">
                                    <span id="estado-indicador" className="estado-indicador"></span>
                                    <span id="texto-estado">Capacidad normal</span>
                                </p>
                                <small id="porcentaje-ocupacion">0% de ocupación</small>
                            </div>
                        </article>
                    </Col>
                </Row>
            </section>
        </main>
    );
}

export default Dashboard;
