// Obtener los datos del usuario
let nombre = prompt("Ingresa tu nombre:");
let email = prompt("Ingresa tu email:");
let telefono = prompt("Ingresa tu teléfono:");

let datosCorrectos = nombre + email + telefono;

function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

// Validación del email
if (email && validarEmail(email)) {
  alert("El email ingresado es válido.");
} else {
  alert("El email ingresado no es válido.");
}

// Validación del teléfono (solo números)

if (telefono.trim() === "") {
  alert("El teléfono ingresado no es válido. Debes ingresar solo números.");
  datosCorrectos = false;
} else {
  console.log("Teléfono válido:", telefono);
}

// Validación del nombre (no vacío)
if (nombre.trim() === "") {
  alert("El nombre no puede estar vacío.");
  datosCorrectos = false;
} else {
  console.log("Nombre:", nombre);
}

// Mostrar los datos o mensaje de error en la alerta
if (!datosCorrectos) {
  alert("Datos ingresados correctamente");
  console.log("Nombre:", nombre);
  console.log("Email:", email);
  console.log("Teléfono:", telefono);
} else {
  alert(
    "Datos incorrectos. Por favor, revisa los campos y vuelve a intentarlo."
  );
}
