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
├── index.html # Página principal de la aplicación
├── README.md # Documentación del proyecto
├── styles.css # Archivo de estilos compilado
├── styles.css.map # Mapa de estilos CSS para depuración
├── page/ # Carpeta que contiene páginas HTML
│ ├── contacto.html # Página de contacto
│ └── equipo-medico.html # Página del equipo médico
└── assets/
├── img/ # Carpeta para las imágenes utilizadas en la aplicación
└── js/ # Carpeta que contiene scripts JavaScript
└── sass/
├── main.scss # Archivo principal que importa todos los parciales
├── main.scss.map # Mapa de SASS para depuración
├── abstracts/ # Carpeta para elementos abstractos
│ └── \_mixins.scss # Mixins para reutilización de estilos
│ └── \_variables.scss # Mixins para reutilización de estilos
├── components/ # Carpeta para componentes específicos
│ ├── \_buttonCita.scss # Estilos para el botón de cita
│ └── \_navegacion.scss # Estilos para la navegación
├── layout/ # Carpeta para la estructura de la página
│ ├── \_container.scss # Estilos para el contenedor principal
│ ├── \_footer.scss # Estilos para el pie de página
│ └── \_header.scss # Estilos para el encabezado
└── pages/ # Carpeta para estilos específicos de páginas
├── \_contacto.scss # Estilos para la página de contacto
├── \_equipo-medico.scss # Estilos para la página de equipo médico
└── \_home.scss # Estilos para la página principal

### Explicación del contenido:

1. **Creación y Manipulación de Objetos JSON**: Se describe cómo se crean y manipulan los objetos JSON, cómo se realiza la clonación, y cómo se pueden fusionar diferentes objetos JSON.

2. **Estructuras de Datos**:

   - **Arreglos**: Usados para almacenar y manipular la lista de doctores, permitiendo agregar, eliminar y buscar doctores eficientemente.
   - **Pilas**: Utilizadas para gestionar citas de pacientes, implementando el principio LIFO.
   - **Colas**: Utilizadas para gestionar el orden de llegada de los pacientes, implementando el principio FIFO.

3. **Algoritmos**:

   - **Búsqueda Lineal**: Se explica cómo se encuentra un doctor específico utilizando un algoritmo de búsqueda lineal.
   - **Ordenamiento**: Se describe el algoritmo de ordenamiento por experiencia de los doctores, utilizando QuickSort.

4. **Complejidad de los Algoritmos**: Se explica la complejidad de los algoritmos utilizados en términos de tiempo y espacio (Big-O).

