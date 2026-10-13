import { Route, Routes } from "react-router-dom";
import Pantalladeinicio from "../../paginas/Pantalladeinicio";
import Paneldecontrol from "../../paginas/Paneldecontrol";
import Controldeacceso from "../../paginas/Controldeacceso";
import Espaciosysectores from "../../paginas/Espaciosysectores";
import Abonados from "../../paginas/Abonados";
import Tarifas from "../../paginas/tarifas.jsx";
import Error404 from "../../paginas/Error404";

const Rutas = () => {
  return (
    <Routes>
      <Route path="/" element={<Pantalladeinicio />} />
      <Route path="/panel" element={<Paneldecontrol />} />
      <Route path="/acceso" element={<Controldeacceso />} />
      <Route path="/espacios" element={<Espaciosysectores />} />
      <Route path="/abonados" element={<Abonados />} />
      <Route path="/tarifas" element={<Tarifas />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default Rutas;