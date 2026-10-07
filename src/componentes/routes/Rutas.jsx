import { Route, Routes } from "react-router-dom";
import Pantalladeinicio from "../../pages/Pantalladeinicio";
import Paneldecontrol from "../../pages/Paneldecontrol";
import Controldeacceso from "../../pages/Controldeacceso";
import Espaciosysectores from "../../pages/Espaciosysectores";
import Abonados from "../../pages/Abonados";
import Tarifas from "../../pages/tarifas.jsx";
import Error404 from "../../pages/Error404";

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