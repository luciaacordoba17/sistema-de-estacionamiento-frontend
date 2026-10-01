import { useState } from "react";
import CustomNavbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Pantalladeinicio from "./componentes/Pantalladeinicio";
import Dashboard from "./componentes/Paneldecontrol";
import Controldeacceso from "./componentes/Controldeacceso";
import Espaciosysectores from "./componentes/Espaciosysectores";
import Abonados from "./componentes/Abonados";
import Tarifas from "./componentes/Tarifas";

function App() {
  const [ingreso, setIngreso] = useState(false);

  if (!ingreso) {
    return <Pantalladeinicio onIngresar={() => setIngreso(true)} />;
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <CustomNavbar />
      <main className="flex-fill">
        <div className="container mt-4">
          <h1>Panel de Control</h1>
          <p>Bienvenido al sistema de estacionamiento.</p>
        </div>
        <div className="flex-fill">
          <Dashboard />
          <Controldeacceso />
          <Espaciosysectores />
          <Abonados />
          <Tarifas />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
