# Ejercicio Práctico 1: Desarrollo de la Página Web de un Hospital

## Descripción del Proyecto

Este proyecto es una aplicación web diseñada para proporcionar información sobre un equipo médico y facilitar el contacto con los profesionales de salud. La aplicación tiene una interfaz intuitiva que permite a los usuarios navegar fácilmente entre las diferentes secciones, conocer al equipo médico y realizar consultas a través de un formulario de contacto.

## Instrucciones para Visualizar el Proyecto

Para visualizar el proyecto en un navegador, sigue estos pasos:

1. Descarga o clona el repositorio en tu máquina local.
2. Navega a la carpeta del proyecto.
3. Abre el archivo `index.html` en tu navegador preferido. Puedes hacerlo haciendo doble clic en el archivo o arrastrándolo a la ventana del navegador.

## Estructura de Carpetas y Archivos
/hospital
│
├── index.html                  # Página principal de la aplicación
├── README.md                   # Documentación del proyecto
├── styles.css                  # Archivo de estilos compilado
├── styles.css.map              # Mapa de estilos CSS para depuración
├── page/                       # Carpeta que contiene páginas HTML
│   ├── contacto.html           # Página de contacto
│   └── equipo-medico.html      # Página del equipo médico
└── assets/
    ├── img/                    # Carpeta para las imágenes utilizadas en la aplicación
    └── js/                     # Carpeta que contiene scripts JavaScript
└── sass/
    ├── main.scss               # Archivo principal que importa todos los parciales
    ├── main.scss.map           # Mapa de SASS para depuración
    ├── abstracts/              # Carpeta para elementos abstractos
    │   └── _mixins.scss         # Mixins para reutilización de estilos
    │   └── _variables.scss         # Mixins para reutilización de estilos
    ├── components/              # Carpeta para componentes específicos
    │   ├── _buttonCita.scss     # Estilos para el botón de cita
    │   └── _navegacion.scss      # Estilos para la navegación
    ├── layout/                  # Carpeta para la estructura de la página
    │   ├── _container.scss       # Estilos para el contenedor principal
    │   ├── _footer.scss          # Estilos para el pie de página
    │   └── _header.scss          # Estilos para el encabezado
    └── pages/                  # Carpeta para estilos específicos de páginas
        ├── _contacto.scss       # Estilos para la página de contacto
        ├── _equipo-medico.scss  # Estilos para la página de equipo médico
        └── _home.scss           # Estilos para la página principal


## Descripción modulación SASS
Modularización de Estilos
La modularización de los estilos se implementó utilizando SASS (Syntactically Awesome Style Sheets), lo que permite dividir los estilos en archivos parciales. Esto mejora la mantenibilidad del código, ya que cada archivo se encarga de un aspecto específico de los estilos de la aplicación. Además, se utilizaron media queries para asegurar que la aplicación sea responsiva y se adapte a diferentes tamaños de pantalla.

## Detalles estructura SASS
Se crearon nuevas carpetas, entre ellas, "modules", dos archivos SASS - _base.scss y _variables.scss. 

### 1. Variables
Se definen varias variables para facilitar la gestión de los colores y la tipografía:

### 2. Estilos Globales
Los estilos globales se aplican a todos los elementos para garantizar una apariencia coherente en toda la aplicación:
