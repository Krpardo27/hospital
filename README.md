## Descripción del código

Este archivo contiene un ejemplo de **programación funcional** en JavaScript. La función principal, `calcularCosto`, calcula el costo total de una serie de consultas a partir del precio de cada consulta.

### Detalles del código

```javascript
const calcularCosto = (precioConsulta) => (numeroConsultas) =>
  precioConsulta * numeroConsultas;

const costoConsulta = calcularCosto(12990);
const costoTotal = costoConsulta(5);

Explicación
calcularCosto(precioConsulta): Función que recibe el precio de la consulta y devuelve una función que calcula el costo total multiplicando por el número de consultas.
costoConsulta(5): Calcula el costo de 5 consultas a un precio de 12990.
```

```javascript
const form = document.getElementById("form-contacto");
const mensaje = document.getElementById("mensaje-confirmacion");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  mensaje.textContent = "Formulario enviado con éxito.";
});

const eventoPaciente = new Event("nuevoPaciente");
document.addEventListener("nuevoPaciente", () => {
  console.log("Un nuevo paciente ha llegado.");
});
document.dispatchEvent(eventoPaciente);

async function obtenerDoctores() {
  try {
    const response = await fetch("listado-doctores.json");
    if (!response.ok) throw new Error("Error al obtener datos");
    const datos = await response.json();
    console.log(datos);
  } catch (error) {
    console.error("Error:", error.message);
  }
}
obtenerDoctores();

Explicación
Eventos: Se maneja el envío del formulario y un evento personalizado nuevoPaciente que se escucha y se dispara en el documento.
Asincronía: Se utiliza async/await con fetch para obtener datos de forma asíncrona desde un archivo JSON.
Resultado
Muestra un mensaje de confirmación al enviar el formulario.
Imprime un mensaje en consola cuando se dispara el evento nuevoPaciente.
Muestra los datos de doctores obtenidos desde el archivo JSON.
```
