document.addEventListener("DOMContentLoaded", (event) => {
  const htmlElement = document.documentElement;
  const switchElement = document.getElementById("darkModeSwitch");

  // Set the default theme to dark if no setting is found in local storage
  const currentTheme = localStorage.getItem("bsTheme") || "dark";
  htmlElement.setAttribute("data-bs-theme", currentTheme);
  switchElement.checked = currentTheme === "dark";

  switchElement.addEventListener("change", function () {
    if (this.checked) {
      htmlElement.setAttribute("data-bs-theme", "dark");
      localStorage.setItem("bsTheme", "dark");
    } else {
      htmlElement.setAttribute("data-bs-theme", "light");
      localStorage.setItem("bsTheme", "light");
    }
  });
});

// Función para cargar los datos del archivo JSON
// fetch("./doctores.json")
//   .then((response) => response.json()) // Convierte la respuesta en un objeto JSON
//   .then( doctores => {
//     // Ahora `data` ya es el objeto JSON (array)
//     console.log("Datos cargados correctamente:", data);

//     const listaDoctores = document.getElementById('lista-doctores');

//     // Recorremos el arreglo de doctores
//     doctores.forEach(function (elemento, indice) {
//       console.log(
//         `El nombre en el índice ${indice} es ${elemento.nombre} ${elemento.apellido}`
//       );
//       listaDoctores.innerHTML += "<h1>Doctor: " + elemento.nombre + "</h1>";
//     });
//   })
//   .catch((error) => {
//     console.error("Error al cargar los datos:", error);
//   });

// Usamos fetch para cargar el archivo JSON
fetch("servicios.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    return response.json(); // Convertir la respuesta a formato JSON
  })
  .then((servicios) => {
    // Verifica que los datos se han cargado correctamente
    console.log("Servicios cargados:", servicios);

    // Obtener el contenedor de la lista
    const listaServicios = document.getElementById("lista-servicios");

    // Comprobar si el contenedor existe
    if (!listaServicios) {
      console.error("No se encontró el elemento ul en el DOM");
      return;
    }

    // Crear una variable para acumular el HTML que se va a agregar a la lista
    let listaHTML = "";

    // Iterar sobre los servicios con forEach
    servicios.forEach((servicio) => {
      // Crear el contenido HTML para cada servicio
      listaHTML += `<li><h4>${servicio.nombre}: </h4> <p style="font-size: 16px; margin: 0px">${servicio.descripcion}</p>`;

      // Verificar si el servicio está disponible
      if (servicio.disponible) {
        // Agregar solo la descripción si el servicio está disponible
        listaHTML += `</li>`;
      } else {
        // Si no está disponible, agregar el mensaje "No Disponible"
        listaHTML += ` <p style="color: red; font-size: 0.9em; text-transform: uppercase; font-weight: bold;">No Disponible</p></li>`;
      }

      // Mostrar el servicio también en la consola
      console.log(
        `${servicio.nombre} está ${
          servicio.disponible ? "disponible" : "no disponible"
        }.`
      );
    });

    // Usamos innerHTML para agregar el contenido de la lista al contenedor
    listaServicios.innerHTML = listaHTML;
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

