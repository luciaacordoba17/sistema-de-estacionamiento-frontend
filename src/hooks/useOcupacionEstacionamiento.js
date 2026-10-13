import { useEffect, useState } from "react";

export const CAPACIDAD_ESTACIONAMIENTO = 50;

const obtenerCantidadDeVehiculos = (patentesGuardadas) =>
  patentesGuardadas ? JSON.parse(patentesGuardadas).length : 0;

export function useOcupacionEstacionamiento() {
  const [vehiculosActuales, setVehiculosActuales] = useState(() =>
    obtenerCantidadDeVehiculos(localStorage.getItem("patentesIngresadas")),
  );

  useEffect(() => {
    const actualizarOcupacion = (event) => {
      if (event.type === "patentesIngresadasChange") {
        setVehiculosActuales(event.detail);
        return;
      }

      setVehiculosActuales(obtenerCantidadDeVehiculos(event.newValue));
    };

    window.addEventListener("patentesIngresadasChange", actualizarOcupacion);
    window.addEventListener("storage", actualizarOcupacion);

    return () => {
      window.removeEventListener("patentesIngresadasChange", actualizarOcupacion);
      window.removeEventListener("storage", actualizarOcupacion);
    };
  }, []);

  return {
    vehiculosActuales,
    espaciosDisponibles: Math.max(
      CAPACIDAD_ESTACIONAMIENTO - vehiculosActuales,
      0,
    ),
  };
}
