// Usamos fetch para cargar el archivo JSON desde la misma carpeta
fetch("listado-doctores.json")
  .then((response) => response.json()) // Convierte la respuesta en formato JSON
  .then((data) => {
    // Acceder al primer doctor directamente
    const { doctores } = data;
    const { nombre, especialidad, experiencia, disponibilidad } = doctores[0];

    console.log(`Nombre: ${nombre}`);
    console.log(`Especialidad: ${especialidad}`);
    console.log(`Experiencia: ${experiencia} años`);
    console.log(`Disponibilidad: ${disponibilidad}`);

    // Clonación del objeto JSON
    let doctoresClonados = JSON.parse(JSON.stringify(data));
    doctoresClonados.doctores[0].nombre = "Dr. Ana Pérez Gómez"; // Modificamos el nombre en el objeto clonado

    // Mostrar el objeto original y el clonado en la consola
    console.log("Objeto original:");
    console.log(data);

    console.log("Objeto clonado con modificación:");
    console.log(doctoresClonados);

    // Fusión de los doctores con otro JSON de servicios
    const servicios = [
      { nombre: "Consulta General", duración: "30 minutos" },
      { nombre: "Chequeo Cardiológico", duración: "45 minutos" },
    ];

    let fusionado = {
      doctores: [doctores[0]], // Solo incluir el primer doctor
      servicios: [...servicios],
    };

    // Seleccionamos el div donde mostraremos la información del primer doctor
    const doctorInfoDiv = document.getElementById("doctor-info");
    doctorInfoDiv.innerHTML = `
       <h2>Doctor: ${nombre}</h2>
       <p><strong>Especialidad:</strong> ${especialidad}</p>
       <p><strong>Experiencia:</strong> ${experiencia} años</p>
       <p><strong>Disponibilidad:</strong> ${disponibilidad}</p>
       <h3>Servicios ofrecidos:</h3>
       <ul>
         ${fusionado.servicios
           .map(
             (service) => `
           <li><strong>${service.nombre}</strong> - ${service.duración}</li>
         `
           )
           .join("")}
       </ul>
     `;

    // Mostrar el objeto fusionado en la consola
    console.log("Objeto fusionado (primer doctor + servicios):");
    console.log(fusionado);

    // Convertir el objeto JSON completo a una cadena con JSON.stringify()
    const doctoresJSON = JSON.stringify(data, null, 2);
    console.log("Objeto JSON como cadena:");
    console.log(doctoresJSON);

    doctores.push({
      nombre: "Nuevo Doctor",
      especialidad: "Dermatología",
      experiencia: 3,
      disponibilidad: "Martes y Jueves, 10:00 AM - 2:00 PM",
    });
    doctores.pop(); // Elimina el último elemento
    console.log(doctores);

    const encontrado = doctores.find((doc) => doc.nombre === "Dr. Ana Pérez");
    console.log(encontrado);

    const citas = [];
    citas.push("Cita 1");
    citas.push("Cita 2");
    console.log(citas.pop()); // Atiende la última cita

    const pacientes = [];
    pacientes.push("Paciente 1");
    pacientes.push("Paciente 2");
    console.log(pacientes.shift()); // Atiende al primer paciente

    const buscarDoctor = (nombre) =>
      doctores.find((doc) => doc.nombre === nombre);
    console.log(buscarDoctor("Dra. María Rodríguez"));

    doctores.sort((a, b) => b.experiencia - a.experiencia);
    console.log(doctores);
  })
  .catch((error) => {
    console.error("Error al cargar el archivo JSON:", error);
  });

// Laboratorio 2
const calcularCosto = (precioConsulta) => (numeroConsultas) =>
  precioConsulta * numeroConsultas;

const costoConsulta = calcularCosto(12990); // Precio de cada consulta
const costoTotal = costoConsulta(5); // Número de consultas realizadas

// Formatear el resultado en formato CLP (Pesos Chilenos)
const costoTotalFormateado = costoTotal.toLocaleString("es-CL", {
  style: "currency",
  currency: "CLP",
});

console.log(`El costo total de las consultas es: ${costoTotalFormateado}`);

const calcularPromedioEspera = (tiemposEspera) => {
  const promedioMinutos =
    tiemposEspera.reduce((acc, tiempo) => acc + tiempo, 0) /
    tiemposEspera.length;
  const horas = Math.floor(promedioMinutos / 60);
  const minutos = Math.round(promedioMinutos % 60);
  return `Tiempo de espera: ${horas} horas y ${minutos} minutos`;
};

console.log(calcularPromedioEspera([15, 20, 30])); // Salida: "0 horas y 22 minutos"

const calcularHorasTotales = (horas, index = 0) => {
  if (index === horas.length) return 0;
  return horas[index] + calcularHorasTotales(horas, index + 1);
};
console.log(calcularHorasTotales([3, 4, 5, 2]));

const aplicarDescuento = (costo) => (descuento) => costo - costo * descuento;
const calcularCostoConDescuento = (costo) => aplicarDescuento(costo)(0.1);
console.log(calcularCostoConDescuento(150000));

class Doctor {
  constructor(nombre, especialidad, experiencia) {
    this.nombre = nombre;
    this.especialidad = especialidad;
    this._experiencia = experiencia;
  }
  get experiencia() {
    return this._experiencia;
  }
  set experiencia(valor) {
    if (valor < 0) throw new Error("La experiencia no puede ser negativa.");
    this._experiencia = valor;
  }
  mostrarInformacion() {
    return `Doctor ${this.nombre}, Especialidad: ${this.especialidad}, Experiencia:
 ${this.experiencia} años.`;
  }
}

//  Polimorfismo
class Cirujano extends Doctor {
  constructor(nombre, especialidad, experiencia, operaciones) {
    super(nombre, especialidad, experiencia);
    this.operaciones = operaciones;
  }
  mostrarInformacion() {
    return `Cirujano ${this.nombre}, Especialidad: ${this.especialidad}, Operaciones:
 ${this.operaciones}.`;
  }
}

const cirujano = new Cirujano("Carlos", "Cardiología", 10, 50);
console.log(cirujano.mostrarInformacion());
