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

# Integración de Bootstrap y Modificaciones con SASS

Este proyecto utiliza **Bootstrap** para aprovechar su sistema de diseño responsivo, sus componentes y utilidades. Sin embargo, se ha integrado con **SASS** para personalizar y modificar sus estilos de manera más flexible y adaptada a las necesidades del proyecto.

A continuación, se describen los pasos para integrar Bootstrap en el proyecto y las modificaciones realizadas mediante SASS.

## Pasos para la Integración de Bootstrap

### 1. Instalación de Bootstrap

Bootstrap se ha instalado a través de **npm** para facilitar la integración con SASS y para poder personalizar las variables que ofrece el framework. La instalación se realiza con el siguiente comando:

### bash
npm install bootstrap

## Decisión sobre JavaScript Avanzado vs. TypeScript

Tras evaluar las necesidades del proyecto y las características de ambas tecnologías, se ha decidido **utilizar JavaScript avanzado** para el desarrollo de la página web del hospital.

### Razones para elegir JavaScript avanzado:

- **Simplicidad y rapidez**: El proyecto es una página web básica y no requiere la complejidad adicional que implica el uso de TypeScript, como la curva de aprendizaje o el paso de transpilación. JavaScript avanzado ofrece características modernas como **async/await**, **promesas** y **módulos**, que facilitan la escritura de código limpio y eficiente sin complicar el proceso de desarrollo.
  
- **Compatibilidad**: La mayoría de los navegadores modernos ya soportan las características avanzadas de JavaScript, por lo que no se anticipan problemas de compatibilidad. Esto garantiza que la página funcionará correctamente en una amplia gama de dispositivos y plataformas.

- **Requerimientos del proyecto**: El proyecto es relativamente simple, por lo que no se justifica el uso de un sistema de tipado estático como TypeScript. La flexibilidad de JavaScript es suficiente para manejar las interacciones y funcionalidades de la página sin complicaciones adicionales.

### Conclusión

**JavaScript avanzado** es la opción más adecuada para este proyecto, ya que permite un desarrollo rápido, es completamente compatible con los navegadores modernos y satisface las necesidades de una página web básica para el hospital, sin la sobrecarga de configurar un entorno de TypeScript.


## Integración de Prompts y Validación de Datos

### Prompts

El proyecto incluye formularios interactivos que utilizan **prompts** para obtener información del usuario, como el formulario de contacto. Los prompts permiten solicitar datos al usuario de manera sencilla y directa.

### Validación de Datos

La validación de los datos ingresados por el usuario se realiza mediante funciones JavaScript que aseguran que los datos sean correctos antes de enviarlos o procesarlos. A continuación, se detallan los pasos básicos para validar los datos:

1. **Validación de campos vacíos**: Se verifica que el usuario haya completado todos los campos obligatorios, como nombre, correo electrónico y mensaje.
2. **Validación de formato de correo electrónico**: Utilizamos una expresión regular para comprobar que el correo electrónico ingresado tenga un formato válido.
3. **Manejo de errores**: Si algún dato es incorrecto, se informa al usuario mediante un mensaje de error.

## Explicación del Scope de Variables y Uso de Operadores

### Scope de Variables

En el código JavaScript, el scope de las variables determina el alcance de su visibilidad y acceso. Existen dos tipos de scope:

1. **Scope global**: Las variables definidas fuera de funciones tienen un alcance global y son accesibles desde cualquier parte del código.
2. **Scope local**: Las variables definidas dentro de una función solo son accesibles dentro de esa función.

Es importante utilizar el scope adecuado para evitar errores y mejorar la mantenibilidad del código.

### Uso de Operadores

Se utilizan operadores básicos de JavaScript para realizar operaciones en los datos. Los operadores más comunes son:

- **Operadores de comparación**: ==, ===, !=, >, < (para comparar valores).

## Instrucciones sobre Cómo Usar el Debugger y Manejo de Errores con try/catch

### Usando el Debugger

Para depurar el código JavaScript, se puede utilizar las herramientas de desarrollo del navegador (DevTools). La consola de JavaScript te permitirá agregar **puntos de interrupción** (breakpoints) en el código para detener la ejecución y examinar el estado de las variables y los valores en tiempo real.

1. Abre las **Herramientas de Desarrollo** en tu navegador (usualmente con la tecla F12).
2. Ve a la pestaña **"Sources"**.
3. Coloca un **punto de interrupción** en una línea de código haciendo clic en el número de la línea.
4. Refresca la página y la ejecución se detendrá en el punto de interrupción, permitiéndote inspeccionar el valor de las variables.

### Manejo de Errores con `try/catch`

El manejo de errores es crucial para garantizar que el sitio web siga funcionando de manera adecuada incluso cuando ocurren errores inesperados. En este proyecto, utilizamos el bloque `try/catch` para capturar errores y mostrar mensajes apropiados al usuario
