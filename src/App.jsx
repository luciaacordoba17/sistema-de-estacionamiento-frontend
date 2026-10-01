import { BrowserRouter as Router, useLocation } from "react-router-dom";
import CustomNavbar from "./componentes/Navbar";
import Rutas from "./componentes/routes/Rutas";
import Footer from "./componentes/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

function AppLayout() {
  const { pathname } = useLocation();
  const esInicio = pathname === "/";

  return (
    <div className="d-flex flex-column min-vh-100">
      {!esInicio && <CustomNavbar />}
      <main className="flex-fill">
        <Rutas />
      </main>
      {!esInicio && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
