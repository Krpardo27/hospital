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
