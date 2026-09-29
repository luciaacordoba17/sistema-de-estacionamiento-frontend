import CustomNavbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import Dashboard from "./componentes/Dashboard";

function App() {
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
