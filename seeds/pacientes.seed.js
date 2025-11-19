const Paciente = require('../models/paciente')

const pacientes = [
  // flia gonzalez
    {
    tipoDocumento: "DNI",
    dni: "30123456",
    nombre: "María",
    apellido: "González",
    fechaNacimiento: new Date("1975-03-12"),
    telefono: "1134567890",
    mail: "MariGonz@gmail.com.ar",
    direccion: "Aviador Patallo 2148",
    nroAfiliado: "10001-01",
    parentesco: "Titular",
    planMedico: "Plata"
  },
  {
    tipoDocumento: "DNI",
    dni: "38109876",
    nombre: "Lucía",
    apellido: "González",
    fechaNacimiento: new Date("2000-04-20"),
    telefono: "1112345679",
    mail: "LuciGonz@gmail.com.ar",
    direccion: "Aviador Patallo 2148",
    nroAfiliado: "10001-02",
    parentesco: "Hija",
    planMedico: "Oro"
  },
  {
    tipoDocumento: "DNI",
    dni: "27876543",
    nombre: "Martín",
    apellido: "González",
    fechaNacimiento: new Date("1970-05-05"),
    telefono: "1112345681",
    mail: "MartinGonz@gmail.com.ar",
    direccion: "Aviador Patallo 2148",
    nroAfiliado: "10001-03",
    parentesco: "Cónyuge",
    planMedico: "Plata"
  },
  // flia perez
  {
    tipoDocumento: "DNI",
    dni: "42504601",
    nombre: "Jorge",
    apellido: "Pérez",
    fechaNacimiento: new Date("2001-05-05"),
    telefono: "1112345121",
    mail: "JorgeP@gmail.com.ar",
    direccion: "Aviador Mellman 2074",
    nroAfiliado: "10002-01",
    parentesco: "Titular",
    planMedico: "Oro"
  },
  // flia silva
  {
    tipoDocumento: "DNI",
    dni: "40123456",
    nombre: "Federico",
    apellido: "Silva",
    fechaNacimiento: new Date("1982-01-15"),
    telefono: "1134123464",
    mail: "FedericoS@gmail.com.ar",
    direccion: "Calle Belgrano 321",
    nroAfiliado: "20001-01",
    parentesco: "Titular",
    planMedico: "Oro"
  },
  {
    tipoDocumento: "DNI",
    dni: "41234567",
    nombre: "Carolina",
    apellido: "Silva",
    fechaNacimiento: new Date("1985-06-20"),
    telefono: "1134123465",
    mail: "CarolinaS@gmail.com.ar",
    direccion: "Calle Belgrano 321",
    nroAfiliado: "20001-02",
    parentesco: "Cónyuge",
    planMedico: "Oro"
  },
  {
    tipoDocumento: "DNI",
    dni: "43098765",
    nombre: "Lucas",
    apellido: "Silva",
    fechaNacimiento: new Date("2010-09-12"),
    telefono: "1134123466",
    mail: "LucasS@gmail.com.ar",
    direccion: "Calle Belgrano 321",
    nroAfiliado: "20001-03",
    parentesco: "Hijo",
    planMedico: "Oro"
  },
  {
    tipoDocumento: "DNI",
    dni: "43123456",
    nombre: "Sofía",
    apellido: "Silva",
    fechaNacimiento: new Date("2013-03-05"),
    telefono: "1134123467",
    mail: "SofiaS@gmail.com.ar",
    direccion: "Calle Belgrano 321",
    nroAfiliado: "20001-04",
    parentesco: "Hija",
    planMedico: "Oro"
  },
  // flia medina
  {
    tipoDocumento: "DNI",
    dni: "50123456",
    nombre: "Alejandro",
    apellido: "Medina",
    fechaNacimiento: new Date("1978-02-10"),
    telefono: "1135123456",
    mail: "AlejandroM@gmail.com.ar",
    direccion: "Calle San Martín 450",
    nroAfiliado: "30001-01",
    parentesco: "Titular",
    planMedico: "Plata"
  },
  {
    tipoDocumento: "DNI",
    dni: "51234567",
    nombre: "Verónica",
    apellido: "Medina",
    fechaNacimiento: new Date("1980-07-22"),
    telefono: "1135123457",
    mail: "VeronicaM@gmail.com.ar",
    direccion: "Calle San Martín 450",
    nroAfiliado: "30001-02",
    parentesco: "Cónyuge",
    planMedico: "Plata"
  },
  {
    tipoDocumento: "DNI",
    dni: "53098765",
    nombre: "Martín",
    apellido: "Medina",
    fechaNacimiento: new Date("2008-11-05"),
    telefono: "1135123458",
    mail: "MartinM@gmail.com.ar",
    direccion: "Calle San Martín 450",
    nroAfiliado: "30001-03",
    parentesco: "Hijo",
    planMedico: "Plata"
  },
  {
    tipoDocumento: "DNI",
    dni: "53123456",
    nombre: "Camila",
    apellido: "Medina",
    fechaNacimiento: new Date("2012-04-18"),
    telefono: "1135123459",
    mail: "CamilaM@gmail.com.ar",
    direccion: "Calle San Martín 450",
    nroAfiliado: "30001-04",
    parentesco: "Hija",
    planMedico: "Plata"
  }
]

async function seedPacientes() {
    
    try {
        await Paciente.deleteMany({})
        await Paciente.insertMany(pacientes)
    } catch (error) {
        console.log('Error al insertar los pacientes', error.message)
    }
}


module.exports = {seedPacientes}