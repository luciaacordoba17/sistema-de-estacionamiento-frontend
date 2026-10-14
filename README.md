# Sistema de estacionamiento FRONTEND
 
 Trabajo Practico Desarrollado para la materia Programacion IV

# Las Tecnologias que utilizamos fueron:
* **React (Vite):**
* **React Bootstrap & Bootstrap:** 
* **Axios:**
* **SweetAlert2:** 
* **JavaScript:** 
* **Git & GitHub:**
* **Visual Studio Code:**

# Estrategias SEO


1. **Etiquetas Semánticas y Títulos Optimizados:** Definición de un título (`<title>`) claro y orientado al contexto del sistema, complementado con una meta descripción (`<meta name="description">`) concisa que resume la funcionalidad principal de la plataforma para los motores de búsqueda.
2. **Localización Geográfica e Idioma (`lang="es-AR"`):** Configuración del atributo principal en la etiqueta `<html>` para garantizar una correcta lectura, indexación regional y posicionamiento enfocado en el mercado de habla hispana.
3. **Protocolo Open Graph (OG Meta Tags):** Incorporación de metadatos específicos (`og:title`, `og:description`, `og:type`, `og:image`, `og:locale`) para asegurar que al compartir el enlace de la aplicación en redes sociales o plataformas de mensajería, se genere una previsualización estructurada y profesional.
4. **Control de Indexación y Rastreo (`Robots Directives`):** Inclusión de directivas de metadatos de control (`robots: index, follow`) orientadas a guiar a los web crawlers en el descubrimiento eficiente de las rutas públicas de la aplicación web.
5. **Optimización de Rendimiento y Recursos Estáticos:** Uso de elementos gráficos ligeros en formato vectorial SVG (como el favicon institucional) y empaquetado optimizado con Vite para garantizar tiempos de carga mínimos, mejorando Core Web Vitals y la experiencia de indexación móvil.


# Estructura del Proyecto 
  
FRONTED-sistema/
├── public/
│   ├── abonados.json
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── componentes/
│   │   └── routes/
│   │       ├── Footer.jsx
│   │       ├── Itemtarifas.jsx
│   │       ├── Navbar.jsx
│   │       └── Rutas.jsx
│   ├── datos/
│   │   └── abonados.json
│   ├── imagenes/
│   │   └── imagen1.avif
│   ├── paginas/
│   │   ├── Abonados.jsx
│   │   ├── Controledeacceso.jsx
│   │   ├── Error404.jsx
│   │   ├── Espaciosysectores.jsx
│   │   ├── Paneldecontrol.jsx
│   │   ├── Pantalladeinicio.jsx
│   │   └── tarifas.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
└── package.json

 # Instrucciones para su instalacion y ejecucion local
  
  .*Clonar el Repositorio*
     git clone <https://github.com/luciaacordoba17/sistema-de-estacionamiento-frontend.git>

    npm install 

    npm run dev
