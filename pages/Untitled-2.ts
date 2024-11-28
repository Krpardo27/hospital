
fetch('listado-doctores.json')  
  .then(response => response.json())  // Convierte la respuesta a un objeto JSON
  .then(data => {
  
    // const doctor = data.doctores.find(doc => doc.nombre === doc.nombre);
    const doctor = data.doctores[0];
    
    // Desestructuramos las propiedades del doctor
    const { nombre, especialidad, experiencia, disponibilidad } = doctor;

    const doctoresClonados = JSON.parse(JSON.stringify(doctor));
    doctoresClonados[0].nombre = "Dr. Ana Pérez Gómez"; 
    // Mostrar la información en la consola
    console.log(`Doctor: ${nombre}`);
    console.log(`Especialidad: ${especialidad}`);
    console.log(`Años de experiencia: ${experiencia}`);
    console.log(`Disponibilidad: ${disponibilidad}`);
    
    // Mostrar la información en la interfaz web (en un div con id "doctor-info")
    document.getElementById('doctor-info').innerHTML = `
      <h2>${nombre}</h2>
      <p><strong>Especialidad:</strong> ${especialidad}</p>
      <p><strong>Años de experiencia:</strong> ${experiencia}</p>
      <p><strong>Disponibilidad:</strong> ${disponibilidad}</p>
    `;
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });


// Clonación del objeto doctores usando JSON.parse() y JSON.stringify()
// let objetoOriginal = { nombre: "Pedro", edad: 30 };
// let objetoClonado = JSON.parse(JSON.stringify(objetoOriginal));
// console.log(objetoClonado); // { nombre: "Pedro", edad: 30 }

// const doctoresClonados = JSON.parse(JSON.stringify(doctores));
// doctoresClonados[0].nombre = "Dr. Ana Pérez Gómez";  // Modificación en la copia



fetch('servicios-doctores')  
  .then(response => response.json())  // Convierte la respuesta a un objeto JSON
  .then(data => {
  
    // const doctor = data.doctores.find(doc => doc.nombre === doc.nombre);
    const servicioInfo = data.servicios[0];
    
    // Desestructuramos las propiedades del doctor
    const { servicio, tiempo } = servicioInfo;
    // Mostrar la información en la consola
    console.log(`Servicio: ${servicio}`);
    console.log(`Tiempo: ${tiempo}`);
    
  })
  .catch(error => {
    console.error('Error al cargar el archivo JSON:', error);
  });


