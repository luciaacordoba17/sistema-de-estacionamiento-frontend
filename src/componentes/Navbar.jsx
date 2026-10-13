import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";

function CustomNavbar() {
  const [visible, setVisible] = useState(true);
  const [ultimoScroll, setUltimoScroll] = useState(0);

  useEffect(() => {
    const controlarScroll = () => {
      const scrollActual = window.scrollY;
      if (scrollActual > ultimoScroll && scrollActual > 80) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      setUltimoScroll(scrollActual);
    };

    window.addEventListener("scroll", controlarScroll);
    return () => window.removeEventListener("scroll", controlarScroll);
  }, [ultimoScroll]);

  return (
    <header 
      className="py-3 sticky-top"
      style={{
        transform: visible ? "translateY(0)" : "translateY(-150%)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      {/* Estilos del menú flotante Uiverse */}
      <style>{`
        .menu-uiverse {
          position: relative;
          width: calc(100% - 20px);
          max-width: 750px;
          margin: 0 auto;
          backdrop-filter: blur(12px) saturate(180%) contrast(200%);
          -webkit-backdrop-filter: blur(12px) saturate(180%) contrast(200%);
          background: rgba(33, 37, 41, 0.75);
          border: 1px solid rgba(255, 255, 255, 0.15);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          padding: 8px;
          border-radius: 99rem;
          display: flex;
          justify-content: center;
          gap: 6px;
          z-index: 50;
        }

        .menu-uiverse::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: inherit;
          box-shadow:
            inset 2px 2px 5px -2px rgba(255, 255, 255, 0.3),
            inset -2px -2px 5px 2px rgba(255, 255, 255, 0.2),
            inset 0 -2px 0 rgba(255, 255, 255, 0.1);
          pointer-events: none;
          z-index: -1;
        }

        .menu-uiverse a {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1 1 0;
          min-width: 0;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          padding: 8px 4px;
          border-radius: 999rem;
          transition: background 0.18s ease, color 0.18s ease, transform 0.18s ease;
        }

        .menu-uiverse a:hover {
          background-color: rgba(255, 255, 255, 0.15);
          transform: rotate(2.2deg);
          color: #ffffff;
        }

        .menu-uiverse a i {
          font-size: 1.1rem;
        }

        .menu-uiverse a span {
          font-size: 0.75rem;
          font-weight: 600;
          margin-top: 4px;
        }

        .menu-uiverse a.active {
          background: rgba(232, 93, 4, 0.9);
          color: #ffffff;
        }
      `}</style>

      <Container>
        <nav className="menu-uiverse">
          <NavLink to="/" end>
            <i className="bi bi-house-door"></i>
            <span>Inicio</span>
          </NavLink>
          <NavLink to="/panel">
            <i className="bi bi-speedometer2"></i>
            <span>Panel</span>
          </NavLink>
          <NavLink to="/acceso">
            <i className="bi bi-car-front"></i>
            <span>Acceso</span>
          </NavLink>
          <NavLink to="/espacios">
            <i className="bi bi-p-square"></i>
            <span>Sectores</span>
          </NavLink>
          <NavLink to="/abonados">
            <i className="bi bi-people"></i>
            <span>Abonados</span>
          </NavLink>
          <NavLink to="/tarifas">
            <i className="bi bi-cash-coin"></i>
            <span>Tarifas</span>
          </NavLink>
        </nav>
      </Container>
    </header>
  );
}

export default CustomNavbar;