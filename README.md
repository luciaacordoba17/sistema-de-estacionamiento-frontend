# Sistema de estacionamiento FRONTEND
 
 Trabajo Practico Desarrollado para la materia Programacion IV

# Las Tecnologias que utilizamos fueron:
. React (VITE)
. ReactBootstrap
. React Router DOM (Para la manipulacion del DOM virtual)
. JavaScript

# Estrategias SEO


* Etiquetas Semánticas y Títulos: Definición de un `<title>` optimizado con palabras clave orientadas a la búsqueda local y sectorial del sistema, acompañado de una `<meta name="description">` clara y concisa para los motores de búsqueda.
* Localización Geográfica y de Idioma: Configuración del atributo principal `lang="es"` en el elemento `<html>` para asegurar una correcta lectura e indexación regional (es-AR) por parte de web crawlers.
* Open Graph (OG Protocol): Incorporación de metadatos de Open Graph (`og:title`, `og:description`, `og:type`, `og:locale`) para garantizar una preestructuración visual limpia y controlada 
* Control de Indexación: Inclusión de directivas para motores de búsqueda (`robots: index, follow`) que permiten el rastreo y descubrimiento eficiente de las rutas públicas de la aplicación.


# Estructura del Proyecto 
  
FRONTED-sistema/
├── public/
├── src/
│   ├── assets/
│   ├── componentes/
│   │   ├── routes/
│   │   │   └── Rutas.jsx
│   │   ├── Footer.jsx
│   │   ├── Navbar.jsx
│   │   └── Itemtarifas.jsx
│   ├── pages/
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

